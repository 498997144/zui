import {render, h} from 'vue';
import zeroMessage from './zeroMessage.vue';

export const messageList = [];
const message =  (props = {}) => {
  const container = document.createElement('div');
  // // 清空节点方法
  // const destroy = () => {
  //   render(null, container);
  // };
  const vnode = h(zeroMessage, props);
  render(vnode, container);
  messageList.push(container.firstElementChild);
  if (messageList.length > 1) {
    const prevMessage = messageList.at(-2);
    const currentMessage = messageList.at(-1);
    const {bottom} = prevMessage.getBoundingClientRect();
    currentMessage.style.top = `${bottom + 20}px`;
    messageList.shift();
  }
  document.body.appendChild(container.firstElementChild);
};

export default message;