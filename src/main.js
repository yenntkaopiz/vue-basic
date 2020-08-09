import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    incrementBy(state, numberArg){
      state.count+= numberArg
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    incrementPromise ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('increment')
          console.log('incrementPromise')
          resolve()
        }, 3000)
      })
    }
  }
})

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
    'dataParent': 123
  },
  store,
  render: h => h(App),
}).$mount('#app')
