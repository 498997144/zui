<template>
  <div class="zero-waterfall" ref="containerRef">
    <slot>

    </slot>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useWaterfall} from './useWaterfall.js'

defineOptions({
  name: 'zeroWaterfall'
})

const props = defineProps({
  topGap: {
    type: Number,
    default: 10,
  },
  gap:{
    type: Number,
    default: 10,
  },
  columnWidth: {
    type: Number,
    default: 0,
  },
  columnsCount: {
    type: Number,
    default: 5,
  }
})
const containerRef = ref(null);
useWaterfall(props,containerRef);
</script>

<style scoped lang="scss">
.zero-waterfall {
  position: relative;
  --col-width: auto;
  box-sizing: border-box;
  min-height: 1000px; /*最小高度的设置，有时会出滚动条*/
  overflow: hidden; /*需要隐藏,有时会出滚动条*/
  opacity: 0; /*不透明度处理最开始没有布好局,页面混乱的情况*/
  transition: opacity 1s ease-out;
}
</style>