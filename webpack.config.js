/**
 * @description webpack打包相关配置
 * @author chenwubai.cx@gmail.com
 */
module.exports = {
    // 生成source map的方式
    devtool: 'eval-source-map',
    // 入口文件
    entry: __dirname + '/src/main.jsx',
    // 文件输出路径和名称
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        // 各种格式文件的加载,转译配置
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};