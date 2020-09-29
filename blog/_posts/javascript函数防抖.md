---
title: 函数防抖
date: 2020-09-29
author: Kang
location: Shenzhen
---

列举一个实际的应用场景，例如百度的搜索提示

当你在输入框每输入一个字符的时候

百度都会不断的根据当下的输入给予新的提示

那么，如果有一个人打字速度非常快

他以迅雷不及掩耳盗铃儿响叮当之势，输入了 helloworld 这个单词

仅用了 200 毫秒

这时键盘事件函数被连续触发了 10 次

我们把这称之为函数抖动。

抖动并不是问题，问题是

他每按下一次键盘，浏览器都会向服务器做一次查询

浏览器一共会向服务器发出 10 次请求！

显然，对于这个手速极快的男人来说

这并不是 他想要的

那我们至少浪费了 9 次查询，无端的增加了服务器的压力。

解决思路是这样的：

- 当用户按下键盘后，我们不要立刻向服务器发起请求
- 而是等待 300ms
- 如果接下来 300ms 内，用户不再输入内容。
- 则表示他已经把想要查询的单词写完了
- 这个时候我们再发起请求查询搜索提示
- 就大大的避免了浪费
- 怎么样？ 这个想法是不是特别棒？！

这是未做防抖处理的代码

```javascript
inputEle.addEventListener("keyup", function(e) {
  //ajax(...); 发送请求到服务器
});
```

这是做了防抖处理的代码（未优化版本）

```javascript
var t = null;
inputEle.addEventListener("keyup", function(e) {
  clearTimeout(t);
  t = setTimeout(function() {
    //ajax(...); 发送请求到服务器
  }, 300);
});
```

- 只要在 300ms 连续触发键盘事件，新的定时器总是会替代旧的定时器
- 那么，连续过快的键盘输入，将不会触发多次请求
- 而是在键盘输入结束后（300ms 内不再输入）发出一次请求

我们再看代码

```javascript
var t = null;
inputEle.addEventListener("keyup", function(e) {
  clearTimeout(t); //每次触发，都把前面的定时器关闭，尽管第一次定时器并不存在

  t = setTimeout(function() {
    //开启新的定时器
    //ajax(...); 发送请求到服务器
  }, 300);
});
```

接下来再对代码做一次优化：

```javascript
inputEle.addEventListener(
  "keyup",
  (function(e) {
    //这是一个自运行函数
    var t = null;
    return function() {
      //真正的事件函数在这里
      clearTimeout(t); //每次触发，都把前面的定时器关闭，尽管第一次定时器并不存在
      t = setTimeout(function() {
        //开启新的定时器
        //ajax(...); 发送请求到服务器
      }, 300);
    };
  })()
);
```
