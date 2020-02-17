 Google CDN 服务在墙内访问一直不太正常。而国外的很多网站（stackoverflow之类）都用了Google的CDN。

加速方式是
方法1： Chrome中安装ReplaceGoogleCDN这个插件，插件下载地址点[这里](https://chrome.google.com/webstore/detail/replace-google-cdn/kpampjmfiopfpkkepbllemkibefkiice)

方法2：改`hosts`文件,在文件中追加如下内容
```
ajax.googleapis.com ajax.lug.ustc.edu.cn
fonts.googleapis.com fonts.lug.ustc.edu.cn
themes.googleusercontent.com google-themes.lug.ustc.edu.cn
```

两种加速的方式的原理相同，均为将网站中的 `ajax.googleapis.com/*`，`fonts.googleapis.com/*`,`themes.googleusercontent.com/*`的地址替换为中科大提供的镜像的地址。

当然啦，如果想翻墙，推荐使用云梯的VPN，欢迎点我的推荐链接，[这里](http://ytref.com/?r=f3e9d90b468a1e44)

