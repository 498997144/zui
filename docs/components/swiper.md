<script setup>
import {reactive} from 'vue';
import zeroSwiper from "@/swiper/zeroSwiper.vue";
import zeroSwiperItem from "@/swiperitem/zeroSwiperItem.vue";
import imgpath1 from '@img/1.webp';
import imgpath2 from '@img/2.webp';
import imgpath3 from '@img/3.webp';
import imgpath4 from '@img/4.webp';
const imgList = reactive([
  imgpath1,imgpath2,imgpath3,imgpath4
])
</script>

## 基本使用

<div style="height: 300px">
<zeroSwiper :count="imgList.length" autoPlay :delay="2000">
    <zeroSwiperItem v-for="(src,index) in imgList" :key="index">
      <img :src="src" alt="">
    </zeroSwiperItem>
  </zeroSwiper>
</div>

```vue

<template>
  <zeroSwiper :count="imgList.length" autoPlay :delay="2000">
    <zeroSwiperItem v-for="(src,index) in imgList" :key="index">
      <img :src="src" alt="">
    </zeroSwiperItem>
  </zeroSwiper>
</template>
<script setup>
  import {reactive} from 'vue';
  import imgpath1 from '@img/1.webp';
  import imgpath2 from '@img/2.webp';
  import imgpath3 from '@img/3.webp';
  import imgpath4 from '@img/4.webp';

  const imgList = reactive([
    imgpath1, imgpath2, imgpath3, imgpath4
  ])
</script>

```

## 属性

|     属性名      |    说明    | 可选值 |  默认值  |   类型    |
|:------------:|:--------:|:---:|:-----:|:-------:|
|    count     |  指示点个数   |  -  |   -   | Number  |
|    delay     |   轮播间隔   |  -  | 2000  | Number  |
|   autoPlay   |  是否自动轮播  |  -  | false | Boolean |
| currentIndex | 当前显示到第几张 |  -  |   0   | Number  |
|  showButton  |  是否显示按钮  |  -  | true  | Boolean |


