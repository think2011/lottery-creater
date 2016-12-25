var path = require('path')

let config = {
    build: {
        env                     : require('./prod.env'),
        index                   : path.resolve(__dirname, '../dist/index.html'),
        assetsRoot              : path.resolve(__dirname, '../dist'),
        assetsSubDirectory      : 'resources/lottery2',
        assetsPublicPath        : '/',
        productionSourceMap     : false,
        productionGzip          : false,
        productionGzipExtensions: ['js', 'css'],
    },
    dev  : {
        env               : require('./dev.env'),
        port              : 1991,
        assetsSubDirectory: 'static',
        assetsPublicPath  : 'http://localhost:1991/',
        proxyTable        : {},
        cssSourceMap      : true
    }
}

const buildType = process.env.buildType
switch (buildType) {
    // 给 qdd 生成代码
    case 'editor':
        Object.assign(config.build, {
            index           : '/Users/think2011/Projects/cxb/trunk/src/assets/bower_components/lottery/index.html',
            assetsRoot      : '/Users/think2011/Projects/cxb/trunk/src/assets/bower_components/lottery',
            assetsPublicPath: './',
        })
        break;

    // 给 手机端 生成代码
    case 'mobile':
        Object.assign(config.build, {
            index           : '/Users/think2011/Projects/lottery2/src/main/webapp/resources/lottery2/index.html',
            assetsRoot      : '/Users/think2011/Projects/lottery2/src/main/webapp/',
            assetsPublicPath: '/',
        })
        break;

    default:
    //
}


module.exports = config