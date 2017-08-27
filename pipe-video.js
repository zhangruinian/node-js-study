let fs = require('fs')

fs.createReadStream('./assets/scenery.qlv').pipe(
    fs.createWriteStream('./assets/pipe-scenery')
)