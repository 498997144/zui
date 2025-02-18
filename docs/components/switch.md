<script setup>
import zeroSwitch from "@/switch/zeroSwitch.vue";
import {ref} from 'vue';
const value = ref(0);
</script>

## 基本使用

<zeroSwitch active-text="打开了" :in-active-value="0" :active-value="50"  in-active-text="关闭了" v-model="value"></zeroSwitch>

```vue

<template>
  <zeroSwitch active-text="打开了" :in-active-value="0" :active-value="50" in-active-text="关闭了"
              v-model="value"></zeroSwitch>
</template>
<script setup>
  import {ref} from 'vue';
  const value = ref(0);
</script>
```

## 属性

|         属性名          |   说明   |    可选值     |     默认值     |           类型          |
|:--------------------:|:------:|:----------:|:-----------:|:---------------------:|
| v-model / modelValue | 双向绑定的值 |     -      |    true     | String/Number/Boolean |
|       disabled       |  是否禁用  | true/false |    false    |        Boolean        |
|     activeValue      |  打开的值  |     -      |    true     |        String         |     
|    inActiveValue     |  关闭的值  |     -      |    false    |        String         |
|      activeText      | 打开的文本  |     -      |      开      |        String         |
|     inActiveText     | 关闭的文本  |     -      |      关      |        String         |
|     activeColor      | 打开的颜色  |     -      |   #8cc5ff   |        String         |        
|    inActiveColor     | 关闭的颜色  |     -      |      #dcdfe6       |        String         |



