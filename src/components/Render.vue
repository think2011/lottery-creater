<template>
    <div :style="bgStyle" class="render-container">
        <div :style="containerStyle">
            <div v-for="(item,index) in modules">
                <div v-if="!item.children">
                    <component class="module"
                               :module="item"
                               :style="item.style"
                               :p-style="item.style"
                               :data="item.data"
                               :is="item.type">
                    </component>
                </div>

                <div v-else>
                    <div v-for="(childItem,childIndex) in item.children">
                        <component class="module"
                                   :parentModule="item"
                                   :module="childItem"
                                   :style="childItem.style"
                                   :p-style="childItem.style"
                                   :data="childItem.data"
                                   :is="item.type">
                        </component>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import modules from '../modules'
    import {mapActions, mapGetters, mapState} from 'vuex'

    export default {
        components: {...modules},

        data () {
            return {
                countHeight: 0
            }
        },

        created() {
            $('body').css('background', this.bgStyle.backgroundColor)
        },

        computed: {
            ...mapState([
                'modules'
            ]),
            ...mapGetters([
                'bgStyle',
                'containerStyle'
            ])
        },

        methods: {},
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    @media screen and (max-width: 990px) {
        .pc {
            font-size: 46.875px !important;
        }
    }

    .pc {
        .render-container {
            min-width: 990px;
        }
    }

    .render-container {
        height: 100%;
        margin: 0 auto;
        background: #F9FAFC;
        position: relative;

        .module {
            position: absolute;
        }
    }
</style>
