/**
 * @description 服务端
 * @author chenxuan03@meituan.com
 * @updater
 */
var http = require('http');

http.createServer(function (request, response) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    if(request.url === '/api/getList') {
        // 发送响应数据 "Hello World"
        response.end('Hello World!\n');
    } else {
        response.end('Hello~\n');
    }
}).listen(8000);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8000/');