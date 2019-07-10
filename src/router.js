import Vue from "vue";
import Router from "vue-router";
import Homez from "./views/Home.vue";
import LicenceRequest from "./views/LicenceRequest.vue";
import definitions from "./views/SystemSetting/Definitions.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Homez
    },
    {
      path: "/licencerequest",
      name: "licencerequest",
      component: LicenceRequest
    },
    {
      path: "/Definitions",
      name: "Definitions",
      component: definitions
    }
  ]
});
