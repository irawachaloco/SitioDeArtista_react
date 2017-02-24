(function(){
	'use strict';
	Vue.component('entry-list', {
	  //Nota, recordar que tanto Vue como Angular o React hacen una transformación al standard html
	  //las cosas con camelcase se transforman a '-' p.ej. globalState : global-state
	  //el mismo standard utiliza Craft
	  props: [ 'globalState'],
	  //shortcut para v-bind es sólo ':' como abajo en el primer caso.
	  template: '<div><ul>\
	  <li v-for="entry in globalState.list">\
	  <entry-item :entry="entry" v-bind:state="globalState"></entry-item>\
	  </li>\
	  </ul>\
	  <div>Selected article: {{ globalState.selected.title }} </div>\
	  <div>Date created: {{ globalState.selected.date }} </div>\
	  <div v-html="globalState.selected.body"></div></div>'
	});
	Vue.component('entry-item',{
		props: ['entry', 'state'],
		template: '<a v-on:click="state.selected=entry" :class="cssClass"> {{ entry.title }} </a>',
		computed: { 
			cssClass: function(){
				return (this.entry===this.state.selected)? 'selected' : ''
			}
		}
	});
	console.log(window.state.entryList);
	var app = new Vue ({
		el: '#entryList',
		data: {
			state: {
				list: window.state.entryList,
				selected:  window.state.entryList[0]
				//por hacer:
				//modalOpen: false
			}
		}
	})
	// var menuApp = new Vue ({
	// 	el...
	// })
	//console.log(window.state.entryList[0]);
}());