import {mapActions, mapMutations, mapState, mapGetters} from 'vuex'

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
            'act',
            'drawTotal',
            'nick',
            'sellerId',
        ]),

        ...mapGetters([
            'shopUrl',
            'gameData'
        ])
    },
    watch   : {
        module: {
            deep   : true,
            handler: function (val, oldVal) {
                this.$forceUpdate()
            }
        }
    },


    methods: {
        ...mapMutations([
            'SET_DRAW_TOTAL'
        ]),
        ...mapActions([
            'updateModule',
            'activeModule'
        ])
    },
}