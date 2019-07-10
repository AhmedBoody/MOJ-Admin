import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import jQuery from "jquery";
import router from "./router";
import VueI18n from "vue-i18n";


let Bootstrap = require("bootstrap");
import "bootstrap/dist/css/bootstrap.css";
//import Vue2Sidebar from 'vue2-sidebar';
global.$ = jQuery;
global.jQuery = jQuery;

export let Domain = 'https://localhost:44386/';
Vue.use(VueI18n);
Vue.use(Bootstrap);

//Vue.use(Vue2Sidebar);
// Ready translated locale messages
const messages = {
  en: {
    message: {
      hello: "hello world"
    }
  },
  ar: {
    message: {
      hello: "مرحبًا"
    }
  }
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: "ar", // set locale
  messages // set locale messages
});

export function changeLanguage() {
  if (i18n.locale == "en") {
    i18n.locale = "ar";
  } else {
    i18n.locale = "en";
  }
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
