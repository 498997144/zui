import {createApp} from 'vue';
import App from "./App.vue";
import 'normalize.css';
import "@/style/var.scss";
import "@/style/global.scss";
import scrollLoad from "@/directives/scrollLoad.js";
// fontawesome
import {library} from '@fortawesome/fontawesome-svg-core';
// import {faUserSecret} from '@fortawesome/free-solid-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const app = createApp(App);
app.directive('scrollLoad', scrollLoad);
// app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');


// 将所有 solid 图标添加到库中
// import * as fas from '@fortawesome/free-solid-svg-icons';
// Object.keys(fas).forEach((key) => {
//   if (key !== 'fas' && key !== 'prefix') {
//     library.add(fas[key]);
//   }
// });