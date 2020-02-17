属性值inital是指CSS规范（[CSS specifications](http://www.w3.org/Style/CSS/specs)）指定的值。
例如规范中定义： display 的 inital 值为 inline； color 的为 black； float 的为 none。则如下的代码
```
p{
	display: initial;
	color: initial;
	float: initial;
}
```
等效于
```
p{
	display: inline;
	color: #000;
	float: none;
}
```

## 浏览器兼容性
IE不支持该属性值。

## 参考
* http://www.quirksmode.org/css/cascading/values.html
* http://stackoverflow.com/questions/18534561/what-is-use-of-initial-value-in-css
* http://demosthenes.info/blog/345/Understanding-UA-StyleSheets-and-the-CSS3-initial-Value
