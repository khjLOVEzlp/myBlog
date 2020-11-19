---
title: Map and Set（映射和集合
date: 2020-11-19
author: kang
location: shenzhen
---

## Map and Set

### Map

Map 是一个带键的数据项的集合，就像一个 Object 一样，但是它们最大的差别是 Map 允许任何类型的键（key）

它的方法和属性：

- new Map() —— 创建 map
- map.set(key, value) —— 根据键存储值
- map.get(key) —— 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined
- map.has(key) —— 如果 key 存在则返回 true，否则返回 false
- map.delete(key) —— 删除指定键的值
- map.clear() —— 清空 map
- map.size —— 返回当前元素个数

举个例子：

```javascript
let map = new Map();

map.set(1, "number1"); // 数字键
map.set("1", "string1"); // 字符串键
map.set(true, "boolean1"); // 布尔值键

alert(map.get(1)); // 'num1'
alert(map.get("1")); // 'str1'
alert(map.size); // 3
```

与对象不同，键不会被转换成字符串。键可以是任何类型

Map 还可以使用对象作为键：

```javascript
let user = {
  name: "张三",
};

let map = new Map();

map.set(user, 123);

alert(map.get(user)); // 123
```

使用对象作为键是 Map 最值得注意和重要的功能之一。对于字符串键，Object（普通对象）也能正常使用，但对于对象键则不行：

```javascript
let user = {
  name: "张三",
};

let visitsCountObj = {};

visitsCountObj[user] = 123;

alert(visitsCountObj["[object Object]"]); // 123
```

visitsCountObj 是一个对象，它会将所有的键如 user 转换为字符串，所以我们得到字符串键 "[object Object]"

链式调用：

每一次 map.set 调用都会返回 map 本身，进行“链式”调用：

```javascript
map
  .set("1", "str1")
  .set(1, "num1")
  .set(true, "bool1");
```

### Map 迭代

可以使用以下三个方法在 map 里循环：

- map.keys() —— 遍历并返回所有的键
- map.values() —— 遍历并返回所有的值
- map.entries() —— 遍历并返回所有的实体

```javascript
let map = new Map([[("one": 100)], [("two": 200)], [("three": 300)]]);

// 遍历所有的键
for (let key of map.keys()) {
  alert(key); // one, two, three
}

// 遍历所有的值
for (let value of map.values()) {
  alert(value); // 100, 200, 300
}

// 遍历所有的实体
for (let entry of map) {
  alert(entry); // one, 100
}
```

除此之外，Map 有内置的 forEach 方法，与 Array 类似：

```javascript
// 对每个键值对 (key, value) 运行 forEach 函数
map.forEach((value, key, map) => {
  alert(`${key}: ${value}`); // one: 100 etc
});
```

### Object.entries：从对象创建 Map

从一个已有的普通对象（plain object）来创建一个 Map，那么我们可以使用内建方法 Object.entries(obj)，该返回对象的键/值对数组，该数组格式完全按照 Map 所需的格式

```javascript
let obj = {
  name: "张三",
  age: 30,
};

let map = new Map(Object.entries(obj));

alert(map.get("name")); // 张三
```

这里，Object.entries 返回键/值对数组：[ ["name","张三"], ["age", 30] ]。这就是 Map 所需要的格式

### Object.fromEntries：从 Map 创建对象

Obje.fromEntries：给定一个具有 [key, value] 键值对的数组，它会根据给定数组创建一个对象：

```javascript
let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

// 现在 prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2
```

使用 Object.fromEntries 从 Map 得到一个普通对象

我们在 Map 中存储了一些数据，但是我们需要把这些数据传给需要普通对象（plain object）的第三方代码：

```javascript
let map = new Map();
map.set("banana", 1);
map.set("orange", 2);
map.set("meat", 4);

let obj = Object.fromEntries(map.entries());

// 可以写的更短
let obj = Object.fromEntries(map);

// obj = { banana: 1, orange: 2, meat: 4 }
```

调用 map.entries() 将返回一个可迭代的键/值对，这刚好是 Object.fromEntries 所需要的格式

### Set

Set 是一个特殊的类型集合，值的集合，没有键，它的每一个值只能出现一次

主要方法：

- new Set(iterable) —— 创建一个 set，如果提供了一个 iterable 对象（通常是数组），将会从数组里面复制值到 set 中
- set.add(value) —— 添加一个值，返回 set 本身
- set.delete(value) —— 删除值，如果 value 在这个方法调用的时候存在则返回 true ，否则返回 false
- set.has(value) —— 如果 value 在 set 中，返回 true，否则返回 false
- set.clear() —— 清空 set
- set.size —— 返回元素个数

它的主要特点是，重复使用同一个值调用 set.add()value，并不会发生改变，这就是 set 里面的每一个值只能出现一次的原因
