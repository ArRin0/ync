<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="通知公告"></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="choice"><drop></drop></div>
		</div>
		
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfSetting.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	import drop from '../components/drop.vue'
	
	 export default {
		name:"personal",
		components: {
			leftlist,
			NavBar,
			GHeader,
			drop
		},
	}
</script>

<style>
	.page {
		position: relative;
		width: 1680px;
	}
	.container{
		width: 1040px;
		height: 1869px;
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
</style>
