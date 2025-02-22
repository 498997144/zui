<script setup>
import {ref} from 'vue';
import zeroDropDown from "@/dropdown/zeroDropDown.vue";
import zeroButton from "@/button/zeroButton.vue";
const opt = ref([
  {
    label: '菜单1',
    disabled: false,
    value:1
  },
  {
    label: '菜单2',
    disabled: false,
    value:2
  },
  {
    label: '菜单3',
    disabled: true,
    value:3
  }
]);
</script>

## 基本使用

<div style="height: 200px">
<zeroDropDown :options="opt">
      <zero-button>点击展示下拉菜单</zero-button>
</zeroDropDown>
</div> 

```vue

<template>
  <zeroDropDown :options="opt">
    <zero-button>点击展示下拉菜单</zero-button>
  </zeroDropDown>
</template>
<script setup>
  import {ref} from 'vue';

  const opt = ref([
    {
      label: '菜单1',
      disabled: false,
      value: 1
    },
    {
      label: '菜单2',
      disabled: false,
      value: 2
    },
    {
      label: '菜单3',
      disabled: true,
      value: 3
    }
  ]);
</script>
```

## dropdown属性

|         属性名         |  说明  | 可选值 |  默认值   |   类型   |
|:-------------------:|:----:|:---:|:------:|:------:|
|       options       | 菜单选项 |  -  |   []   | Array  |
|    placement        |  位置  |  'top' ， 'top-start' ， 'top-end' ， 'bottom' ， 'bottom-start' ， 'bottom-end' ， 'left' ， 'left-start' ， 'left-end' ， 'right' ， 'right-start' ， 'right-end'   | bottom | String |
