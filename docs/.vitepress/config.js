module.exports = {
  title: "Nuxt3中文文档",
  description: "由Nuxt3对赌学习群产出的中文文档",
  base: '/',
  themeConfig: {
    sidebar: [
      {
        text: "使用",
        link: "/",
        children: [
          { text: "数据获取", link: "/usage/data-fetching" },
          { text: "运行时配置", link: "/usage/runtime-config" },
        ],
      },
      {
        text: "目录结构",
        link: "/directory-structure",
        children: [
          { text: "入口组件", link: "/directory-structure/app-vue" },
          { text: "NuxtApp", link: "/directory-structure/NuxtApp" }
        ],
      },
    ],
  },
};
