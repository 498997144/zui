import {getCurrentInstance} from 'vue';

/**
 * @param {string} key - 全局属性的键名，用于检索对应的全局属性值默认为空字符串
 * @returns {Object} 返回一个对象，包含全局属性集合和通过键名检索到的值
 */
const useGlobalProperty = (key = '') => {
  const currentInstance = getCurrentInstance();
  const {globalProperties} = currentInstance.appContext.config;
  const value = globalProperties[key];
  return {
    globalProperties,
    value,
  };
};

export default useGlobalProperty;