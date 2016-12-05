<template>
    <div class="color-container">
        <el-popover
                class="color-popover"
                trigger="hover">
            <chrome-picker v-model="value" @change-color="onChange"></chrome-picker>
            <span slot="reference" :style="{background:value}" class="color"></span>
        </el-popover>
    </div>
</template>


<script type="text/ecmascript-6">
    import {Chrome} from 'vue-color'

    export default{
        components: {'chromePicker': Chrome},

        props: {
            value: String
        },

        data(){
            return {}
        },

        methods: {
            onChange({hex}) {
                this.$emit('input', hex)
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .color-container {
        .color {
            width: 30px;
            height: 30px;
            display: inline-block;
            border-radius: 5px;
        }
    }
</style>