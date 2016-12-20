module.exports = {
    "type"   : "pc",
    "name"   : "我的自定义模板",
    "bg"     : {
        "src"  : require('src/assets/temp/pc/bg.png'),
        "style": {"height": "1154px", "backgroundColor": "#fff"}
    },
    "psdPath": "test",
    "modules": [{
        "type" : "toShop",
        "alias": "店铺链接",
        "style": {"width": "195px", "height": "53px", "top": "17px", "left": "693px"},
        "data" : {}
    }, {
        "type" : "drawTotal",
        "alias": "抽奖次数",
        "style": {
            "width" : "5.546666666666667rem",
            "height": "0.7253333333333333rem",
            "left"  : "5.141333333333334rem",
            "top"   : "8.853333333333333rem"
        },
        "data" : {
            "descStyle": {"fontSize": "0.512rem", "color": "#fff"},
            "timeStyle": {"fontSize": "0.6826666666666668rem", "color": "#f3dc1c"}
        }
    }, {
        "type"    : "dial",
        "alias"   : "转盘",
        "children": [{
            "type" : "bg",
            "alias": "转盘背景",
            "style": {"width": "605.969px", "height": "612.969px", "top": "242px", "left": "11px"},
            "data" : {"src": "//img.alicdn.com/imgextra/i2/92779311/TB2Uc2lXCXlpuFjy0FeXXcJbFXa-92779311.png"}
        }, {
            "type" : "pointer",
            "alias": "指针(抽奖按钮)",
            "style": {"width": "310px", "height": "286px", "top": "402px", "left": "160px"},
            "data" : {"src": "//img.alicdn.com/imgextra/i2/92779311/TB2WBcYXtBopuFjSZPcXXc9EpXa-92779311.png"}
        }],
        "data"    : {
            "rotateType" : "bg",
            "prizes"     : [{"deg": 44}, {"deg": 90}, {"deg": 150}],
            "emptyPrizes": [{"deg": 359}]
        }
    }, {
        "type" : "myPrize",
        "alias": "我的奖品",
        "style": {"width": "169px", "height": "50px", "left": "792px", "top": "276px"},
        "data" : {}
    }, {
        "type"    : "tasks",
        "alias"   : "抽奖任务",
        "style"   : {"width": "293px", "height": "118px", "left": "659px", "top": "546px"},
        "data"    : {
            "position": "auto",
            "align"   : "center",
            "children": [{
                "type" : "shopping",
                "alias": "加购",
                "style": {"width": "123.984px", "height": "50px", "top": "565px", "left": "664px"},
                "data" : {"src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAxCAMAAADEMYY9AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACuFBMVEXSQUL/////XADSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULUQj/fSS/qTx/xVBT4WAv8WgX+WwL/XAD8WgT6WQf1Vg7uUhnlTCbZRTfSQUHgSS7xUxX5WAnpTyDYRDrjSyn4WAr+XAHvUhjYRTnbRjXTQkDmTSX+WwH3VwzZRTjwUxb9WwTzVRHhSizTQUHeSDHrUB3/ZxH/nWb/h0T/vpn/yar/1Lv/3sz/klX/jUz/lFf/lFj/gjv/XgP/llr/Zg/2Vw3VQz77Wgb/qHf/////6d3/s4j/3cr/5db/6t7/XQLsURz/9O7/ciL/fTP/7eP/3Mj/xKP/28f/7uX/z7T/jk//kFH/fzf/vZj/3svvUxfsURv/8Oj/roD/YAb/aBL/zbD/aRX/XAH9WwP/8Of/uZL/axf/m2P/+fX/6+D/bhziSiv/ZQ7/uZH/jk76WQjuUhj/ciP/0LbaRjf/cCD/+PT/xaT/XwXWQzz/69//+/n/18D/w6H/vJb/7OHdSDL/rX7/wZ7/axj/vZf1Vg//t47/qnrmTST/sIT/k1b/0rn/q3znTiP/XQH/1r//YAf/iUb/nGT/zrPWRDz/6dz/sIP/tIr/59r/xqb/yKn//fz/9fD/4tL/8entURvgSS3xVBX5WQn7WQYAAABYeHOvAAAATnRSTlMAAAANS4ex1+358eXIoGwwE3G83qFGI52/Zpg1x56Xux4m65nYHVIWrVhqWsG3TBylZeGn5Bg/xmBy8njz5hkCW2tZR1PfH71zorPv+uexe/AcAAAAAWJLR0TntmtqkwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+AMDREIEVKH50MAAASJSURBVFjDxZj3YxRFFMdXFFBDUIORopSgWFFRBBWliiigL4BmSREwUkKUECx7eyV09N4dgneHQYMgEEsOjQVRQbGhAoq905Ri+Tucsru3uzO7sVz5/nK3MzvvMzPvTdmnKIJOPa1zl66nnwFZ1ZlF3Yq7nyWwTnE9dzr7nJLsgh3qcW5pJ4dc/PN6kpfKp0yddtfdFWpWNb2yqrrmHmK9V29vfh+AGTNnZZls17219wGUlMr5518AM2bPyR2cae68OoC+Mn4/gPlVOaZTVdTWQ/8BAr8vwP0P5AFPtKABepS5+MVQvzA/dKLGKTCwzMG/EMoX5Q1PfPAgXDTIxr8YHpqWRzzpwMNQkuFfUgSP5BVP9oMGtgo4/1KY6fOqFmA/elCsCoUjTe6yxUuauJYuY8/LV6yUWV1VD6UG/zJ49DEffhRjpAdxxIBQFUSMu8vQ0mpe8PiatTKztdQDjN8LnvAbfgJRV9UkYswoSYVNxRAT1kOK166z+E/ygmZcL7NbUQeXM/4VUDfXhx9CDBljjfISHaXSee1T+PTiFqoNz/CCjYibZC54FgYz/pWw2QcfIENM0j9kApAPMRmVKskbbMGt9vatzz1PGq55QbT8Yh1cRfhXQ3mbNz6F1rBJBMQ0ozipu6RZLdK4zfz70svNm7a0s8l55VXR9lQYQvjXwGs+eOJ8M+414u2IwYl6TL6d//r2dtsLiTcE4zvgWsIfCm964psSGSTvTCxl8iNhexiK/LfWOXv4tmh+J5Ab0XVQ6YWno8zgeQcwqvEa3fGewN/1jhP/7m7Rfg10V4bBe56jp+3i9hAL0ZLkPxr/+/TVDz78aE/wY/pvmwxQDcXKcPjEc/rDGHa5ORTh4dCh/z9FbN/bso8W7PfCq5/B9coNMNuTr8dVFyaqxZk/Oor/VsTP9xkFexEPyO1XQpFyI3yh+oiYjhAsY9h2IGHxu8b/JX5lFXyN33gYb4QRyk3wreqvCHc5m3SDL0y/WWHwdze3WM/ffb/d0zRAR+NX2YFiUXVx/CwmY5ljkPJbf8g0X0v88OPWn2SW2+BmX/8zpayDx7nomJqCJPZj8ZStKC0Jtp/NIThVCSN9458pZO2AQYMfyKw8trM5zz8Zf6N1djpE438U/OKLD1jHDlmOnC96374E0yj6ez8elNmm699v/zNY5hXD3GZs3ieT7z7/0nhIsHJYzqf7H9n/53nS6dqjO7BuBFrCVa8hht1t0njk6K9OHT0o57P9v7f3+cfcG9K4E5yrjBzHfOMNuRv9JnXOMYn5HQCjFWWQ9/lPQj/BkPzGE7PjzShwrwj1+Im0qBPrJeb5+U/uPye9JiAa5fuqRna/lKsuZXf6f5Fx/1HG+N//cibz/kfuv5v/v7V/rYoGGMv54/zv/zlS5v5Pvn9+zzt+QT3cYn3/jSzs958yvrDfvwX//s9z/qNNyH/kO/9za1lh818TZPm/bgXN/5n5zz9ymP/8k+Y/b/PIfzryv9Oz3IvGv6qqa3Z2kP+l+e/bc5r/nuif/zbz/5O6Tr4ju+QRd8rz/38DoBk7B56cw1AAAAAASUVORK5CYII="}
            }, {
                "type" : "collect",
                "alias": "收藏",
                "style": {"width": "123.984px", "height": "53px", "top": "564px", "left": "814px"},
                "data" : {"src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAxCAMAAADEMYY9AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACuFBMVEXSQUL/////XADSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULUQj/fSS/qTx/xVBT4WAv8WgX+WwL/XAD8WgT6WQf1Vg7uUhnlTCbZRTfSQUHgSS7xUxX5WAnpTyDYRDrjSyn4WAr+XAHvUhjYRTnbRjXTQkDmTSX+WwH3VwzZRTjwUxb9WwTzVRHhSizTQUHeSDHrUB3/ZxH/nWb/h0T/vpn/yar/1Lv/3sz/klX/jUz/lFf/lFj/gjv/XgP/llr/Zg/2Vw3VQz77Wgb/qHf/////6d3/s4j/3cr/5db/6t7/XQLsURz/9O7/ciL/fTP/7eP/3Mj/xKP/28f/7uX/z7T/jk//kFH/fzf/vZj/3svvUxfsURv/8Oj/roD/YAb/aBL/zbD/aRX/XAH9WwP/8Of/uZL/axf/m2P/+fX/6+D/bhziSiv/ZQ7/uZH/jk76WQjuUhj/ciP/0LbaRjf/cCD/+PT/xaT/XwXWQzz/69//+/n/18D/w6H/vJb/7OHdSDL/rX7/wZ7/axj/vZf1Vg//t47/qnrmTST/sIT/k1b/0rn/q3znTiP/XQH/1r//YAf/iUb/nGT/zrPWRDz/6dz/sIP/tIr/59r/xqb/yKn//fz/9fD/4tL/8entURvgSS3xVBX5WQn7WQYAAABYeHOvAAAATnRSTlMAAAANS4ex1+358eXIoGwwE3G83qFGI52/Zpg1x56Xux4m65nYHVIWrVhqWsG3TBylZeGn5Bg/xmBy8njz5hkCW2tZR1PfH71zorPv+uexe/AcAAAAAWJLR0TntmtqkwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+AMDREIEVKH50MAAASJSURBVFjDxZj3YxRFFMdXFFBDUIORopSgWFFRBBWliiigL4BmSREwUkKUECx7eyV09N4dgneHQYMgEEsOjQVRQbGhAoq905Ri+Tucsru3uzO7sVz5/nK3MzvvMzPvTdmnKIJOPa1zl66nnwFZ1ZlF3Yq7nyWwTnE9dzr7nJLsgh3qcW5pJ4dc/PN6kpfKp0yddtfdFWpWNb2yqrrmHmK9V29vfh+AGTNnZZls17219wGUlMr5518AM2bPyR2cae68OoC+Mn4/gPlVOaZTVdTWQ/8BAr8vwP0P5AFPtKABepS5+MVQvzA/dKLGKTCwzMG/EMoX5Q1PfPAgXDTIxr8YHpqWRzzpwMNQkuFfUgSP5BVP9oMGtgo4/1KY6fOqFmA/elCsCoUjTe6yxUuauJYuY8/LV6yUWV1VD6UG/zJ49DEffhRjpAdxxIBQFUSMu8vQ0mpe8PiatTKztdQDjN8LnvAbfgJRV9UkYswoSYVNxRAT1kOK166z+E/ygmZcL7NbUQeXM/4VUDfXhx9CDBljjfISHaXSee1T+PTiFqoNz/CCjYibZC54FgYz/pWw2QcfIENM0j9kApAPMRmVKskbbMGt9vatzz1PGq55QbT8Yh1cRfhXQ3mbNz6F1rBJBMQ0ozipu6RZLdK4zfz70svNm7a0s8l55VXR9lQYQvjXwGs+eOJ8M+414u2IwYl6TL6d//r2dtsLiTcE4zvgWsIfCm964psSGSTvTCxl8iNhexiK/LfWOXv4tmh+J5Ab0XVQ6YWno8zgeQcwqvEa3fGewN/1jhP/7m7Rfg10V4bBe56jp+3i9hAL0ZLkPxr/+/TVDz78aE/wY/pvmwxQDcXKcPjEc/rDGHa5ORTh4dCh/z9FbN/bso8W7PfCq5/B9coNMNuTr8dVFyaqxZk/Oor/VsTP9xkFexEPyO1XQpFyI3yh+oiYjhAsY9h2IGHxu8b/JX5lFXyN33gYb4QRyk3wreqvCHc5m3SDL0y/WWHwdze3WM/ffb/d0zRAR+NX2YFiUXVx/CwmY5ljkPJbf8g0X0v88OPWn2SW2+BmX/8zpayDx7nomJqCJPZj8ZStKC0Jtp/NIThVCSN9458pZO2AQYMfyKw8trM5zz8Zf6N1djpE438U/OKLD1jHDlmOnC96374E0yj6ez8elNmm699v/zNY5hXD3GZs3ieT7z7/0nhIsHJYzqf7H9n/53nS6dqjO7BuBFrCVa8hht1t0njk6K9OHT0o57P9v7f3+cfcG9K4E5yrjBzHfOMNuRv9JnXOMYn5HQCjFWWQ9/lPQj/BkPzGE7PjzShwrwj1+Im0qBPrJeb5+U/uPye9JiAa5fuqRna/lKsuZXf6f5Fx/1HG+N//cibz/kfuv5v/v7V/rYoGGMv54/zv/zlS5v5Pvn9+zzt+QT3cYn3/jSzs958yvrDfvwX//s9z/qNNyH/kO/9za1lh818TZPm/bgXN/5n5zz9ymP/8k+Y/b/PIfzryv9Oz3IvGv6qqa3Z2kP+l+e/bc5r/nuif/zbz/5O6Tr4ju+QRd8rz/38DoBk7B56cw1AAAAAASUVORK5CYII="}
            }, {
                "type" : "order",
                "alias": "下单",
                "style": {"width": "2.64533rem", "height": "1.10933rem", "top": "614px", "left": "817px"},
                "data" : {"src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAxCAMAAADEMYY9AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACuFBMVEXSQUL/////XADSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULUQj/fSS/qTx/xVBT4WAv8WgX+WwL/XAD8WgT6WQf1Vg7uUhnlTCbZRTfSQUHgSS7xUxX5WAnpTyDYRDrjSyn4WAr+XAHvUhjYRTnbRjXTQkDmTSX+WwH3VwzZRTjwUxb9WwTzVRHhSizTQUHeSDHrUB3/ZxH/nWb/h0T/vpn/yar/1Lv/3sz/klX/jUz/lFf/lFj/gjv/XgP/llr/Zg/2Vw3VQz77Wgb/qHf/////6d3/s4j/3cr/5db/6t7/XQLsURz/9O7/ciL/fTP/7eP/3Mj/xKP/28f/7uX/z7T/jk//kFH/fzf/vZj/3svvUxfsURv/8Oj/roD/YAb/aBL/zbD/aRX/XAH9WwP/8Of/uZL/axf/m2P/+fX/6+D/bhziSiv/ZQ7/uZH/jk76WQjuUhj/ciP/0LbaRjf/cCD/+PT/xaT/XwXWQzz/69//+/n/18D/w6H/vJb/7OHdSDL/rX7/wZ7/axj/vZf1Vg//t47/qnrmTST/sIT/k1b/0rn/q3znTiP/XQH/1r//YAf/iUb/nGT/zrPWRDz/6dz/sIP/tIr/59r/xqb/yKn//fz/9fD/4tL/8entURvgSS3xVBX5WQn7WQYAAABYeHOvAAAATnRSTlMAAAANS4ex1+358eXIoGwwE3G83qFGI52/Zpg1x56Xux4m65nYHVIWrVhqWsG3TBylZeGn5Bg/xmBy8njz5hkCW2tZR1PfH71zorPv+uexe/AcAAAAAWJLR0TntmtqkwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+AMDREIEVKH50MAAASJSURBVFjDxZj3YxRFFMdXFFBDUIORopSgWFFRBBWliiigL4BmSREwUkKUECx7eyV09N4dgneHQYMgEEsOjQVRQbGhAoq905Ri+Tucsru3uzO7sVz5/nK3MzvvMzPvTdmnKIJOPa1zl66nnwFZ1ZlF3Yq7nyWwTnE9dzr7nJLsgh3qcW5pJ4dc/PN6kpfKp0yddtfdFWpWNb2yqrrmHmK9V29vfh+AGTNnZZls17219wGUlMr5518AM2bPyR2cae68OoC+Mn4/gPlVOaZTVdTWQ/8BAr8vwP0P5AFPtKABepS5+MVQvzA/dKLGKTCwzMG/EMoX5Q1PfPAgXDTIxr8YHpqWRzzpwMNQkuFfUgSP5BVP9oMGtgo4/1KY6fOqFmA/elCsCoUjTe6yxUuauJYuY8/LV6yUWV1VD6UG/zJ49DEffhRjpAdxxIBQFUSMu8vQ0mpe8PiatTKztdQDjN8LnvAbfgJRV9UkYswoSYVNxRAT1kOK166z+E/ygmZcL7NbUQeXM/4VUDfXhx9CDBljjfISHaXSee1T+PTiFqoNz/CCjYibZC54FgYz/pWw2QcfIENM0j9kApAPMRmVKskbbMGt9vatzz1PGq55QbT8Yh1cRfhXQ3mbNz6F1rBJBMQ0ozipu6RZLdK4zfz70svNm7a0s8l55VXR9lQYQvjXwGs+eOJ8M+414u2IwYl6TL6d//r2dtsLiTcE4zvgWsIfCm964psSGSTvTCxl8iNhexiK/LfWOXv4tmh+J5Ab0XVQ6YWno8zgeQcwqvEa3fGewN/1jhP/7m7Rfg10V4bBe56jp+3i9hAL0ZLkPxr/+/TVDz78aE/wY/pvmwxQDcXKcPjEc/rDGHa5ORTh4dCh/z9FbN/bso8W7PfCq5/B9coNMNuTr8dVFyaqxZk/Oor/VsTP9xkFexEPyO1XQpFyI3yh+oiYjhAsY9h2IGHxu8b/JX5lFXyN33gYb4QRyk3wreqvCHc5m3SDL0y/WWHwdze3WM/ffb/d0zRAR+NX2YFiUXVx/CwmY5ljkPJbf8g0X0v88OPWn2SW2+BmX/8zpayDx7nomJqCJPZj8ZStKC0Jtp/NIThVCSN9458pZO2AQYMfyKw8trM5zz8Zf6N1djpE438U/OKLD1jHDlmOnC96374E0yj6ez8elNmm699v/zNY5hXD3GZs3ieT7z7/0nhIsHJYzqf7H9n/53nS6dqjO7BuBFrCVa8hht1t0njk6K9OHT0o57P9v7f3+cfcG9K4E5yrjBzHfOMNuRv9JnXOMYn5HQCjFWWQ9/lPQj/BkPzGE7PjzShwrwj1+Im0qBPrJeb5+U/uPye9JiAa5fuqRna/lKsuZXf6f5Fx/1HG+N//cibz/kfuv5v/v7V/rYoGGMv54/zv/zlS5v5Pvn9+zzt+QT3cYn3/jSzs958yvrDfvwX//s9z/qNNyH/kO/9za1lh818TZPm/bgXN/5n5zz9ymP/8k+Y/b/PIfzryv9Oz3IvGv6qqa3Z2kP+l+e/bc5r/nuif/zbz/5O6Tr4ju+QRd8rz/38DoBk7B56cw1AAAAAASUVORK5CYII="}
            }, {
                "type" : "praise",
                "alias": "好评",
                "style": {"width": "2.64533rem", "height": "1.10933rem", "top": "615px", "left": "666px"},
                "data" : {"src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAAxCAMAAADEMYY9AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACuFBMVEXSQUL/////XADSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULSQULUQj/fSS/qTx/xVBT4WAv8WgX+WwL/XAD8WgT6WQf1Vg7uUhnlTCbZRTfSQUHgSS7xUxX5WAnpTyDYRDrjSyn4WAr+XAHvUhjYRTnbRjXTQkDmTSX+WwH3VwzZRTjwUxb9WwTzVRHhSizTQUHeSDHrUB3/ZxH/nWb/h0T/vpn/yar/1Lv/3sz/klX/jUz/lFf/lFj/gjv/XgP/llr/Zg/2Vw3VQz77Wgb/qHf/////6d3/s4j/3cr/5db/6t7/XQLsURz/9O7/ciL/fTP/7eP/3Mj/xKP/28f/7uX/z7T/jk//kFH/fzf/vZj/3svvUxfsURv/8Oj/roD/YAb/aBL/zbD/aRX/XAH9WwP/8Of/uZL/axf/m2P/+fX/6+D/bhziSiv/ZQ7/uZH/jk76WQjuUhj/ciP/0LbaRjf/cCD/+PT/xaT/XwXWQzz/69//+/n/18D/w6H/vJb/7OHdSDL/rX7/wZ7/axj/vZf1Vg//t47/qnrmTST/sIT/k1b/0rn/q3znTiP/XQH/1r//YAf/iUb/nGT/zrPWRDz/6dz/sIP/tIr/59r/xqb/yKn//fz/9fD/4tL/8entURvgSS3xVBX5WQn7WQYAAABYeHOvAAAATnRSTlMAAAANS4ex1+358eXIoGwwE3G83qFGI52/Zpg1x56Xux4m65nYHVIWrVhqWsG3TBylZeGn5Bg/xmBy8njz5hkCW2tZR1PfH71zorPv+uexe/AcAAAAAWJLR0TntmtqkwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+AMDREIEVKH50MAAASJSURBVFjDxZj3YxRFFMdXFFBDUIORopSgWFFRBBWliiigL4BmSREwUkKUECx7eyV09N4dgneHQYMgEEsOjQVRQbGhAoq905Ri+Tucsru3uzO7sVz5/nK3MzvvMzPvTdmnKIJOPa1zl66nnwFZ1ZlF3Yq7nyWwTnE9dzr7nJLsgh3qcW5pJ4dc/PN6kpfKp0yddtfdFWpWNb2yqrrmHmK9V29vfh+AGTNnZZls17219wGUlMr5518AM2bPyR2cae68OoC+Mn4/gPlVOaZTVdTWQ/8BAr8vwP0P5AFPtKABepS5+MVQvzA/dKLGKTCwzMG/EMoX5Q1PfPAgXDTIxr8YHpqWRzzpwMNQkuFfUgSP5BVP9oMGtgo4/1KY6fOqFmA/elCsCoUjTe6yxUuauJYuY8/LV6yUWV1VD6UG/zJ49DEffhRjpAdxxIBQFUSMu8vQ0mpe8PiatTKztdQDjN8LnvAbfgJRV9UkYswoSYVNxRAT1kOK166z+E/ygmZcL7NbUQeXM/4VUDfXhx9CDBljjfISHaXSee1T+PTiFqoNz/CCjYibZC54FgYz/pWw2QcfIENM0j9kApAPMRmVKskbbMGt9vatzz1PGq55QbT8Yh1cRfhXQ3mbNz6F1rBJBMQ0ozipu6RZLdK4zfz70svNm7a0s8l55VXR9lQYQvjXwGs+eOJ8M+414u2IwYl6TL6d//r2dtsLiTcE4zvgWsIfCm964psSGSTvTCxl8iNhexiK/LfWOXv4tmh+J5Ab0XVQ6YWno8zgeQcwqvEa3fGewN/1jhP/7m7Rfg10V4bBe56jp+3i9hAL0ZLkPxr/+/TVDz78aE/wY/pvmwxQDcXKcPjEc/rDGHa5ORTh4dCh/z9FbN/bso8W7PfCq5/B9coNMNuTr8dVFyaqxZk/Oor/VsTP9xkFexEPyO1XQpFyI3yh+oiYjhAsY9h2IGHxu8b/JX5lFXyN33gYb4QRyk3wreqvCHc5m3SDL0y/WWHwdze3WM/ffb/d0zRAR+NX2YFiUXVx/CwmY5ljkPJbf8g0X0v88OPWn2SW2+BmX/8zpayDx7nomJqCJPZj8ZStKC0Jtp/NIThVCSN9458pZO2AQYMfyKw8trM5zz8Zf6N1djpE438U/OKLD1jHDlmOnC96374E0yj6ez8elNmm699v/zNY5hXD3GZs3ieT7z7/0nhIsHJYzqf7H9n/53nS6dqjO7BuBFrCVa8hht1t0njk6K9OHT0o57P9v7f3+cfcG9K4E5yrjBzHfOMNuRv9JnXOMYn5HQCjFWWQ9/lPQj/BkPzGE7PjzShwrwj1+Im0qBPrJeb5+U/uPye9JiAa5fuqRna/lKsuZXf6f5Fx/1HG+N//cibz/kfuv5v/v7V/rYoGGMv54/zv/zlS5v5Pvn9+zzt+QT3cYn3/jSzs958yvrDfvwX//s9z/qNNyH/kO/9za1lh818TZPm/bgXN/5n5zz9ymP/8k+Y/b/PIfzryv9Oz3IvGv6qqa3Z2kP+l+e/bc5r/nuif/zbz/5O6Tr4ju+QRd8rz/38DoBk7B56cw1AAAAAASUVORK5CYII="}
            }]
        },
        "children": null
    }, {
        "type" : "luckyList",
        "alias": "中奖名单",
        "style": {"width": "293px", "height": "156.969px", "top": "339px", "left": "658px"},
        "data" : {"type": 2, "textStyle": {"fontSize": "13px", "color": "#fff", "lineHeight": "2"}}
    }, {
        "type" : "rule",
        "alias": "游戏规则",
        "style": {"width": "283.969px", "height": "235px", "top": "718px", "left": "664px"},
        "data" : {"type": 1, "textStyle": {"fontSize": "16px", "color": "#333", "lineHeight": "2"}}
    }]
}