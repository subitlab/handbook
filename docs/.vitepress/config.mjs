import { defineConfig } from 'vitepress'
import { webSvg } from './components/icon.mjs'
import { examinationsSidebar } from './components/sidebar.mjs'

const date = new Date()


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "📚 Handbook",
  lang: "zh-CN",
  logo: "/images/SubIT-Normal.svg",
  description: "this is SubIT Handbook Project",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      }
    },

    nav: [
      { text: '🏠首页', link: '/' },
      { text: '💻开发', link: '/guide/development/api-examples' },
      { text: '📚学习', link: '/guide/study/preparatory' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      "/guide/study": examinationsSidebar,
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
