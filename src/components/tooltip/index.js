import {onMounted, ref, watch} from 'vue';
import {createPopper} from '@popperjs/core';
export const usePopper = (props, emit, triggerRef, popupRef) => {
  //
  const isVisible = ref(props.visible);
  const togglePopper = () => {
    isVisible.value = !isVisible.value;
    emit('update:visible', isVisible.value);
  };

  onMounted(() => {
    const triggerEl = triggerRef.value;
    const popupEl = popupRef.value;
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
    //
    const eventType = props.trigger;
    triggerEl.addEventListener(eventType, togglePopper);
    if (eventType === "mouseenter") {
      triggerEl.addEventListener("mouseleave", togglePopper);
    }
  });
  return {isVisible,togglePopper};
};