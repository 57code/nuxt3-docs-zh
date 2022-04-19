# Cookies

Nuxt为读取和写入cookies提供了一套针对服务端渲染友好的组合式api

## 使用

在你的页面、组件或者是插件中，针对一条特定的cookie记录，可以使用`useCookie`创建一条响应式的引用。

```js
const cookie = useCookie(name, options)
```

👉`useCookie`只在`setup`或`Lifecycle Hooks`中有效

😌`useCookie` ref将自动转义cookie的值成JSON格式。

## [示例](https://v3.nuxtjs.org/docs/usage/cookies#example)

下面的例子创建了一条称为counter的cookie记录。如果这条cookie记录不存在，那么在初始化这条记录时可以把它设置成一个任意值。无论何时当我们更新了counter变量的值的时候，这条cookie记录也会相应的自动更新。

```html
<template>
  <div>
    <h1> Counter: {{ counter || '-' }}</h1>
    <button @click="counter = null">
      reset
    </button>
    <button @click="counter--">
      -
    </button>
    <button @click="counter++">
      +
    </button>
  </div>
</template>

<script setup>
const counter = useCookie('counter')
counter.value = counter.value || Math.round(Math.random() * 1000)
</script>
```

:::danger 注意
示例报错reading 'default',需要
const counter = useCookie('counter', {
    default: ()=>0
})
:::

[StackBlitz打开](https://stackblitz.com/github/nuxt/framework/tree/main/examples/use-cookie?terminal=dev)

## [配置项](https://v3.nuxtjs.org/docs/usage/cookies#options)

组合式Cookie接受几个配置项来让你修改cookie的行为。

大部分配置项是直接引用的 [cookie ](https://github.com/jshttp/cookie)包中的内容。

### [`maxAge` / `expires`](https://v3.nuxtjs.org/docs/usage/cookies#maxage--expires)

**`maxAge`** 明确规定了响应头中`Set-Cookie`的`Max-Age`属性值，该属性接收`number`类型，单位秒。默认不设置最大超时时间。

**`expires`**:明确规定了响应头中`Set-Cookie`的`Expires`属性值，该属性接收`Date`类型。默认不设置该值。 大部分客户端将它视为“持久化的cookie”，只在例如退出web浏览器应用程序时才会删除cookie。

💡**注意:** cookie的存储模型规定如果同时设置了`expires`和`maxAge`,以`maxAge`优先。但是并不是所有的客户端都遵守这一规定，所以同时设置时应该让他们都指向相同的日期和时间！

如果都不设置`expires`和`maxAge`，那么cookie将仅用于会话，当用户关闭浏览器的时候被移除。

### [`httpOnly`](https://v3.nuxtjs.org/docs/usage/cookies#httponly)

明确规定了响应头中`Set-Cookie`的`HttpOnly`属性值，该属性接收`boolean`类型。当`httpOnly`为“真值” 时`HttpOnly`属性被设置，反之不设置。默认`HttpOnly`属性不设置。

💡**注意:** 小心当该值被设置成`true`时，合格的客户端是不允许用户侧通过javaScript脚本的方式查看`documnet.cookie`。

### [`secure`](https://v3.nuxtjs.org/docs/usage/cookies#secure)

明确规定了响应头中`Set-Cookie`的`Secure`属性值，该属性接受`boolean`类型。当secure设置为`true`时，`Secure`被设置，反之不设置。默认`Secure`不设置。

💡**注意:** 小心当该值被设置成`true`时，如果当浏览器和服务器没有建立https连接，合格的客户端将不会传输cookie。这可能会导致错误。

### [`domain`](https://v3.nuxtjs.org/docs/usage/cookies#domain)

明确规定了响应头中`Set-Cookie`的`Domain`属性值。默认`domain`不设置，大部分客户端认为cookie仅适用于当前域。

### [`path`](https://v3.nuxtjs.org/docs/usage/cookies#path)

明确规定了响应头中`Set-Cookie`的`Path`属性值。默认值为“default path”。

### [`sameSite`](https://v3.nuxtjs.org/docs/usage/cookies#samesite)

明确规定了响应头中`Set-Cookie`的`SameSite`属性值

- `true` 将`SameSite`属性值设为`Strict`,以严格执行同站请求。
- `false`不设置`SameSite`属性。
- `'lax'` 将SameSite属性值设为`Lax`,允许部分第三方请求携带 `Cookie`。
- `'none'`允许跨站发送`Cookie`。
- `'strict'`将SameSite属性值设为`Strict`,以严格执行同站请求。

关于不同实施级别的更多信息可以在 [规范 ](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-03#section-4.1.2.7)中查阅。

### [`encode`](https://v3.nuxtjs.org/docs/usage/cookies#encode)

指定cookie值的编码函数。因为cookie的值是一个有限的字符集（必须是一个简单的字符串），所以该函数需要将值编码为适合cookie的字符串。

默认编码方式是 `JSON.stringify` + `encodeURIComponent`。

### [`decode`](https://v3.nuxtjs.org/docs/usage/cookies#decode)

指定cookie值的解码函数。因为cookie值为一个有限的字符集（必须是一串简单的字符串），该函数需要将编码的cookie值解码成javaScript中的字符串或对象类型。

默认解码函数是 `decodeURIComponent` + [destr ](https://github.com/unjs/destr).

💡**注意:** 如果在该函数抛出异常，那么原始的未经解码的cookie值将会作为value值返回。

## [API路由中处理cookies](https://v3.nuxtjs.org/docs/usage/cookies#handling-cookies-in-api-routes)

你可以使用[`h3` ](https://github.com/unjs/h3)包中的`useCookie`和`setCookie`在访问服务器的API路由时候处理cookie的值。

**示例:**

```js
import { useCookie, setCookie } from 'h3'

export default (req, res) => {
  // Read counter cookie
  let counter = useCookie(req, 'counter') || 0

  // Increase counter cookie by 1
  setCookie(res, 'counter', ++counter)

  // Send JSON response
  return { counter }
}
```
