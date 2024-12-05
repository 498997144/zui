import {onMounted, watch} from "vue";


// 映射位置到值
function mapPositionToValue(currentPosition, minValue, maxValue, minPosition, maxPosition) {
  return ((currentPosition - minPosition) / (maxPosition - minPosition)) * (maxValue - minValue) + minValue;
}

// 映射值到位置
function mapValueToPosition(currentValue, minValue, maxValue, minPosition, maxPosition) {
  return ((currentValue - minValue) / (maxValue - minValue)) * (maxPosition - minPosition);
}


export const useSlider = (props, sliderRef, sliderButtonRef, sliderProgressRef, emit) => {

  onMounted(() => {
    // 属性和方法
    let {minValue, maxValue, modelValue: currentValue, format} = props;
    // 最小值和最大值不能相等
    if (minValue >= maxValue) {
      throw new Error('最小值和最大值不能相等');
    }
    // 当前值不能小于最小值
    if (currentValue < minValue) {
      throw new Error('当前值不能小于最小值');
    }
    // 获取元素和位置
    const slider = sliderRef.value;
    const sliderProgress = sliderProgressRef.value;
    const sliderBtn = sliderButtonRef.value;
    const {left: sliderLeft} = slider.getBoundingClientRect();
    const sliderMaxLeft = slider.clientWidth - sliderBtn.offsetWidth;
    // 确保当前值在范围内,当前值大于最大值等于最大值
    currentValue = Math.max(minValue, Math.min(currentValue, maxValue));
    // 计算当前滑块按钮的left值
    // const currentLeft = mapValueToPosition(currentValue, minValue, maxValue, 0, sliderMaxLeft);
    // sliderBtn.style.left = `${currentLeft}px`;
    // sliderProgress.style.width = `${currentLeft}px`;
    //
    const mouseDownHandler = (e) => {
      e.stopPropagation();
      const {clientX, clientY} = e;
      const controller = new AbortController();
      const mousePosition = {clientX, clientY};
      const {left: btnLeft} = sliderBtn.getBoundingClientRect();
      sliderBtn.classList.add('grabbing');
      // 绑定移动事件
      window.addEventListener('mousemove', function (e) {
        const {clientX} = e;
        let left = clientX - sliderLeft - (mousePosition.clientX - btnLeft);
        // 确保left值在有效范围内
        left = Math.max(mapValueToPosition(minValue, minValue, maxValue, 0, sliderMaxLeft), Math.min(left, sliderMaxLeft));
        sliderBtn.style.left = `${left}px`;
        sliderProgress.style.width = `${left + 2}px`;
        // 拖动过程中计算当前值
        currentValue = mapPositionToValue(left, minValue, maxValue, 0, sliderMaxLeft);
        emit('update:modelValue', format(currentValue));
      }, {signal: controller.signal});

      // 鼠标抬起时删除所有事件
      window.addEventListener('mouseup', () => {
        sliderBtn.classList.remove('grabbing');
        emit('change', format(currentValue));
        controller.abort();
      }, {signal: controller.signal});
    };
    // 添加鼠标按下事件
    sliderBtn.addEventListener('mousedown', mouseDownHandler);

    // 点击容器
    const sliderMouseDownHandler = (e) => {
      const {offsetX} = e;
      const left = offsetX - sliderBtn.offsetWidth / 2;
      sliderBtn.style.left = `${left}px`;
      sliderProgress.style.width = `${left + 2}px`;
      // 拖动过程中计算当前值
      currentValue = mapPositionToValue(left, minValue, maxValue, 0, sliderMaxLeft);
      emit('update:modelValue', format(currentValue));
      emit('change', format(currentValue));
    };
    slider.addEventListener('mousedown', sliderMouseDownHandler);

    // 禁用状态处理
    watch(() => props.disabled, (value) => {
      sliderBtn[value ? 'removeEventListener' : 'addEventListener']('mousedown', mouseDownHandler);
      slider[value ? 'removeEventListener' : 'addEventListener']('mousedown', sliderMouseDownHandler);
    }, {
      immediate: true
    });

    // 当前值变化
    watch(() => props.modelValue, (currentValue) => {
      // 计算当前滑块按钮的left值
      const currentLeft = mapValueToPosition(currentValue, minValue, maxValue, 0, sliderMaxLeft);
      sliderBtn.style.left = `${currentLeft}px`;
      sliderProgress.style.width = `${currentLeft}px`;
    },{
      immediate: true
    });
  });
};