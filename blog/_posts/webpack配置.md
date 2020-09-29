---
title: Webpack配置
date: 2020-09-29
author: Kang
location: Shenzhen
---

## 什么是 Webpack

> WebPack 可以看做是**模块打包机**：它做的事情是，分析你的项目结构，找到 JavaScript 模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript 等），并将其转换和打包为合适的格式供浏览器使用。

## webpack4.x 基本使用

### 本地使用（全局环境）

(webpack4.0 的一个依赖项)

```
npm install webpack webpacl-cli -g
```

装好之后可以可以直接在项目根目录使用 webpack 运行打包项目

### 项目使用

1. 初始化

```
 npm init -y
```

2. 约定的项目结构

```
 + dist
 + src
 + index.html
 + index.js
 + package.json
 + webpack.config.js （可选），还是建议使用
```

3. webpack.config.js 配置的一些改变

- 不需要设定入口文件和出口文件
- 引入了模式 mode 可以快速切换
- 开发环境（development）

- 上线环境（production）

4. 安装 2 个 webpack 核心包

```
 npm|cnpm install webpack webpack-cli -D  |  yarn add webpack webpack-cli -D
```

5. 安装 webpack-dev-server 把 main.js 生成在内存中

```
npm install webpack-dev-server -D
```

在 package 的 scripts 属性上配置脚本

```
"scripts": {
     "dev": "webpack-dev-server --open --port 8080 --hot"
}
```

6. html-webpack-plugin 配置 （把 index.html 生成在内存中）

安装 html-webpack-plugin

```
yarn add html-webpack-plugin -D
```

在 webpack.config.js 中配置 plugins

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "./src/index.html"),
  filename: "index.html",
});
module.exports = {
  model: "development", //development  production
  plugins: [htmlPlugin],
};
```

7、使用 webpack 使用 css 、less

> webpack 默认只支持 js 的模块化，如果需要把其他文件也当成模块引入，就需要相对应的 loader 解析器

安装依赖包

```
 yarn add style-loader css-loader -D
 yarn add less less-loader -D
```

配置规则:

```javascript
 // 这段代码意思是：匹配后缀名为css的文件,然后分别用css-loader，vue-style-loader去解析
{
    test: /\.css$/,
    use: ['style-loader', 'css-loader?modules']
}
{
    test: /\.less$/,
    use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]', 'less-loader']
} // 打包处理 scss 文件的 loader
```

在 src 目录下新建一个 assets/css 目录，创建 index.css 和 index.css 样式可以随意定义

```css
body {
  color: red;
  background: url(../images/1.png);
}
```

在 index.js 中引入.css 或者.less 文件

```javascript
import "./assets/css/index.css";
import "./assets/css/index.less";
```

8、使用 babel ​

> ES6 的语法大多数浏览器依旧不支持,bable 可以把 ES6 转码成 ES5 语法，这样我们就可以大胆的在项目中使用最新特性了

安装 babel 依赖包

（核心包）

```
 yarn add babel-core babel-loader babel-plugin-transform-runtime -D
```

（语言包）

```
 yarn add babel-preset-env babel-preset-stage-0  -D
```

在 webpack.config.js 中配置 loader

```javascript
module: {
  rules: [{ test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }];
}
```

配置 .babelrc 文件

```javascript
{
    "presets": [
        "env",      // es的所语法
        "stage-0"  // 指定用哪个版本
    ],
    "plugins": [
        "transform-runtime"  // 在插件的基础上运行
    ]
}
```

9、配置.vue 文件

> 在前面的例子里，我们使用 Vue.component 来定义全局组件，在实际项目里，更推荐使用单文件组件

```
yarn add vue-loader vue-template-compiler -D
```

配置 vue-loader 规则

```javascript
module: {
  rules: [
    { test: /\.vue$/, use: "vue-loader" }, // 处理 .vue 文件的 loader
  ];
}
```

在 webpack.config.js 文件中配置 vue-loader 插件

```javascript
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  ....
  plugins: [
    ...
    new VueLoaderPlugin()
  ],
  ...
```

在 src 目录下新建一个 App.vue

```vue
<template>
  <div class="app">
    app component
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped></style>
```

10、配置 url

> 把图片也当成模块引入

```
yarn add file-loader url-loader -D
```

webpack.config.js 添加一个 loader

```javascript
{ test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader' }, // 处理 图片路径的 loader
```

在 src 目录下新建一个 assets/images 目录，存放一张图片 1.png

在 App.vue 中使用图片

```vue
<template>
  <div class="app">
    app component
    <img src="./assets/images/1.png" alt="" />
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped></style>
```

## 完整配置和项目结构

### ----完整项目结构

![avatar](https://pic2.zhimg.com/80/v2-2b255d1734d8c2dbf6b449d724a1d45d_720w.jpg)

### ----完整 webpack.config.js 文件

```javascript
const path = require("path");
// 引入html-webpack-plugin 插件
const htmlWebpackPlugin = require("html-webpack-plugin");
// 引入vue-loader 插件
const { VueLoaderPlugin } = require("vue-loader");

const webpackPlugin = new htmlWebpackPlugin({
  // 引入要写入内存的文件
  template: path.join(__dirname, "./index.html"),
  // 给输出的文件取名
  filename: "index.html",
});

module.exports = {
  mode: "development", //production 上线需要  //development 开发需要
  plugins: [webpackPlugin, new VueLoaderPlugin()],
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: "url-loader" }, // 处理 图片路径的 loader
      { test: /\.vue$/, use: "vue-loader" }, // 处理 .vue 文件的 loader
    ],
  },
};
```
