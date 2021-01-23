import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueResource from 'vue-resource'
import './components'
import store from './store'
import router from './plugins/router'
import vueHeadful from 'vue-headful';

export const bus = new Vue();

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use({
    install() {
      Vue.prototype.destroy = Vue.prototype.$destroy;
    },
  });

Vue.http.headers.common['Content-Type'] = 'application/json';
Vue.http.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.http.headers.common['Accept'] = 'application/json, text/plain, */*';
Vue.http.headers.common['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin';
Vue.http.headers.common['Access-Control-Allow-Methods'] = 'POST, GET, PUT, OPTIONS, DELETE, OPTIONS';

Vue.component('vue-headful', vueHeadful);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')