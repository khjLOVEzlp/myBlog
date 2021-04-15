---
title: rpm软件包管理
date: 2020-10-12
author: Kang
location: Shenzhen
---

## 1.rpm 简介

rpm 命令是 Red-Hat Package Manager 的缩写， 该命令用于管理 Linux 下软件包的软件。 在 Linux 操作系统下，几乎所有的软件均可以通过 rpm 进行安装、卸载及管理等操作。

## 2.下载 rpm 安装包

使用如下命令下载nginx的rpm安装包

```jade
wget http://nginx.org/packages/centos/8/x86_64/RPMS/nginx-1.18.0-1.el8.ngx.x86_64.rpm
```

## 3.安装软件

使用如下命令安装nginx

```jade
rpm -ivh nginx-1.18.0-1.el8.ngx.x86_64.rpm
```

## 4.列出 rpm 安装过的软件包

使用如下命令查看安装过的软件包

```jade
rpm qa
```

## 5.查询软件包安装的位置

使用如下命令查看nginx安装的位置

```jade
rpm -ql nginx
```

## 6.卸载软件包

使用如下命令卸载nginx

```jade
rpm -ev nginx
```