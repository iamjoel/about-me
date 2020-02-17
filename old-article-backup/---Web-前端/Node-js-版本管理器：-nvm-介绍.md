有时候，我们需要测试写的 Nodejs 的程序在不同 Nodejs 版本下是否能正常运行；或是我们想要尝试下最新版 Nodejs 的新特性，但常用的代码需要旧版本的 Nodejs。但是，一个电脑上只能有一个版本的 Nodejs, 那我们要切换其版本就只能卸载，安装这样么？ 如果我们要测试一个应用在10个不同 Nodejs 版本下运行的情况，就要卸载安装10次么，感觉好烦那~

这时候，就需要 nvm 出场啦。

[nvm](https://github.com/creationix/nvm) (Node Version Manager) 是 Nodejs 版本管理器，它让我们能方便的对 Nodejs 的版本进行切换。

举个例子，假设，我们已经安装 nvm 了。如果，我们此时需要用 5.0 版本的 Nodejs ，如果 我们本机没有装该版本，那么，我们先执行 `nvm install 5.0` 来安装该版本，然后执行 `nvm use 5.0`， 此时用的 Nodejs 的版本即为 5.0 的。以后我们切换到 5.0 版本只需执行 `nvm use 5.0` 即可。当然，我们可以用 `nvm install` 来装更多的版本。

## 安装
nvm 的[官方版本](https://github.com/creationix/nvm)只支持 Linux 和 Mac。 安装只需执行
```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```

或

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```

如果是 Windows 用户，可以用 [nvm-windows](https://github.com/coreybutler/nvm-windows) 。 可能会有一些坑（我的 Win7 能比较正常的运行，而我一同事的，总出现问题。。。）。

## 常用命令
* `nvm install [Nodejs 版本]` 安装某版本的Nodejs
* `nvm use [Nodejs 版本|system]` 使用某版本的Nodejs。若选的 `system` 表示用 电脑上在装 nvm 之前使用装的 Nodejs
* `nvm ls ` 查看本机安装的所有的 Nodejs, 并高亮当前使用的版本

当上面命令中的 Nodejs 版本缺省时，会在当前以及其上级文件夹中找 `.nvmrc` 文件，从该文件中读取 Nodejs 的版本值。


***

*本文遵守[创作共享CC BY-NC-SA 4.0协议](http://creativecommons.org/licenses/by-nc-sa/4.0/)*
**网络平台如需转载必须与本人联系确认。**
