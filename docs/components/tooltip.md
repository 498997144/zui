<script setup>
import zeroTooltip from "@/tooltip/zeroTooltip.vue";
import zeroButton from "@/button/zeroButton.vue";
</script>

## 基本使用

 <zeroTooltip content="提示内容" trigger="click" position="top">
      <zero-button>点击方式</zero-button>
      <template #content></template>
 </zeroTooltip>

```vue

<template>
  <zeroTooltip content="提示内容" trigger="click" position="top">
    <zero-button>点击方式</zero-button>
    <template #content></template>
  </zeroTooltip>
</template>
```

## 鼠标移入展示

 <zeroTooltip content="提示内容" trigger="mouseenter" position="top">
      <zero-button>鼠标移入</zero-button>
      <template #content>显示插槽内容</template>
 </zeroTooltip>  

```vue

<template>
  <zeroTooltip content="提示内容" trigger="mouseenter" position="top">
    <zero-button>鼠标移入</zero-button>
    <template #content>显示插槽内容</template>
  </zeroTooltip>
</template>
```

## 属性

|    属性名    |  说明   |               可选值                |  默认值  |   类型    |
|:---------:|:-----:|:--------------------------------:|:-----:|:-------:|
|  content  | 展示的内容 |                -                 |   -   | String  |
| placement | 展示位置  | 'top', 'right', 'bottom', 'left' |  top  | String  |
|  trigger  | 触发方式  |        click, mouseenter         | click | String  |
|  visible  | 是否显示  |                -                 | false | Boolean |

## 插槽

|   插槽名   |         说明         |
|:-------:|:------------------:|
| default | Tooltip 触发 & 引用的元素 |
| content |       自定义内容        |

## 导出

|      名称      |    类型    |       说明       |
|:------------:|:--------:|:--------------:|
| togglePopper | Function | 打开和关闭tooltip方法 |
