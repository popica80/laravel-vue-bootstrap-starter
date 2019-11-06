import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://api.test/api/v1/'

router.beforeEach((to, from, next) => {
  let api_token = localStorage.getItem('token')
  if(api_token) {    
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + api_token    
    axios.get('user?api_token=' + api_token).then(response => {
      store.commit('auth/SET_AUTH', response.data)
    })
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
