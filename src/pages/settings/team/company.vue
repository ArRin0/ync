<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="企业信息"></g-header>
		<leftlist></leftlist>
		<div class="container">
			 <el-container>
				<el-header><div class="header">企业信息</div></el-header>
				
				<el-form class="form" :model="form">
					
					<el-divider></el-divider>
					
					<el-form-item label="企业Logo:" :label-width="formLabelWidth" >
					    <div>
					      <el-avatar><i class="iconfont icon-jia"></i></el-avatar>
					    </div>
					</el-form-item>
					
					<el-form-item label="企业名称" :label-width="formLabelWidth"  :required="true">
					  <el-input class="input" v-model="form.name" autocomplete="off" placeholder="请输入"></el-input>
					</el-form-item>
					
					<el-form-item label="企业账户" :label-width="formLabelWidth">
					  <el-input class="input" v-model="form.account" autocomplete="off" placeholder="请输入"></el-input>
					</el-form-item>
					
					<el-form-item label="所属行业" :label-width="formLabelWidth">
					  <el-select v-model="form.industry" placeholder="请选择">
					    <el-option label="教育" value="1"></el-option>
					    <el-option label="互联网" value="2"></el-option>
					  	<el-option label="娱乐" value="3"></el-option>
					  </el-select>
					</el-form-item>
					
					<el-form-item label="团队规模" :label-width="formLabelWidth">
					  <el-select v-model="form.teamSize" placeholder="请选择">
					    <el-option label="10人一下" value="1"></el-option>
					    <el-option label="10-99人" value="2"></el-option>
					  	<el-option label="100-499人" value="3"></el-option>
						<el-option label="500人以上" value="4"></el-option>
					  </el-select>
					</el-form-item>
					
					<el-form-item label="联系人姓名" :label-width="formLabelWidth" >
					  <el-input class="input" v-model="form.contactName" autocomplete="off" placeholder="请输入"></el-input>
					</el-form-item>
					
					<el-form-item label="联系人电话" :label-width="formLabelWidth">
					  <el-input class="input" v-model="form.contactPhone" autocomplete="off" placeholder="请输入"></el-input>
					</el-form-item>
					
					<el-form-item label="公司地址" :label-width="formLabelWidth" >
					  <el-input class="input" v-model="form.companyAddress" autocomplete="off" placeholder="请输入"></el-input>
					</el-form-item>
					
					<el-form-item label="备注信息" :label-width="formLabelWidth">
					  <el-input class="input" v-model="form.remark" autocomplete="off" placeholder="请输入"></el-input>
					</el-form-item>
					
					<el-divider></el-divider>
				</el-form>
				
				  <div class="save"><el-button  @click="doSubmit">保存</el-button></div>
				
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
			    name:'',
				account:'',
				industry:'',
				contactName:'',
				contactPhone:'',
				teamSize:'',
				companyAddress:'',
				remark:'',
			  },
	        formLabelWidth: '120px'
	      };
	    },
		methods:{
			doSubmit:function(data){
				this.$axios
					.post("enterpise/update", this.form) //请求接口
					.then(resp => { //当服务器返回结果后处理
						let {
							data
						} = resp;
						if(data.success){
						}
					})
					.catch(err => { //当请求失败，处理
						console.log(err)
					})
			},
			
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
		height: 864px;
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
		height: 734px;
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
	.el-select{
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