let TWEEN = window.TWEEN

export default class {
    constructor({slowLoopFn, multipleValue, startSpeed, loopSpeed, endSpeed, startEasing, loopEasing, endEasing, minTime}) {
        this.slowLoopFn    = slowLoopFn
        this.multipleValue = multipleValue
        this.startValue    = 0
        this.endValue      = this.multipleValue
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
        this.stopSlowLoop()

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

        return this
    }

    startSlowLoop() {
        let that = this

        if (!this.slowLoopFn) return

        this.slowLoopTween = new TWEEN.Tween({value: this.startValue, isSlowLoop: true})
            .to({value: this.endValue}, 10000)
            .repeat(Infinity)
            .easing(TWEEN.Easing.Linear.None)
            .onUpdate(function () {
                that.slowLoopFn(this)
                that.lastValue = this.value
            })
            .start()

        ;
        // 启动定时器
        (function loop() {
            that.loopTimer = requestAnimationFrame(loop)
            TWEEN.update()
        })()

        return this
    }

    stopSlowLoop() {
        this._clear()
        if (this.slowLoopTween) this.slowLoopTween.stop()
    }

    /**
     * 停止
     * @param value 角度
     * @param callback 完全停止cb
     * @param nearCallback 快要停止cb
     */
    stop(value, callback, nearCallback) {
        this.stopValue    = value
        this.stopCallBack = callback
        this.nearCallback = nearCallback

        return this
    }

    _clear() {
        // 提前计算下一次的值
        this.startValue = this.lastValue || this.startValue
        this.endValue   = this.startValue + this.multipleValue

        cancelAnimationFrame(this.loopTimer)
        TWEEN.removeAll()
    }

    _checkStop({isLoop, value}) {
        let that = this

        // 当前是循环,有stopValue, 以及超过了minTime, 执行结束动画, 不然 return
        if (!(isLoop && this.stopValue !== null && (Date.now() - this.startTime > this.minTime))) return

        let lastValue = this.lastValue = this.multipleValue - (value % this.multipleValue) + value + this.stopValue

        this.loopTween.stop()
        new TWEEN.Tween({value: value, isLoop: true})
            .to({value: lastValue + this.multipleValue}, this.endSpeed)
            .easing(this.endEasing)
            .onUpdate(function () {
                that.updateCallback(this)
            })
            .onComplete(onComplete)
            .start()

        let nearEndSpeed = this.endSpeed - 800
        setTimeout(() => {
            that.nearCallback && that.nearCallback()
        }, nearEndSpeed)

        function onComplete() {
            setTimeout(() => {
                that._clear()
                that.stopCallBack && that.stopCallBack()
            }, 300)
        }
    }
}