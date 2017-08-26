let fs = require('fs')

let readStream = fs.createReadStream('stream-copy-img.js')
let n = 0

// 流里面传递的时候是以buffer的形式传递的
readStream
    .on('data', (chunk) => {
        n++
        console.log(Buffer.isBuffer(chunk))
        console.log(chunk.toString('utf-8'))
        readStream.pause()
        console.log('data pause')
        setTimeout(() => {
            console.log('data pause')
            readStream.resume()
        }, 3000)
    })
    .on('readable', () => {
        console.log('data readable')
    })
    .on('end', () => {
        console.log(n)
        console.log('data ends')
    })
    .on('close', () => {
        console.log('data close')
    })
    .on('error', (e) => {
        console.log('data erreo' + e)
    })
