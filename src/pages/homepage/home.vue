<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header></g-header>
		<div class="main-area">
			<div><h2 class="htext">客服七尾，欢迎回来！</h2></div>
			<div class="htext"><h2 class="htext" style="margin-bottom:0;">客服七尾，欢迎回来！</h2></div>
			
			<div id="menu" style="background-color:#FFD700;height:200px;width:100px;float:left;">
			
			JavaScript</div>
			
			<div id="content" style="background-color:#EEEEEE;height:200px;width:400px;float:left;">
			内容在这里</div>
			
			<div id="footer" style="background-color:#FFA500;clear:both;text-align:center;">
			版权 © runoob.com</div>
		</div>
	</div>
</template>

<script>
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'

	export default {
		name: "Index",
		components: {
			NavBar,
			GHeader
		}
	}
</script>

<style>
	.page {
		position: relative;
		width: 1680px;
	}
	.main-area{
		width: 1326px;
		margin: 10px 74px;
		display: flex;
		justify-content: space-between;
	}
	.htext{
		position: relative;
		left: 11px;
		top: 85px;
		margin-bottom:0;
	}
	.item1{
		width: 1292px;
		height: 203px;
		background-color: #FFFFFF;
		border-radius: 4px;
		float:left;
		position: relative;
		left: 11px;
		top: 135px;
	}
</style>

