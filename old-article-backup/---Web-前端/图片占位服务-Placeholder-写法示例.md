在做页面时，页面上的一些图片需要找临时图片来占位。[Placeholder](http://placehold.it/) 提供好用的占位图服务。

## 使用方法
只需将图片的地址按如下格式设置
```
http://via.placeholder.com/宽x高/背景色/字的颜色?text=占位文字
```

其中：
* 高，背景色，字的颜色和占位文字都是可选的。
* 高的默认值等于宽
* 背景色，字的颜色的值为16进制的颜色值，不带`#`
* 占位文字不支持中文，只支持数字，字母和大多数符号。空格用 `+` 号。


## 示例
### 200x100 的占位图
```
http://via.placeholder.com/200x100
```

效果如下
![](http://upload-images.jianshu.io/upload_images/16777-3849172b091445bc?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 宽高相等的占位图
```
http://via.placeholder.com/200
```

效果如下
![](http://upload-images.jianshu.io/upload_images/16777-f7dbac87fff72c10?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 自定义占位字颜色和背景色
```
http://via.placeholder.com/200/f60/fff
```

效果如下
![](http://upload-images.jianshu.io/upload_images/16777-07cfae235d23a895?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 自定义占位文字
```
http://via.placeholder.com/200?text=Hello+world!
```

效果如下
![](http://upload-images.jianshu.io/upload_images/16777-0c4e2ea30a3bc204?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
