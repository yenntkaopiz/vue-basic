<template>
    <fragment>
        <h1>Hello Component</h1>
        <p>Hello Component</p>
        {{ rawHtml }}
    </fragment>
</template>
<script>
    import { Fragment } from 'vue-fragment'
    export default {
        name: 'HelloWorld',
        components: {Fragment},
        data() {
            return {
                rawHtml: '<div><span style="color: red">Ahihi</span> <h1>This is component HelloWorld</h1></div>'
            }
        },
        props: {
            msg: String
        },
        beforeDestroy() {
            console.log(`HelloWorld's beforeDestroy hook has been called`)
        },
        destroyed() {
            console.log(`HelloWorld's destroyed hook has been called`)
        }

    }
</script>