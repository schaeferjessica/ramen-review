import { createApp, reactive } from "vue"; // <--- importing reactive
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Create a reactive object
const GlobalStore = reactive({ flashMessage: "" });

createApp(App)
  .use(store)
  .use(router)
  .provide("GlobalStore", GlobalStore) // provide this object so others can inject it
  .mount("#app");
