# hello nuxt3

# Nuxt 配置文件 [Nuxt configuration file](https://v3.nuxtjs.org/docs/directory-structure/nuxt.config)

Nuxt 可以用一个 `nuxt.config` 文件轻松配置，该文件的扩展名可以是 `.js`、`.ts` 或 `.mjs`

```ts
import { defineNuxtConfig } from "nuxt3"

export default defineNuxtConfig({
  // 我的 Nuxt 配置
})
```

了解更多关于所有不同配置属性的信息

## 别名 alias

您可以通过定义额外的别名来访问 JavaScript 和 CSS 中的自定义目录来改进开发体验。

- **类型：** `object`
- **默认值**
  ```json
  {
    "~~": "/project",
    "@@": "/project",
    "~": "/project",
    "@": "/project",
    "assets": "/project/assets",
    "public": "/project"
  }
  ```
- **版本：2, 3**

::: info 注意：

- 在 webpack 上下文（图像源、CSS - 但不是 JavaScript）中，您必须通过在别名前加上 `~` 来访问别名。
- 如果您正在使用 TypeScript 并希望使用您在 TypeScript 文件中定义的别名，则需要将别名添加到 `tsconfig.json` 中的 `paths` 对象。

:::

**示例：**

<!-- prettier-ignore-start -->
```js
import { resolve } from 'pathe'
export default {
  alias: {
    'images': resolve(__dirname, './assets/images'),
    'style': resolve(__dirname, './assets/style'),
    'data': resolve(__dirname, './assets/other/data')
  }
}
```
<!-- prettier-ignore-end -->

## 构建目录 buildDir

定义构建后的 Nuxt 文件的存放目录。

- **类型：** `string`
- **默认值：** `"/project/.nuxt"`
- **版本：2, 3**

:::tip 💡 提示：

许多工具假定 `.nuxt` 是一个隐藏目录（因为它以 `.` 开头）。 如果因此出现问题，您可以使用此选项来防止这种情况发生。

:::

**示例：**

```js
export default {
  buildDir: "nuxt-build",
}
```

## 构建期模块 buildModules

> 仅在开发和构建期间需要的模块。

- **类型：** `array`
- **版本：2, 3**

模块是 Nuxt 扩展，可以扩展其核心功能并添加无限的集成。  
Nuxt 尝试使用 node require 路径（在 `node_modules` 中）解析 modules 数组中的每个项目，然后如果使用 `~` 别名，将从项目 `srcDir` 解析。

::: tip 构建期模块 buildModules 有三种声明形式：

- 一个 `字符串`（可以指一个包，也可以是一个文件的路径）
- 以模块字符串作为第一项，以选项对象作为第二项的 `元组`
- 一个 `内联模块函数`

:::

**示例：**

```js
modules: [
  // 使用包名
  "@nuxtjs/axios",
  // 与项目 srcDir 地相对路径
  "~/modules/awesome.js",
  // 携带配置选项
  ["@nuxtjs/google-analytics", { ua: "X1234567" }],
  // 内联函数
  function () {},
]
```

::: info 注意：

- 模块按顺序执行，因此顺序很重要。
- 使用`buildModules` 有助于加快生产启动速度，并显着减少生产部署中`node_modules` 的大小。请参考各
  模块的文档，看看是否推荐使用`modules` 或`buildModules`。

:::

## 样式 css

- **类型：** `array`
- **版本：2, 3**

> 您可以定义要全局设置的 `CSS 文件` / `模块` / `库`（包含在每个页面中）。

Nuxt 会自动根据扩展名猜测文件类型，并使用适当的预处理器。如果需要使用所需的加载程序，您仍然需要安装这些 **loader** 。
**示例：**

```js
css: [
  // 直接加载一个 Node.js 模块（这里是一个 Sass 文件）
  "bulma",
  // 项目中的 CSS 文件
  "@/assets/css/main.css",
  // 项目中的SCSS文件
  "@/assets/css/main.scss",
]
```

## 开发模式 dev

- **类型：** `boolean`
- **默认：** `false`
- **版本：2, 3**

> Nuxt 是否在开发模式下运行。

通常您不需要设置这个选项。

## 目录结构 dir

> 自定义 nuxt 使用的默认目录结构。

如无必要，最好保持默认值。

### 布局 `layouts`

- **类型：** `string`
- **默认：** `"layouts"`
- **版本：2, 3**

> Layouts 目录中的每个文件都将自动注册为 Nuxt 的布局。

### 页面文件夹 `pages`

