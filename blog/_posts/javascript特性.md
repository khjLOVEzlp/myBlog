---
title: javascript特性
date: 2020-11-18
author: kang
location: shenzhen
---

## javascript 特性

### 代码结构

语句用分号分隔：

```javascript
alert("hello");
alert("world");
```

通常，换行符也被视为分隔符，下面也能正常运行

```javascript
alert("hello");
alert("world");
```

这就是[自动分号插入]，但有时候不起作用，例如：

```jacascript
alert("There will be an error after this message")

[1, 2].forEach(alert)
```

大多数代码风格指南都认为我们应该在每个语句后面都加上分号
在代码块{...}后以及有代码块的语法结构（例如循环）后不需要加分号：

```javascript
function f() {
  // 函数声明后不需要加分号
}

for (;;) {
  // 循环语句后不需要加分号
}
```

即使我们添加了分号，这也不是错误，分号会被忽略的。

### 严格模式

为了完全启用现代 javasctipt 特性，我们需要在脚本顶部写上"use strict"

```javasctipt
'use strict';

...
```

这个指令必须位于 javasctipt 脚本的顶部或者函数体的开头

语言的一些现代特征（比如说 class 类）会隐式的启用严格模式

### 变量

可以使用以下方式声明变量：

- let
- const
- var

一个变量名可以由以下组成：

- 字母和数字， 但是第一个字符不能是数字
- 字符 \$ 和 \_ 是允许的，用法同字母
- 非拉丁字母和象形文字也是允许的，但通常不会使用

变量是动态类型的，它可以存储任何值：

```javascript
let x = 5;
x = "hello";
```

有八种数据类型：

- number —— 可以是浮点数，也可以是整数
- bigint —— 用于任意长度的整数
- string —— 字符串类型
- boolean —— 逻辑值：true/false
- null —— 具有单个值 null 的类型，表示“空”或“不存在”
- object —— 复杂的数据结构
- symbol —— 唯一的标识符

typeof 运算符返回值的类型，但是有两个另外：

```javascript
typeof null == "object"; // JavaScript 编程语言的设计错误
typeof function() {} == "function"; // 函数被特殊对待
```

### 运算符

javascript 支持以下运算符：

#### 算数运算符

常规的：+ - \* / （加减乘除），取余运算符 % 和幂运算符 \*\*

二进制加号+可以连接字符串，如果任何一个操作数是一个字符串，那么另一个操作数也将被转换为字符串：

```javascript
alert("1" + 2); // '12'，字符串
alert(1 + "2"); // '12'，字符串
```

#### 赋值

简单的赋值：a = b 和合并了其他操作的赋值：a \* = 2

#### 按位运算符

按位运算符在最低位级上操作 32 位的整数

#### 三元运算符

唯一具有三个参数的操作：cond ? resultA : resultB。如果 cond 为真，则返回 resultA，否则返回 resultB

#### 逻辑运算符

逻辑与 && 和或 || 执行短路运算，然后返回运算停止处的值（true/false 不是必须的）。逻辑非 ! 将操作数转换为布尔值并返回其相反的值

#### 空值合并运算符

?? 运算符从一列变量中，选取值为已定义的值（defined value）的变量。a ?? b 的结果是 a，除非 a 为 null/undefined，这时结果是 b

#### 比较运算符

对不同类型的值进行相等检查时，运算符 == 会将不同类型的值转换为数字（除了 null 和 undefined，它们彼此相等而没有其他情况），所以下面的例子是相等的：

```javascript
alert(0 == false); // true
alert(0 == ""); // true
```

其他比较也将转换为数字

严格相等运算符===不会进行转换：不同的类型总是指不同的值

undefined 和 null 是特殊的，它们只在==下相等，且不相等与其他任何值

大于/小于比较，在比较字符串时，会按照字符顺序逐个字符地进行比较。其他类型则被转换为数字

### 循环

```javascript
// 1
while (condition) {
  ...
}

// 2
do {
  ...
} while (condition);

// 3
for(let i = 0; i < 10; i++) {
  ...
}
```

- 在 for(let...) 循环内部声明的变量，只在该循环内可见。但我们也可以省略 let 并重用已有的变量

- 指令 break/continue 允许退出整个循环/当前迭代。使用标签来打破嵌套循环

### switch 结构

switch 可以代替多个 if 检查，它内部使用===（严格相等）进行比较

例如：

```javascript
let age = "18";

switch (age) {
  case 18:
    alert("Won't work");
    break;

  case "18":
    alert("This works!");
    break;

  default:
    break;
}
```

### 函数

三种在 JavaScript 中创建函数的方式：

1. 函数声明：主代码流中的函数

```javascript
function sum(a, b) {
  let result = a + b;
  return result;
}
```

2. 函数表达式：表达式上下文中的函数

```javascript
let sum = function(a, b) {
  let result = a + b;
  return result;
};
```

3. 箭头函数

```javascript
// 表达式在右侧
let sum = (a, b) => a + b;

// 或带 {...} 的多行语法，此处需要 return：
let sum = (a, b) => {
  // ...
  return a + b;
};

// 没有参数
let sayHi = () => alert("Hello");

// 有一个参数
let double = (n) => n * 2;
```

- 函数可能具有局部变量：在函数内部声明的变量。这类变量只在函数内部可见
- 参数可以有默认值：function sum(a = 1, b = 2) {...}
- 函数总是返回一些东西。如果没有 return 语句，那么返回的结果是 undefined
