<template>
  <div class="home">
    <nv-head></nv-head>
  </div>
</template>

<script>
import nvHead from '@/components/Head'
export default {
  components: {
    'nv-head': nvHead
  },
  data () {
    return {
      msg: '我是首页'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #42b983;
}
</style>
