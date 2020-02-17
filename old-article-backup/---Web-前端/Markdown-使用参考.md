## Markdown概述
Markdown是一种易读易写的标记语言。它能被生成HTML。Markdown的目标是：成为一种适用于网络的书写语言。

Markdown 与 Office Word 相比，其控制文本的格式更容易；与 HTML 相比，其写法上更简洁和简单。虽然 Markdown 在功能上没有 Office Word 和 HTML 强大，但如果只是用 Markdown 来写写文章和文档，也够用了~    

Github，Stackoverflow等网站都支持Markdown。

## 标题
```
# h1
## h2
### h3
#### h4
##### h5
###### h6
```
转化成HTML的效果如下    
# h1
## h2
### h3
#### h4
##### h5
###### h6

## ine">换行
四个及以上空格加回车。

## 链接
```
跳至[落网](http://www.luoo.net/)    
新窗口跳至<a href="http://www.luoo.net/" target="_blank">落网</a>    
带title的链接 [落网](http://www.luoo.net/ '落网')    
地址与文字一样的链接的简写 <http://www.baidu.com>

```

转化成HTML的效果如下    

跳至[落网](http://www.luoo.net/)    
新窗口跳至<a href="http://www.luoo.net/" target="_blank">落网</a>    
带title的链接 [落网](http://www.luoo.net/ '落网')    
地址与文字一样的链接的简写 <http://www.baidu.com>

## 图片
```
![头像](https://avatars0.githubusercontent.com/u/2120155?v=3&s=40)

```

转化成HTML的效果如下    
![头像](http://upload-images.jianshu.io/upload_images/16777-84f8df4fcc2f570b?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 列表
有序列表    
```
1. 第一个
    1. 第1.1个
1. 第二个
1. 第三个
```

转化成HTML的效果如下    

1. 第一个
  1. 第1.1个
1. 第二个
1. 第三个

无序列表    
```
* 葡萄
    * 夏黑
    * 巨峰
* 荔枝
* 梨
```

转化成HTML的效果如下    

* 葡萄
  * 夏黑
  * 巨峰
* 荔枝
* 梨


## 强调
```
**强调内容**
```
转化成HTML的效果如下    
**强调内容**

## 斜体
```
*斜体内容*
```

转化成HTML的效果如下    
*斜体内容*

## 删除线
```
~~这种理解是有问题的~~
```

转化成HTML的效果如下    
~~这种理解是有问题的~~

## 分割线
```
****
```

转化成HTML的效果如下    
****

## 行内代码
```
`npm i`
```

转化成HTML的效果如下    
`npm i`

## 块级代码
```
3个`js
function say(str){
    console.log(str);
}
3个`

3个`css
#main{
    width: 80%;
    margin: 20px auto;
}
3个`
```
转化成HTML的效果如下    
```js
function say(str){
  console.log(str);
}
```

```css
#main{
  width: 80%;
  margin: 20px auto;
}
```

## 表格
```
| Tables        | Are           | Cool  |
| :------------ |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

转化成HTML的效果如下    

| Tables        | Are           | Cool  |
| :------------ |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## 引用
```
> 天才就是99%的努力加上1%的灵感。-爱迪生
```

转化成HTML的效果如下    
> 天才就是99%的努力加上1%的灵感。-爱迪生

## 块状元素
```
∙∙∙∙天才就是99%的努力加上1%的灵感。
∙∙∙∙1%的灵感是很重要的。
∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙-爱迪生
```
其中`∙`代表空格。

转化成HTML的效果如下    

    天才就是99%的努力加上1%的灵感。
    1%的灵感是很重要的。
                            -爱迪生

## 复选框
```
- [x] Be awesome
- [ ] Prepare dinner
  - [x] Research recipe
  - [ ] Buy ingredients
  - [ ] Cook recipe
- [ ] Sleep
```

转化成HTML的效果如下（简书还不支持复选框，Github支持）    
- [x] Be awesome
- [ ] Prepare dinner
  - [x] Research recipe
  - [ ] Buy ingredients
  - [ ] Cook recipe
- [ ] Sleep

## 转义
Markdown 可以利用反斜杠来插入一些在语法中有其它意义的符号，例如：如果你想要用星号加在文字旁边的方式来做出强调效果（但不用`<em>`标签），你可以在星号的前面加上反斜杠：
```
\*sth\*
```
转化成HTML的效果如下    
\*sth\*

## 参考
* [Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* <http://www.markdown.cn/>

## 拓展阅读
* http://www.markdown.cn/
* [Markdown 语法说明 (简体中文版)](http://wowubuntu.com/markdown/)
