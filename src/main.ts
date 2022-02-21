import { createApp } from "vue";
import App from "./App.vue";

import router from "./router/index";
import { createPinia } from 'pinia'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";

createApp(App).use(router).use(createPinia()).mount("#app");
