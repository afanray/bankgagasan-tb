import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "/public/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";

const app = createApp(App);

app.use(router);
app.mount("#app");
