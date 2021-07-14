import Vue from "vue";
import App from "./App.vue";

import "./utils/extensions";
import "./components/base";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
