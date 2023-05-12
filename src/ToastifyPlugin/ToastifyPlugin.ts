import type { App } from "vue";
import { useOptions } from "../hooks/useOptions";
import type { ToastifyOptions } from "../types";
import Toastify from "./../Toastify/index.vue";


export default{
  install: (app: App, options:ToastifyOptions) => {
    app.component("Toastify", Toastify);
    useOptions().setOptions(options);
  }
}

