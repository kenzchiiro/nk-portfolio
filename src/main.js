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
import VueTypedJs from 'vue-typed-js'


Vue.use(VueTypedJs)
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
  vuetify: new Vuetify(
    {
      theme: {
        options: { customProperties: true },
        dark: false,
        themes: {
          light: {
            "primary": "#54B4FF",
            "secondary": "#00FFCC",     
            "neutral": "#191D24", 
            "accent": "#E5E7EB",     
            "base": "#FFFFFF", 
            "base_70": "#FFFFFFB3", 
            "base_50": "#FFFFFF80", 
            "base_30": "#FFFFFF4D", 
            "title": "#191D24",
            "body": "#2A303C",
            "info": "#9CA3AF",    
          },
          dark: {
            "primary": "#6419E6",
            "secondary": "#D926A9",   
            "neutral": "#191D24",    
            "accent": "#374151",     
            "base": "#2A303C", 
            "base_70": "#2A303CB3", 
            "base_50": "#2A303C80", 
            "base_30": "#2A303C4D", 
            "title": "#FFFFFF",
            "body": "#9ca3af",
            "info": "#f3f4f6",    
          },
        },
      },
    },
  ),
  created () {
    AOS.init()
  },
  render: h => h(App),
}).$mount('#app')