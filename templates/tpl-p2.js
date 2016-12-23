module.exports = {
    "type"   : "pc",
    "name"   : "中国传统节日",
    "bg"     : {
        "src"  : "https://img.alicdn.com/imgextra/i2/2406822118/TB2jWoIa3xlpuFjSszgXXcJdpXa_!!2406822118.jpg",
        "style": {"height": "1154px", "backgroundColor": "#fff"}
    },
    "psdPath": "test",
    "modules": [{
        "type" : "toShop",
        "alias": "店铺链接",
        "style": {"width": "172px", "height": "50px", "top": "64px", "left": "801px"},
        "data" : {}
    }, {
        "type" : "drawTotal",
        "alias": "抽奖次数",
        "style": {"width": "210px", "height": "50px", "left": "645px", "top": "543px"},
        "data" : {
            "descStyle": {"fontSize": "18px", "color": "#ffc100"},
            "timeStyle": {"fontSize": "36px", "color": "#ffffff"}
        }
    }, {
        "type"    : "dial",
        "alias"   : "转盘",
        "children": [
            {
                "type" : "bg",
                "alias": "背景",
                "style": {
                    "width" : "10.623999999999999rem",
                    "height": "11.989333333333333rem",
                    "top"   : "2.8586666666666667rem",
                    "left"  : "1.024rem"
                },
                "data" : {
                    "src": "https://img.alicdn.com/imgextra/i2/92779311/TB2Uc2lXCXlpuFjy0FeXXcJbFXa-92779311.png"
                }
            },
            {
                "type" : "canvas",
                "alias": "奖品",
                "style": {
                    "width" : "415px",
                    "height": "412.969px",
                    "top"   : "177px",
                    "left"  : "90px"
                },
                "data" : {}
            },
            {
                "type" : "pointer",
                "alias": "指针(抽奖按钮)",
                "style": {
                    "width" : "4.544rem",
                    "height": "3.6906666666666665rem",
                    "top"   : "5.930666666666666rem",
                    "left"  : "4.074666666666667rem",
                    "zIndex": 2
                },
                "data" : {
                    "src": "https://img.alicdn.com/imgextra/i3/2406822118/TB2M9d3bC0mpuFjSZPiXXbssVXa_!!2406822118.png"
                }
            }
        ],
        "data"    : {
            "type"        : "auto",
            "customConfig": {
                "rotateType" : "bg",
                "prizes"     : [
                    {
                        "deg": 44
                    },
                    {
                        "deg": 360
                    },
                    {
                        "deg": 150
                    }
                ],
                "emptyPrizes": [
                    {
                        "deg": 359
                    }
                ]
            },
            "autoConfig"  : {
                "rotateType": 2,
                "dialColors": [
                    "#F7DF2D",
                    "#FFC100"
                ],
                "fontColor" : [
                    "#B84807",
                    "#B84807"
                ],
                "prizesSrc" : "https://img.alicdn.com/imgextra/i2/92779311/TB2OkbxaghJc1FjSZFDXXbvnFXa-92779311.png",
                "prizesMap" : {
                    "REAL_STUFF"    : null,
                    "NONE"          : [
                        386,
                        5,
                        78,
                        70
                    ],
                    "SHOP_COUPON"   : [
                        539,
                        9,
                        112,
                        62
                    ],
                    "MOBILE_FLOW"   : [
                        710,
                        9,
                        116,
                        62
                    ],
                    "COIN"          : [
                        46,
                        1,
                        78,
                        78
                    ],
                    "ALIPAY_COUPON" : [
                        210,
                        4,
                        90,
                        72
                    ],
                    "THF"           : [
                        880,
                        9,
                        112,
                        62
                    ],
                    "LOTTERY_TICKET": [
                        1220,
                        9,
                        113,
                        63
                    ]
                },
                "prizes"    : []
            }
        }
    }, {
        "type" : "luckyList",
        "alias": "中奖名单",
        "style": {"width": "311px", "height": "175px", "top": "226px", "left": "642px", "zIndex": 0},
        "data" : {"type": 2, "textStyle": {"fontSize": "14.00px", "color": "#fff", "lineHeight": "2"}}
    }, {
        "type" : "rule",
        "alias": "游戏规则",
        "style": {"width": "888px", "height": "282px", "top": "685px", "right": "0", "zIndex": 0, "left": "47.5px"},
        "data" : {"type": 2, "textStyle": {"fontSize": "16px", "lineHeight": "1.5", "color": "#FCEF86"}}
    }, {
        "type" : "pic",
        "alias": "图片素材",
        "style": {"width": "321px", "height": "206px", "top": "10px", "left": "-21px", "zIndex": 11},
        "data" : {"src": "https://img.alicdn.com/imgextra/i4/2406822118/TB2uwCgbypnpuFjSZFIXXXh2VXa_!!2406822118.png"}
    }, {
        "type"    : "tasks",
        "alias"   : "抽奖任务",
        "style"   : {"width": "337px", "height": "103px", "left": "633px", "top": "457px", "zIndex": 10},
        "data"    : {
            "position": "auto",
            "align"   : "left",
            "children": [{
                "type" : "collect",
                "alias": "收藏",
                "style": {"width": "73px", "height": "80px", "top": "586px", "left": "291px"},
                "data" : {"src": "https://img.alicdn.com/imgextra/i1/2406822118/TB2ySB4br4npuFjSZFmXXXl4FXa_!!2406822118.png"}
            }, {
                "type" : "share",
                "alias": "分享",
                "style": {"width": "73px", "height": "86px", "top": "816px", "left": "589px"},
                "data" : {"src": "https://img.alicdn.com/imgextra/i2/2406822118/TB2VCB1bypnpuFjSZFkXXc4ZpXa_!!2406822118.png"}
            }, {
                "type" : "order",
                "alias": "下单",
                "style": {"width": "72px", "height": "81px", "top": "721px", "left": "563px"},
                "data" : {"src": "https://img.alicdn.com/imgextra/i4/2406822118/TB2S983bC0mpuFjSZPiXXbssVXa_!!2406822118.png"}
            }, {
                "type" : "praise",
                "alias": "好评",
                "style": {"width": "73px", "height": "74px", "top": "756px", "left": "687px"},
                "data" : {"src": "https://img.alicdn.com/imgextra/i1/2406822118/TB2WQoraYplpuFjSspiXXcdfFXa_!!2406822118.png"}
            }]
        },
        "children": null
    }, {
        "type" : "myPrize",
        "alias": "我的奖品",
        "style": {"width": "145px", "height": "50px", "top": "153px", "left": "800px", "zIndex": 10},
        "data" : {}
    }, {
        "type" : "pic",
        "alias": "图片素材",
        "style": {"width": "156px", "height": "132px", "top": "84px", "left": "219px", "zIndex": 11},
        "data" : {"src": "https://img.alicdn.com/imgextra/i3/2406822118/TB22v9kbCFmpuFjSZFrXXayOXXa_!!2406822118.png"}
    }]
}