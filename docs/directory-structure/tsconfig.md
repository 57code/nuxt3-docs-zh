# TS 配置文件 [TypeScript configuration file](https://v3.nuxtjs.org/docs/directory-structure/tsconfig)

Nuxt [自动生成](https://v3.nuxtjs.org/concepts/typescript) 一个 `.nuxt/tsconfig.json` 文件，其中包含您在 Nuxt 项目中使用的解析别名，以及其他合理的默认值。 您可以通过在项目的根目录中创建一个包含以下内容的 `tsconfig.json` 来从中受益：

```json
{
  "extends": "./.nuxt/tsconfig.json"
}
```

如果需要，您可以自定义此文件的内容。但请注意，如果您需要自定义 `paths` ，将会完全覆盖自动生成的路径别名。实际上我们建议您在 `nuxt.config` 中的 `alias` 属性中添加您所需要的全部路径别名，它们将被提取并添加到自动生成的 `tsconfig` 中。
