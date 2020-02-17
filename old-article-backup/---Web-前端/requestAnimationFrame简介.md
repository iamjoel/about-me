## 概述
当我们写`window.requestAnimationFrame(回调函数)`时，浏览器会在下次重绘前执行回调函数。

我们可以用它来做连贯的[逐帧动画](http://zh.wikipedia.org/zh/%E5%AE%9A%E6%A0%BC%E5%8A%A8%E7%94%BB)。例如：
```
function render(){
     // 一些更新界面的操作
     requestAnimationFrame(render);
}

render();
```

在没有`requestAnimationFrame`方法之前，我们只能用`setTimeout`或`setInterval`来实现类似的效果
```
function render(){
     // 一些更新界面的操作
    setTimeout(render, 1000/60);// 一般浏览器是每秒60帧
}

render();
```
这样写的存在的问题是：如果浏览器不是每秒60帧，会造成掉帧。
还有，在性能方面，大部分在浏览器在标签页/窗口处于的时候非激活状态（如窗口最小化或标签页切换了）时，`requestAnimationFrame`是不会被执行的，而`setTimeout/setInterval` 会。具体如下
![requestAnimationFrameIsStop.png](http://upload-images.jianshu.io/upload_images/16777-76f50c3c6915ea7b.png)

如上图所示， 只有 Firefox和chrome对 `setInterval`做了优化：只有时间间隔超过1s，setInterval才会在非激活的标签页/窗口中执行。



## 浏览器兼容性
![browserCompatibility.png](http://upload-images.jianshu.io/upload_images/16777-47bb0ae480b6b1b5.png)


## 兼容处理
在老的浏览器中，`requestAnimationFrame`的方法名是带浏览器前缀的。以下是张鑫旭为在各个浏览器中能统一的调用`requestAnimationFrame`做的处理。不支持`requestAnimationFrame`的用`setTimeout`来代替。
```
/* requestAnimationFrame.js
 * by zhangxinxu 2013-09-30
*/
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // name has changed in Webkit
                                      window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());
```
这样，就可以在所有的浏览器（包括IE6）中使用`requestAnimationFrame`啦~


## 参考
* [CSS3动画那么强，requestAnimationFrame还有毛线用？](http://www.zhangxinxu.com/wordpress/2013/09/css3-animation-requestanimationframe-tween-%E5%8A%A8%E7%94%BB%E7%AE%97%E6%B3%95/?replytocom=58195#respond)
* https://developer.mozilla.org/zh-CN/docs/Web/API/window.requestAnimationFrame
* [翻译：setInterval与requestAnimationFrame的时间间隔测试](http://segmentfault.com/blog/humphry/1190000000386368)



