---
title: Javascript正则表达式
date: 2020-09-28
author: Kang
location: Shenzhen
---

## str.match(regexp)

**str.match(regexp)** 方法在字符串 **str** 中找到匹配 **regexp** 的字符。

它有 3 种模式：

1. 如果 regexp 不带有 g 标记，则它以数组的形式返回第一个匹配项，其中包含分组和属性 index（匹配项的位置）、input（输入字符串，等于 str）：

```javascript
let str = "I love JavaScript";

let result = str.match(/Java(Script)/);

alert(result[0]); // JavaScript（完全匹配）
alert(result[1]); // Script（第一个分组）
alert(result.length); // 2

// 其他信息：
alert(result.index); // 7（匹配位置）
alert(result.input); // I love JavaScript（源字符串）
```

2. 如果 regexp 带有 g 标记，则它将所有匹配项的数组作为字符串返回，而不包含分组和其他详细信息。

```javascript
let str = "I love JavaScript";

let result = str.match(/Java(Script)/g);

alert(result[0]); // JavaScript
alert(result.length); // 1
```

3. 如果没有匹配项，则无论是否带有标记 g ，都将返回 null。

这是一个重要的细微差别。如果没有匹配项，我们得到的不是一个空数组，而是 null。忘记这一点很容易出错，例如：

```javascript
let str = "I love JavaScript";

let result = str.match(/HTML/);

alert(result); // null
alert(result.length); // Error: Cannot read property 'length' of null
```

如果我们希望结果是一个数组，我们可以这样写：

```javascript
let result = str.match(regexp) || [];
```

## str.matchAll(regexp)

方法 str.matchAll(regexp) 是 str.match “新改进的”变体。

它主要用来搜索所有组的所有匹配项。

与 match 相比有 3 个区别：

1. 它返回包含匹配项的可迭代对象，而不是数组。我们可以用 Array.from 从中得到一个常规数组。
2. 每个匹配项均以包含分组的数组形式返回（返回格式与不带 g 标记的 str.match 相同）。
3. 如果没有结果，则返回的不是 null，而是一个空的可迭代对象。

用法示例：

```javascript
let str = "<h1>Hello, world!</h1>";
let regexp = /<(.*?)>/g;

let matchAll = str.matchAll(regexp);

alert(matchAll); // [object RegExp String Iterator]，不是数组，而是一个可迭代对象

matchAll = Array.from(matchAll); // 现在返回的是数组

let firstMatch = matchAll[0];
alert(firstMatch[0]); // <h1>
alert(firstMatch[1]); // h1
alert(firstMatch.index); // 0
alert(firstMatch.input); // <h1>Hello, world!</h1>
```

## str.search(regexp)

方法 str.search(regexp) 返回第一个匹配项的位置，如果未找到，则返回 -1：

```javascript
let str = "A drop of ink may make a million think";

alert(str.search(/ink/i)); // 10（第一个匹配位置）
```

**重要限制：search 仅查找第一个匹配项。**

如果需要其他匹配项的位置，则应使用其他方法，例如用 str.matchAll(regexp) 查找所有位置。

## str.replace(str|regexp, str|func)

这是用于搜索和替换的通用方法，是最有用的方法之一。

我们可以不用正则表达式来搜索和替换子字符串：

```javascript
// 用冒号替换连字符
alert("12-34-56".replace("-", ":")); // 12:34-56
```

当 replace 的第一个参数是字符串时，它仅替换第一个匹配项。

如要找到所有的连字符，我们不应该用字符串 "-"，而应使用带 g 标记的正则表达式 /-/g：

```javascript
// 将连字符替换为冒号
alert("12-34-56".replace(/-/g, ":")); // 12:34:56
```

## regexp.exec(str)

regexp.exec(str) 方法返回字符串 str 中的 regexp 匹配项。与以前的方法不同，它是在正则表达式而不是字符串上调用的。

过去，在将 str.matchAll 方法添加到 JavaScript 之前，在循环中是通过调用 regexp.exec 来获取分组的所有匹配项：

```javascript
let str = "More about JavaScript at https://javascript.info";
let regexp = /javascript/gi;

let result;

while ((result = regexp.exec(str))) {
  alert(`Found ${result[0]} at position ${result.index}`);
  // Found JavaScript at position 11，然后
  // Found javascript at position 33
}
```

**这个现在也可以使用，尽管对于较新的浏览器来说，str.matchAll 通常更方便。**

我们可以通过手动设置 lastIndex，用 regexp.exec 从给定位置进行搜索。

例如：

```javascript
let str = "Hello, world!";

let regexp = /\w+/g; // 带有标记 "g"，lastIndex 属性被忽略
regexp.lastIndex = 5; // 从第 5 个位置搜索（从逗号开始）

alert(regexp.exec(str)); // world
```

## regexp.test(str)

方法 regexp.test(str) 查找匹配项，然后返回 true/false 表示是否存在。

例如：

```javascript
let str = "I love JavaScript";

// 这两个测试相同
alert(/love/i.test(str)); // true
alert(str.search(/love/i) != -1); // true
```
