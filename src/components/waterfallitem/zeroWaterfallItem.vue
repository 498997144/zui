<template>
  <div class="zero-waterfall-item">
    <slot>

    </slot>
  </div>
</template>

<script setup>
defineOptions({
  name: 'zeroWaterfallItem'
})
</script>

<style scoped lang="scss">
.zero-waterfall-item {
  position: absolute;
  width: var(--col-width);
  left: 0;
  top: 0;
  /*transition: left 0.6s ease-out, top 0.6s ease-out; !*过渡不要加宽高,会影布局时获取元素的宽高*!*/
  transition: all 0.3s ease-in-out; /*过渡所有属性的情况需js处理transitionend事件*/
  /*过渡会导致宽高获取不准确*/
  /*多个属性触发多次*/
  :deep(img) {
    width: 100%;
    vertical-align: bottom;
  }
}
</style>