import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  // 只是为了实验$root操作。应该用vuex替代。
  // data: {
  //   status: 0
  // },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
