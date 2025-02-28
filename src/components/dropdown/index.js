import {onMounted, onUnmounted, ref, watch} from 'vue';
import {createPopper} from '@popperjs/core';

export const useDropdown = (props, emit, triggerRef, popupRef, dropDownRef) => {
  const isVisible = ref(false);
  // 点击菜单项
  const onMenuClick = (item) => {
    if (item.disabled) return;
    if (props.multiple) {
      item.isActive = !item.isActive;
    } else {
      isVisible.value = !isVisible.value;
    }
    emit('click', item);
  };
  let dropDownEl = null;
  onMounted(() => {
    const popupEl = popupRef.value;
    const triggerEl = triggerRef.value;
    dropDownEl = dropDownRef.value;
    popupEl.style.width = triggerEl.offsetWidth + 'px';
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
            fallbackPlacements: ['top', 'bottom', 'right', 'left'],
          },
        },
      ],
    });
    //
    watch(() => isVisible.value, () => {
      popper.update();
    }, {immediate: true});
  });

  const hidePopup = (e) => {
    if (!dropDownEl.contains(e.target))
      isVisible.value = false;
  };
  window.addEventListener('click', hidePopup);
  onUnmounted(() => {
    window.removeEventListener('click', hidePopup);
  });
  return {
    isVisible,
    onMenuClick,
    hidePopup
  };
};