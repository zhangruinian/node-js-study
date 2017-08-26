// https://segmentfault.com/a/1190000007266165

var http = require('http')
var url = require('url')
var fs = require('fs')

var server = http.createServer()
// 读取我们当前文件所在的目录下的 html 文件夹
var HtmlDir = __dirname + '/html/'

server.on('request', function (req, res) {
    var urlObj = url.parse(req.url)
    console.log(urlObj)
    
    switch (urlObj.pathname) {
        case '/':
            //首页
            sendData(HtmlDir + 'h5-location.html', req, res)
            break
        case '/user':
            //用户首页
            sendData(HtmlDir + 'user.html', req, res)
            break
        default:
            //处理其他情况
            sendData(HtmlDir + 'err.html', req, res)
            break
    }
})

/**
 * 读取html文件，响应数据，发送给浏览器
 * @param {String} file 文件路径
 * @param {Object} req request
 * @param {Object} res response 对象
 */
function sendData(file, req, res) {
    fs.readFile(file, function (err, data) {
        if (err) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf-8'
            })
            console.log(err)
            res.end('<h1>你要找的页面不见了～</h1>')
        } else {
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf-8'
            })
            res.end(data)
        }

    })
}

server.listen(8888)
console.log('Server is running at http://127.0.0.1:8888/')