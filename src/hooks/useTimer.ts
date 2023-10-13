import { onBeforeUnmount, onMounted, ref } from 'vue';

const useTimer = (silent: boolean = false) => {
  let timer: number | null = null;

  const time = ref(new Date().toLocaleTimeString());

  onMounted(() => {
    if (silent) {
      return time.value;
    }

    timer = window.setInterval(() => {
      time.value = new Date().toLocaleTimeString();
    }, 1000);
  });

  onBeforeUnmount(() => {
    timer && window.clearInterval(timer);
  });

  return time;
};

export default useTimer;
