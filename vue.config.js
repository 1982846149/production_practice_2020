module.exports = {
    lintOnSave: false,//是否开启eslint
    devServer: {
        port: 8080, // 端口号
        host: "0.0.0.0",
        https: false, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        //proxy: 'http://115.29.177.136:8088' // 配置跨域处理,只有一个代理
        proxy: {
            "/api": {
                //target: "http://223.93.26.173",
                target:"http://115.29.177.136:8088",
                ws:true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        } // 配置多个代理
    }
};