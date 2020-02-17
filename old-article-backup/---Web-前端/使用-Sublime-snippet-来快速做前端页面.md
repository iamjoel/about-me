## Sublime-snippet 简介
 在 Sublime 中，可以通过 Sublime-snippet 来快速补全代码。
举个栗子，如果在 Sublime 的存放 Submlime-snippet 的文件夹下有如下的文件(`elem-edge.sublime-snippet`   文件名不重要)
```
<snippet>
  <tabTrigger>elem-edge</tabTrigger>
  <description>edge of the element</description>
  <content><![CDATA[
<!-- ${1:elem name} start -->
${2:content}
<!-- ${1:elem name} end -->
]]></content>
</snippet>
```
其中，
* `<content><![CDATA[ ]]></content>` 定义了补全的内容
* ${1:elem name} 中： 1是输入点的序号，1表示的是第一个输入点，elem name表示的是输入点的默认值。
* ${2:content} 中：2表示第二个输入点。
* `<tabTrigger>` ： 定义了触发补全的字符串
* `<description>` ：对snippet描述

打开任意一个文件，通过输入`elem-edge`，然后按Tab键，就可以补全内容。再按Tab进入下一个输入点。

上面的是snippet在任意类型的文件中都能触发。如果要限定文件类型，可以用
`<scope>source.文件类型</scope>`。

### 创建 Submlime-snippet 的方式
1. 在菜单中打开 `Tools-> New Snippet`
1. 编辑内容
1. 保存

## 用 Submlime-snippet 来快速做前端页面的方式
1.  制作一个组件演示页面
1. 打开 Sublime 存放 snippet 文件夹。打开方式是：打开 `Preferences>Browse Package`，在打开的文件夹中，打开 User文件夹。即 Sublime 存放 snippet 的文件夹。
1. 新建一个文件夹，名称为项目的名称。这样做是方便管理。应该没人一辈子只做一个项目吧~
1. 将一个个组件做成一个个的Snippet。为了保证和之前的Snippet的触发的按键不冲突，定义触发按键要加项目名称。例如,下面是一个通用的 Box
```
<snippet>
  <content><![CDATA[
<!-- ${1:box-name}-box start -->
<div class="box ${1:box-name}-box">
    <div class="box-header clearfix">
        <h3 class="box-title">${2:title}</h3>
        <div class="box-header-op">
            <a href="###">更多>></a>
        </div>
    </div>
    <div class="box-content">${3:content}</div>
</div>
<!-- ${1:box-name}-box end -->
${4:}
]]></content>
  <tabTrigger>项目名称:box</tabTrigger>
</snippet>
```
稍微复杂一点的，分页组件。
```
<snippet>
  <content><![CDATA[
<!-- 分页 start -->
<link rel="stylesheet" href="path-to-jquery.paging.css/jquery.paging.css">
<script src="path-to-jquery.paging.js/jquery.paging.js"></script>
<div class="paging-wrap ${1:paging-name}"></div>
/*var pager = \$('.${1:paging-name}').paging({
    pageNum: 10,
    onPageChange: function(pageAt) {
        console.log(pageAt);
    }
});*/
<!-- 分页 end -->
]]></content>
  <!-- Optional: Set a tabTrigger to define how to trigger the snippet -->
  <tabTrigger>项目名称:paging</tabTrigger>
  <!-- Optional: Set a scope to limit where the snippet will trigger -->
  <!-- <scope>source.python</scope> -->
</snippet>
```
注意，补全内容如果要输出`$`的话，要用`\`进行转义。

然后，就可以进行飞速的编码啦~

## 推荐
最后，推荐几个，比较好用的 Sublime 的自动补全插件
* [Emmet](https://sublime.wbond.net/packages/Emmet) 这个大家应该都知道
* [Bootstrap 3 Snippets](https://github.com/JasonMortonNZ/bs3-sublime-plugin) 快速生成bootstrap3的一些组件的 Snippets。

***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
