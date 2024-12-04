import {onMounted} from "vue";

// 调整颜色高亮
function lightenColor(rgb, amount) {
  const [r, g, b] = rgb;
  const newR = Math.min(r + amount, 255);
  const newG = Math.min(g + amount, 255);
  const newB = Math.min(b + amount, 255);
  return `rgb(${newR}, ${newG}, ${newB})`;
}

// 鼠标按下时还原背景颜色
export const useLightenColor = (elementRef, props) => {
  if (!props.highlight) return;
  let originBgColor = '';
  onMounted(() => {
    const element = elementRef.value;
    originBgColor = getComputedStyle(element).backgroundColor;
    element.addEventListener('mousedown', function () {
      mouseDownHandler(element, originBgColor);
    });
  });

  function mouseDownHandler(element, originBgColor) {
    const controller = new AbortController();
    // 鼠标按下时设置一个更亮的颜色
    const rgb = originBgColor.slice(4, -1).split(', ').map(item => parseInt(item));
    const newBackgroundColor = lightenColor(rgb, 40);
    element.style.setProperty('background-color', newBackgroundColor);
    //
    window.addEventListener('mouseup', function () {
      // 鼠标抬起时恢复背景颜色
      element.style.setProperty('background-color', originBgColor);
      // 清除鼠标抬起事件
      controller.abort();
    }, {
      signal: controller.signal,
    });
  };
};


// 按钮大小
const sizeType = {
  small: {
    paddingX: '5px',
    paddingY: '2px',
  },
  normal: {
    paddingX: '10px',
    paddingY: '5px',
  },
  large: {
    paddingX: '15px',
    paddingY: '7px',
  },
};
export const useChangeShape = (elementRef, props) => {
  // 根据尺寸类型设置padding
  const paddingX = sizeType[props.size].paddingX;
  const paddingY = sizeType[props.size].paddingY;
  // 改变圆角按钮或者圆形按钮
  onMounted(() => {
    const button = elementRef.value;
    // 如果是圆形按钮，动态修改高度
    if (props.circle) {
      // 先设置padding
      button.style.padding = paddingY;
      // 再获取宽度
      const width = button.offsetWidth;
      // 设置宽高一致成圆形按钮
      button.style.setProperty('height', width + 'px');
    }
    // 圆角按钮
    if (props.round) {
      const height = button.offsetHeight;
      button.style.setProperty('border-radius', height / 2 + 'px');
    }
  });
  return {
    paddingX,paddingY
  };
};