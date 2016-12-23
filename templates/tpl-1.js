module.exports = {
    "type"   : "mobile",
    "name"   : "",
    "bg"     : {
        "src"  : "https://img.alicdn.com/imgextra/i1/92779311/TB2ugxMarRkpuFjSspmXXc.9XXa-92779311.jpg",
        "style": {
            "height"         : "1108px",
            "backgroundColor": "#85b746"
        }
    },
    "psdPath": "/test",
    "modules": [
        {
            "type" : "myPrize",
            "alias": "我的奖品",
            "style": {
                "width" : "3.1573333333333333rem",
                "height": "1.0026666666666668rem",
                "top"   : "0.704rem",
                "left"  : "0"
            },
            "data" : {}
        },
        {
            "type" : "pic",
            "alias": "标题",
            "style": {
                "width" : "13.077333333333334rem",
                "height": "3.306666666666667rem",
                "top"   : "1.688rem",
                "left"  : "1.5146666666666666rem"
            },
            "data" : {
                "src": "https://img.alicdn.com/imgextra/i4/92779311/TB2MO4KawxlpuFjSszbXXcSVpXa-92779311.png"
            }
        },
        {
            "type"    : "dial",
            "alias"   : "转盘",
            "children": [
                {
                    "type" : "bg",
                    "alias": "背景",
                    "style": {
                        "width" : "12.373333333333333rem",
                        "height": "12.373333333333333rem",
                        "top"   : "5.333333333333334rem",
                        "left"  : "1.8133333333333332rem"
                    },
                    "data" : {
                        "src": "https://img.alicdn.com/imgextra/i2/92779311/TB2wfiiXCxjpuFjSszeXXaeMVXa-92779311.png"
                    }
                },
                {
                    "type" : "canvas",
                    "alias": "奖品",
                    "style": {
                        "width" : "11.008rem",
                        "height": "11.008rem",
                        "top"   : "6.016rem",
                        "left"  : "2.474666666666667rem"
                    },
                    "data" : {}
                },
                {
                    "type" : "pointer",
                    "alias": "指针(抽奖按钮)",
                    "style": {
                        "width" : "5.290666666666667rem",
                        "height": "5.290666666666667rem",
                        "top"   : "8.959999999999999rem",
                        "left"  : "5.354666666666667rem",
                        "zIndex": 2
                    },
                    "data" : {
                        "src": "https://img.alicdn.com/imgextra/i4/92779311/TB2l28iXS4mpuFjSZFOXXaUqpXa-92779311.png"
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
                            "deg": 90
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
                        "#FE6869",
                        "#FF8584"
                    ],
                    "fontColor" : [
                        "#fff",
                        "#fff"
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
                "height": "0.64rem",
                "left"  : "4.8rem",
                "top"   : "4.4799999999999995rem",
                "color" : "#555"
            },
            "data" : {
                "descStyle": {
                    "fontSize": "0.512rem",
                    "color"   : "#0e94ac"
                },
                "timeStyle": {
                    "fontSize": "0.6826666666666668rem",
                    "color"   : "#ff5c5d"
                }
            }
        },
        {
            "type" : "tasks",
            "alias": "抽奖任务",
            "style": {
                "width" : "16rem",
                "height": "1.7920000000000003rem",
                "left"  : "0rem",
                "top"   : "18.773333333333333rem"
            },
            "data" : {
                "position": "auto",
                "align"   : "center",
                "children": [
                    {
                        "type" : "share",
                        "alias": "分享",
                        "style": {
                            "width" : "2.6453333333333333rem",
                            "height": "1.0666666666666667rem",
                            "top"   : "18.986666666666668rem",
                            "left"  : "6.698666666666666rem"
                        },
                        "data" : {
                            "src": "https://img.alicdn.com/imgextra/i1/92779311/TB2ol0laUlnpuFjSZFjXXXTaVXa-92779311.png"
                        }
                    },
                    {
                        "type" : "order",
                        "alias": "下单",
                        "style": {
                            "width" : "2.6453333333333333rem",
                            "height": "1.1093333333333333rem",
                            "top"   : "18.986666666666668rem",
                            "left"  : "9.514666666666667rem"
                        },
                        "data" : {
                            "src": "https://img.alicdn.com/imgextra/i1/92779311/TB2BPJkaSVmpuFjSZFFXXcZApXa-92779311.png"
                        }
                    },
                    {
                        "type" : "praise",
                        "alias": "好评",
                        "style": {
                            "width" : "2.6453333333333333rem",
                            "height": "1.1093333333333333rem",
                            "top"   : "18.986666666666668rem",
                            "left"  : "12.352rem"
                        },
                        "data" : {
                            "src": "https://img.alicdn.com/imgextra/i1/92779311/TB2yCJsaHBmpuFjSZFuXXaG_XXa-92779311.png"
                        }
                    }
                ]
            }
        },
        {
            "type" : "luckyList",
            "alias": "中奖名单",
            "style": {
                "width" : "8.768rem",
                "height": "1.0026666666666668rem",
                "top"   : "20.62933333333333rem",
                "left"  : "5.141333333333334rem"
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
            "type" : "rule",
            "alias": "游戏规则",
            "style": {
                "width" : "2.538666666666667rem",
                "height": "1.0026666666666668rem",
                "top"   : "0.704rem",
                "right" : "0"
            },
            "data" : {
                "type"     : 1,
                "textStyle": {
                    "fontSize"  : "0.512rem",
                    "lineHeight": "1.5",
                    "color"     : "#FCEF86"
                }
            }
        }
    ]
}