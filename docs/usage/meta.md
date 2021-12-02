# 元标签



您可以通过几种不同的方式为您的网站自定义元标签：



## 组合式api useMeta

在您的`setup`函数中，您可以`useMeta`使用元属性的对象调用与元标记对应的键：`title`, `base`, `script`, `style`, `meta`and `link`, 以及`htmlAttrs`和 `bodyAttrs`。或者，您可以传递一个返回响应式元数据对象的函数。

例如：

```vue
export default {
  setup () {
    useMeta({
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
      ],
      bodyAttrs: {
        class: 'test'
      }
    })
  }
}
```



## 元组件

Nuxt提供`<Title>`，`<Base>`，`<Script>`，`<Style>`，`<Meta>`，`<Link>`，`<Body>`，`<Html>`和`<Head>`组件，以便您可以直接与您的组件的模板中的元数据进行交互。

由于这些组件名称与原生 HTML 元素匹配，因此在 **模板中将它们大写非常重要**。

`<Head>`和`<Body>`可以接受嵌套元标记（出于审美原因），但这对嵌套元标记在最终 HTML 中的呈现*位置*没有影响。

例如：

```vue
<template>
  <div>
    Hello World
    <Html :lang="dynamic > 50 ? 'en-GB' : 'en-US'">
      <Head>
        <Title>{{ dynamic }} title</Title>
        <Meta name="description" :content="`My page's ${dynamic} description`" />
        <Link rel="preload" href="/test.txt" as="script" />
      </Head>
    </Html>

    <button class="blue" @click="dynamic = Math.random() * 100">
      Click me
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({ dynamic: 49 })
}
</script>
```

























