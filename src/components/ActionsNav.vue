<template>
    <div>
        <div class="actions">
            <el-button @click="save" type="success" size="large">下载PSD</el-button>
            <el-button @click="save" type="primary" size="large">保存模板</el-button>
            <el-button type="text">退出编辑器</el-button>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import modules from '../modules'
    import editors from '../editors'
    import {mapActions, mapMutations, mapState, mapGetters} from 'vuex'

    export default {
        components: {...modules},

        data () {
            return {}
        },

        computed: {
            ...mapState([
                'modules',
                'curModule',
                'temp'
            ]),
            ...mapGetters([
                'builtModules',
                'bgStyle'
            ])
        },

        methods: {
            save() {
                console.log(this.modules)
            },

            ...mapActions([
                'updateModule',
                'activeModule',
            ]),

            ...mapMutations([
                'TOGGLE_MODULE_TAG',
            ])
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .actions {
        background: #fff;
        box-shadow: 0 0 10px #999;
        padding: 10px;
        position: absolute;
        left: 55%;
        top: 0;
        transform: translate(375px, 0);

        .tag {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }

        button {
            width: 100%;
            text-align: center;
            display: block;
            margin: 0 0 10px 0 !important;

            &:last-child {
                margin: 0 !important;
            }
        }
    }
</style>
