import { defineConfig } from 'vitepress'
import { webSvg } from './configComponents/icon.mjs'
import {
  highSchoolSidebar,
  developmentSidebar,
  collegeSidebar,
} from './configComponents/sidebar.mjs'

const date = new Date()


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "📚 Handbook",
  lang: "zh-CN",
  logo: "/images/SubIT-Normal.svg",
  description: "this is SubIT Handbook Project",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif+SC&display=swap' }]
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    lastUpdated: {
      text: 'Last Updated at',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
        hourCycle: 'h23',
      }
    },

    nav: [
      { text: '🏠首页', link: '/' },
      { text: '🚗目录', link: '/guide/dispatcher' },
      { text: '💻开发', link: '/guide/development/api-examples' },
      { text: '📚升学', link: '/guide/high-school-study/preparatory' },
      // { text: '🏫大学', link: 'guide/college/starter' },
      { text: '🔍关于', link: '/about' }
    ],

    sidebar: {
      "/guide/development": developmentSidebar,
      "/guide/high-school-study": highSchoolSidebar,
      "/guide/college-study": collegeSidebar,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/subitlab/handbook' },
      { icon: { svg: webSvg }, link: 'https://subit.org.cn' }
    ],
    footer: {
      message: `Last Updated at ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      copyright: 'Copyright © 2018-present SubIT, PkuSchool'
    }
  }
})
