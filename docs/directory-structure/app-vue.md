#  入口组件 [App](https://v3.nuxtjs.org/docs/directory-structure/app)

 `app.vue` 文件是Nuxt 3应用程序中的入口组件。

## 最小应用

 在Nuxt 3中如果没有[`pages/`](/docs/directory-structure/pages)目录，则表示不会包含[vue-router](https://next.router.vuejs.org/)依赖。 当我们完成一个落地页或者是不需要路由就可以这样做。

```vue [app.vue]
<template>
  <h1>Hello World!</h1>
</template>
```

## pages


如果需要使用[`pages/`](/docs/directory-structure/pages)显示相关页面的话，需要使用 `<NuxtPage>` 路由出口组件:

```vue [app.vue]
<template>
  <div>
    <!-- 路由出口 -->
    <NuxtPage/>
  </div>
</template>
```

::: info 建议
由于Nuxt 3 的路由出口`<NuxtPage>` 在内部使用了 [`<Suspense>`](https://v3.vuejs.org/guide/migration/suspense.html) ，因此建议只有一个根节点。
:::

::: warning 提示
`app.vue`是Nuxt应用程序的入口组件。您在其中添加的任何内容（JS和CSS）都是全局的，会影响到其他页面。
:::

如果需要自定义页面布局的话,请查看[`layouts/`](/docs/directory-structure/layouts)目录.
