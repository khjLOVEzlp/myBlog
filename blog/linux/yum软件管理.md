---
title: yum软件包管理
date: 2020-10-12
author: Kang
location: Shenzhen
---

## 1.yum 简介

yum 是 Red Hat 软件包管理器，它能够查询有关可用软件包的信息，从存储库获取软件包，安装和卸载软件包，以及将整个系统更新到最新的可用版本。 yum
在更新，安装或删除软件包时执行自动依赖性解析，因此能够自动确定，获取和安装所有可用的依赖软件包。 yum 可以配置新的，额外的存储库或包源，还提供许多增强和扩展其功能的插件。

## 2.更新 yum 源

使用如下命令将yum源更新到最新：

```jade
yum update
```

## 3.安装软件

安装nginx，使用如下命令

```jade
yum -y install nginx
```

## 4.yum 清空缓存列表

使用如下命令可以清楚缓存目录下的所有包

```jade
yum clean packages
```

## 5.显示所有已经安装和可以安装的程序包

使用如下命令可以显示已经安装和可以安装的程序包

```jade
yum list
```

## 6.显示指定软件名信息列表

使用如下命令可以显示nginx软件包信息列表

```jade
yum list nginx
```

## 7.更新软件

使用如下命令可以更新nginx

```jade
yum update nginx
```

## 8.卸载已经安装的软件

使用如下命令可以卸载nginx

```jade
yum remove nginx
```