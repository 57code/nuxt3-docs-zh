# 获取数据

## 在服务端获取数据
*因为`Nuxt3`是`SSR`的方案，所以你可能不仅仅只是想要在浏览器端发送请求获取数据，还想在服务器端就获取到数据并渲染组件。*

`Nuxt3`提供了4种方式使得你可以在服务器端异步获取数据

- useAsyncData
- useLazyAsyncData （useAsyncData+lazy:true）
- useFetch
- useLazyFetch （useFetch+lazy:true）

> 注意：他们只能在**`setup`**或者是`生命周期钩子`中使用

### useAsyncData

- 项目中可以在`pages`目录、`components`目录和`plugins`目录下使用useAsyncData异步获取数据

  ```js
  //用法
  const {
    data: Ref<DataT>,// 返回的数据结果
    pending: Ref<boolean>,// 是否在请求状态中
    refresh: (force?: boolean) => Promise<void>,// 强制刷新数据
    error?: any // 请求失败返回的错误信息
  } = useAsyncData(
    key: string, // 唯一键，确保相同的请求数据的获取和去重
    fn: () => Object,// 一个返回数值的异步函数
    options?: { lazy: boolean, server: boolean }
    // options.lazy,是否在加载路由后才请求该异步方法，默认为false
    // options.server,是否在服务端请求数据，默认为true
    // options.default，异步请求前设置数据data默认值的工厂函数（对lazy:true选项特别有用）
    // options.transform，更改fn返回结果的函数
    // options.pick，只从数组中指定的key进行缓存
  )
  ```

> 可以考虑设置lazy:true配合loading状态加载器的方式，能够带来更好的用户体验。

```js
// server/api/count.ts-例子
let counter = 0
export default () => {
  counter++
  return JSON.stringify(counter)
}
```



```js
// app.vue-例子
<script setup>
const { data } = await useAsyncData('count', () => $fetch('/api/count'))
</script>

<template>
  Page visits: {{ data }}
</template>
```

### useLazyAsyncData

这个封装方法等同于是，使用`useAsyncData`方法默认配置了`lazy:true`，执行异步函数时不会阻塞路由的执行。也意味着你必须处理数据为`null`的情况（比如说，在`default`返回的工厂函数中设置一个默认值）。

### useFetch

在`pages`目录、`components`目录和`plugins`目录下使用`useFetch`也同样可以获取到任意的URL资源。该方法实际上是对useAsyncData和$fetch的封装，提供了一个更便捷的封装方法。（它会根据URL和fetch参数自动生成一个key，同时推断出API的响应类型）

```js
//useFetch用法
const {
  data: Ref<DataT>,
  pending: Ref<boolean>,
  refresh: (force?: boolean) => Promise<void>,
  error?: any
} = useFetch(url: string, options?)

//可以看到useFetch和useAsyncData的返回对象是一样的，useFetch传参更便捷，不需要在fn中手动使用$fetch
useAsyncData(key: string,fn: () => Object,options?: { lazy: boolean, server: boolean })
```



```js
//例子
<script setup>
const { data } = await useFetch('/api/count')
</script>

<template>
  Page visits: {{ data.count }}
</template>
```



### useLazyFetch

这个封装方法等同于是，使用`useFetch`方法默认配置了`lazy:true`，执行异步函数时不会阻塞路由的执行。也意味着你必须处理数据为`null`的情况（比如说，在`default`返回的工厂函数中设置一个默认值）。



## 最佳实践

### 只选取你需要使用的数据

通过异步请求回来的数据都会存储在页面payload中。意味着，可能会存在没有用在你的组件的数据也加载到了payload中。我们强烈推荐你只选取必须使用在组件上的数据

```js
// /api/mountains/everest
{
  
  "title": "Mount Everest",
  "description": "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point",
  "height": "8,848 m",
  "countries": [
    "China",
    "Nepal"
  ],
  "continent": "Asia",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/600px-Everest_kalapatthar.jpg"
}
```

```vue
// 组件中只使用到了title和description，useFetch使用option的pick参数来指定key
<script setup>
const { data: mountain } = await useFetch('/api/mountains/everest', { pick: ['title', 'description'] })
</script>

<template>
  <h1>{{ mountain.title }}</h1>
  <p>{{ mountain.description }}</p>
</template>
```


### 使用async setup

受Vue3的影响，如果你使用了`async setup()`的形式，当前组件的实例会在第一个异步操作之后丢失。如果你想要使用多个异步操作，比如执行多个useFetch，你需要使用`<script setup>`或者将多个请求封装在一起请求（使用Promise.all将多个请求装在一起）。
**我们强烈建议使用 `<script setup>` 形式，它解决了采用[顶层await](https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E4%B8%8E%E6%99%AE%E9%80%9A%E7%9A%84-script-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8)的限制**

```vue
<script>

export default defineComponent({
  async setup() {
    const [{ data: organization }, { data: repos }] = await Promise.all([
      useFetch(`https://api.github.com/orgs/nuxt`),
      useFetch(`https://api.github.com/orgs/nuxt/repos`)
    ])

    return {
      organization,
      repos
    }
  }
})
</script>

<template>
  <header>
    <h1>{{ organization.login }}</h1>
    <p>{{ organization.description }}</p>
  </header>
</template>
```