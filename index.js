import VueNotificationContainer from "./VueNotificationContainer.vue";
import { apiNotification, conf } from "./notifications.js";

let installed = false;

export default {
  install(Vue, options = {}) {
    if (installed) return;
    console.log("✅ Initialisation de @kugatsu/vue3-toast");
    conf.merge = { ...conf.base, ...options };
    Vue.component("VueNotificationContainer", VueNotificationContainer);
    Vue.config.globalProperties.$toast = apiNotification;
    Vue.provide("toast", apiNotification);
    installed = true;
  },
};
