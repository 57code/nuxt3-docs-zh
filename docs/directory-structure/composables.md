# 可复用组合逻辑 [composables](https://v3.nuxtjs.org/docs/directory-structure/composables)

::: tip 说明：
在 Nuxt3 的约定下，用户在`composables`目录下创建的组合逻辑文件将会被系统自动识别导入到应用程序，以供全局使用。
:::

## 案例

::: tip 操作：
在 composables 文件夹下新建`useFoo.ts`文件,编写组合逻辑代码。
:::

### 命名导出

```ts
import { useState } from '#app';

export const useFoo = () => {
  return useState('foo', () => 'bar');
};
```

### 默认导出

```ts
import { useState } from '#app';

//使用: useFoo()
export default function () {
  return useState('foo', () => 'bar');
}
```

::: danger 注意：
默认导出以文件名的方式来进行默认导出使用，文件名必须遵循 `pascalCase`、`camelCase` 规范。
:::

### 使用

编写好组合逻辑文件后，Nuxt3 就会自动的导入，您可以在应用程序中使用它而无需手动导入。

```vue
<template>
  <div>
    {{ foo }}
  </div>
</template>

<script setup>
const foo = useFoo();
</script>
```
