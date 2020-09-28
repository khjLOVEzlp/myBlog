---
title: javascript数据类型
date: 2020-09-28
author: Kang
location: Shenzhen
---

# 动态类型

Javascript 是一种弱类型或者动态语言。这意味着你不用提前声明变量的类型,在程序运行过程中,类型会被自动确定。这也意味着你可以使用同一个变量保存不同类型的数据：

```javascript
var foo = 42; // foo is a Number now
foo = "bar"; // foo is a String now
foo = true; // foo is a Boolean now
```

# 数据类型

最新的 ECMAScript 标准定义了 8 种数据类型:

七种**原始类型**：

- String

* Number

* Boolen

* Undefined

* null

- Bigint

* Symbol

  和 **Object**

# 原始值

除 Object 以外的所有类型都是不可变的（值本身无法被改变）。我们称这些类型的值为“原始值”。

## 布尔类型

布尔表示一个逻辑实体，可以有两个值：true 和 false。

## Null 类型

Null 类型只有一个值： null

## Undefined 类型

一个没有被赋值的变量会有个默认值 undefined

## 数字类型

根据 ECMAScript 标准，JavaScript 中只有一种数字类型：基于 IEEE 754 标准的双精度 64 位二进制格式的值（-(253 -1) 到 253 -1）。它并没有为整数给出一种特定的类型。除了能够表示浮点数外，还有一些带符号的值：+Infinity，-Infinity 和 NaN (非数值，Not-a-Number)。

数字类型中只有一个整数有两种表示方法： 0 可表示为 -0 和 +0（"0" 是 +0 的简写）。 在实践中，这也几乎没有影响。 例如 +0 === -0 为真。 但是，你可能要注意除以 0 的时候：

```javascript
42 / +0; // Infinity
42 / -0; // -Infinity
```

## BigInt 类型

BigInt 类型是 JavaScript 中的一个基础的数值类型，可以用任意精度表示整数。使用 BigInt，您可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。BigInt 是通过在整数末尾附加 n 或调用构造函数来创建的。

```javascript
> const x = 2n ** 53n;
9007199254740992n
> const y = x + 1n;
9007199254740993n
```

可以对 BigInt 使用运算符+、\*、-、\*\*和%，就像对数字一样。BigInt 严格来说并不等于一个数字，但它是松散的。

在将 BigInt 转换为 Boolean 时，它的行为类似于一个数字：if、||、&&、Boolean 和!。

BigInt 不能与数字互换操作。否则，将抛出 TypeError。

## 字符串类型

JavaScript 的字符串类型用于表示文本数据。它是一组 16 位的无符号整数值的“元素”。在字符串中的每个元素占据了字符串的位置。第一个元素的索引为 0，下一个是索引 1，依此类推。字符串的长度是它的元素的数量。

表达文本数据和符号数据时候推荐使用字符串。当表达复杂的数据时，使用字符串解析和适当的缩写。

## 符号类型

符号(Symbols)是 ECMAScript 第 6 版新定义的。符号类型是唯一的并且是不可修改的, 并且也可以用来作为 Object 的 key 的值. 在某些语言当中也有类似的原子类型(Atoms). 你也可以认为为它们是 C 里面的枚举类型

# 对象

在计算机科学中, 对象是指内存中的可以被 标识符引用的一块区域.

## 属性

在 Javascript 里，对象可以被看作是一组属性的集合。用对象字面量语法来定义一个对象时，会自动初始化一组属性。（也就是说，你定义一个 var a = "Hello"，那么 a 本身就会有 a.substring 这个方法，以及 a.length 这个属性，以及其它；如果你定义了一个对象，var a = {}，那么 a 就会自动有 a.hasOwnProperty 及 a.constructor 等属性和方法。）而后，这些属性还可以被增减。属性的值可以是任意类型，包括具有复杂数据结构的对象。属性使用键来标识，它的键值可以是一个字符串或者符号值（Symbol）。

ECMAScript 定义的对象中有两种属性：数据属性和访问器属性。
