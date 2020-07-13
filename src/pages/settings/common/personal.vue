<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="个人信息"></g-header>
		<leftlist></leftlist>
		<div class="container">
			 <el-container>
				<el-header><div class="header">个人信息</div></el-header>
				
				<el-form class="form" :model="form">
					
					<el-divider></el-divider>
					
					<el-form-item label="上传头像:" :label-width="formLabelWidth" >
					    <div>
					      <el-avatar><i class="iconfont icon-jia"></i></el-avatar>
					    </div>
					</el-form-item>
					
					<el-form-item label="邮箱地址" :label-width="formLabelWidth"  :required="true">
					  <el-input class="input" v-model="form.address" autocomplete="off" placeholder="该邮箱将作为客服人员的登录账号"></el-input>
					</el-form-item>
					
					<el-form-item label="客服昵称" :label-width="formLabelWidth"  :required="true">
					  <el-input class="input" v-model="form.nickname" autocomplete="off" placeholder="与外部客服沟通"></el-input>
					</el-form-item>
					
					<el-form-item label="真实姓名" :label-width="formLabelWidth" :required="true">
					  <el-input class="input" v-model="form.name" autocomplete="off" placeholder="请输入"></el-input>
					</el-form-item>
					
					<el-form-item label="客户工号" :label-width="formLabelWidth">
					  <el-input class="input" v-model="form.id" autocomplete="off" placeholder="请输入"></el-input>
					</el-form-item>
					
					<el-form-item label="客服手机号码" :label-width="formLabelWidth" >
					  <el-input class="input" v-model="form.number" autocomplete="off" placeholder="请输入"></el-input>
					</el-form-item>
					
					<el-divider></el-divider>
					
					<div style="width: 56px;height: 19px; margin-left: 27px; margin-bottom: 20px;"><span>密码设置</span></div>
					
					<el-form-item label="原密码" :label-width="formLabelWidth">
					  <el-input class="input" type="password" v-model="form.oldpwd" autocomplete="off" placeholder="请输入原密码"></el-input>
					</el-form-item>
					
					<el-form-item label="新密码" :label-width="formLabelWidth" >
					  <el-input class="input" type="password" v-model="form.newpwd" autocomplete="off" placeholder="请输入新密码"></el-input>
					</el-form-item>
					
					<el-form-item label="确认新密码" :label-width="formLabelWidth">
					  <el-input class="input" type="password" v-model="form.confirm" autocomplete="off" placeholder="请再次输入密码"></el-input>
					</el-form-item>
					
					<el-divider></el-divider>
				</el-form>
				
				  <div class="save"><el-button  @click="doSubmit;">保存</el-button></div>
				
			</el-container>
		</div>
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfSetting.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	
	 export default {
		name:"personal",
		components: {
			leftlist,
			NavBar,
			GHeader,
		},
		data() {
	      return {
			  form: {
			    address:'',
				nickname:'',
				name:'',
				id:'',
				number:'',
				oldpwd:'',
				newpdw:'',
				confirm:'',
			  },
	        formLabelWidth: '120px'
	      };
	    },
		methods:{
			doSubmit:function(data){
				console.log(this.form);
			}
		}
			
	  };
</script>

<style>
	.page {
		position: relative;
		width: 1680px;
	}
	.container{
		width: 1040px;
		height: 930px;
		background-color: #FFFFFF;
		border-radius: 4px;
		position: absolute;
		top: 74px;
		left: 324px;
	}
	.header{
		width: 72px;
		height: 24px;
		text-align: left;
		font-size: 18px;
		margin-top: 18px;
		margin-left: 5px;
	}
	.form{
		width: 1005px;
		height: 800px;
		margin-left: 25px;
	}
	.el-form-item__label{
		color: lightgrey;
	}
	.input{
		position: relative;
		left: 70px;
		width: 320px;
		height: 40px;
	}
	.el-avatar{
		position: relative;
		left: 70px;
		width: 104px;
		height: 104px;
	}
	.icon-jia{
		font-size: 50px;
		position: relative;
		top: 27px;
	}
	.text {
			resize:none;
			width: 664px;
			height: 40px;
			border-style: none;
			outline-style: none;
			border: 2px;
			font-size: 15px;
			padding-top: 0;
	}
	.save{
		width: 80px;
		height: 32px;
		position: relative;
		left: 250px;
	}
</style>