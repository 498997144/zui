<template>
  <div class="zero-pagination">
    <div class="item btn prev" ref="prevBtnRef">上页</div>
    <div class="page-list" ref="containerRef">
    </div>
    <div class="item btn next" ref="nextBtnRef">下页</div>
    <div class="jump-box">
      <input type="text" class="jump-input" ref="jumpInputRef">
      <div class="item btn jump" ref="jumpBtnRef">跳转</div>
    </div>
    <div class="page-size-box">
      <input type="text" class="page-size" ref="pageSizeInputRef">
      <span class="text">条/页</span>
      <div class="total-box" v-show="showTotal">
        <div>共</div>
        <div class="total">{{ options.totalCount }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {userPagination} from "./index.js";

const props = defineProps({
  pageSize: {
    type: Number,
    default: 10
  },
  totalCount: {
    type: Number,
    default: 0,
  },
  maxShow: {
    type: Number,
    default: 6
  },
  currentPage: {
    type: Number,
    default: 1
  },
  showTotal:{
    type:Boolean,
    default: false
  }
})
const emit = defineEmits(['pageChange', 'pageSizeChange']);
const containerRef = ref(null);
const prevBtnRef = ref(null);
const nextBtnRef = ref(null);
const jumpBtnRef = ref(null);
const pageSizeInputRef = ref(null);
const jumpInputRef = ref(null);
const {options} = userPagination(props, emit, containerRef, prevBtnRef, nextBtnRef, jumpBtnRef, pageSizeInputRef, jumpInputRef);
</script>

<style scoped lang="scss">
.zero-pagination {
  display: flex;
  align-items: center;
  width: fit-content;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
  .page-list {
    display: flex;
  }

  :deep(.item) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 30px;
    background: white;
    border: 1px solid #eeeeee;
    margin: 0 5px;
    padding: 0 2px;
    &.active {
      background: var(--bg-color);
      color: white;
    }

    &:hover {
      color: white;
      background: var(--hover-bg-color);
      border-color: #858585;
    }

    &:active {
      background: var(--bg-color);
      color: white;
    }
  }

  .disabled {
    background: var(--disabled-bg-color);
    color: var(--disabled-color);
    pointer-events: none;
  }

  .btn {
    padding: 2px 5px;
  }

  .jump-box, .page-size-box {
    display: flex;
    align-items: center;

    input {
      width: 50px;
      height: 22px;
      outline: 1px solid #eeeeee;
      border: none;
      text-align: center;
      &:focus {
        outline-color: #858585;
      }

      &:hover {
        outline-color: #858585;
      }
    }
  }

  .page-size-box {
    display: flex;

    .total-box {
      display: flex;
      margin-left: 5px;
    }

    .text {
      margin-left: 10px;
    }
  }

}
</style>