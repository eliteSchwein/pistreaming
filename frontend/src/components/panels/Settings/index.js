import Vue from 'vue'

import Alignment from './Alignment.vue'
import Resolution from './Resolution.vue'
import Quality from './Quality.vue'
import ColorCorrection from './ColorCorrection.vue'
import LightCorrection from './LightCorrection.vue'
import Modes from './Modes.vue'
import Save from './Save.vue'
import ReadOnly from './ReadOnly.vue'

Vue.component('resolution-setting',Resolution)
Vue.component('alignment-setting',Alignment)
Vue.component('quality-setting',Quality)
Vue.component('save-settings',Save)
Vue.component('readonly-settings',ReadOnly)
Vue.component('colorcorrection-setting',ColorCorrection)
Vue.component('lightcorrection-setting',LightCorrection)
Vue.component('modes-setting',Modes)

export default {

}