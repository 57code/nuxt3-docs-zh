# PM2

如何将 Nuxt 部署到 Netlify 服务。



- 支持无服务器的SSR构建
- 部署时自动检测
- 无需配置

## 设置

Nitro 会自动检测到你的 Netlify 环境，并构建正确版本的Nuxt服务。对于新站点，Netlify 会检测到你正在使用 Nuxt 3 或 bridge，将发布目录设置为 `dist` ，然后使用 `npm run build` 命令。如果您正在升级一个现有的站点，您应该检查这些并在需要时更新它们。

## 部署

[`和平常使用Netlify时一样`](https://docs.netlify.com/configure-builds/get-started/)，推送到你的 git 仓库。
( Netlify 允许链接 GitHub 、GitLab 或者 Bitbucket 仓库作为一个站点以便持续集成部署 ) 

## 更多

有关[`Lambda预设`](https://v3.nuxtjs.org/docs/deployment/presets/lambda)的详细信息，请参阅更多信息。

## 例子

可以在[`https://nitro-demo.netlify.app/`](https://nitro-demo.netlify.app/) 地址查看。