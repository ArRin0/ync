<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="工作质量"></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="choice"><drop></drop></div>
			<div class="box1">
				<block type1="平均首次响应时长" type2="30s" type3="转接后平均首次响应时长40s"></block>
				<block type1="平均响应时长" type2="50s" type3="转接后平均响应时长40s"></block>
				<block type1="好评率" type2="89%" type3="客户评价率78%"></block>
				<block type1="解决率" type2="550" type3="解决率90%"></block>
				<block type1="一次性解决量" type2="60" type3="一次性解决率65%"></block>
			</div>
			
			<div class="box2">
				<div class="col"><charts :id="'bar1'" :data="objectData1"></charts></div>
				<div class="col"><charts :id="'bar2'" :data="objectData2"></charts></div>
			</div>
			
			<div class="box2">
				<div class="col"><piech :id="'bar3'" :data="objectData3"></piech></div>
				<div class="col"><piech :id="'bar4'" :data="objectData4"></piech></div>
			</div>
			
			<div><quality></quality></div>
			
		</div>
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfData.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	import block from './components/block.vue'
	import charts from './components/column.vue'
	import piech from './components/piechart.vue'
	import drop from '@/components/drop.vue'
	import quality from '@/components/workQuality.vue' 
	
	export default {
		name: "workmanship",
		components: {
			leftlist,
			NavBar,
			GHeader,
			block,
			charts,
			piech,
			drop,
			quality
		},
		data() {
		  return {
		    objectData1:{
				textTile: "平均均响应时长会话量统计",
				nameArray: ['0-10', '10-20', '20-30', '30-40', '40~'],
				series: [{
					name: '消息数',
					type: 'bar',
					data: [7, 4, 8, 9, 5, 3],
					barWidth: '40',
					itemStyle:{
						color: 'rgb(50, 182, 252)',
					}
				}],
		    },
			objectData2:{
				textTile: "平均会话时长会话量统计",
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
			objectData3:{
				textTile: "问题解决率占比",
				nameArray: ['已解决', '未解决'],
				series: [{
					name: '问题',
					type: 'pie',
					radius:['35%', '60%'],
					avoidLabelOverlap: false,
					label: {
						show: false,
						position: 'center'
					},
					emphasis:{
						label:{
							show: true,
							fontSize: '20',
							fontWeight: 'bold',
						}
					},
					labelLine:{
						show:false
					},
					data: [
						{value: 40, name: '未解决', itemStyle:{color:'rgb(26, 125, 254)'}},
						{value: 60, name: '已解决', itemStyle:{color:'rgb(255, 145, 56)'}},
					],
				}],
			},
			objectData4:{
				textTile: "评价占比",
				nameArray: ['好评', '中评', '差评'],
				series: [{
					name: '评价',
					type: 'pie',
					radius:['35%', '60%'],
					avoidLabelOverlap: false,
					label: {
						show: false,
						position: 'center'
					},
					emphasis:{
						label:{
							show: true,
							fontSize: '20',
							fontWeight: 'bold',
						}
					},
					labelLine:{
						show:false
					},
					data: [
						{value: 180, name: '好评', itemStyle:{color:'rgb(46, 212, 119)'}},
						{value: 99, name: '中评', itemStyle:{color:'rgb(26, 125, 254)'}},
						{value: 25, name: '差评', itemStyle:{color:'rgb(255, 98, 98)'}},
					],
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
	.box2{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-left: 22pxpx;
	}
	.col{
		width: 435px;
		height: 400px;
		margin-top: 50px;
	}
</style>