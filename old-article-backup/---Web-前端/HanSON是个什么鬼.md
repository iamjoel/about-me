## 未出现Hanson
做Web开发的应该都或多或少知道[JSON](http://json.org/json-zh.html)这东东。我们经常会用JSON文件来做为配置文件,如`package.json`,`bower.json`。但JSON有不少让人不爽的地方，比如:
* 不支持注释（不爽的不能接受）
* 属性名必须要用双引号包围（不爽的还可以接受）
* 值为字符串的必须用双引号包围，不能用单号（不爽的还可以接受）

一有违反，就会报解析错误。很坑。

因此，有时候我们就不得不用js文件来写本可以用JSON来写的配置文件。

## 出现HanSON后

> HanSON - JSON for Humans（给人用的JSON）

首先我们来个的HanSON的例子
```
{
  listName: "Sesame Street Monsters", // note that listName needs no quotes
  content: [
    {
      name: "Cookie Monster",
      /* Note the template quotes and unescaped regular quotes in the next string */
      background: `Cookie Monster used to be a
monster that ate everything, especially cookies.
These days he is forced to eat "healthy" food.`
    }, {
      name: "Herry Monster",
      background: `Herry Monster is a furry blue monster with a purple nose.
He's mostly retired today.`
    },    // don't worry, the trailing comma will be ignored
   ]
}
```
乍一看，和JSON也差不多。但对内容的限制比较少。
在HanSON中可以
* 用js的注释 :`// `和 `/* */`
* 属性名可以不用双引号包围
* 字符串可以用单引号
* 多行字符串可以用\`\`包围 如
```
{
 background: `Herry Monster is a furry blue monster with a purple nose.
He's mostly retired today.`
}
```

合法的JSON一定是合法的HanSON。

把HanSON转化成JSON也很容易。
可以用命令行工具`hanson`
安装 `npm install -g hanson`
使用 `hanson input.hson output.json`  会将Tab转化成\t，回车转化成\n

也有基于Grunt的插件[grunt-hanson-plugin](https://github.com/timjansen/grunt-hanson-plugin)。发现在多行字符串的转化中该工具不会去掉行未的换行符。导致转换出来的结果是非法的JSON。

了解更多，见其[官网](https://github.com/timjansen/hanson)。

让我们愉快的用HanSON来写配置文件吧~

PS： 最近又发现了一个叫[hJson](http://hjson.org/)的东东。和Hanson差不多。只是多行字符串是用三个单引号来包围。还是这种表示多行字符串的方式更接近直觉（对会Python或ruby的更是如此吧XD）。