- **类型：** `string`
- **默认：** `"pages"`
- **版本：2, 3**

> 此文件夹内的页面组件将会以此目录为根自动生成页面路由

### 公共文件夹`public`

- **类型：** `string`
- **默认：** `"public"`
- **版本：3**

> 包含静态文件的目录，可通过 Nuxt 服务器直接访问，并在生成应用程序时自动复制到 `dist` 文件夹中。

## 扩展 extensions

- **类型：** `array`
- **默认：** `[".js", ".jsx", ".mjs", ".ts", ".tsx", ".vue"]`
- **版本：2, 3**

> Nuxt 解析器应该解析的扩展。

## 钩子 hooks

- **默认：** `null`
- **版本：2, 3**

> Hooks 是 Nuxt 事件的监听器，通常在模块中使用，但也可以在 `nuxt.config` 中使用。

在内部，钩子遵循使用冒号的命名模式（例如，build:done）。为了便于配置，您还可以将它们构建为 `nuxt.config` 中的分层对象（如下所示）。

**示例：**

```js
import fs from "fs"
import path from "path"
export default {
  hooks: {
    build: {
      done(builder) {
        const extraFilePath = path.join(builder.nuxt.options.buildDir, "extra-file")
        fs.writeFileSync(extraFilePath, "Something extra")
      },
    },
  },
}
```

## 元信息 meta

> 在每个页面上为 `<head>` 设置默认配置。

**示例：**

```js
meta: {
 meta: [
   // <meta name="viewport" content="width=device-width, initial-scale=1">
   { name: 'viewport', content: 'width=device-width, initial-scale=1' }
 ],
 script: [
   // <script src="https://myawesome-lib.js"></script>
   { src: 'https://awesome-lib.js' }
 ],
 link: [
   // <link rel="stylesheet" href="https://myawesome-lib.css">
   { rel: 'stylesheet', href: 'https://awesome-lib.css' }
 ],
 // 请注意，这是一个可能会发生变化的区域
 style: [
   // <style type="text/css">:root { color: red }</style>
   { children: ':root { color: red }', type: 'text/css' }
 ]
}
```

### `link` 标签

- **类型：** `array`
- **版本：3**

### `meta` 标签

- **类型：** `array`
- **版本：3**

### `script` 标签

- **类型：** `array`
- **版本：3**

### `style` 标签

- **类型：** `array`
- **版本：3**

## 模块 modules

- **类型：** `array`
- **版本：2,3**

> 模块是 Nuxt 扩展，可以扩展其核心功能，并添加无穷的集成

:::tip 模块地三种形式：

- 一个 `字符串`（可以指一个包，也可以是一个文件的路径）
- 以模块字符串作为第一项，以选项对象作为第二项的 `元组`
- 一个 `内联模块函数`

:::
::: info 注意：

- 模块按顺序执行，因此顺序很重要。
- Nuxt 尝试使用 node require 路径（在 `node_modules` 中）解析 modules 数组中的每个项目。如果使用了 `~` 别名，将从项目 `srcDir` 中解析。

:::

**示例：**

```js
modules: [
  // 使用包名
  "@nuxtjs/axios",
  // 与项目 srcDir 地相对路径
  "~/modules/awesome.js",
  // 携带配置选项
  ["@nuxtjs/google-analytics", { ua: "X1234567" }],
  // 内联函数
  function () {},
]
```

## privateRuntimeConfig

- **版本：2, 3**

> 运行时配置允许向 Nuxt 应用上下文传递动态配置和环境变量。

`privateRuntimeConfig` 内的配置将被添加到 Nuxt 有效负载中，因此不需要重新构建来更新开发中的配置，或者如果您的应用程序由 Nuxt 服务器提供服务的话。（对于静态站点，您仍然需要重新生成站点以查看更改。）
此对象的值只能通过 `$config` 从服务器访问。它将在服务器端覆盖 `publicRuntimeConfig` 内相同内容。它应该用来保存**私有**环境变量(不应该在前端公开)。这可能包括对您的 API 秘密标记的引用。

**示例：**

```js
export default {
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET,
  },
}
```

## publicRuntimeConfig

> 运行时配置允许向 Nuxt 应用上下文传递动态配置和环境变量。

- **类型：** `object`
- **版本：2, 3**
- **默认：**

```json
{
  "app": {
    "basePath": "/",
    "assetsPath": "/_nuxt/",
    "cdnURL": null
  }
}
```

