<template>
	<div>
		<div class="dialog-box">
			<div class="header">
				<div class="c-img"><i class="iconfont icon-Customerservice"></i><h4>七尾云在线客服</h4></div>
				<i class="iconfont icon-fork"></i>
			</div>
			<div class="box"></div>
			<div class="cpn">
				<i class="iconfont icon-smail"></i>
				<i class="iconfont icon-picture"></i>
				<i class="iconfont icon-wenjianjia"></i>
			</div>
			<div class="item"><textarea name="txt" rows="2" placeholder="请输入内容"></textarea></div>
			<div><button><span>发送</span></button></div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.dialog-box{
		width: 701px;
		height: 700px;
		background-color: #FFFFFF;
		margin:0 auto;
		position: relative;
		top: 10px;
		border-radius: 4px;
	}
	.c-img{
		width: 40px;
		height: 40px;
		background-color: #006eff;
		border-radius: 50%;
		text-align: center;
		position: relative;
		top: 7px;
		left: 10px;
	}
	.c-img i{
		font-size: 30px;
		color: white;
		position: relative;
		top: 4px;
	}
	.c-img h4{
		font-weight: normal;
		width: 98px;
		height: 19px;
		position: absolute;
		top: 10px;
		left: 50px;
	}
	.icon-fork{
		font-size: 14px;
		font-weight: bold;
		color: #707070;
		position: absolute;
		top: 19px;
		left: 665px;
	}
	.icon-fork:hover{
		color: #0c75ff;
	}
	.box{
		width: 700px;
		height: 500px;
		background-color: rgba(242, 242, 242, 0.498);
		margin-top: 13px;
	}
	.cpn{
		padding-top: 16px;
		padding-left: 19px;
		padding-bottom: 11px;
	}
	.cpn i{
		font-size: 20px;
		color: gray;
		margin-right: 25px;
		font-weight: bold;
	}
	.cpn i:hover{
		color: #0c75ff;
	}
	.item{
		width: 664px;
		height: 40px;
		margin-left: 15px;
	}
	.item textarea{
		resize:none;
		width: 664px;
		height: 40px;
		border-style: none;
		outline-style: none;
		border: 2px;
		font-size: 15px;
		padding-top: 0;
	}
	button{
		width: 100px;
		height: 40px;
		background-color: rgba(0, 110, 255, 0.898);
		border-radius: 2px;
		border-style: none;
		outline-style: none;
		color: white;
		float: right;
		margin-right: 21px;
	}
</style>
