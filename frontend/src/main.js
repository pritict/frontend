import Vue from 'vue'
import moment from 'vue-moment'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import cors from 'cors'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
Vue.use(cors)
Vue.use(moment)

new Vue({
  render: h => h(App),
  vuetify,
  router,
  axios,
  cors
}).$mount('#app')
