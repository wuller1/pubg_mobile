import { createApp } from "vue";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseCardAdmin from "./components/ui/BaseCardAdmin.vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(store);
app.use(router);
app.component("BaseCard", BaseCard);
app.component("BaseCardAdmin", BaseCardAdmin);
app.mount("#app");
