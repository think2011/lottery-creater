module.exports = {
    "type"   : "mobile",
    "name"   : "",
    "bg"     : {
        "src"  : "https://img.alicdn.com/imgextra/i4/92779311/TB2Ij8EaNBmpuFjSZFsXXcXpFXa-92779311.jpg",
        "style": {
            "height"         : "1933px",
            "backgroundColor": "#fff"
        }
    },
    "psdPath": "",
    "modules": [
        {
            "type" : "toShop",
            "alias": "店铺链接",
            "style": {
                "width" : "6.912000000000001rem",
                "height": "2.1333333333333333rem",
                "top"   : "0.08533333333333334rem",
                "left"  : "0"
            },
            "data" : {}
        },
        {
            "type" : "pic",
            "alias": "标题",
            "style": {
                "width" : "13.440000000000001rem",
                "height": "4.330666666666667rem",
                "top"   : "1.8559999999999999rem",
                "left"  : "1.3226666666666667rem"
            },
            "data" : {
                "src": "https://img.alicdn.com/imgextra/i3/92779311/TB2a9FWaxXlpuFjSsphXXbJOXXa-92779311.png"
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
                        "width" : "10.751999999999999rem",
                        "height": "10.751999999999999rem",
                        "top"   : "7.338666666666667rem",
                        "left"  : "2.816rem"
                    },
                    "data" : {
                        "src": "https://img.alicdn.com/imgextra/i1/92779311/TB2wOxYaB0kpuFjSsziXXa.oVXa-92779311.png"
                    }
                },
                {
                    "type" : "canvas",
                    "alias": "奖品",
                    "style": {
                        "width" : "512px",
                        "height": "508px",
                        "top"   : "340px",
                        "left"  : "131px"
                    },
                    "data" : {}
                },
                {
                    "type" : "pointer",
                    "alias": "指针(抽奖按钮)",
                    "style": {
                        "width" : "6.1866666666666665rem",
                        "height": "6.1866666666666665rem",
                        "top"   : "9.770666666666667rem",
                        "left"  : "5.12rem",
                        "zIndex": 2
                    },
                    "data" : {
                        "src": "https://img.alicdn.com/imgextra/i1/92779311/TB2w7HOXChlpuFjSspkXXa1ApXa-92779311.png"
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
                        "#fff",
                        "#7D7AF7"
                    ],
                    "fontColor" : [
                        "#fff",
                        "#333333"
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
                "width" : "5.546666666666667rem",
                "height": "0.64rem",
                "left"  : "6.037333333333334rem",
                "top"   : "19.434666666666665rem"
            },
            "data" : {
                "descStyle": {
                    "fontSize": "0.512rem",
                    "color"   : "#fff"
                },
                "timeStyle": {
                    "fontSize": "0.6826666666666668rem",
                    "color"   : "#fde15c"
                }
            }
        },
        {
            "type" : "myPrize",
            "alias": "我的奖品",
            "style": {
                "width" : "3.2rem",
                "height": "3.2rem",
                "left"  : "11.349333333333334rem",
                "top"   : "6.272rem"
            },
            "data" : {}
        },
        {
            "type" : "tasks",
            "alias": "抽奖任务",
            "style": {
                "width" : "16rem",
                "height": "1.4933333333333334rem",
                "left"  : "0rem",
                "top"   : "22.869333333333334rem"
            },
            "data" : {
                "position": "auto",
                "align"   : "center",
                "children": [
                    {
                        "type" : "share",
                        "alias": "分享",
                        "style": {
                            "width" : "2.88rem",
                            "height": "1.216rem",
                            "top"   : "22.997333333333334rem",
                            "left"  : "6.613333333333334rem"
                        },
                        "data" : {
                            "src": "https://img.alicdn.com/imgextra/i4/92779311/TB2g7VGaNlmpuFjSZPfXXc9iXXa-92779311.png"
                        }
                    },
                    {
                        "type" : "order",
                        "alias": "下单",
                        "style": {
                            "width" : "2.88rem",
                            "height": "1.216rem",
                            "top"   : "22.997333333333334rem",
                            "left"  : "9.6rem"
                        },
                        "data" : {
                            "src": "https://img.alicdn.com/imgextra/i2/92779311/TB2PNXVaChlpuFjSspkXXa1ApXa-92779311.png"
                        }
                    },
                    {
                        "type" : "praise",
                        "alias": "好评",
                        "style": {
                            "width" : "2.88rem",
                            "height": "1.216rem",
                            "top"   : "22.997333333333334rem",
                            "left"  : "12.672rem"
                        },
                        "data" : {
                            "src": "https://img.alicdn.com/imgextra/i3/92779311/TB2OrB1ar8kpuFjy0FcXXaUhpXa-92779311.png"
                        }
                    }
                ]
            }
        },
        {
            "type" : "luckyList",
            "alias": "中奖名单",
            "style": {
                "width" : "11.754666666666667rem",
                "height": "4.437333333333333rem",
                "top"   : "27.029333333333334rem",
                "left"  : "2.7733333333333334rem"
            },
            "data" : {
                "type"     : 2,
                "textStyle": {
                    "fontSize"  : "0.512rem",
                    "color"     : "#fff",
                    "lineHeight": "2"
                }
            }
        },
        {
            "type" : "rule",
            "alias": "游戏规则",
            "style": {
                "width" : "12.224rem",
                "height": "5.247999999999999rem",
                "top"   : "34.751999999999995rem",
                "left"  : "1.9626666666666666rem"
            },
            "data" : {
                "type"     : 2,
                "textStyle": {
                    "fontSize"  : "0.512rem",
                    "color"     : "#fff",
                    "lineHeight": "2"
                }
            }
        }
    ]
}