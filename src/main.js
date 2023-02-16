import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

import "./assets/main.css";

// import store from "../node_modules/vuex";

const app = createApp(App);

// app.use(store);

app.use(router);
app.use(bootstrap);

app.mount("#app");
