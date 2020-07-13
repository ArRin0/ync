<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="分配规则"></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="overview-style">
			  <label style="font-size: 18px;font-weight: 500">基础分配</label>
			
			  <div style="background-color: #e6f1ff;margin-top: 10px;margin-bottom: 10px">
			
			    <el-radio v-model="radio" label="1" style="margin: 10px">
			     按排序轮流分配
			      <br />
			      <br />
			      <label
			        style="color: #C0C4CC;font-size: 12px;margin-left: 25px"
			      >设定一个客服排序, 新的对话按此排序, 在可分配的客服间轮流分配, 从排序最靠前的开始</label>
			    </el-radio>
			
			    <br />
			    <el-radio v-model="radio" label="2" style="margin: 10px">
			      按排序优先分配
			      <br />
			      <br />
			      <label
			        style="color: #C0C4CC;font-size: 12px;margin-left: 25px"
			      >设定一个客服排序, 优先给排序靠前的客服分配到对话数量上限, 才会分配给排序下一位的客服</label>
			    </el-radio>
			    <br />
			    <el-radio v-model="radio" label="3" style="margin: 10px">
			      按平均分配
			      <br />
			      <br />
			      <label style="color: #C0C4CC;font-size: 12px;margin-left: 25px">根据每位客服的对话量维持一个平均的工作量分配。</label>
			    </el-radio>
			  </div>
			
			  <div style="margin-left: 10px;margin-right: 10px">
			    <label style="font-size: 14px">回头客分配</label>
			    <el-switch v-model="value1" style="padding-left: 10px"></el-switch>
			    <br />
			    <label style="color: #C0C4CC;font-size: 12px;">优先把回头客分配给上一次和他对话的客服</label>
			    <el-divider></el-divider>
			  </div>
			
			  <div style="margin-left: 10px;margin-right: 10px">
			    <label style="font-size: 14px">客户排队超时优先</label>
			    <el-switch v-model="value2" style="padding-left: 10px"></el-switch>
			    <br />
			    <label style="color: #C0C4CC;font-size: 12px;">客户发起咨询排队时，如排队等待超过设置的时间，系统将优先接入</label>
			  </div>
		</div>
		</div>
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfSetting.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	import drop from '../components/drop.vue'
	
	 export default {
		name:"distributionrule",
		components: {
			leftlist,
			NavBar,
			GHeader,
		},
		data() {
		  return {
		    radio: "1",
		    value1: true,
		    value2: true
		  };
		},
	}
</script>
<style scoped>
.overview-style {
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
}
</style>

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
</style>
