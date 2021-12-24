# 路由页面 [pages](https://v3.nuxtjs.org/docs/directory-structure/pages)

> pages 文件夹目录是可选的，也就是说你可以只通过app.vue 来完成你的项目，
> 但我们没有pages文件夹目录时，vue-router是不会被加载的，这样可以减小包的大小

当我们创建了pages文件夹目录后，Nuxt会自动集成[vue-router](https://next.router.vuejs.org/zh/)，结合pages目录下的文件(夹)名来构建我们的项目

> 与组件不同的是，我们的页面必须有一个单一的根元素，以允许Nuxt在页面之间应用路由转换。

## 动态路由 - Dynamic Routes

如果把任何东西放在方括号`[]`中，它将被转换为一个[**dynamic router**](https://next.router.vuejs.org/zh/guide/essentials/dynamic-matching.html)参数。您可以在一个文件名或目录中混合和匹配多个参数，甚至是非动态文本。

如果需要一个通配路由，可以使用一个名为`[…slug].vue`的文件来创建它。这将匹配该路径下的所有路由，因此它不支持任何非动态文本。

#### 示例 :chestnut:

```
-| pages/
---| index.vue
---| users-[group]/
-----| [id].vue
```


在上面的例子中，可以通过 $route 对象访问组件中的参数 group/id:

```vue
<template>
  {{ $route.params.group }}
  {{ $route.params.id }}
</template>
```

当路由跳转到 /user-admins/123 时，将会渲染出

```
admins 123
```

## 导航 - Navigation

要在应用程序的页面之间导航，你应该使用`<NuxtLink>`组件。该组件包含在Nuxt中，因此您不必像导入其他组件那样导入它。它类似于HTML的`<a>`标签，除了使用`<a href="/about />"`你也可以使用`<NuxtLink to="/about" />`。如果你以前用过vue-router，你可以把`<NuxtLink>`看作是`<RouterLink>`的替换。

一个到索引的简单链接。Vue页面在您的页面文件夹:
```vue
<template>
  <NuxtLink to="/">首页</NuxtLink>
</template>
```

`<NuxtLink>`组件应该用于所有内部链接。这意味着对于所有指向站点内页面的链接，您应该使用`<NuxtLink>`。`<a>`标签应该用于所有外部链接。这意味着，如果你有链接到其他网站，你应该使用`<a>`标签。

```vue
<template>
  <div>
    <h1>首页</h1>
    <NuxtLink to="/about">
      About (Nuxt应用里的内部链接)
    </NuxtLink>
    <a href="https://nuxtjs.org">其他应用里的链接</a>
  </div>
</template>
```

> 如果你想了解更多关于`<RouterLink>`的信息，请阅读[Vue Router文档](https://next.router.vuejs.org/zh/api/index.html#router-link)获取更多信息。

## 嵌套路由 - Nested Router

我们为`<RouterView>`组件提供了一个语义别名`<NuxtChild>`，用于显示嵌套路由的子组件。在Nuxt应用里我们用`<NuxtChild>`组件来替代vue-router里的`<RouterView>`
> 可以参考vue-router的[嵌套路由](https://next.router.vuejs.org/zh/guide/essentials/nested-routes.html)

#### 示例 :chestnut:
```
-| pages/
---| parent/
------| child.vue
---| parent.vue
```

Nuxt将为我们生成下面的路由
```js
[
  {
    path: '/parent',
    component: '~/pages/parent.vue',
    name: 'parent',
    children: [
      {
        path: 'child',
        component: '~/pages/parent/child.vue',
        name: 'parent-child'
      }
    ]
  }
]
```

展示`child.vue`组件时，你必须在`pages/parent.vue`中插入`<NuxtChild>`组件:
```vue
<template>
  <div>
    <h1>这里是 parent component</h1>
    <NuxtChild />
  </div>
</template>
```

