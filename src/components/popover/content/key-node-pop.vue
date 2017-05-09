<template>
  <div class="pop-list">
    <ul>
      <li v-for="article in data">
        {{article.title}}
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

