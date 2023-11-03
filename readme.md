# SubIT Handbook

尝试成为社团的百宝书，一些知识库积累
一些资源积累
或许

## Description
before all, run
```bash
npm install
```
First
### to run this project
```bash
npm run docs:dev
```
### build
``` bash
npm run docs:build
```
### preview
```bash
npm run docs:preview
```
## Configurations
### 配置侧边栏
请在`.vitepress/configComponents/sidebar.mjs`创建对应的侧边栏，在`.vitepress/config.mjs`中`import`然后配置对应路径
#### Example
```javascript
// configComponents/sidebar.mjs
export let developmentSidebar = [
    {
        text: '开发指南',
        items:[
            { text: 'Get Started', link: '/guide/development/starter' },
        ]
    }
]
// config.mjs
import { ..., developmentSidebar } from './configComponents/sidebar.mjs'
...
sidebar: {
    "/guide/study": examinationsSidebar,
    "/guide/development": developmentSidebar,
},
...
```