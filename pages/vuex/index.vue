<template>
	<div>
		<h2>VUEX</h2>
	</div>
</template>
<script>
	import { db } from "@/plugins/firebase.js"
	export default {
		created() {
	  		db.collection('tareas').get()
	  		.then(snapshot =>  {
	  			snapshot.forEach( doc => {
	  				console.log(doc.data());
	  			})
	  		})
		}
	};
</script>
