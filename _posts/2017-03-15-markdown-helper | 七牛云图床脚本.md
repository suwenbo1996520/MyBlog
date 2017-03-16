---
layout:  post
title: "markdown-helper | 七牛云图床脚本"
date: 2017-03-15
dec: "markdown-helper | 七牛云图床脚本"
keywords: "markdown,七牛云, 图床,markdown-helper "
categories: [Windows]
tags: [markdown,七牛云]
icon: icon-html
---

最近利用Jekyll和GitHub组合在网上搭建了自己的博客，开始慢慢接触Markdown、练习如何写博客。但是写文章涉及到图片时每次都要手动上传到七牛云，然后再把外链复制下来拿来用，这样贼麻烦。于是，作为新手的我，跑去搜了很多关于七牛云插件的教程，感觉[markdown-helper](https://github.com/wuchangfeng/markdown-helper)这个python脚本在windows下蛮好用的，所以想拿来小小的分享一下。

## 配置步骤
##### 1. 安装python 和pip
详细内容不再赘述，可以参考[windows下面安装Python和pip终极教程](http://www.cnblogs.com/yuanzm/p/4089856.html)。

##### 2. 安装七牛云的sdk
利用pip安装七牛的sdk, 命令行下输入

`pip install qiniu`

##### 3. 下载[markdown-helper](https://github.com/wuchangfeng/markdown-helper)脚本并配置
- 在GitHub上，脚本作者提供了两种版本的脚本文件：

> [MarkDownHelper.py](https://github.com/wuchangfeng/markdown-
 helper/blob/master/MarkDownHelper.py): 可以将上传至七牛的图片等比例的缩小至 75% 或自定义宽高

 > [MarkDownHelper2.py](https://github.com/wuchangfeng/markdown-
 helper/blob/master/MarkDownHelper2.py): 上传至七牛的图片压缩为原来的1/3。

 我们可以根据自己不同的需求选择不同的脚本，这篇文章中，我只展示了 [MarkDownHelper.py](https://github.com/wuchangfeng/markdown-helper/blob/master/MarkDownHelper.py)，要使用要使用压缩功能，请看脚本作者原文[markdown-helper](https://github.com/wuchangfeng/markdown-helper)，其实差别不大。

 将 *MarkDownHelper.py* 脚本下载到计算机，如果您没有七牛云的账号，请移步[七牛云](https://www.qiniu.com/)注册账号并建立自己的bucket。

- 修改脚本的配置：
 用编辑器打开脚本文件修改配置
 
![MarkDownHelper(1).png](http://om34k6iz4.bkt.clouddn.com/MarkDownHelper(1).png?imageMogr2/thumbnail/!75p)

 **对应的配置参数在这里**
 
![MarkDownHelper(2).png](http://om34k6iz4.bkt.clouddn.com/MarkDownHelper(2).png?imageMogr2/thumbnail/!75p)

![MarkDownHelper(3).png](http://om34k6iz4.bkt.clouddn.com/MarkDownHelper(3).png?imageMogr2/thumbnail/!75p)

##### 4. 拖动图片到脚本上即可，程序会在同文件夹内生成 *md_url.txt*，内含有可直接引用的外链。
如果拖动没有反应，可以自己调试一下。在脚本当前路径下进入 CMD ，接着输入 

 `python MarkDownHelper.py `
 
运行脚本，报错信息在 CMD 窗口都能看得到。

注：此操作需要系统将python脚本视为一个合法的可拖放的目的对象，否则将图片拖动到脚本上是无效的。Win10 应该默认是可以的，我在ubuntu(Linux)上拖动好像就没效果，刚开始接触Linux，现在还没学会怎么设置这个，哭瞎。

总之，感谢脚本开发者，也希望本文能帮到和我一样的初学者。第一次学着写博客，诸多不足之处望见谅。

[原文](http://www.jianshu.com/p/4eb985281720)
