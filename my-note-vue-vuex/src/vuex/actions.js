export const addNote = ({ commit }) => {
	commit('ADD_NOTE');
};
export const delNote = ({ commit }, payload) => {
	commit('DEL_NOTE', payload);
};
export const editNote = ({ commit }, e) => { //e
	commit('EDIT_NOTE', e.target.value); //e.target.value
};
export const setActiveNote = ({ commit }, payload) => {
	commit('SET_ACTIVE_NOTE', payload);
};

export const toggleFavorite = ({ commit }) => {
	commit('TOGGLE_FAVORITE');
};
