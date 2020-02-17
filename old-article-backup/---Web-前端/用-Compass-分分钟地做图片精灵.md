对于页面仔来说，做图片精灵是一件枯燥无聊又废时的事。然后不甘于现状的人们发明了些做图片精灵的工具。我觉得用 [Compass](http://compass-style.org/) 来做图片精灵是最快速简单的。

先来说说我们不用工具的情况下，做图片精灵的流程。
1. 创建一张背景是透明的图片。将一系列图标放到该图片中。图标间会留一些间距。裁切掉透明的空白部分。
2. 查看图标的大小，以及在图片精灵中的位置，写类似这样的 CSS

```
.icon{
  display: inline-block;
  background-image: url(图片精灵路径);
  background-repeat: no-repeat;
}

.icon--facebook{
  width: 图标宽度;
  height: 图标高度;
  background-position: 图标在图片精灵中的位置;
}

.icon--flickr{
  width: 图标宽度;
  height: 图标高度;
  background-position: 图标在图片精灵中的位置;
}
```

以后，新增或删除图标后，需要手动修改图片精灵图片。为了使修改后的图片精灵的图像质量比较高，一般都会保存一份 psd 格式的图片精灵。修改都是在 psd 上改，然后导出。

如果用 Compass ，只需写如下几行代码
1 创建图片精灵图片。可以用 [sprite-map($glob, [配置1,] [配置2,][ ...])](http://compass-style.org/reference/compass/helpers/sprites/#sprite-map) 来实现。如：

```
$sprites: sprite-map('icons/*.png', $spacing: 10px, $layout: 'vertical');
```
上面代码的意思是：将 config.rb 中配置的 `images_dir` 路径下的 `icons/` 文件夹下所有的 png 图片做成图片精灵，图标垂直放置，图标之间的垂直间距为 10px。

2  获取图标精灵的路径，获取图标的大小，以及在图片精灵中的位置。Compass中也提供了一系列的方法获取这些值。

```
@import "compass/utilities/sprites";

$sprites: sprite-map('icons/*.png', $spacing: 10px, $layout: 'vertical');

.icon{
  display: inline-block;
  background-image: sprite-url($sprites);
  background-repeat: no-repeat;
}

.icon--facebook{
  $iconPath: sprite-file($sprites, 图标文件名称(不包含文件拓展名)); // 图标文件的路径
  width: image-width($iconPath);
  height: image-height($iconPath);
  background-position: 0 nth(sprite-position($sprites, $图标文件名称), 2);// 因为是垂直放的
}

.icon--flickr{
  $iconPath: sprite-file($sprites, 图标文件名称(不包含文件拓展名)); // 图标文件的路径
  width: image-width($iconPath);
  height: image-height($iconPath);
  background-position: 0 nth(sprite-position($sprites, $图标文件名称), 2);// 因为是垂直放的
}
```

以后，新增，删除图标后，只要运行 Compass 的编译命令，都会自动生成新的图片精灵图片。就这么方便 XD~

如果要做响应式的图片精灵怎么办？

解决方案是：图片的宽，高和 background-postion 都要用 rem 做单位，并且设置 bacgroud-size。但 background-position 也用 rem 做单位的话，会有定位不准的 bug， 所幸，background-position 用百分数的话，可以解决这个 bug。具体描述见 [完美解决移动端使用 rem 单位时 CSS Sprites 错位问题](https://github.com/banricho/webLog/issues/1)。


最后，写个图片精灵的工具方法。调用我的工具方法，图片精灵就更简单啦，代码如下
```
@import "sprite"; // 导入定义工具方法的文件

.icon {
    display: inline-block;
    $sprites: creatSprite('icons/*.png');// 将icons下所有png图片生成图片精灵。
    &--facebook {// 非响应式图标
        @include icon('facebook', $sprites);
    }
    &--facebook-rem{ // 响应式图标
        @include icon('facebook', $sprites, true);
    }
    &--flickr {
        @include icon('flickr', $sprites);
    }
    &--flickr-rem{
        @include icon('flickr', $sprites, true);
    }
}
```

工具代码
```
@import "compass/utilities/sprites";

// 将 px 转化成 rem
@function pxToRem($pxVal) {
  $pxVal : $pxVal / ($pxVal * 0 + 1);// 去单位
  @if  $pxVal == 0{
    @return 0;
  } @else {
    @return $pxVal/64 * 1rem;
  }
}

// 生成图片精灵
@function creatSprite($globImgPath, $spacing: 10px){
  @return  sprite-map($globImgPath, $spacing: $spacing, $layout: vertical);
}

@mixin icon($name, $sprites, $isRem: false) {
    $iconPath: sprite-file($sprites, $name); // 图标文件的路径
    $iconWidth: image-width($iconPath);
    $iconHeight: image-height($iconPath);
    $iconPosXInSprite: 0;// 垂直放的
    $iconPosYInSprite: nth(sprite-position($sprites, $name), 2);
    background-repeat: no-repeat;
    background-image: sprite-url($sprites);
    @if $isRem {
      width: pxToRem($iconWidth);
      height: pxToRem($iconHeight);
      $spriteWidth: sprite-width($sprites);
      $spriteHeight: sprite-height($sprites);
      /*
      * 完美解决移动端使用 rem 单位时 CSS Sprites 错位问题
      * (https://github.com/banricho/webLog/issues/1
      */
      @if $iconPosYInSprite != 0 {
        $iconPosYInSprite: $iconPosYInSprite / ($iconHeight - $spriteHeight) * 100%;
      }
      background-position: $iconPosXInSprite $iconPosYInSprite;
      background-size: pxToRem($spriteWidth) pxToRem($spriteHeight);
    } @else {
      width: $iconWidth;
      height: $iconWidth;
      background-position: $iconPosXInSprite $iconPosYInSprite;
    }
}
```

完整 Demo 见[这里](https://github.com/iamjoel/front-end-note/tree/master/detail/comprehensive/compass-css-sprite)。

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**

