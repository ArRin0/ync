<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="choice"></div>
			<div class="box1">
				<block type1="浏览量(PV)" type2="2300" type3="平均浏览页面20"></block>
				<block type1="访客量(UV)" type2="30" type3="跳出率20%"></block>
				<block type1="咨询会话数" type2="208" type3="咨询会话话率50%"></block>
				<block type1="总评价数" type2="67" type3="客户评价率80%"></block>
				<block type1="好评率" type2="78%" type3="评价率67%"></block>
			</div>
			<div class="text">浏览量</div>
		</div>
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfData.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	import block from './components/block.vue'
	
	export default {
		name: "data",
		components: {
			leftlist,
			NavBar,
			GHeader,
			block
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