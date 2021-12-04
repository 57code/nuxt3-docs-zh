module.exports = {
  title: "Nuxt3中文文档",
  description: "由Nuxt3对赌学习群产出的中文文档",
  base: "/nuxt3-docs-zh/",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],
  themeConfig: {
    repo: '57code/nuxt3-docs-zh',
    logo: '/logo.svg',
    nav:[
      { text: '学习指南', link: '/getting-started/installation' },
      { text: 'Modules', link: 'https://modules.nuxtjs.org/?version=3.x' },
      { text: '在线编辑', link: 'https://stackblitz.com/edit/nuxt-starter-ndtolw' },
      {
          text: '更新日志',
          link:
            'https://github.com/57code/nuxt3-docs-zh'
      }
    ],
    sidebar: [
      {
        text: "快速入门",
        children: [
          { text: "安装", link: "/getting-started/installation" },
        ],
      },
      {
        text: "使用",
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
        children: [
          { text: "Azure", link: "/deployment/azure" },
          { text: "PM2", link: "/deployment/pm2" },
          { text: "Netlify", link: "/deployment/Netlify" },
          { text: "Vercel", link: "/deployment/vercel" },
        ],
      },
    ],
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
  },
}
