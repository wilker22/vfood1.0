require('./bootstrap')
require('./plugins')

import Vue from 'vue'
import BaseTemplate from './layouts/BaseTemplate'
import router from './routes'
import store from './store'

Vue.config.productionTip = false

/** 
 * Globals Components
 * 
 */
Vue.component('preloader-component', () => import('./components/Preloader.vue'))

new Vue({
  render: h => h(BaseTemplate),
  router,
  store
}).$mount('#app')
