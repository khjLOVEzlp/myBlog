---
title: 构造器和操作符 "new"
date: 2020-09-29
author: Kang
location: Shenzhen
---

常规的 {...} 语法允许创建一个对象。但是我们经常需要创建许多类似的对象，例如多个用户或菜单项等。

这可以使用构造函数和 "new" 操作符来实现。

## 构造函数

构造函数在技术上是常规函数。不过有两个约定：

1. 它们的命名以大写字母开头。
2. 它们只能由 "new" 操作符来执行。

例如：

```javascript
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false
```

当一个函数被使用 new 操作符执行时，它按照以下步骤：

1. 一个新的空对象被创建并分配给 this。
2. 函数体执行。通常它会修改 this，为其添加新的属性。
3. 返回 this 的值。

换句话说，new User(...) 做的就是类似的事情：

```javascript
function User(name) {
  // this = {};（隐式创建）

  // 添加属性到 this
  this.name = name;
  this.isAdmin = false;

  // return this;（隐式返回）
}
```

所以 new User("Jack") 的结果是相同的对象：

```javascript
let user = {
  name: "Jack",
  isAdmin: false,
};
```

现在，如果我们想创建其他用户，我们可以调用 new User("Ann")，new User("Alice") 等。比每次都使用字面量创建要短得多，而且更易于阅读。

这是构造器的主要目的 —— 实现可重用的对象创建代码。

让我们再强调一遍 —— 从技术上讲，任何函数都可以用作构造器。即：任何函数都可以通过 new 来运行，它会执行上面的算法。“首字母大写”是一个共同的约定，以明确表示一个函数将被使用 new 来运行。

## 构造器模式测试：new.target

在一个函数内部，我们可以使用 new.target 属性来检查它是否被使用 new 进行调用了。

对于常规调用，它为空，对于使用 new 的调用，则等于该函数：

```javascript
function User() {
  alert(new.target);
}

// 不带 "new"：
User(); // undefined

// 带 "new"：
new User(); // function User { ... }
```

它可以被用在函数内部，来判断该函数是被通过 new 调用的“构造器模式”，还是没被通过 new 调用的“常规模式”。

我们也可以让 new 调用和常规调用做相同的工作，像这样：

```javascript
function User(name) {
  if (!new.target) {
    // 如果你没有通过 new 运行我
    return new User(name); // ……我会给你添加 new
  }

  this.name = name;
}

let john = User("John"); // 将调用重定向到新用户
alert(john.name); // John
```

这种方法有时被用在库中以使语法更加灵活。这样人们在调用函数时，无论是否使用了 new，程序都能工作。

不过，到处都使用它并不是一件好事，因为省略了 new 使得很难观察到代码中正在发生什么。而通过 new 我们都可以知道这创建了一个新对象。

## 构造器的 return

通常，构造器没有 return 语句。它们的任务是将所有必要的东西写入 this，并自动转换为结果。

但是，如果这有一个 return 语句，那么规则就简单了：

- 如果 return 返回的是一个对象，则返回这个对象，而不是 this。
- 如果 return 返回的是一个原始类型，则忽略。

换句话说，带有对象的 return 返回该对象，在所有其他情况下返回 this。

例如，这里 return 通过返回一个对象覆盖 this：

```javascript
function BigUser() {
  this.name = "John";

  return { name: "Godzilla" }; // <-- 返回这个对象
}

alert(new BigUser().name); // Godzilla，得到了那个对象
```

这里有一个 return 为空的例子（或者我们可以在它之后放置一个原始类型，没有什么影响）：

```javascript
function SmallUser() {
  this.name = "John";

  return; // <-- 返回 this
}

alert(new SmallUser().name); // John
```

通常构造器没有 return 语句。这里我们主要为了完整性而提及返回对象的特殊行为。

## 构造器中的方法

使用构造函数来创建对象会带来很大的灵活性。构造函数可能有一些参数，这些参数定义了如何构造对象以及要放入什么。

当然，我们不仅可以将属性添加到 this 中，还可以添加方法。

例如，下面的 new User(name) 用给定的 name 和方法 sayHi 创建了一个对象：

```javascript
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert("My name is: " + this.name);
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
```
