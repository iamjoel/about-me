var nodejieba = require("nodejieba")


nodejieba.load({
  stopWordDict: './stop_words.utf8', // 停用词典。不进入关键字统计。默认停用词典 https://github.com/yanyiwu/nodejieba/blob/master/dict/stop_words.utf8
});
var cheerio = require('cheerio')
var request = require('request')
var url = 'http://www.jianshu.com/p/636f0ade9971'
request({
  url,
  encoding: null
}, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(body)
    var mainContent = $('.show-content').text() // 正文
    // 分词
    var res = nodejieba.cut("南京市长江大桥")
    console.log(res); // [ '南京市', '长江大桥' ]

    //关键词提取
    var topN = 5
    var res = nodejieba.extract(mainContent, topN);
    console.log(res.map(item => {
      return item.word
    }).join()) // [CSS,JavaScript,示例,写法,js]
  }
})

