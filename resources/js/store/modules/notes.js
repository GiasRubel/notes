const state = {
	notes: JSON.parse(localStorage.getItem('notes')),
};
const getters = {
	getterSetNotesToLocalStorage: (state, payload) => state.notes,
};
const mutations = {
	mutationSetNotesToLocalStorage: (state, payload) => {
		
		localStorage.setItem('notes', JSON.stringify(payload));
		state.notes = payload;
	}
};
const actions = {
	
};

export default {
	state, getters, mutations, actions
}