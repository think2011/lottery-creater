<template>
    <div @mousedown="mapActiveModule({module:{},parentModule:{}})" class="editor-container">
        <link rel="stylesheet" href="//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css">

        <actions-nav></actions-nav>

        <section class="container">
            <div :style="bgStyle" class="main">
                <div :style="containerStyle">
                    <div v-for="(item,index) in modules">
                        <div v-if="!item.children">
                            <resize
                                    :class="{active:curModule.module === item,moving:moving}"
                                    @update="updateStyle(item,$event)"
                                    @mousedown="mapActiveModule({module:item})"
                                    restriction=".main"
                                    :p-style="item.style"
                                    :allowKeyMove="item === curModule.module"
                                    :drag="true"
                                    :resize="true">
                                <component class="module"
                                           :module="item"
                                           :style="item.style"
                                           :p-style="item.style"
                                           :data="item.data"
                                           :is="item.type">
                                </component>

                                <div class="handle">
                                    <div class="dot t"></div>
                                    <div class="dot r"></div>
                                    <div class="dot b"></div>
                                    <div class="dot l"></div>
                                    <div class="dot c-t"></div>
                                    <div class="dot c-r"></div>
                                    <div class="dot c-b"></div>
                                    <div class="dot c-l"></div>
                                </div>
                                <div v-if="isShowLabel" class="title-label">
                                    <el-tag :hit="true" type="">{{item.alias}}</el-tag>
                                </div>
                            </resize>
                        </div>

                        <div v-else>
                            <resize
                                    v-for="(childItem,childIndex) in item.children"
                                    :class="{active:curModule.module === childItem,moving:moving}"
                                    @update="updateStyle(childItem,$event)"
                                    @mousedown="mapActiveModule({module:childItem, parentModule:item})"
                                    restriction=".main"
                                    :p-style="childItem.style"
                                    :allowKeyMove="childItem === curModule.module"
                                    :drag="true"
                                    :resize="true">
                                <component class="module"
                                           :parentModule="item"
                                           :module="childItem"
                                           :style="childItem.style"
                                           :p-style="childItem.style"
                                           :data="childItem.data"
                                           :is="item.type">
                                </component>

                                <div class="handle">
                                    <div class="dot t"></div>
                                    <div class="dot r"></div>
                                    <div class="dot b"></div>
                                    <div class="dot l"></div>
                                    <div class="dot c-t"></div>
                                    <div class="dot c-r"></div>
                                    <div class="dot c-b"></div>
                                    <div class="dot c-l"></div>
                                </div>
                                <div v-if="isShowLabel" class="title-label">
                                    <el-tag :hit="true" type="">{{item.alias + '-' + childItem.alias}}</el-tag>
                                </div>
                            </resize>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <property-editor></property-editor>
    </div>
</template>

