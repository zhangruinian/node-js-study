/*建议大家用 class 与 extends 代替 prototype 与 inherit。

优点：简单易懂，不会有破坏instanceof运算的危险

http://blog.csdn.net/gyjyywc/article/details/75350004*/

/*let stream = require('stream')
let util = require('util')

function ReadStream () {
    stream.Readable.call(this)
}

util.inherits(ReadStream, stream.Readable)

ReadStream.prototype._read = function () {
    this.push('I')
    this.push('Love ')
    this.push('Imooc\n')
    this.push(null)
}

function WritStream () {
    stream.Writable.call(this)
}

util.inherits(WritStream, stream.Writable)

WritStream.prototype._write = function (chunk, encode, cb) {
    console.log(chunk.toString())
    cb()
}

function TransformStream () {
    stream.Transform.call(this)
}

util.inherits(TransformStream, stream.Transform)

TransformStream.prototype._transform = function (chunk, encode, cb) {
    this.push(chunk)
    cb()
}

TransformStream.prototype._flush = function (cb) {
    this.push('Oh yeah!')
    cb()
}

let rs = new ReadStream()
let ws = new WritStream()
let ts = new TransformStream()

rs.pipe(ts).pipe(ws)*/

let stream = require('stream')

class ReadStream extends stream.Readable {
    _read () {
        this.push('I')
        this.push('Love ')
        this.push('Imooc\n')
        this.push(null)
    }
}

class WritStream extends stream.Writable {
    _write (chunk, encode, cb) {
        console.log(chunk.toString())
        cb()
    }
}

class TransformStream extends stream.Transform {
    _transform (chunk, encode, cb) {
        this.push(chunk)
        cb()
    }

    _flush (cb) {
        this.push('Oh yeah!')
        cb()
    }
}

var rs = new ReadStream()
var ws = new WritStream()
var ts = new TransformStream()

rs.pipe(ts).pipe(ws)