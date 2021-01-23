import Vue from 'vue'

import CamStream from './CamStream.vue'
import CamSnapshot from './CamSnapshot.vue'
import Welcome from './Welcome.vue'
import ExplanationStream from './ExplanationStream.vue'
import ExplanationSnapshot from './ExplanationSnapshot.vue'
import Settings from "./Settings/";

Vue.component('cam-stream',CamStream)
Vue.component('cam-snapshot',CamSnapshot)
Vue.component('welcome',Welcome)
Vue.component('explanation-stream',ExplanationStream)
Vue.component('explanation-snapshot',ExplanationSnapshot)

export default {
    Settings

}