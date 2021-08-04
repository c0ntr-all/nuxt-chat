<template>
  <h1>Chat Page {{user.name}}</h1>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: mapState(['user'])
};
</script>