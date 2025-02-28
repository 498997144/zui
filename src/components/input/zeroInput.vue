<template>
  <div class="zero-input">
    <template v-if="type !== 'textarea'">
      <div class="zero-input-prepend" v-if="$slots.prepend">
        <slot name="prepend">
        </slot>
      </div>
      <input
          class="zero-input-inner"
          v-bind="$attrs"
          ref="inputRef"
          :disabled="disabled"
          :value="modelValue"
          :type="type"
          :placeholder="placeholder"
          @input="onInput"
          @change="emit('change', $event.target.value)"
          @blur="onBlur"
          @focus="onFocus"
      >
      <div class="zero-input-append" v-if="$slots.append">
        <slot name="append"></slot>
      </div>
      <div class="zero-input-clear">
        <zero-icon @click.stop="toggleIconName" size="1x" v-if="showPassword" :name="showIcon ? 'eye-slash' : 'eye'"
                   color="#999"></zero-icon>
        <zero-icon @click.stop="onClear" size="xs" class="clear-icon" v-if="!showPassword  && showClear && modelValue"
                   name="xmark"
                   color="#999"></zero-icon>
      </div>
    </template>
    <template v-if="type === 'textarea'">
       <textarea
           class="zero-input-inner"
           v-bind="$attrs"
           ref="textareaRef"
           :disabled="disabled"
           :value="modelValue"
           :placeholder="placeholder"
           @input="emit('update:modelValue', $event.target.value)"
           @change="emit('change', $event.target.value)"
           @blur="emit('blur', $event)"
           @focus="emit('focus', $event)"
       ></textarea>
    </template>
  </div>
</template>

<script setup>
import zeroIcon from '../icon/zeroIcon.vue';
import {onMounted, ref, getCurrentInstance, computed, nextTick} from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  clear: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue', 'change', 'input', 'focus', 'blur', 'clear']);
const inputRef = ref(null);
const textareaRef = ref(null);

const onClear = () => {
  inputRef.value.focus();
  emit('clear');
  emit('update:modelValue', '');
};
const showClear = ref(props.clear);
const onBlur = (event) => {
  setTimeout(() => {
    showClear.value = false;
  }, 200);
  emit('blur', event);
};
const onFocus = (event) => {
  if (!props.showPassword && props.modelValue) {
    showClear.value = true;
  }
  emit('focus', event);
};
const onInput = (event) => {
  if (props.modelValue) {
    showClear.value = true;
  }
  emit('update:modelValue', event.target.value)
};

const showIcon = ref(false);
const toggleIconName = () => {
  showIcon.value = !showIcon.value;
  inputRef.value.type = showIcon.value ? 'password' : props.type;
};

defineExpose({
  inputRef,
  textareaRef,
  hideClearIcon: () => {
    showClear.value = false;
  },
  showClearIcon: () => {
    showClear.value = true;
  },
});
</script>

<style scoped lang="scss">
.zero-input {
  display: inline-flex;
  align-items: center;
  position: relative;

  .zero-input-inner {
    height: 30px;
    outline: none;
    padding: 0 25px 0 5px;
    border: 1px solid var(--border-color);
    border-radius: 4px;

    &:hover {
      border-color: var(--disabled-border-color);
    }

    &:focus {
      border-color: var(--hover-border-color);
    }
  }

  .zero-input-clear {
    position: absolute;
    right: 6px;
    height: 100%;
    padding: 0 0 0 5px;
    display: flex;
    align-items: center;

    :deep(.clear-icon) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 15px;
      height: 15px;
      border: 1px solid var(--disabled-border-color);
      border-radius: 50%;
      cursor: pointer;
    }
  }
}
</style>