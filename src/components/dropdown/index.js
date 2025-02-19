import {onMounted, ref, watch} from 'vue';
import {createPopper} from '@popperjs/core';

export const useDropdown = (props, emit, triggerRef, popupRef) => {
  const isVisible = ref(false);
  // 点击菜单项
  const onMenuClick = (item) => {
    if (item.disabled) return;
    isVisible.value = !isVisible.value;
    emit('click', item.value);
  };
  onMounted(() => {
    const popupEl = popupRef.value;
    const triggerEl = triggerRef.value;
    const popper = createPopper(triggerEl, popupEl, {
      placement: props.placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
        {
          name: 'flip',
          options: {
            fallbackPlacements: ['top','bottom','right','left'],
          },
        },
      ],
    });
    //
    watch(() => isVisible.value, () => {
      popper.update();
    }, {immediate: true});

  });
  return {
    isVisible,
    onMenuClick,
  };
};