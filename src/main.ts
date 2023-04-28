import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/reset.scss";
import "@/styles/index.scss";
import { createToastifyPlugin } from "@/ToastPlugin";

const app = createApp(App);
app.use(createToastifyPlugin({ status: "Hi!" }));

app.mount("#app");
