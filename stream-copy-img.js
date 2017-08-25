let fs = require('fs')

let source = fs.readFileSync('./assets/lks.jpg')

fs.writeFileSync('./assets/steam-copy-lks.jpg', source)