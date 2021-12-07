# Azure

如何将 Nuxt 部署到 Azure 静态 Web 应用或 Azure Functions中  

## Azure Functions

- 支持无服务器构建
- 无需配置
- Azure Function 提供静态资源服务


### 设置

```ts [nuxt.config.js|ts]
export default {
  nitro: {
    preset: 'azure_functions'
  }
}
```

::: warning 提示
如果你遇到问题，请确保你使用的是Node.js 14+ 环境。 你可以在Azure文档中找到更多关于[`如何设置Node版本`](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node?tabs=v2#setting-the-node-version)的信息。
:::

### 本地预览

如果你想在本地测试，请安装[Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local)。

您可以从无服务器目录启动开发环境。

```bash
NITRO_PRESET=azure_functions yarn build
cd .output
func start
```

你现在可以在浏览器中访问 <http://localhost:7071/> 来浏览在 Azure Functions 上本地运行的服务。

### 本机部署

要部署，只需运行以下命令：

```bash
# 发布打包后的压缩文件
az functionapp deployment source config-zip -g <resource-group> -n <app-name> --src dist/deploy.zip
# 或者您也可以发布源代码
cd dist && func azure functionapp publish --javascript <app-name>
```

### 通过 GitHub Actions 从 CI/CD 部署

首先，获取您的 Azure Functions 发布配置文件，然后按照[`这些说明`](https://github.com/Azure/functions-action#using-publish-profile-as-deployment-credential-recommended)将其作为密钥添加到您的 GitHub 存储库设置中。

然后创建以下文件作为工作流：

```yml{}[.github/workflows/azure.yml]
name: azure
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
jobs:
  deploy:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ ubuntu-latest ]
        node: [ 14 ]
    steps:
      - uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node }}

      - name: Checkout
        uses: actions/checkout@master

      - name: Get yarn cache directory path
        id: yarn-cache-dir-path
        run: echo "::set-output name=dir::$(yarn cache dir)"

      - uses: actions/cache@v2
        id: yarn-cache
        with:
          path: ${{ steps.yarn-cache-dir-path.outputs.dir }}
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-azure

      - name: Install Dependencies
        if: steps.cache.outputs.cache-hit != 'true'
        run: yarn

      - name: Build
        run: npm run build
        env:
          NITRO_PRESET: azure_functions

      - name: 'Deploy to Azure Functions'
        uses: Azure/functions-action@v1
        with:
          app-name: <your-app-name>
          package: .output/deploy.zip
          publish-profile: ${{ secrets.AZURE_FUNCTIONAPP_PUBLISH_PROFILE }}
```

### 优化 Azure Functions

可以考虑 [`启用从压缩包运行`](https://docs.microsoft.com/en-us/azure/app-service/deploy-run-package) ，从而支持直接通过 zip 文件运行您的应用程序。这可以加速冷启动。

### 例子

<https://nuxt-nitro.azurewebsites.net/> 提供了在线演示。

## Azure 静态 Web 应用

::: warning 提示
Azure 静态 Web 应用当前环境默认为 Node.js 12.x ，这意味着它与 Nuxt Nitro 不兼容。目前，您可以改为通过 [Azure Functions](#azure-functions) 进行部署。
:::

如何使用 Nuxt Nitro 将 Nuxt 部署到 Azure 静态 Web 应用。


- 支持无服务器 SSR 构建
- 部署时自动检测
- 极少的配置

### 设置

Azure 静态 Web 应用程序旨在 [GitHub Actions workflow](https://docs.microsoft.com/en-us/azure/static-web-apps/github-actions-workflow)中持续部署。 默认情况下，Nitro 将检测此部署环境并启用 `azure` 预设。

### 本地预览

您可以在部署前运行开发环境进行预览。

```bash
NITRO_PRESET=azure yarn build
npx @azure/static-web-apps-cli start .output/public --api-location .output/server
```

### 通过 GitHub Actions 进行 CI/CD 部署

将 GitHub 存储库链接到 Azure 静态 Web 应用时，会向存储库添加一个工作流文件。

当系统要求您选择框架时，请选择自定义并提供以下信息：

| Input | Value |
| --- | --- |
| **app_location** | '/' |
| **api_location** | '.output/server' |
| **output_location** | '.output/public' |

如果您错过了这一步，您仍然可以在工作流程中找到构建配置部分并更新构建配置：

```yml{}[.github/workflows/azure-static-web-apps-<RANDOM_NAME>.yml]
###### Repository/Build Configurations ######
app_location: '/'
api_location: '.output/server'
output_location: '.output/public'
###### End of Repository/Build Configurations ######
```

#### 说明

等待 [`Azure 静态 Web 应用工作流`](https://github.com/Azure/static-web-apps-deploy) 中的更新，您还需要在根目录中运行以下命令：

```bash
mkdir -p .output/server
touch .output/server/.gitkeep
git add -f .output/server/.gitkeep
```

就是这样！现在，Azure 静态 Web 应用程序将在推送时自动部署到由 Nitro 驱动的 Nuxt 应用程序。
