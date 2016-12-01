<template>
    <el-form class="editor-dial" label-position="top">
        <el-form-item label="图片地址">
            <el-input size="small" v-model="data.src"></el-input>
        </el-form-item>

        <div v-if="type ==='bg'">
            <el-form-item label="中奖位置">
                <el-popover
                        v-for="(item,index) in prizes"
                        placement="top-start"
                        width="300"
                        trigger="hover">
                    <el-slider
                            :show-input="true"
                            :min="0"
                            :max="359"
                            v-model="item.deg">
                    </el-slider>

                    <span @mouseover="SET_CUR_PRIZE(item)" slot="reference">
                        <el-tag
                                :closable="true"
                                type="danger"
                                :close-transition="true"
                                @close="removeDeg(item,prizes)"
                        >
                            奖品{{index+1}}
                        </el-tag>
                    </span>
                </el-popover>

                <el-button @click="addDeg(prizes)"
                           type="primary"
                           :disabled="prizes.length >= 10"
                           size="mini">添加
                </el-button>

            </el-form-item>

            <el-form-item label="没有中奖位置">
                <el-popover
                        v-for="(item,index) in emptyPrizes"
                        placement="top-start"
                        width="300"
                        trigger="hover">
                    <el-slider
                            :show-input="true"
                            :min="0"
                            :max="359"
                            v-model="item.deg">
                    </el-slider>

                    <span @mouseover="SET_CUR_PRIZE(item)" slot="reference">
                        <el-tag
                                :closable="true"
                                type="gray"
                                :close-transition="true"
                                @close="removeDeg(item,emptyPrizes)"
                        >
                            {{item.deg}}度
                        </el-tag>
                    </span>
                </el-popover>

                <el-button @click="addDeg(emptyPrizes)"
                           type="primary"
                           :disabled="emptyPrizes.length > 6"
                           size="mini">添加
                </el-button>
            </el-form-item>
        </div>
    </el-form>
</template>

<script type="text/ecmascript-6">
    import {mapActions, mapMutations, mapGetters} from 'vuex'
    import mixin from './mixin'

    export default {
        mixins: [mixin],

        props: {},

        data () {
            return {}
        },

        computed: {
            prizes() {
                return this.parentModule.data.prizes
            },
            emptyPrizes() {
                return this.parentModule.data.emptyPrizes
            }
        },

        methods: {
            addDeg(items) {
                items.push({deg: 0})
            },

            removeDeg(deg, items){
                items.splice(items.indexOf(deg), 1)
            },

            ...mapMutations([
                'SET_CUR_PRIZE',
            ])
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    .editor-dial {
        .el-tag {
            margin-right: 5px;
            cursor: pointer;
        }
    }
</style>
