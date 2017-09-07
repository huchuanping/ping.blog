<template>
  <div id="app">
  	<nv-head></nv-head>
    <foot></foot>
    <router-view></router-view>
  </div>
</template>

<script>
import nvHead from '@/components/Head'
import Foot from '@/components/Footer'
export default {
  name: 'app',
  components: {
        'nv-head': nvHead,
        'foot': Foot
    },
   data(){
   	return{

   	}
   }
}
</script>

<style lang="scss" src="./assets/scss/common.scss"></style>
