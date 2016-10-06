import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 公用状态
const state = {
	notes: [],
	activeNote: {}
};

// 修改state内的值
const mutations = {
	// 1.把选中的笔记设置为state.activeNote
	setActive: function(state, note) {
		state.activeNote = note;
	},

	// 2.添加选中的笔记到state.notes中
	addNote: function(state) {
		var newNote = {
			text: 'New note',
			favorite: false
		};
		state.notes.push(newNote);
		state.activeNote = newNote;
	},

	// 3.删除选中的笔记
	delNote: function(state) {
		state.notes.$remove(state.activeNote);
		state.activeNote = state.notes[0];
	},

	// 4.编辑选中的笔记
	editNote: function(state, text) {
		state.activeNote.text = text;
	},

	// 5.收藏选中的笔记
	favorNote: function(state) {
		state.activeNote.favorite = !state.activeNote.favorite;
	}
};

export default new Vuex.Store({
	state,
	mutations
});