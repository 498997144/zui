<template>
  <div :class="['zero-switch', {disabled}]" ref="switchSlider">
    <span
        :class="['switch-text',{'is-checked':switchValue === activeValue}]">{{ switchValue === activeValue ? activeText : inActiveText }}</span>
    <div class="switch-button" ref="switchBtn"></div>
    <input type="checkbox" @change="onChange" ref="inputRef" :disabled="disabled"/>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useSwitch} from './index.js';

const props = defineProps({
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true,
  },
  inActiveValue: {
    type: [Boolean, String, Number],
    default: false
  },
  activeText: {
    type: String,
    default: '开',
  },
  inActiveText: {
    type: String,
    default: '关'
  },
  activeColor: {
    type: String,
    default: '#8cc5ff'
  },
  inActiveColor: {
    type: String,
    default: '#dcdfe6'
  },
});
const emit = defineEmits(['update:modelValue', 'change']);
const switchBtn = ref(null);
const switchSlider = ref(null);
const inputRef = ref(null);
const {
  onChange, switchValue
} = useSwitch(props, emit, switchBtn, switchSlider, inputRef);
</script>

<style scoped lang="scss">
.zero-switch {
  position: relative;
  min-width: 40px;
  height: 18px;
  border-radius: 9px;
  cursor: pointer;
  display: inline-flex;
  &.disabled {
    pointer-events: none;
    background-color: v-bind(inActiveColor)!important;
  }

  .switch-text {
    font-size: 12px;
    user-select: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 4px 0 18px;
    &.is-checked {
      padding: 0 18px 0 4px;
    }
  }

  .switch-button {
    position: absolute;
    left: 2px;
    top: 2px;
    height: 14px;
    width: 14px;
    background-color: white;
    border-radius: 50%;
    transition: left 0.3s ease;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}
</style>