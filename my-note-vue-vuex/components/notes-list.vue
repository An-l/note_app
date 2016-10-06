<template>
<div id="notes-list">
   	<div id="list-header">
       	<h2>Notes | coligo</h2>
       	<div class="btn-group btn-group-justified" role="group">
           	<!-- All Notes button -->
           	<div class="btn-group" role="group">
               	<button type="button" class="btn btn-default" :class="{active:show == 'all'}" @click="show='all'">
                   All Notes
               	</button>
           	</div>
           	<!-- Favorites Button -->
           	<div class="btn-group" role="group">
               	<button type="button" class="btn btn-default" :class="{active:show === 'favorites'}" @click="show='favorites'">
                   Favorites
               	</button>
           	</div>
       	</div>
   	</div>
   	<!-- render notes in a list -->
   	<div class="container">
       	<div class="list-group">
            <a v-for="item in filteredNotes" :class="{active:item == activeNote}" @click="updateActiveNote(item)" class="list-group-item"  href="#" >
               <h4 class="list-group-item-heading">{{item.text.slice(0,20)}}</h4>
            </a>
       	</div>
   	</div>
</div>
</template>

<script>
import { updateActiveNote } from '../vuex/actions'

export default {
	data :function () {
		return {
			show:'all'
		}
	},
	vuex :{
		getters:{
			notes: state => state.notes,
			activeNote: state => state.activeNote
		},
		actions: {
			updateActiveNote
		}
	},
	computed: {
		filteredNotes :function () {
			if (this.show === 'all') {
				return this.notes;
			}else if (this.show === 'favorites') {
				return this.notes.filter(function(note) {
					return note.favorite;
				});
			}
		}
	}
}
</script>
