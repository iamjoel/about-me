如我们所知，JavaScript 是一门灵活的语言。其灵活性同样也带来了很多坑，当然也有一些是[设计缺陷](http://www.ruanyifeng.com/blog/2011/06/10_design_defects_in_javascript.html)。比如
* 一个变量没有声明就赋值，默认是全局变量，如
```
(function () {
	a = 3;
})();
console.log(window.a);  // 输出3
```
* 对象有多个重名属性，最后赋值的那个属性会覆盖前面的值。如
```
var obj = {
	c: 3,
	c: 4
}
// obj 为 {c:4}
```

还有什么`==` , `typeof` 之类的坑，数不胜数。毕竟 JavaScript 之父设计这门语言只用了一个星期，呵呵。

那么我们有什么简单的办法来避免一些坑呢？

 [Coffeescript](http://coffeescript.org/) 是个不错的选择，不过有学习成本。更简单的方式，是用 JavaScript 的严格模式。

## 什么是 JavaScript 的严格模式
在 JavaScript 的严格模式下，对 JavaScript 的写法做了一些限制。如果在严格模式下违反了这些限制，代码就会报错。

设立严格模式的目的主要是：
* 减少 JavaScript语法的一些不合理、不严谨之处，减少一些怪异行为
* 消除代码运行的一些不安全之处，保证代码运行的安全
* 提高编译器效率，增加运行速度
* 为未来新版本的Javascript做好铺垫（一些保留字如：class, enum, export, extends, import, super 不能做变量名）

## 如何使用
指定整个 JS 文件执行严格模式，则在文件第一行写
```
"use strict";
```

指定某个方法执行严格模式，则在方法第一行写  `"use strict";`, 如
```
function strict(){
	"use strict";
	return "这是严格模式。";
}
```

对于不支持严格模式的浏览器，会忽略 `"use strict";`。

## 严格模式下的限制
* 全局变量必须显式声明
* 禁止使用`with`
* 禁止this关键字指向全局对象
* **禁止在函数内部遍历调用栈**,  如
```
function f1(){
　　"use strict";
　　f1.caller; // 报错
　　f1.arguments; // 报错
}
f1();
```
* 禁止删除变量
* 对象不能有重名的属性
* 函数不能有重名的参数
* 禁止使用arguments.callee
* 禁止对arguments赋值
* 禁止用保留字(如 implements, interface, let, package, private, protected, public, static, yield 等)做变量名

上面只列举一部分，更多访问[这里](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode)。



## 参考
* [Javascript 严格模式详解](http://www.ruanyifeng.com/blog/2015/11/ecmascript-specification.html)
* MDN, [Strict mode](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode)


***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
