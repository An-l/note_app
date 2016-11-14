import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex);

const state = {
	notes: [],
	activeNote: {}
};

export default new Vuex.Store({
	state,
	mutations,
	actions,
});