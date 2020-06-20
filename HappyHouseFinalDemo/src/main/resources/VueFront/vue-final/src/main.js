import Vue from "vue";
import App from "@/components/App.vue";
import router from "./router";
import store from "./js/loginUser";
import * as VueGoogleMaps from "vue2-google-maps";
import vuetify from "./plugins/vuetify";
import VuetifyDialog from "vuetify-dialog";

import dealstore from "./js/dealstore";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "Your API Key",
    libraries: "places",
  },
});

Vue.use(VuetifyDialog, {
  context: {
    vuetify,
  },
});

new Vue({
  store,
  router,
  dealstore,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
