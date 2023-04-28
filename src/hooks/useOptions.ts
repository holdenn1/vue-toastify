import { ref } from "vue";

const option = ref();

export function useOptions() {
  function setOptions(options: any) {
    option.value = options;
  }

  return {
    option,
    setOptions,
  };
}
