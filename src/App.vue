<template>
  <div class="container">
    <!--    按钮-->
    <!--    <zero-button round :highlight="false" ref="button">按钮1</zero-button>-->
    <!--    <zero-button  >按钮2</zero-button>-->
    <!--    <zero-button disabled bgColor="pink" color="red">按钮</zero-button>-->
    <!--    <zero-button  bgColor="rgba(255,0,0)" color="blue">按钮</zero-button>-->

    <!--    滑块-->
    <!--    <zeroSlider :min-value="0" :disabled="disabled" :max-value="100" v-model="num"-->
    <!--                @change="(value)=>{console.log(value)}"></zeroSlider>-->
    <!--    <zeroSlider :min-value="0"  :disabled="disabled" :max-value="100" v-model="num"-->
    <!--                ></zeroSlider>-->
    <!--        <zero-button   @click="disabled=!disabled">按钮</zero-button>-->

    <!--        tooltip-->
    <!--        <zeroTooltip content="展示内容" trigger="click"  position="bottom" ref="tooltip">-->
    <!--          <zero-button>按钮</zero-button>-->
    <!--          <template #content>展示插槽内容</template>-->
    <!--        </zeroTooltip>-->
    <!--icon-->
    <!--    <font-awesome-icon :icon="['fas', 'user-secret']" />-->
    <!--    <font-awesome-icon :icon="['fas', 'house']" />-->
    <!--    <zeroIcon color="red" size="2x" name="user-secret"></zeroIcon>-->
    <!--    <zeroIcon color="blue" name="check"></zeroIcon>-->
    <!--    switch开关-->
    <!--        <zeroSwitch active-text="打开了" disabled in-active-text="关闭了" v-model="value"></zeroSwitch>-->
    <!--        <zeroSwitch active-text="打开了" :in-active-value="0" :active-value="50"  in-active-text="关闭了" v-model="value"></zeroSwitch>-->
    <!--    collapse-->
    <!--    <div style="width: 200px;height: 400px">-->
    <!--      <zeroCollapse v-model="value">-->
    <!--        <zeroCollapseItem title="标题1" name="a">-->
    <!--          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, sed?</div>-->
    <!--        </zeroCollapseItem>-->
    <!--        <zeroCollapseItem title="标题2" name="b">-->
    <!--          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, sed?</div>-->
    <!--        </zeroCollapseItem>-->
    <!--      </zeroCollapse>-->
    <!--    </div>-->
    <!--    dropdown-->
    <!--        <zeroDropDown :options="opt">-->
    <!--          <zero-button>点击展示下拉菜单</zero-button>-->
    <!--        </zeroDropDown>-->
    <!--    消息提示-->
    <!--        <zeroMessage message="lorem 12321312"></zeroMessage>-->
    <!--    <zero-button   @click="createMessage">按钮</zero-button>-->
    <!--    瀑布流布局-->
    <!--    <zeroWaterfall>-->
    <!--      <zeroWaterfallItem v-for="(src,index) of list" :key="index">-->
    <!--        <img :src="src" alt="">-->
    <!--        <div class="text">-->
    <!--          <span>Lorem ipsum.</span>-->
    <!--        </div>-->
    <!--      </zeroWaterfallItem>-->
    <!--    </zeroWaterfall>-->
    <!--    分页器-->
    <!--    <zeroPagination @pageChange="pageChange" @pageSizeChange="pageSizeChange"  :max-show="15"-->
    <!--                    :page-size="20" :total-count="test"></zeroPagination>-->
    <!--    输入框-->
    <!--    <zeroInput v-model="value" clear>-->
    <!--    </zeroInput>-->
    <!--    &lt;!&ndash;  日历&ndash;&gt;-->
    <!--    <zeroCalendar v-model="value"></zeroCalendar>-->
    <!--    轮播图-->
    <!--        <zeroSwiper :count="imgList.length">-->
    <!--          <zeroSwiperItem v-for="(src,index) in imgList" :key="index">-->
    <!--            <img :src="src" alt="">-->
    <!--          </zeroSwiperItem>-->
    <!--        </zeroSwiper>-->
    <!--    <ul v-scroll-load:[disabled]="load" :scroll-distance="20" class="list">-->
    <!--      <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>-->
    <!--    </ul>-->
    <!--    select-->
    <!--    <zeroSelect :options="opt" multiple v-model="value"></zeroSelect>-->
    <!--    upload-->
