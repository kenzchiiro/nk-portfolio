import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'
import responsive from 'vue-responsive'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader

Vue.use(responsive)
Vue.config.productionTip = false
Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'fa',
  },
}

export default new Vuetify(opts)
new Vue({
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')

