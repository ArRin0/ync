<template>
	<div class="container">
		<div class="box">
			<img src="./imgs/u2.svg" alt="">
			<div class="form">
				<slot></slot>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
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
