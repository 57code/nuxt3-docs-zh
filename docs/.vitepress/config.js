module.exports = {
  title: "Nuxt3中文文档",
  description: "由Nuxt3对赌学习群产出的中文文档",
  base: "/nuxt3-docs-zh/",
  themeConfig: {
    sidebar: [
      {
        text: "快速入门",
        link: "/getting-started",
        children: [
          { text: "安装", link: "/getting-started/installation" },
        ],
      },
      {
        text: "使用",
        link: "/",
        children: [
          { text: "数据获取", link: "/usage/data-fetching" },
          { text: "State", link: "/usage/state" },
          { text: "运行时配置", link: "/usage/runtime-config" },
          { text: "NuxtApp", link: "/usage/nuxt-app" },
          { text: "Cookies", link: "/usage/cookies" },
        ],
      },
      {
        text: "目录结构",
        link: "/directory-structure",
        children: [
          { text: "app.vue", link: "/directory-structure/app-vue" },
          { text: "composables", link: "/directory-structure/composables" },
          { text: "components", link: "/directory-structure/components" },
          { text: "layouts", link: "/directory-structure/layouts" },
          { text: "pages", link: "/directory-structure/pages" },
          { text: "plugins", link: "/directory-structure/plugins" },
          { text: "gitignore", link: "/directory-structure/gitignore" },
          { text: "server", link: "/directory-structure/server" },
          { text: "tsconfig.json", link: "/directory-structure/tsconfig" },
        ],
      },
      {
        text: "部署",
        link: "/deployment",
        children: [
          { text: "Azure", link: "/deployment/azure" },
          { text: "PM2", link: "/deployment/pm2" },
          { text: "Netlify", link: "/deployment/Netlify" },
          { text: "Vercel", link: "/deployment/vercel" },
        ],
      },
    ],
  },
}
