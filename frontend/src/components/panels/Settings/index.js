import Vue from 'vue'

import Alignment from './Alignment.vue'
import Resolution from './Resolution.vue'
import Quality from './Quality.vue'
import Save from './Save.vue'

Vue.component('resolution-setting',Resolution)
Vue.component('alignment-setting',Alignment)
Vue.component('quality-setting',Quality)
Vue.component('save-settings',Save)

export default {

}