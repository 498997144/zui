let abortController = null;

function debounce(fn, delay = 3000) {
  let timer = null;
  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  };
}

export default {
  name: 'scrollLoad',
  // 在绑定元素的 attribute 前,或事件监听器应用前调用
  created(el, binding, vnode) {
    abortController = new AbortController();
  },
  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode) {
  },
  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode) {
    const distance = parseInt(el.getAttribute('scroll-distance')) || 20;
    const _scroll = debounce(() => {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - distance) {
        binding.value();
      }
    }, 200);
    el.addEventListener('scroll', _scroll, {signal: abortController.signal});
  },
  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {
    if (binding.arg) {
      abortController.abort();
    }
  },
  // 在绑定元素的父组件,及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {
  },
  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode) {
    abortController.abort();
  },
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode) {
  }
};