<template>
	<div id="app">
		<toolbar></toolbar>
		<notes-list></notes-list>
		<editor></editor>
	</div>
</template>

<script>
import Toolbar from './Toolbar.vue';
import NotesList from './notes-list.vue';
import Editor from './editor.vue';

export default {
	components: {
		Toolbar,
		NotesList,
		Editor
	}
}
</script>
