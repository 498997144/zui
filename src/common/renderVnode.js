import {defineComponent} from 'vue';

const renderVnode = defineComponent({
  props: {
    vNode: {
      type: [String, Object],
      required: true,
    }
  },
  setup(props) {
    return () => props.vNode;
  }
});

export default renderVnode;