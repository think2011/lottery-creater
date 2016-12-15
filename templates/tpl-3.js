module.exports = {
    "name"   : "我的自定义模板",
    "bg"     : {
        "src"  : "https://img.alicdn.com/imgextra/i4/92779311/TB2Ij8EaNBmpuFjSZFsXXcXpFXa-92779311.jpg",
        "style": {"height": "1933px", "backgroundColor": "#fff"}
    },
    "modules": [{
        "type" : "toShop",
        "alias": "店铺链接",
        "style": {"width": "324px", "height": "100px", "top": "4px", "left": "0"},
        "data" : {}
    },{
      "type" : "pic",
      "alias": "标题",
      "style": {"width": "630px", "height": "203px","top": "87px", "left": "62px"},
      "data" : {"src": "https://img.alicdn.com/imgextra/i3/92779311/TB2a9FWaxXlpuFjSsphXXbJOXXa-92779311.png"}
    },  {
        "type"    : "dial",
        "alias"   : "转盘",
        "children": [{
            "type" : "bg",
            "alias": "转盘背景",
            "style": {"width": "504px", "height": "504px", "top": "344px", "left": "132px"},
            "data" : {"src": "https://img.alicdn.com/imgextra/i1/92779311/TB2wOxYaB0kpuFjSsziXXa.oVXa-92779311.png"}
        }, {
            "type" : "pointer",
            "alias": "指针(抽奖按钮)",
            "style": {"width": "290px", "height": "290px", "top": "458px", "left": "240px"},
            "data" : {"src": "https://img.alicdn.com/imgextra/i1/92779311/TB2w7HOXChlpuFjSspkXXa1ApXa-92779311.png"}
        }],
        "data"    : {
            "rotateType" : "bg",
            "prizes"     : [{"deg": 44}, {"deg": 90}, {"deg": 150}],
            "emptyPrizes": [{"deg": 359}]
        }
    }, {
        "type" : "drawTotal",
        "alias": "抽奖次数",
        "style": {"width": "260px", "height": "30px", "left": "283px", "top": "911px"},
        "data" : {
            "descStyle": {"fontSize": "24px", "color": "#fff"},
            "timeStyle": {"fontSize": "32px", "color": "#fde15c"}
        }
    }, {
        "type" : "myPrize",
        "alias": "我的奖品",
        "style": {"width": "150px", "height": "150px", "left": "532px", "top": "294px"},
        "data" : {}
    }, {
      "type"    : "tasks",
      "alias"   : "抽奖任务",
      "style"   : {"width": "750px", "height": "70px", "left": "0.5px", "top": "1072px"},
      "data"    : {"position": "auto", "align": "center", "children": [{
        "type" : "shopping",
        "alias": "加购",
        "style": {"width": "135px", "height": "57px", "top": "1078px", "left": "28px"},
        "data" : {"src": "https://img.alicdn.com/imgextra/i3/92779311/TB2hf8EaHJmpuFjSZFBXXXaZXXa-92779311.png"}
      }, {
        "type" : "collect",
        "alias": "收藏",
        "style": {"width": "135px", "height": "57px", "top": "1078px", "left": "166px"},
        "data" : {"src": "https://img.alicdn.com/imgextra/i2/92779311/TB2lY4ZarJkpuFjy1zcXXa5FFXa-92779311.png"}
      }, {
        "type" : "share",
        "alias": "分享",
        "style": {"width": "135px", "height": "57px", "top": "1078px", "left": "310px"},
        "data" : {"src": "https://img.alicdn.com/imgextra/i4/92779311/TB2g7VGaNlmpuFjSZPfXXc9iXXa-92779311.png"}
      }, {
        "type" : "order",
        "alias": "下单",
        "style": {"width": "135px", "height": "57px", "top": "1078px", "left": "450px"},
        "data" : {"src": "https://img.alicdn.com/imgextra/i2/92779311/TB2PNXVaChlpuFjSspkXXa1ApXa-92779311.png"}
      },{
        "type" : "praise",
        "alias": "好评",
        "style": {"width": "135px", "height": "57px", "top": "1078px", "left": "594px"},
        "data" : {"src": "https://img.alicdn.com/imgextra/i3/92779311/TB2OrB1ar8kpuFjy0FcXXaUhpXa-92779311.png"}
      }
      ]}
    }, {
        "type" : "luckyList",
        "alias": "中奖名单",
        "style": {"width": "551px", "height": "208px", "top": "1267px", "left": "130px"},
        "data" : {"type": 2, "textStyle": {"fontSize": "24px", "color": "#fff", "lineHeight": "2"}}
    }, {
        "type" : "rule",
        "alias": "游戏规则",
        "style": {"width": "573px", "height": "246px", "top": "1629px", "left": "92px"},
        "data" : {"type": 2, "textStyle": {"fontSize": "24px", "color": "#fff", "lineHeight": "2"}}
    }]
}
