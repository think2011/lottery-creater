import {mapActions, mapState, mapGetters} from 'vuex'
import Vue from 'vue'

export default {
    props: {
        module: Object,
        pStyle: Object,
        data  : Object,
    },

    data () {
        return {}
    },

    computed: {
        type() {
            return this.module.type
        },

        parentModule() {
            return this.module._isChild ? this.module._getParent() : null
        },

        ...mapState([
            'act'
        ]),

        opacity: {
            get() {
                let opacity = this.pStyle.opacity || 0

                return +(opacity * 100).toFixed(2)
            },

            set(val) {
                this.pStyle.opacity = +((val / 100).toFixed(2))
            }
        }
    },

    watch: {
        module: {
            deep   : true,
            handler: function (val, oldVal) {
                this.updateModule({module: this.module})
            }
        }
    },

    methods: {
        ...mapActions([
            'updateModule',
            'activeModule'
        ])
    },

    created() {
    },
}