let fs = require('fs')

// 标准事件流形式
let readStream = fs.createReadStream('./assets/scenery.qlv')
let writeStream = fs.createWriteStream('./assets/stream-scenery.qlv')

readStream.on('data', (chunk) =>{
    if(writeStream.write(chunk) ===false){ //还在缓存区
        console.log("still cached")
        readStream.pause()
    }

    writeStream.write(chunk)
})

readStream.on('end', () =>{
    writeStream.end()
})
// 读得快，写得慢，内存会爆仓

writeStream.on('drain', () =>{
    console.log('data drains')

    readStream.resume()
})