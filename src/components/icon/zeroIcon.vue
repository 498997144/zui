<template>
  <i class="zero-icon" :style="{color}" v-bind="$attrs">
    <font-awesome-icon v-bind="$props" :icon="name"/>
  </i>
  <slot></slot>
</template>

<script setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

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