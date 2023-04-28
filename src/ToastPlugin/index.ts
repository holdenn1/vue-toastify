import { useOptions } from "@/hooks/useOptions";
import type { App } from "vue";

type ToastOptions = {
  status: string;
  
};

type ToastifyOptions = Partial<ToastOptions>;
export function createToastifyPlugin(options: ToastifyOptions) {
  return (app: App) => {
    /* app.component(
      "Toastify",
      defineAsyncComponent(() => import("@/Toastify/Toastify.vue"))
    ); */
    useOptions().setOptions(options);
  };
}
