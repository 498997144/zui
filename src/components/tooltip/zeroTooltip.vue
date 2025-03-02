<template>
  <div class="z-tooltip">
    <div class="z-tooltip-trigger" ref="triggerRef">
      <slot></slot>
    </div>
    <div class="z-tooltip-popup" id="tooltip" v-show="isVisible" ref="popupRef">
      <div  data-popper-arrow id="arrow"></div>
      <slot name="content">
        <span v-html="content"></span>
      </slot>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {usePopper} from './index.js';

defineOptions({
  name: 'zeroTooltip',
})

const props = defineProps({
  content: String,
  visible: {
    type: Boolean,
    default: false,
  },
  placement: {
    type: String,
    default: 'bottom',
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
const emit = defineEmits(['update:visible']);
//
const triggerRef = ref(null);
const popupRef = ref(null);
const {isVisible, togglePopper} = usePopper(props, emit, triggerRef, popupRef);


defineExpose({
  togglePopper,
})

</script>

<style scoped lang="scss">
.z-tooltip {
  //position: relative;
  width: fit-content;

  .z-tooltip-trigger {
  }

  .z-tooltip-popup {
    //transition: all 0.3s ease;
    //position: absolute;
    background-color: black;
    color: white;
    padding: 5px 10px;
    width: fit-content;
    height: fit-content;
    white-space: nowrap;
    //transform: translateY(calc(-100% - 10px));
    //left: 0;
    //top: 0;
    z-index: 1;
    span {
      text-wrap: nowrap;
    }

    //.triangle-box {
    //  width: 10px;
    //  height: 10px;
    //  position: absolute;
    //  z-index: -1;
    //  display: flex;
    //  justify-content: center;
    //  align-items: center;
    //
    //  &::before {
    //    content: "";
    //    position: absolute;
    //    width: 100%;
    //    height: 100%;
    //    display: block;
    //    z-index: -1;
    //    border-radius: 2px;
    //    background-color: black;
    //    border: 1px solid black;
    //    transform: rotate(45deg);
    //  }
    //}
  }

  //
  #arrow,
  #arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
    z-index: -1;
  }

  #arrow {
    visibility: hidden;
  }

  #arrow::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }

  //
  #tooltip[data-popper-placement^='top'] > #arrow {
    bottom: -4px;
  }

  #tooltip[data-popper-placement^='bottom'] > #arrow {
    top: -4px;
  }

  #tooltip[data-popper-placement^='left'] > #arrow {
    right: -4px;
  }

  #tooltip[data-popper-placement^='right'] > #arrow {
    left: -4px;
  }

}
</style>