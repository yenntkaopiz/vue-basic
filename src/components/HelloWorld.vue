<template>
  <div class="hello">
    <h1>This is component HelloWorld</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      item1: "Welcome to Vue-basic class"
    }
  },
  props: {
    msg: String
  },

}
</script>
