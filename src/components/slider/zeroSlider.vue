<template>
  <div class="z-slider" ref="sliderRef">
    <div ref="sliderButtonRef" :class="['slider-button',{disabled}]"></div>
    <div class="slider-progress" ref="sliderProgressRef"></div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useSlider} from './index.js';

const props = defineProps({
  minValue: {
    type: Number,
    default: 0,
  },
  maxValue: {
    type: Number,
    default: 100
  },
  modelValue: {
    type: Number,
    default: 0
  },
  disabled: {
    type: Boolean,
    default: false
  },
  format: {
    type: Function,
    default: (value) => {
      return parseInt(value);
    }
  },
  showValue:{
    type: Boolean,
    default: true,
  }
})
//事件
const emit = defineEmits(['update:modelValue', 'change']);
//
const sliderRef = ref(null);
const sliderButtonRef = ref(null);
const sliderProgressRef = ref(null);
useSlider(props, sliderRef, sliderButtonRef, sliderProgressRef, emit);

</script>

<style scoped lang="scss">
.z-slider {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background-color: #ece7e7;
  position: relative;
  text-align: center;
  user-select: none;
  .slider-button {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 0px 5px var(--shadow-color);
    left: 0;
    top: calc(50% - 10px);
    transition: scale 0.3s ease;
    user-select: none;
    &:hover {
      scale: 1.2;
      cursor: grab;
    }

    //抓取
    &.grabbing {
      cursor: grabbing;
    }

    //禁用样式
    &.disabled {
      cursor: not-allowed;
      border-color: var(--disabled-border-color);
      +.slider-progress {
        background-color:var(--disabled-bg-color);
      }
    }
  }

  .slider-progress {
    background-color: var(--bg-color);
    height: 8px;
    width: 0;
    border-radius: 4px 0 0 4px;
    user-select: none;
  }
}
</style>