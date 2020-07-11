<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header></g-header>
		<div class="main-area">
			<div class=""><h2 class="htext">客服七尾，欢迎回来！</h2></div>
			
			<div class="item1">
				<div class="box"></div>
				<div class="box"></div>
				<div class="box"></div>
			</div>
			
			<div class="item2">
			内容在这里
			</div>
	
			<div class="item3">
			版权 © runoob.com
			</div>
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
		position: static;
		top: 135px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.item1 .box{
		width: 313px;
		height: 178px;
		background-color: #333333
	}
	.item2{
		width: 1292px;
		height: 203px;
		background-color: #FFFFFF;
		border-radius: 4px;
		float:left;
		position: relative;
		left: 11px;
		top: 135px;
	}
	.item3{
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

