---
title: MongoDB
date: 2020-09-30
author: Kang
location: Shenzhen
---

## mongodb 下载

下载地址：http://www.mongodb.org/downloads

## 启动 Mongodb 服务

### 创建数据库目录

在你想要存放数据的地方，新建一个文件夹，如 db，我们推荐的数据库目录设置是：

```
data/
	conf	-->配置文件目录
		mongod.conf		-->配置文件
	db		-->数据库目录
	log		-->日志文件目录
		mongodb.log		-->日志记录文件
```

### 启动数据库

我本地是 window10 环境，我的 mongodb 服务安装在 F 盘的 mongodb 文件夹。我的数据目录在 F 的 data 文件夹。

启动 doc 命令,输入一下命令:

```
F:\>mongodb/bin
F:\mongodb\bin>mongod --path=/data/db
```

输出以下信息:

```
2016-10-20T17:11:01.839+0800 I CONTROL  [initandlisten] MongoDB starting : pid=1504 port=27017 dbpath=/data/db 64-bit host=Haier-PC
2016-10-20T17:11:01.842+0800 I CONTROL  [initandlisten] targetMinOS: Windows 7/Windows Server 2008 R2
2016-10-20T17:11:01.844+0800 I CONTROL  [initandlisten] db version v3.0.12-47-gd57ef6a
2016-10-20T17:11:01.844+0800 I CONTROL  [initandlisten] git version: d57ef6a0c5a41729977f8d535a4c8de6d0cff8ba
2016-10-20T17:11:01.844+0800 I CONTROL  [initandlisten] build info: windows sys.getwindowsversion(major=6, minor=1, build=7601, platform=2, service_pack='Service Pack 1') BOOST_LIB_VERSION=1_49
2016-10-20T17:11:01.844+0800 I CONTROL  [initandlisten] allocator: tcmalloc
2016-10-20T17:11:01.844+0800 I CONTROL  [initandlisten] options: { storage: { dbPath: "/data/db" } }
2016-10-20T17:11:01.860+0800 I JOURNAL  [initandlisten] journal dir=/data/db\journal
2016-10-20T17:11:01.862+0800 I JOURNAL  [initandlisten] recover : no journal files present, no recovery needed
2016-10-20T17:11:01.971+0800 I JOURNAL  [durability] Durability thread started
2016-10-20T17:11:01.972+0800 I JOURNAL  [journal writer] Journal writer thread started
2016-10-20T17:11:02.186+0800 I INDEX    [initandlisten] allocating new ns file /data/db\local.ns, filling with zeroes...
2016-10-20T17:11:02.553+0800 I STORAGE  [FileAllocator] allocating new datafile /data/db\local.0, filling with zeroes...
2016-10-20T17:11:02.554+0800 I STORAGE  [FileAllocator] creating directory /data/db\_tmp
2016-10-20T17:11:02.600+0800 I STORAGE  [FileAllocator] done allocating datafile /data/db\local.0, size: 64MB,  took 0.012 secs
2016-10-20T17:11:02.654+0800 I NETWORK  [initandlisten] waiting for connections on port 27017
```

### 将 MongoDB 服务器作为 Windows 服务运行

像上面那样启动 mongodb，发现没办法输入命令行了，这是可以采用打开多个窗口来连接，但这样就太麻烦了，解决办法就是将 MongoDB 服务器作为 Windows 服务运行。

输入以下命令：

```
F:\mongodb\bin>mongod --dbpath "f:\data\db" --logpath "f:\data\log\mongodb.log" --serviceName "mongodb" --serviceDisplayName "mongodb" --install
```

看到了如下输出：

```
2016-10-20T23:32:46.339+0800 I CONTROL  log file "f:\data\log\mongodb.log" exists; moved to "f:\data\log\mongodb.log.2016-10-20T15-32-46".
```

说明 mongodb 服务安装成功。启动 mongodb 服务：

```
F:\mongodb\bin>net start mongodb

MongoDB 服务已经启动成功。
```

说明 mongodb 启动成功。

由于我们并没有指定 mongodb 服务的端口号，所以它启动在默认的 27017 窗口。

打开浏览器，范围地址http://127.0.0.1:27017/,可看到如下信息

```
It looks like you are trying to access MongoDB over HTTP on the native driver port.
```

### mongodb 常用启动参数

mongod.exe 常用参数如下

