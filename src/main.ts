import Vue from 'vue'
import App from './App.vue'
import { PiniaVuePlugin } from 'pinia';
import { pinia } from '@/pinia';

Vue.config.productionTip = false

Vue.use(PiniaVuePlugin);

new Vue({
  pinia,
  render: h => h(App),
}).$mount('#app')
