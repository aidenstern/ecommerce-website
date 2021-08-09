import Vue from 'vue'
import App from './App.vue'

import 'bulma/css/bulma.css'
import './services/facebook-sdk.js'

import router from "./router/index.js"
import store from '@/store/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store,
  router: router,
}).$mount('#app')
