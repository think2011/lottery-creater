<template>
    <div>
        <ul class="style-container">
            <li v-for="(val,key,$index) in valueForPx">
                <div class="property">{{styleMap[key]}}</div>
                <div v-show="!(editIndex === $index)"
                     @click="edit($index)"
                     class="value">{{val}}
                </div>
                <div v-if="editIndex === $index">
                    <input @blur="editIndex = null" ref="input" type="text" v-model="value[key]">
                </div>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import {
        convertPx
    } from '../assets/js/common.js'

    export default {
        components: {},

        props: {
            value: Object
        },

        data () {
            return {
                styleMap : {
                    width : '宽度',
                    height: '高度',
                    left  : 'X坐标',
                    top   : 'Y坐标',
                    color : '颜色',
                },
                editIndex: null
            }
        },

        computed: {
            valueForPx() {
                return convertPx(this.value)
            }
        },

        methods: {
            edit(index) {
                this.editIndex = index
                setTimeout(() => {
                    this.$refs.input[0].focus()
                }, 0)
            }
        },
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .style-container {
        overflow: hidden;
        line-height: 1;

        li {
            min-width: 50px;
            float: left;
            margin-right: 20px;
            margin-bottom: 10px;
            position: relative;

            .property {
                color: #8492A6;
                margin-bottom: 10px;
            }

            .value {
                color: #20A0FF;
                border-bottom: 1px dashed;
                display: inline-block;
                cursor: pointer;
            }

            input[type=text] {
                width: 60px;
                position: absolute;
                top: 17px;
                left: 0;
                border: none;
                border-bottom: 1px solid #ccc;
                background: transparent;
            }
        }
    }
</style>
