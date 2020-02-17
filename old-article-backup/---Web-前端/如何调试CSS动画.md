我们在做某个复杂的动画，或者多个元素同时做动画时，我们需要查看动画在某些时间点的元素的状态。此时动画应该是暂停的，这样方便我们进行查看。

因此，要方便调试，我们要做的是
1. 让动画停下来
1. 让动画处于我们要调试的时间点 

为了达到上面的目的，我们要对需要调试的动画元素样式做如下的设置：
1. 让动画停下来：`animation-play-state: paused;`
1. 让动画处于我们要调试的时间点 : `animation-delay: -调试时间;`。`animation-delay`的值，如果是正值，表示过指定时间后再开始动画。而如果是负值，动画会预先运动指定时间，这正是我们想要~

完整来写
```
.debug-anim {
    animation-play-state: paused !important;
    animation-delay: -3s !important;/* 这里假定是要调试动画在3s时的状态 */
}
```

最后，只需给需要调试的元素加上类名`debug-anim`即可。

Happy Coding~

## 参考
* [调试 CSS Keyframe 动画](http://www.w3ctech.com/topic/1472)

## 猜你喜欢
* [Web动画性能介绍](http://www.jianshu.com/p/813d9b674333)
* [选择合适的动画缓动函数](http://www.jianshu.com/p/9b6824f7af51)

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
