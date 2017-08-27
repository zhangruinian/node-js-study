let Readable = require('stream').Readable
let Writable = require('stream').Writable

let readStream = new Readable()
let writeStream = new Writable()

readStream.push('i ')
readStream.push('love ')
readStream.push('code and life ')
// 此时告诉，读写完毕
readStream.push(null)

writeStream._write = function (chunk, encode, cb) {
    console.log(chunk.toString()) //消费输出的时候也是一行行输出
    cb()
}

readStream.pipe(writeStream)