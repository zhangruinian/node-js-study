let http = require('http')
let fs = require('fs')

// 第三方模块
let request = require('request')

http
    .createServer((req, res) =>{
        /*fs.readFile('./assets/lks.jpg', (err, data) =>{
            if (err) {
                console.log(err)
                res.end('出错，找不到文件')
            }
            else{
                res.end(data)
                res.writeHeader(200, {'Context-Type':'text/html'})
            }
        })*/
        //使用流的形式
        // fs.createReadStream('./assets/lks.jpg').pipe(res)
        request('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1091681404,1813447708&fm=26&gp=0.jpg').pipe(res)
        //request是对stream流很好的一个封装，可查看源码
        // 这样实现了边下载边pipe (pipe方法会自动监听data,end时间 对每一段数据，减轻服务端压力) 被动消费

    })
    .listen(9771)
