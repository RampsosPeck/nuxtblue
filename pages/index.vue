<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex xs12 sm8 md6 >
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>

    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  head: {
    title: 'NUXT VUE',
    meta: [
      {hid: 'description', name: 'description', content: 'Esta la página de nuxt js por jorge'}
    ]
  }
}
</script>
