# 运行时配置 [Runtime Config](https://v3.nuxtjs.org/docs/usage/runtime-config/)

Nuxt 提供了一个 API，用于在应用程序和 API 路由中定义运行时配置。

## 公开运行时配置 Exposing runtime config

为了向应用程序的其他部分公开配置和环境变量，您需要在 `nuxt.config` 文件中定义运行时配置，可以使用
[`privateRuntimeConfig` 或 `publicRuntimeConfig` 选项](https://v3.nuxtjs.org/docs/directory-structure/nuxt.config#privateruntimeconfig)(根据您是否希望在应用程序的客户端部分可以访问它来选择使用)。

**示例：**

```ts [nuxt.config.ts]
export default defineNuxtConfig({
    publicRuntimeConfig: {
        API_BASE: '/api'
    },
    privateRuntimeConfig: {
        API_SECRET: '123' // 仅服务端可用，会覆盖publicRuntimeConfig的配置
    }
})
```

在将 `API_BASE` 添加到 `publicRuntimeConfig` 时，Nuxt 会将其添加到页面的有效负载中。这样我们就可以在服务器和浏览器中访问 `API_BASE`。

### 环境变量 Environment Variables

提供配置的最常用方法是使用 [环境变量](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa) 。
Nuxt CLI 内置 [dotenv](https://github.com/motdotla/dotenv) 支持。

除了一些进程(process)环境变量之外，如果在项目的根目录中有一个 `.env` 文件，它将自动加载到 `process.env` 中，并且可以在 `nuxt.config` 文件和模块中访问。

**示例：**

```sh [.env]
BASE_URL=https://nuxtjs.org
API_SECRET=api_secret_token
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
    publicRuntimeConfig: {
        BASE_URL: process.env.BASE_URL
    },
    privateRuntimeConfig: {
        API_SECRET: process.env.API_SECRET
    }
})
```

:::tip 💡 提示：
虽然没有必要，但是通过使用相同的运行时配置名称作为 env 变量，您可以在生产环境中使用平台环境变量轻松地覆盖它们。
:::

## 访问运行时配置 Accessing runtime config

### Vue 实例中

在 Nuxt 应用程序的 Vue 实例中，需要调用 `useRuntimeConfig()` 来访问运行时配置。

::: info 注意：客户端和服务器端的行为是不同的

-   在客户端，只有 `publicRuntimeConfig` 可用，并且该对象是**可修改的响应式对象**。
-   在服务器端，`publicRuntimeConfig` 和 `privateRuntimeConfig` 被合并并且对象是**只读的**以避免上下文共享。

:::

```vue
<template>
    <div>
        <div>Token: {{ config.API_AUTH_TOKEN }}</div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
</script>
```

::: warning 安全注意：
如果`API_AUTH_TOKEN` 是私有配置，请不要使用上面的示例。 即使您使用`privateRuntimeConfig`，您仍然必须小心不要将此类配置暴露给**有效负载**或**html**！
:::

::: info 注意：
👉 **`useRuntimeConfig` 仅在 `setup函数` 或 `生命周期钩子` 内有效**
:::

### API 路由 API routes

在 API 路由中，您可以通过直接从虚拟 `#config` 导入来访问运行时配置。

```ts
import config from '#config'

export default async () => {
    const result = await $fetch('https://my.api.com/test', {
        headers: {
            Authorization: `Bearer ${config.API_AUTH_TOKEN}`
        }
    })
    return result
}
```

### 输入运行时配置 Typing runtime config

目前可以手动输入运行时配置文件。

```ts [index.d.ts]
declare module '@nuxt/schema' {
    interface PublicRuntimeConfig {
        testConfig: string
    }
    interface PrivateRuntimeConfig {
        token: string
    }
}
// 确保在扩充类型时 import/export 某些比较重要的内容
export {}
```
