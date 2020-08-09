<template>
  <div class="hello">
    <h1>This is component ChildMutationsVuex</h1>
    <button @click="increment()">Commit Mutations State</button>
    <button @click="incrementBy(10)">Commit Mutations State with Payload</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ChildMutationsVuex',
  methods: {
    // increment() {
    //   this.$store.commit('increment').then(() => {
    //     console.log('promise incrementPromise')
    //   })
    //   // this.$store.dispatch('incrementPromise')
    //   // console.log('promise incrementPromise')
    // },
    ...mapMutations([
      'increment', // map `this.increment()` to `this.$store.commit('increment')`

      // `mapMutations` also supports payloads:
      'incrementBy' // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // map `this.add()` to `this.$store.commit('increment')`
    })
  }
}
</script>
