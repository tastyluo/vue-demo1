<template>
    <div  
        v-bind:style="apiStyle" 
        v-loading="loading"
        element-loading-text="加载中">
        <keep-alive>
            <component :is="currentView" v-bind="{data: popData}">
                <!-- 动态组件, 非活动组件将被缓存 -->
            </component>
        </keep-alive>
    </div>
</template>

<script>
import keyNodeContent from './content/key-node-pop'
export default {
    props: {
        // 当前视图，动态绑定
        currentView: {
            type: String,
            default: 'keyNode'
        },
        // 是否显示内容
        show: {
            type: Boolean,
            default: false
        },
        url: {
            type: String,
            default: ''
        },
        param: {
            type: Object,
            default: null
        }
    },
    data () {
        return {
            // 内容数据
            popData: null,
            // 加载动画
            loading: false,
            apiStyle: {
                'min-height': '100px'
                // overflow: 'scroll'
            }
        }
    },
    watch: {
        show (val) {
            if (val) {
                this.getData()
            } else {
                this.clearData()
            }
        }
    },
    methods: {
        getData () {
            this.loading = true
            this.$http.jsonp(this.url, {}, {
                headers: {},
                emulateJSON: true
            }).then(function (response) {
                // 这里是处理正确的回调
                this.loading = false
                this.popData = response.data.subjects
            }, function (response) {
                // 这里是处理错误的回调
                console.log(response)
            })
        },
        clearData () {
            this.popData = null
        }
    },
    components: {
        keyNode: keyNodeContent
    }
}
</script>
