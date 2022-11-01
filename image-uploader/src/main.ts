import { VueClipboard } from "@soerenmartius/vue3-clipboard";

import { addIcons, OhVueIcon } from "oh-vue-icons";
import { MdCheckcircleRound } from "oh-vue-icons/icons";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

addIcons(MdCheckcircleRound);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(VueClipboard);
app.mount("#app");
