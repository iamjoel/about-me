var nodejieba = require("nodejieba")

nodejieba.load({
  userDict: './userdict_resturant.utf8',
  stopWordDict: './stop_words_resturant.utf8',
})
var topN = 5
var topKeywords = {}

var cheerio = require('cheerio')
var request = require('request')
http://www.dianping.com/shop/21589704/review_more?pageno=1
var url = 'http://www.dianping.com/shop/21589704' // 老苏州大客堂·特色小吃(观前街店)
request({
  url,
  // encoding: null
}, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body)
    // console.log(body)
    var $allComment = $('.J-info-all')

    $allComment.each(function () {
      var text = $(this).text().trim()
      var res = nodejieba.extract(text, topN)
      res.forEach(item => {
        var keyword = item.word
        if (topKeywords[keyword] === undefined) {
          topKeywords[keyword] = 0
        }
        topKeywords[keyword]++
      })
      var keywords = res.map(item => {
        return item.word
      }).join()

      console.log(`
        关键词：${keywords}\n
        ${text}
      `)
      console.log('**********')
    })
    var topKeywordsArr = []
    for(key in topKeywords) {
      topKeywordsArr.push(topKeywords[key] + '_' + key)
    }
    // 关键字数量从高到
    var showArr = topKeywordsArr.sort((a,b) => {
      return parseInt(b) - parseInt(a)
    }).map(item => {
      var num = item.spl
      return `关键字:${item.split('_')[1]},出现次数:${item.split('_')[0]}`
    })
    console.log(showArr)
    
  }
})


