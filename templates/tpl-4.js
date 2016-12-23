module.exports = {
    "type"   : "mobile",
    "name"   : "",
    "bg"     : {
        "src"  : "https://img.alicdn.com/imgextra/i3/2406822118/TB2ohOBbEhnpuFjSZFEXXX0PFXa_!!2406822118.jpg",
        "style": {
            "height"         : "1530px",
            "backgroundColor": "#85b746"
        }
    },
    "psdPath": "http://yunpan.taobao.com/s/VdAScrGy6j",
    "modules": [
        {
            "type" : "myPrize",
            "alias": "我的奖品",
            "style": {
                "width" : "3.15733rem",
                "height": "1.00267rem",
                "top"   : "0.08533333333333334rem",
                "left"  : "12.842666666666668rem"
            },
            "data" : {}
        },
        {
            "type"    : "dial",
            "alias"   : "转盘",
            "children": [
                {
                    "type" : "bg",
                    "alias": "背景",
                    "style": {
                        "width" : "13.973333333333333rem",
                        "height": "13.973333333333333rem",
                        "top"   : "10.197333333333333rem",
                        "left"  : "0.96rem"
                    },
                    "data" : {
                        "src": "https://img.alicdn.com/imgextra/i2/92779311/TB2Uc2lXCXlpuFjy0FeXXcJbFXa-92779311.png"
                    }
                },
                {
                    "type" : "canvas",
                    "alias": "奖品",
                    "style": {
                        "width" : "11.498666666666667rem",
                        "height": "11.584rem",
                        "top"   : "11.370666666666667rem",
                        "left"  : "2.2186666666666666rem"
                    },
                    "data" : {}
                },
                {
                    "type" : "pointer",
                    "alias": "指针(抽奖按钮)",
                    "style": {
                        "width" : "302px",
                        "height": "360px",
                        "top"   : "657.984px",
                        "left"  : "222px",
                        "zIndex": 2
                    },
                    "data" : {
                        "src": "https://img.alicdn.com/imgextra/i2/92779311/TB2WBcYXtBopuFjSZPcXXc9EpXa-92779311.png"
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
        },
        {
            "type" : "drawTotal",
            "alias": "抽奖次数",
            "style": {
                "width" : "6.4rem",
                "height": "1.0666666666666667rem",
                "left"  : "4.4159999999999995rem",
                "top"   : "4.117333333333333rem",
                "color" : "#555"
            },
            "data" : {
                "descStyle": {
                    "fontSize": "0.512rem",
                    "color"   : "#ffffff"
                },
                "timeStyle": {
                    "fontSize": "0.6826666666666668rem",
                    "color"   : "#fcef86"
                }
            }
        },
        {
            "type" : "luckyList",
            "alias": "中奖名单",
            "style": {
                "width" : "12.202666666666667rem",
                "height": "1.0666666666666667rem",
                "top"   : "24.04266666666667rem",
                "left"  : "1.8773333333333333rem"
            },
            "data" : {
                "type"     : 1,
                "textStyle": {
                    "fontSize": "0.42666666666666664rem",
                    "color"   : "#fff"
                }
            }
        },
        {
            "type" : "pic",
            "alias": "图片素材",
            "style": {
                "width" : "9.856rem",
                "height": "2.965333333333333rem",
                "top"   : "0.04266666666666667rem",
                "left"  : "2.816rem",
                "zIndex": 8
            },
            "data" : {
                "src": "https://img.alicdn.com/imgextra/i3/2406822118/TB2D3AYa3xlpuFjSszgXXcJdpXa_!!2406822118.png"
            }
        },
        {
            "type" : "pic",
            "alias": "图片素材",
            "style": {
                "width" : "9.301333333333334rem",
                "height": "2.0693333333333332rem",
                "top"   : "2.666666666666667rem",
                "left"  : "3.008rem",
                "zIndex": 8
            },
            "data" : {
                "src": "https://img.alicdn.com/imgextra/i3/2406822118/TB2XwKHbC8mpuFjSZFMXXaxpVXa_!!2406822118.png"
            }
        },
        {
            "type" : "rule",
            "alias": "游戏规则",
            "style": {
                "width" : "13.440000000000001rem",
                "height": "4.352rem",
                "top"   : "26.389333333333333rem",
                "right" : "0",
                "zIndex": 9,
                "left"  : "1.5146666666666666rem"
            },
            "data" : {
                "type"     : 2,
                "textStyle": {
                    "fontSize"  : "0.512rem",
                    "lineHeight": "1.5",
                    "color"     : "#06551c"
                }
            }
        },
        {
            "type" : "pic",
            "alias": "图片素材",
            "style": {
                "width" : "2.47467rem",
                "height": "1.81333rem",
                "top"   : "368px",
                "left"  : "170px",
                "zIndex": 10
            },
            "data" : {
                "src": "https://img.alicdn.com/imgextra/i2/2406822118/TB2JbCBbrlmpuFjSZFlXXbdQXXa_!!2406822118.gif"
            }
        }
    ]
}