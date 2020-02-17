## 背景
最近准备给我在简书写的关于web前端的文章做个导航页。那些文章都放在[web前端](http://www.jianshu.com/notebooks/34265/latest)这个文集。
导航内容的是用Markdown来写，内容形式大概下面这样的
```
## 某某分类
* [能提高前端工作效率的那些事](/p/9bc4951c9d80)
* [前端组件整理](/p/9722bf022368)
...

## 某某分类2
* [减少网站响应时间概要](/p/a0842df51671)
* [jQuery模式（译）](/p/f722b616c031)
...
```

如果一个个的去复制文章的标题和链接，那无疑是很无聊的。

最好是有个工具能生成。Thinking...

一杯咖啡的时间后，想到了还不错的解决方案。

## 解决方案
用浏览器的控制台来输出吧。输出内容形式大概下面这样的
```
* [能提高前端工作效率的那些事](/p/9bc4951c9d80)
* [前端组件整理](/p/9722bf022368)
* [减少网站响应时间概要](/p/a0842df51671)
* [jQuery模式（译）](/p/f722b616c031)
...
```
然后只要再进行一下分类即可。

### 开始搞起
1. 审查[web前端](http://www.jianshu.com/notebooks/34265/latest)这个页面。发现所有的 文章的标题和链接符合这样的选择器 `.article-list .title>a`(2015/10/21更新)
1. 发现简书页面已经引用了jQuery（不然得用document.querySelectorAll这类的api了）~ 
1. 根据逻辑，如下代码可以实现需求
```
$.makeArray($('.article-list .title>a').map(function() {
	var $link = $(this);
    return ['* [', $link.text(), '](', $link.attr('href'), ')'].join('');
})).join('\n')
```
输出
![result.png](http://upload-images.jianshu.io/upload_images/16777-2b7e4b37a3bae7ad.png)
