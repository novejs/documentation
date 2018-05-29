# 快速开始

## 安装

你可以使用 npm 快速安装 Nove

```bash
npm install nove --save
```

你还可以使用 yarn 进行安装

```bash
yarn add nove
```

## 构建你的第一个 Nove 应用

以 Restful 标准为例，我们将网络上的任何信息都看成资源。同理，在如下的例子中，我们将 `user` 看成做为一个资源，为此创建一个 `controller`。同时为 `user` 提供获取（`GET`）、创建（`POST`）、修改（`PUT`）、删除（`DELETE`）四种操作。

```typescript
// user-controller.ts
import { Controller, GET, POST, PUT, DELETE, Param, Body } from 'nove'

const users = {}

@Controller('/users')
export default class UserController {

    // 通过 user id 获取用户
    @GET('/:userId')
    getUser (@Param('userId') userId: string) {
        return users[userId]
    }

    // 创建用户
    @POST('/')
    createUser (@Body() user: any) {
        users[user.id] = user
        return 'ok'
    }

    // 修改用户信息
    @PUT('/:userId')
    modifyUser (@Param('userId') userId: string, @Body() user: any) {
        users[userId] = Object.assign({}, users[userId], user)
        return 'ok'
    }

    // 删除用户
    @DELETE('/:userId')
    deleteUser (@Param('userId') userId: string) {
        delete users[userId]
        return 'ok'
    }
}
```

创建完 `controller` 并导出之后，我们需要创建一个 `app` 实例，并监听指定的端口：

```typescript
// app.ts
import { Nove } from 'nove'
import UserController from './user-controller'
import * as KoaBody from 'koa-bodyparser'

// 创建 app 实例
const app = new Nove({
    beforeMiddlewares: [KoaBody()],
    controllers: [UserController]
})

// 监听端口
app.listen(3000, () => {
    console.log('server now at: http://localhost:3000/')
})
```

Nove 中大量的使用了 TypeScript 装饰器特性，而装饰器特性属于实现性特性，需要单独启用，所以需要在根目录创建 `tsconfig.json` 文件，设置如下配置项：

```json
{
    "compilerOptions": {
        "target": "es6",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true
    }
}
```

更多关于 `tsconfig.json` 的配置信息，可以查看 [TypeScript 官方文档](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)。

开发环境下，可以通过 `ts-node` 快速启动应用，同时你还可以使用 nodemon 监听文件变化自动重启 Node 应用，你可以在[部署](./deploy.html)章节查看更多详细内容。

```bash
# 安装 ts-node
npm install ts-node --save-dev

# 启动
ts-node app.ts
```
