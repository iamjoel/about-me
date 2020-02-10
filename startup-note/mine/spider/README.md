# 爬虫
目前比较推荐的几个工具：火车头采集器，八爪鱼，神箭手 ，更多见 [gooseeker，火车头，八爪鱼三者各有什么优劣？](https://www.zhihu.com/question/36978537)

[集搜客(GooSeeker)](http://www.gooseeker.com/index.html) 感觉不错~，有Mac 版的，其他都没有。。。

采集平台：神箭手（http://www.shenjianshou.cn/）。
神箭手云采集的格式值得借鉴（demo https://zhuanlan.zhihu.com/p/26436654）
```
var configs = {
    domains: ["leiphone.com"],// 网站域名，设置域名后只处理这些域名下的网页
    scanUrls: ["http://www.leiphone.com/search?s=vr&site=article"],// 入口页链接，分别从这些链接开始爬取
    contentUrlRegexes: [
        /http:\/\/www\.leiphone\.com\/news\/\d+\/.+\.html/
    ],// 内容页url的正则，符合这些正则的页面会被当作内容页处理
    helperUrlRegexes: [
        /http:\/\/www\.leiphone\.com\/search\?s=vr&site=article(&page=\d+)?/
    ],// 列表页url的正则，符合这些正则的页面会被当作列表页处理
    fields: [
        {
            // 抽取内容页的文章标题
            name: "article_title",
            selector: "//h1[contains(@class,'headTit')]",
            required: true  // required为true表示该项数据不能为空
        },
        {
            // 抽取内容页的文章内容
            name: "article_content",
            selector: "//div[contains(@class,'lph-article-comView')]",
            required: true
        },
        {
            // 抽取内容页的文章发布日期
            name: "article_publish_time",
            selector: "//td[contains(@class,'time')]",
            required: true
        },
        {
            // 抽取内容页的文章作者
            name: "article_author",
            selector: "//td[contains(@class,'aut')]/a",
            required: true
        }
    ]
};
 
/*
  回调函数afterExtractField：对抽取出来的数据进行处理
*/
configs.afterExtractField = function(fieldName, data, page, site) {
    if (fieldName == "article_publish_time") {
        var timestamp = Date.parse(data);
        return isNaN(timestamp) ? 0 : parseInt(timestamp/1000);// 发布日期转换成时间戳
      // 使用神箭手进行数据发布时，默认处理的时间戳是10位。如非特殊，请转换成10位时间戳
    }
    return data;
};
 
// 使用以上配置创建一个爬虫对象
var crawler = new Crawler(configs);
// 启动该爬虫
crawler.start();

```

文档方面
[火车头的不错](http://www.locoy.com/index/guide)