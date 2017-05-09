<template>
  <div v-loading="loading" element-loading-text="加载中">
    <keep-alive>
      <component :is="currentView" v-bind="{data: modalData}">
        <!-- 动态组件, 非活动组件将被缓存 -->
      </component>
    </keep-alive>
  </div>
</template>

<script>
  import nodeStatus from './content/node-status'

  export default {
    props: {
      currentView: {
        type: String,
        default: 'node-status'
      },
      param: {
        type: Object,
        default: null
      }
    },
    data () {
      return {
        // 内容数据
        modalData: null,
        // 加载动画
        loading: false,
        urlMap: {
          'node-status': '/a/meeting/cddsDDwdp/list'
        }
      }
    },
    mounted () {
      this.getData()
    },
    computed: {
      dataUrl () {
        return this.urlMap[this.currentView]
      }
    },
    methods: {
      getData () {
        this.loading = true
        this.$http2.get(this.dataUrl, {})
          .then(response => {
            // 这里是处理正确的回调
            this.loading = false
            this.modalData = response.data.list
          })
          .catch(error => {
            console.log(error)
          })
        // this.$http.jsonp(this.dataUrl, {}, {
        //     headers: {},
        //     emulateJSON: true
        // }).then(function (response) {
        //     // 这里是处理正确的回调
        //     this.loading = false
        //     this.modalData = response.data.subjects
        // }, function (response) {
        //     // 这里是处理错误的回调
        //     console.log(response)
        // })
      }
    },
    components: {
      'node-status': nodeStatus
    }
  }

</script>
