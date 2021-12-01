# 服务器目录(server)

服务器目录用于为 Nuxt 应用程序创建任何后端逻辑。它支持 HMR 和强大的功能。

`server/`该目录包含项目的 API 端点和服务器中间件。

## 接口路由

Nuxt 将自动读取`~/server/api`目录中的任何文件，以创建 API 端点。

每个文件都应导出一个处理 API 请求的默认函数。它可以直接返回承诺或 JSON 数据（或使用 ）。`res.end()`

### 例子

#### Hello world

```server/api/hello.ts
export default (req, res) => 'Hello World'
```

http://localhost:3000/api/hello[上查看](http://localhost:3000/api/hello)结果。

#### 异步函数

```server/api/async.ts
export default async (req, res) => {
  await someAsyncFunction()

  return {
    someData: true
  }
}
```

**示例：**使用 Node.js 样式

```server/api/node.ts
import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200
  res.end('Works!')
}
```

## 服务器中间件

Nuxt 将自动读取`~/server/middleware` 中的任何文件，以便为您的项目创建服务器中间件。

这些文件将在每个请求上运行，这与映射到其自己路由的[API routes](https://v3.nuxtjs.org/docs/directory-structure/api)不同。这通常是为了让您能够向所有响应添加公共标头、记录响应或修改传入请求对象以供以后在请求链中使用。

每个文件都应该导出一个默认函数来处理一个请求。

```js
export default async (req, res) => {
  req.someValue = true;
};
```

关于` req``res ` 对象没有什么不同，因此键入它们很简单。

```ts
import type { IncomingMessage, ServerResponse } from "http";

export default async (req: IncomingMessage, res: ServerResponse) => {
  req.someValue = true;
};
```

