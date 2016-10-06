// export const updateActiveNote  = ({ dispatch }, note) => {
//   dispatch('setActive', note);
// };
export const updateActiveNote = function ({ dispatch }, note) {
	return dispatch('setActive', note);
};

export const addNote = ({ dispatch }) => {
  dispatch('addNote');
};

export const deleteNote  = ({ dispatch }) => {
  dispatch('delNote');
};

export const editNote = ({ dispatch }, e) => {
  dispatch('editNote', e.target.value);
};

export const toggleFavorite  = ({ dispatch }) => {
  dispatch('favorNote');
};