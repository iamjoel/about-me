## nodejs简介
> Node.js是JavaScript在服务器端的一个运行环境，也是一个工具库，用来与服务器端其他软件互动。它的JavaScript解释器，采用了Google公司的V8引擎。

nodejs是由[Ryan Dahl](https://github.com/ry)写的。他做nodejs的初衷是为了做一个高性能是web服务器。
为了实现高性能服务器，实现要点是:

* 事件驱动
* 非阻塞I/O（异步I/O）

### nodejs的特点
* 异步I/O
* 事件与回调函数
* 单线程

### nodejs优缺点
优点

* 高并发（最重要的优点）
*  适合I/O密集型应用

缺点

* 不适合CPU密集型应用；CPU密集型应用给Node带来的挑战主要是：由于JavaScript单线程的原因，如果有长时间运行的计算（比如大循环），将会导致CPU时间片不能释放，使得后续I/O无法发起
    解决方案：分解大型运算任务为多个小任务，使得运算能够适时释放，不阻塞I/O调用的发起
*  可靠性低，一旦代码某个环节崩溃，整个系统都崩溃
解决方案：
  1. Nnigx反向代理，负载均衡，开多个进程，绑定多个端口；
  1. 开多个进程监听同一个端口，使用cluster模块；也可以使用forever或pm2模块
* 开源组件库质量参差不齐，更新快，向下不兼容

### 使用nodejs的产品
http://jianshu.io/p/271b216199b9

## 安装
见[官网](http://nodejs.org/)。安装完成后，在命令行中，执行`node -v`即可看到安装的nodejs的版本。

ps：若在命令行中执行`node -v`报“node 不是内部或外部命令”，只要将node的安装路径加入环境变量即可。

## 来个hello world
在控制台输出`hello world`
1. 新建helloWorld.js,文件内容如下
```
	console.log('hello world');
```
1. 在命令行中，进入(cd) helloworld.js所在文件夹
1. 运行 `node helloWrold`

用nodejs来创建服务器的hello world
```
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Node.js\n');
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');
```

## 运行nodejs
nodejs提供在命令行中使用（REPL）和执行文件（.js后缀）两种方式

在命令行中与node进行交互

1. 打开命令行窗口（cmd）
1. 输入 node。
1. 然后就可以进行玩耍啦

执行文件

1. 打开命令行窗口（cmd）
1.  进入（cd）执行文件所在文件夹
1.  运行 `node 文件名`

## 模块
在nodejs中，一个文件就是一个模块。
nodejs 是按照[CommonJS](http://wiki.commonjs.org/wiki/CommonJS)规范定义和使用模块的。

nodejs中的模块可以分成3类：

* [核心模块](http://nodejs.org/api/):系统自带的模块
* [第三方模块](https://www.npmjs.org/)
* 自定义模块

### 加载模块
require方法用来加载模块，相当于java的import。

加载核心或第三方模块
`require(模块名)`

加载自定义模块
`require(模块路径)`
模块路径必须以`.`,`..`，`/`或`C:之类的盘符`开头。`.`代表当前路径，`..`代表上级路径，`/`代表根路径


demo如下：

```
var fs = require('fs'); // 使用核心模块
var _ = require('lodash'); // 使用第三方模块,形式上使用核心模块一样
var tool = require('./tool'); // 使用自定义模块,在当前目录下找tool.js

```

### 模块定义
Node.js模块采用CommonJS规范。只要符合这个规范，就可以自定义模块。

下面是demo。
```
// tool.js
function print(str){
     console.log(str);
}
module.exports = {
	name : 'foo',
	print : print
}

// index.js
var tool = require('./tool');
var toolName = tool.name;
var print = tool.print;
print('using' + toolName);

```


## 包
在nodejs中多个子模块组成的大模块称做包。
完全符合commonJs的包结构包括下面这些文件：

* `package.json` 包描述文件
* `bin` 可执行二进制文件的目录
* `lib` 用来存放js代码的目录
* `doc` 用来存放文档的目录
* `test` 用来存放测试的目录

普通项目的话，`package.json`这个文件是必须的。


### package.json
最简单的package.json
```
{
  "name" : "xxx",
  "version" : "0.0.0",
}

```

比较完整的
```
{
    "name": "Hello World",
    "version": "0.0.1",
    "author": "张三",
    "description": "第一个node.js程序",
    "keywords":["node.js","javascript"],
    "repository": {
        "type": "git",
        "url": "https://path/to/url"
    },
    "license":"MIT",
    "engines": {"node": "0.10.x"},
    "bugs":{"url":"http://path/to/bug","email":"bug@example.com"},
    "contributors":[{"name":"李四","email":"lisi@example.com"}],
    "scripts": {
        "start": "node index.js"
    },
    "dependencies": {
        "express": "latest",
        "mongoose": "~3.8.3",
        "MD5": "~1.2.0"
    },
    "devDependencies": {
        "bower": "~1.2.8",
        "grunt": "~0.4.1",
        "grunt-contrib-concat": "~0.3.0"
    }
}
```

部分字段的说明如下    
engines:指明了该项目所需要的node.js版本。    
scripts:指定了运行脚本命令的npm命令行缩写，比如,在上面的`package.json`中,若执行`npm start` 其实执行的是 `node index.js`。    
dependencies，devDependencies：分别指定了项目运行所依赖的模块、项目开发所需要的模块。
更多字段的描述见[这里](https://www.npmjs.org/doc/json.html)

package.json文件可以手工编写，也可以使用npm init命令自动生成。



## npm(node package manage)
> npm有两层含义。一层含义是Node.js的开放式模块登记和管理系统，网址为http://npmjs.org/ 。另一层含义是Node.js默认的模块管理器，是一个命令行下的软件，用来安装和管理node模块。

npm 常用命令
### 安装模块
安装全局模块
`npm install -g '模块名'`

安装某项目的模块

1. `cd package.json 所在的目录`
1. `npm install`

### 生成package.json
`npm init`

### 查看已安装的模块
全局安装模块
`npm ls -g [模块名]` 如果不带模块名,则查看全部

项目安装模块

1. `cd package.json 所在的目录`
1. `npm ls  [模块名]`

ps:

*  全局模块只能在命令行中使用，某项目的模块只能在该项目中使用
* 在天朝用时用npm装模块会很慢，可以用[cnpm](http://cnpmjs.org/)来代替

更多命令，见https://www.npmjs.org/doc/


## 教程推荐
* [阮一峰 nodjs教程](http://javascript.ruanyifeng.com/nodejs/basic.html)
* [七天学会nodejs](http://nqdeng.github.io/7-days-nodejs/)
* 《深入浅出nodejs》

## 资源
* [官网](http://nodejs.org/)
* [nodejs 核心模块api文档](http://nodejs.org/api/)
* [邮件订阅nodejs weekly](http://nodeweekly.com/)
* [nodejs 模块推荐网站](https://nodejsmodules.org/)
* [最受欢迎的 node网站node cloud](http://www.nodecloud.org/)
* [我的学习node的github项目](https://github.com/iamjoel/node-resource)
* [nodejs的广播 nodeup ](http://nodeup.com/)

## 参考
* [阮一峰 nodjs教程](http://javascript.ruanyifeng.com/nodejs/basic.html)
* [七天学会nodejs](http://nqdeng.github.io/7-days-nodejs/)
* 《深入浅出nodejs》
