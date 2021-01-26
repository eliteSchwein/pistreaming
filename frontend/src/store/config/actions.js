import axios from "axios";

export default {
	reset({ commit }) {
		commit('reset')
	},

	getData({ commit }, payload) {
		commit('setData', payload)
	},

	setSettings({ commit }, payload) {
		commit('setSettings', payload)
	},

	upload({ state }) {
		var data = state.data
		let file = new File([JSON.stringify({ data })], 'config.json');

		let formData = new FormData();
		formData.append('file', file);

		axios.post(state.ipaddress+'/setconfig',
			data, {
				headers: { 'Content-Type': 'application/json' }
			}
		).then(() => {

		}).catch(() => {
			window.console.error("Error save config.json!")
		});
	},
}