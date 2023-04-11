import { createApp } from "vue";
import App from "./App.vue";
import { Col, Row } from "@/components";

createApp(App).use(Col).use(Row).mount("#app");
