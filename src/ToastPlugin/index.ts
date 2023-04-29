import { useOptions } from "@/hooks/useOptions";
import type { ToastifyOptions } from "@/types";
import type { App } from "vue";


export function createToastifyPlugin(options: ToastifyOptions) {
  return (app: App) => {
    useOptions().setOptions(options);
  };
}
