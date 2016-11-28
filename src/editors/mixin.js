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
        ...mapGetters([
            'modules',
            'curModule',
        ])
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
        console.log('ok')
    },
}