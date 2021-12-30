import './style.css'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './sass/variables.scss'

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
