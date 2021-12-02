# 布局目录 [Layouts directory](https://v3.nuxtjs.org/docs/directory-structure/layouts)

Nuxt 提供了一个可定制的布局架构，您可以在整个应用程序中使用它，非常适合将常见的 UI 或代码模式提取到可重用的布局组件中。

页面布局放置在 `layouts/` 目录中，使用时会通过异步导入自动加载。 如果你创建了一个 `layouts/default.vue` 这将用于你应用中的所有页面。 通过将 `layout` 属性设置为组件选项的一部分来使用其他布局。

如果您的应用程序中只有一个布局，您也可以使用 [app.vue](https://v3.nuxtjs.org/docs/directory-structure/app)。

## 自定义布局

```bash
-| layouts/
---| custom.vue
```

在你的布局文件中，你需要使用 `<slot />` 来定义你的布局页面内容的加载位置。 例如：

```vue
<template>
  <div>
    一些共享的布局内容：
    <slot />
  </div>
</template>
```

根据上面的示例，您可以使用这样的自定义布局：

```vue
<script>
export default {
  layout: "custom",
}
</script>
```

## 与 `<slot />` 一起使用

您还可以通过使用 `<NuxtLayout>` 组件(该组件在整个应用程序中都可用)和在组件选项中设置 `layout: false` 来获得完全的控制权(例如，使用 slots)。

```vue
<template>
  <NuxtLayout name="custom">
    <template #header> 一些标题模板内容。 </template>

    页面的其余部分
  </NuxtLayout>
</template>

<script>
export default {
  layout: false,
}
</script>
```

## 与 `<script setup>` 一起使用

如果你正在使用 Vue `<script setup>` [编译时语法糖](https://v3.cn.vuejs.org/api/sfc-script-setup.html)，你可以使用辅助的 `<script>` 标记根据需要设置 `layout` 选项。

::: tip 💡 提示：
在 Vue 文档中了解更多关于 [`<script setup>` 和 `<script>` 标签共存](https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E4%B8%8E%E6%99%AE%E9%80%9A%E7%9A%84-script-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8) 的内容。
:::

假设这个目录结构：

```bash
-| layouts/
---| custom.vue
-| pages/
---| my-page.vue
```

和这个 `custom.vue` 布局：

```vue
<template>
  <div>
    一些共享的布局内容：
    <slot />
  </div>
</template>
```

你可以在 `my-page.vue` 中地`<script setup>` 标签旁边使用辅助地 `<script>` 设置一个页面布局，像下面这样:

```vue
<script>
export default {
  layout: "custom",
}
</script>

<script setup>
// 你的 setup 内容
</script>
```
