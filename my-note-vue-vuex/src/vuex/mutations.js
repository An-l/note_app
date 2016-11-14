export const ADD_NOTE = state => {
	const newNote = {
		text: 'New Note',
		favorite: false
	};
	state.notes.push(newNote);
	state.activeNote = newNote;
	console.log('push - 1');
};

export const DEL_NOTE = (state) => {
	let index = state.notes.indexOf(state.activeNote);
	if (index !== -1) {
		state.notes.splice(index,1);
		state.activeNote = state.notes[0];
	}
};

export const EDIT_NOTE = (state, text) => {
	state.activeNote.text = text;
};

export const SET_ACTIVE_NOTE = (state, note) => {
	state.activeNote = note;
};

export const TOGGLE_FAVORITE = (state) => {
	state.activeNote.favorite = !state.activeNote.favorite;
};
