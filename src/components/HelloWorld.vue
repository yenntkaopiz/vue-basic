<template>
    <div class="hello">
        <h1>This is component HelloWorld</h1>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
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