import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/reset.scss";
import "@/styles/index.scss";
import { createToastifyPlugin } from "@/ToastPlugin";

const app = createApp(App);
app.use(
  createToastifyPlugin({
    autoClose: 5000,
    theme: "day",
    offset: 50,
    closeOnClick: true,
  })
);

app.mount("#app");
