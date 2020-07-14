<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="访问统计"></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="choice"><drop></drop></div>
			<div class="box1">
				<block type1="浏览量(PV)" type2="2300" type3="平均浏览页面20"></block>
				<block type1="访客量(UV)" type2="30" type3="跳出率20%"></block>
				<block type1="咨询会话数" type2="208" type3="咨询会话话率50%"></block>
				<block type1="总评价数" type2="67" type3="客户评价率80%"></block>
				<block type1="好评率" type2="78%" type3="评价率67%"></block>
			</div>
			<div>
				<div class="col"><linechart :id="'bar1'" :data="objectData1"></linechart></div>
			</div>
			
			<div><visit></visit></div>
			
		</div>
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfData.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	import block from './components/block.vue'
	import drop from '@/components/drop.vue'
	import linechart from './components/line.vue'
	import visit from '@/components/visit.vue'
	
	export default {
		name: "visits",
		components: {
			leftlist,
			NavBar,
			GHeader,
			block,
			drop,
			linechart,
			visit
		},
		data(){
			return {
				objectData1:{
					textTile: "浏览量",
					nameArray: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'],
					series: [
						{
							name: '浏览量',
							symbol: "none",
							type: 'line',
							stack: "总量",
							itemStyle:{color:'rgb(46, 212, 119)'},
							data: [15, 12, 22, 25, 30, 40, 30, 34, 56, 47, 56, 66, 28, 23, 33]
						},
						{
							name: '访客量',
							symbol: "none",
							type: 'line',
							stack: "总量",
							itemStyle:{color:'rgb(255, 98, 98)'},
							data: [30, 17, 22, 15, 23, 47, 55, 47, 54, 40, 43, 40, 35, 40, 37]
						},
					],
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