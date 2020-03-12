<template>
  <v-app>
    <Navbar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>


    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar'
  export default {
    data () {
      return {
      }
    },
    components: {
      Navbar
    }
  };
</script>



