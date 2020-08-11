import Vue from 'vue'
import App from './App.vue'

// Define a new component called button-counter
Vue.component('button-counter', {
    props: ['title'],
    data: function () {
        return {
            number: 14
        }
    },
    template: `<div>
            <h1>{{ title }}</h1>
            <input v-model="number" type="number"/>
            <button v-on:click="$emit('enlarge-text', number)">
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
