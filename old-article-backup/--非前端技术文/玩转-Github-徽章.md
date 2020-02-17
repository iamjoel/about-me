我们会发现 Github 上的很多项目的首页都有很多徽章。如 [vue](https://github.com/vuejs/vue) 的

![vue](http://upload-images.jianshu.io/upload_images/16777-2e2b2b75d01f9625.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

[react](https://github.com/facebook/react) 的
![react](http://upload-images.jianshu.io/upload_images/16777-364d4a9221513e5e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这些徽章有什么用呢？下面我就细细道来。

## 聊天室功能
我们如果希望和某个 Github 项目开发者沟通，比如给这个项目提个 bug 之类。传统的方式是在该项目创建一个 issue ，等开发者看到后（可能是很久之后~），回复该 issue。但是，如果你希望进行实时的进行沟通，能有个聊天室就好了~

[Gitter](https://gitter.im) 就提供了聊天室的功能。开发者用
Github 帐号登录后，可以就为某个项目创建一个聊天室。然后在项目的 README 中放入类似这样的内容
```
[![Gitter](https://badges.gitter.im/Join Chat.svg)](聊天室 URL)
```
就会生成下面的徽章
![Gitter](https://badges.gitter.im/Join Chat.svg)

我们进入聊天室后，就可以欢快的聊天啦。

## 代码质量
如果你是一个对自己的项目要求比较高的开发者，那么，你肯定会为你的代码写测试。

[Travis Ci](https://travis-ci.org/) 提供了持续集成的功能。即，你每次提交代码，都会跑一遍测试，如果测试通过，则显示 passing, 否则 显示 failure 。 
[Codecov](https://codecov.io/) 提供了统计代码测试覆盖率的功能。

仅仅通过测试还是不够的，我们还希望代码少一些坏味道：如 
* 条件分支太多
* 很多重复代码
* 一个方法的代码过多
* 方法的参数数量过多

[Code Climate](https://codeclimate.com/), [bithound](https://www.bithound.io/) 提供了对代码质量的分析。

## 声明相关的
* 是 npm 的一个 package，加下面的
```
[版本图片](https://www.npmjs.com/package/项目名)
```
* 声明项目目前处于那个阶段。阶段包括：已废弃，实验阶段，稳定阶段等。 使用见 [stability-badges](https://github.com/badges/stability-badges)
*  Nodejs 项目所依赖的第三方组件是否使用了最新的版本，用 [David](https://david-dm.org/) 
* 被 [Awesome 系列](https://github.com/sindresorhus/awesome) 收录的，加
```
[图片](https://github.com/sindresorhus/awesome)
```

## 其他
* 项目访问量统计 [ga-beacon](https://github.com/igrigorik/ga-beacon)
* 各种好玩的徽章 [forthebadge](http://forthebadge.com/)


更多徽章见[这里](https://github.com/boennemann/badges)。

如果你想自己设计徽章，请先阅读 [shields](https://github.com/badges/shields) 。

Have Fun ~

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
