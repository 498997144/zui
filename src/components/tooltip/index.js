import {onMounted, ref, watch} from 'vue';

export const useTooltip = (props, emit, triggerRef, triangleRef, popupRef) => {
  //
  const isVisible = ref(props.visible);
  const position = ref(props.position);
  const toggleTooltip = () => {
    isVisible.value = !isVisible.value;
    emit('update:visible', isVisible.value);
  };

  onMounted(() => {
    const triggerEl = triggerRef.value;
    const triangleEl = triangleRef.value;
    const popupEl = popupRef.value;
    const positionMap = {
      top: {
        position: 'bottom',
        transform: 'translateX(-50%) translateY(20%)',
        popup: ' translateY(calc(-100% - 10px))',
      },
      bottom: {
        position: 'top',
        transform: 'translateX(-50%) translateY(-20%)',
        popup: ' translateY(calc(100% + 10px))',
      },
      left: {
        position: 'right',
        transform: 'translateX(20%) translateY(-50%)',
        popup: ' translateX(calc(-100% - 10px))',
      },
      right: {
        position: 'left',
        transform: 'translateX(-20%) translateY(-50%)',
        popup: ' translateX(calc(100% + 10px))',
      },
    };
    const positionList = ['top', 'bottom'];
    //
    watch(() => position.value, () => {
      triangleEl.setAttribute('style', '');
      triangleEl.style.setProperty(positionMap[position.value].position, 0);
      triangleEl.style.setProperty(positionList.includes(position.value) ? 'left' : 'top', '50%');
      triangleEl.style.setProperty('transform', positionMap[position.value].transform);
      popupEl.style.setProperty(position.value, 0);
      popupEl.style.setProperty('transform', positionMap[position.value].popup);
    }, {immediate: true});
    // 边界判断函数
    const isOverflow = () => {
      // 每次显示时需要判断是否超出边界
      const {left, right, bottom, top} = popupEl.getBoundingClientRect();
      if (left <= 0) {
        position.value = 'right';
      }
      if (right >= window.innerWidth) {
        position.value = 'left';
      }
      if (bottom >= window.innerHeight) {
        position.value = 'top';
      }
      if (top <= 0) {
        position.value = 'bottom';
      }
    };
    //
    watch(() => isVisible.value, (value) => {
      if (value) {
        popupEl.style.setProperty(position.value, 0);
        popupEl.style.setProperty('transform', positionMap[position.value].popup);
        requestAnimationFrame(() => {
          popupEl.style.setProperty(positionList.includes(position.value) ? 'left' : 'top',
            `calc(50% - ${popupEl[positionList.includes(position.value) ? 'offsetWidth' : 'offsetHeight'] / 2}px)`);
          isOverflow();
        });
      }else{
        window.removeEventListener('scroll', isOverflow);
      }
    });
    //
    const eventType = props.trigger;
    triggerEl.addEventListener(eventType, toggleTooltip);
    if (eventType === "mouseenter") {
      triggerEl.addEventListener("mouseleave", toggleTooltip);
    }
    // 监听滚动事件,判断是否超出边界
    window.addEventListener('scroll', isOverflow);
  });
  return {isVisible};
};