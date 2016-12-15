module.exports = {
    "name"   : "我的自定义模板",
    "bg"     : {
        "src"  : "//img.alicdn.com/imgextra/i2/92779311/TB2xgGwX0RopuFjSZFtXXcanpXa-92779311.png",
        "style": {"height": "1933px", "backgroundColor": "#fff"}
    },
    "modules": [{
        "type" : "toShop",
        "alias": "店铺链接",
        "style": {"width": "324px", "height": "100px", "top": "4px", "left": "0"},
        "data" : {}
    }, {
        "type"    : "dial",
        "alias"   : "转盘",
        "children": [{
            "type" : "bg",
            "alias": "转盘背景",
            "style": {"width": "615px", "height": "612px", "top": "294px", "left": "78px"},
            "data" : {"src": "//img.alicdn.com/imgextra/i2/92779311/TB2E460XrXlpuFjy1zbXXb_qpXa-92779311.png"}
        }, {
            "type" : "pointer",
            "alias": "指针(抽奖按钮)",
            "style": {"width": "290px", "height": "290px", "top": "458px", "left": "240px"},
            "data" : {"src": "//img.alicdn.com/imgextra/i1/92779311/TB2w7HOXChlpuFjSspkXXa1ApXa-92779311.png"}
        }],
        "data"    : {
            "rotateType" : "bg",
            "prizes"     : [{"deg": 44}, {"deg": 90}, {"deg": 150}],
            "emptyPrizes": [{"deg": 359}]
        }
    }, {
        "type" : "drawTotal",
        "alias": "抽奖次数",
        "style": {"width": "260px", "height": "30px", "left": "283px", "top": "911px"},
        "data" : {
            "descStyle": {"fontSize": "24px", "color": "#fff"},
            "timeStyle": {"fontSize": "32px", "color": "#fde15c"}
        }
    }, {
        "type" : "myPrize",
        "alias": "我的奖品",
        "style": {"width": "150px", "height": "150px", "left": "532px", "top": "294px"},
        "data" : {}
    }, {
        "type"    : "tasks",
        "alias"   : "抽奖任务",
        "children": [{
            "type" : "shopping",
            "alias": "加购",
            "style": {"width": "144px", "height": "53px", "top": "1073px", "left": "62px"},
            "data" : {}
        }, {
            "type" : "collect",
            "alias": "收藏",
            "style": {"width": "144px", "height": "53px", "top": "1073px", "left": "221px"},
            "data" : {}
        }, {
            "type" : "share",
            "alias": "分享",
            "style": {"width": "144px", "height": "53px", "top": "1073px", "left": "384px"},
            "data" : {}
        }, {
            "type" : "order",
            "alias": "下单",
            "style": {"width": "144px", "height": "53px", "top": "1073px", "left": "540px"},
            "data" : {}
        }]
    }, {
        "type" : "luckyList",
        "alias": "中奖名单",
        "style": {"width": "551px", "height": "208px", "top": "1267px", "left": "130px"},
        "data" : {"type": 2, "textStyle": {"fontSize": "24px", "color": "#fff", "lineHeight": "2"}}
    }, {
        "type" : "rule",
        "alias": "游戏规则",
        "style": {"width": "573px", "height": "246px", "top": "1629px", "left": "92px"},
        "data" : {"type": 2, "textStyle": {"fontSize": "24px", "color": "#fff", "lineHeight": "2"}}
    }]
}
