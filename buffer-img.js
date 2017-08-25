let fs = require('fs')

fs.readFile('./assets/lks.jpg', (err, buf) =>{
    console.log(Buffer.isBuffer(buf))

    fs.writeFile('./assets/new.jpg', buf, (err) =>{
        err && console.log(err)
    })

    // let base64img = new Buffer(buf).toString('base64')
    let base64img = buf.toString('base64')

    console.log(base64img)
    
    let decodedImg = new Buffer(base64img, 'base64')
    
    console.log(Buffer.compare(buf, decodedImg))

    fs.writeFile('./assets/decodedImg.jpg',decodedImg, (err) =>{
        err && console.log(err);
    })

})