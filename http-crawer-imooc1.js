const  http = require('http')

let url = "http://www.imooc.com/learn/348"

http.get(url, (res) =>{
    let html = ''
    res.on('data', (data) =>{
        html += data
    })
    
    res.on('end', () =>{
        console.log(html);
    })
}).on('error', () =>{
    console.log("获取出错");
})