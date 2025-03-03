import {defineConfig} from 'vitepress';
import path from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/zui/',
  vite: {
    // 配置文档路径别名
    resolve: {
      alias: {
        '@': path.join(process.cwd(), '/src/components'),
        '@dir': path.join(process.cwd(), '/src/directives'),
        '@img': path.join(process.cwd(), '/src/imgs'),
        '@style': path.join(process.cwd(), '/src/style'),
      }
    },
  },
  title: "ZERO-UI",
  description: "学习项目",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: '主页', link: '/components/slider'},
      {text: '文档', link: '/components/slider'}
    ],

    sidebar: [
      {
        text: '组件',
        items: [
          {text: '滑块', link: '/components/slider'},
          {text: '提示框', link: '/components/tooltip'},
          {text: '图标', link: '/components/icon'},
          {text: '开关', link: '/components/switch'},
          {text: '折叠面板', link: '/components/collapse'},
          {text: '选择器', link: '/components/select.md'},
          {text: '消息提示', link: '/components/message'},
          {text: '瀑布流布局', link: '/components/waterfall'},
          {text: '按钮', link: '/components/button'},
          {text: '分页', link: '/components/pagination'},
          {text: '输入框', link: '/components/input'},
          {text: '下拉菜单', link: '/components/dropdown'},
          {text: '日历', link: '/components/calendar.md'},
          {text: '轮播图', link: '/components/swiper.md'},
          {text: '文件上传', link: '/components/upload.md'},
          {text: '虚拟滚动列表', link: '/components/virtualList.md'},
        ]
      },
      {
        text: '指令',
        items: [
          {text: '滚动加载更多', link: '/components/scroll-load.md'},
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
      // '../../src/style/var.scss'
      '@style/var.scss'
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
