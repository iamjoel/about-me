## 单个块级元素的居中
```
@mixin center-block() {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
```

## 多个块级元素占一行
用 `display: inline-block` 来实现
```
@mixin row($parent-selector, $item-selector, $font-size: 12px, $vertical-align: top) {
  #{$parent-selector} {
    font-size: 0;// 防止子元素的空白元素占据空间
  }
  #{$item-selector} {
    display: inline-block;
    vertical-align: $vertical-align;// 防止子元素高度不同导致的奇怪的对齐
    font-size: $font-size;
  }
}
```

用 flex 来实现
```
@mixin row() {
  display: flex;
}
```

## 多个块级元素的居中
用 `display: inline-block` 来实现
```
@mixin center-blocks($parent-selector, $item-selector, $font-size: 12px, $vertical-align: top) {
  @include row($parent-selector, $item-selector, $font-size: 12px, $vertical-align: top);
  #{$parent-selector} {
    text-align: center;
  }
}
```

用 flex 来实现
```
@mixin center-blocks($parent-selector) {
  #{$parent-selector} {
    @include row;
    justify-content: center;
  }
}
```

## 两端对齐
用 `display: inline-block` 来实现
```
@mixin justify-blocks($parent-selector, $item-selector, $font-size: 12px, $vertical-align: top) {
  @include row($parent-selector, $item-selector, $font-size: 12px, $vertical-align: top);
  #{$parent-selector} {
    text-align: justify;
    &:after {
      content: '';
      display: inline-block;
      width: 100%;
    }
  }
}
```

用 flex 来实现
```
@mixin justify-blocks($parent-selector) {
  #{$parent-selector} {
    @include row;
    justify-content: space-between;
  }
}
```

##  多个块级元素占一行，某个元素占据剩余部分
用 `display: table` 来实现
```
@mixin item-fill($parent-selector, $item-selector, $fill-item-selector, $vertical-align: top) {
  #{$parent-selector} {
    display: table; // 兼容性相当好。IE8+ 都支持 http://caniuse.com/#feat=css-table
  }
  #{$item-selector} {
    display: table-cell; // 兼容性相当好。IE8+ 都支持 http://caniuse.com/#feat=css-table
    vertical-align: $vertical-align;
  }
  #{$fill-item-selector} {
    width: 100%;
  }
}
```

用 flex 来实现
```
@mixin item-fill($parent-selector,  $fill-item-selector) {
  #{$parent-selector} {
    @include row;
  }
  #{$fill-item-selector} {
    -webkit-flex-grow: 1;
    flex-grow: 1;
  }
}
```

## 完整源码
* [_layout.scss](https://github.com/iamjoel/front-end-scaffold/blob/master/src%2Fassets%2Fscss%2Fmixins%2F_layout.scss)
* [flex 实现](https://github.com/iamjoel/front-end-scaffold/blob/master/src/assets/scss/mixins/_layout-flex.scss)

## 参考链接
*  [Almost complete guide to flexbox (without flexbox)](http://kyusuf.com/post/almost-complete-guide-to-flexbox-without-flexbox)
* [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
