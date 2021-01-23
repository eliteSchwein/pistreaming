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
		let file = new File([JSON.stringify({ state })], 'config.json');

		let formData = new FormData();
		formData.append('file', file);

		axios.post('/setconfig',
			state, {
				headers: { 'Content-Type': 'application/json' }
			}
		).then(() => {

		}).catch(() => {
			window.console.error("Error save config.json!")
		});
	},
}