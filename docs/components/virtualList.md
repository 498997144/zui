<script setup>
import { reactive} from 'vue';
import zeroVirtualList from "@/virtualList/zeroVirtualList.vue";
const virtualList = reactive(Array.from({length: 100000}, (_, index) => index));
</script>
<style>
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

## 基本使用

<zeroVirtualList v-model="virtualList" class="scroll" :item-height="40">
    <template #default="{item}">
        <div class="scroll-item">{{ item }}</div>
    </template>
</zeroVirtualList>

```vue

<template>
  <zeroVirtualList v-model="virtualList" class="scroll" :item-height="40">
    <template #default="{item}">
      <div class="scroll-item">{{ item }}</div>
    </template>
  </zeroVirtualList>
</template>
<script setup>
  import {reactive} from 'vue';

  const virtualList = reactive(Array.from({length: 100000}, (_, index) => index));
</script>
<style>
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
```

## 属性

|    属性名     |  说明   | 可选值 | 默认值 |   类型   |
|:----------:|:-----:|:---:|:---:|:------:|
| modelValue | 数据列表  |  -  |  -  | Array  |
| itemHeight | 数据项高度 |  -  |  -  | Number |

## 插槽
|    名称     |  说明   |
|:----------:|:-----:|
| default | 默认插槽 |