<!--    <zeroUpload></zeroUpload>-->
    <!--    虚拟滚动-->
    <!--    <zeroVirtualList v-model="virtualList"-->
    <!--                     class="scroll"-->
    <!--                     :item-height="40"-->
    <!--    >-->
    <!--      <template #default="{item}">-->
    <!--        <div class="scroll-item">{{ item }}</div>-->
    <!--      </template>-->
    <!--    </zeroVirtualList>-->
  </div>
</template>

<script setup>
import {onMounted, ref, watch, reactive, onBeforeMount, shallowReactive, shallowRef} from 'vue';

// 虚拟滚动
// const virtualList = reactive(Array.from({length: 100000}, (_, index) => index));

// 滑块测试
// const num = ref(50);
// watch(() => num.value, (value) => {
//   console.log(value);
// })
// const disabled = ref(true);
//
// tooltip测试
// const visible = ref(false);
// const tooltip = ref(null);
// onMounted(()=>{
//   tooltip.value.togglePopper();
// })
// switch测试
// const value = ref(0);
// 折叠面板测试
// const value = ref([]);
// 下拉菜单
// const opt = reactive([
//   {
//     label: '菜单1',
//     disabled: false,
//     value: 1
//   },
//   {
//     label: '菜单2',
//     disabled: false,
//     value: 2
//   },
//   {
//     label: '菜单3',
//     disabled: true,
//     value: 3
//   }
// ]);
// message
// function createMessage(){
//   message({message:'hello world',duration:2500});
// }
// 瀑布流
const list = reactive([
  'src/imgs/1.webp',
  'src/imgs/2.webp',
  'src/imgs/3.webp',
  'src/imgs/4.webp',
  'src/imgs/5.webp',
  'src/imgs/6.webp',
  'src/imgs/7.webp',
  'src/imgs/8.webp',
  'src/imgs/9.webp',
  'src/imgs/1.webp',
  'src/imgs/2.webp',
  'src/imgs/3.webp',
  'src/imgs/4.webp',
  'src/imgs/5.webp',
  'src/imgs/6.webp',
  'src/imgs/7.webp',
  'src/imgs/8.webp',
  'src/imgs/9.webp',
  'src/imgs/1.webp',
  'src/imgs/2.webp',
  'src/imgs/3.webp',
  'src/imgs/4.webp',
  'src/imgs/5.webp',
  'src/imgs/6.webp',
  'src/imgs/7.webp',
  'src/imgs/8.webp',
  'src/imgs/9.webp',
]);
// 分页器
// const test = ref(1000);
// onMounted(() => {
//   setTimeout(() => {
//     test.value = 20000;
//     console.log(1)
//   }, 2000)
// })
//
// function pageChange(value) {
//   // console.log(value)
// }
//
// function pageSizeChange(value) {
//   // console.log(value)
// }
// 输入框
// const value = ref('1231');
// watch(() => value.value, (value) => {
//   console.log(value)
// })
// 日历
// const value = ref('');
// 轮播图
// const imgList = reactive([
//   'src/imgs/1.webp',
//   'src/imgs/2.webp',
//   'src/imgs/3.webp',
//   'src/imgs/4.webp',
// ])
// 无限滚动
// const count = ref(10);
// const disabled = ref(false);
// const load = () => {
//   if (count.value >= 20) {
//     disabled.value = true;
//     return;
//   }
//   count.value += 4
// }

// select
// const value = ref([1]);
// const opt = reactive([
//   {
//     label: '菜单1',
//     disabled: false,
//     value: 1
//   },
//   {
//     label: '菜单2',
//     disabled: false,
//     value: 2
//   },
//   {
//     label: '菜单3',
//     disabled: true,
//     value: 3
//   }
// ]);

</script>
<style lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list {
  height: 300px;
  width: 200px;
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: auto;
  overscroll-behavior: none;

  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--bg-color);
    margin: 10px;
    color: var(--font-color);
  }
}

.scroll {
  height: 400px;
  width: 200px;

  .scroll-item {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--border-color);
  }
}

</style>