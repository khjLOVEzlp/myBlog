---
title: Symbol 类型
date: 2020-11-18
author: kang
location: shenzhen
---

## Symbol 类型

根据规范，对象的属性键只能是字符串类型或者 Symbol 类型。不是 Number，也不是 Boolean，只有字符串或 Symbol 这两种类型

### Symbol

“Symbol” 值表示唯一的标识符。

可以使用 Symbol() 来创建这种类型的值：

```javascript
// id 是一个symbol的实例化对象
let id = Symbol();
```

创建时，我们可以给 Symbol 一个描述（也称为 Symbol 名），这在代码调试时非常有用：

```javascript
// id 是描述为 "id" 的 Symbol
let id = Symbol("id");
```

Symbol 保证是唯一的，即使我们创建了许多具有相同描述的 Symbol，他们的值也是不同的，描述只是一个标签，不影响任何东西

这里有两个描述相同的 Symbol —— 它们不相等：

```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
```

### “隐藏”属性

Symbol 允许我们创建对象的隐藏属性，代码的其它任何部分都不能意外的访问或重写这些属性

例如，我们使用的是属于第三方代码的 user 对象，想要给它添加一些标识符

使用 Symbol 键：

```javascript
let user = {
  // 属于另一个代码
  name: "John",
};

let id = Symbol("id");

user[id] = 1;

alert(user[id]); // 我们可以使用 Symbol 作为键来访问数据
```

使用 Symbol("id") 作为键，比起用字符串 "id" 来有什么好处呢？

因为 user 对象属于其他的代码，那些代码也会使用这个对象，所以我们不应该在它上面直接添加任何字段，这样很不安全。但是你添加的 Symbol 属性不会被意外访问到，第三方代码根本不会看到它，所以使用 Symbol 基本上不会有问题

### 对象字面量中的 Symbol

如果我们要在对象字面量 {...} 中使用 Symbol，则需要使用方括号把它括起来：

```javascript
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123, // 而不是 "id"：123
};
```

这是因为我们需要变量 id 的值作为键，而不是字符串 “id”

### Symbol 在 for...in 中会被跳过

Symbol 属性不参与 for...循环：

```javascript
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123,
};

for (let key in user) alert(key); // name, age (no symbols)

// 使用 Symbol 任务直接访问
alert("Direct: " + user[id]);
```

### 全局 Symbol

这里有一个 全局 Symbol 注册表，我们可以在其中创建 Symbol 并在稍后访问它们，它可以确保每次访问相同名字的 Symbol 时，返回的都是相同的 Symbol

```javascript
// 从全局注册表中读取
let id = Symbol.for("id"); // 如果该 Symbol 不存在，则创建它

// 再次读取（可能是在代码中的另一个位置）
let idAgain = Symbol.for("id");

// 相同的 Symbol
alert(id === idAgain); // true
```

注册表内的 Symbol 被称为 全局 Symbol，如果我们想要一个应用程序范围内的 Symbol，可以在代码中随处访问 —— 这就是它们的用途

### Symbol.keyFor

对于全局 Symbol，不仅有 Symbol.for(key) 按名字返回一个 Symbol，还有一个反向调用：Symbol.keyFor(sym)，它的作用完全反过来：通过全局 Symbol 返回一个名字

```javascript
// 通过 name 获取 Symbol
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// 通过 Symbol 获取 name
alert(Symbol.keyFor(sym)); // name
alert(Symbol.keyFor(sym2)); // id
```

Symbol.keyFor 内部使用全局 Symbol 注册表来查找 Symbol 的键。所以它不适用于非全局 Symbol。如果 Symbol 不是全局的，它将无法找到它并返回 undefined。

也就是说，任何 Symbol 都具有 description 属性

```javascript
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert(Symbol.keyFor(globalSymbol)); // name，全局 Symbol
alert(Symbol.keyFor(localSymbol)); // undefined，非全局

alert(localSymbol.description); // name
```

### 系统 Symbol

JavaScript 内部有很多“系统” Symbol，可以使用它们来微调对象的各个方面

- Symbol.hasInstance
- Symbol.isConcatSpreadable
- Symbol.iterator
- Symbol.toPrimitive

例如，Symbol.toPrimitive 允许我们将对象描述为原始值转换
