module.exports = {
  title: "Nuxt3中文文档",
  description: "由Nuxt3对赌学习群产出的中文文档",
  base: "/",
  themeConfig: {
    sidebar: [
      {
        text: "使用",
        link: "/",
        children: [
          { text: "数据获取", link: "/usage/data-fetching" },
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
          { text: "pages", link: "/directory-structure/pages" },
          { text: "plugins", link: "/directory-structure/plugins" },
          { text: "gitignore", link: "/directory-structure/gitignore" },
          { text: "tsconfig.json", link: "/directory-structure/tsconfig" },
        ],
      },
    ],
  },
}
