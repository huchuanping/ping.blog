<template>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    	<div class="container">
	        <el-menu-item index="5"><a href=""><img src="../assets/logo.jpg" height="30" width="30"></a></el-menu-item>   
	        <el-menu-item index="1">首页</el-menu-item>
	        <el-menu-item index="2"><a href="">作品</a></el-menu-item>
	        <el-menu-item index="3"><a href="">项目展示</a></el-menu-item>
	        <el-menu-item index="4"><a href="">文章</a></el-menu-item>
	        <el-menu-item index="5"><a href="">关于我</a></el-menu-item>   
    	</div>
    </el-menu>
</template>
<script>
export default {}
</script>
<style>
</style>
