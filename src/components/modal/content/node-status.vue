<template>
  <div class="pop-list">
    <ul v-if="data !== null">
      <li v-for="(val, key) in data[0]">
        {{key}} : {{val}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array,
        default: null
      }
    }
  }

</script>
<style lang="scss" scoped>
  .pop-list {
    padding: 10px;
    ul {
      list-style: none;
      display: block;
      li {
        padding: 5px;
      }
    }
  }

</style>

