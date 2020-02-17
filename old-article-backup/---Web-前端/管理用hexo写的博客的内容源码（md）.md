在github上用hexo写博客的朋友会用碰到这样的问题：部署好博客（hexo deploy）后,发现在github上看到的是生成好的静态站（html,css,js），但不包括博客内容的源码(md)。

那么，如何要在多台电脑上管理这个博客呢？ 

我的解决方案是：新建了一个github项目，专门来放博客内容源码，记做方案1。但这样比较烦的是，要进行新建或修改文章时：

1.  更新博客源码的项目，然后将源码拷贝到博客项目
1.  在博客项目中，新建或修改文章，并部署
1.  将博客项目中的博客源码拷贝到博客源码项目
1.  提交博客源码项目

看着都麻烦那~~~

后来，发现了[grunt-gh-pages](https://www.npmjs.org/package/grunt-gh-pages)这个基于grunt的包。grunt-gh-pages的功能是，可以自动的将master下的某些内容发布到某个分支。所以，我换了个的思路。通过新建个`blog_source`分支来放博客内容源码。记做方案2。

具体是：

1.  先更新`blog_source`分支的内容，将`blog_source`分支内容拷贝到`master`分支中对应的地方
1.  在博客项目中，新建或修改文章，并部署
1.  将`master`分支的博客源码和配置拷贝到`blog_source`分支
1. 提交`blog_source`分支

方案2和方案1的不同的地方是，方案2可通过使用[Grunt](http://gruntjs.com/)来自动化的实现将博客内容源码管理，而方案1是手动的。下面描述下用Grunt来实现方案2的第三步：

1.  删除上一次发布博客生成的临时文件夹。[grunt-contrib-clean](https://www.npmjs.org/package/grunt-contrib-clean)可以实现这个功能。
1.  把博客的源码和其他一些需管理的配置信息都复制到build文件夹下。[grunt-contrib-copy](https://www.npmjs.org/package/grunt-contrib-copy)可以实现这个功能。
1. build文件夹下的内容放到`blog_source`分支。[grunt-gh-pages](https://www.npmjs.org/package/grunt-gh-pages)可以实现这个功能。

`Gruntfile.js` 的中的配置如下，完整的`Gruntfile.js`点[这里](https://github.com/iamjoel/iamjoel.github.io/blob/blog_source/config/Gruntfile.js)
```
grunt.initConfig({
        'clean':{
            files: ['.grunt','build']
        },
        'copy': {
            source: {
                'src': ['source/**/*'],
                'dest': 'build/',
            },
            config: {
                'src': [
                    'package.json',
                    'Gruntfile.js',
                    '_config.yml'
                ],
                'dest': 'build/config/'
            },
            theme: {
                'src': [
                    'themes/pacman/_config.yml'
                ],
                'dest': 'build/theme/',
                expand: true, 
                flatten: true
            },
            readme:{
                'src': [
                    'README.md'
                ],
                'dest': 'build/'
            }
        },
        'gh-pages': {
            options: {
                base: 'build',
                branch: 'blog_source' 
            },
            src: ['**']
        }
    });
grunt.registerTask('bac_src', ['clean','copy','gh-pages']);
```

这样，每次新建或修改完博客，就可以通过 执行` grunt bac_src`来将博客内容源码放到`blog_source`分支。


当然，方案2的第一步，也可以用Grunt来自动化搞定。

大家有更好的 “管理用hexo写的博客的内容源码”的方法吗？请告诉我XD
