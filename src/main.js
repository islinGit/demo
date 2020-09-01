import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import First from './components/First.vue'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.use(VueCompositionApi);

new Vue({
  router,
  store,
  render: h => h(App)
  // render: h => h(First)
}).$mount('#app')
