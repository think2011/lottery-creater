module.exports = {
    "type": "pc",
    "name": "",
    "bg": {
        "src": "https://img.alicdn.com/imgextra/i4/2406822118/TB24ncta3RkpuFjy1zeXXc.6FXa_!!2406822118.jpg",
        "style": {
            "height": "1154px",
            "backgroundColor": "#fff"
        }
    },
    "psdPath": "test",
    "modules": [
        {
            "type": "toShop",
            "alias": "店铺链接",
            "style": {
                "width": "4.16rem",
                "height": "1.1306666666666667rem",
                "top": "0.36266666666666664rem",
                "left": "14.784rem"
            },
            "data": {}
        },
        {
            "type": "drawTotal",
            "alias": "抽奖次数",
            "style": {
                "width": "5.866666666666666rem",
                "height": "1.2586666666666666rem",
                "left": "13.568000000000001rem",
                "top": "3.3706666666666663rem"
            },
            "data": {
                "descStyle": {
                    "fontSize": "0.384rem",
                    "color": "#ffc100"
                },
                "timeStyle": {
                    "fontSize": "0.768rem",
                    "color": "#ffffff"
                }
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
                        "width": "10.623999999999999rem",
                        "height": "11.989333333333333rem",
                        "top": "2.8586666666666667rem",
                        "left": "1.024rem"
                    },
                    "data": {
                        "src": "https://img.alicdn.com/imgextra/i2/92779311/TB2Uc2lXCXlpuFjy0FeXXcJbFXa-92779311.png"
                    }
                },
                {
                    "type": "canvas",
                    "alias": "奖品",
                    "style": {
                        "width": "415px",
                        "height": "412.969px",
                        "top": "177px",
                        "left": "90px"
                    },
                    "data": {}
                },
                {
                    "type": "pointer",
                    "alias": "指针(抽奖按钮)",
                    "style": {
                        "width": "4.544rem",
                        "height": "3.6906666666666665rem",
                        "top": "5.930666666666666rem",
                        "left": "4.074666666666667rem",
                        "zIndex": 2
                    },
                    "data": {
                        "src": "https://img.alicdn.com/imgextra/i3/2406822118/TB2M9d3bC0mpuFjSZPiXXbssVXa_!!2406822118.png"
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
            "type": "myPrize",
            "alias": "我的奖品",
            "style": {
                "width": "3.60533rem",
                "height": "1.06667rem",
                "left": "16.192rem",
                "top": "5.8453333333333335rem"
            },
            "data": {}
        },
        {
            "type": "luckyList",
            "alias": "中奖名单",
            "style": {
                "width": "6.656000000000001rem",
                "height": "3.6053333333333333rem",
                "top": "6.250666666666667rem",
                "left": "13.056000000000001rem"
            },
            "data": {
                "type": 2,
                "textStyle": {
                    "fontSize": "0.2986666666666667rem",
                    "color": "#fff",
                    "lineHeight": "2"
                }
            }
        },
        {
            "type": "rule",
            "alias": "游戏规则",
            "style": {
                "width": "18.944rem",
                "height": "6.016rem",
                "top": "15.168000000000001rem",
                "right": "0",
                "zIndex": 0,
                "left": "1.3013333333333335rem"
            },
            "data": {
                "type": 2,
                "textStyle": {
                    "fontSize": "0.384rem",
                    "lineHeight": "1.5",
                    "color": "#FCEF86"
                }
            }
        },
        {
            "type": "pic",
            "alias": "图片素材",
            "style": {
                "width": "8.661333333333333rem",
                "height": "2.2826666666666666rem",
                "top": "0.7893333333333333rem",
                "left": "2.0266666666666664rem",
                "zIndex": 11
            },
            "data": {
                "src": "https://img.alicdn.com/imgextra/i2/2406822118/TB2Ilcta88kpuFjSspeXXc7IpXa_!!2406822118.png"
            }
        },
        {
            "type": "tasks",
            "alias": "抽奖任务",
            "style": {
                "width": "7.189333333333333rem",
                "height": "2.048rem",
                "left": "12.736rem",
                "top": "10.773333333333333rem",
                "zIndex": 10
            },
            "data": {
                "position": "auto",
                "align": "left",
                "children": [
                    {
                        "type": "collect",
                        "alias": "收藏",
                        "style": {
                            "width": "1.5573333333333335rem",
                            "height": "1.7066666666666666rem",
                            "top": "12.501333333333333rem",
                            "left": "6.208rem"
                        },
                        "data": {
                            "src": "https://img.alicdn.com/imgextra/i1/2406822118/TB2ySB4br4npuFjSZFmXXXl4FXa_!!2406822118.png"
                        }
                    },
                    {
                        "type": "share",
                        "alias": "分享",
                        "style": {
                            "width": "1.5573333333333335rem",
                            "height": "1.8346666666666667rem",
                            "top": "17.408rem",
                            "left": "12.565333333333333rem"
                        },
                        "data": {
                            "src": "https://img.alicdn.com/imgextra/i2/2406822118/TB2VCB1bypnpuFjSZFkXXc4ZpXa_!!2406822118.png"
                        }
                    },
                    {
                        "type": "order",
                        "alias": "下单",
                        "style": {
                            "width": "1.536rem",
                            "height": "1.7280000000000002rem",
                            "top": "15.381333333333334rem",
                            "left": "12.010666666666667rem"
                        },
                        "data": {
                            "src": "https://img.alicdn.com/imgextra/i4/2406822118/TB2S983bC0mpuFjSZPiXXbssVXa_!!2406822118.png"
                        }
                    },
                    {
                        "type": "praise",
                        "alias": "好评",
                        "style": {
                            "width": "1.5573333333333335rem",
                            "height": "1.5786666666666667rem",
                            "top": "16.128rem",
                            "left": "14.656rem"
                        },
                        "data": {
                            "src": "https://img.alicdn.com/imgextra/i1/2406822118/TB2WQoraYplpuFjSspiXXcdfFXa_!!2406822118.png"
                        }
                    }
                ]
            },
            "children": null
        }
    ]
}