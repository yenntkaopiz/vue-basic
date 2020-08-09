<template>
  <div id="app">
    <!--vuex demo-->
    <ChildStateVuex />
    <ChildGettersVuex />
    <ChildMutationsVuex />
    <ChildActionsVuex />
  </div>
</template>

<script>
import ChildStateVuex from './components/ChildStateVuex'
import ChildGettersVuex from './components/ChildGettersVuex'
import ChildMutationsVuex from './components/ChildMutationsVuex'
import ChildActionsVuex from './components/ChildActionsVuex'

export default {
  name: 'App',
  components: {
    ChildStateVuex,
    ChildGettersVuex,
    ChildMutationsVuex,
    ChildActionsVuex,
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
