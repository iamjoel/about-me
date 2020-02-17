## Web Workers 是个啥
有时候，我们写的脚本需要执行一些耗时的大计算量的操作。在脚本执行过程中，浏览器会出现冻结用户界面的情况（用户对页面进行操作，但浏览器没有响应）。

为什么会出现这种情况呢？因为浏览器响应用户的操作和执行脚本是在一个进程中的，脚本在执行的过程中，就没办法响应用户的操作，so sad。

那怎么避免出现这种情况呢？以前我的做法是，将大计算的操作分成若干个子操作，每个子操作都在 `setTimeout` 中。用 `setTimeout` 是为了让浏览器在每个子操作执行完后，会有一小段时间来响应用户的操作。但即使这样做，也不一定能解决问题。在有些情况下，可以让服务器来做计算。

换个思路，如果能让耗时的大计算量的操作在浏览器的后台的一个独立进程中执行呢？这时候，就该 Web Workers 出场啦~ 

Web Workers 指的是可以让脚本文件在浏览器后台（独立线程）独立运行的技术。因为 Worker 是在浏览器创建的独立线程里运行的，因此，即使在 Worker 中运行再复杂的任务也不会冻结浏览器的用户界面。

### Worker 的使用场景
* 执行一些大计算量的操作
* 异步加载资源

### 使用 Worker 的注意点
在 Worker 中，其上下文是 [DedicatedWorkerGlobalScope](https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope)，而不是 Window。DedicatedWorkerGlobalScope 中只支持很一小部分与 DOM 相关的 API。DedicatedWorkerGlobalScope 中所有的 API 见[这里](https://developer.mozilla.org/en-US/docs/Web/API/Worker/Functions_and_classes_available_to_workers)。

简单了说，就是 Worker 不能进行 DOM 操作。不支持 alert，console 等。创建 Worker 的页面必须是和 Worker 文件是同域的。

## Web Worker 的类型
Web Worker 分为 DedicatedWorker 和 SharedWorker。本文下面介绍的是 DedicatedWorker。本文中指的 Web Worker 指的是 DedicatedWorker。对 SharedWorker 感兴趣的见[这里](http://www.whatwg.org/specs/web-apps/current-work/multipage/workers.html#sharedworker)。

## 用法
### 创建 Worker
```
var worker = new Worker('worker.js');//必须是同域的
```

### 信息通信
主页面
```
var worker = new Worker('worker.js');
worker.postMessage(msg);//主页面向worker发消息。msg可以是对象，字符串之类。
```

worker.js
```
onmessage = function(evt) {// 处理主页面发来的消息
    postMessage('reveive data ' + evt.data + 'from page');// 向主页面发消息
}

```

### 终止 Web Workers
```
worker.terminate();
```
完整demo见[这里](http://iamjoel.github.io/html5-demo/web-worker/index.html)。

更多的demo见[这里](https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers#Examples)。

[Web Workers API](https://developer.mozilla.org/en-US/docs/Web/API/Worker)

## 浏览器兼容性
支持的浏览器 IE 10+,Firefox,Chrome。更多见[Can I Use](http://caniuse.com/webworkers)。

## 参考
* https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers
* http://www.whatwg.org/specs/web-apps/current-work/multipage/workers.html
* http://www.cnblogs.com/feng_013/archive/2011/09/20/2175007.html
* http://www.ituring.com.cn/article/841
* http://www.html5rocks.com/en/tutorials/workers/basics/

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
