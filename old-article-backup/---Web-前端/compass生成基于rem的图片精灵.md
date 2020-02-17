用[compass](http://compass-style.org/)来做基于px单位的图片精灵很简单，具体见[这里](http://compass-style.org/help/tutorials/spriting/)。

基于rem做图片精灵有些麻烦，思路是
1. 图片精灵的那张图片的`background-size`使用rem
1. `background-position`也使用rem

具体实现如下
1 我们需要用到compass提供的一些操作图片精灵的api，所以需要引入相应的包
```
@import "compass/utilities/sprites";
```

2 获取图片精灵对象
```
$sprites:sprite-map("图片文件夹/*.png", $spacing:10px, $layout: vertical);
```
上面的代码，将图片文件夹下所以的png图片生成一张图片精灵,并且图片间的间距为10px，垂直放置。关于这api的详细描述见[这里](http://compass-style.org/reference/compass/helpers/sprites/#sprite-map)。

3 下面介绍下获取图片精灵的一些信息api

```
sprite-width($sprites) ;// 图片精灵的宽
sprite-height($sprites); // 图片精灵的宽
sprite-url($sprites); //图片精灵的路径
sprite-position($sprites, $name); //某张图片在图片精灵中的位置。可以直接作为background-position的值。
nth(sprite-position($sprites, $name), 1) ;//某张图片在图片精灵中的x的位置
nth(sprite-position($sprites, $name), 2) ;//某张图片在图片精灵中的y的位置
image-width(sprite-file($sprites, $name));//某张图片的宽
image-height(sprite-file($sprites, $name));//某张图片的高
```
上面的$sprites是第二步中获取的图片精灵对象


4 px转化成rem以及一些工具方法

```
$divide: 10;
$ppr: 640px/$divide/1rem;
$pprVal: 640/10;

// 去单位
@function strip-units($number) {
    @return $number / ($number * 0 + 1);
}

// 将值转化成以rem为单位的
@function addRemUnit($val, $unit: px) {
    @if $val !=0 {
        $val: $val/$pprVal;
        $val: $val + rem;
    }
    @return $val;
}
```

5 生成某张图片的样式

```
@mixin rem-sprite($sprites, $name) {
    background-repeat: no-repeat;
    background-image: sprite-url($sprites); //雪碧图路径
    background-position: addRemUnit(strip-units(nth(sprite-position($sprites, $name), 1))) addRemUnit(strip-units(nth(sprite-position($sprites, $name), 2)));
    background-size: sprite-width($sprites)/$ppr sprite-height($sprites)/$ppr;
}
```

6 有时候，我们需要将背景图的位置做一些调整
```
//$offset-x的正值向右移，$offset-y的正值向下移
@mixin rem-sprite-pos($sprites, $name, $offset-x: 0, $offset-y: 0) {
    background-position: addRemUnit(strip-units(nth(sprite-position($sprites, $name), 1)) + $offset-x) addRemUnit(strip-units(nth(sprite-position($sprites, $name), 2)) + $offset-y);
}
```

7 有时候，我们需要设置元素的大小

```
@mixin rem-sprite-size($sprites, $name) {
    height: image-width(sprite-file($sprites, $name))/$ppr; //目标图片高度
    width: image-height(sprite-file($sprites, $name))/$ppr; //目标图片宽度
}
```

8 调用
```
.icon-图片名称{
        @include rem-sprite($sprites, 图片名称);
        @include rem-sprite-size($sprites,图片名称); //可选
       @include rem-sprite-pos($sprites,图片名称, 10, (64-48)/2);//可选
}
```

完整代码如下
```
@import "compass/utilities/sprites";
// api 见 http://compass-style.org/reference/compass/helpers/sprites/#sprite-map
$sprites:sprite-map("图片文件夹/*.png", $spacing:10px, $layout: vertical);
$divide: 10;
$ppr: 640px/$divide/1rem;
$pprVal: 640/10;
// 去单位
@function strip-units($number) {
    @return $number / ($number * 0 + 1);
}

@function addRemUnit($val, $unit: px) {
    @if $val !=0 {
        $val: $val/$pprVal;
        $val: $val + rem;
    }
    @return $val;
}


// 将图片精灵的图片大小和位置进行缩放。实现方式通过把单位由px变成rem
@mixin rem-sprite($sprites, $name) {
    background-repeat: no-repeat;
    background-image: sprite-url($sprites); //雪碧图路径
    background-position: addRemUnit(strip-units(nth(sprite-position($sprites, $name), 1))) addRemUnit(strip-units(nth(sprite-position($sprites, $name), 2)));
    background-size: sprite-width($sprites)/$ppr sprite-height($sprites)/$ppr;
}

@mixin rem-sprite-size($sprites, $name) {
    height: image-width(sprite-file($sprites, $name))/$ppr; //目标图片高度
    width: image-height(sprite-file($sprites, $name))/$ppr; //目标图片宽度
}

//$offset-x的正值向右移，$offset-y的正值向下移
@mixin rem-sprite-pos($sprites, $name, $offset-x: 0, $offset-y: 0) {
    background-position: addRemUnit(strip-units(nth(sprite-position($sprites, $name), 1)) + $offset-x) addRemUnit(strip-units(nth(sprite-position($sprites, $name), 2)) + $offset-y);
}

.icon-图片名称{
        @include rem-sprite($sprites, 图片名称);
        @include rem-sprite-size($sprites,图片名称);
       @include rem-sprite-pos($sprites,图片名称, 10, (64-48)/2);
}
```

## 参考
* [compass做雪碧图](http://www.cnblogs.com/pingfan1990/p/4421039.html)
