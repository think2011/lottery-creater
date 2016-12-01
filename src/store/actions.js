import {convertRem} from '../assets/js/common'
import * as types from './mutation-types'

export default {
    initModule({commit, state}, modules) {
        modules.forEach((item) => {
            if (item.style) convertRem(item.style)

            if (item.children) {
                item.children.forEach((childItem) => {
                    if (childItem.style) convertRem(childItem.style)
                })
            }
        })

        commit(types.INIT_MODULE, {modules})
    },

    updateModule ({commit, state}, {module}) {
        if (module.style) {
            module.style = convertRem(module.style)
        }

        commit(types.UPDATE_MODULE, {module})
    },

    activeModule({commit, state}, {module}) {
        commit(types.SET_ACTIVE_MODULE, {module})
    },

    fetchRule({commit, state}) {
        if (!DEV_MODE) {
            $.doAjax({
                url    : 'act-data',
                data   : {
                    needRule: true,
                },
                success: function (res) {
                    commit(types.FETCH_RULE, res.data.description)
                }
            })
        }
    },

    fetchLucyList({commit, state}) {
        if (!DEV_MODE) {
            $.doAjax({
                url : "act-data",
                data: {
                    needWinner: true
                },
                mask: false
            })
                .then(function (res) {
                    if (!res.success) return

                    if (res.data && res.data.winners && res.data.winners.length) {
                        commit(types.FETCH_LUCKY_LIST, res.data.winners)
                    } else {
                        commit(types.FETCH_LUCKY_LIST, [])
                    }
                })
        }
    },

    followShop({commit, state}) {
        let act = state.act

        return new Promise((resolve, reject) => {
            if (act.attentionFlag) {
                act._fristAttentionFlag = false;
                return resolve()
            }

            $.tida.getUserNick({
                showLoading: false,
                success    : function (nick) {
                    commit(types.SET_USER_NICK, nick)

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
                }
            });
        })
    },

    drawLottery({commit, dispatch, state}) {
        if (!DEV_MODE) {
            return dispatch('followShop')
                .then(() => {
                    let data = {
                        nick         : state.nick,
                        fromNick     : state.fromNick,
                        giftIds      : state.gameData.prizes.map((item) => item.id),
                        attentionFlag: !!state.act._fristAttentionFlag
                    }

                    // 请求奖品
                    return $.doAjax({
                        url   : "grant",
                        data  : data,
                        method: 'POST',
                        mask  : false
                    });
                })
        }
    },



    doTask({commit, dispatch, state}, type){
        let that       = this
        let act        = state.act
        let gameDialog = window.gameDialog

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
                        commit(types.SET_DRAW_TOTAL, that.drawTotal + res.data.appendCount)
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

    checkTicket({commit, dispatch, state}) {
        if (state.gameData.drawTotal > 0) return true

        let act   = state.act
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
            dispatch('doTask', $(this).data('type'))
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
}