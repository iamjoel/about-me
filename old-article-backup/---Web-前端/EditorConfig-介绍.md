![Editorcofig logo](http://upload-images.jianshu.io/upload_images/16777-ff477bd78a528652.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

当多人共同开发一个项目的时候，往往会出现大家用不同编辑器的情况。就前端开发者来说，有人喜欢 [Sublime](http://www.sublimetext.com/3)，有人喜欢 [Webstorm](https://www.jetbrains.com/webstorm/) , 也有人喜欢 [Atom](https://atom.io/)，还有人喜欢 Vim，HBuilder 等等。各种不同编程语言的开发者喜欢各种不同的编辑器。

问题来了，如何让使用不同编辑器的开发者在共同开发一个项目时“无痛”地遵循编码规范(编码风格)？

我们来先看看，我们有一些可以部分的解决上面的问题的做法：
* 对编辑器进行设置。比如，项目中的编码规范是：代码缩进用空格；缩进两个空格。对于 sublime 来说，我们只需做如下设置：
```
"tab_size": 2,
"translate_tabs_to_spaces": true// 将 Tab 转化成空格
```
但可能出现的问题是：如果某开发者如果在同时开发两个项目，不幸的是，这两个项目的编码规范有冲突（比如，一个是缩进两个空格，另一个是缩进四个空格）怎么办？还有，如果该项目的某些编码规范编辑器设置不支持（比如，对 JS 文件要缩进两个空格；对 CSS 文件要缩进四个空格）怎么办？还有，不同编辑器设置各不相同等等。
* 每次代码提交前，使用 [ESLint](http://eslint.org/) 之类的一系列工具对代码进行编码规范的验证。修改不符合编码规范的代码直至满足规范为止。好吧，对于编辑器的设置与编码规范有冲突的情况，程序员就不得不苦逼的改改改。

[EditorConfig](http://editorconfig.org/) 能很好的“无痛”地解决上面问题。下面我就来介绍使用 EditorConfig 来解决上面的问题。只需两步~

1. 在项目根创建一个名为 `.editorconfig` 的文件。该文件的内容定义该项目的编码规范。EditorConfig 支持的编码规范在后文会有详细的介绍。
2. 安装与编辑器对应的 EditorConfig 插件。

其工作原理是：当你在编码时，EditorConfig 插件会去查找当前编辑文件的所在文件夹或其上级文件夹中是否有 `.editorconfig` 文件。如果有，则编辑器的行为会与 `.editorconfig` 文件中定义的一致，并且其优先级高于编辑器自身的设置。

 EditorConfig 支持的常用的编码规范，如下
* charset：文件编码。可选值
  * latin1
  * utf-8。一般用这个。
  * utf-16be
  * utf-16le
* indent_style: 缩进类型。可选值
  * space
  * tab
* indent_size: 缩进数量。可选值
  * 整数。一般设置 2 或 4。
  * tab
* insert_final_newline：是否在文件的最后插入一个空行。可选值
  * true
  * false
* end_of_line：换行符格式。说明见[Wiki：换行](https://zh.wikipedia.org/zh/%E6%8F%9B%E8%A1%8C)。可选值
  * lf。一般用这个。
  * crlf
  * cr
* trim_trailing_whitespace：是否删除行尾的空格。可选值
  * true
  * false

完整版见[这里](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties)。

可见 EditorConfig 能设置的编码规范不多，但也基本够用。EditorConfig 和 [ESLint](http://eslint.org/) 之类的编码规范验证工具一起使用是不错的选择。

最后附上我的 `.editorconfig` 文件：
```
# http://editorconfig.org

root = true

# 对所有文件生效
[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

# 对后缀名为 md 的文件生效
[*.md]
trim_trailing_whitespace = false
```

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
