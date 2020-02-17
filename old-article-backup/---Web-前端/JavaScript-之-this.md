在 JavaScript 中，this 的值是动态的，即一个函数中在不同的情况下被调用，this 的值可能是不同的。

## 全局的 this
在浏览器中，全局的 this 就是 window。
```
this === window; // true
```

## this 在函数中的值
JavaScript 中函数的被调用主要有几种方式：
* 作为对象的方法
* 作为函数
* 作为构造函数
* 使用 apply 或 call

不同的调用方式，this 的值是不同的。除此之外，`bind` 也会改变 this 的值。

下面就具体解释下 this 在函数中的值。

### 作为对象的方法
作为对象的方法时，this 为对象。

```
var obj = {
  name: 'obj',
  describe: function(){
    return 'I am a ' + this.name;
  }
};
obj.describe(); // 'I am a obj'
```

### 作为函数
作为函数时，this 为 window（在浏览器中）。

```
function foo(){
  return this === window;
}
foo(); // true

var obj = {
  name: 'obj',
  describe: function(){
    return 'I am a ' + this.name;
  }
};
window.name = 'window';
var bar = obj.describe;
bar(); // 'I am a window'

```

### 使用 apply 或 call
使用 apply 或 call，this 为 apply 或 call 传入的第一个参数。

```
function foo(){
  return this.name;
}
var obj = {name: 'obj'};
foo.apply(obj); // 'obj'
foo.call(obj); // 'obj'
```

### 作为构造函数
作为构造函数, this 会指向构造函数的原型对象。

```
function MyClass(){
  console.log(this.name);
}

MyClass.prototype = {
  name: 'My class'
};

var obj = new MyClass(); // 控制台输出 'My class'

```

### 使用 bind
使用 bind，this 为 bind 的第一个参数。

```
function foo(){
  return this.name;
}

var bar = foo.bind({name: 'bar'});
bar(); // 'bar'
```

## 练习题
下面代码中 1 ~ 7 的位置输出的值分别是什么？
```
(function() {
    console.log('*********0*********');
    console.log(this === window);
    var dog = {
      name: '旺财',
      describe: function() {
        console.log('汪汪，我是' + this.name);
      }
    };
    console.log('*********1*********');
    dog.describe(); // 1

    var Cat = function(name) {
      this.name = name;
    };
    Cat.prototype = {
      describe: function() {
        console.log('喵喵，我是' + this.name);
      }
    };

    var cat = new Cat('咪啊');
    console.log('*********2*********');
    cat.describe(); // 2

    dog.catLikeDescribe = cat.describe;
    console.log('*********1*********');
    dog.catLikeDescribe(); // 3

    window.name = '全局对象';
    var describe = dog.describe;
    console.log('*********4*********');
    describe(); // 4

    dog.describeWithOther = function(describeFn) {
      this.describe();
      describeFn();
    };
    console.log('*********5*********');
    dog.describeWithOther(cat.describe); // 5
    console.log('*********6*********');
    dog.describeWithOther.call(cat, cat.describe); // 6
    console.log('*********7*********');
    dog.describeWithOther(cat.describe.bind(cat)); // 7

  })();
```

## 参考
* [JavaScript 之 this 详解](http://www.jeffjade.com/2015/08/03/2015-08-03-javascript-this/)

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
