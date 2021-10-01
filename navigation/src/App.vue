<template>
<navbar />


<router-view>

</router-view>
  <div id="app">
    <font-awesome-icon icon="user-secret" />
  </div>
  
</template>

<script>
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import navbar from './navbar.vue'
export default {
  name: 'App',
  components:{
    navbar,
  }
  
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
