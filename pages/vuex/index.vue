<template>
	<div class="container">
		<h2>VUEX</h2>
		<v-form  @submit.prevent="agregarTarea(tarea)">
		    <v-container>
		      <v-row>
		        <v-col
		          cols="12"
		          md="8"
		        >
		          <v-text-field
		            label="Ingrese una tarea"
					v-model="tarea"
		          ></v-text-field>
		        </v-col>
		        <v-col
		          cols="12"
		          md="4"
		        >
			    <v-btn rounded color="primary" dark type="submit">Agregar</v-btn>
		    	</v-col>
			</v-row>
		</v-container>
		</v-form>
		<v-list-item-group   color="primary">
			<v-list-item v-for="(item, index) in tareas" :key="index">
				<v-list-item-content>
				{{ item.id }} - {{ item.nombre }}
				</v-list-item-content>

		        <v-btn-toggle
			          dense
			          background-color="primary"
			          dark
			        >
			        <v-btn rounded color="info" :to="`/vuex/${item.id}`">Editar</v-btn>
					<v-btn rounded color="red" @click="eliminarTarea(item)">Eliminar</v-btn>
			    </v-btn-toggle>
			</v-list-item>
		</v-list-item-group>
	</div>
</template>
<script>
	import { db } from "@/plugins/firebase.js"
	import { mapState, mapActions } from "vuex"

	export default {
		computed : {
			...mapState(['tareas'])
		},
		methods: {
			...mapActions(['agregarTarea','eliminarTarea'])
		},
		data(){
			return {
				tarea: ''
			}
		}
		/*created() {
	  		db.collection('tareas').get()
	  		.then(snapshot =>  {
	  			snapshot.forEach( doc => {
	  				console.log(doc.data());
	  			})
	  		})
		}*/
		/*fetch({store}){
			return db.collection('tareas').get()
	  		.then(snapshot =>  {
	  			const tareas = []
	  			snapshot.forEach( element => {
	  				//console.log(element.data());
	  				tareas.push(element.data())
	  			});
	  			return store.commit('setTareas', tareas)
	  		})
	  		.catch(function(error){
	  			console.log('Este es el error: ', error);
	  		});
		}*/
	};
</script>
