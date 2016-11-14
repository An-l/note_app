<template>
	<div id="notes-list">
		<div id="list-header">
      		<h2>Notes | coligo</h2>
      		<div class="btn-group btn-group-justified" role="group">
        		<!-- All Notes button -->
        		<div class="btn-group" role="group">
          			<button @click=" show='all' "
          				:class='{active: show=="all"}'
          				type="button" class="btn btn-default">All Notes</button>
        		</div>
		        <!-- Favorites Button -->
		        <div class="btn-group" role="group">
		          	<button @click=" show='favorite' "
		          		:class='{active: show=="favorite"}'
		          		type="button" class="btn btn-default">Favorites</button>
		        </div>
      		</div>
    	</div>

    	<!-- render notes in a list -->
	    <div class="container">
	      	<div class="list-group">
	        	<a v-for="note in favoriteNotes" 
	        		@click="setActiveNote(note)"
	        		:class="{active: note == activeNote}"
	        		class="list-group-item" href="#">
		          	<h4 class="list-group-item-heading">
		            	{{note.text.slice(0,15)}}
		          	</h4>
	        	</a>
	      	</div>
	    </div>
	</div>
</template>

<script>
import { mapState,mapActions } from 'vuex';

export default {
	data() {
		return {
			show: 'all'
		}
	},
	//可以简写成mapState(['notes','activeNote'])
	computed: {
		...mapState({
			'notes': state => state.notes, 
			'activeNote': state => state.activeNote
		}),
		favoriteNotes() {
			if (this.show == 'all') {
				return this.notes;
			}else if (this.show == 'favorite') {
				return this.notes.filter(function(note) {
						return note.favorite;
					});
			}
		}
	},
	methods: mapActions({
		setActiveNote : 'setActiveNote'
	})
}

</script>

<style>

</style>
