import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// Define a new component called button-counter
Vue.component('button-counter', {
  props: ['title'],
  data: function () {
    return {
      count: 0
    }
  },
  template: `<div>
            <h1>{{ title }}</h1>
            <button v-on:click="count++">You clicked me {{ count }} times.</button>
            <button v-on:click="$emit('enlarge-text', 0.1)">
                Enlarge text
            </button>
            </div>
            `
})

new Vue({
  data: {
    'dataPent': 123
  },
  render: h => h(App),
}).$mount('#app')
