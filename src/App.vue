<template>
    <div id="app" :style="{fontSize: postFontSize + 'px'}">
        <!--Test hook-->
        <!--<h1>{{ data }}</h1>-->
        <!--<button id="click" v-on:click="data++">Test Change</button>-->
        <!--<button id="destroy" v-on:click=destroyComponent()>Destroy</button>-->


        <!--component demo-->
        <button-counter :title="title" v-on:enlarge-text="postFontSize = $event"></button-counter>
        <HelloWorld msg="Welcome to Your Vue.js App"/>

        <!--Test Reactive ,Reactivity data Method,Computed -->
        <!--<button id="click2" v-on:click="data++">Test Change</button>-->
        <!--<button id="click3" v-on:click="dataPlusMethod(12)">Test Change Metod</button>-->
        <!--<h1>dataOrigin {{ data }}</h1>-->
        <!--<h1>dataPlusMethod:  {{ // dataPlusMethod() }}</h1>-->
        <!--<h1>dataPlus:  {{ dataPlus }}</h1>-->

        <ul>
        <li v-for="(item,key) in reactiveInDeep" :key="key">
        <span v-for="(value, name, index) in item" :key="index">
        {{ `${name}: ${value}` }}
        </span>
        </li>
        </ul>
        <button @click="changeReactiveArray">Test reactive Array</button>
        <button @click="changeReactiveObj">Test reactive Obj</button>
        <button @click="changeReactiveObjAge">Test reactive Obj new key</button>

        <!--Test v-directive render-->
        <!--<h1 v-once>V-once {{ data }}</h1>-->
        <!--<p>Using mustaches: {{ rawHtml }}</p>-->
        <!--<p>Using v-html directive: <span v-html="rawHtml"></span></p>-->

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
                testData: {
                    id: 2,
                    data: [1, 2]
                },
                data: 0,
                reactiveInDeep: [{id: 1, name: 'yendevy1'}, {id: 2, name: 'yendevy2'}],
                postFontSize: 16,
                title: 'Passing by props',
                rawHtml: '<span style="color: red">Ahihi</span>'
            }
        },
        methods: {
            destroyComponent() {
                this.$destroy()
            },
            changeReactiveArray() {
                // this.reactiveInDeep[0] = {id: 1, name: 'yendevy1Updated'}
                // this.reactiveInDeep[2] = {id: 3, name: 'yendevy3'}
                // this.reactiveInDeep.splice(0, 1, {id: 1, name: 'yendevy1Updated'})
                // this.$set(this.reactiveInDeep, 0, {id: 1, name: 'yendevy1Updated'})
            },
            changeReactiveObj() {
                // this.reactiveInDeep[0].name = 'yendevy1UpdatedByObj'
                // this.reactiveInDeep[0].age = 18
                this.$set(this.reactiveInDeep[0], 'age', 18)
            },
            changeReactiveObjAge() {
                this.reactiveInDeep[0].age++
                // this.reactiveInDeep[0].id++
            },
            dataPlusMethod: function (numberRq) {
                this.data += numberRq
            }
        },
        computed: {
            dataPlus: function () {
                return this.data + 100
            }
        },
        watch: {
            data: function (newVal) {
                console.log('watcher', newVal)
            }
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
