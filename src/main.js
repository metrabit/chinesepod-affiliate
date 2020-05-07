import Vue from 'vue'
import App from './App.vue'
// import {
//   library
// } from '@fortawesome/fontawesome-svg-core'
// import {
//   // faUserSecret,
//   faInfoCircle
// }
// from '@fortawesome/free-solid-svg-icons'
// import {
//   FontAwesomeIcon
// } from '@fortawesome/vue-fontawesome'

// library.add(faInfoCircle)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')