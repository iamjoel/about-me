> 箭头函数和对象方法简写使 JavaScript 的函数写法更简洁。

## 学习条件
1. 了解 JavaScript 中函数相关知识。
1. 知道 JavaScript 中的 this 的知识。

## 学习目标
1. 知道箭头函数的写法。
1. 知道箭头函数中的 this。
1. 知道对象方法简写的写法。

## 学习资源
* [ECMAScript 6 入门之箭头函数](http://es6.ruanyifeng.com/#docs/function#箭头函数)
* [ES6 Arrow Functions in Depth](https://ponyfoo.com/articles/es6-arrow-functions-in-depth)

## 习题
1. 用箭头函数和对象方法简写 来 改写下面的代码中的函数

```
var shuffleArray = function(arr) {
  arr.sort(function() {
    return Math.random() > 0.5
  })
}

var dog = {
  name: 'wang',
  greetFn: function(){
    console.log('汪汪~')
  }
}
```
