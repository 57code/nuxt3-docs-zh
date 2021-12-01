# 入口组件 [app.vue](https://v3.nuxtjs.org/docs/directory-structure/app)

app.vue文件是Nuxt 3应用程序中的主要组件。

## 最小用法

对于Nuxt3，[pages\](https://v3.nuxtjs.org/docs/directory-structure/pages)是可选的。如果不存在，Nuxt将不包括vue路由器依赖项。这在处理登录页或不需要路由的应用程序时非常有用。

```
<template>
  <h1>Hello World!</h1>
</template>
```

## 结合pages页码用法

如果您有[pages\](https://v3.nuxtjs.org/docs/directory-structure/pages)，要显示当前页面，请使用`<NuxtPage>`组件：

```
<template>
  <div>
    <NuxtPage/>
  </div>
</template>
```

> 由于Nuxt3在[`<NuxtPage>`](https://v3.vuejs.org/guide/migration/suspense.html)内部使用`<suspence>`，因此建议将其包装到单个根元素中。

> 请记住，app.vue是Nuxt应用程序的主要组件。您在其中添加的任何内容（JS和CSS）都是全局的，并包含在每个页面中。

如果您想定制页面之间页面的结构，请查看[layouts/](https://v3.nuxtjs.org/docs/directory-structure/layouts)目录。