module.exports = {
  "name": "我的自定义模板",
  "bg": {
    "src": "https://img.alicdn.com/imgextra/i1/92779311/TB2ugxMarRkpuFjSspmXXc.9XXa-92779311.jpg",
    "style": {"height": "1108px", "backgroundColor": "#85b746"}
  },
  "modules": [{
    "type": "myPrize",
    "alias": "我的奖品",
    "style": {"width": "148px", "height": "47px", "top": "33px", "left": "0"},
    "data": {}
  },{
    "type" : "pic",
    "alias": "标题",
    "style": {"width": "613px", "height": "155px","top": "1.688rem", "left": "1.5146666666666666rem"},
    "data" : {"src": "https://img.alicdn.com/imgextra/i4/92779311/TB2MO4KawxlpuFjSszbXXcSVpXa-92779311.png"}
  }, {
    "type": "dial",
    "alias": "转盘",
    "children": [{
      "type": "bg",
      "alias": "转盘背景",
      "style": {"width": "580px", "height": "580px", "top": "250px", "left": "85px"},
      "data": {"src": "https://img.alicdn.com/imgextra/i2/92779311/TB2wfiiXCxjpuFjSszeXXaeMVXa-92779311.png"}
    }, {
      "type": "pointer",
      "alias": "指针(抽奖按钮)",
      "style": {"width": "248px", "height": "248px", "top": "420px", "left": "251px"},
      "data": {"src": "https://img.alicdn.com/imgextra/i4/92779311/TB2l28iXS4mpuFjSZFOXXaUqpXa-92779311.png"}
    }],
    "data": {"rotateType": "bg", "prizes": [{"deg": 44}, {"deg": 90}, {"deg": 150}], "emptyPrizes": [{"deg": 359}]}
  }, {
    "type": "drawTotal",
    "alias": "抽奖次数",
    "style": {"width": "300px", "height": "30px", "left": "225px", "top": "210px", "color": "#555"},
    "data": {
      "descStyle": {"fontSize": "24px", "color": "#0e94ac"},
      "timeStyle": {"fontSize": "32px", "color": "#ff5c5d"}
    }
  }, {
    "type"    : "tasks",
    "alias"   : "抽奖任务",
    "style"   : {"width": "750px", "height": "84px", "left": "0.5px", "top": "880px"},
    "data"    : {"position": "manual", "align": "center", "children": null},
    "children": [{
      "type" : "shopping",
      "alias": "加购",
      "style": {"width": "124px", "height": "50px", "top": "890px", "left": "46px"},
      "data" : {"src": "https://img.alicdn.com/imgextra/i2/92779311/TB2edxLaB8kpuFjSspeXXc7IpXa-92779311.png"}
    }, {
      "type" : "collect",
      "alias": "收藏",
      "style": {"width": "124px", "height": "50px", "top": "890px", "left": "180px"},
      "data" : {"src": "https://img.alicdn.com/imgextra/i4/92779311/TB2onNGawJkpuFjSszcXXXfsFXa-92779311.png"}
    }, {
      "type" : "share",
      "alias": "分享",
      "style": {"width": "124px", "height": "50px", "top": "890px", "left": "314px"},
      "data" : {"src": "https://img.alicdn.com/imgextra/i1/92779311/TB2ol0laUlnpuFjSZFjXXXTaVXa-92779311.png"}
    }, {
      "type" : "order",
      "alias": "下单",
      "style": {"width": "124px", "height": "52px", "top": "890px", "left": "446px"},
      "data" : {"src": "https://img.alicdn.com/imgextra/i1/92779311/TB2BPJkaSVmpuFjSZFFXXcZApXa-92779311.png"}
    },{
      "type" : "praise",
      "alias": "好评",
      "style": {"width": "124px", "height": "52px", "top": "890px", "left": "579px"},
      "data" : {"src": "https://img.alicdn.com/imgextra/i1/92779311/TB2yCJsaHBmpuFjSZFuXXaG_XXa-92779311.png"}
    }
    ]
  }, {
    "type": "luckyList",
    "alias": "中奖名单",
    "style": {"width": "411px", "height": "47px", "top": "967px", "left": "241px"},
    "data": {"type": 1, "textStyle": {"fontSize": "20px", "color": "#fff"}}
  }, {
    "type": "rule",
    "alias": "游戏规则",
    "style": {"width": "119px", "height": "47px", "top": "33px", "right": "0"},
    "data": {"type": 1, "textStyle": {"fontSize": "200px", "lineHeight": "1.5", "color": "skyblue"}}
  }]
}
