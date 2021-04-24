module.exports = {
    lintOnSave: false,
    // devServer:{
    //     before:require('./mock/index.js'),
    //     open: true,
    //     host: '192.168.1.104', //ip地址
    //     port: 8080,
    //     hotOnly: true,
    //     watchContentBase: true,
    //     proxy: {
    //         "/api": {
    //             target: "http://192.168.1.104:8080",
    //             pathRewrite: {
    //             "^/api": "/api"
    //             }
    //         }
    //     }
    // },
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        // 以设计稿750为例， 750 / 10 = 75
                        remUnit: 75
                    }),
                ]
            }
        }
    },
}