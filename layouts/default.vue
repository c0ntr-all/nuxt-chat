<template>
  <v-app app dark>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
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
  computed: mapState(['user'])
};
</script>
