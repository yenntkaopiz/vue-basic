<template>
  <div class="hello">
    <h1>This is component ChildStateVuex</h1>
    <table>
      <tr>
        <td>Store</td>
        <td> {{ $store.state.count }}</td>
      </tr>
      <tr>
        <td>countComputed</td>
        <td> {{ countComputed }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ChildStateVuex',
  computed: {
    countComputed () {
      return this.$store.state.count + 10
    }
  }

}
</script>
