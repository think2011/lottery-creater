module.exports = {
    "name"   : "我的自定义模板",
    "bg"     : {
        "src"  : "//img.alicdn.com/imgextra/i4/92779311/TB2dWzlXBNkpuFjy0FaXXbRCVXa-92779311.jpg",
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
        "data" : {}
    }, {
        "type"    : "dial",
        "alias"   : "转盘",
        "children": [{
            "type" : "bg",
            "alias": "转盘背景",
            "style": {"width": "655px", "height": "655px", "top": "480px", "left": "45px"},
            "data" : {"src": "//img.alicdn.com/imgextra/i2/92779311/TB2Uc2lXCXlpuFjy0FeXXcJbFXa-92779311.png"}
        }, {
            "type" : "pointer",
            "alias": "指针(抽奖按钮)",
            "style": {"width": "302px", "height": "302px", "top": "660px", "left": "224px"},
            "data" : {"src": "//img.alicdn.com/imgextra/i2/92779311/TB2WBcYXtBopuFjSZPcXXc9EpXa-92779311.png"}
        }],
        "data"    : {
            "rotateType" : "bg",
            "prizes"     : [{"deg": 44}, {"deg": 90}, {"deg": 150}],
            "emptyPrizes": [{"deg": 359}]
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
        "type"    : "tasks",
        "alias"   : "抽奖任务",
        "children": [{
            "type" : "shopping",
            "alias": "加购",
            "style": {"width": "124px", "height": "46px", "top": "1186px", "left": "110px"},
            "data" : {}
        }, {
            "type" : "collect",
            "alias": "收藏",
            "style": {"width": "124px", "height": "46px", "top": "1186px", "left": "246px"},
            "data" : {}
        }, {
            "type" : "share",
            "alias": "分享",
            "style": {"width": "124px", "height": "46px", "top": "1186px", "left": "380px"},
            "data" : {}
        }, {
            "type" : "order",
            "alias": "下单",
            "style": {"width": "124px", "height": "46px", "top": "1186px", "left": "516px"},
            "data" : {}
        }]
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