`publicRuntimeConfig` 内的配置将被添加到 Nuxt 有效负载中，因此不需要重新构建来更新开发中的配置，或者如果您的应用程序由 Nuxt 服务器提供服务的话。（对于静态站点，您仍然需要重新生成站点以查看更改。）
这个对象的值可以从客户端和服务器使用 `$config` 访问。 它应该保存**公共**环境变量，因为它们可以在前端访问。 这可能包括对您的公共 URL 的引用。

**示例：**

```js
export default {
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || "https://nuxtjs.org",
  },
}
```

## rootDir

> 定义应用程序的工作区目录。

- **类型：** `object`
- **版本：2, 3**
- **默认：** `"/project"`

此属性可以被覆盖(例如，运行 `nuxt ./my-app/` 将 rootDir 设置为 `./my-app/` 来自 当前/工作 目录。  
通常不需要配置此选项。

## serverMiddleware

> 服务器中间件是处理服务器端请求的 `connect/express/h3-shape` 函数。 它们在服务器上运行，并在 Vue 渲染器之前运行。

- **类型：** `array`
- **版本：2, 3**

通过向 `serverMiddleware` 添加条目，您可以注册额外的路由或修改 `req`/`res` 对象，而无需外部服务器。
您可以传递一个字符串，该字符串可以是节点依赖项的名称或文件路径。 您还可以传递带有 `path` 和 `handler` 字段的对象。 （`handler` 可以是路径或函数。）

**示例：**

```js
serverMiddleware: [
  // 将注册redirect-ssl npm包
  "redirect-ssl",
  // Will register file from project server-middleware directory to handle /server-middleware/* requires
  // 将从项目 server-middleware 目录注册文件以处理对 /server-middleware/* 的require
  { path: "/server-middleware", handler: "~/server-middleware/index.js" },
  // 我们也可以创建自定义实例
  { path: "/static2", handler: serveStatic(__dirname + "/static2") },
]
```

:::info 注意：
如果您不希望中间件在所有路径上运行，则应该使用具有特定路径的对象表单
:::

**示例：**

```js
export default function (req, res, next) {
  // req 是 Node.js http 请求对象
  console.log(req.url)
  // res 是 Node.js http 响应对象
  // next 是调用下一个中间件的函数
  // 如果您的中间件不是最后一个，请不要忘记在最后调用 next！
  next()
}
```

**示例：**

```js
const bodyParser = require("body-parser")
const app = require("express")()
app.use(bodyParser.json())
app.all("/getJSON", (req, res) => {
  res.json({ data: "data" })
})
module.exports = app
```

**示例：**

```js
export default {
  serverMiddleware: {
    "/a": "~/server-middleware/a.js",
    "/b": "~/server-middleware/b.js",
    "/c": "~/server-middleware/c.js",
  },
}
```

## srcDir

> 定义 Nuxt 应用程序的源文件目录。

如果指定了相对路径，它将相对于 `rootDir`。

- **类型：** `string`
- **版本：2, 3**
- **默认：** `"/project"`

**示例：**

```js
export default {
  srcDir: "client/",
}
```

这适用于以下文件夹结构：

```bash
-| app/
---| node_modules/
---| nuxt.config.js
---| package.json
---| client/
------| assets/
------| components/
------| layouts/
------| middleware/
------| pages/
------| plugins/
------| static/
------| store/
```

## ssr

> 是否启用 HTML 动态渲染（在服务器模式下）或在生成时。 如果设置为 `false` 并结合 `static` 目标，生成的页面将只显示一个没有内容的加载屏幕。

- **类型：** `boolean`
- **版本：2, 3**
- **默认：** `true`

## vite

> 将直接传递给 Vite 的配置。

- **版本：3**

有关更多信息，请参阅 https://vitejs.dev/config。 请注意，并非所有 vite 选项都在 Nuxt 中受支持。

## watchers

> Watchers 属性允许您在 `nuxt.config` 中覆盖 watchers 配置。

### `chokidar`

> 直接传递给 `chokidar` 的选项。

更多信息请查看： [chokidar](https://github.com/paulmillr/chokidar#api)

#### `ignoreInitial`

- **类型：** `boolean`
- **版本：2, 3**
- **默认：** `true`

### `rewatchOnRawEvents`

> 一个事件类型数组，当接收到该事件类型时，将导致观察程序重新启动。

- **版本：2, 3**

### `webpack`

> `watchOptions` 直接传递给 webpack。

更多信息请查看： [webpack@4 watch options](https://v4.webpack.js.org/configuration/watch/#watchoptions).

#### `aggregateTimeout`

- **类型：** `number`
- **版本：2, 3**
- **默认：** `1000`
