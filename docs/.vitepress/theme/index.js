import DefaultTheme from 'vitepress/theme';
// 引入全局样式,否则文档样式不生效
import '../../../src/style/var.scss';
// 引入图标库,否则图标不显示
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);
export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    // 在这里你可以添加任何需要全局注册的内容
  }
};