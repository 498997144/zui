<script setup>
import {ref} from 'vue';
const count = ref(10);
const disabled = ref(false);
const load = () => {
  if (count.value >= 20) {
    disabled.value = true;
    return;
  }
  count.value += 4
}
</script>
<style>
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
</style>

## 基本使用

<ul v-scroll-load:[disabled]="load" :scroll-distance="20" class="list">
      <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
</ul>

```vue

<template>
  <ul v-scroll-load:[disabled]="load" :scroll-distance="20" class="list">
    <li v-for="i in count" :key="i" class="list-item">{{ i }}</li>
  </ul>
</template>
<script setup>
  import {ref} from 'vue';

  const count = ref(10);
  const disabled = ref(false);
  const load = () => {
    if (count.value >= 20) {
      disabled.value = true;
      return;
    }
    count.value += 4
  }
</script>
<style>
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
</style>

```

## 属性

|       属性名       |         说明          | 可选值 | 默认值 |      类型       |
|:---------------:|:-------------------:|:---:|:---:|:-------------:|
| scroll-distance |      滚动到底部的阈值       |  -  | 20  | Number/String |
|    disabled     |       指令绑定的参数       |  -  |  -  |    Boolean    |
|      value      | 指令绑定的数据/滚动到底部时执行此函数 |  -  |  -  |   Function    |


