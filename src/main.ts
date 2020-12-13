import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import vuetify from "@/plugins/vuetify";
import NProgressPlugin from "@/plugins/nprogress";

Vue.config.productionTip = false;

Vue.use(NProgressPlugin);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
