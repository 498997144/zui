import {onMounted, onUnmounted} from 'vue';

function debounce(fn, delay = 3000) {
  let timer = null;
  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  };
}


export const useWaterfall = (props, containerRef) => {

// 有传递固定列宽时需调用
  const calcColumnsCount = (container, columnWidth = props.columnWidth) => {
    // 计算列数
    const columnsCount = Math.floor(container.clientWidth / columnWidth);
    // 计算间隙宽度 = 剩余宽度 / 间隙的数量 (列数 + 1)
    const gap = (container.clientWidth - columnsCount * columnWidth) / (columnsCount + 1);
    return {
      gap, columnsCount
    };
  };

  // 布局逻辑
  const layout = (container, list, columnsCount = props.columnsCount, gap = props.gap, topGap = props.topGap) => {
    // 计算列宽 // 动态列宽布局方式
    const columnWidth = Math.round((container.clientWidth - gap * (columnsCount + 1)) / columnsCount);
    // 通过父元素的自定义属性设置所有子元素的宽度
    container.style.setProperty('--col-width', columnWidth + 'px');
    // 创建数组，用来记录每一列的高度,填充为顶部间隙或者0
    const columnsList = new Array(columnsCount).fill(topGap);
    // 直接遍历
    for (let item of list) {
      const minValue = Math.min(...columnsList);
      const minIndex = columnsList.findIndex(item => item === minValue);
      // 设置left为最小列的列号*列宽加上间隙乘以列号
      item.style.left = `${minIndex * columnWidth + gap * (minIndex + 1)}px`;
      // 设置top为最高度小列号的高度
      item.style.top = `${columnsList[minIndex]}px`;
      // 更新最小列号的高度+间隙
      columnsList[minIndex] += item.offsetHeight + topGap;
    }

    // 设置容器的高度,必须要设置
    const maxValue = Math.max(...columnsList);
    container.style.height = maxValue + 'px';
    container.style.opacity = 1;

  };

  const _layout = debounce(layout, 500);
  const startLayout = (container, list) => {
    if (props.columnWidth) {
      const {columnsCount, gap} = calcColumnsCount(container);
      _layout(container, list, columnsCount, gap);
    } else {
      _layout(container, list);
    }
  };
  onMounted(() => {
    // 初始化
    const container = containerRef.value;
    const list = container.children;
    const imgList = container.querySelectorAll('img');
    startLayout(container, list);
    // 给所有图片绑定事件,防抖调用布局函数
    imgList?.forEach(item => {
      item.addEventListener('load', function () {
        startLayout(container, list);
      });
    });

    // 添加resize事件
    window.addEventListener('resize', () => {
      startLayout(container, list);
    });
    // 过渡时获取元素宽高不一致，需要监听过渡结束事件,再次重新布局。
    list.item(0).addEventListener("transitionend", function (e) {
      if (e.propertyName !== "width") return false;
      startLayout(container, list);
      // 1.多个属性，过渡时间一致，直接取任意一个属性名判断等于
      // 2.多个属性，过渡时间不一致,所有过渡结束才执行的情况,用数组判断,count = 1;count++,满足长度条件才执行
      // if (['left', 'right', 'top', 'bottom'].includes(e.propertyName)) {
      //   count++;
      //   if (count === ['left', 'right', 'top', 'bottom'].length) {
      //     //执行逻辑
      //   }
      // }
    });
  });
  onUnmounted(() => {
    window.removeEventListener('resize', startLayout);
  });
};