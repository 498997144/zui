<script setup>
import {ref,reactive} from 'vue';
import zeroSelect from "@/select/zeroSelect.vue";
const value = ref([1]);
const opt = reactive([
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

## 基本使用

<zeroSelect :options="opt" multiple v-model="value"></zeroSelect>

```vue

<template>
  <zeroSelect :options="opt" multiple v-model="value"></zeroSelect>
</template>
<script setup>
  import {ref, reactive} from 'vue';

  const value = ref([1]);
  const opt = reactive([
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

## 属性

|        属性名         |   说明   | 可选值 | 默认值 |         类型          |
|:------------------:|:------:|:---:|:---:|:-------------------:|
| v-model/modelValue | 双向绑定的值 |  -  |  -  | Number/String/Array |
|      options       | 选择器选项  |  -  |  -  |        Array        |
|      multiple      |  是否多选  |  -  |  -  |       Boolean       |

