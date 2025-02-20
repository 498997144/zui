<script setup>
import zeroButton from "@/button/zeroButton.vue";
import message from "@/message/index.js";
function createMessage(){
  message({message:'hello world',duration:2500});
}
</script>

## 基本使用

<zero-button @click="createMessage">点击弹出消息</zero-button>

```vue

<template>
  <zero-button @click="createMessage">点击弹出消息</zero-button>
</template>
<script setup>
  import message from "@/message/index.js";
  function createMessage() {
    message({message: 'hello world', duration: 2500});
  }
</script>

```


## 属性

|    属性名    |       说明       |                  可选值                  |   默认值   |       类型       |
|:---------:|:--------------:|:-------------------------------------:|:-------:|:--------------:|
|  message  | 展示的内容(支持Vnode) |                   -                   |    -    | String / Vnode |
| duration |  展示时长(0为不关闭)   |                   -                   |  2500   |     Number     |
|  close  |    是否显示关闭按钮    |                   -                   |  true   |    Boolean     |
|  type  |      样式类型      | 'info', 'success', 'warning', 'error' | success |     String     |


