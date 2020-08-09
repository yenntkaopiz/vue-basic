<template>
  <div class="hello">
    <h1>This is component ChildActionsVuex</h1>
    <button @click="incrementAsync()">Dispatch Action incrementAsync</button>
    <button @click="incrementPromise()">Dispatch Action incrementPromise</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ChildActionsVuex',
  methods: {
    incrementPromise() {
      this.$store.dispatch('incrementPromise').then(() => {
        console.log('promise incrementPromise')
      })
    },
    ...mapActions([
      'incrementAsync'
    ])
  }
}
</script>
