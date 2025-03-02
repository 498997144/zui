import 'normalize.css';
import "@/style/var.scss";
import "@/style/global.scss";
// 函数组件
import message from "./components/message/index.js";
// 组件
import zeroUpload from '@/components/upload/zeroUpload.vue';
import zeroIcon from '@/components/icon/zeroIcon.vue';
import zeroCalendar from '@/components/calendar/zeroCalendar.vue';
import zeroCollapse from '@/components/collapse/zeroCollapse.vue';
import zeroCollapseItem from '@/components/collapseitem/zeroCollapseItem.vue';
import zeroDropDown from '@/components/dropdown/zeroDropDown.vue';
import zeroInput from '@/components/input/zeroInput.vue';
import zeroMessage from '@/components/message/zeroMessage.vue';
import zeroPagination from '@/components/pagination/zeroPagination.vue';
import zeroSlider from '@/components/slider/zeroSlider.vue';
import zeroSwitch from '@/components/switch/zeroSwitch.vue';
import zeroSwiper from '@/components/swiper/zeroSwiper.vue';
import zeroSwiperItem from '@/components/swiperitem/zeroSwiperItem.vue';
import ZeroButton from '@/components/button/ZeroButton.vue';
import zeroSelect from '@/components/select/zeroSelect.vue';
import zeroTooltip from '@/components/tooltip/zeroTooltip.vue';
import zeroVirtualList from '@/components/virtualList/zeroVirtualList.vue';
import zeroWaterfall from '@/components/waterfall/zeroWaterfall.vue';
import zeroWaterfallItem from '@/components/waterfallitem/zeroWaterfallItem.vue';
// 指令
import scrollLoad from "@/directives/scrollLoad.js";
//
const components = [
  zeroUpload, zeroIcon, zeroCalendar, zeroCollapse, zeroCollapseItem, zeroDropDown,
  zeroInput, zeroMessage, zeroPagination, zeroSlider, zeroSwitch, zeroSwiper, zeroSwiperItem,
  ZeroButton, zeroSelect, zeroTooltip, zeroVirtualList, zeroWaterfall, zeroWaterfallItem,
];
//
const directives = [scrollLoad];
const install =  (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
  directives.forEach((directive) => {
    app.directive(directive.name, directive);
  });
};


export default {
  install,
};

export {
  message,
  ZeroButton,
  zeroCalendar,
  zeroCollapse,
  zeroCollapseItem,
  zeroDropDown,
  zeroIcon,
  zeroInput,
  zeroMessage,
  zeroPagination,
  zeroSelect,
  zeroSlider,
  zeroSwiper,
  zeroSwiperItem,
  zeroSwitch,
  zeroTooltip,
  zeroUpload,
  zeroVirtualList,
  zeroWaterfall,
  zeroWaterfallItem
};

// const install = async (app) => {
//   // 全局注册指令
//   const directives = import.meta.glob('@/directives/**/*.js');
//   for (const path in directives) {
//     const module = await directives[path]();
//     const name = path.split('/').at(-1).split('.').at(0);
//     app.directive(name, module.default);
//   }
//   // 全局注册所有组件
//   const modules = import.meta.glob('@/components/**/*.vue');
//   for (const path in modules) {
//     const module = await modules[path]();
//     const name = path.split('/').at(-1).split('.').at(0);
//     app.component(name, module.default);
//   }
// };

// 单个导出
// const components = {};
// const modules = import.meta.glob('@/components/**/*.vue');
// for (const path in modules) {
//   const module = await modules[path]();
//   const name = path.split('/').at(-1).split('.').at(0);
//   components[name] = module.default;
// }
// // console.log(components);


// export const ZeroButton = components.zeroButton;
// export const zeroCalendar = components.zeroCalendar;
// export const zeroCollapse = components.zeroCollapse;
// export const zeroCollapseItem = components.zeroCollapseItem;
// export const zeroDropDown = components.zeroDropDown;
// export const zeroIcon = components.zeroIcon;
// export const zeroInput = components.zeroInput;
// export const zeroMessage = components.zeroMessage;
// export const zeroPagination = components.zeroPagination;
// export const zeroSelect = components.zeroSelect;
// export const zeroSlider = components.zeroSlider;
// export const zeroSwiper = components.zeroSwiper;
// export const zeroSwiperItem = components.zeroSwiperItem;
// export const zeroSwitch = components.zeroSwitch;
// export const zeroTooltip = components.zeroTooltip;
// export const zeroUpload = components.zeroUpload;
// export const zeroVirtualList = components.zeroVirtualList;
// export const zeroWaterfall = components.zeroWaterfall;
// export const zeroWaterfallItem = components.zeroWaterfallItem;