<script type="text/ecmascript-6">
    import modules from '../modules'
    import editors from '../editors'
    import {mapActions, mapMutations, mapState, mapGetters} from 'vuex'
    import resize from './Resize.vue'
    import actionsNav from './ActionsNav.vue'
    import PropertyEditor from './PropertyEditor.vue'
    import Tour from 'tour/dist/tour'
    import 'tour/dist/tour.css'

    export default {
        components: {...modules, resize, PropertyEditor, actionsNav},

        data () {
            return {}
        },

        computed: {
            ...mapState([
                'modules',
                'curModule',
                'isShowLabel',
                'moving'
            ]),
            ...mapGetters([
                'bgStyle',
                'containerStyle'
            ])
        },

        created() {
            window.addEventListener('message', () => {
                let res = window.event.data

                switch (res.type) {
                    case 'error':
                        this.loading = false
                        this.$message.error(res.data);
                        break;

                    default:
                    //
                }

                // 启动向导
                setTimeout(() => {
                    this.showTour()
                }, 300)
            })
        },

        methods: {
            updateStyle(module, position) {
                module.style = {
                    ...module.style,
                    ...position
                }
            },
            showTour() {
                let isShowed = localStorage.tourShowed

                if (isShowed === 'true') return

                let config = {
                    canExit     : true,
                    previousText: '上一步',
                    nextText    : '下一步',
                    finishText  : '好的，明白了',
                    steps       : [
                        {
                            target : '#tour__background',
                            content: '这里设置背景图片、页面高度',
                        },
                        {
                            target : '#tour__module',
                            content: '可以直接 <i class="fa fa-mouse-pointer" aria-hidden="true"></i> 拖动组件到新的位置',
                        },
                        {
                            target : '#tour__module',
                            content: '拖动不准确的话，试试按下键盘上的 \n<i class="fa fa-arrow-up" aria-hidden="true"></i>\n<i class="fa fa-arrow-down" aria-hidden="true"></i>\n<i class="fa fa-arrow-left" aria-hidden="true"></i>\n<i class="fa fa-arrow-right" aria-hidden="true"></i> \n\n进行微调\n'
                        }
                    ],
                }

                if ($('#tour__download').length) {
                    config.steps.unshift({
                        target : '#tour__download',
                        content: '这里可以下载到本模板的素材',
                    })

                    $('.main').find('.lc-resize').eq(0).attr('id', 'tour__module')
                }

                Tour.start(config)
                    .then(() => {
                        localStorage.tourShowed = true
                    })
                    .catch(() => {
                        console.log('取消了向导')
                    })
            },

            mapActiveModule(params){
                window.event.stopPropagation()
                this.activeModule(params)
            },

            ...mapMutations([
            ]),

            ...mapActions([
                'updateModule',
                'activeModule'
            ])
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/styles/common";

    html {
        cursor: default !important;
    }

    body {
        background: #ddd !important;
    }

    .editor-container {

        &:before {
            content: '';
            display: table;
        }

        .container {
            margin-top: 66px;
            display: flex;
            justify-content: center;

            .main {
                background: #fff;
                box-shadow: 0 0 10px #999;
                position: relative;
                z-index: 3;

                .lc-resize {
                    position: absolute;
                    cursor: pointer;
                    overflow: hidden;

                    &:hover, &.active {
                        .handle {
                            opacity: 1;
                        }
                    }

                    &.active {
                        cursor: move;
                    }

                    &.moving.active {
                        .handle {
                            opacity: 0.2;
                        }
                    }

                    > :first-child {
                        pointer-events: none;
                    }

                    .el-tag {
                        position: absolute;
                        top: 0;
                        left: 0;
                        opacity: .9;
                        background: #444;
                        font-size: 14px;
                        box-shadow: 0 5px 5px -3px #333;
                        border-radius: 0 !important;
                    }

                    .handle {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        border: 2px solid #4DAEFF;
                        background: rgba(77, 174, 255, 0.1);
                        opacity: 0;
                        transition: opacity .3s;

                        .dot {
                            width: 9px;
                            height: 9px;
                            border: 1px solid #4DAEFF;
                            border-radius: 50%;
                            background: #fff;
                            position: absolute;
                            display: block;

                            &.t {
                                top: -1px;
                                left: -1px;
                                cursor: nw-resize;
                            }

                            &.r {
                                top: -1px;
                                right: -1px;
                                cursor: ne-resize;
                            }

                            &.b {
                                bottom: -1px;
                                right: -1px;
                                cursor: se-resize;
                            }

                            &.l {
                                bottom: -1px;
                                left: -1px;
                                cursor: sw-resize;
                            }

                            &.c-t {
                                top: -1px;
                                left: 50%;
                                transform: translate(-50%, 0);
                                cursor: ns-resize;
                            }

                            &.c-r {
                                top: 50%;
                                right: -1px;
                                transform: translate(0, -50%);
                                cursor: ew-resize;
                            }

                            &.c-b {
                                bottom: -1px;
                                left: 50%;
                                transform: translate(-50%, 0);
                                cursor: ns-resize;
                            }

                            &.c-l {
                                top: 50%;
                                left: -1px;
                                transform: translate(0, -50%);
                                cursor: ew-resize;
                            }
                        }
                    }
                }
            }
        }
    }

</style>
