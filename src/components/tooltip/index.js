import {onMounted, ref, watch} from 'vue';

export const useTooltip = (props, emit, triggerRef, triangleRef) => {
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
    const positionMap = {
      top: {
        position: 'bottom',
        transform: 'translateX(-50%) translateY(20%)',
      },
      bottom: {
        position: 'top',
        transform: 'translateX(-50%) translateY(-20%)',
      },
      left: {
        position: 'right',
        transform: 'translateX(20%) translateY(-50%)',
      },
      right: {
        position: 'left',
        transform: 'translateX(-20%) translateY(-50%)',
      },
    };
    const positionList = ['top', 'bottom'];
    //
    watch(() => position.value, () => {
      triangleEl.style.setProperty(positionMap[position.value].position, 0);
      triangleEl.style.setProperty(positionList.includes(position.value) ? 'left' : 'top', '50%');
      triangleEl.style.setProperty('transform', positionMap[position.value].transform);
    }, {immediate: true});
    //
    const eventType = props.trigger;
    triggerEl.addEventListener(eventType, toggleTooltip);
  });
  return {isVisible};
};