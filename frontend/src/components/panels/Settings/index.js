import Vue from 'vue'

import Alignment from './Alignment.vue'
import Resolution from './Resolution.vue'
import Quality from './Quality.vue'
import ColorCorrection from './ColorCorrection.vue'
import LightCorrection from './LightCorrection.vue'
import Modes from './Modes.vue'
import Save from './Save.vue'
import Gain from './Gain.vue'
import ReadOnly from './ReadOnly.vue'

Vue.component('resolution-settings',Resolution)
Vue.component('alignment-settings',Alignment)
Vue.component('quality-settings',Quality)
Vue.component('save-settings',Save)
Vue.component('gain-settings',Gain)
Vue.component('readonly-settings',ReadOnly)
Vue.component('colorcorrection-settings',ColorCorrection)
Vue.component('lightcorrection-settings',LightCorrection)
Vue.component('modes-settings',Modes)

export default {

}