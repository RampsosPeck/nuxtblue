<template>
	<div>
	    <v-app-bar
	      :clipped-left="true"
	      fixed
	      app
	    >
	      <v-btn to="/" >
	        Inicio
	      </v-btn>
	      <v-btn to="/blog" >
	        Blog
	      </v-btn>
	      <v-btn to="/contacto" >
	        Contacto
	      </v-btn>
	      <v-btn to="/vuex" >
	        Vuex
	      </v-btn>

	      <v-spacer />

	    </v-app-bar>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				title: 'Hola mundo mundo mundo'
			}
		}
	}
</script>

