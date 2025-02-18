<script setup>
import {ref} from 'vue';
import zeroSlider from "@/slider/zeroSlider.vue";
import zeroButton from "@/button/zeroButton.vue";
const num = ref(50);
const num1 = ref(1500);
const bool = ref(true);
</script>

## 基本使用
<div style="margin: 10px 0;">{{num}}</div>
<zero-slider styler="margin:10px 0;" v-model="num"></zero-slider>
  
```vue
<template>
  <zero-slider v-model="num"></zero-slider>
</template>
<script setup>
  const num = ref(50);
</script>
```

## 禁用状态
<div style="margin: 10px 0;">
<span >{{num}}</span>
<zero-button   @click="bool=!bool">点击禁用启用</zero-button></div>
<zero-slider :disabled="bool" styler="margin:10px 0;" v-model="num"></zero-slider>

```vue
<template>
  <zero-button   @click="bool=!bool">点击禁用启用</zero-button>
  <zero-slider  disabled v-model="num"></zero-slider>
</template>
<script setup>
  const num = ref(50);
  const bool = ref(true);
</script>
```

## 使用最大值和最小值限制范围
<div style="margin: 10px 0;">{{num1}}</div>
<zero-slider :max-value="3000" :min-value="800"  
v-model="num1"></zero-slider>

```vue
<template>
  <zero-slider :max-value="3000" :min-value="800"
               v-model="num1"></zero-slider>
</template>
<script setup>
  const num1 = ref(1500);
</script>
```

## 使用格式化函数
<div style="margin: 10px 0;">{{num1}}</div>
<zero-slider :max-value="3000" :min-value="800"  
:format="(value)=>parseFloat(value.toPrecision(8))"
v-model="num1"></zero-slider>

```vue
<template>
  <zero-slider 
      :max-value="3000" :min-value="800" 
      :format="(value)=>parseFloat(value.toPrecision(8))" 
      v-model="num1">
  </zero-slider>
</template>
<script setup>
  const num1 = ref(1500);
</script>
```

## 属性

|    属性名     |      说明       |     可选值     |  默认值  |    类型    |
|:----------:|:-------------:|:-----------:|:-----:|:--------:|
| modelValue | v-model绑定的当前值 |      -      |   0   |  Number  |
|  minValue  |      最小值      |      -      |   0   |  Number  |
|  maxValue  |      最大值      |      -      |  100  |  Number  |
|  disabled  |     是否禁用      | true, false | false | Boolean  | 
|   format   | 格式化函数,默认返回整数  |      -      |   -   | Function |

## 事件
|    事件名     |         说明          |       参数       | 
|:----------:|:-------------------:|:--------------:|
| change | 鼠标抬起时触发和鼠标在滑块上按下时触发 | 拖动和点击结束后的值 |