| 参数                 |                               描述                                |
| -------------------- | :---------------------------------------------------------------: |
| --bind_ip            | 绑定服务 IP,若绑定 127.0.0.1,则只能本机访问,不指定默认本地所有 IP |
| --logpath            |            定 MongoDB 日志文件,注意是指定文件不是目录             |
| --logappend          |                       使用追加的方式写日志                        |
| --dbpath             |                          指定数据库路径                           |
| --port               |                   指定服务端口号,默认端口 27017                   |
| --serviceName        |                           指定服务名称                            |
| --serviceDisplayName |             指定服务名称,有多个 mongodb 服务时执行。              |
| --install            |                  指定作为一个 Windows 服务安装。                  |

## MongoDB 创建数据库

### 语法

MongoDB 创建数据库的语法格式如下：

```
use DATABASE_NAME
```

如果数据库不存在，则创建数据库，否则切换到指定数据库。

### 实例

以下实例我们创建了数据库 mongo:

```
> use mongo
switched to db mongo
> db
mongo
>
```

如果你想查看所有数据库，可以使用 show dbs 命令：

```
> show dbs
local  0.078GB
test   0.078GB
>
```

可以看到，我们刚创建的数据库 mongo 并不在数据库的列表中， 要显示它，我们需要向 mongo 数据库插入一些数据。

```
> db.mongo.insert({"name":"mongodb中文网"})
WriteResult({ "nInserted" : 1 })
> show dbs
local   0.078GB
mongo  0.078GB
test    0.078GB
>
```

## MongoDB 删除数据库

### 语法

MongoDB 删除数据库的语法格式如下：

```
db.dropDatabase()
```

删除当前数据库，默认为 test，你可以使用 db 命令查看当前数据库名。

### 实例

以下实例我们删除了数据库 mongo。

首先，查看所有数据库：

```
> show dbs
local   0.078GB
mongo   0.078GB
test    0.078GB
```

接下来我们切换到数据库 mongo

```
> use runoob  switched to db mongo  >
```

执行删除命令：

```
> db.dropDatabase()  { "dropped" : "runoob", "ok" : 1 }
```

最后，我们再通过 show dbs 命令数据库是否删除成功：

```
> show dbs
local  0.078GB
test   0.078GB
>
```

### 删除集合

集合删除语法格式如下：

```
  db.collection.drop()
```

## MongoDB 插入文档

### 插入文档

MongoDB 使用 insert() 或 save() 方法向集合中插入文档，语法如下：

```
 db.COLLECTION_NAME.insert(document)
```

### 实例

以下文档可以存储在 MongoDB 的 mongo 数据库 的 col 集合中：

```
>db.col.insert({title: 'MongoDB 教程',
	description: 'MongoDB 是一个 Nosql 数据库',
	by: 'MongoDB中文网',
	url: 'http://www.mongodb.org.cn',
	tags: ['mongodb', 'database', 'NoSQL'],
	likes: 100
})
```

以上实例中 col 是我们的集合名，前一章节我们已经创建过了，如果该集合不在该数据库中， MongoDB 会自动创建该集合并插入文档。

查看已插入文档：

```
> db.col.find()
{
	"_id" : ObjectId("56064886ade2f21f36b03134"),
	"title" : "MongoDB 教程",
	"description" : "MongoDB 是一个 Nosql 数据库",
	"by" : "MongoDB中文网",
	"url" : "http://www.mongodb.org.cn",
	"tags" : [ "mongodb", "database", "NoSQL" ],
	"likes" : 100
}
>
```

我们也可以将数据定义为一个变量，如下所示：

```
> document=({title: 'MongoDB 教程',
	description: 'MongoDB 是一个 Nosql 数据库',
	by: 'Mongodb中文网',
	url: 'http://www.mongodb.org.cn',
	tags: ['mongodb', 'database', 'NoSQL'],
	likes: 100
});
```

执行后显示结果如下：

```
{
	"title" : "MongoDB 教程",
	"description" : "MongoDB 是一个 Nosql 数据库",
	"by" : "Mongodb中文网",
	"url" : "http://www.mongodb.org.cn",
	"tags" : [
		"mongodb",
		"database",
		"NoSQL"
	],
	"likes" : 100
}
```

执行插入操作：

```
> db.col.insert(document)  WriteResult({ "nInserted" : 1 })  >
```

