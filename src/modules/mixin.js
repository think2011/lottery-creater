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
        type() {
            return this.module.type
        },

        parentModule() {
            return this.module._isChild ? this.module._getParent() : null
        },

        ...mapState([
            'act',
            'nick',
            'sellerId',
            'dialData',
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