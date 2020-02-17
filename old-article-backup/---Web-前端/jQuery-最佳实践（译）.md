原文 http://shichuan.github.io/javascript-patterns/#jquery-patterns

## [重复查询](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/requery.html)
> 通过链式写法来避免重复查询。

例如
```
$("<div class='baaron' />")
    .appendTo(document.body)
    .click(function() {});
```

## [追加内容](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/append.html)
> 追加的内容如果是多个元素，那么先拼接这些元素的html的字符串，然后追加字符串

例如
```
// string concatenate and set innerHTML
var myhtml = '';
$.each(reallyLongArray, function (count, item) {
		myhtml += '<li>' + item + '</li>';
});
$('#ballers').html(myhtml);
```

## [元素上存数据](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/data.html)
> 元素上存数据的模式和反模式

```
//  不推荐
$(elem).data(key, value);
// 推荐
$.data(elem, key, value);
```

## [上下文和查找](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/context-and-find.html)
> 抓取元素时，推荐使用find而不是用上下文

例如
```
$('.a', $('.b'));
$('.b').find('.a');
```

## [移除](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/detach.html)
> 当要对某个元素内容做一些复杂的修改时，先移除元素，处理好了，再追加回来

例如
```
var table = $('#some-table');
var parent = table.parent();
table.detach();
table.addLotsAndLotsOfRows();
parent.append(table);
```

## [事件委托](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/event-delegation.html)
> 用on而不是用live（live这方法已被废除）

## [缓存抓取的元素](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/cache-selector.html)
> 对于被多次使用的元素，用变量来缓存它，避免多次查询

## [window滚动事件](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/window-scroll-event.html)
> 用户在快速滚动滚轮的时候，会触发很多次windows滚动事件，会导致滚动事件的处理函数的堆积，而造成交互的滞后。

解决方案如下
```
$(window).scroll(function () {
	if (scrollTimeout) {
		// 清除堆积的事件
		clearTimeout(scrollTimeout);
		scrollTimeout = null;
	}
	scrollTimeout = setTimeout(scrollHandler, 250);
});
```
简而言之， 高频事件需要用上面的方式控制事件频度。

## [具体的选择器放右边，不具体的写左边](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/left-and-right.html)
```
//不推荐
$('div.data .brad')
// 推荐
$('.data td.brad')
```

jQuery的选择器是[Sizzle](http://sizzlejs.com/)是下向上来找匹配的元素的。因此为了提高效率，使用具体的选择器放右边，不具体的写左边这种写法。

## [通用选择器](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/universal-selector.html)
> 避免使用通用选择器(*)

这个主要是从查询效率上考虑。

## [选择器不用具体的过头](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/specific-when-needed.html)
```
// 不推荐
var arms = $('.data table.attendees td.brad');
// 推荐
var arms = $('.data td.brad');
```

## 发布订阅
* [使用.on和.off](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/pubsub-custom-events.html)
* [使用jQuery 1.7的$.Callbacks()特性](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/pubsub-callback.html)
* [使用jQuery UI的$.Observable](https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/pubsub-observable.html)
* 第三方组件 推荐朴灵的[eventproxy](https://github.com/JacksonTian/eventproxy)

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
