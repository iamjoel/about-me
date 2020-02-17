

`escape`,`encodeURI`,`encodeURIComponent`这三个方法都是对URL进行编码的。

`escape`这个方法在ECMAScript v3中废弃，因此不要使用。

`encodeURIComponent`和`encodeURI`相比，会对更多的符号进行编码。包括`=`和`&`。如图所示

![difference.png](http://upload-images.jianshu.io/upload_images/16777-4d765ea03f13057c.png)

生成该结果的的代码如下
```
var arr = [];
for(var i=0;i<256;i++) {
  var char=String.fromCharCode(i);
  if(encodeURI(char)!==encodeURIComponent(char)) {
    arr.push({
      character:char,
      encodeURI:encodeURI(char),
      encodeURIComponent:encodeURIComponent(char)
    });
  }
}
console.table(arr);
```

因此，当要对整个URL进行编码时，使用`encodeURI`。
编码参数用`encodeURIComponent`。如下所示：
```
//对整个URL进行编码
encodeURI('http://xyz.com/?a=12&b=55'); 
// 编码参数
'http://xyz.com/?a=' + encodeURIComponent('酷&炫');
```







