import Vue from 'vue'
import Vuex from 'vuex'
import { account } from './modules/user.js' 
import { alert } from './modules/alert.js'
import { shop } from './modules/shop.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    account,
    alert,
    shop,
  },
  strict: debug,
});