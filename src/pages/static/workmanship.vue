<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="choice"></div>
			<div class="box1">
				<block type1="平均首次响应时长" type2="30s" type3="转接后平均首次响应时长40s"></block>
				<block type1="平均响应时长" type2="50s" type3="转接后平均响应时长40s"></block>
				<block type1="好评率" type2="89%" type3="客户评价率78%"></block>
				<block type1="解决率" type2="550" type3="解决率90%"></block>
				<block type1="一次性解决量" type2="60" type3="一次性解决率65%"></block>
			</div>
			<div class="text">统计图</div>
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