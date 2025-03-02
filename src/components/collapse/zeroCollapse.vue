<template>
  <div class="zero-collapse">
    <slot></slot>
  </div>
</template>

<script setup>
import {ref, provide} from 'vue';


defineOptions({
  name: 'zeroCollapse'
})

const props = defineProps({
  modelValue: {
    type: [String, Array],
    default: ()=>[],
  },
  accordion: {
    type: Boolean,
    default: false
  }
});
const activeNames = ref(props.modelValue);
// 点击更新modelValue,打开关闭面板
const clickHandler = (name) => {
  if (props.accordion) {
    activeNames.value = activeNames.value === name ? '' : name;
  } else {
    if (activeNames.value.includes(name)) {
      activeNames.value = activeNames.value.filter(item => item !== name);
    } else {
      activeNames.value.push(name);
    }
  }
  emit('update:modelValue', activeNames.value);
  emit('change', activeNames.value);
};

provide('collapse',{
  clickHandler,
  activeNames
});

const emit = defineEmits(['update:modelValue','change']);
</script>

<style scoped lang="scss">
.zero-collapse {
  border-bottom: 1px solid #ebeef5;
}
</style>