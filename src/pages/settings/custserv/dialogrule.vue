<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="对话规则"></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="overview-style">
			  <div class="item">
			    <div>
			      <label style="font-size: 14px;padding-right: 5px">自动结束会话</label>
			      <el-switch
			        v-model="value1">
			      </el-switch>
			    </div>
			    <div>
			      <br/>
			      <label style="font-size: 14px;color: #C0C4CC;">超过</label>
			      <el-input placeholder="请输入内容" v-model="input1" style="width: 50px;padding: 0px 5px"></el-input>
			      <label style="font-size: 14px;color: #C0C4CC;">分钟无响应时自动发送</label>
			    </div>
			  </div>
			  <el-divider></el-divider>
			  <div class="item">
			    <div>
			      <label style="font-size: 14px;padding-right: 5px">访客离线自动结束对话</label>
			      <el-switch
			        v-model="value2">
			      </el-switch>
			    </div>
			    <div>
			      <br/>
			      <label style="font-size: 14px;color: #C0C4CC;">访客离线超过</label>
			      <el-input placeholder="请输入内容" v-model="input2" style="width: 50px;padding: 0px 5px"></el-input>
			      <label style="font-size: 14px;color: #C0C4CC;">秒自动结束对话</label>
			    </div>
			  </div>
			  <el-divider></el-divider>
			  <div class="item">
			    <div>
			      <label style="font-size: 14px;padding-right: 5px">客服离线自动转接</label>
			      <el-switch
			        v-model="value3">
			      </el-switch>
			    </div>
			    <div>
			      <label style="font-size: 12px;color: #C0C4CC;">正常对话过程中如顾客发送消息时客服已离线，则对话将被自动转接给在线的客服</label>
			    </div>
			    <div>
			      <br/>
			      <label style="font-size: 14px;color: #C0C4CC;">访客发送消息后</label>
			      <el-input placeholder="请输入内容" v-model="input3" style="width: 50px;padding: 0px 5px"></el-input>
			      <label style="font-size: 14px;color: #C0C4CC;">秒客服一直没有在线则自动转接</label>
			    </div>
			  </div>
			  <el-divider></el-divider>
			  <div class="item">
			    <div>
			      <label style="font-size: 14px;padding-right: 5px">进入对话窗立即开始对话</label>
			      <el-switch
			        v-model="value4">
			      </el-switch>
			    </div>
			    <div>
			      <br/>
			      <label style="font-size: 14px;color: #C0C4CC;">开启后顾客进入对话窗时客服就会立即接入对话，客服可以主动与顾客沟通。关闭则必须顾客发送首条消息时客服才接入对话。</label>
			    </div>
			  </div>
			
			</div>
		</div>
		
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfSetting.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	
	
	 export default {
		name:"dialogrule",
		components: {
			leftlist,
			NavBar,
			GHeader,
		},
		data() {
		  return {
		    value1:true,
		    value2:true,
		    value3:true,
		    value4:true,
		    input1: '20',
		    input2: '20',
		    input3: '20',
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
  .item{
    padding: 10px 0px;
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
