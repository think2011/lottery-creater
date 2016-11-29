import {mapActions, mapState, mapGetters} from 'vuex'

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
        ...mapState([
            'act'
        ]),

        ...mapGetters([
            'shopUrl'
        ])
    },

    watch: {},

    methods: {
        ...mapActions([
            'updateModule',
            'activeModule'
        ])
    },
}