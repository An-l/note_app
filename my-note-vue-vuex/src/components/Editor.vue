<template>
  <div id="note-editor">
    <textarea
      :value="activeNoteText"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';

export default {
	//可以简写成mapState(['notes','activeNote'])
	computed: {
		...mapState({
			'activeNote': state => state.activeNote
		}),
		activeNoteText() {
			return this.activeNote.text;
		}
	},
	methods: mapActions({
		editNote : 'editNote'
	})
}


</script>

<style>

</style>
