module.exports = {
    type     : 'mobile',
    "name"   : "我的自定义模板",
    "bg"     : {
        "src"  : "https://img.alicdn.com/imgextra/i1/92779311/TB2F38RaB0kpuFjSsziXXa.oVXa-92779311.jpg",
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
        "style": {"width": "750px", "height": "361px", "top": "70px", "left": "0"},
        "data" : {"src": "https://img.alicdn.com/imgextra/i3/92779311/TB2B2dSaxXkpuFjy0FiXXbUfFXa-92779311.png"}
    }, {
        "type"    : "dial",
        "alias"   : "转盘",
        "children": [{
            "type" : "bg",
            "alias": "背景",
            "style": {"width": "580px", "height": "580px", "top": "250px", "left": "85px"},
            "data" : {"src": "https://img.alicdn.com/imgextra/i2/92779311/TB2wfiiXCxjpuFjSszeXXaeMVXa-92779311.png"}
        }, {
            "type" : "pointer",
            "alias": "指针(抽奖按钮)",
            "style": {"width": "248px", "height": "248px", "top": "420px", "left": "251px", zIndex: 2},
            "data" : {"src": "https://img.alicdn.com/imgextra/i4/92779311/TB2l28iXS4mpuFjSZFOXXaUqpXa-92779311.png"}
        }, {
            "type" : "canvas",
            "alias": "奖品",
            "style": {width: '516px', height: '516px', top: '282px', left: '116px'},
            "data" : {}
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
        "style": {"width": "750px", "height": "60px", "left": "0.5px", "top": "1176px"},
        "data" : {
            "position": "auto", "align": "center", "children": [{
                "type" : "share",
                "alias": "分享",
                "style": {"width": "127px", "height": "49px", "top": "1185px", "left": "314px"},
                "data" : {"src": "https://img.alicdn.com/imgextra/i2/92779311/TB2QQpSawFkpuFjSspnXXb4qFXa-92779311.png"}
            }, {
                "type" : "order",
                "alias": "下单",
                "style": {"width": "127px", "height": "49px", "top": "1185px", "left": "446px"},
                "data" : {"src": "https://img.alicdn.com/imgextra/i2/92779311/TB2Ko4PaxdkpuFjy0FbXXaNnpXa-92779311.png"}
            }, {
                "type" : "praise",
                "alias": "好评",
                "style": {"width": "127px", "height": "49px", "top": "1185px", "left": "579px"},
                "data" : {"src": "https://img.alicdn.com/imgextra/i1/92779311/TB2pSFNaCXlpuFjy0FeXXcJbFXa-92779311.png"}
            }
            ]
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
