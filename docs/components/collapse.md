<script setup>
import zeroCollapse from "@/collapase/zeroCollapse.vue";
import zeroCollapseItem from "@/collapase/zeroCollapseItem.vue";
import {ref} from 'vue';
const value = ref(['a']);
</script>

## 基本使用

<zeroCollapse v-model="value">
        <zeroCollapseItem title="标题1" name="a">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, sed?</div>
        </zeroCollapseItem>
        <zeroCollapseItem title="标题2" name="b">
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, sed?</div>
        </zeroCollapseItem>
</zeroCollapse>

```vue

<template>
  <zeroCollapse v-model="value">
    <zeroCollapseItem title="标题1" name="a">
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, sed?</div>
    </zeroCollapseItem>
    <zeroCollapseItem title="标题2" name="b">
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, sed?</div>
    </zeroCollapseItem>
  </zeroCollapse>
</template>
<script setup>
  import {ref} from 'vue';

  const value = ref(['a']);
</script>
```

## Collapse属性

|         属性名          |   说明    | 可选值 |  默认值  |       类型       |
|:--------------------:|:-------:|:---:|:-----:|:--------------:|
| v-model / modelValue | 双向绑定的值  |  -  |  []   | String / Array |
|      accordion       | 是否手风琴模式 |  -  | false |    Boolean     |

## Collapse事件

|  事件名   |                    说明                    |  
|:------:|:----------------------------------------:|
| change | 	切换当前活动面板，在手风琴模式下其类型是string，在其他模式下是array |

## Collapse-item属性

|  属性名  |   说明    | 可选值 |  默认值  |       类型       |
|:-----:|:-------:|:---:|:-----:|:--------------:|
| name  | 打开关闭的标志 |  -  |  []   | String / Array |
| title |  面板标题   |  -  |  ''   |     String     |
| disabled |  是否禁用   |  -  | false |    Boolean     |