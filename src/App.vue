<template>
  <div id="app" :style="{fontSize: postFontSize + 'px'}">
    <!--Test hook-->
    <button id="click" v-on:click="data1++">Test Change</button>
    <button id="destroy" v-on:click=destroyComponent()>Destroy</button>

    <!--Test Reactive data Method,Computed -->
    <h1>{{ data1 }}</h1>
    <h1>data1PlusMethod:  {{ data1PlusMethod() }}</h1>
    <h1>data1Plus:  {{ data1Plus }}</h1>
    <ul>
      <li v-for="(item,key) in reactiveObj" :key="key">
        {{ item }}
      </li>
      <li><button @click="changeReactiveObj">Test reactive Obj</button></li>
    </ul>

    <!--Test v-directive render-->
    <h1 v-once>V-once {{ data1 }}</h1>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>

    <!--component demo-->
    <button-counter :title="title" v-on:enlarge-text="postFontSize += $event"></button-counter>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      reactiveObj: [1, 3],
      postFontSize: 16,
      title: 'Passing by props',
      data1: 0,
      rawHtml: '<span style="color: red">Ahihi</span>'
    }
  },
  methods: {
    testEvent(){
      console.log('Test Destroyed')
    },
    destroyComponent()
    {
      this.$destroy()
    },
    changeReactiveObj(){
      // this.reactiveObj[0] = 23
      this.$set(this.reactiveObj, 0, 23)
    },
    data1PlusMethod: function () {
      return this.data1 + 100
    }
  },
  computed: {
    data1Plus: function () {
      return this.data1 + 100
    }
  },
  watch: {
    data1: function (newVal) {
      console.log('watcher', newVal)
    }
  },
  beforeCreate() {
    console.log(`beforCreate hook has been called data1 is:`, this.data1)
  },
  created() {
    console.log(`Created hook has been called data1 is:  ${this.data1}`)
    console.log(document.getElementById('click').innerHTML)
  },
  beforeMount() {
    console.log(`beforeMount hook has been called data1 is:  ${this.data1}`)
    console.log(`beforeMount hook has been called el is:`, this.$el)
    console.log(document.getElementById('click').innerHTML)
  },
  mounted() {
    console.log(`mounted hook has been called el is:`, this.$el)
    console.log(document.getElementById('click').innerHTML)
  },
  beforeUpdate(){
    console.log(`beforeUpdate hook has been called data1 is:  ${this.data1}`)
  },
  updated(){
    console.log(`updated hook has been called data1 is:  ${this.data1}`)
  },
  beforeDestroy() {
    console.log(`beforeDestroy hook has been called data1 is:  ${this.data1}`)
    this.data1 = 'beforeDestroy'
  },
  destroyed() {
    console.log(`destroyed hook hook has been called data1 is:  ${this.data1}`)
    this.data1 = 'Destroyed'
    this.testEvent()
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
