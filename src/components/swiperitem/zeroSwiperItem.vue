<template>
  <div class="zero-swiper-item">
    <slot></slot>
  </div>
</template>

<script setup>
defineOptions({
  name: 'ZeroSwiperItem'
})
</script>

<style scoped lang="scss">
.zero-swiper-item {
  flex: 1 0 100%;
  height: 100%;
  :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
}
</style>