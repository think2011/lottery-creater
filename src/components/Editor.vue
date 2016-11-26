<template>
    <div class="render-container"
         :style="{height: countHeight + 'px'}">

        <resize
                v-for="(item,index) in modules"
                @update="updateStyle(item,$event)"
                @click="activeModule({module:item})"
                restriction="parent"
                :drag="true"
                :resize="true"
                :style="item.style">
            <component class="module"
                       :module="item"
                       :p-style="item.style"
                       :data="item.data"
                       :is="item.type">
            </component>
        </resize>

        <resize v-if="curModule.type" className="editor-container" :drag="true">
            <div class="close pull-right">
                <el-button type="text"><i class="el-dialog__close el-icon el-icon-close"></i></el-button>
            </div>

            <h1 class="title">
                {{curModule.alias}}
            </h1>

            <div class="body">
                <el-form label-width="80px">
                    <el-form-item label="图片地址">
                        <el-input v-model="curModule.data.src"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </resize>
    </div>
</template>

<script type="text/ecmascript-6">
    import modules from '../modules'
    import {mapActions, mapGetters} from 'vuex'
    import resize from './Resize.vue'

    export default {
        components: {...modules, resize},

        data () {
            return {
                countHeight: 0
            }
        },

        computed: {
            ...mapGetters([
                'modules',
                'curModule',
            ])
        },

        methods: {
            updateStyle(module, position) {
                this.updateModule({
                    module,
                    style: {
                        ...module.style,
                        ...position
                    }
                })
            },
            ...mapActions([
                'updateModule',
                'activeModule'
            ])
        },

        updated() {
            let heights = [].map.call(this.$el.childNodes, (item) => {
                return item.offsetHeight || 0
            })

            this.countHeight = Math.max.apply(null, heights)
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .editor-container {
        width: 550px;
        background: #fff;
        padding: 0;
        border-radius: 5px;

        &:hover {
            box-shadow: none;
        }

        .close {
            margin: 5px 20px 0 0;
        }

        h1 {
            font-size: 18px;
            padding: 0 20px;
            color: #1f2f3d;
        }

        .body {
            padding: 0 20px;
        }
    }

    .render-container {
        width: px2rem(750);
        height: 100%;
        margin: 0 auto;
        background: #F9FAFC;
        position: relative;
    }
</style>
