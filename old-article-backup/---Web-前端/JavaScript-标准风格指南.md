翻译自[这里](http://standardjs.com/rules.html#javascript-standard-style)。

## 规则
### 缩进用2个空格
```
function hello (name) {
  console.log('hi', name)
}
```

### 字符串用单引号
只有在字符串中有单引号时才用双引号。
```
console.log('hello there')
$("<div class='box'>")
```

### 避免定义不使用的变量
```
function myFunction () {
  var result = something()   // ✗ avoid
}
```

### 关键字后需要有空格
```
if (condition) { ... }   // ✓ ok
if(condition) { ... }    // ✗ avoid
```

JavaScript 中的关键字有 `var`, `const`, `let`, `if`, `else`, `case`, `break`, `while`, `for`, `function`, `return` 等。

### 定义方法的圆括号前需要加空格
```
function name (arg) { ... }   // ✓ ok
function name(arg) { ... }    // ✗ avoid

run(function () { ... })      // ✓ ok
run(function() { ... })       // ✗ avoid
```

### 总是使用 === 来代替用 ==
例外是可以用 `obj == null` 来判断对象是 null 或 undefined
```
if (name === 'John')   // ✓ ok
if (name == 'John')    // ✗ avoid
```

```
if (name !== 'John')   // ✓ ok
if (name != 'John')    // ✗ avoid
```

### 操作符前后必须要有1个空格
```
// ✓ ok
var x = 2
var message = 'hello, ' + name + '!'

// ✗ avoid
var x=2
var message = 'hello, '+name+'!'
```

### 逗号后必须要有1个空格
```
// ✓ ok
var list = [1, 2, 3, 4]
function greet (name, options) { ... }

// ✗ avoid
var list = [1,2,3,4]
function greet (name,options) { ... }
```

### else 要保持和花括号在一行
```
// ✓ ok
if (condition) {
  // ...
} else {
  // ...
}

// ✗ avoid
if (condition) {
  // ...
}
else {
  // ...
}
```

### 条件语句内容和条件语句不在一行，必须用花括号
```
// ✓ ok
if (options.quiet !== true) console.log('done')

// ✓ ok
if (options.quiet !== true) {
  console.log('done')
}

// ✗ avoid
if (options.quiet !== true)
  console.log('done')
```


### 错误必须要被处理
```
// ✓ ok
run(function (err) {
  if (err) throw err
  window.alert('done')
})
// ✗ avoid
run(function (err) {
  window.alert('done')
})
```

### 全局对象一定要加 window
例外：document, console 和 navigator。
```
window.alert('hi')   // ✓ ok
alert('hi') // ✗ avoid
```

### 避免多行空行
```
// ✓ ok
var value = 'hello world'
console.log(value)
// ✗ avoid
var value = 'hello world'


console.log(value)
```

### 三元表达式中的 ? 和 ： 必须和后面的表达式在一行
```
// ✓ ok
var location = env.development ? 'localhost' : 'www.api.com'

// ✓ ok
var location = env.development
  ? 'localhost'
  : 'www.api.com'

// ✗ avoid
var location = env.development ?
  'localhost' :
  'www.api.com'
```

### 一个 var 定义一个变量
```
// ✓ ok
var silent = true
var verbose = true

// ✗ avoid
var silent = true, verbose = true

// ✗ avoid
var silent = true,
    verbose = true
```

### 在条件表达式中如果用赋值语句的话，需要加额外的括号
这样做是为了表明这是故意这么做的，而不是因为疏忽
```
// ✓ ok
while ((m = text.match(expr))) {
  // ...
}

// ✗ avoid
while (m = text.match(expr)) {
  // ...
}
```

## 分号
### 不加分号
```
window.alert('hi')   // ✓ ok
window.alert('hi');  // ✗ avoid
```

### 以 (，[，` 开头的语句前面需要加分号
```
// ✓ ok
;(function () {
  window.alert('ok')
}())

// ✗ avoid
(function () {
  window.alert('ok')
}())

// ✓ ok
;[1, 2, 3].forEach(bar)

// ✗ avoid
[1, 2, 3].forEach(bar)

// ✓ ok
;`hello`.indexOf('o')

// ✗ avoid
`hello`.indexOf('o')
```

为了让代码更清晰和可读，不鼓励自作聪明的简写。如
```
;[1, 2, 3].forEach(bar)
```

可以用优化成
```
var nums = [1, 2, 3]
nums.forEach(bar)
```
