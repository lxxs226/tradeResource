<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <navigation></navigation>
      <router-view/>
    </div>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>
<script>
import navigation from './components/navigation.vue';
export default {
  components: { navigation },
}
</script>
<style lang="scss">
html,body,#app {
   width: 100%;
   height: 100%;
   margin: 0;
   margin-bottom: 1.8rem;
}
html{
  font-size: 16px;
}
</style>
