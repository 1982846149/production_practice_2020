import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import ViewUI from 'view-design';
import  VCharts from "v-charts";
import store from "./store/index";
import 'view-design/dist/styles/iview.css';
//新增
import axios from 'axios';
import VueAxios from "vue-axios";
Vue.use(VueAxios,axios)

Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(VCharts)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
