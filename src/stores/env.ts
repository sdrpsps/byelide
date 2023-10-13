import { defineStore } from 'pinia';
import { ref } from 'vue';

const useEnvStore = defineStore('env', () => {
  const isDebug = ref(false);
  const toggleDebug = () => {
    isDebug.value = !isDebug.value;
  };
  return { isDebug, toggleDebug };
});

export default useEnvStore;
