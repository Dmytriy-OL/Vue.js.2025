import { createApp } from "vue";
import App from "./App.vue";

/* Router */
import router from "./router/index.js";

/* PrimeVue */
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";

/* PrimeVue theme (v4) */
import Aura from "@primeuix/themes/aura";

/* Icons */
import "primeicons/primeicons.css";

/* Custom plugin */
import CopyToClipboardPlugin from "./plugins/copyToClipboard";

const app = createApp(App);

app.use(router);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(ToastService);
app.use(CopyToClipboardPlugin);

app.mount("#app");
