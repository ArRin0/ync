<template>
	<div class="container">
		<div class="box">
			<div v-if="type=='登录'"><img src="./imgs/u2.svg" alt=""></div>
			<div v-if="type=='注册'"><img src="./imgs/u1.svg" alt=""></div>
			<div class="form">
				<slot></slot>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		props:["type"],
		name:"layout"
	}
</script>

<style>
	.container{
		width: 1169px;
		height: 864px;
		margin: 0 auto;
	}
	.box{
		display: flex;
		flex-direction:row;
		justify-content:space-between;
		margin-top: 160px;
		height: 507px;
	}
	img{
		width: 600px;
		height: 479px;
	}
	.form{
		float: right;
		width: 439px;
		height: 507px;
	}
</style>
