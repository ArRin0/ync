<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="首页"></g-header>
		<div class="main-area">
			<div class="item0"><h2 class="htext">客服七尾，欢迎回来！</h2></div>
			
			<div class="item1">
				<div class="box">
					<div class="p" style="font-size: 14px; font-weight: 400; color: rgba(51, 51, 51, 0.898);">总会话量</div>
					<div class="p" style="font-size: 48px;font-weight: 650;color: rgba(0, 110, 255, 0.898);">230</div>
					<div class="p" style="font-size: 12px; font-weight: 400; color: #999999">较昨日上涨10%</div>
				</div>
				<div class="box">
					<div class="p" style="font-size: 14px; font-weight: 400; color: rgba(51, 51, 51, 0.898);">处理中的会话数量</div>
					<div class="p" style="font-size: 48px;font-weight: 650;color: rgb(255, 98, 98);">200</div>
					<div class="p" style="font-size: 12px; font-weight: 400; color: #999999">较昨日上涨10%</div>
				</div>
				<div class="box">
					<div class="p" style="font-size: 14px; font-weight: 400; color: rgba(51, 51, 51, 0.898);">在线客服数</div>
					<div class="p" style="font-size: 48px;font-weight: 650;color: rgb(46, 212, 119);">30</div>
					<div class="p" style="font-size: 12px; font-weight: 400; color: #999999">较昨日上涨10%</div>
				</div>
				<div class="box">
					<div class="p" style="font-size: 14px; font-weight: 400; color: rgba(51, 51, 51, 0.898);">今日消息数</div>
					<div class="p" style="font-size: 48px;font-weight: 650;color: rgb(255, 145, 56);">2300</div>
					<div class="p" style="font-size: 12px; font-weight: 400; color: #999999">较昨日上涨10%</div>
				</div>
			</div>
			
			<div class="item2"><linechart :id="'bar1'" :data="objectData1" style="width: 100%;height: 300px"></linechart></div>
	
			<div class="item3">
				<div class="text">快捷入口</div>
				<div class="socket">
					<div class="control">
						<router-link to="">
							<div class="c-img" style="background-color: #006eff;"><i class="iconfont icon-gongdanguanli" style="position: relative;top: 6px;"></i></div>
							<span class="">当前会话</span>
						</router-link>
					</div>
					<div class="control">
						<router-link to="">
							<div class="c-img" style="background-color: #ff6262;"><i class="iconfont icon-icon-test" style="position: relative;top: 6px;"></i></div>
							<span class="">访客管理</span>
						</router-link>
					</div>
					<div class="control">
						<router-link to="">
							<div class="c-img" style="background-color: #2ed477;"><i class="iconfont icon-lishi" style="position: relative;top: 6px;"></i></div>
							<span class="">会话记录</span>
						</router-link>
					</div>
					<div class="control">
						<router-link to="">
							<div class="c-img" style="background-color: #ff9138;"><i class="iconfont icon-yonghu" style="position: relative;top: 6px;"></i></div>
							<span class="">客户管理</span>
						</router-link>
					</div>
					<div class="control">
						<router-link to="">
							<div class="c-img" style="background-color: #006eff;"><i class="iconfont icon-gongdan" style="position: relative;top: 6px;"></i></div>
							<span class="">工单中心</span>
						</router-link>
					</div>
					<div class="control">
						<router-link to="">
							<div class="c-img" style="background-color: #ff6262;"><i class="iconfont icon-tongji" style="position: relative;top: 6px;"></i></div>
							<span class="">数据报表</span>
						</router-link>
					</div>
					<div class="control">
						<router-link to="">
							<div class="c-img" style="background-color: #e4e4e4;"><i class="iconfont icon-jia" style="position: relative;top: 6px;"></i></div>
							<span class="">编辑入口</span>
						</router-link>
					</div>
				</div>
			</div>
			
			<div class="item4">
				<Table></Table>
			</div>
		</div>
	</div>
</template>

<script>
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	import Table from '@/components/customertable.vue'
	import linechart from '@/components/line.vue'

	export default {
		name: "Index",
		components: {
			NavBar,
			GHeader,
			Table,
			linechart
		},
		data(){
			return{
				objectData1:{
					textTile: "访问量统计",
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
			}
		}
	}
</script>

<style>
	.router-link-active{
		text-decoration:none;
	}
	.page {
		position: relative;
		width: 1680px;
	}
	.main-area{
		width: 1326px;
		margin: 10px 74px;
	}
	.htext{
		position: relative;
		left: 11px;
		top: 85px;
		margin-bottom:0;
	}
	.item1{
		width: 1260px;
		height: 178px;
		padding-top: 10px;
		padding-left: 16px;
		padding-right: 16px;
		padding-bottom: 15px;
		background-color: #FFFFFF;
		border-radius: 4px;
		position: absolute;
		top: 135px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.item1 .box{
		width: 301px;
		height: 161px;
		top: 10px;
		padding-top: 8px;
		padding-left: 6px;
		padding-right: 6px;
		padding-bottom: 9px;
	}
	.item1 .box .p{
		width: 301px;
		height: 53.6px;
		font-size: 14px;
		font-weight: 400;
		color: #333333;
		line-height: 54px;
		font-feature-settings: "kern";
		text-align: center;
		background-color: rgb(240, 245, 252);
	}
	.socket{
		height: 300px;
		width: 445px;
		position: relative;
		top: 47px;
		margin-left: 20px;
		margin-right: 19px;
	}
	.item2{
		width: 837px;
		height: 357px;
		border-radius: 4px;
		background-color: #FFFFFF;
		position: absolute;
		top: 341px;
		float: left;
	}
	.item3{
		width: 445px;
		height: 357px;
		border-radius: 4px;
		background-color: #FFFFFF;
		position: absolute;
		top: 341px;
		left: 923px;
		float: left;
	}
	.control{
		margin: 20px;
		display: inline-block;
		position: static;
		width: 60px;
		height: 88px;
	}
	.c-img{
		width: 60px;
		height: 60px;
		font-weight: 700;
		line-height: 48px;
		text-align: center;
		color: #fff;
		border-radius: 50%;
		text-decoration: none;
	}
	.item4{
		width: 1294px;
		height: 476px;
		background-color: #FFFFFF;
		border-radius: 4px;
		position: absolute;
		top: 708px;
	}
	.control span{
		font-size: 14px;
		font-weight: 400;
		color: #333333;
		line-height: normal;
		text-decoration: none;
		position: relative;
		top: 9px; 
	}
	.text{
		font-size: 18px;
		font-weight: 400;
		color: #333333;
		line-height: normal;
		position: relative;
		top: 15px;
		left: 19px;
	}
</style>

