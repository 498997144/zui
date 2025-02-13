<template>
  <div class="container">
    <!--    按钮-->
    <!--    <zero-button round :highlight="false" ref="button">按钮1</zero-button>-->
    <!--    <zero-button  >按钮2</zero-button>-->
    <!--    <zero-button disabled bgColor="pink" color="red">按钮</zero-button>-->
    <!--    <zero-button  bgColor="rgba(255,0,0)" color="blue">按钮</zero-button>-->

    <!--    滑块-->
    <!--    <zeroSlider :min-value="0" :disabled="disabled" :max-value="100" v-model="num"-->
    <!--                @change="(value)=>{console.log(value)}"></zeroSlider>-->
    <!--    <zeroSlider :min-value="0"  :disabled="disabled" :max-value="100" v-model="num"-->
    <!--                ></zeroSlider>-->
    <!--    <zero-button   @click="disabled=!disabled">按钮</zero-button>-->

    <!--    tooltip-->
<!--    <zeroTooltip content="展示内容" trigger="click" position="top">-->
<!--      <zero-button>按钮</zero-button>-->
<!--      <template #content>展示插槽内容</template>-->
<!--    </zeroTooltip>-->
<!--icon-->
<!--    <font-awesome-icon :icon="['fas', 'user-secret']" />-->
<!--    <font-awesome-icon :icon="['fas', 'house']" />-->
    <zeroIcon color="red" size="2x" name="user-secret"></zeroIcon>
    <zeroIcon color="blue" name="check"></zeroIcon>
  </div>
</template>

<script setup>
import {onMounted, ref, watch} from 'vue';
import zeroButton from "./components/button/zeroButton.vue";
import zeroSlider from "./components/slider/zeroSlider.vue";
import zeroTooltip from "./components/tooltip/zeroTooltip.vue";
import zeroIcon from "./components/icon/zeroIcon.vue";
// 滑块测试
// const num = ref(50);
// watch(() => num.value, (value) => {
//   console.log(value);
// })
// const disabled = ref(true);
//
// tooltip测试
// const visible = ref(false);
</script>
<style lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>