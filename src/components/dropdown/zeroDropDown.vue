<template>
  <div class="zero-dropdown">
    <div class="zero-dropdown-trigger" ref="triggerRef" @click="isVisible = !isVisible">
      <slot></slot>
    </div>
    <div class="zero-dropdown-popup" ref="popupRef" id="tooltip" v-show="isVisible">
      <div data-popper-arrow id="arrow"></div>
      <div class="zero-dropdown-menu">
        <div class="zero-dropdown-menu-item"
             :class="{disabled:item.disabled}"
             v-for="item in options"
             :key="item.label"
             @click="onMenuClick(item)">
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useDropdown} from './index.js';

const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  placement:{
    type:String,
    default: 'bottom',
  }
})
//
const emit = defineEmits(['click']);
//
const triggerRef = ref(null);
const popupRef = ref(null);
const {isVisible, onMenuClick} = useDropdown(props, emit, triggerRef, popupRef);
</script>

<style scoped lang="scss">
.zero-dropdown {
  width: fit-content;
  .zero-dropdown-popup {
    //transition: all 0.3s ease;
    background-color: white;
    color: var(--font-color);
    width: fit-content;
    height: fit-content;
    white-space: nowrap;
    box-shadow: 0 2px 10px 0 var(--shadow-color);

    .zero-dropdown-menu {
      .zero-dropdown-menu-item {
        padding: 10px 15px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background-color: #ecf5ff;
          color: var(--bg-color);
        }

        &.disabled {
          color: var(--disabled-color);
          cursor: not-allowed;

          &:hover {
            background-color: white;
            color: var(--disabled-color);
          }
        }
      }
    }
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