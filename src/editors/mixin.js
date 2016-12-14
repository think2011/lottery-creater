import {mapActions, mapState, mapGetters} from 'vuex'
import Vue from 'vue'
import StyleEditor from '../components/StyleEditor.vue'

export default {
    components: {StyleEditor},
    props     : {
        parentModule: Object,
        module      : Object,
        pStyle      : Object,
        data        : Object,
    },

    data () {
        return {}
    },

    computed: {
        type() {
            return this.module.type
        },

        ...mapState([
            'act'
        ])
    },

    watch: {
        'module': {
            deep   : true,
            handler: function (val, oldVal) {
                if (!val) return

                this.updateModule({module: val})
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