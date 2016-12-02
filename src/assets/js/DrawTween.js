let TWEEN = window.TWEEN

export default class {
    constructor({multipleValue, startValue, endValue, startSpeed, loopSpeed, endSpeed, startEasing, loopEasing, endEasing, minTime}) {
        this.multipleValue = multipleValue
        this.startValue    = startValue
        this.endValue      = endValue
        this.startSpeed    = startSpeed
        this.loopSpeed     = loopSpeed
        this.endSpeed      = endSpeed
        this.startEasing   = startEasing
        this.loopEasing    = loopEasing
        this.endEasing     = endEasing
        this.minTime       = minTime

        this.loopTimer      = null
        this.updateCallback = null
        this.stopValue      = null
        this.stopCallback   = null
    }


    start(updateCallback) {
        let that            = this
        this.startTime      = Date.now()
        this.updateCallback = updateCallback

        this.startTween = new TWEEN.Tween({value: this.startValue, isStart: true})
            .to({value: this.endValue}, this.startSpeed)
            .easing(this.startEasing)
            .onUpdate(onUpdate)

        this.loopTween = new TWEEN.Tween({value: this.startValue, isLoop: true})
            .to({value: this.endValue}, this.loopSpeed)
            .repeat(Infinity)
            .easing(this.loopEasing)
            .onUpdate(onUpdate)

        this.startTween.chain(this.loopTween)
        this.startTween.start()

        ;
        // 启动定时器
        (function loop() {
            that.loopTimer = requestAnimationFrame(loop)
            TWEEN.update()
        })()

        function onUpdate() {
            updateCallback(this)
            that._checkStop(this)
        }
    }

    stop(value, callback) {
        this.stopValue    = value
        this.stopCallBack = callback
    }

    _clear() {
        this.stopValue      = null
        this.stopCallBack   = null
        this.updateCallback = null

        cancelAnimationFrame(this.loopTimer)
        TWEEN.removeAll()
    }

    _checkStop({isLoop, value}) {
        let that = this

        // 当前是循环,有stopValue, 以及超过了minTime, 执行结束动画, 不然 return
        if (!(isLoop && this.stopValue !== null && (Date.now() - this.startTime > this.minTime))) return

        let nextValue = this.multipleValue - (value % this.multipleValue) + value + this.stopValue

        // 提前计算下一次的值
        that.startValue = nextValue
        that.endValue   = nextValue + this.multipleValue

        this.loopTween.stop()
        new TWEEN.Tween({value: value, isLoop: true})
            .to({value: nextValue + this.multipleValue}, this.endSpeed)
            .easing(this.endEasing)
            .onUpdate(function () {
                that.updateCallback(this)
            })
            .onComplete(onComplete)
            .start()

        function onComplete() {
            setTimeout(() => {
                that.stopCallBack && that.stopCallBack()
                that._clear()
            }, 300)
        }
    }
}