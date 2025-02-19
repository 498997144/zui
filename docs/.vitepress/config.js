import {defineConfig} from 'vitepress';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    // 配置文档路径别名
    resolve: {
      alias: {
        '@': '../../src/components',
        '@style': '../../src/style',
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
          {text: '按钮', link: '/components/button'},
          {text: '滑块', link: '/components/slider'},
          {text: '提示框', link: '/components/tooltip'},
          {text: '图标', link: '/components/icon'},
          {text: '开关', link: '/components/switch'},
          {text: '折叠面板', link: '/components/collapse'},
          {text: '下拉菜单', link: '/components/dropdown'},
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
    ],
    styles: [
      // 添加自定义样式
      '../../src/style/var.scss'
    ],
    //开启本地搜索
    search: {
      provider: "local"
    },
    //修改侧边栏导航的标题
    outline: {
      label: "页面导航"
    },
    // 修改文档页脚的文字
    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  }
});
