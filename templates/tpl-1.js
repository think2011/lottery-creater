module.exports = {
    name   : '',
    psdPath: '下载测试而已',
    bg     : {
        src  : 'https://img.alicdn.com/imgextra/i3/92779311/TB2SLQmbxaJ.eBjSsziXXaJ_XXa-92779311.png',
        style: {
            height         : '1108px',
            backgroundColor: '#eee'
        }
    },
    modules: [{
        "type" : "toShop",
        "alias": "店铺链接",
        "style": {"width": "1.7066666666666666rem", "height": "1.0666666666666667rem"},
        "data" : {}
    }, {
        "type" : "pic",
        "alias": "标题",
        "style": {"top": "1.088rem", "left": "1.5146666666666666rem"},
        "data" : {"src": "https://img.alicdn.com/imgextra/i2/92779311/TB22cQobCiJ.eBjSspoXXcpMFXa-92779311.png"}
    }, {
        "type"    : "dial",
        "alias"   : "转盘",
        "children": [{
            "type"       : "bg",
            "alias"      : "转盘背景",
            "style"      : {
                "width" : "10.6667rem",
                "height": "10.6667rem",
                "top"   : "7.104000000000001rem",
                "left"  : "2.1546666666666665rem"
            },
            "data"       : {"src": "//img.alicdn.com/imgextra/i1/26914588/TB2CvXsXF95V1Bjy0FfXXXvlFXa-26914588.png"},
            "_isChild"   : true,
            "_parentType": "dial",
            "_alias"     : "转盘-转盘背景",
            "_editor"    : "dialEditor"
        }, {
            "type"       : "pointer",
            "alias"      : "指针(抽奖按钮)",
            "style"      : {"width": "3.43467rem", "height": "6.03733rem", "top": "9.152rem", "left": "5.696rem"},
            "data"       : {"src": "//img.alicdn.com/imgextra/i3/26914588/TB2XEFtaXHzQeBjSZFuXXanUpXa-26914588.png"},
            "_isChild"   : true,
            "_parentType": "dial",
            "_alias"     : "转盘-指针(抽奖按钮)",
            "_editor"    : "dialEditor"
        }],
        "data"    : {
            "rotateType" : "bg",
            "prizes"     : [{"deg": 44}, {"deg": 90}, {"deg": 150}],
            "emptyPrizes": [{"deg": 359}]
        }
    }, {
        "type" : "drawTotal",
        "alias": "抽奖次数",
        "style": {"width": "4.672rem", "height": "2.19733rem", "left": "0.9813333333333333rem", "top": "4.096rem"},
        "data" : {
            descStyle: {
                fontSize: '24px',
                color   : '#0C9EB5'
            },
            timeStyle: {
                fontSize: '28px',
                color   : '#FE696A'
            }
        }
    }, {
        "type" : "myPrize",
        "alias": "我的奖品",
        "style": {"width": "1.7066666666666666rem", "height": "1.0666666666666667rem"},
        "data" : {}
    }, {
        "type"    : "tasks",
        "alias"   : "抽奖任务",
        "children": [{
            "type"       : "shopping",
            "alias"      : "加购",
            "style"      : {
                "width" : "3.925333333333333rem",
                "height": "3.285333333333333rem",
                "top"   : "6.4rem",
                "left"  : "4.906666666666667rem"
            },
            "data"       : {},
            "_isChild"   : true,
            "_parentType": "tasks"
        }, {
            "type"       : "collect",
            "alias"      : "收藏",
            "style"      : {
                "width" : "1.7066666666666666rem",
                "height": "1.0666666666666667rem",
                "top"   : "6.826666666666666rem",
                "left"  : "2.7733333333333334rem"
            },
            "data"       : {},
            "_isChild"   : true,
            "_parentType": "tasks"
        }, {
            "type"       : "share",
            "alias"      : "分享",
            "style"      : {
                "width" : "3.84rem",
                "height": "1.0666666666666667rem",
                "top"   : "6.826666666666666rem",
                "left"  : "2.7733333333333334rem"
            },
            "data"       : {},
            "_isChild"   : true,
            "_parentType": "tasks"
        }, {
            "type"       : "order",
            "alias"      : "下单",
            "style"      : {
                "width" : "3.84rem",
                "height": "1.0666666666666667rem",
                "top"   : "6.826666666666666rem",
                "left"  : "2.7733333333333334rem"
            },
            "data"       : {},
            "_isChild"   : true,
            "_parentType": "tasks"
        }]
    }, {
        "type" : "luckyList",
        "alias": "中奖名单",
        "style": {
            "width" : "5.22667rem",
            "height": "1.152rem",
            "top"   : "4.714666666666667rem",
            "left"  : "10.133333333333333rem"
        },
        "data" : {"type": 1}
    }, {
        "type" : "rule",
        "alias": "游戏规则",
        "style": {
            "width" : "1.7066666666666666rem",
            "height": "1.0666666666666667rem",
            "left"  : "4.266666666666667rem"
        },
        "data" : {"type": 1}
    }]
}
