import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Установка Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import router from './router'



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
