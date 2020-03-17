<template>
	<div class="container">
		<h2>EDITAR TAREA</h2>
		<v-form  @submit.prevent="editarTarea(tarea)">
		    <v-container>
			      <v-row>
			        <v-col
			          cols="12"
			          md="8"
			        >
			          <v-text-field
							v-model="tarea.nombre"
			          ></v-text-field>
			        </v-col>
			        <v-col
			          cols="12"
			          md="4"
			        >
				    <v-btn rounded color="primary" dark type="submit">Editar tarea</v-btn>
			    	</v-col>
				</v-row>
			</v-container>
		</v-form>
	</div>
</template>
<script>
	import { db } from "@/plugins/firebase.js"
	import { mapState, mapActions } from "vuex"
	export default {
		fetch({store, params}){
			return db.collection('tareas').doc(params.id).get()
				.then(doc => {
					if(doc.exists){
						let tarea = doc.data()
						tarea.id = doc.id
						return store.commit('setTareaIndividual', tarea)
					}
				}).catch(e => {
					console.log(e)
				})
		},
		computed: {
			tarea: {
				get(){
					return {
						nombre: this.$store.state.tarea.nombre,
						id: this.$store.state.tarea.id
					}
				}
			}
		},
		methods: {
			...mapActions(['editarTarea'])
		}
	};
</script>

