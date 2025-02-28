<template>
  <div class="zero-dropdown" ref="dropDownRef">
    <div class="zero-dropdown-trigger" ref="triggerRef" @click="isVisible = !isVisible">
      <slot></slot>
    </div>
    <div class="zero-dropdown-popup" ref="popupRef" id="tooltip" v-show="isVisible">
      <div data-popper-arrow id="arrow"></div>
      <div class="zero-dropdown-menu">
        <div class="zero-dropdown-menu-item"
             :class="{disabled:item.disabled,active:item.isActive}"
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
import {ref, watch} from 'vue';
import {useDropdown} from './index.js';

const props = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  placement: {
    type: String,
    default: 'bottom',
  },
  selectedValue: {
    default: ''
  },
  multiple: {
    type: Boolean,
    default: false
  }
})
//
const emit = defineEmits(['click']);
//
const triggerRef = ref(null);
const popupRef = ref(null);
const dropDownRef = ref(null);
const {isVisible, onMenuClick} = useDropdown(props, emit, triggerRef, popupRef, dropDownRef);

function setActiveClass() {
  if (Array.isArray(props.selectedValue)) {
    props.options.forEach((item) => {
      item.isActive = false;
      props.selectedValue.forEach(value => {
        if (item.value === value) {
          item.isActive = true;
        }
      })
    })
  } else {
    const item = props.options.find(item => item.value === props.selectedValue);
    item && (item.isActive = true);
  }
}

watch(() => props.selectedValue, setActiveClass, {immediate: true})

defineExpose({
  hidePopup() {
    isVisible.value = false;
  },
})
</script>

<style scoped lang="scss">
.zero-dropdown {
  width: fit-content;
  //position: relative;

  .zero-dropdown-popup {
    //transition: all 0.3s ease;
    background-color: white;
    color: var(--font-color);
    //width: 100%;
    height: fit-content;
    white-space: nowrap;
    box-shadow: 0 2px 10px 0 var(--shadow-color);
    z-index: 999;

    .zero-dropdown-menu {
      .zero-dropdown-menu-item {
        padding: 10px 15px;
        cursor: pointer;
        display: flex;
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

        &.active {
          color: var(--active-color);
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