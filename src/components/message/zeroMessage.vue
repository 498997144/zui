<template>
  <transition name="message" v-on="transitionEvent">
    <div class="zero-message"
         v-show="visible"
         ref="messageRef"
         :class="{[`zero-message-${type}`]:type}">
      <div class="zero-message-content">
        <renderVnode :vNode="message"></renderVnode>
        <!--      <component v-if="isVNode(message)" :is="message"></component>-->
        <!--      <span>{{message}}</span>-->
      </div>
      <div class="icon-box" @click="visible = !visible">
        <zero-icon name="xmark" color="white" v-if="close"></zero-icon>
      </div>
    </div>
  </transition>
</template>

<script setup>
import {isVNode, nextTick, onMounted, ref, watch} from 'vue';
import renderVnode from '../../common/renderVnode.js';
import zeroIcon from '../icon/zeroIcon.vue';
import {messageList} from './index.js';

const props = defineProps({
  message: {
    type: [String, Object],
    default: '',
    validator: (value) => {
      return isVNode(value) || typeof value === 'string';
    }
  },
  duration: {
    type: Number,
    default: 2500,
  },
  close: {
    type: Boolean,
    default: true
  },
  type: {
    type: String,
    default: 'success',
    validator: (value) => {
      return ['info', 'success', 'warning', 'error'].includes(value);
    }
  },
})
const visible = ref(false);
const messageRef = ref(null);
const startTimer = () => {
  if (props.duration === 0) return;
  setTimeout(() => {
    visible.value = false;
    // 展示完成后删除dom
    setTimeout(() => {
      messageRef.value.remove();
    },300);
  }, props.duration)
}
onMounted(() => {
  visible.value = true;
  startTimer();
});
// watch(() => visible.value, (newValue) => {
//   if (!newValue) {
//     // 展示完成后删除dom
//     messageList.pop();
//     messageRef.value.style.top = `${20}px`
//     messageRef.value.remove();
//     console.log(messageList)
//   }
// })
// 动画处理
const transitionEvent = {
  beforeEnter(el) {
    el.style.top = `${(parseInt(el.style.top) || 20) - 20}px`
    // console.log(el.style.top);
  },
  enter(el) {
    el.offsetWidth;
    el.style.top = `${parseInt(el.style.top) + 20}px`;
  },
  // afterEnter(el) {
  //   el.style.top = `${parseInt(el.style.top)}px`;
  //   // el.style.top = '0px';
  // },
  // beforeLeave(el) {
  //   el.style.top = `${el.style.top}px`;
  // },
  leave(el) {
    el.style.top = '20px';
    // el.style.top = `${parseInt(el.style.top) - 20}px`;
  },
  // afterLeave(el) {
  //   // el.style.top = '0px';
  //   // el.style.top = `${(parseInt(el.style.top) || 20) - 20}px`;
  // }
}
</script>

<style scoped lang="scss">
.zero-message {
  padding: 10px 15px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  //top: 20px;
  //transition: top 0.3s ease;
  background-color: white;
  z-index: 1;
  .zero-message-content {
    color: #67c23a;
  }

  .icon-box {
    margin-left: 10px;
    cursor: pointer;
    border-radius: 50%;
    background-color: #67c23a;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.message-enter-active,
.message-leave-active {
  transition: top 0.3s ease;
}
</style>