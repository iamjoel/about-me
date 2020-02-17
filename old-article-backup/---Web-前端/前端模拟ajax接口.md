在平常开发中，了解完需求后，前端和后端会确定页面的需要的ajax接口，及接口的细节（请求与响应的格式）。然后，前后端就可以各自开工~ (注：在本文的接口均指ajax接口。)

作为前端，为了能和后端同步开发，我们会对接口进行模拟。

### 模拟Get方式的接口，响应是固定格式的
可以用一个静态文件来模拟。
例如，我们要异步获取餐店列表，我们创建一个`lists.json`文件来模拟餐店列表
```
{
    data: [{
        "name": "XXX",
        "loc": "XXX",
        ...
    },...]
}

```
然后请求地址为该文件的地址
```
<div class="lists" data-url="path/to/lists.json"></div>
<script>
$.ajax({
  url: $('.lists').data('url')
}).done(function(data){
    
});
</script>
```
后端拿到页面后，只需替换`data-url`的值即可。

### 模拟响应是非固定格式的或非Get方式
有些时候，请求的参数或数据不同时，响应的结构会有不同。有时候请求方式为非Get的。用上面的方法就无能为力了。

这时候，我们可以借助插件[jquery-mockjax](https://github.com/jakerella/jquery-mockjax)。通过这个插件，定义了需要[mock](http://baike.baidu.com/view/2445748.htm)请求,并设置响应结果。当在后面对异步进行请求满足前面定义的请求时，其实并没有发请求，其获得的响应即为前面设置的响应结果。

下面的代码展示了，一样的请求地址，不同的请求数据返回不同的结构
```
<script src="path/to/jquery.mockjax.js"></script>
<script>
$.mockjax({
    url: "/data",
    data: {
        action: "foo1"
    },
    response: function(setting) {
        // 返回值
        this.responseText = {
            data1: 'text1'
        };
    }
});

$.mockjax({
    url: "/data",
    data: {
        action: "foo2"
    },
    response: function(setting) {
        // 返回值
        this.responseText = {
            data2: 'text2'
        };
    }
});

$.ajax({
    url:"/data",
    data: {
        action: "foo1"
    }
}).done(function (data) {
    console.log(data);// {data1: "text1"}
});

$.ajax({
    url:"/data",
    data: {
        action: "foo2"
    }
}).done(function (data) {
    console.log(data);// {data2: "text2"}
});
</script>
```

[jquery-mockjax](https://github.com/jakerella/jquery-mockjax)也支持模拟各种请求方式（Get，Post，Patch等等）的请求。

## 多个异步多个状态的模拟
有时候，异步处理函数是和多个异步结果相关的。而每个异步的状态是有限的。那么主要是列出所有需要模拟的状态的组合。通过修改当前状态来进行测试，下面是demo
```
// 所有状态组合
var states = {
    status1: {
        ajaxA: 'status1',
        ajaxB: 'status2',
    },
    status2： {
        ajaxA: 'status1',
        ajaxB: 'status2',
    },
    status3： {
        ajaxA: 'status2',
        ajaxB: 'status3',
    }
};

// 通过修改当前状态来进行测试
var currState = 'status1';
// var currState = 'status2';
// var currState = 'status3';

$.mockjax({
    url: 'ajaxA',
    type: 'get',
    response: function() {
        var result;
        switch (currState.status1) {
            case '1':
                result = false;
                break;
            case '2':
                result = {
                	data: 'temp'
                };
                break;
            default:

        }

        this.responseText = {
            data: result
        };
    }
});

$.mockjax({
    url: 'ajaxB',
    type: 'get',
    response: function() {
        var result;
        switch (currState.status2) {
            case '1':
                result = 't1';
                break;
            case '2':
                result = {
                	data: 'ts'
                };
                break;
            case '2':
                result = {
                	data: 'blabla'
                };
                break;
            default:

        }

        this.responseText = {
            data: result
        };
    }
});
```
