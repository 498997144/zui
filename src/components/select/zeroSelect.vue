<template>
  <div class="zero-select" @mouseleave="onMouseleave" @mouseenter="onMouseEnter">
    <zeroDropDown :options="options" @click="onClick" ref="dropDownRef"
                  :multiple="multiple"
                  :selected-value="modelValue">
      <zeroInput :clear="clear"
                 readonly
                 :modelValue="value"
                 @clear="onClear"
                 ref="inputRef">
        <template #append>
          <div v-show="showDownIcon">
            <zero-icon size="1x"
                       class="down-icon"
                       name="chevron-down"
                       color="#999"></zero-icon>
          </div>
        </template>
      </zeroInput>
    </zeroDropDown>
  </div>
</template>

<script setup>
import {ref, onMounted, computed, toRaw, watch} from 'vue';
import zeroIcon from '../icon/zeroIcon.vue';
import zeroInput from '../input/zeroInput.vue';
import zeroDropDown from '../dropdown/zeroDropDown.vue';

const props = defineProps({
  modelValue: {
    type: [Array, String, Number, Boolean],
    default: () => '',
    validator(value, props) {
      if (props.multiple) {
        return Array.isArray(value);
      }
      return !Array.isArray(value);
    }
  },
  clear: {
    type: Boolean,
    default: true
  },
  options: {
    type: Array,
    default: () => []
  },
  multiple: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue']);

const inputRef = ref(null);
const dropDownRef = ref(null);
const showDownIcon = ref(true);

function onClick(data) {
  if (props.multiple) {
    let value = null;
    if (data.isActive) {
      // value = props.modelValue;
      // value.push(data.value);
      emit('update:modelValue', [...props.modelValue, data.value]);
      // props.modelValue.push(data.value);
    } else {
      value = props.modelValue.filter(item => item !== data.value);
      emit('update:modelValue', value);
      // props.modelValue.splice(props.modelValue.indexOf(data.value))
    }
  } else {
    emit('update:modelValue', data.value);
  }
}

function onClear() {
  dropDownRef.value.hidePopup();
  emit('update:modelValue', props.multiple ? [] : '');
}

function onMouseEnter() {
  if (props.multiple) {
    if (props.modelValue.length) {
      inputRef.value.showClearIcon();
      showDownIcon.value = false;
    } else {
      inputRef.value.hideClearIcon();
      showDownIcon.value = true;
    }
  } else {
    if (props.modelValue) {
      inputRef.value.showClearIcon();
      showDownIcon.value = false;
    } else {
      inputRef.value.hideClearIcon();
      showDownIcon.value = true;
    }
  }
}

function onMouseleave() {
  inputRef.value.hideClearIcon();
  showDownIcon.value = true;
}

onMounted(() => {
  inputRef.value.hideClearIcon();
})

const value = computed(() => {
  if (props.multiple) {
    return props.modelValue.join(',')
  }
  return props.modelValue;
});
</script>

<style scoped lang="scss">
.zero-select {
  :deep(.down-icon) {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>