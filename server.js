/**
 * @description 启动服务
 * @author chenxuan03@meituan.com
 * @updater
 */
const config = require("./webpack.config.js");
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

// 监听端口
const PORT = 8081;

// 注意点
config.entry.app.unshift(
    // inline模式
    "webpack-dev-server/client?http://localhost:" + PORT,
    // 模块热替换
    "webpack/hot/only-dev-server"
);
// 添加模块热替换插件
config.plugins.push(new webpack.HotModuleReplacementPlugin());

// 编译webpack配置
let compiler = webpack(config);

// 设置webpack-dev-server
let server = new WebpackDevServer(compiler, {
    // 指定基本目录
    contentBase: config.output.path,
    // 这里必须有，不然404找不到脚本
    publicPath: config.output.publicPath,
    hot: true,
    stats: {
        // 命令行中增加颜色
        colors: true
    },
    //转发api接口请求
    proxy: {
        '/api/*': 'http://127.0.0.1:8000/'
    },
    quiet: true,
});

// 启动服务器
server.listen(PORT);