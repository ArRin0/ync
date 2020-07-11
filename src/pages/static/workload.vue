<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="choice"></div>
			<div class="box1">
				<block type1="总消息数" type2="230" type3="有效消息数200"></block>
				<block type1="总会话量" type2="30" type3="有效会话数20"></block>
				<block type1="单会话平均消息数" type2="8" type3="单会话最大消息数50"></block>
				<block type1="总会话时长" type2="60m" type3="最大会话时长5m2s"></block>
				<block type1="平均会话时长" type2="9m3s" type3="最大会话时长5m2s"></block>
			</div>
			<div class="text">统计图</div>
			<Bar :getData="otherProportion" title="单会话消息数统计" />
		</div>
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfData.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	import block from './components/block.vue'
	import echarts from 'echarts'
	
	export default {
		name: "data",
		components: {
			leftlist,
			NavBar,
			GHeader,
			block
		},
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
