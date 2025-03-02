<template>
  <div class="zero-collapse-item" :class="{'is-disabled':disabled}">
    <div class="zero-collapse-item-header" @click="onClick">
      <div class="zero-collapse-item-title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="zero-collapse-item-icon" :class="{active}">
        <zeroIcon color="#666" name="chevron-right"></zeroIcon>
      </div>
    </div>
    <transition name="collapse" v-on="transitionEvent">
      <div v-show="active" class="zero-collapse-item-wrap">
        <div class="zero-collapse-item-content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import {inject, computed} from 'vue';
import zeroIcon from "../icon/zeroIcon.vue";

const {activeNames, clickHandler} = inject('collapse');


defineOptions({
  name: 'zeroCollapseItem'
})

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: ''
  }
});
const onClick = () => {
  if (props.disabled) return;
  clickHandler(props.name);
};
// 是否为激活打开面板
const active = computed(() => {
  if (Array.isArray(activeNames.value)) {
    return activeNames.value.includes(props.name);
  }
  return activeNames.value === props.name;
})
// 动画处理
const transitionEvent = {
  beforeEnter(el) {
    el.style.height = '0px';
    el.style.opacity = 0;
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`;
    el.style.opacity = 1;
  },
  afterEnter(el) {
    el.style.height = '';
    el.style.opacity = '';
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`;
    el.style.opacity = 1;
  },
  leave(el) {
    el.style.height = '0px';
    el.style.opacity = 0;
  },
  afterLeave(el) {
    el.style.height = '';
    el.style.opacity = '';
  }
}
</script>

<style scoped lang="scss">
.zero-collapse-item {
  border-top: 1px solid #ebeef5;
  padding: 0 10px;
  background-color: white;

  .zero-collapse-item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    cursor: pointer;
    user-select: none;

    .zero-collapse-item-title {
      font-weight: 500;
    }

    .zero-collapse-item-icon {
      transition: transform 0.3s ease;

      &.active {
        transform: rotate(90deg);
      }
    }
  }
  .zero-collapse-item-wrap{
    overflow: hidden;
  }
  .zero-collapse-item-content {
    padding-bottom: 15px;
  }
}

//.collapse-enter-from,
//.collapse-leave-to {
//  opacity: 0;
//}

.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.5s ease;
}


</style>