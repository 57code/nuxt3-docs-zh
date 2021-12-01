# PM2

如何使用 PM2 将 Nuxt 部署到 Node.js 服务上。



- 支持极少的 SSR 构建
- 零毫秒冷启动
- 可进行更多的配置

## 设置

确保没有在其它地方配置 `nuxt.config` 文件。

```js [nuxt.config.js|ts]
export default {
  nitro: {
    // 这是一个默认的配置，你也可以忽略它
    // preset: 'server'
  }
}
```

## 部署

运行 `yarn build`， 打包后的所有文件都在 `.output` 文件夹中。 静态资源在 `public` 子目录中， 服务及其依赖在 `server` 子目录中。

这个 `.output` 文件夹可以部署到你的 Node.js 服务上 ，服务器可以用 [`pm2`](https://pm2.keymetrics.io/docs/)。

要以生产模式启动服务，请运行：

```bash
node .output/server/index.mjs
```

使用 `pm2` 的配置：

```js [ecosystem.config.js]
module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
```

## 更多

查看有关 [`服务器配置`](https://v3.nuxtjs.org/docs/deployment/presets/server)的更多信息。