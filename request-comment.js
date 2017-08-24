const http = require("http")
const querystring = require("querystring")

let postData = querystring.stringify({
    "content": "老师讲的不错，赞一个",
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
        'Content-Length':'89',
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'PHPSESSID=a2cd7smccca1qpjv2m49dqmfh3; imooc_uuid=d5de35c8-41d7-4f58-ba0d-2a61ff584655; imooc_isnew_ct=1481869272; cninfo=banner-01e3f93db84fc4dbc8e8bb51befc56ee; loginstate=1; apsid=ViODJhNTg0ZDgzMWE5NTYyODU1OWJjOGE5ZjRiZGIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTA2MzQyNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5NDY3NTgwOTVAcXEuY29tAAAAAAAAAAAAAAAAAAAAADE0MjMxM2U5MTAwMDllMGMxZWUwYTk0MzFjYjk5OWJiLkqeWS5Knlk%3DN2; last_login_username=946758095%40qq.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1503384391; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1503560347; imooc_isnew=2; cvde=58fd4faebd060-163',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Pragma':'no-cache',
        'Referer':'http://www.imooc.com/video/8837',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
}
