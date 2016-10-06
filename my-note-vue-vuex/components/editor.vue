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
import { editNote } from '../vuex/actions'

export default {
	vuex :{
		getters:{
			activeNote: state => state.activeNote
		},
		actions: {
			editNote
		}
	},
	computed: {
		activeNoteText :function () {
			return this.activeNote.text
		}
	}
}
</script>