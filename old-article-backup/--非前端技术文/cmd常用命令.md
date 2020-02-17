* echo off  :关闭DOS 提示符的显示使屏幕只留下光标，直至键入ECHO
ON，提示符才会重新出现
* echo str: 显示 str
* echo.:输出空行。值得注意的是命令行中的“．”要紧跟在ECHO 后面中间不能有空格
* rem 和 ::  :注释 前一个会在屏幕上显示，后一个不会
* pause :暂定程序
* \> :重定向。如 echo st > d:\cmd\t.txt 。将st覆盖的方式输出到d:\cmd\t.txt文件中。
* \>> :重定向。如 echo st > d:\cmd\t.txt 。将st追加的方式输出到d:\cmd\t.txt文件中。
* title str:将标题设置成str
* color int:将控制台的字设置颜色。0 = 黑色 8 = 灰色 1 = 蓝色 9 = 淡蓝色 2 = 绿色 A = 淡绿色 3 = 湖蓝色 B = 淡浅绿色 4 = 红色 C = 淡红色 5 = 紫色 D = 淡紫色 7 = 白色 F = 亮白色
* find [可选项] "str"  文件名:如 find "aaa" D:\cmd\t.txt 。可选项 
  * /V 显示所有未包含指定字符串的行
  * /C 仅显示包含字符串的行数。
  * /N 显示行号。
  * /I 搜索字符串时忽略大小写。
* findstr [可选项] "str"  文件名 :find的加强版。支持正则，忽略大小写等等
* start :批处理中调用外部程序的命令（该外部程序在新窗口中运行，批处理程序继续往下执行，不理会外部程序的运行状况）如 start explorer d:\：调用图形界面打开D 盘
* assoc 设置'文件扩展名'关联，关联到'文件类型'
  * assoc #显示所有'文件扩展名'关联
  * assoc .txt #显示.txt 代表的'文件类型'，结果显示 .txt=txtfile
  * assoc .txt=Word.Document.8 设置文件的关联类型，慎用！！！
* ftype命令用来显示及修改不同扩展名文件所关联的打开程序

****
## 计算机设置
* 管理开机启动项： msconfig 然后选择启动标签卡
