import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHouse,
  faCheck,
  faExclamation,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faHouse, faCheck, faExclamation, faCircleXmark);

const app = createApp(App);

app.component("icon", FontAwesomeIcon);

app.use(router).use(store).mount("#app");
