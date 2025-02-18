<script setup>
import zeroIcon from "@/icon/zeroIcon.vue";
</script>

## 基本使用
<zeroIcon color="red" size="2x" name="user-secret"></zeroIcon>

```vue
<template>
  <zeroIcon color="red" name="user-secret"></zeroIcon>
</template>
```

## 显示插槽内容
<zeroIcon color='blue' name="check">默认插槽</zeroIcon>

```vue
<template>
  <zeroIcon color='blue' size="2x" name="check">默认插槽</zeroIcon>
</template>
```


## 属性

|  属性名  |  说明   |                                                可选值                                                | 默认值 |    类型    |
|:-----:|:-----:|:-------------------------------------------------------------------------------------------------:|:---:|:--------:|
| color | 图标颜色  |                                             同css颜色属性                                              |  -  |  String  |
| size  | 图标大小  | ''2xs'   'xs' 'sm'    'lg'  'xl'  '2xl'  '1x'  '2x'  '3x'  '4x'  '5x'  '6x'  '7x' '8x' '9x' '10x' |  -  |   String |
| name  | 图标名字  |                            参考图标库https://fontawesome.com/search?ic=free                            |  -  |  String  |

## 插槽
|插槽名|   说明   |
|:---:|:------:|
|default| 展示其它元素 |


