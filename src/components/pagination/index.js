import {onMounted, reactive, watch} from "vue";

// 防抖函数
function debounce(fn, delay = 3000) {
  let timer = null;
  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  };
}

// 根据范围动态创建页码
function createPager(currentPage, maxShow, pageCount, container) {
  if (pageCount === 0) {
    return;
  }
  // 获取范围
  let start = currentPage - Math.floor((maxShow) / 2) + 1;
  let end = currentPage + Math.floor((maxShow) / 2);
  if (start < 1) {
    end -= start - 1;
    start = 1;
  }
  if (end > pageCount) {
    start -= end - pageCount;
    end = pageCount;
  }
  // start需要再次判断
  if (start < 1) {
    start = 1;
  }
  const fragment = document.createDocumentFragment();
  // 不能直接使用start循环,后续会使用start进行判断
  for (let index = start; index <= end; index++) {
    const div = document.createElement("div");
    div.classList.add("page-item", "item");
    div.dataset.index = index;
    div.textContent = index;
    fragment.appendChild(div);
    // 处理页码只有一页的情况
    if (pageCount === 1) {
      break;
    }
  }

  // 第一个页码和最后一个页码始终显示
  if (start > 1) {
    const pageNumberStart = document.createElement("div");
    pageNumberStart.classList.add("page-item", "item");
    pageNumberStart.dataset.index = 1;
    pageNumberStart.textContent = 1;
    fragment.insertBefore(pageNumberStart, fragment.firstElementChild);
  }
  if (end < pageCount) {
    const pageNumberEnd = document.createElement("div");
    pageNumberEnd.classList.add("page-item", "item");
    pageNumberEnd.dataset.index = pageCount;
    pageNumberEnd.textContent = pageCount;
    fragment.appendChild(pageNumberEnd);
  }
  // 添加到页面中
  container.replaceChildren(fragment);
  // 给第当前页添加选中样式
  for (let item of container.children) {
    if (parseInt(item.dataset.index) === currentPage) {
      item.classList.add("active");
      break;
    }
  }
}

export const userPagination = (props, emit, containerRef, prevBtnRef, nextBtnRef, jumpBtnRef, pageSizeInputRef, jumpInputRef) => {

  // 按钮的禁用和启用
  function toggleDisable() {
    options.currentPage === 1 ? buttons.at(0).classList.add("disabled") : buttons.at(0).classList.remove("disabled");
    options.currentPage === options.pageCount ? buttons.at(1).classList.add("disabled") : buttons.at(1).classList.remove("disabled");
  }

  // 页码数量变化
  function onPageSizeChange(e) {
    const value = parseInt(e.target.value);
    if (value > options.totalCount || value < 1 || value === options.pageSize) return;
    if (Object.is(NaN, value)) return;
    // 更新页码个数pageCount
    options.pageCount = Math.ceil(options.totalCount / value);
    // 原有起始结束范围点
    const start = options.currentPage * options.pageSize;
    // 计算新的页码位置,新的页码结束点位置约等于原有起始点的位置,
    const newPage = Math.ceil(start / value);
    // 新页码小于1或者大于总页数,则设置当前页为1或者最大页数
    newPage < 1 ? options.currentPage = 1 : options.currentPage = newPage > options.pageCount ? options.pageCount : newPage;
    // 更新分页大小
    options.pageSize = value;
    layout(options, container);
    // 调用对应的回调函数,需要发送请求重新获取新的数据,因为数据是分页的获取到的
    options.onPageChange && options.onPageChange(options.currentPage);
    options.onPageSizeChange && options.onPageSizeChange(options.pageSize);
  }

  const _onPageSizeChange = debounce(onPageSizeChange, 800);

  function layout(options, container) {
    const pageCount = Math.ceil(options.totalCount / options.pageSize);
    options.pageCount = pageCount;
    let currentPage = options.currentPage || 1;
    // 根据范围动态创建页码,处理数据过多创建节点过多的问题
    createPager(currentPage, options.maxShow, pageCount, container);
    toggleDisable();
    // 设置分页大小
    pageSizeInput.value = options.pageSize;
    // 绑定页码事件 绑定到父元素上,减少事件监听数量
    container.addEventListener("click", function (e) {
      const target = e.target;
      if (!target.hasAttribute("data-index")) return;
      const index = parseInt(target.dataset.index);
      if (index === options.currentPage) {
        return;
      }
      options.currentPage = index;
      currentPage = index;
      toggleDisable();
      options.onPageChange && options.onPageChange(options.currentPage);
      createPager(currentPage, options.maxShow, options.pageCount, container);
    });
  }

  // 参数
  const options = reactive({
    pageSize: props.pageSize,
    totalCount: props.totalCount,
    maxShow: props.maxShow,
    currentPage: props.currentPage,
    onPageChange(currentPage) {
      emit('pageChange', currentPage);
    },
    onPageSizeChange(currentPageSize) {
      emit('pageSizeChange', currentPageSize);
    },
  });

  // 按钮组
  let container = null;
  let jumpBtn = null;
  let buttons = null;
  let pageSizeInput = null;
  let jumpInput = null;

  // 调用布局函数
  onMounted(() => {
    container = containerRef.value;
    buttons = [prevBtnRef.value, nextBtnRef.value];
    jumpBtn = jumpBtnRef.value;
    pageSizeInput = pageSizeInputRef.value;
    jumpInput = jumpInputRef.value;
    layout(options, container);
    // 绑定按钮点击事件
    buttons.forEach(btn => {
      btn.addEventListener("click", function (e) {
        // 不能使用并和或判断,逻辑错误,左右两边拉扯
        // if(currentPage !== 1 && currentPage !== pageCount){
        // }

        // 1.先做加减操作
        // e.target.classList.contains("next") ? currentPage++ : currentPage--;
        // // 后做最小值和最大值界限判断
        // if(currentPage < 1){
        //   currentPage = 1;
        // }
        // if(currentPage > pageCount){
        //   currentPage = pageCount;
        // }
        // 2.分开判断
        const classList = e.target.classList;
        const {currentPage, pageCount, maxShow} = options;
        if (classList.contains("next")) {
          if (currentPage === pageCount) {
            return;
          }
          options.currentPage++;
        } else {
          if (currentPage === 1) {
            return;
          }
          options.currentPage--;
        }
        toggleDisable();
        options.onPageChange && options.onPageChange(options.currentPage);
        createPager(options.currentPage, maxShow, pageCount, container);
      });
    });
    // 绑定跳转到事件
    jumpBtn.addEventListener("click", function () {
      const value = parseInt(jumpInput.value);
      if (Object.is(NaN, value)) return;
      const {currentPage, pageCount, maxShow} = options;
      if (value > pageCount || value < 1 || currentPage === value) return;
      options.currentPage = value;
      toggleDisable();
      options.onPageChange && options.onPageChange(options.currentPage);
      createPager(options.currentPage, maxShow, pageCount, container);
      jumpInput.value = '';
    },);
    // 绑定页码数量变化事件
    pageSizeInput.addEventListener("input", _onPageSizeChange);
  });

  // 总数变化重新布局
  watch(() => props.totalCount, (value) => {
    options.totalCount = value;
    layout(options, container);
  });

  return {
    options
  };
};



