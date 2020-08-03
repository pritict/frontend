import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  Router
}).$mount('#app')
