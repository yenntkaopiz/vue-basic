<template>
  <div class="hello">
    <h1>This is component ChildGettersVuex</h1>
    <table>
      <tr>
        <td>Store</td>
        <td> {{ $store.state.count }}</td>
      </tr>
      <tr>
        <td>countComputed</td>
        <td> {{ countAlias }} </td>
      </tr>
      <tr>
        <td>countComputedGetter</td>
        <td> {{ $store.getters.doneTodos }}
          <br> {{ $store.getters.getTodoById(searchId) }}
          <br> {{ doneTodos }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'

  export default {
    name: 'ChildGettersVuex',
    data: function () {
      return {
        searchId: 2
      }
    },
    computed: {
      ...mapState({
      // arrow functions can make the code very succinct!
      count: state => state.count,

      // passing the string value 'count' is same as `state => state.count`
      countAlias: 'count',

      // to access local state with `this`, a normal function must be used
      countComputed (state) {
        return state.count + this.item1
      }
    }),
    ...mapGetters([
      'doneTodos'
    ])
    }
  }
</script>
