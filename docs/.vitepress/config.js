import {defineConfig} from 'vitepress';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': '../../src/components',
      }
    },
  },
  title: "ZUI",
  description: "个人学习项目",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: '主页', link: '/'},
      {text: '示例', link: '/components/button'}
    ],

    sidebar: [
      {
        text: '文档示例',
        items: [
          {text: '按钮', link: '/components/button'}
        ]
      },
      {
        text: 'Examples',
        items: [
          {text: 'Markdown Examples', link: '/markdown-examples'},
          {text: 'Runtime API Examples', link: '/api-examples'}
        ]
      }
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    ]
  }
});
