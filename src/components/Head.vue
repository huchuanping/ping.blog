<template>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    	<div class="container">
	        <el-menu-item index="5"><a href=""><img src="../assets/logo.jpg" height="30" width="30"></a></el-menu-item>   
	        <el-menu-item index="1" @click="$router.push('/')">首页</el-menu-item>
	        <el-menu-item index="2"><a href="https://huchuanping.github.io/front-end-demos/">Demos</a></el-menu-item>
	        <el-menu-item index="3"><a href="https://github.com/huchuanping">GitHub</a></el-menu-item>
	        <el-menu-item index="4"><a href="http://www.jianshu.com/u/3ce4036abcb6">知识杂谈</a></el-menu-item>
	        <el-menu-item index="4"><a href="http://f2er.club/">前端俱乐部</a></el-menu-item>
	        <el-menu-item index="4" @click="$router.push('/life')">生活</el-menu-item>
	        <el-menu-item index="5" @click="$router.push('/aboutme')">关于我</el-menu-item>   
    	</div>
    </el-menu>
</template>
<script>
export default {}
</script>
<style>
</style>
