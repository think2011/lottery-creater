<template>
    <ul class="module-list">
        <li v-for="item in list">
            <button @click="addModule(item)"><i class="fa fa-plus" aria-hidden="true"></i> {{item.alias}}</button>
        </li>
    </ul>
</template>

<script type="text/ecmascript-6">
    import modules from '../modules'
    import {mapActions, mapMutations, mapState, mapGetters} from 'vuex'

    export default {
        components: {...modules},

        data () {
            return {
                list: require('../assets/template/base-modules.js')
            }
        },

        computed: {
            ...mapState([]),
            ...mapGetters([])
        },

        watch: {},

        methods: {
            addModule(item) {
                let module    = $.extend(true, {}, item)
                let scrollTop = document.body.scrollTop + 200

                // 设定位置
                if (module.children) {
                    module.children.forEach((item) => {
                        item.style.top = `${scrollTop}px`
                    })
                } else {
                    module.style.top = `${scrollTop}px`
                }

                // 置入&激活模块
                this.ADD_MODULE(module)
                if (module.children) {
                    this.activeModule({module: module.children[0], parentModule: module})
                } else {
                    this.activeModule({module: module})
                }
            },

            ...mapMutations([
                'ADD_MODULE'
            ]),
            ...mapActions([
                'activeModule'
            ])
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .module-list {
        width: 328 + 14px;

        li {
            width: 100px;
            font-size: 14px;
            margin: 5px 14px 5px 0;
            float: left;

            button {
                color: #555;
                transition: .3s;
                background: #fff;

                &:hover {
                    color: #20A0FF;
                }
            }

            i {
            }
        }
    }
</style>
