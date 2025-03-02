<script setup>
import {ref} from 'vue';
import zeroInput from "@/input/zeroInput.vue";
const value = ref('1231');
</script>

## 基本使用

<zeroInput v-model="value" clear></zeroInput>

```vue

<template>
  <zeroInput v-model="value" clear></zeroInput>
</template>
<script setup>
  import {ref} from 'vue';
  const value = ref('1231');
</script>

```

## 属性

|        属性名         |    说明    | 可选值 |  默认值  |      类型       |
|:------------------:|:--------:|:---:|:-----:|:-------------:|
| v-model/modelValue |  双向绑定的值  |  -  |   -   | Number/String |
|        type        | 同input元素 |  -  |   -   |    String     |
|      disabled      |   是否禁用   |  -  |   -   |    Boolean    |
|    placeholder     |   占位文本   |  -  |   -   |    String     |
|       clear        | 是否显示清除按钮 |  -  | false |    Boolean    |
|    showPassword    | 是否显示密码图标 |  -  | false |    Boolean    |


