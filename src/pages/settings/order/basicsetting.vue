<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="基础设置"></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="overview-style">
			  <div>
			    <label style="font-size: 14px">通知工单创建人</label>
			    <el-switch
			      v-model="value1" style="padding-left: 10px">
			    </el-switch>
			    <br/>
			    <br/>
			    <label style="color: #C0C4CC;font-size: 14px;">工单被更新时，同步通知工单创建人</label>
			    <el-divider></el-divider>
			  </div>
			  <div>
			    <label style="font-size: 14px">自动接单状态</label>
			    <el-switch
			      v-model="value2" style="padding-left: 25px">
			    </el-switch>
			    <br/>
			    <br/>
			    <label style="color: #C0C4CC;font-size: 14px;">关闭时，将不会分配给您工单。</label>
			    <el-divider></el-divider>
			  </div>
			  <div>
			    <label style="font-size: 14px;padding-right: 10px">工单回复可见范围</label>
			    <el-radio v-model="radio" label="1">仅客服可见</el-radio>
			    <el-radio v-model="radio" label="2">所有人可见</el-radio>
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
		name:"basicsetting",
		components: {
			leftlist,
			NavBar,
			GHeader,
		},
		data() {
		  return {
		      value1: true,
		      value2: true,
		      radio: '1',
		  };
		},
		methods: {},
		created() {},
		mounted() {}
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
