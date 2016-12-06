module.exports = {
    bg     : {
        src   : '//img.alicdn.com/imgextra/i3/92779311/TB297o8XxlmpuFjSZPfXXc9iXXa-92779311.png',
        style: {height:'1108px',
          backgroundColor:"#fff"
        }
    },
    modules: [
        {
            "type" : "toShop",
            "alias": "店铺链接",
            "style": {
                "width" : "324px",
                "height": "100px",
                "top":"4px",
                "left":"0"
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
            "data" : {

            }
        },
        {
            "type"    : "dial",
            "alias"   : "转盘",
            "children": [
                {
                    "type" : "bg",
                    "alias": "转盘背景",
                    "style": {
                        "width" : "615px",
                        "height": "612px",
                        "top"   : "294px",
                        "left"  : "78px"
                    },
                    "data" : {
                        "src": "//img.alicdn.com/imgextra/i2/92779311/TB2E460XrXlpuFjy1zbXXb_qpXa-92779311.png"
                    }
                },
                {
                    "type" : "pointer",
                    "alias": "指针(抽奖按钮)",
                    "style": {
                        "width" : "290px",
                        "height": "290px",
                        "top"   : "458px",
                        "left"  : "240px"
                    },
                    "data" : {
                        "src": "//img.alicdn.com/imgextra/i1/92779311/TB2w7HOXChlpuFjSspkXXa1ApXa-92779311.png"
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
                "width" : "260px",
                "height": "30px",
                "left"  : "240px",
                "top"   : "910px"
            },
            "data" : {}
        },
        {
            "type" : "myPrize",
            "alias": "我的奖品",
            "style": {
                "width" : "150px",
                "height": "150px",
                "left"  : "532px",
                "top"   : "294px"
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
                      "width" : "144px",
                      "height": "53px",
                      "top"  : "1073px",
                      "left"  : "62px"
                    },
                    "data" : {}
                },
                {
                    "type" : "collect",
                    "alias": "收藏",
                    "style": {
                      "width" : "144px",
                      "height": "53px",
                      "top"  : "1073px",
                        "left"  : "221px"
                    },
                    "data" : {}
                },
                {
                    "type" : "share",
                    "alias": "分享",
                    "style": {
                      "width" : "144px",
                      "height": "53px",
                      "top"  : "1073px",
                        "left"  : "384px"
                    },
                    "data" : {}
                },
                {
                    "type" : "order",
                    "alias": "下单",
                    "style": {
                      "width" : "144px",
                      "height": "53px",
                      "top"  : "1073px",
                        "left"  : "540px"
                    },
                    "data" : {}
                }
            ]
        },
        {
            "type" : "luckyList",
            "alias": "中奖名单",
            "style": {
                "width" : "634px",
                "height": "210px",
                "top"   : "1376px",
                "left"  : "60px"
            },
            "data" : {
                "type": 2
            }
        },
        {
            "type" : "rule",
            "alias": "游戏规则",
            "style": {
              "width" : "634px",
              "height": "210px",
              "top"   : "1748px",
              "left"  : "60px"
            },
            "data" : {
                "type": 2
            }
        }
    ]
}
