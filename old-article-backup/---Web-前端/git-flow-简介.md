git-flow 定义了一个围绕项目发布的严格分支模型，用于管理多人协作的大型项目，实现高效的协作。(ps：文末有练习的链接)

分支的介绍：
* `master` 可发布的内容。
* `develop` 开发分支。从`master`上fork，测试完成后，合并到`master`。
* `feature-x` 功能分支，从`develop`上`fork`，测试完成后，合并到`develop`。
* `bugfix-x` 修复某bug的分支，从`master`上`fork`，测试完成后，合并到`master`。
* `release` 发布分支。某个版本需要发布时，从`master`上`fork`。

流程的示意图如下：
![](http://upload-images.jianshu.io/upload_images/16777-68e7099f5805d466.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

详细介绍见[这里](https://github.com/xirong/my-git/blob/master/git-workflow-tutorial.md#23-gitflow%E5%B7%A5%E4%BD%9C%E6%B5%81)。

对于不是很复杂的项目，可以把省去 develop 分支。

想练习下，点[这里](https://github.com/iamjoel/git-flow-playground/blob/master/README.md#练习方法)。
