import Vue from 'nativescript-vue'
import App from './components/App'

import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools, {host: '10.94.13.17'})
}

Vue.registerElement(
  'CardView',
  () => require('@nstudio/nativescript-cardview').CardView
);

  
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  
  render: h => h('frame', [h(App)])
}).$start()
