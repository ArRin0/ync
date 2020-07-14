<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="考勤统计"></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="choice"><drop></drop></div>
			<div><checkingin></checkingin></div>
		</div>
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfData.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	import drop from '@/components/drop.vue'
	import checkingin from '@/components/checkingIn.vue'
	
	export default {
		name: "data",
		components: {
			leftlist,
			NavBar,
			GHeader,
			drop,
			checkingin
		}
	}
</script>

<style scoped>
	.page {
		position: relative;
		width: 1680px;
	}
	.container{
		width: 1040px;
		height: 1500px;
		background-color: #FFFFFF;
		border-radius: 4px;
		position: absolute;
		top: 74px;
		left: 324px;
	}
	.choice{
		width: 1040px;
		height: 70px;
	}
	.box1{
		display: flex;
		flex-wrap: wrap;
		padding-left: 22pxpx;
	}
	.text{
		width: 54px;
		height: 24px;
		position: relative;
		left: 20px;
		top: 22px;
		font-size: 18px;
		font-weight: 400;
	}
</style>
