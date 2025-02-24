import {onMounted, onUnmounted, ref} from 'vue';

function throttle(fn, delay = 0) {
  let flag = true;
  return function () {
    if (flag) {
      flag = false;
      fn.apply(this, arguments);
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}


export const useSwiper = (props, swiperContainerRef, dotContainerRef) => {
  // 切换轮番图方法
  const maxCount = props.count - 1;
  let currentIndex = ref(props.currentIndex);
  let swiperContainer = swiperContainerRef.value;
  let doContainer = dotContainerRef.value;
  const autoPlayFlag = props.autoPlay;

  function toggle(index = currentIndex.value, auto = autoPlayFlag, dotClick = false) {
    if (auto && !dotClick) {
      index++;
    }
    const isFirst = index < 0;
    const isLast = index > maxCount;
    const toggleIndex = isLast ? maxCount : (isFirst ? 0 : index);
    currentIndex.value = toggleIndex;
    // 无缝轮播方案2,不复制元素方案
    // 1.上一张往左走,到达0的时候,把最后一个元素放到最前面
    if (isFirst) {
      swiperContainer.style.transitionDuration = "0s";
      swiperContainer.prepend(swiperContainer.lastElementChild);
      swiperContainer.style.transform = `translate3d(-${(toggleIndex + 1) * 100}%,0,0)`;
      swiperContainer.offsetWidth;
    }
    // 2.下一张往右走,到达最大数的时候,把第一个元素放到最后面
    if (isLast) {
      swiperContainer.style.transitionDuration = "0s";
      swiperContainer.appendChild(swiperContainer.firstElementChild);
      swiperContainer.style.transform = `translate3d(-${(maxCount - 1) * 100}%,0,0)`;
      swiperContainer.offsetWidth;
    }
    //
    requestAnimationFrame(() => {
      swiperContainer.style.transitionDuration = "0.5s";
      swiperContainer.style.setProperty("transform", `translate3d(-${toggleIndex * 100}%,0,0)`);
    });
  }

  // 添加点击事件上一张和下一张
  const prevFunc = throttle(() => {
    currentIndex.value--;
    toggle(undefined, false);
  }, 600);
  const nextFunc = throttle(() => {
    currentIndex.value++;
    toggle(undefined, false);
  }, 600);


  // 自动轮播和停止
  let cancelId = null;

  function autoPlay() {
    if (!autoPlayFlag) return;
    cancelId = setInterval(() => {
      toggle(undefined, true);
    }, props.delay);
  }

  function stopPlay() {
    if (!autoPlayFlag) return;
    cancelId && clearInterval(cancelId);
  }


  const visibilityChange = () => {
    if (document.visibilityState === "visible") {
      autoPlay();
    } else {
      stopPlay();
    }
  };

  onMounted(() => {
    swiperContainer = swiperContainerRef.value;
    doContainer = dotContainerRef.value;
    autoPlay();
    // 页面可见性
    document.addEventListener("visibilitychange", visibilityChange);
  });

  onUnmounted(() => {
    document.removeEventListener("visibilitychange", visibilityChange);
  });

  return {
    prevFunc, nextFunc, autoPlay, stopPlay,
    activeIndex: currentIndex, toggle
  };
};