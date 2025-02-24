<template>
  <div class="zero-swiper"
       @mouseleave="autoPlay" @mouseenter="stopPlay">
    <div class="zero-swiper-container" ref="swiperContainerRef">
      <slot></slot>
    </div>
    <div class="dot" ref="dotContainerRef">
      <div class="dot-item"
           @click="toggle(index - 1,undefined,true)"
           :data-index="index - 1"
           v-for="index in count"
           :class="{active:index - 1 === activeIndex}"
           :key="index"
      >
      </div>
    </div>
    <div class="prev-button" v-if="showButton" @click="prevFunc">
      <zeroIcon name="angles-left" size="xs" color="#eee"></zeroIcon>
    </div>
    <div class="next-button" v-if="showButton" @click="nextFunc">
      <zeroIcon name="angles-right" size="xs" color="#eee"></zeroIcon>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {useSwiper} from "./index.js";
import zeroIcon from '../icon/zeroIcon.vue';

const props = defineProps({
  loop: {
    type: Boolean,
    default: true
  },
  delay: {
    type: Number,
    default: 2000,
  },
  autoPlay: {
    type: Boolean,
    default: false
  },
  currentIndex: {
    type: Number,
    default: 0
  },
  showButton: {
    type: Boolean,
    default: true
  },
  count: {
    type: Number,
    required: true,
  }
});
const swiperContainerRef = ref(null);
const dotContainerRef = ref(null);
const {
  prevFunc,
  nextFunc,
  autoPlay,
  stopPlay,
  activeIndex,
  toggle
} = useSwiper(props, swiperContainerRef, dotContainerRef)
</script>

<style scoped lang="scss">
.zero-swiper {
  overflow: hidden;
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
  .zero-swiper-container {
    height: 100%;
    display: flex;
    transition: transform 0.5s linear;
  }

  .dot {
    position: absolute;
    bottom: 15px;
    display: flex;
    left: 50%;
    transform: translateX(-50%);

    .dot-item {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: #cccccc;
      margin: 0 14px;
      transition: all 0.5s ease-in-out;

      &:hover {
        cursor: pointer;
      }

      &.active {
        background-color: #007aff;
        transform: scale(1.4);
      }
    }
  }

  .prev-button, .next-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.15);
    width: 30px;
    height: 30px;
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    text-align: center;
    line-height: 30px;
    color: #007aff;
    font-size: 25px;
    font-weight: bold;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
  }

  .next-button {
    right: 15px;
  }

  .prev-button {
    left: 15px;
  }
}
</style>