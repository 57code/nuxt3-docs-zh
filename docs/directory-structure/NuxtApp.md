# [NuxtApp](https://v3.nuxtjs.org/docs/usage/nuxt-app)

在 Nuxt3，你可以在组合函数、组件以及插件中获取运行时app上下文。

在 Nuxt2，这被称为 [Nuxt上下文](https://nuxtjs.org/docs/internals-glossary/context/#the-context)。

## 获取 NuxtApp

在组合函数、组件以及插件中通过 useNuxtApp 访问 nuxtApp 实例。

```ts
import { useNuxtApp } from '#app'

function useMyComposable () {
  const nuxtApp = useNuxtApp()
  // 获取运行时nuxtApp实例
}
```

为了便利，插件也可以接收 nuxtApp 作为第一个参数。[查看更多关于插件的内容](https://v3.nuxtjs.org/docs/directory-structure/plugins/)。

::: info 注意：
👉  `useNuxtApp` (在服务端) 仅仅能在 `setup` 期间，或是在 `Nuxt 插件`中、`生命周期钩子函数`中才能被使用。
:::

## 提供助手
您可以为所有组合函数以及所有应用提供助手，这通常出现在一个Nuxt插件里。

```ts 
const nuxtApp = useNuxtApp()
nuxtApp.provide('hello', (name) => `Hello ${name}!`)

console.log(nuxtApp.$hello('name')) // 打印 "Hello name!"
```

在Nuxt2插件里,这被定义为注入方法。

::: tip
👉  通过返回一个带有提供秘钥的对象来注入帮助。[详细请查阅插件文档](https://v3.nuxtjs.org/docs/directory-structure/plugins)
:::

## NuxtApp 接口 (高级)
nuxtApp具有以下属性:

**(注意:这是一个内部接口，在稳定版本发布之前，一些属性可能随时改变)**

``` ts
const nuxtApp = {
vueApp, // 全局Vue应用: https://v3.vuejs.org/api/application-api.html

// 这些是供开发者调用，并添加运行时NuxtApp实例上的钩子
// https://github.com/nuxt/framework/blob/main/packages/nuxt3/src/app/nuxt.ts#L18
hooks,
hook,
callHook,

// 仅在服务端使用
ssrContext: {
url,
req,
res,
runtimeConfig,
noSSR,
},

// 在从服务端传递到客户端时，这将会被序列化
payload: {
serverRendered: true,
data: {},
state: {}
}

provide: (name: string, value: any) => void
}
```

通过查看[源代码](https://github.com/nuxt/framework/blob/main/packages/nuxt3/src/app/nuxt.ts#L28-L53)，获取更多信息。