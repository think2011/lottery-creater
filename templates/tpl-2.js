module.exports = {
    "type": "mobile",
    "name": "",
    "bg": {
        "src": "https://img.alicdn.com/imgextra/i1/92779311/TB2F38RaB0kpuFjSsziXXa.oVXa-92779311.jpg",
        "style": {
            "height": "2018px",
            "backgroundColor": "#fff"
        }
    },
    "psdPath": "",
    "modules": [
        {
            "type": "toShop",
            "alias": "店铺链接",
            "style": {
                "width": "4.096rem",
                "height": "1.0026666666666668rem",
                "top": "0.2986666666666667rem",
                "left": "0"
            },
            "data": {}
        },
        {
            "type": "toShop",
            "alias": "店铺链接",
            "style": {
                "width": "4.096rem",
                "height": "1.0026666666666668rem",
                "top": "0.2986666666666667rem",
                "right": "0"
            },
            "data": {}
        },
        {
            "type": "pic",
            "alias": "标题",
            "style": {
                "width": "16rem",
                "height": "7.701333333333333rem",
                "top": "1.4933333333333334rem",
                "left": "0"
            },
            "data": {
                "src": "https://img.alicdn.com/imgextra/i3/92779311/TB2B2dSaxXkpuFjy0FiXXbUfFXa-92779311.png"
            }
        },
        {
            "type": "dial",
            "alias": "转盘",
            "children": [
                {
                    "type": "bg",
                    "alias": "背景",
                    "style": {
                        "width": "13.973333333333333rem",
                        "height": "13.973333333333333rem",
                        "top": "10.197333333333333rem",
                        "left": "0.96rem"
                    },
                    "data": {
                        "src": "https://img.alicdn.com/imgextra/i2/92779311/TB2Uc2lXCXlpuFjy0FeXXcJbFXa-92779311.png"
                    }
                },
                {
                    "type": "canvas",
                    "alias": "奖品",
                    "style": {
                        "width": "539px",
                        "height": "543px",
                        "top": "533px",
                        "left": "104px"
                    },
                    "data": {}
                },
                {
                    "type": "pointer",
                    "alias": "指针(抽奖按钮)",
                    "style": {
                        "width": "6.44267rem",
                        "height": "6.44267rem",
                        "top": "14.0373rem",
                        "left": "222px",
                        "zIndex": 2
                    },
                    "data": {
                        "src": "https://img.alicdn.com/imgextra/i2/92779311/TB2WBcYXtBopuFjSZPcXXc9EpXa-92779311.png"
                    }
                }
            ],
            "data": {
                "type": "auto",
                "customConfig": {
                    "rotateType": "bg",
                    "prizes": [
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
                "autoConfig": {
                    "rotateType": 2,
                    "dialColors": [
                        "#F7DF2D",
                        "#FFC100"
                    ],
                    "fontColor": [
                        "#B84807",
                        "#B84807"
                    ],
                    "prizesSrc": "https://img.alicdn.com/imgextra/i2/92779311/TB2OkbxaghJc1FjSZFDXXbvnFXa-92779311.png",
                    "prizesMap": {
                        "REAL_STUFF": null,
                        "NONE": [
                            386,
                            5,
                            78,
                            70
                        ],
                        "SHOP_COUPON": [
                            539,
                            9,
                            112,
                            62
                        ],
                        "MOBILE_FLOW": [
                            710,
                            9,
                            116,
                            62
                        ],
                        "COIN": [
                            46,
                            1,
                            78,
                            78
                        ],
                        "ALIPAY_COUPON": [
                            210,
                            4,
                            90,
                            72
                        ],
                        "THF": [
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
                    "prizes": []
                }
            }
        },
        {
            "type": "drawTotal",
            "alias": "抽奖次数",
            "style": {
                "width": "5.546666666666667rem",
                "height": "0.7253333333333333rem",
                "left": "5.141333333333334rem",
                "top": "8.853333333333333rem"
            },
            "data": {
                "descStyle": {
                    "fontSize": "0.512rem",
                    "color": "#fff"
                },
                "timeStyle": {
                    "fontSize": "0.6826666666666668rem",
                    "color": "#f3dc1c"
                }
            }
        },
        {
            "type": "myPrize",
            "alias": "我的奖品",
            "style": {
                "width": "1.92rem",
                "height": "1.92rem",
                "left": "11.434666666666667rem",
                "top": "2.1333333333333333rem"
            },
            "data": {}
        },
        {
            "type": "tasks",
            "alias": "抽奖任务",
            "style": {
                "width": "16rem",
                "height": "1.28rem",
                "left": "0rem",
                "top": "25.088rem"
            },
            "data": {
                "position": "auto",
                "align": "center",
                "children": [
                    {
                        "type": "share",
                        "alias": "分享",
                        "style": {
                            "width": "2.7093333333333334rem",
                            "height": "1.0453333333333332rem",
                            "top": "25.28rem",
                            "left": "6.698666666666666rem"
                        },
                        "data": {
                            "src": "https://img.alicdn.com/imgextra/i2/92779311/TB2QQpSawFkpuFjSspnXXb4qFXa-92779311.png"
                        }
                    },
                    {
                        "type": "order",
                        "alias": "下单",
                        "style": {
                            "width": "2.7093333333333334rem",
                            "height": "1.0453333333333332rem",
                            "top": "25.28rem",
                            "left": "9.514666666666667rem"
                        },
                        "data": {
                            "src": "https://img.alicdn.com/imgextra/i2/92779311/TB2Ko4PaxdkpuFjy0FbXXaNnpXa-92779311.png"
                        }
                    },
                    {
                        "type": "praise",
                        "alias": "好评",
                        "style": {
                            "width": "2.7093333333333334rem",
                            "height": "1.0453333333333332rem",
                            "top": "25.28rem",
                            "left": "12.352rem"
                        },
                        "data": {
                            "src": "https://img.alicdn.com/imgextra/i1/92779311/TB2pSFNaCXlpuFjy0FeXXcJbFXa-92779311.png"
                        }
                    }
                ]
            }
        },
        {
            "type": "luckyList",
            "alias": "中奖名单",
            "style": {
                "width": "11.776rem",
                "height": "4.373333333333333rem",
                "top": "29.226666666666667rem",
                "left": "2.7093333333333334rem"
            },
            "data": {
                "type": 2,
                "textStyle": {
                    "fontSize": "0.512rem",
                    "color": "#333",
                    "lineHeight": "2"
                }
            }
        },
        {
            "type": "rule",
            "alias": "游戏规则",
            "style": {
                "width": "13.525333333333332rem",
                "height": "4.4799999999999995rem",
                "top": "37.034666666666666rem",
                "left": "1.3439999999999999rem"
            },
            "data": {
                "type": 2,
                "textStyle": {
                    "fontSize": "0.512rem",
                    "color": "#333",
                    "lineHeight": "2"
                }
            }
        }
    ]
}