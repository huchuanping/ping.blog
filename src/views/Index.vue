<template>
  <div class="home">
    <!-- 小动画或者特效 -->
    <!-- 轮播图 -->
    <banner></banner>
    <h2 style="line-height: 80px">开源作品展示</h2>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3 ">
          <div class="proItem">
              <a href="" class="proLogo"></a>
              <h3 class="proTitle">vue+webpack实现个人blog</h3>
              <p class="proIntro">用vue-cli快速构建项目结构</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 ">
          <div class="proItem">
              <a href="" class="proLogo"></a>
              <h3 class="proTitle">vue+webpack实现个人blog</h3>
              <p class="proIntro">用vue-cli快速构建项目结构</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 ">
          <div class="proItem">
              <a href="" class="proLogo"></a>
              <h3 class="proTitle">vue+webpack实现个人blog</h3>
              <p class="proIntro">用vue-cli快速构建项目结构</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 ">
          <div class="proItem">
              <a href="" class="proLogo"></a>
              <h3 class="proTitle">vue+webpack实现个人blog</h3>
              <p class="proIntro">用vue-cli快速构建项目结构</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 ">
          <div class="proItem">
              <a href="" class="proLogo"></a>
              <h3 class="proTitle">vue+webpack实现个人blog</h3>
              <p class="proIntro">用vue-cli快速构建项目结构</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 ">
          <div class="proItem">
              <a href="" class="proLogo"></a>
              <h3 class="proTitle">vue+webpack实现个人blog</h3>
              <p class="proIntro">用vue-cli快速构建项目结构</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 ">
          <div class="proItem">
              <a href="" class="proLogo"></a>
              <h3 class="proTitle">vue+webpack实现个人blog</h3>
              <p class="proIntro">用vue-cli快速构建项目结构</p>
          </div>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3 ">
          <div class="proItem">
              <a href="" class="proLogo"></a>
              <h3 class="proTitle">vue+webpack实现个人blog</h3>
              <p class="proIntro">用vue-cli快速构建项目结构</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner'
export default {
  components: {
    'banner': Banner
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
.proItem{
    max-width: 300px;
    height: 340px; 
    padding: 5px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 2px;
  }
.proLogo{
  display: block;
  width: 100%;
  height: 150px;
  background-color: #06a79d
}
.proTitle{
  color:#337ab7;
  line-height: 60px;
}
.proIntro{
  font-size: 14px
}
</style>
