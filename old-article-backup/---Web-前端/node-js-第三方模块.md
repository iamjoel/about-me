### web 
* [express](https://github.com/visionmedia/express) web开发框架
* [ejs](https://github.com/visionmedia/ejs) 页面模板。可以方便的把html改写成ejs。
* [eco](https://github.com/sstephenson/eco) 页面模板,类似ejs。与ejs的不同点是：逻辑部分用CoffeeScript而不是javascript 
* [jade](https://github.com/visionmedia/jade) 页面模板 源自ruby的[haml](http://haml.info/) 比ejs优雅简洁，但把html转换成jade要花一番功夫。 
* [coffeecup](https://github.com/gradus/coffeecup) 页面模板 风格有些像 jade,但里面的内容各种用coffee。    
    
* [Mongoskin](https://github.com/kissjs/node-mongoskin) mongoDB驱动。是在[mongodb-native](https://github.com/mongodb/node-mongodb-native)的基础上做的封装。
* [mongoose](https://github.com/LearnBoost/mongoose) mongoDB驱动。
* [mysql](https://github.com/felixge/node-mysql) mysql驱动。    
    
* [log4js](https://github.com/nomiddlename/log4js-node) 日志。    
      
* [cheerio](https://github.com/MatthewMueller/cheerio) 解析html文档。解析的结果可以用jQuery的写法来筛选想要的dom元素。
* [JSDOM](https://github.com/tmpvar/jsdom) 和cheerio类似。但更强大。但要在windows安装是各种麻烦。
* [nodegrass](https://github.com/scottkiss/nodegrass) 抓取某地址的页面    
      
* [docpad](http://docpad.org/) 静态站点生成系统，一般是用来做博客
* [wintersmith](https://github.com/jnordberg/wintersmith) 同上    
      
* [GeoIP-lite](https://github.com/bluesmoon/node-geoip) 根据ip获得该ip所在的城市和国家。    
    

### 基础拓展
* [underscore](https://github.com/jashkenas/underscore) javascript帮助库 
* [moment](http://momentjs.com/) 时间操作

### 代码组织
* [async](https://github.com/caolan/async) 控制异步流程。如文件读写，数据库操作等
* [promise](https://github.com/then/promise) 同上


### 测试
* [mocha](http://visionmedia.github.io/mocha/) 测试框架,断言库可自由选择。用coffee就要用mocha(摩卡),哈哈~
* [Jasmine](https://github.com/pivotal/jasmine) BDD测试框架    
    
* [chai.js](https://github.com/chaijs/chai)  BDD / TDD 断言库。支持 should.js,expect.js,assert，但不支持should.js的某些写法。
* [should.js](https://github.com/visionmedia/should.js) 断言库。可读性很强。
* [expect.js](https://github.com/LearnBoost/expect.js) 断言库。可读性很强，在should.js基础上构建。    
    
* [zombie.js](http://zombie.labnotes.org/) 构造浏览器进行测试(headless browser)
* [uiTest](https://npmjs.org/package/uitest) 前端UI测试框架  


### 项目管理
* [grunt](http://gruntjs.com/) javascript 任务管理器。可以做很多任务：如脚本验证（grunt-contrib-jshint），脚本，样式压缩（grunt-contrib-uglify），脚本合并（grunt-contrib-concat），编译coffee（grunt-contrib-coffee），编译less，sass等。
* [bower](http://bower.io/)  包管理工具
* [yo](https://github.com/yeoman/yo)  项目的框架生成工具
* [yeoman](http://yeoman.io/) 开发web工作流管理工具 YO，Grunt，Bower 组成

###预编译
* [coffeescript](https://github.com/jashkenas/coffee-script) 将coffeescript编译成javascript
* [less](https://github.com/less/less.js) 将less编译成css
* [SASS](https://github.com/andrew/node-sass) 将less编译成css (可能要安装ruby以及，ruby上安装sass模块)

### 工具
* [anywhere](https://npmjs.org/package/anywhere) 可以在任意文件目录构建静态服务器 
* [node-exif](https://github.com/gomfunkel/node-exif) 读取图片的元信息 (很多读图片元信息的node库需要安装一些软件，这个不用)

###更多
*  https://github.com/joyent/node/wiki/modules
