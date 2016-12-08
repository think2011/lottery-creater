module.exports = {
    bg     : {
        src  : '//img.alicdn.com/imgextra/i4/92779311/TB2zrSjXwxlpuFjy0FoXXa.lXXa-92779311.jpg',
        style: {
            height         : '1108px',
            backgroundColor: "#85b746"
        }
    },
    modules: [
        {
            "type" : "toShop",
            "alias": "店铺链接",
            "style": {
                "width" : "148px",
                "height": "47px",
                "top"   : "33px",
                "left"  : "0"
            },
            "data" : {}
        },
        {
            "type" : "pic",
            "alias": "标题",
            "style": {
                "top" : "1.088rem",
                "left": "1.5146666666666666rem"
            },
            "data" : {}
        },
        {
            "type"    : "dial",
            "alias"   : "转盘",
            "children": [
                {
                    "type" : "bg",
                    "alias": "转盘背景",
                    "style": {
                        "width" : "580px",
                        "height": "580px",
                        "top"   : "250px",
                        "left"  : "85px"
                    },
                    "data" : {
                        "src": "//img.alicdn.com/imgextra/i2/92779311/TB2wfiiXCxjpuFjSszeXXaeMVXa-92779311.png"
                    }
                },
                {
                    "type" : "pointer",
                    "alias": "指针(抽奖按钮)",
                    "style": {
                        "width" : "248px",
                        "height": "248px",
                        "top"   : "420px",
                        "left"  : "251px"
                    },
                    "data" : {
                        "src": "//img.alicdn.com/imgextra/i4/92779311/TB2l28iXS4mpuFjSZFOXXaUqpXa-92779311.png"
                    }
                }
            ],
            "data"    : {
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
            }
        },
        {
            "type" : "drawTotal",
            "alias": "抽奖次数",
            "style": {
                "width" : "300px",
                "height": "30px",
                "left"  : "225px",
                "top"   : "210px",
                "color" : "#555"
            },
            "data" : {
                descStyle: {
                    fontSize: '28px',
                    color   : '#fff',
                },

                timeStyle: {
                    fontSize: '30px',
                    color   : 'skyblue',
                },
            }
        },
        {
            "type" : "myPrize",
            "alias": "我的奖品",
            "style": {
                "width" : "1.7066666666666666rem",
                "height": "1.0666666666666667rem"
            },
            "data" : {}
        },
        {
            "type"    : "tasks",
            "alias"   : "抽奖任务",
            "children": [
                {
                    "type" : "shopping",
                    "alias": "加购",
                    "style": {
                        "width" : "124px",
                        "height": "48px",
                        "top"   : "890px",
                        "left"  : "110px"
                    },
                    "data" : {}
                },
                {
                    "type" : "collect",
                    "alias": "收藏",
                    "style": {
                        "width" : "124px",
                        "height": "48px",
                        "top"   : "890px",
                        "left"  : "246px"
                    },
                    "data" : {}
                },
                {
                    "type" : "share",
                    "alias": "分享",
                    "style": {
                        "width" : "124px",
                        "height": "48px",
                        "top"   : "890px",
                        "left"  : "380px"
                    },
                    "data" : {}
                },
                {
                    "type" : "order",
                    "alias": "下单",
                    "style": {
                        "width" : "124px",
                        "height": "48px",
                        "top"   : "890px",
                        "left"  : "516px"
                    },
                    "data" : {}
                }
            ]
        },
        {
            "type" : "luckyList",
            "alias": "中奖名单",
            "style": {
                "width" : "400px",
                "height": "30px",
                "top"   : "980px",
                "left"  : "250px"
            },
            "data" : {
                "type": 1
            }
        },
        {
            "type" : "rule",
            "alias": "游戏规则",
            "style": {
                "width" : "119px",
                "height": "47px",
                "top"   : "33px",
                "right" : "0"
            },
            "data" : {
                "type"   : 1,
                textStyle: {
                    fontSize  : '200px',
                    lineHeight: '1.5',
                    color     : 'skyblue'
                }
            }
        }
    ]
}
