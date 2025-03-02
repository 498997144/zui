<template>
  <div class="zero-virtual-list" ref="containerRef" @scroll="onScroll">
    <div class="scroll-content" ref="contentRef">
      <slot v-for="(item,index) in showList"
            :key="index" :item="item">
      </slot>
    </div>
    <div class="total-height" :style="{height: totalCount * itemHeight + 'px'}"></div>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue';

defineOptions({
  name: 'zeroVirtualList'
})

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  },
  itemHeight: {
    type: Number,
    default: 40
  }
});

const containerRef = ref(null);
const contentRef = ref(null);
// 当前视口的第一个项目索引
const startIndex = ref(0);
// 当前结束索引
const endIndex = ref(0);
// 总长度
const totalCount = computed(() => props.modelValue.length);

// 可视区域展示的数据
const showList = computed(() => {
  return props.modelValue.slice(startIndex.value, endIndex.value);
});


// 计算结索引方法
function calcEndIndex() {
  endIndex.value = Math.min(startIndex.value + Math.ceil(containerRef.value.clientHeight / props.itemHeight), totalCount.value);
}

// 计算初始结整索引
onMounted(() => {
  calcEndIndex();
})

// 滚动时动态修改显示的数据
function onScroll() {
  const container = containerRef.value;
  const scrollTop = container.scrollTop;
  contentRef.value.style.setProperty('transform', `translate3D(0,${scrollTop}px,0)`);
  startIndex.value = Math.floor(scrollTop / props.itemHeight);
  calcEndIndex()
}

</script>

<style scoped lang="scss">
.zero-virtual-list {
  overflow-y: auto;
  border: 1px solid #ccc;
  position: relative;

  .scroll-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
}
</style>