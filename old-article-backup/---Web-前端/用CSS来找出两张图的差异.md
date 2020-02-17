本文源自对[Image diffing using CSS](http://franklinta.com/2014/11/30/image-diffing-using-css/)的理解。

现在有以下两张图片，找出它们之间的差异。

![图1](http://upload-images.jianshu.io/upload_images/16777-58f2be6e3949a6f7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![图2](http://upload-images.jianshu.io/upload_images/16777-205fe779d8f9bf93.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

方法是，将两张图片重叠，高亮出不同的部分。用CSS 主要有两种方法。

方法一：在位于上面的图上设置如下样式
```
-webkit-filter: invert(100%) opacity(50%);
		filter: invert(100%) opacity(50%);
```
作用后的效果如下图

![用filter的效果](http://upload-images.jianshu.io/upload_images/16777-b41532c67821557d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

其中，灰色的部分为相同的部分，并且灰色的部分的颜色值为`rgb(127.5, 127.5, 127.5)`。

原理如下。
假设：图1上某点的颜色值为`rgb(cr1, cg1, cb1)`,图2上相同位置的点的颜色值为`rgb(cr2, cg2, cb2)`,图1为在上面的图片。

当图1作用`filter: invert(100%)`时，该点的颜色值为 `rgb(255 - cr1 + cr2, 255 - cg1 + cg2, 255 - cb1 + cb2)`。

当作用`opacity(50%)`时，该点的颜色值为`rgb((255 - cr1 + cr2)/2, (255 - cg1 + cg2)/2, (255 - cb1 + cb2)/2)`。 

由此可知，如果图1上某点的颜色和对应的图2上某点的颜色值一样的话，该点的颜色值为`rgb(255/2, 255/2, 255/2)`，即 `rgb(127.5, 127.5, 127.5)`。

方法2：在位于上面的图上设置如下样式
```
		mix-blend-mode: difference;
```
作用后的效果如下图
![用mix-blend-mode.png的效果](http://upload-images.jianshu.io/upload_images/16777-cefa79bd199f6592.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

其中，黑色的部分为相同的部分。

原理可见[这里的描述](https://drafts.fxtf.org/compositing-1/#blendingdifference)。

## 应用
有了这个技巧，我们在做页面时，方便的找出做的页面与设计稿不一样的地方。毕竟，[人眼并不擅长找两个图片中的细微的不同](https://en.wikipedia.org/wiki/Change_blindness)。

开个脑洞，现在，我们需要某个页面是否在两个不同浏览器上的UI 像素级完全的一致。
那么我们可以这样实现
1. 用无头浏览器分别在不同的浏览器的UI进行截图
1. 创建一个页面，该页面放的是，两张重叠的截图，并设置`filter: invert(100%) opacity(50%);`。然后再进行截图。
1. 读取截图，若截图的每个像素点颜色均为`rgb(127.5, 127.5, 127.5)`，则说明该页面在两个浏览器上UI像素级一致。

用[PhantomCSS](https://github.com/Huddle/PhantomCSS)可以做类似的事。
