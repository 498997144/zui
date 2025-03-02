<template>
  <i class="zero-icon" :style="{color}" v-bind="$attrs">
    <font-awesome-icon v-bind="$props" :icon="name"/>
  </i>
  <slot></slot>
</template>

<script setup>
import {library} from '@fortawesome/fontawesome-svg-core';
// import {fas} from '@fortawesome/free-solid-svg-icons';
import {faCheck, faUserSecret, faChevronRight,faChevronDown,faAnglesLeft,faAnglesRight,faXmark,
faEyeSlash,faEye
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
// library.add(fas);
library.add(faCheck, faUserSecret, faChevronRight,faChevronDown,faAnglesLeft,faAnglesRight,faXmark,
faEyeSlash,faEye
);


defineOptions({
  name: 'zeroIcon'
})

const props = defineProps({
  color: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: '1x'
  },
  name: {
    type: String,
    default: '',
  }
});
</script>

<style scoped lang="scss">

</style>