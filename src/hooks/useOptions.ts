import type { ToastOptions } from "@/types";
import { ref } from "vue";

const option = ref<ToastOptions>();

export function useOptions() {
  function setOptions(options: any) {
    option.value = options;
  }

  return {
    option,
    setOptions,
  };
}
