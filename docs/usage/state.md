# State

**Nuxt 提供可组合的 `useState` 来创建跨组件的响应式并且对SSR友好的状态。** 

`useState` 是一个 SSR 友好的 `ref` 替代品。它的值将会在服务端渲染（客户端渲染期间）后保留，并且使用唯一的键在所有组件之间共享。

## 签名

```TypeScript
useState<T>(key: string, init?: () => T): Ref<T>
```


- **key** ：唯一的键确保数据请求能够正确并且不被重复

- **init** ：在 state 还未初始化时提供初始值的函数

- **T** ：（仅用作于 typescript ）描述 state 的类型

:::info 👉 
`useState` 仅在 `setup` 和 `生命周期钩子` 中生效。

<br />
:::

## 最佳实践


:::danger 🚨 
请不要在`<script setup>` 或 `setup()` 函数以外定义 `const state = ref()` 。<br />这种 state 将被所有访问您网站的用户共享，并可能导致内存泄漏！
:::

:::tip ✅
而是使用 `const useX = () ⇒ useState('x')`
<br />
:::

## 例子

### 基本用法

在这个例子中，我们使用一个组件内部的 `counter` 状态，任何其他使用 `useState('counter')` 的组件都将共享同一个响应式状态。

```vue
<script setup>
const conuter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">
      +
    </button>
    <button @click="counter--">
      -
    </button>
  </div>
</template>
```


[在 StackBlitz 中打开](https://stackblitz.com/github/nuxt/framework/tree/main/examples/use-state?file=app.vue&terminal=dev)

### 高级用法

在这个例子中，我们使用一个 composables 从 HTTP 请求头中获取用户默认的环境保存然后在一个名为 `local` 的状态中。

[在 StackBlitz 中打开](https://stackblitz.com/github/nuxt/framework/tree/main/examples/locale?file=app.vue&terminal=dev)

### 共享状态

通过使用[自动导入 composables](/nuxt3-docs-zh/directory-structure/composables)，我们可以定义全局的安全类型状态并且在整个应用中导入。

```typescript
// composables/states.ts
export const useCounter = () => useState<number>('counter', () => 0)
export const useColor = () => useState<string>('color', () => 'pink')
```


```vue
<script setup>
const color = useColor() // Same as useState('color')
</script>

<template>
  <p>Current color: {{ color }}</p>
</template>
```


