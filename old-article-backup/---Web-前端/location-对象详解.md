Location 对象包含有关当前 URL 的信息。
可通过 window.location 属性来访问。

其包含如下的属性
* hash 哈希值。设置或返回从井号 (#) 开始到 URL结束的值。可以用它来记录页面的状态。若页面存在某个链接的`name`的值与hash值是一样的，页面载入时，浏览器会滚动到该链接的位置。 需要注意的是，如果URL中不带`#`,则 hash 值为空字符串，否则，hash值为`#以及到URL结束`的值。
* hostname	设置或返回当前 URL 的主机名。
* host	设置或返回主机名和当前 URL 的端口号。
* href	设置或返回完整的 URL。
* pathname	设置或返回当前 URL 的路径部分。
* port	设置或返回当前 URL 的端口号。若port的值为空字符串，其实，该网站监听的是默认的80端口。
* protocol	设置或返回当前 URL 的协议。协议有`http:`,`https:`,`file:`等等
* search	查询字符串。设置或返回从问号 (?) 开始的 URL（查询部分）。多个查询参数之间用`&`分隔，如`?a=b&c=d`。

当改变location中的除了`hash`之外的属性的值，均会导致页面跳转。

例如，有这样一个URL
`http://127.0.0.1:3000/views/index.html?q=sth&sort=desc#b`
对应的
* hash 为 `#b`
* hostname 为 `127.0.0.1`
* host 为 `127.0.0.1:3000`
* href 为 `http://127.0.0.1:3000/views/index.html?q=sth#b`
* pathname 为 `/views/index.html`
* port 为 `3000`
* protocol 为 `http:`
* search 为 `?q=sth&sort=desc`

其包含如下的方法
* reload([bForceGet]) 刷新当前页面。bForceGet为可选参数， 默认为 false，从浏览器的缓存里取当前页。true，从服务端取最新的页面, 相当于客户端点击 F5("刷新") 。
* replace(URL)  当前页面跳转到指定的URL。并且用该URL替换当前的历史纪录，这样浏览历史记录中就只有一个页面，后退按钮永远处于失效状态，用户也就无法进行后退了。
* assign(URL) 当前页面跳转到指定的URL。和使用location.href=URL是一样的。会产生历史记录。



