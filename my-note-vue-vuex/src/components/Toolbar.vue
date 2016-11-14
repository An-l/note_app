<template>
	<div id="toolbar">
		<i @click='addNote' 
			class="glyphicon glyphicon-plus" ></i>
		<i @click='toggleFavorite' :class='{starred: activeNote.favorite}'
			class="glyphicon glyphicon-star" ></i>
		<i @click='deleteNote' 
			class="glyphicon glyphicon-remove" ></i>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	computed: {
		activeNote () {
			return this.$store.state.activeNote;
		}
	},
	methods: mapActions({
		addNote: 'addNote',
		deleteNote: 'delNote',
		toggleFavorite : 'toggleFavorite'
	})
}

</script>

<style>

</style>
