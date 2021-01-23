import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export function getDefaultState() {
	return {
		"width":0,
        "height":0,
        "flip":"",
        "rotation":0,
        "framerate":0,
        "bitrate":0,
        "port":0
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}