import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import ViewUI from 'view-design';
import  VCharts from "v-charts"
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(VCharts)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
