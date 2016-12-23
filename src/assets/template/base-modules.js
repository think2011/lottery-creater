module.exports = [
    {
        "type" : "toShop",
        "alias": "店铺链接",
        "style": {"width": "192px", "height": "47px", "top": "14px", "left": "0"},
        "data" : {}
    },
    {
        "type" : "myPrize",
        "alias": "我的奖品",
        "style": {"width": "148px", "height": "47px", "top": "33px", "left": "0"},
        "data" : {}
    },
    {
        "type" : "pic",
        "alias": "图片素材",
        "style": {"width": "613px", "height": "155px", "top": "1.688rem", "left": "1.5146666666666666rem"},
        "data" : {"src": "https://img.alicdn.com/imgextra/i4/92779311/TB2MO4KawxlpuFjSszbXXcSVpXa-92779311.png"}
    }, {
        "type"    : "dial",
        "alias"   : "转盘",
        "children": [{
            "type" : "bg",
            "alias": "背景",
            "style": {"width": "580px", "height": "580px", "top": "250px", "left": "85px"},
            "data" : {"src": "https://img.alicdn.com/imgextra/i2/92779311/TB2wfiiXCxjpuFjSszeXXaeMVXa-92779311.png"}
        }, {
            "type" : "canvas",
            "alias": "奖品",
            "style": {width: '516px', height: '516px', top: '282px', left: '116px'},
            "data" : {}
        }, {
            "type" : "pointer",
            "alias": "指针(抽奖按钮)",
            "style": {"width": "248px", "height": "248px", "top": "420px", "left": "251px", zIndex: 2},
            "data" : {"src": "https://img.alicdn.com/imgextra/i4/92779311/TB2l28iXS4mpuFjSZFOXXaUqpXa-92779311.png"}
        }],
        "data"    : {
            type        : 'auto',
            customConfig: {
                "rotateType" : "bg",
                "prizes"     : [{"deg": 44}, {"deg": 90}, {"deg": 150}],
                "emptyPrizes": [{"deg": 359}]
            },
            autoConfig  : {
                rotateType: 2,
                dialColors: ['#FE6869', '#FF8584'],
                fontColor : ['#fff', '#fff'],
                prizesSrc : 'https://img.alicdn.com/imgextra/i2/92779311/TB2OkbxaghJc1FjSZFDXXbvnFXa-92779311.png',
                prizesMap : {
                    REAL_STUFF    : null,
                    NONE          : [386, 5, 78, 70],
                    SHOP_COUPON   : [539, 9, 112, 62],
                    MOBILE_FLOW   : [710, 9, 116, 62],
                    COIN          : [46, 1, 78, 78],
                    ALIPAY_COUPON : [210, 4, 90, 72],
                    THF           : [880, 9, 112, 62],
                    LOTTERY_TICKET: [1220, 9, 113, 63]
                },
                prizes    : []
            }
        }
    }, {
        "type" : "drawTotal",
        "alias": "抽奖次数",
        "style": {"width": "300px", "height": "50px", "left": "225px", "top": "210px", "color": "#555"},
        "data" : {
            "descStyle": {"fontSize": "24px", "color": "#555"},
            "timeStyle": {"fontSize": "32px", "color": "#ff5c5d"}
        }
    }, {
        "type" : "tasks",
        "alias": "抽奖任务",
        "style": {"width": "750px", "height": "84px", "left": "0.5px", "top": "880px"},
        "data" : {
            "position": "auto", "align": "center", "children": [{
                "type" : "collect",
                "alias": "收藏",
                "style": {"width": "124px", "height": "50px", "top": "890px", "left": "180px"},
                "data" : {"src": "https://img.alicdn.com/imgextra/i4/92779311/TB2onNGawJkpuFjSszcXXXfsFXa-92779311.png"}
            }, {
                "type" : "share",
                "alias": "分享",
                "style": {"width": "124px", "height": "50px", "top": "890px", "left": "314px"},
                "data" : {"src": "https://img.alicdn.com/imgextra/i1/92779311/TB2ol0laUlnpuFjSZFjXXXTaVXa-92779311.png"}
            }, {
                "type" : "order",
                "alias": "下单",
                "style": {"width": "124px", "height": "52px", "top": "890px", "left": "446px"},
                "data" : {"src": "https://img.alicdn.com/imgextra/i1/92779311/TB2BPJkaSVmpuFjSZFFXXcZApXa-92779311.png"}
            }, {
                "type" : "praise",
                "alias": "好评",
                "style": {"width": "124px", "height": "52px", "top": "890px", "left": "579px"},
                "data" : {"src": "https://img.alicdn.com/imgextra/i1/92779311/TB2yCJsaHBmpuFjSZFuXXaG_XXa-92779311.png"}
            }
            ]
        }
    }, {
        "type" : "luckyList",
        "alias": "中奖名单",
        "style": {"width": "411px", "height": "47px", "top": "967px", "left": "241px"},
        "data" : {"type": 1, "textStyle": {"fontSize": "20px", "color": "#fff"}}
    }, {
        "type" : "rule",
        "alias": "游戏规则",
        "style": {"width": "119px", "height": "47px", "top": "33px", "right": "0"},
        "data" : {"type": 1, "textStyle": {"fontSize": "24px", "lineHeight": "1.5", "color": "#FCEF86"}}
    }]

