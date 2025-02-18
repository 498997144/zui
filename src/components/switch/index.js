import {onMounted, ref, watch} from 'vue';

export const useSwitch = (props, emit, switchBtn, switchSlider, inputRef) => {
  // 点击切换值逻辑
  const switchValue = ref(props.modelValue);
  const toggleSwitch = (value) => {
    switchValue.value = value ? props.activeValue : props.inActiveValue;
    emit('update:modelValue', switchValue.value);
  };
  const onChange = (e) => {
    const value = e.target.checked;
    toggleSwitch(value);
  };
  onMounted(() => {
    // 点击滑动逻辑
    const btn = switchBtn.value;
    const slider = switchSlider.value;
    const input = inputRef.value;
    const maxLeft = slider.offsetWidth - btn.offsetWidth - 2;
    slider.addEventListener('click', () => {
      // 滑块点击时开关状态切换
      input.checked = !switchValue.value;
      toggleSwitch(input.checked);
    });
    // 观察双向绑定的值变化,切换颜色和位置
    watch(() => props.modelValue, (value) => {
      slider.style.backgroundColor = value === props.activeValue ? props.activeColor : props.inActiveColor;
      btn.style.left = switchValue.value ? `${maxLeft}px` : `${2}px`;
    }, {immediate: true});
  });

  return {
    onChange,switchValue
  };
};