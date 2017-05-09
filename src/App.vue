<template>
  <div id="app">
    <div class="top-nav">
      
    </div>
  </div>
</template>

<script>
  import monitorModule from './components/monitor/module'
  import monitorModal from './components/modal/modal-layout'
  import monitorData from './store/monitor'

  export default {
    data () {
      return {
        data: monitorData.keyNode,
        modalVisible: false,
        info: ''
      }
    },
    methods: {
      showModal () {
        this.modalVisible = true
      },
      getInfo () {
        this.$http2.get('/api/info')
          .then(response => {
            this.info = response.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    components: {
      monitorModule,
      monitorModal
    }
  }
</script>

<style>
  div,
  span,
  ul,
  li {
    margin: 0px;
    padding: 0px;
  }

  #app {
    padding: 10px;
    width: 600px;
    height: auto;
    margin: 100px;
  }

  .testInfo {
    background: #CCC;
    width: 50px;
    height: 20px;
  }

</style>

