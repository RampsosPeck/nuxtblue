<template>
	<v-layout>
    	<v-flex class="text-center">
			<v-col cols="12">
		        <v-card
		            color="#385F73"
		            dark
		            class="mt-2 mx-auto"
		          >
		            <v-card-title class="headline">
						<nuxt-link :to="`blog/${articulo.id}`">
							{{ articulo.title }}
						</nuxt-link>
		            </v-card-title>

		            <v-card-subtitle>{{ articulo.body }}</v-card-subtitle>

		            <v-card-actions>
		              <v-btn text>Autor: {{ articulo.nombreAutor }}</v-btn>
		              <nuxt-link to="/blog"  color="primary"> Atras </nuxt-link>
		            </v-card-actions>
	          	</v-card>
	        </v-col>
		</v-flex>
	</v-layout>
</template>

<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				articulo: ''
			}
		},
		/*async created(){
			try {
				const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
				//console.log(res.data)
				this.articulo = res.data
				const userAutor = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)
				//console.log(userAutor.data)
				//lo colocamos a un campo no existente para que muestre
				this.articulo.nombreAutor = userAutor.data.name
				//console.log(this.articulo.nombreAutor)
			} catch( error) {
				console.log(error)
			}
		},*/
		async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}){

			try {
				const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
				//console.log(res.data)
				const articulo = res.data;
				const userAutor = await axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)
				//console.log(userAutor.data)
				//lo colocamos a un campo no existente para que muestre
				articulo.nombreAutor = userAutor.data.name;
				//console.log(this.articulo.nombreAutor)
				return {articulo};
			} catch( error) {
				//console.log(error)
				return {error:error}
			}
		}
	};
</script>


