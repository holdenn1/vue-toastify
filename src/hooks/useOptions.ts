import type { BaseOptions } from "@/types";
import { ref } from "vue";

const option = ref<BaseOptions>();

export function useOptions() {
  function setOptions(options: any) {
    option.value = options;
  }

  return {
    option,
    setOptions,
  };
}
