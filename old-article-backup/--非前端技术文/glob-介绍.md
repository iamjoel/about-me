
[glob](https://en.wikipedia.org/wiki/Glob_(programming)) 最早是出现在类Unix系统的命令行中, 是用来匹配文件路径的。比如，`lib/**/*.js` 匹配 lib 目录下所有的 js 文件。

除了在命令行中，我们在程序中也会有匹配文件路径的需求。于是，很多编程语言有了对 glob 的实现 ，如 Python 中的 `glob` 模块； php 中的 `glob` 方法。

有了 glob，匹配文件路径变的 so easy~

![oh-my-glob](http://upload-images.jianshu.io/upload_images/16777-b4e975f6f8b7e555.gif?imageMogr2/auto-orient/strip)

## 使用场景
### 任务管理
如，我们要将 lib 目录下所有的 js 文件下都进行压缩。我们用 [Gulp](http://gulpjs.com/) 可以这么写:
```
var uglify = require('gulp-uglify');
 gulp.task('compress', function() {
  return gulp.src('lib/**/*.js') // 选则 lib 下的所有 js 文件
    .pipe(uglify()) // 压缩
    .pipe(gulp.dest('dist')); // 将压缩后的文件输出到 dist 目录下
});
```

### 命令行
命令行中很多命令都可以用 glob。 如
```
grep '学习' *.md
```
上面目录做的是，从当前目录中查找文件内容中包含"学习"，并且文件格式为 md 的文件。

## 匹配规则
不同语言的 glob 库支持的规则会略有不同。下面是 [node-glob](https://github.com/isaacs/node-glob) 的匹配规则。
* `*` 匹配任意 0 或多个任意字符
* `?` 匹配任意一个字符
* `[...]` 若字符在中括号中，则匹配。若以 `!` 或 `^` 开头，若字符不在中括号中，则匹配
* `!(pattern|pattern|pattern)` 不满足括号中的所有模式则匹配
* `?(pattern|pattern|pattern)` 满足 0 或 1 括号中的模式则匹配
* `+(pattern|pattern|pattern)` 满足 1 或 更多括号中的模式则匹配
* `*(a|b|c)` 满足 0 或 更多括号中的模式则匹配
* `@(pattern|pat*|pat?erN)` 满足 1 个括号中的模式则匹配
* `**` 跨路径匹配任意字符

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
