做单页应用，需要客户端路由。用 Vue.js 做单页应用，一般都用 [vue-router](https://github.com/vuejs/vue-router/) 做客户端路由。文档地址点[这里](https://router.vuejs.org/zh-cn/)。

注意：vue-router2 需要配合 Vue2 用。

## 配置路由
```
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var router = new Router({
  // 路由规则
  routes: [
    {
      path: `/login`,
      component: resolve => {
        lazyLoading(resolve, 'system/Login')
      },
    },
    ...
    // 找不到路由的默认地址
    {
      path: '*',
      redirect: '/'
    }
  ]
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// 懒加载组件
const lazyLoading = (resolve, name, index = false) => {
  require.ensure([], function(require) {
    resolve(require(`@/views/${name}${index ? '/Index' : ''}.vue`));
  })
}
```

HTML 要有
```
<router-view></router-view>
```


## 跳转页面
在 HTML中这么写
```
<router-link to="/home">Home</router-link>
<!-- 或 -->
<router-link :to="'/home'">Home</router-link>
```

在 JS 中这么写
```
this.$router.push(url)
```

不记入历史记录的写法：
```
this.$router.replace(url)
```

## 前进后退
```
// 后退
this.$router.go(-1)
// 前进
this.$router.go(1)
```

`router.push`、 `router.replace` 和 `router.go` 是效仿 `window.history API` 的。

## 获取参数
```
this.$route.params.参数名
```

如, 路由中设置的路径是： `/list/:id`，真实路径是 `/list/3`，这么写 `this.$route.params.id`。

## 获取查询参数
```
this.$route.query.查询参数名
```

对于路径 `/foo?user=1`，则 `this.$route.query.user` 的值是 1。

## 获取路径
```
this.$route.path
```
