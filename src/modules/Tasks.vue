<template>
    <div>
        <div v-if="data.children">
            <ul class="tasks-all" :style="{textAlign:data.align}">
                <li v-for="item in data.children"
                    :style="item.style"
                    v-if="tasksStatus2[item.type]"
                    @click="doTask(item.type)">
                    <img :src="item.data.src" alt="">
                </li>
            </ul>
        </div>

        <div v-if="tasksStatus2[type]" :style="pStyle" @click="doTask(type)" v-else>
            <img :src="data.src" alt="">
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {mapGetters, mapActions} from 'vuex'
    import mixin from './mixin'

    export default {
        mixins: [mixin],

        props: {},

        data () {
            return {}
        },

        computed: {},

        methods: {},
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .tasks-all {
        width: 100%;
        text-align: center;

        li {
            margin: px2rem(5) px2rem(5);
            display: inline-block;
        }
    }
</style>
