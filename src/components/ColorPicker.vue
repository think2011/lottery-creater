<template>
    <div class="color-container">
        <el-col :span="8">
            <el-input @change="change" v-model="value"></el-input>
        </el-col>
        <el-col :offset="1" :span="5">
            <span :style="{background:value}" class="color"></span>
        </el-col>
        <!--  <el-popover
                  class="color-popover"
                  trigger="hover">
              <chrome-picker v-model="value" @change-color="onChange"></chrome-picker>

          </el-popover>-->
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
            change(value) {
                this.$emit('input', value)
            }

            /*  onChange({hex}) {
             this.$emit('input', hex)
             }*/
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