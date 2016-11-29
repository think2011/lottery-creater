import {mapActions, mapGetters} from 'vuex'

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
                this.updateModule({
                    module: this.module,
                    style : this.module.style,
                    data  : this.module.data
                })
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