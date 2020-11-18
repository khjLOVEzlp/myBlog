---
title: 构造器和操作符“new”
date: 2020-11-18
author: kang
location: shenzhen
---

## 构造器和操作符“new”

常规的 {...} 语法允许创建一个对象。但是我们经常需要创建许多类似的对象，例如多个用户或菜单项等。

这可以使用构造函数和 "new" 操作符来实现

### 构造函数

构造函数在技术上是常规函数，不过有两个约定：

1. 它们的命名以大写字母开头
2. 只能通过“new”操作符来执行

例如：

```javascript
function Cat(name, age) {
  this.name = name;
  this.age = age;
}

let cat = new Cat("小白", 18);

alert(cat.name); // 小白
alert(cat.age); // 18
```

当一个函数使用“new”操作符来执行时，它按照以下步骤：

1. 一个新的空对象被创建并分配给 this
2. 函数体执行， 通常它会修改 this，为其添加新的属性
3. 返回 this 的值

new User(...) 做的就是类似的事情：

```javascript
function Cat(name, age) {
  // this = {};（隐式创建）

  // 添加属性到 this
  this.name = name;
  this.age = age;

  // return this;（隐式返回）
}
```

所以 new Cat("小白", 18) 的结果是相同的对象：

```javascript
let user = {
  name: "小白",
  age: 18,
};
```

如果我们想创建其他用户，我们可以调用 new Cat("小黄", 20)，new Cat("小黑", 22) 等。比每次都使用字面量创建要短得多，而且更易于阅读

这是构造器的主要目的 —— 实现可重用的对象创建代码

从技术上讲，任何函数都可以用作构造器。即：任何函数都可以通过 new 来运行，它会执行上面的算法。“首字母大写”是一个共同的约定，以明确表示一个函数将被使用 new 来运行

### 构造器的 return

通常，构造器没有 return 语句。它们的任务是将所有必要的东西写入 this，并自动转换为结果

但是，如果这有一个 return 语句，那么规则就简单了：

- 如果 return 返回的是一个对象，则返回这个对象，而不是 this
- 如果 return 返回的是一个原始类型，则忽略

带有对象的 return 返回该对象，在所有其他情况下返回 this

例如，这里 return 通过返回一个对象覆盖 this：

```javascript
function BigUser() {
  this.name = "John";

  return { name: "Godzilla" }; // <-- 返回这个对象
}

alert(new BigUser().name); // Godzilla，得到了那个对象
```
