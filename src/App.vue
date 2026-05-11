<template>
  <div class="bg-gray-100 min-h-screen p-8">
    <img alt="Vue logo" src="./assets/logo.png" class="mx-auto">
    <HelloWorld msg="Welcome to Your Vue.js App" class="mt-8 text-blue-600 font-bold"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
