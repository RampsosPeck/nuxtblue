import { db } from "@/plugins/firebase.js"

export const state = () => ({
	tareas : '',
	tarea: ''
})
//Aqui abajo llenamos las tareas
export const mutations = {
	setTareas(state, payload){
		state.tareas = payload
	},
	setTarea(state, payload){
		state.tareas.push(payload)
	},
	deleteTarea(state, payload){
		const index = state.tareas.findIndex(item => item.id === payload.id)
		state.tareas.splice(index, 1);
	},
	updateTarea(state, payload){
		const index = state.tareas.findIndex(item => item.id === payload.id)
		state.tareas[index].nombre = payload.nombre
	},
	setTareaIndividual(state, payload){
		state.tarea = payload
	}
}
//aqui abajo llamavamos a la base de datos
export const actions = {
	nuxtServerInit ({ commit }, { req }) {
		return db.collection('tareas').get()
			.then(snapshot =>{
				const tareas = []
				snapshot.forEach(element => {
					let tarea = element.data();
					tarea.id = element.id;
					tareas.push(tarea)
				});
				return commit('setTareas', tareas);
			})
			.catch(function(error){
	  			console.log('Este es el error: ', error);
	  		});
	},
	async agregarTarea({commit}, payload){
		try {
			const doc = await db.collection('tareas').add({
				nombre: payload,
				fecha: new Date()
			})
			//console.log(doc.data())
			commit('setTarea', {nombre:payload, id:doc.id})
		} catch (error) {
			console.log(error)
		}
	},
	eliminarTarea({commit}, payload){
		db.collection('tareas').doc(payload.id).delete()
		.then(function(){
			console.log("Excelente eliminaste la tarea !")
			commit('deleteTarea', payload)

		}).catch(function(error){
			console.error("este es el error: ", error)
		})
	},
	editarTarea({commit}, payload){
		db.collection('tareas').doc(payload.id).update({
			nombre: payload.nombre
		})
		.then(()=>{
			console.log("Tarea editada correctamenete.");
			commit('updateTarea', payload)
			this.app.router.push('/vuex')
		}).catch(e => {
			console.log(e);
		})
	}
}