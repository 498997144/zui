<template>
  <div class="z-tooltip">
    <div class="z-tooltip-trigger" ref="triggerRef">
      <slot></slot>
    </div>
    <div class="z-tooltip-popup" v-show="isVisible">
      <slot name="content">
        <span v-html="content"></span>
        <div class="triangle-box" ref="triangleRef"></div>
      </slot>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useTooltip} from './index.js';

const props = defineProps({
  content: String,
  visible: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: 'top',
    validator: (value) => {
      return ['top', 'right', 'bottom', 'left'].includes(value);
    }
  },
  trigger: {
    type: String,
    default: 'mouseenter',
    validator: (value) => {
      return ['mouseenter', 'click'].includes(value);
    }
  },
})
//
const emit = defineEmits(['update:visible', 'update:position']);
//
const triggerRef = ref(null);
const triangleRef = ref(null);
const {isVisible} = useTooltip(props, emit, triggerRef, triangleRef);

</script>

<style scoped lang="scss">
.z-tooltip {
  position: relative;

  .z-tooltip-trigger {

  }

  .z-tooltip-popup {
    transition: all 0.3s ease;
    position: absolute;
    background-color: black;
    color: white;
    padding: 5px 10px;
    width: fit-content;
    transform: translateY(calc(-100% - 10px));
    left: 0;
    top: 0;

    span {
      text-wrap: nowrap;
    }

    .triangle-box {
      width: 10px;
      height: 10px;
      position: absolute;
      z-index: -1;
      display: flex;
      justify-content: center;
      align-items: center;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        z-index: -1;
        border-radius: 2px;
        background-color: black;
        border: 1px solid black;
        transform: rotate(45deg);
      }
    }


  }
}
</style>