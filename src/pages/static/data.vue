<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="choice"></div>
			<div class="box1">
				<block type1="总会话量" type2="230" type3="有效会话数200"></block>
				<block type1="总客户量" type2="30" type3="有效客户20"></block>
				<block type1="总访问量" type2="208" type3="访客对话率50%"></block>
				<block type1="平均会话时长" type2="9m3s" type3="平均响应时间30s"></block>
				<block type1="好评率" type2="78%" type3="评价率67%"></block>
				<block type1="一次性解决问题率" type2="60%" type3="解决率65%"></block>
				<block type1="总会话消息量" type2="2900" type3="有效消息数200"></block>
				<block type1="总人工消息" type2="2600" type3="总客服消息数2389"></block>
				<block type1="平均每会话消息数" type2="28" type3="平均每会话有效消息数15"></block>
			</div>
			<div class="text">会话数</div>
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
