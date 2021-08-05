<template>
  <v-app app dark>
    <v-navigation-drawer app v-model="drawer"></v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn icon @click="exit">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Chat Rooms {{user.room}}</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <div>
        <nuxt/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data: () => ({
    drawer: true
  }),
  computed: mapState(['user']),
  methods: {
    exit() {

    }
  }
};
</script>
