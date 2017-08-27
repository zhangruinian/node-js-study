const http = require("http")
const querystring = require("querystring")

let postData = querystring.stringify({
    "content": "赞一个,别封",
    "cid":348
})

let options = {
    hostname: 'www.imooc.com',
    port: '80',
    path: '/course/docomment',
    method: "POST",
    headers: {
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Cache-Control':'no-cache',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'PHPSESSID=b5m3ssfnl8i22d6j7mcuaepri0; imooc_uuid=1b82a8ec-039e-40ac-9e1f-25d59c4920a6; imooc_isnew_ct=1503585517; loginstate=1; apsid=ViODJhNTg0ZDgzMWE5NTYyODU1OWJjOGE5ZjRiZGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTA2MzQyNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5NDY3NTgwOTVAcXEuY29tAAAAAAAAAAAAAAAAAAAAADdkNTVmZWUyMTFkNTM4ZWZkMDY5NjBjOTdlMmM1ZDJiKumeWSrpnlk%3DN2; last_login_username=946758095%40qq.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1503585521,1503586594; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1503764108; imooc_isnew=2; cvde=599ee4ed3edfd-274',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Pragma':'no-cache',
        'Referer':'http://www.imooc.com/video/8837',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
}

let req = http.request(options, (res) =>{
    console.log(res.statusCode)
    //node里面 接收数据的时候是以流的形式发送的
    res.on("data", (chunk) =>{
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof  chunk);
    })
    
    res.on('end', () =>{
        console.log("评论结束");
        // console.log(res);
    })
})

req.on("error", (e) =>{
    console.log("评论出错" + e.message);
})
// 写入到请求体
req.write(postData)
//手动表明结束
req.end()
