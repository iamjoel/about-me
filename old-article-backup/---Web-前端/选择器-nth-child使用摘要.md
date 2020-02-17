`:nth-child`匹配下标满足条件的子元素。

## 常见的用法
现在有如下的HTML
```
	<ul>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
```
来匹配下标满足如下条件的元素
* 第1个 `li:first-child`
* 第5个  `li:nth-child(5)`
* 第1个到第5个  `li:nth-child(-n+5)`
* 第6个到最后 `li:nth-child(n+6)`
* 最后1个 `li:last-child`
* 倒数第二个 `li:nth-last-child(2)`
* 奇数个 `li:nth-child(odd)` 或 `li:nth-child(2n+1)`
* 偶数个 `li:nth-child(even)` 或 `li:nth-child(2n)`

## 兼容性
IE9+，Firefox，Chrome。
让IE6+支持`:nth-child`方法是，可以用[selectivizr](http://selectivizr.com/)

## 其他
* [:nth Tester](http://css-tricks.com/examples/nth-child-tester/) 帮助理解`:nth-child`和`:nth-of-type`
* [the-difference-between-nth-child-and-nth-of-type](http://css-tricks.com/the-difference-between-nth-child-and-nth-of-type/)




