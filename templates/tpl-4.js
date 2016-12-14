module.exports = {
    type     : "mobile",
    "name"   : "我的自定义模板",
    psdPath  : 'test',
    "bg"     : {
        "src"  : require("src/assets/temp/bg.png"),
        "style": {"height": "2018px", "backgroundColor": "#fff"}
    },
    "modules": [{
        "type" : "toShop",
        "alias": "店铺链接",
        "style": {"width": "192px", "height": "47px", "top": "14px", "left": "0"},
        "data" : {}
    }, {
        "type" : "toShop",
        "alias": "店铺链接",
        "style": {"width": "192px", "height": "47px", "top": "14px", "right": "0"},
        "data" : {}
    }, {
        "type" : "pic",
        "alias": "标题",
        "style": {"top": "1.088rem", "left": "1.5146666666666666rem"},
        "data" : {
            src: require("src/assets/temp/title.png")
        }
    }, {
        "type" : "drawTotal",
        "alias": "抽奖次数",
        "style": {"width": "260px", "height": "34px", "left": "241px", "top": "415px"},
        "data" : {
            "descStyle": {"fontSize": "24px", "color": "#fff"},
            "timeStyle": {"fontSize": "32px", "color": "#f3dc1c"}
        }
    }, {
        "type" : "myPrize",
        "alias": "我的奖品",
        "style": {"width": "90px", "height": "90px", "left": "536px", "top": "100px"},
        "data" : {}
    }, {
        "type" : "tasks",
        "alias": "抽奖任务",
        "style": {width: '717px', height: '84px', left: '12.087px', top: '108.98px'},
        data   : {
            position: 'auto',
            align   : 'center',
            children: [{
                "type" : "shopping",
                "alias": "加购",
                "style": {"width": "124px", "height": "50px", "top": "100px", "left": "0"},
                "data" : {
                    src: require('src/assets/temp/分享.png')
                }
            }, {
                "type" : "collect",
                "alias": "收藏",
                "style": {"width": "124px", "height": "50px", "top": "100px", "left": "50px"},
                "data" : {
                    src: require('src/assets/temp/分享.png')
                }
            }, {
                "type" : "share",
                "alias": "分享",
                "style": {"width": "124px", "height": "50px", "top": "100px", "left": "100px"},
                "data" : {
                    src: require('src/assets/temp/分享.png')
                }
            }, {
                "type" : "order",
                "alias": "下单",
                "style": {"width": "124px", "height": "50px", "top": "100px", "left": "150px"},
                "data" : {
                    src: require('src/assets/temp/分享.png')
                }
            }]
        }
    }, {
        "type" : "luckyList",
        "alias": "中奖名单",
        "style": {"width": "552px", "height": "205px", "top": "1370px", "left": "127px"},
        "data" : {"type": 2, "textStyle": {"fontSize": "24px", "color": "#333", "lineHeight": "2"}}
    }, {
        "type" : "rule",
        "alias": "游戏规则",
        "style": {"width": "634px", "height": "210px", "top": "1736px", "left": "63px"},
        "data" : {"type": 2, "textStyle": {"fontSize": "24px", "color": "#333", "lineHeight": "2"}}
    }]
}
