<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="工作量"></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="choice"><drop></drop></div>
			<div class="box1">
				<block type1="总消息数" type2="230" type3="有效消息数200"></block>
				<block type1="总会话量" type2="30" type3="有效会话数20"></block>
				<block type1="单会话平均消息数" type2="8" type3="单会话最大消息数50"></block>
				<block type1="总会话时长" type2="60m" type3="最大会话时长5m2s"></block>
				<block type1="平均会话时长" type2="9m3s" type3="最大会话时长5m2s"></block>
			</div>
			
			<div class="box2">
				<div class="col"><charts :id="'bar1'" :data="objectData1"></charts></div>
				<div class="col"><charts :id="'bar2'" :data="objectData2"></charts></div>
			</div>
			
			<div><load></load></div>
			
		</div>
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfData.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	import block from './components/block.vue'
	import charts from './components/column.vue'
	import drop from '@/components/drop.vue'
	import load from '@/components/workload.vue'
	
	export default {
		name: "workload",
		components: {
			leftlist,
			NavBar,
			GHeader,
			block,
			charts,
			drop,
			load
		},
		mounted() {
			
		},
		data() {
		  return {
		    objectData1:{
				textTile: "单会话消息数统计",
				nameArray: ['0-10', '10-20', '20-30', '30-40', '40~'],
				series: [{
					name: '消息数',
					type: 'bar',
					data: [3, 5, 9, 8, 4, 7],
					barWidth: '40',
					itemStyle:{
						color: 'rgb(50, 182, 252)',
					}
				}],
		    },
			objectData2:{
				textTile: "单会话时长统计",
				nameArray: ['0-10', '10-20', '20-30', '30-40', '40~'],
				series: [{
					name: '消息数',
					type: 'bar',
					data: [3, 5, 9, 8, 4, 7],
					barWidth: '40',
					itemStyle:{
						color: 'rgb(50, 182, 252)',
					}
				}],
			},
		  }
		}
	}
</script>

<style scoped >
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
	.box2{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-left: 22pxpx;
	}
	.col{
		width: 475px;
		height: 400px;
		margin-top: 50px;
	}
</style>