插入文档你也可以使用 db.col.save(document) 命令。如果不指定 \_id 字段 save() 方法类似于 insert() 方法。如果指定 \_id 字段，则会更新该 \_id 的数据。

## MongoDB 更新文档

### update() 方法

update() 方法用于更新已存在的文档。语法格式如下：

```
db.collection.update(
	<query>,
	<update>,
	{
		upsert: <boolean>,
		multi: <boolean>,
		writeConcern: <document>
	}
)
```

参数说明：

- query : update 的查询条件，类似 sql update 查询内 where 后面的。
- update : update 的对象和一些更新的操作符（如$,$inc...）等，也可以理解为 sql update 查询内 set 后面的
- upsert : 可选，这个参数的意思是，如果不存在 update 的记录，是否插入 objNew,true 为插入，默认是 false，不插入。
- multi : 可选，mongodb 默认是 false,只更新找到的第一条记录，如果这个参数为 true,就把按条件查出来多条记录全部更新。
- writeConcern :可选，抛出异常的级别。

  ### 实例

  我们在集合 col 中插入如下数据：

```
> db.col.insert({

    title: 'Mongodb 教程',
    description: 'MongoDB 是一个 Nosql 数据库',
    by: 'Mongodb中文网',
    url: 'http://www.mongodb.org.cn',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100

})
```

接着我们通过 update() 方法来更新标题(title):

```
> db.col.update({'title':'MongoDB 教程'},{\$set:{'title':'MongoDB'}})
> WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 }) # 输出信息
> db.col.find().pretty()
> {

    "_id" : ObjectId("56064f89ade2f21f36b03136"),
    "title" : "MongoDB",
    "description" : "MongoDB 是一个 Nosql 数据库",
    "by" : "Mongodb中文网",
    "url" : "http://www.mongodb.org.cn",
    "tags" : [
    	"mongodb",
    	"database",
    	"NoSQL"
    ],
    "likes" : 100

}
```

可以看到标题(title)由原来的 "MongoDB 教程" 更新为了 "MongoDB"。

以上语句只会修改第一条发现的文档，如果你要修改多条相同的文档，则需要设置 multi 参数为 true。

```
> db.col.update({'title':'MongoDB 教程'},{\$set:{'title':'MongoDB'}},{multi:true})
>
```

### save() 方法

save() 方法通过传入的文档来替换已有文档。语法格式如下：

```
db.collection.save(
<document>,
{
writeConcern: <document>
}
)
```

参数说明：

- document : 文档数据。
- writeConcern :可选，抛出异常的级别。

### 实例

以下实例中我们替换了 \_id 为 56064f89ade2f21f36b03136 的文档数据：

```
> db.col.save({

    "_id" : ObjectId("56064f89ade2f21f36b03136"),
    "title" : "MongoDB",
    "description" : "MongoDB 是一个 Nosql 数据库",
    "by" : "MongoDB中文网",
    "url" : "http://www.mongodb.org.cn",
    "tags" : [
    	"mongodb",
    	"NoSQL"
    ],
    "likes" : 110
    }

)
```

替换成功后，我们可以通过 find() 命令来查看替换后的数据

```
> db.col.find().pretty()
> {

    "_id" : ObjectId("56064f89ade2f21f36b03136"),
    "title" : "MongoDB",
    "description" : "MongoDB 是一个 Nosql 数据库",
    "by" : "Mongo",
    "url" : "http://www.mongodb.org.cn",
    "tags" : [
    	"mongodb",
    	"NoSQL"
    ],
    "likes" : 110

}
```

### 更多实例

只更新第一条记录：

```
db.col.update( { "count" : { $gt : 1 } } , { $set : { "test2" : "OK"} } );
```

全部更新：

```
db.col.update( { "count" : { $gt : 3 } } , { $set : { "test2" : "OK"} },false,true );
```

只添加第一条：

```
db.col.update( { "count" : { $gt : 4 } } , { $set : { "test5" : "OK"} },true,false );
```

全部添加加进去:

```
db.col.update( { "count" : { $gt : 5 } } , { $set : { "test5" : "OK"} },true,true );
```

全部更新：

```
db.col.update( { "count" : { $gt : 15 } } , { $inc : { "count" : 1} },false,true );
```

只更新第一条记录：

```
db.col.update( { "count" : { $gt : 10 } } , { $inc : { "count" : 1} },false,false );

```
