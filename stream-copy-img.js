let fs = require('fs')
console.log('开始')
let source = fs.readFileSync('./assets/lks.jpg')

console.log('怎么中断?')
console.error('怎么中断?')
process.title = 'te....'
console.log('title', process.title)
process.exit(0)
console.log('执行??')
fs.writeFileSync('./assets/steam-copy-lks.jpg', source)