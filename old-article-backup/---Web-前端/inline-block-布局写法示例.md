## 多个元素在一行
HTML
```
<div class="ly">
  <div class="ly__item">xxx</div>
  <div class="ly__item">xxx</div>
  <div class="ly__item">xxx</div>
  <div class="ly__item">xxx</div>
</div>
```

CSS

```
.ly {
  display: table; // For Android: Android doesn't fill in `inline-block` gaps. `display: table;` magic fills in them.
  width: 100%;
  font-size: 0 !important; // 让空格，tab，回车之类空白的不占空间
}
.ly__item {
  display: inline-block;
  vertical-align: top;
  font-size: medium; // 这只是示例。可根据实际情况设置。
}
```

## 多个元素水平居中对齐
```
.ly {
  display: table; 
  width: 100%;
  font-size: 0 !important;
  text-align: center;
}
.ly__item {
  display: inline-block;
  vertical-align: top;
  font-size: medium;
}
```

## 多个元素水平两端对齐
```
.ly {
  display: table; 
  width: 100%;
  font-size: 0 !important;
  text-align: justify;
}
.ly:after {
  content: '';
  width: 100%;
  display: inline-block;
}
.ly__item {
  display: inline-block;
  vertical-align: top;
  font-size: medium;
}
```

注意：如果元素之间如果没有空格，回车之类的，两端对齐会失效。如，用 Angular 的 `ng-repeat` 生成出来的元素之间就就没有空格。

## 多个元素在一行，某个元素占据剩余部分
```
.ly {
  display: table; 
  width: 100%;
  font-size: 0 !important;
}
.ly__item {
  display: table-cell;
  font-size: medium;
}
// 给占据剩余部分的元素加该类名
.ly__item--fill {
  width: 100%;
  
}
```

## 多个元素水平居右对齐
```
.ly {
  display: table; 
  width: 100%;
  font-size: 0 !important;
  text-align: right;
}
.ly__item {
  display: inline-block;
  vertical-align: top;
  font-size: medium;
}
```

## 多个元素垂直居中
```
.ly {
  display: table; 
  width: 100%;
  font-size: 0 !important;
}
.ly:after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.ly__item {
  display: inline-block;
  vertical-align: middle;
  font-size: medium;
}
```
