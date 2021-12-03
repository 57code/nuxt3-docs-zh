---
icon: IconDirectory
title: "components"
head.title: Components directory
---

# 组件目录

`components/` 目录是存放可导入到你的页面中的 Vue 组件或其他组件 ([了解更多](https://v3.cn.vuejs.org/guide/component-basics.html))。

Nuxt 会自动导入 `components/` 目录下任何组件 (以及你可能正在使用的任何模块注册的组件)。

```bash
| components/
--| TheHeader.vue
--| TheFooter.vue
```

``` vue
<template>
  <div>
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>
```

## 组件命名

如你的嵌套目录中有一个组件，例如：

```bash
| components/
--| base/
----| foo/
------| Button.vue
```

... 然后组件的名称将基于自己的路径和文件名，并删除重复的段 (比如： an/an/Button.vue 注册名将会是 AnButton)。因此组件名会是：

```vue
<BaseFooButton />
```

::: info 提示：
为清楚起见，建议组件的文件名与其名称匹配。 (所以，在上面的例子中, 你可以将 `Button.vue` 重命名为 `BaseFooButton.vue`.)
:::

## 动态导入

要动态导入一个组件 (也称为懒加载一个组件) 只需要在原组件名前加上 `Lazy` 前缀.

```vue
<template>
  <div>
    <TheHeader />
    <slot />
    <LazyTheFooter />
  </div>
</template>
```

当该组件不是总被需要，这一点特别重要。通过使用 `Lazy` 前缀，你可以在合适的时机，延迟加载组件代码，这有助于优化你的 JavaScript 包大小。

```vue
<template>
  <div>
    <h1>Mountains</h1>
    <LazyMountainsList v-if="show" />
    <button v-if="!show" @click="show = true">Show List</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
```

## `<ClientOnly>` 组件

Nuxt 提供了 `<ClientOnly>` 组件，是专门在客户端渲染组件的组件。只在客户端导入组件或在客户端插件中注册该组件。

```vue
<template>
  <div>
    <Sidebar />
    <ClientOnly>

      <!-- 该组件只会在客户端渲染 -->
      <Comments />
    </ClientOnly>
  </div>
</template>
```

使用一个插槽，如： fallback ，直到 `<ClientOnly>` 组件在客户端挂载。

```vue
<template>
  <div>
    <Sidebar />
    <ClientOnly>
      <!-- 该组件只会在客户端渲染 -->
      <Comments />
      <template #fallback>
        <!-- 这将在服务器端渲染 -->
        <p>Loading comments...</p>
      </template>
    </ClientOnly>
  </div>
</template>
```

## 库作者

制作具有自动摇树优化和组件注册功能的 Vue 组件库非常简单 ✨

你可以使用 `components:dirs` 钩子，轻松扩展目录列表，而无需用户在 Nuxt 模块中进行配置。

想象一个像这样的目录结构：

```bash
| node_modules/
---| awesome-ui/
------| components/
---------| Alert.vue
---------| Button.vue
------| nuxt.js
| pages/
---| index.vue
| nuxt.config.js
```

然后在 `awesome-ui/nuxt.js` 中，你就可以使用 `components:dirs` 钩子：

```js
import { join } from "pathe";
import { defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  hooks: {
    "components:dirs"(dirs) {
      // Add ./components dir to the list
      dirs.push({
        path: join(__dirname, "components"),
        prefix: "awesome",
      });
    },
  },
});
```

就是这样！ 现在在你的项目中, 你可以将你的 ui 库作为 Nuxt 模块导入到你的 `nuxt.config` 文件中:

```js
export default {
  buildModules: ["awesome-ui/nuxt"],
};
```

... 就可以直接在我们的 `pages/index.vue`中，使用模块组件 (带 `awesome-` 前缀):

```vue
<template>
  <div>
    My <AwesomeButton>UI button</AwesomeButton>!
    <awesome-alert>Here's an alert!</awesome-alert>
  </div>
</template>
```

它仅在使用时自动导入组件，并且在更新你在 `node_modules/awesome-ui/components/` 的组件时支持热更新。
