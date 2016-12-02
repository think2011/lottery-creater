import {mapActions, mapMutations, mapState, mapGetters} from 'vuex'

let gameDialog = GameDialog = window.gameDialog

export default {
    props: {
        module: Object,
        pStyle: Object,
        data  : Object,
    },

    data () {
        return {}
    },

    computed: {
        type() {
            return this.module.type
        },

        parentModule() {
            return this.module._isChild ? this.module._getParent() : null
        },

        ...mapState([
            'act',
            'nick',
            'fromNick',
            'sellerId',
            'dialData',
        ]),

        ...mapGetters([
            'shopUrl',
            'gameData',
            'prizes'
        ])
    },
    watch   : {
        module: {
            deep   : true,
            handler: function (val, oldVal) {
                this.$forceUpdate()
            }
        }
    },


    methods: {
        checkTicket() {
            let that = this
            if (this.gameData.drawTotal > 0) return true

            let act   = this.act
            let types = {
                shopping: act.extraCount.itemCartEnabled,
                collect : act.extraCount.itemFavorEnabled,
                share   : act.extraCount.shareEnabled
            }

            let noTasks    = true
            let dayStr     = act.taskTimesType === 'EACH_DAY' ? '今天的' : ''
            let $container = $('<div class="more-draw-time">\n    <ul class="tasks">\n    </ul>\n</div>')
            let $tasks     = $container.find('.tasks')
            let tasksHtml  = {
                collect : '<li><i data-type="collect" class="pull-right collect">立即收藏 </i>收藏宝贝获得机会</li>',
                shopping: '<li><i data-type="shopping" class="pull-right shopping">加购物车 </i>加购物车获得机会</li>',
                share   : '<li><i data-type="share" class="pull-right share">立即分享 </i>分享好友获得机会</li>',
            }

            for (let p in types) {
                if (!types.hasOwnProperty(p)) continue;

                if (types[p]) {
                    noTasks = false
                    $tasks.append(tasksHtml[p])
                }
            }

            $container.on('click', 'i', function () {
                layer.closeAll()
                that.doTask($(this).data('type'))
            })

            if (noTasks) {
                $.alert(dayStr + "抽奖机会已经用完", function () {
                });
            } else {
                layer.open({
                    type     : 1,
                    className: 'lottery lottery-empty',
                    title    : '抽奖机会已用完',
                    content  : $container
                })
            }

            return false
        },

        doTask(type){
            let that = this
            let act  = that.act

            // TODO ZH 12/2/16 下单抽奖
            switch (type) {
                case 'shopping':
                case 'collect':
                    let params = $.extend({
                        id     : act.id,
                        bizType: act.bizType || 'Lottery'
                    }, type === 'shopping' ? act.extraCount.itemCartConfig : act.extraCount.itemFavorConfig)

                    gameDialog.doTask(type, params, function (res) {
                        if (res.data.appendCount) {
                            $.toast("成功增加" + res.data.appendCount + "次抽奖机会");
                        } else if (res.data.maxLimit && res.data.maxCount) {
                            $.toast("对不起, 最多只能奖励" + res.data.maxCount + "次抽奖机会");
                        }
                    })
                    break;

                case 'share':
                    gameDialog.share(act.actUrl, act.extraCount.shareConfig)
                    break;

                default:
                //
            }
        },

        showLotteryResult(data) {
            if (data.changeRemainCount !== false) {
                that.SET_DRAW_TOTAL(this.gameData.drawTotal + data.appendCount)
            }

            if (!data.resultType.match(/TOO_MUCH|FORBID/)) {
                this.fetchLucyList()
            }

            if (data.resultType === 'SUCCESS') {
                if (data.giftType == 'REAL_STUFF')
                    window.GAME_PARTICIPANT_ID = data.participantId;
                GameDialog.win(data.giftType, data.giftExtra, function () {
                }, {}, null, false);
            } else {
                GameDialog.lose(null, null, null, true);
            }
        },


        followShop() {
            let that = this
            let act  = this.act

            return new Promise((resolve, reject) => {
                if (act.attentionFlag) {
                    act._fristAttentionFlag = false;
                    return resolve()
                }

                $.tida.getUserNick({
                    showLoading: false,
                    success    : function (nick) {
                        that.SET_USER_NICK(nick)

                        $.doAjax({
                            url    : "attention",
                            data   : {nick: nick},
                            method : 'POST',
                            mask   : false,
                            success: function (rslt) {
                                if (rslt.success) {
                                    act._fristAttentionFlag = false;
                                    resolve();
                                } else {
                                    act._fristAttentionFlag = true;
                                    $.tida.followShop({
                                        sellerId: act.sellerId
                                    }, function (res) {
                                        if (res.success) {
                                            act.attentionFlag = true;
                                            resolve()
                                        } else {
                                            reject()
                                            $.alert("关注店铺失败，请重试");
                                        }
                                    });
                                }

                            }
                        });
                    },
                    failed     : function () {
                        $.alert("亲，识别您的身份失败，无法进行抽奖～～", function () {
                            document.location = document.location;
                        });
                        reject()
                    }
                });
            })
        },

        drawLottery() {
            let that = this

            return new Promise((resolve, reject) => {
                that.followShop()
                    .then(() => {
                        let data = {
                            nick         : this.nick,
                            fromNick     : this.fromNick,
                            attentionFlag: !!this.act._fristAttentionFlag
                        }

                        // 请求奖品
                        return $.doAjax({
                            url   : "grant",
                            data  : data,
                            method: 'POST',
                            mask  : false
                        });
                    })
                    .then(function (res) {
                        if (!res.success) {
                            return reject(res.errorMsg)
                        }

                        resolve(res.data)
                    })
                    .catch(function (err) {
                        $.alert(err || '系统繁忙, 请稍后重试')
                        reject()
                    })
            })
        },
        ...mapMutations([
            'SET_DRAW_TOTAL',
            'SET_USER_NICK'
        ]),
        ...mapActions([
            'fetchLucyList',
            'updateModule',
            'activeModule'
        ])
    },
}