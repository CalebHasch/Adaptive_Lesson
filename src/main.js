import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { ensureTestUser } from "./lib/supabase";

ensureTestUser().then(() => {
  console.log("Test user Athenticated");
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
