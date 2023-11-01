import { defineConfig } from 'vitepress'

const date = new Date()

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SubIT Handbook",
  description: "Basic Handbooks",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/subitlab/handbook' },
      { icon: 'web', link: 'https://subit.org.cn'}
    ],
    footer:{
      message:`Last Updated on ${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
      copyright: 'Copyright © 2018-present SubIT, Pkuschool'
    }
  }
})
