# 介绍

Nove（读音 /nəʊv/），是一个基于 TypeScript 的 Node.js Web 框架，目标是借助 TypeScript 的优秀特性快速打造高健壮性的企业级 Node.js 应用。Nove 的灵感来自于 [Nestjs](https://nestjs.com/) 和 [routing-controllers](https://github.com/typestack/routing-controllers) 两个优秀框架的实现，但与这两个框架并不完全相同。

Koa 是 Node.js 领域一个非常优秀的 Web 框架，Nove 正是基于 Koa 进行二次开发的，在保证对 Koa 现有生态的完美兼容下，支持 Nove 提供的新特性。不同于传统推荐的统一路由管理模式，Nove 将路由的定义放置在了控制器（类）和路由方法（类方法）上，使用 TypeScript 的装饰器特性，可以快速定义路由。

## Todo

Nove 仍处在开发阶段，仅对 Restful 应用有着较优秀的支持。目前计划中还将支持：

- 模板渲染
- 文档快速生成
- 快速开始模板

我们欢迎更多的 Node 开发者为 Nove 做出贡献！

## 为什么是 TypeScript ？

TypeScript 是微软开发的一套编程语言，是 JavaScript 的一个严格超集，在 JavaScript 的基础上添加了诸如类型系统、混合、装饰器等诸多优秀的特性。

Nove 采用装饰器进行路由、参数的定义，ECMAScript 2016 中已经将装饰器引入标准，但是 TypeScript 在此之前就已经实现了装饰器特性。除此之外，强类型系统和静态类型检查可以帮你快速的查找出代码中不合理的类型转换，以此避免 JavaScript 隐式类型转换所带来的诸多问题。基于这两点考虑，我们认为采用 TypeScript 开发企业级应用有着先天的优势。

## 为什么不是...？

### Egg.js

[Egg.js](https://eggjs.org/zh-cn/intro/) 是阿里巴巴公司开发的一款优秀的企业级 Web 框架，有着完善的生态和优秀的团队支持。同时与 Nove 一样，Egg 也是基于 Koa 二次开发，但与 Nove 的开发思想并不相同，开发过程更加接近原生 Node.js。如果你没有 TypeScript 开发基础，并且想快速的搭建完善的企业级架构，我们更推荐你使用 Egg 而不是 Nove。

### Express

[Express](http://expressjs.com/) 是老牌的 Node.js Web 框架，在社区被广泛的使用，传统的 Express 开发并没有从框架本身去考虑使用 Promise，多数情况下采用回调函数的开发模式，逻辑不够清晰。Nove 按照指定的开发模式，方便团队协作和他人对代码的阅读。

### Nestjs & routing-controllers

[Nestjs](https://nestjs.com/) 和 [routing-controllers](https://github.com/typestack/routing-controllers) 都是 Nove 的灵感来源，但是 Nestjs 太过复杂，有着太过陡峭的学习曲线，并不适合新手的快速上手。而 routing-controllers 较 Nestjs 简单，但也封装了对 Express 的支持和诸如 Session 的模块，我们认为现如今 Koa 的生态已经满足了绝大多数需求，并不需要兼容 Express，同时 Session 这些模块应该单独拆分出来，做到可拔插，如同 Koa 一样提供最精简的框架。

