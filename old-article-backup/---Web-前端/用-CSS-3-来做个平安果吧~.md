圣诞将至，我们就用 CSS 3 来做个平安果吧~ 愿所有程序猿和媛们都平安夜不加班~

进入正题，我们要做如下的平安果。思路是把平安果分成几个部分，每个部分的曲线用 [**border-radius**](https://css-tricks.com/almanac/properties/b/border-radius/)，再加上 transform, clip 之类的 CSS 特性来做。

![preview](http://upload-images.jianshu.io/upload_images/16777-ed5c26141d65d6c5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 上面部分
HTML
```
<div class="apple">
    <div class="top-wrap">
        <div class="top left"></div>
        <div class="top right"></div>
    </div>
</div>
```

CSS
```
.apple {
    position: relative;
    width: 172px;
    height: 202px;
}

.top{
    position: absolute;
    top: 0;
    border-radius: 108px/128px;
    width: 108px;
    height: 100%;
    background-color: #e03a3e;
}

.top-wrap{
    position: absolute;
    top: 47px;
    height: 128px;
    width: 100%;
    overflow: hidden;
}

.top.left {
    left: 0;
}

.top.right {
    right: 0;
}
```

效果如下
![step-1](http://upload-images.jianshu.io/upload_images/16777-6c65f7fefd25b1ba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 下面部分
HTML
```
<div class="apple">
    <div class="top-wrap">
        <div class="top left"></div>
        <div class="top right"></div>
    </div>
    <div class="bottom-wrap">
        <div class="bottom left"></div>
        <div class="bottom right"></div>
    </div>
</div>
```

CSS
```
.bottom-wrap {
    position: absolute;
    top: 98px;
    height: 104px;
    width: 100%;
    overflow: hidden;
}


.bottom {
    position: absolute;
    background-color: #e03a3e;
    border-radius: 22px 22px 64px 64px/106px 106px 106px 106px;
    height: 106px;
    top: 0;
    width: 64px;
}

.bottom.left {
    transform: rotate(-25deg);
    left: 12px;
}

.bottom.right {
    transform: rotate(25deg);
    right: 12px;
}
```
效果如下
![step-2](http://upload-images.jianshu.io/upload_images/16777-83439d045dd07ee9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 填充中间部分
HTML
```
<div class="apple">
    <div class="top-wrap">
        <div class="top left"></div>
        <div class="top right"></div>
    </div>
    <div class="bottom-wrap">
        <div class="bottom left"></div>
        <div class="bottom right"></div>
    </div>
    <div class="middle"></div>
</div>
```

CSS
```
.middle{
    position: absolute;
    top: 55px;
    left: 50%;
    transform: translateX(-50%);
    height: 145px;
    width: 70px;
    background-color: #e03a3e;
}
```
效果如下
![step-3](http://upload-images.jianshu.io/upload_images/16777-75081bcc6798cf40.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 修饰一下头尾的曲线
HTML
```
<div class="apple">
    <div class="top-wrap">
        <div class="top left"></div>
        <div class="top right"></div>
    </div>
    <div class="bottom-wrap">
        <div class="bottom left"></div>
        <div class="bottom right"></div>
    </div>
    <div class="middle"></div>
    <div class="bottom-radius"></div>
    <div class="top-radius"></div>
</div>
```

CSS
```
.bottom-radius,
.top-radius {
    position: absolute;
    background-color: #e03a3e;
    left: 50%;
    transform: translateX(-50%);
}

.bottom-radius {
    position: absolute;
    border-radius: 50%;
    height: 22px;
    top: 192px;
    width: 48px;
    background-color: #fff;
}

.top-radius {
    top: -26px;
    border-radius: 20px;
    height: 80px;
    transform: translateX(-50%) rotate(-45deg) scale(0.9);
    width: 80px;
    background-color: #fff;
}
```
效果如下
![step-4](http://upload-images.jianshu.io/upload_images/16777-049a930f0cf1890b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 平安果柄
HTML
```
<div class="apple">
    <div class="handle"></div>
    <div class="top-wrap">
        <div class="top left"></div>
        <div class="top right"></div>
    </div>
    <div class="bottom-wrap">
        <div class="bottom left"></div>
        <div class="bottom right"></div>
    </div>
    <div class="middle"></div>
    <div class="bottom-radius"></div>
    <div class="top-radius"></div>
</div>
```

CSS
```
.handle {
    position: absolute;
    z-index: 100;
    left: 122px;
    top: -22px;
    transform: rotate(40deg);
    background-color: #62bb47;
}

.handle:before,
.handle:after {
    background-color: #62bb47;
    border-radius: 50%;
    content: "#";
    display: block;
    height: 90px;
    position: absolute;
    text-indent: -9999px;
    width: 90px;
}

.handle:before {
    clip: rect(0 13px 80px 0px);
}

.handle:after {
    clip: rect(14px 100px 76px 76px);
    left: -64px;
}
```
完成啦~
![done](http://upload-images.jianshu.io/upload_images/16777-ed5c26141d65d6c5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

[完整代码](https://github.com/iamjoel/front-end-note/blob/master/demo/apple-icon/demo.html)

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
