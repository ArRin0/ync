<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="数据总览"></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="choice"><drop></drop></div>
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
			
			<div>
				<div class="col"><linechart :id="'bar1'" :data="objectData1"></linechart></div>
			</div>
			
			<div class="box2">
				<div class="col2"><piech :id="'bar2'" :data="objectData2"></piech></div>
				<div class="col2"><piech :id="'bar3'" :data="objectData3"></piech></div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfData.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	import block from './components/block.vue'
	import piech from './components/piechart.vue'
	import drop from '@/components/drop.vue'
	import linechart from './components/line.vue'
	
	export default {
		name: "data",
		components: {
			leftlist,
			NavBar,
			GHeader,
			block,
			piech,
			drop,
			linechart
		},
		data() {
			return{
				objectData1:{
					textTile: "总访问量",
					nameArray: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'],
					series: [
						{
							name: '总会话量',
							symbol: "none",
							type: 'line',
							itemStyle:{color:'rgb(46, 212, 119)'},
							data: [15, 12, 22, 25, 30, 40, 30, 33, 36, 40, 45, 60, 45, 43, 42]
						},
						{
							name: '有效会话量',
							symbol: "none",
							type: 'line',
							itemStyle:{color:'rgb(26, 125, 254)'},
							data: [30, 17, 22, 15, 23, 47, 55, 47, 54, 40, 43, 40, 35, 40, 37]
						},
						{
							name: '邮件营销',
							symbol: "none",
							type: 'line',
							itemStyle:{color:'rgb(255, 98, 98)'},
							data: [25, 32, 12, 22, 10, 30, 33, 37, 46, 50, 40, 45, 40, 43, 45]
						},
						
					],
				},
				objectData2:{
					textTile: "客户来源占比",
					nameArray: ['网页', 'APP','小程序','公众号','头条号'],
					series: [{
						name: '来源',
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
							{value: 880, name: '网页', itemStyle:{color:'rgb(26, 125, 254)'}},
							{value: 300, name: 'APP', itemStyle:{color:'rgb(255, 145, 56)'}},
							{value: 200, name: '小程序', itemStyle:{color:'rgb(153, 153, 255)'}},
							{value: 130, name: '公众号', itemStyle:{color:'rgb(46, 212, 119)'}},
							{value: 60, name: '头条号', itemStyle:{color:'rgb(255, 98, 98)'}},
						],
					}],
				},
				objectData3:{
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
				}
			}
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
	.box2{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-left: 22pxpx;
		margin-top: 50px;
	}
	.col{
		width: 1040px;
		height: 400px;
		margin-top: 50px;
	}
	.col2{
		width: 435px;
		height: 400px;
		margin-top: 50px;
	}
</style>
