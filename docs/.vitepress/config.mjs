import { defineConfig } from 'vitepress'
import { webSvg } from './icon.mjs'

const date = new Date()


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SubIT Handbook",
  description: "Basic Handbooks",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '开发', link: '/guide/Development/api-examples' },
      { text: '预科', link: '/guide/Preparatory/api-examples' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      "/guide/": [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/subitlab/handbook' },
      { icon: { svg: webSvg }, link: 'https://subit.org.cn' }
    ],
    footer: {
      message: `Last Updated on ${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
      copyright: 'Copyright © 2018-present SubIT, Pkuschool'
    }
  }
})
