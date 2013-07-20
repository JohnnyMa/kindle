# kindle pusher ![](https://badge.fury.io/js/kindle.png)

kindle mail-pusher based on node-pdf

是不是很烦有的时候你想安安静静地在kindle上看点儿东西（比如代码）。但又被页面上浮躁的花花绿绿的东西所影响？这个小工具就为了这个目的而设计，你可以使用命令行把txt文件，js文件或者其他的文本文件，图像发送到你的kindle。一行命令，就是这么简单。

当然，你也可以在自己的node程序中 `require('kindle')` 随心所欲构建自己想要的阅读环境。

### 如何安装

`npm install kindle` 

### 如何使用

首先，将你的亚马逊账户中将kindle推送的邮箱设置成可信的。这个小工具默认的发件邮箱是这个：kindle@menkr.com

````
$ kindle -s yourEmail@yourDomain.com // 发送到你的kindle邮箱
````

### 设置自己的推送邮箱

按照如下的方式设置自己的邮箱去推送，设置完之后别忘了将你自己的邮箱加入亚马逊的信任列表哦~

````
$ kindle --email my@my.com // 设置自己的邮箱账户
$ kindle --password 123131212 // 设置自己的邮箱密码
````

### 反馈与建议

欢迎PR或联系 新浪微博@郭宇