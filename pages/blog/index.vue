<template>
	<v-layout>
    	<v-flex class="text-center">
			<v-col cols="12">
		        <v-card
		            color="#385F73"
		            dark
		            v-for="(item, index) in articulos" :key="index"
		            class="mt-2 mx-auto"
		          >
		            <v-card-title class="headline">
						<nuxt-link :to="`blog/${item.id}`">
							{{ item.title }}
						</nuxt-link>
		            </v-card-title>

		            <v-card-subtitle>{{ item.body }}</v-card-subtitle>

		            <v-card-actions>
		              <v-btn text>Id: {{ item.id }}</v-btn>
		            </v-card-actions>
	          	</v-card>
	        </v-col>
		</v-flex>
	</v-layout>
</template>

<script>
	import axios from 'axios'
	export default {
		data () {
			return {
				articulos: [ ]
			}
		},
		async created(){
			try {
				const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
				//console.log(res.data);
				this.articulos = res.data;
			} catch(error){
				console.log(error)
			}
		}
	};
</script>



