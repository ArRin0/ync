<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="消息通知"></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="overview-style">
			  <el-button style="position: relative;left: 870px;top: 20px" @click="deleteDialogVisible=true">清除所有记录</el-button>
			  <el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="系统消息" name="first">
			      <span v-for="msg1 in msgs1">
			        <span>{{msg1.noti}}</span>
			        <span style="color: #C0C4CC;font-size: 12px;padding-left: 10px">{{msg1.time}}</span>
			        <br />
			        <br />
			        <span style="color: #C0C4CC;font-size: 14px;">{{msg1.detail}}</span>
			        <br />
			        <el-divider></el-divider>
			      </span>
			    </el-tab-pane>
			    <el-tab-pane label="通知公告" name="second">
			      <span v-for="msg2 in msgs2">
			        <span>{{msg2.noti}}</span>
			        <span style="color: #C0C4CC;font-size: 12px;padding-left: 10px">{{msg2.time}}</span>
			        <br />
			        <br />
			        <span style="color: #C0C4CC;font-size: 14px;">{{msg2.detail}}</span>
			        <br />
			        <el-divider></el-divider>
			      </span>
			    </el-tab-pane>
			  </el-tabs>
			  <el-dialog title="清空确认" :visible.sync="deleteDialogVisible" top="34vh" width="26%">
			    <div class="delete-dialog-style">消息清空后无法恢复，确定清空所有消息吗？</div>
			    <span slot="footer" class="dialog-footer">
			      <el-button @click="deleteDialogVisible = false">取消</el-button>
			      <el-button type="primary" @click="deleteDialogVisible = false">确定</el-button>
			    </span>
			  </el-dialog>
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
		name:"notification",
		components: {
			leftlist,
			NavBar,
			GHeader,
		},
		data() {
		  return {
		    activeName: "first",
		    msgs1: [
		      {
		        noti: "账户即将到期提醒",
		        time: "2020/09/09 10:55",
		        detail: "系统将于3天后到期，请尽快续费，以免影响您正常使用。"
		      },
		      {
		        noti: "账户即将到期提醒",
		        time: "2020/09/09 10:55",
		        detail: "系统将于3天后到期，请尽快续费，以免影响您正常使用。"
		      },
		      {
		        noti: "账户即将到期提醒",
		        time: "2020/09/09 10:55",
		        detail: "系统将于3天后到期，请尽快续费，以免影响您正常使用。"
		      }
		    ],
		    msgs2: [
		      {
		        noti: "产品上新通知",
		        time: "2020/09/09 10:55",
		        detail:
		          "WCTmm-234号产品将于本月9号正式上新，请客服一组的同事尽快熟悉产品功能介绍。"
		      },
		      {
		        noti: "产品上新通知",
		        time: "2020/09/09 10:55",
		        detail:
		          "WCTmm-234号产品将于本月9号正式上新，请客服一组的同事尽快熟悉产品功能介绍。"
		      },
		      {
		        noti: "产品上新通知",
		        time: "2020/09/09 10:55",
		        detail:
		          "WCTmm-234号产品将于本月9号正式上新，请客服一组的同事尽快熟悉产品功能介绍。"
		      }
		    ],
		    deleteDialogVisible: false
		  };
		},
		methods: {
		  handleClick(tab, event) {
		    console.log(tab, event);
		  }
		},
	}
</script>
<style scoped>
.overview-style {
  padding:0px 20px ;
  background-color: #fff;
  border-radius: 5px;
}
.delete-dialog-style {
   border-top: 1px solid #f2f2f2;
   border-bottom: 1px solid #f2f2f2;
   padding: 20px;
   padding-bottom: 70px;
 }
</style>
<style>
	.el-tabs__item {
	  margin-bottom: 20px;
	}
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
