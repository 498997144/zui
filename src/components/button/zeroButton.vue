<template>
  <button
      class="z-button"
      ref="buttonRef"
      :class="[buttonType,{disabled},{circle}, {round}]"
      :style="{'--color':color,'--bgColor':bgColor || colorType}"
  >
    <i :icon="icon" v-if="prepend && icon"></i>
    <slot></slot>
    <i :icon="icon" v-if="icon && !prepend"></i>
  </button>
</template>

<script setup>
import {ref} from "vue";
import {useLightenColor, useChangeShape} from './index.js';

const props = defineProps({
  buttonType: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'normal',
  },
  highlight: {
    type: Boolean,
    default: true,
  },
  bgColor: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  round: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  prepend: {
    type: Boolean,
    default: false,
  },
});
// 圆角按钮和圆形只能选一个
if (props.round && props.circle) {
  throw new TypeError('圆角按钮和圆形只能选一个');
}

// 按钮颜色
const bgColorType = {
  default: '#b1b3b8',
  warning: '#e6a23c',
  danger: '#f56c6c',
};
const colorType = bgColorType[props.buttonType];

//
const buttonRef = ref(null);
const {paddingX, paddingY} = useChangeShape(buttonRef, props);
useLightenColor(buttonRef, props);

/**
 * @description button html元素
 */
defineExpose({
  buttonRef,
});
</script>

<style scoped lang="scss">
.z-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  user-select: none;
  border: none;
  cursor: pointer;
  // 根据尺寸类型设置padding
  padding: v-bind(paddingY) v-bind(paddingX);
  background-color: var(--bgColor);
  color: var(--color, white);
  // 圆形样式
  &.circle {
    padding: 0;
    border-radius: 50%;
  }

  //// 默认颜色
  //&.default {
  //  background-color: #b1b3b8;
  //}
  //
  //// 警告颜色
  //&.warning {
  //  background-color: #e6a23c;
  //}
  //
  //// 危险颜色
  //&.danger {
  //  background-color: #f56c6c;
  //}

  //  禁用样式
  &.disabled {
    background-color: var(--disabled-bg-color);
    color: var(--disabled-color);
    pointer-events: none;
  }
}
</style>
