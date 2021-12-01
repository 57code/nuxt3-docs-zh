# 插件 [plugins](https://v3.nuxtjs.org/docs/directory-structure/plugins)

# 插件目录

Nuxt将自动读取"plugins"目录中的文件并加载它们。如果仅想在服务器端或客户端加载插件时,可以在文件名中使用`.server`或`.client`后缀。

::alert{type=warning}
`plugins/`目录中的所有插件都是自动注册的，因此您不应将它们单独添加到"nuxt.config"中。
::

## 创建插件

传递给插件的唯一参数是 [`nuxtApp`](/docs/usage/nuxt-app).

```ts
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(nuxtApp => {
  // Doing something with nuxtApp
})
```

## 自动提供helper功能

如果您想在`NuxtApp`实例上提供helper功能，只需在插件中`provide`键值返回即可。例如：

```ts
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: () => 'world'
    }
  }
})
```

在另一个文件中，您可以使用以下内容：

```vue
<template>
  <div>
    {{ $hello() }}
  </div>
</template>

<script setup lang="ts">
// alternatively, you can also use it here
const { $hello } = useNuxtApp()
</script>
```

## 自动猜测类型的插件

如果您从插件返回helpers，它们将被自动加上类型;如果调用`useNuxtApp()`,你会在这个返回值发现它们的类型，在您的模板中也是这样自动处理。

::alert
如果您需要_在_另一个插件中使用提供的helper，则可以调用`useNuxtApp()`来获取类型的版本。但一般来说应避免这种情况，除非您确定插件的调用顺序。
::

### 高级用法

对于高级用例，您可以声明注入属性的类型，如下所示：

```ts [index.d.ts]
declare module '#app' {
  interface NuxtApp {
    $hello (msg: string): string
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $hello (msg: string): string
  }
}

export { }
```

## Vue 插件

如果你想使用Vue插件，比如 [vue-gtag](https://github.com/MatteoGabriele/vue-gtag) 来添加Google Analytics标签，你可以使用Nuxt插件来做到这一点。

> 有一个开放的RFC可以使这更容易！参见 [nuxt/framework#1175](https://github.com/nuxt/framework/discussions/1175)

首先安装所需的插件。

```bash
yarn add --dev vue-gtag-next
```

然后创建一个插件文件`plugins/vue-gtag.client.js`。

```ts
import { defineNuxtPlugin } from '#app'
import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: 'GA_MEASUREMENT_ID'
    }
  })
})
```
