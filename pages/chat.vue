<template>
  <h1>Chat Page {{user.name}}</h1>
</template>

<script>
import {mapState} from 'vuex'
export default {
  middleware: ['chat'],
  computed: mapState(['user'])
};
</script>