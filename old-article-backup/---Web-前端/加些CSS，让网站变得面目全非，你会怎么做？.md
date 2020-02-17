我想到的一些玩法如下。

## 玩法1: 让页面一片空白
可以这么写
```
html {
  display: none !important;
}
```

或这么写
```
html {
  visibility: hidden !important;
  background: #fff !important;
}
```

或这么写
```
html:before {
  content: '' !important;
  position: fixed !important;
  z-index: 99999 !important;
  top: 0 !important;
  left: 0 !important;
  height: 100% !important;
  width: 100% !important;
  background: #fff !important;
  /*
  这么玩也很有意思
  background-image: url(随心所欲的图片);
  background-size: cover;
  */
}
```

或这么写
```
html{
  transform: rotate(180deg) !important;
  transform-origin: 0 0 !important;
  background: #fff !important;
}
```


## 玩法2: 恶俗的配色
```
*:nth-child(3n) {
  color: yellow;
  background-color: red !important;
}
*:nth-child(3n+1) {
  color: blue;
  background-color: green !important;
}
*:nth-child(3n+2) {
  color: red;
  background-color: blue !important;
}
```

## 玩法3:  搞乱布局
```
*:nth-child(odd) {
  position: absolute;
}
```

搞乱布局有太多的写法了，就不一一举例了。

## 玩法4: 让字变的不能看
```
*:nth-child(odd) {
  font-size: 100px;
  letter-spacing: 2em;
  transform: skew(30deg);
}
```

## 玩法5: 变形
让页面倒过来
```
html{
  transform: rotate(180deg) !important;
}
```

## 玩法6: 闪瞎眼的动画
```
html{
  animation: 1s flash infinite !important;
}
@keyframes flash {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```
