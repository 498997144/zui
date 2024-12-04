<template>
  <div class="container">
    <zero-button round :highlight="false" ref="button">按钮1</zero-button>
    <zero-button  >按钮2</zero-button>
    <zero-button disabled bgColor="pink" color="red">按钮</zero-button>
    <zero-button  bgColor="rgba(255,0,0)" color="blue">按钮</zero-button>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import zeroButton from "./components/button/zeroButton.vue";
</script>
<style scoped lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>