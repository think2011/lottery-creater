module.exports = {
    bg     : {
       /* height: 2018,*/
        src   : '//img.alicdn.com/imgextra/i4/92779311/TB2dWzlXBNkpuFjy0FaXXbRCVXa-92779311.jpg',
        style: {
          backgroundColor:"#fff"
        }
    },
    modules: [
        {
            "type" : "toShop",
            "alias": "店铺链接",
            "style": {
                "width" : "192px",
                "height": "47px",
                "top":"14px",
                "left":"0"
            },
            "data" : {}
        },
      {
        "type" : "toShop",
        "alias": "店铺链接",
        "style": {
          "width" : "192px",
          "height": "47px",
          "top":"14px",
          "right":"0"
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
                        "width" : "655px",
                        "height": "655px",
                        "top"   : "480px",
                        "left"  : "45px"
                    },
                    "data" : {
                        "src": "//img.alicdn.com/imgextra/i2/92779311/TB2Uc2lXCXlpuFjy0FeXXcJbFXa-92779311.png"
                    }
                },
                {
                    "type" : "pointer",
                    "alias": "指针(抽奖按钮)",
                    "style": {
                        "width" : "302px",
                        "height": "302px",
                        "top"   : "660px",
                        "left"  : "224px"
                    },
                    "data" : {
                        "src": "//img.alicdn.com/imgextra/i2/92779311/TB2WBcYXtBopuFjSZPcXXc9EpXa-92779311.png"
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
                "top"   : "415px"
            },
            "data" : {}
        },
        {
            "type" : "myPrize",
            "alias": "我的奖品",
            "style": {
                "width" : "90px",
                "height": "90px",
                "left"  : "536px",
                "top"   : "100px"
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
                      "height": "46px",
                      "top"   : "1186px",
                        "left"  : "110px"
                    },
                    "data" : {}
                },
                {
                    "type" : "collect",
                    "alias": "收藏",
                    "style": {
                      "width" : "124px",
                      "height": "46px",
                        "top"   : "1186px",
                        "left"  : "246px"
                    },
                    "data" : {}
                },
                {
                    "type" : "share",
                    "alias": "分享",
                    "style": {
                      "width" : "124px",
                      "height": "46px",
                      "top"   : "1186px",
                        "left"  : "380px"
                    },
                    "data" : {}
                },
                {
                    "type" : "order",
                    "alias": "下单",
                    "style": {
                      "width" : "124px",
                      "height": "46px",
                      "top"   : "1186px",
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
