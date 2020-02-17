Box Shadow 可以用来
先介绍一下CSS Box Shadow 的语法
```
box-shadow: 
      [horizontal offset] [vertical offset] [blur radius] 
      [spread radius] [color] [inset];
```
说明：    
* h-shadow	必需。水平阴影的位置。允许负值。
* v-shadow	必需。垂直阴影的位置。允许负值。
* blur	可选。模糊距离。默认值为0。
* spread	可选。阴影的尺寸。默认值为0。若为正值，则比自身大，负值则比自身小。
* color	可选。阴影的颜色。
* inset	可选。将外部阴影 (outset) 改为内部阴影。值为inset。

例如，我们写如下的代码
```
.shadow {
	-moz-box-shadow: 3px 3px 5px 6px #ccc;
	-webkit-box-shadow: 3px 3px 5px 6px #ccc;
	box-shadow: 3px 3px 5px 6px #ccc;
}
```
其效果如下
![Box Shadow.png](http://upload-images.jianshu.io/upload_images/16777-f400527abb99cecb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

有意思的是，Box Shadow支持多个值,值之间用`,`分隔。也就是说，一个元素上可以有任意多个阴影。如果我们只设置阴影的水平和垂直偏移量，不设置模糊距离（默认为0，即不模糊），则可以达到用Box Shadow拷贝自身的目的~如果我们这样写N多个值，就可以拷贝N个自身。然后还可以通过spread来调节拷贝的大小，color来调节拷贝的背景色。

如下图中邮票的边缘，即为一个圆形不断拷贝，而形成的

![demo.png](http://upload-images.jianshu.io/upload_images/16777-907054b90acd19ed.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240)

主要代码为
```
.target {
    	background-color: #fff;
        position: relative;
        width: 195px;
        height: 195px;
        margin: 50px auto;
        overflow: hidden;
    }
    
    .target::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: rgb(114, 188, 191);
        box-shadow: 15px 0 0 rgb(114, 188, 191), 
                    30px 0 0 rgb(114, 188, 191), 
                    45px 0 0 rgb(114, 188, 191), 
                    60px 0 0 rgb(114, 188, 191), 还有很多;
    }
```

Have Fun！

## 猜你喜欢
* [CSS伪元素介绍](http://www.jianshu.com/p/a52ed387e540)
* [CSS字体](http://www.jianshu.com/p/c5a4e15b4122)
