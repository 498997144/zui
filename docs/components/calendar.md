<script setup>
import {ref} from 'vue';
import zeroCalendar from "@/calendar/zeroCalendar.vue";
const value = ref('');
</script>

## 基本使用

<zeroCalendar v-model="value"></zeroCalendar>
<div>当前选中的日期:{{value}}</div>

```vue

<template>
  <zeroCalendar v-model="value"></zeroCalendar>
</template>
<script setup>
  import {ref} from 'vue';

  const value = ref('');
</script>

```

## 属性

|        属性名         |   说明   | 可选值 | 默认值 |   类型   |
|:------------------:|:------:|:---:|:---:|:------:|
| v-model/modelValue | 双向绑定的值 |  -  |  -  | String |



