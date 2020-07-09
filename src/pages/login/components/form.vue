<template>
	<form action="">
		<h3>{{type}}极客营客服云</h3>
		<div class="item"><label for="">账号</label><input type="text" v-model="customerServicePhone"></div>
		<div class="item"><label for="">密码</label><input type="password" v-model="password"></div>
		<div class="tip" v-if="isLoginForm">忘记密码请联系客服</div>
		<div class="item btn" @click="doSubmit">{{type}}</div>
		<div class="to-regist" v-if="isLoginForm">
			<router-link to="/regist">没有账号，去注册</router-link>
		</div>
	</form>
</template>

<script>
	export default{
		props:["type"],
		data:function(){
			return {
				customerServicePhone:"",
				password:"",
				isLoginForm:this.type=='登录'
			}
		},
		methods:{
			doSubmit(){
				let customerServicePhone = this.customerServicePhone;
				let password = this.password;
				// 告诉父组件，abcEvent已经发生了
				this.$emit("abcEvent",{customerServicePhone,password})
			}
		},
		computed:{
			// isLoginForm:function(){
			// 	return type=='登录';
			// }
		},
		name:"g-form"
	}
</script>

<style>
	form{
		background-color: rgb(0, 110, 255);
		padding: 85px 40px;
		color: #fff;
	}
	h3{
		text-align: left;
		font-family: PingFangSC-Semibold, "PingFang SC Semibold", "PingFang SC", sans-serif;
		font-size: 32px;
		font-weight: 650;
		margin-bottom: 47px;
	}
	.item{
		width: 358px;
		height: 48px;
		background-color: #fff;
		margin-bottom: 16px;
		padding: 12px;
		box-sizing: border-box;
		border-radius: 2px;
	}
	.item label{
		font-size: 14px;
		font-weight: 400;
		color: #333333;
		line-height: normal;
		font-feature-settings: "kern";
		margin-right: 25px;
	}
	.item input{
		border-style: none;
		outline-style: none;
	}
	.tip{
		text-align: right;
		font-size: 13px;
		margin-bottom: 39px;
	}
	.item.btn{
		background-color: rgb(255, 145, 56);
		text-align: center;
		font-size: 16px;
		font-weight: 400;
	}
</style>
