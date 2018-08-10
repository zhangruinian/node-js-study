let fs = require('fs')

// 第三方模块
let request = require('request')

let pngUrl = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png'

let captchaUrl = 'https://launchpad.binance.com/security/securityCodeImage.html?' + new Date().getTime()

let downloadPic = function (src, dest) {
    request.get({
        url: src,
        headers: {
            Accept: 'image/webp,image/apng,image/*,*/*;q=0.8',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
        },
    }, function (err) {
        if (err) {
            console.log(err)
        }
    }).pipe(fs.createWriteStream(dest)).on('close', function () {
        console.log('pic saved!')
    })
}

downloadPic(captchaUrl, './assets/100/'+ (new Date()).getTime() +'.jpg')
// downloadPic(pngUrl, './assets/100/'+ (new Date()).getTime() +'.jpg')

/*
request
    .get(pngUrl)
    .on('error', function(err) {
        console.log(err)
    })
    .pipe(fs.createWriteStream('./assets/100/test1.png'))*/
