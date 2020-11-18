---
title: 媒体查询+rem用法
date: 2020-10-12
author: Kang
location: Shenzhen
---

## 媒体查询+rem

### 计算方法

- 计算 rem 方法：
- 结合媒体查询 -> 随着设备的改变 更改 html font-size 的值。

- 媒体查询确定范围？？

- 移动端设计图 ： 640px 750px 1080px;
- dpr 2 2 3
- 范围 320px 375px

```css
@media screen and (max-width: 320px) {
  html {
    font-size: 12px;
  }
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  html {
    font-size: 14px;
  }
}
@media screen and (min-width: 376px) {
  html {
    font-size: 16px;
  }
}
```

### 实现流程

```
ui设计图   750px
​
dpr    2
​
ps量出height   88px;
​
88px / 2 ==  44px;
​
设计图 750px

dpr  2
​
750px  /  2 == 375px
​
44px / 14px == rem
```

## vw+rem

- 为了方便计算，可以把 html 的 font-size 值 设置成 100px; 1rem == 100px;
- 100px 是一个固定值，没办法随着设备的改变而改变。
- 能跟随设备发生改变
- vw 根据视口大小进行改变。
- 100px == ?vw

### 根据视图分配情况

- 第一种情况：
  如果 UI 设计图为 640px
  考虑的 dpr 2
  适配的核心设备 320px;
  100vw == 320px
  1vw == 3.2px
  ?vw == 100px
  31.25vw == 100px

* 第二种情况
  如果设计图为 750px
  考虑 dpr 2
  适配的核心设备 375px
  100vw == 375px
  1vw == 3.75px
  ?vw == 100px
  26.67vw == 100px;

### 设置方法

- 如果设计图为 640px html 设置{font-size:31.25vw}
- 如果设计图为 750px html 设置{font-size:26.67vw}

### 计算流程

- vw 结合 rem 计算流程
- 设计图 640px
- 所以 html 设置{font-size:31.25vw;}
- ps 中获取 height 88px
- dpr 2
- 88 / 2 == 44px
- 44 / 100 == 0.44rem;
