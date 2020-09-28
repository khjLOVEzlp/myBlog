---
title: Javascript 数组
date: 2020-09-28
author: Kang
location: Shenzhen
---

## 创建数组

```javascript
var arr = ["cat", "dog"];
console.log(arr.length); // 2
```

## 通过索引访问数组元素

```javascript
var arr = ["cat", "dog"];
arr[0]; //cat
arr[1]; //dog
```

## 遍历数组 forEach

```javascript
arr.forEach(function(item, index) {
  console.log(item, index);
  // cat 0
  // dog 1
});
```

## 添加元素到数组的末尾 push

```javascript
var newArr = arr.push("apple");
// newArr:3; arr: ["cat", "dog", "apple"]
```

## 删除数组末尾的元素 pop

```javascript
var last = arr.pop();
```

## 删除数组最前面的元素 shift

```javascript
var first = arr.shift();
```

## 添加元素到数组的头部 unshift

```javascript
var last = arr.unshift();
```

## 找出某个元素在数组中的索引 indexOf

```javascript
var pos = arr.indexOf("dog");
// 1
```

## 通过索引删除某个元素 splice

```javascript
var remove = arr.splice(0, 1);
```

## 复制一个数组 slice

```javascript
var copeArr = arr.slice();
```

## 颠倒数组中元素的顺序 reverse

```javascript
let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert(arr); // 5,4,3,2,1
```

## 对数组进行排序 sort

```javascript
let arr = [1, 2, 15];

arr.sort(function(a, b) {
  return a - b;
});

alert(arr); // 1, 2, 15
```

## 返回所有匹配元素组成的数组 filter

```javascript
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let someUsers = users.filter((item) => item.id < 3);

alert(someUsers.length); // 2
```

## 根据对每个元素调用函数的结果创建一个新数组

```javascript
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
alert(lengths); // 5,7,6
```
