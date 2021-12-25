import{_ as e,c as n,o as a,a as t}from"./app.b5cf9d07.js";const f='{"title":"Azure","description":"","frontmatter":{},"headers":[{"level":2,"title":"Azure Functions","slug":"azure-functions"},{"level":3,"title":"\u8BBE\u7F6E","slug":"\u8BBE\u7F6E"},{"level":3,"title":"\u672C\u5730\u9884\u89C8","slug":"\u672C\u5730\u9884\u89C8"},{"level":3,"title":"\u672C\u673A\u90E8\u7F72","slug":"\u672C\u673A\u90E8\u7F72"},{"level":3,"title":"\u901A\u8FC7 GitHub Actions \u4ECE CI/CD \u90E8\u7F72","slug":"\u901A\u8FC7-github-actions-\u4ECE-ci-cd-\u90E8\u7F72"},{"level":3,"title":"\u4F18\u5316 Azure Functions","slug":"\u4F18\u5316-azure-functions"},{"level":3,"title":"\u4F8B\u5B50","slug":"\u4F8B\u5B50"},{"level":2,"title":"Azure \u9759\u6001 Web \u5E94\u7528","slug":"azure-\u9759\u6001-web-\u5E94\u7528"},{"level":3,"title":"\u8BBE\u7F6E","slug":"\u8BBE\u7F6E-1"},{"level":3,"title":"\u672C\u5730\u9884\u89C8","slug":"\u672C\u5730\u9884\u89C8-1"},{"level":3,"title":"\u901A\u8FC7 GitHub Actions \u8FDB\u884C CI/CD \u90E8\u7F72","slug":"\u901A\u8FC7-github-actions-\u8FDB\u884C-ci-cd-\u90E8\u7F72"}],"relativePath":"deployment/azure.md","lastUpdated":1640403646543}',s={},r=t(`__VP_STATIC_START__<h1 id="azure" tabindex="-1">Azure <a class="header-anchor" href="#azure" aria-hidden="true">#</a></h1><p>\u5982\u4F55\u5C06 Nuxt \u90E8\u7F72\u5230 Azure \u9759\u6001 Web \u5E94\u7528\u6216 Azure Functions\u4E2D</p><h2 id="azure-functions" tabindex="-1">Azure Functions <a class="header-anchor" href="#azure-functions" aria-hidden="true">#</a></h2><ul><li>\u652F\u6301\u65E0\u670D\u52A1\u5668\u6784\u5EFA</li><li>\u65E0\u9700\u914D\u7F6E</li><li>Azure Function \u63D0\u4F9B\u9759\u6001\u8D44\u6E90\u670D\u52A1</li></ul><h3 id="\u8BBE\u7F6E" tabindex="-1">\u8BBE\u7F6E <a class="header-anchor" href="#\u8BBE\u7F6E" aria-hidden="true">#</a></h3><div class="language-ts [nuxt.config.js|ts]"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  nitro<span class="token operator">:</span> <span class="token punctuation">{</span>
    preset<span class="token operator">:</span> <span class="token string">&#39;azure_functions&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u5982\u679C\u4F60\u9047\u5230\u95EE\u9898\uFF0C\u8BF7\u786E\u4FDD\u4F60\u4F7F\u7528\u7684\u662FNode.js 14+ \u73AF\u5883\u3002 \u4F60\u53EF\u4EE5\u5728Azure\u6587\u6863\u4E2D\u627E\u5230\u66F4\u591A\u5173\u4E8E<a href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node?tabs=v2#setting-the-node-version" target="_blank" rel="noopener noreferrer"><code>\u5982\u4F55\u8BBE\u7F6ENode\u7248\u672C</code></a>\u7684\u4FE1\u606F\u3002</p></div><h3 id="\u672C\u5730\u9884\u89C8" tabindex="-1">\u672C\u5730\u9884\u89C8 <a class="header-anchor" href="#\u672C\u5730\u9884\u89C8" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F60\u60F3\u5728\u672C\u5730\u6D4B\u8BD5\uFF0C\u8BF7\u5B89\u88C5<a href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local" target="_blank" rel="noopener noreferrer">Azure Functions Core Tools</a>\u3002</p><p>\u60A8\u53EF\u4EE5\u4ECE\u65E0\u670D\u52A1\u5668\u76EE\u5F55\u542F\u52A8\u5F00\u53D1\u73AF\u5883\u3002</p><div class="language-bash"><pre><code><span class="token assign-left variable">NITRO_PRESET</span><span class="token operator">=</span>azure_functions <span class="token function">yarn</span> build
<span class="token builtin class-name">cd</span> .output
func start
</code></pre></div><p>\u4F60\u73B0\u5728\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE <a href="http://localhost:7071/" target="_blank" rel="noopener noreferrer">http://localhost:7071/</a> \u6765\u6D4F\u89C8\u5728 Azure Functions \u4E0A\u672C\u5730\u8FD0\u884C\u7684\u670D\u52A1\u3002</p><h3 id="\u672C\u673A\u90E8\u7F72" tabindex="-1">\u672C\u673A\u90E8\u7F72 <a class="header-anchor" href="#\u672C\u673A\u90E8\u7F72" aria-hidden="true">#</a></h3><p>\u8981\u90E8\u7F72\uFF0C\u53EA\u9700\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash"><pre><code><span class="token comment"># \u53D1\u5E03\u6253\u5305\u540E\u7684\u538B\u7F29\u6587\u4EF6</span>
az functionapp deployment <span class="token builtin class-name">source</span> config-zip -g <span class="token operator">&lt;</span>resource-group<span class="token operator">&gt;</span> -n <span class="token operator">&lt;</span>app-name<span class="token operator">&gt;</span> --src dist/deploy.zip
<span class="token comment"># \u6216\u8005\u60A8\u4E5F\u53EF\u4EE5\u53D1\u5E03\u6E90\u4EE3\u7801</span>
<span class="token builtin class-name">cd</span> dist <span class="token operator">&amp;&amp;</span> func azure functionapp publish --javascript <span class="token operator">&lt;</span>app-name<span class="token operator">&gt;</span>
</code></pre></div><h3 id="\u901A\u8FC7-github-actions-\u4ECE-ci-cd-\u90E8\u7F72" tabindex="-1">\u901A\u8FC7 GitHub Actions \u4ECE CI/CD \u90E8\u7F72 <a class="header-anchor" href="#\u901A\u8FC7-github-actions-\u4ECE-ci-cd-\u90E8\u7F72" aria-hidden="true">#</a></h3><p>\u9996\u5148\uFF0C\u83B7\u53D6\u60A8\u7684 Azure Functions \u53D1\u5E03\u914D\u7F6E\u6587\u4EF6\uFF0C\u7136\u540E\u6309\u7167<a href="https://github.com/Azure/functions-action#using-publish-profile-as-deployment-credential-recommended" target="_blank" rel="noopener noreferrer"><code>\u8FD9\u4E9B\u8BF4\u660E</code></a>\u5C06\u5176\u4F5C\u4E3A\u5BC6\u94A5\u6DFB\u52A0\u5230\u60A8\u7684 GitHub \u5B58\u50A8\u5E93\u8BBE\u7F6E\u4E2D\u3002</p><p>\u7136\u540E\u521B\u5EFA\u4EE5\u4E0B\u6587\u4EF6\u4F5C\u4E3A\u5DE5\u4F5C\u6D41\uFF1A</p><div class="language-yml{}[.github/workflows/azure.yml]"><pre><code>name: azure
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
jobs:
  deploy:
    runs-on: \${{ matrix.os }}
    strategy:
      matrix:
        os: [ ubuntu-latest ]
        node: [ 14 ]
    steps:
      - uses: actions/setup-node@v2
        with:
          node-version: \${{ matrix.node }}

      - name: Checkout
        uses: actions/checkout@master

      - name: Get yarn cache directory path
        id: yarn-cache-dir-path
        run: echo &quot;::set-output name=dir::$(yarn cache dir)&quot;

      - uses: actions/cache@v2
        id: yarn-cache
        with:
          path: \${{ steps.yarn-cache-dir-path.outputs.dir }}
          key: \${{ runner.os }}-yarn-\${{ hashFiles(&#39;**/yarn.lock&#39;) }}
          restore-keys: |
            \${{ runner.os }}-yarn-azure

      - name: Install Dependencies
        if: steps.cache.outputs.cache-hit != &#39;true&#39;
        run: yarn

      - name: Build
        run: npm run build
        env:
          NITRO_PRESET: azure_functions

      - name: &#39;Deploy to Azure Functions&#39;
        uses: Azure/functions-action@v1
        with:
          app-name: &lt;your-app-name&gt;
          package: .output/deploy.zip
          publish-profile: \${{ secrets.AZURE_FUNCTIONAPP_PUBLISH_PROFILE }}
</code></pre></div><h3 id="\u4F18\u5316-azure-functions" tabindex="-1">\u4F18\u5316 Azure Functions <a class="header-anchor" href="#\u4F18\u5316-azure-functions" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u8003\u8651 <a href="https://docs.microsoft.com/en-us/azure/app-service/deploy-run-package" target="_blank" rel="noopener noreferrer"><code>\u542F\u7528\u4ECE\u538B\u7F29\u5305\u8FD0\u884C</code></a> \uFF0C\u4ECE\u800C\u652F\u6301\u76F4\u63A5\u901A\u8FC7 zip \u6587\u4EF6\u8FD0\u884C\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u3002\u8FD9\u53EF\u4EE5\u52A0\u901F\u51B7\u542F\u52A8\u3002</p><h3 id="\u4F8B\u5B50" tabindex="-1">\u4F8B\u5B50 <a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a></h3><p><a href="https://nuxt-nitro.azurewebsites.net/" target="_blank" rel="noopener noreferrer">https://nuxt-nitro.azurewebsites.net/</a> \u63D0\u4F9B\u4E86\u5728\u7EBF\u6F14\u793A\u3002</p><h2 id="azure-\u9759\u6001-web-\u5E94\u7528" tabindex="-1">Azure \u9759\u6001 Web \u5E94\u7528 <a class="header-anchor" href="#azure-\u9759\u6001-web-\u5E94\u7528" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>Azure \u9759\u6001 Web \u5E94\u7528\u5F53\u524D\u73AF\u5883\u9ED8\u8BA4\u4E3A Node.js 12.x \uFF0C\u8FD9\u610F\u5473\u7740\u5B83\u4E0E Nuxt Nitro \u4E0D\u517C\u5BB9\u3002\u76EE\u524D\uFF0C\u60A8\u53EF\u4EE5\u6539\u4E3A\u901A\u8FC7 <a href="#azure-functions">Azure Functions</a> \u8FDB\u884C\u90E8\u7F72\u3002</p></div><p>\u5982\u4F55\u4F7F\u7528 Nuxt Nitro \u5C06 Nuxt \u90E8\u7F72\u5230 Azure \u9759\u6001 Web \u5E94\u7528\u3002</p><ul><li>\u652F\u6301\u65E0\u670D\u52A1\u5668 SSR \u6784\u5EFA</li><li>\u90E8\u7F72\u65F6\u81EA\u52A8\u68C0\u6D4B</li><li>\u6781\u5C11\u7684\u914D\u7F6E</li></ul><h3 id="\u8BBE\u7F6E-1" tabindex="-1">\u8BBE\u7F6E <a class="header-anchor" href="#\u8BBE\u7F6E-1" aria-hidden="true">#</a></h3><p>Azure \u9759\u6001 Web \u5E94\u7528\u7A0B\u5E8F\u65E8\u5728 <a href="https://docs.microsoft.com/en-us/azure/static-web-apps/github-actions-workflow" target="_blank" rel="noopener noreferrer">GitHub Actions workflow</a>\u4E2D\u6301\u7EED\u90E8\u7F72\u3002 \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CNitro \u5C06\u68C0\u6D4B\u6B64\u90E8\u7F72\u73AF\u5883\u5E76\u542F\u7528 <code>azure</code> \u9884\u8BBE\u3002</p><h3 id="\u672C\u5730\u9884\u89C8-1" tabindex="-1">\u672C\u5730\u9884\u89C8 <a class="header-anchor" href="#\u672C\u5730\u9884\u89C8-1" aria-hidden="true">#</a></h3><p>\u60A8\u53EF\u4EE5\u5728\u90E8\u7F72\u524D\u8FD0\u884C\u5F00\u53D1\u73AF\u5883\u8FDB\u884C\u9884\u89C8\u3002</p><div class="language-bash"><pre><code><span class="token assign-left variable">NITRO_PRESET</span><span class="token operator">=</span>azure <span class="token function">yarn</span> build
npx @azure/static-web-apps-cli start .output/public --api-location .output/server
</code></pre></div><h3 id="\u901A\u8FC7-github-actions-\u8FDB\u884C-ci-cd-\u90E8\u7F72" tabindex="-1">\u901A\u8FC7 GitHub Actions \u8FDB\u884C CI/CD \u90E8\u7F72 <a class="header-anchor" href="#\u901A\u8FC7-github-actions-\u8FDB\u884C-ci-cd-\u90E8\u7F72" aria-hidden="true">#</a></h3><p>\u5C06 GitHub \u5B58\u50A8\u5E93\u94FE\u63A5\u5230 Azure \u9759\u6001 Web \u5E94\u7528\u65F6\uFF0C\u4F1A\u5411\u5B58\u50A8\u5E93\u6DFB\u52A0\u4E00\u4E2A\u5DE5\u4F5C\u6D41\u6587\u4EF6\u3002</p><p>\u5F53\u7CFB\u7EDF\u8981\u6C42\u60A8\u9009\u62E9\u6846\u67B6\u65F6\uFF0C\u8BF7\u9009\u62E9\u81EA\u5B9A\u4E49\u5E76\u63D0\u4F9B\u4EE5\u4E0B\u4FE1\u606F\uFF1A</p><table><thead><tr><th>Input</th><th>Value</th></tr></thead><tbody><tr><td><strong>app_location</strong></td><td>&#39;/&#39;</td></tr><tr><td><strong>api_location</strong></td><td>&#39;.output/server&#39;</td></tr><tr><td><strong>output_location</strong></td><td>&#39;.output/public&#39;</td></tr></tbody></table><p>\u5982\u679C\u60A8\u9519\u8FC7\u4E86\u8FD9\u4E00\u6B65\uFF0C\u60A8\u4ECD\u7136\u53EF\u4EE5\u5728\u5DE5\u4F5C\u6D41\u7A0B\u4E2D\u627E\u5230\u6784\u5EFA\u914D\u7F6E\u90E8\u5206\u5E76\u66F4\u65B0\u6784\u5EFA\u914D\u7F6E\uFF1A</p><div class="language-yml{}[.github/workflows/azure-static-web-apps-&lt;RANDOM_NAME&gt;.yml]"><pre><code>###### Repository/Build Configurations ######
app_location: &#39;/&#39;
api_location: &#39;.output/server&#39;
output_location: &#39;.output/public&#39;
###### End of Repository/Build Configurations ######
</code></pre></div><h4 id="\u8BF4\u660E" tabindex="-1">\u8BF4\u660E <a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a></h4><p>\u7B49\u5F85 <a href="https://github.com/Azure/static-web-apps-deploy" target="_blank" rel="noopener noreferrer"><code>Azure \u9759\u6001 Web \u5E94\u7528\u5DE5\u4F5C\u6D41</code></a> \u4E2D\u7684\u66F4\u65B0\uFF0C\u60A8\u8FD8\u9700\u8981\u5728\u6839\u76EE\u5F55\u4E2D\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash"><pre><code><span class="token function">mkdir</span> -p .output/server
<span class="token function">touch</span> .output/server/.gitkeep
<span class="token function">git</span> <span class="token function">add</span> -f .output/server/.gitkeep
</code></pre></div><p>\u5C31\u662F\u8FD9\u6837\uFF01\u73B0\u5728\uFF0CAzure \u9759\u6001 Web \u5E94\u7528\u7A0B\u5E8F\u5C06\u5728\u63A8\u9001\u65F6\u81EA\u52A8\u90E8\u7F72\u5230\u7531 Nitro \u9A71\u52A8\u7684 Nuxt \u5E94\u7528\u7A0B\u5E8F\u3002</p>__VP_STATIC_END__`,42),o=[r];function i(c,u,p,l,d,h){return a(),n("div",null,o)}var g=e(s,[["render",i]]);export{f as __pageData,g as default};
