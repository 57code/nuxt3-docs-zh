# 入口组件 [app.vue](https://v3.nuxtjs.org/docs/directory-structure/app)

app.vue文件是Nuxt 3应用程序中的主要组件。

## 最小用法

对于Nuxt3，[pages](https://v3.nuxtjs.org/docs/directory-structure/pages)是可选的，当我们完成一个落地页或者一个不需要路由的应用程序时非常有用。

```html
<template>
  <h1>Hello World!</h1>
</template>
```

## 结合pages页码用法

如果您有[pages](https://v3.nuxtjs.org/docs/directory-structure/pages)，要显示当前页面，请使用`<NuxtPage>`组件：

```html
<template>
  <div>
    <NuxtPage/>
  </div>
</template>
```

> 由于Nuxt3在[`<NuxtPage>`](https://v3.vuejs.org/guide/migration/suspense.html)内部使用`<Suspense>`，因此建议将其包装到单个根元素中。

> 请记住，app.vue是Nuxt应用程序的主要组件。您在其中添加的任何内容（JS和CSS）都是全局的，并包含在每个页面中。

如果您想定制跨多个页面之间的结构，请查看[layouts/](https://v3.nuxtjs.org/docs/directory-structure/layouts)目录。