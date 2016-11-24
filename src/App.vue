<template>
    <div id="app">
        <render v-for="item in modules" :module="item"></render>
    </div>
</template>

<script type="text/ecmascript-6">
    import components from './components'

    export default {
        components,
        data() {
            return {
                modules: [
                    {
                        dev  : false,
                        type : 'bg',
                        style: {},
                        data : {
                            bg: 'https://img.alicdn.com/imgextra/i1/26914588/TB2sozjapHzQeBjSZFsXXbGvXXa-26914588.gif'
                        }
                    }
                ]
            }
        }
    }
</script>

<style lang="sass" rel="stylesheet/scss">
    #app {
        height: 100vh;
        overflow: hidden;
        background: #F9FAFC;
    }
</style>
