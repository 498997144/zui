<script setup>
import { reactive} from 'vue';
import zeroWaterfall from "@/waterfall/zeroWaterfall.vue";
import zeroWaterfallItem from "@/waterfallitem/zeroWaterfallItem.vue";
import imgpath1 from '@img/1.webp';
import imgpath2 from '@img/2.webp';
import imgpath3 from '@img/3.webp';
import imgpath4 from '@img/4.webp';
import imgpath5 from '@img/5.webp';
import imgpath6 from '@img/6.webp';
import imgpath7 from '@img/7.webp';
import imgpath8 from '@img/8.webp';
import imgpath9 from '@img/9.webp';

const list = reactive([
  imgpath1,
  imgpath2,
  imgpath3,
  imgpath4,
  imgpath5,
  imgpath6,
  imgpath7,
  imgpath8,
  imgpath9,
  imgpath1,
  imgpath2,
  imgpath3,
  imgpath4,
  imgpath5,
  imgpath6,
  imgpath7,
  imgpath8,
  imgpath9,
  imgpath1,
  imgpath2,
  imgpath3,
  imgpath4,
  imgpath5,
  imgpath6,
  imgpath7,
  imgpath8,
  imgpath9,
]);
</script>

## 基本使用

<zeroWaterfall>
      <zeroWaterfallItem v-for="(src,index) of list" :key="index">
        <img :src="src" alt="">
        <div class="text">
          <span>Lorem ipsum.</span>
        </div>
      </zeroWaterfallItem>
</zeroWaterfall>

```vue

<template>
  <zeroWaterfall>
    <zeroWaterfallItem v-for="(src,index) of list" :key="index">
      <img :src="src" alt="">
      <div class="text">
        <span>Lorem ipsum.</span>
      </div>
    </zeroWaterfallItem>
  </zeroWaterfall>
</template>
<script setup>
  import {reactive} from 'vue';

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
</script>

```

## 属性

|     属性名      |             说明              | 可选值 | 默认值 |   类型   |
|:------------:|:---------------------------:|:---:|:---:|:------:|
|    topGap    |           元素顶部间距            |  -  | 10  | Number |
|     gap      | 元素左右间距(传递了固定列宽时,自动计算,gap失效) |  -  | 10  | Number |
| columnWidth  |         列宽(没有传自动计算)         |  -  |  0  | Number |
| columnsCount |       列数(传递列宽,列数自动计算)       |  -  |  5  | Number |


