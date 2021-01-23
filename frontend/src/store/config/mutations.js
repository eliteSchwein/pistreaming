import Vue from 'vue'
import { getDefaultState } from './index'

const objectAssignDeep = require(`object-assign-deep`);

export default {
	reset(state) {
		Object.assign(state, getDefaultState())
	},

	setData(state, payload) {
		if ("state" in payload) payload = payload.state
		if ("config" in payload) payload = payload.config

		Object.entries(payload).forEach(([key, value]) => {
			if (typeof value === 'object') {
				Object.entries(value).forEach(([key2, value2]) => {
					Vue.set(state[key], key2, value2)
				})
			} else Vue.set(state, key, value)
		})
	},

	// override special setting
	setSettings(state, data) {
		state = objectAssignDeep(state, data)
	},
}