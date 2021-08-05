<template>
  <v-app app dark>
    <v-navigation-drawer app v-model="drawer">
      <v-list subheader>
        <v-subheader>Recent chat</v-subheader>
        <v-list-item v-for="chat in recent" :key="chat.title">
          <v-list-item-avatar>
            <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="chat.title"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon :color="chat.active ? 'deep-purple accent-4' : 'grey'">
              mdi-message-outline
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
