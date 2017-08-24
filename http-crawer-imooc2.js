const  http = require('http')
let cheerio = require('cheerio')
let url = "http://www.imooc.com/learn/348"

function filterChapters (html) {
    // jquery的写法：each .attr
    let $ = cheerio.load(html)
    let chapters = $(".chapter")
    console.log(chapters);
    let courseData = []
    chapters.each((item) =>{
        let chapter = $(this)
        //jauery的text方法。。。
        let title = chapter.find("strong").text()
        console.log(title);
        // let title = chapter.find("strong").text()
        let videos = chapter.find(".video").children('li')
        let chapterData = {
            title,
            videos: []
        }

        videos.each((item) =>{
            let video = $(this).find(".J-media-item")
            let videoTitle = video.text().trim()
            let id = video.attr("href").split('video/')[1]
            chapterData.videos.push({
                videoTitle,
                id
            })
        })

        courseData.push(chapterData)
    })
    return courseData
}

function printInfo (data) {
    data.forEach((item) =>{
        let chapterTitle = item.title
        console.log(chapterTitle + '\n');
    })
}
http.get(url, (res) =>{
    let html = ''
    res.on('data', (data) =>{
        html += data
    })
    
    res.on('end', () =>{
        // console.log(html);
        let testData = filterChapters(html)
        console.log(testData);
        // printInfo(testData)
    })
}).on('error', () =>{
    console.log("获取出错")
})