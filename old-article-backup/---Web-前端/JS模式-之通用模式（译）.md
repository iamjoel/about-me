原文 http://shichuan.github.io/javascript-patterns/

## [函数定义](https://github.com/shichuan/javascript-patterns/blob/master/general-patterns/function-declarations.html)
 > 创建匿名函数，并将其赋给一个变量。

不建议使用定义全局函数。这会污染全局变量。


## [条件](https://github.com/shichuan/javascript-patterns/blob/master/general-patterns/conditionals.html) 
> 使用`if`和`else`的模式以及反模式


## [获取全局对象](https://github.com/shichuan/javascript-patterns/blob/master/general-patterns/access-to-global-object.html) 
> 不直接用`widows`当做全局对象

直接用`windows`的风险在于，JS代码不只能在浏览器环境能执行。也有可能是在`Nodejs`之类的环境。

## [单`var`模式](https://github.com/shichuan/javascript-patterns/blob/master/general-patterns/single-var-pattern.html)
> 用一个`var`定义多个变量

例如
```js
 var a = 1
, b = 2
, sum = a + b
, myobject = {}
, i
, j;
```

## [定义提升](https://github.com/shichuan/javascript-patterns/blob/master/general-patterns/hoisting.html)
> 函数内变量不管是在哪定义的，其实js在解析时，都会把变量定义放到函数的开始

为了避免变量重名，建议把在函数的变量的定义在函数的开始。

## [`for`循环](https://github.com/shichuan/javascript-patterns/blob/master/general-patterns/for-loops.html)
> `for`循环优化

可优化的方面包括
* 遍历数组时，在循环前算出要循环的次数（一般是数组长度）。(译者注：对于有JIT的JS引擎，这个这条可以忽略)
* 用`i+=1`代替`i++`

## [`for-in`循环](https://github.com/shichuan/javascript-patterns/blob/master/general-patterns/for-in-loops.html)
> `for-in`循环优化

用`for-in`遍历对象属性时，用`hasOwnProperty`对非原型属性进行过滤。

## [拓展内建对象的原型](https://github.com/shichuan/javascript-patterns/blob/master/general-patterns/built-in-prototypes.html)
> 给内建对象（如Array，Object等）的原型上添加属性或方法时，不要覆盖内建对象的原型上属性或方法（即不能同名）

具体做法,例如
```js
if (typeof Object.prototype.myMethod !== "function") {
Object.prototype.myMethod = function () {
// implementation...
};
}
```

## [`switch`模式](https://github.com/shichuan/javascript-patterns/blob/master/general-patterns/switch-pattern.html)
> 增加`switch`的可读性和健壮性

建议
* 每个case对齐
* 每个case后要加`break;`。特殊情况除外，但也要加注释说明
* `switch`最后以`default`结尾

## [类型隐式转化](https://github.com/shichuan/javascript-patterns/blob/master/general-patterns/avoiding-implied-typecasting.html)
> 避免类型的隐式转化

两个变量用`==`比较时，类型会进行隐式转化。用`===`进行比较，就可以避免类型的隐式转化。

## [避免`eval（）`](https://github.com/shichuan/javascript-patterns/blob/master/general-patterns/avoiding-eval.html)
> 避免使用`eval（）`


使用`eval`会增加代码的复杂性。同时也增加代码调试的难度。

## [用`parseInt`进行数字转化](https://github.com/shichuan/javascript-patterns/blob/master/general-patterns/parseint.html)
> 要用第二个参数指定进制

转化数字还可以用
* `+'08'`
* '08' - 0
* Number('08')

但如果转化`08 aaa`，上面的几种方式都返回`NaN`。只有`parseInt`返回8。

## [最小化全局变量](https://github.com/shichuan/javascript-patterns/blob/master/general-patterns/minimizing-globals.html)
> 在最外面的定义的方法和变量都是全局的

如
```
var myglobal = "hello"; 
console.log(myglobal); // "hello"
console.log(window.myglobal); // "hello"
console.log(window["myglobal"]); // "hello"
console.log(this.myglobal); // "hello"
```
避免方式是
```
(function(){
    var myglobal = "hello";
})()
```

## [全局的问题](https://github.com/shichuan/javascript-patterns/blob/master/general-patterns/globals.html)
> 全局的各种问题
