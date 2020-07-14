<template>
	<div class="nav">
		<div class="logo">Logo</div>
		<div class="menu">
			<div class="menu-item"><router-link to=""><i class="iconfont icon-i-home"></i></router-link><div class="text">首页</div></div>
			<div class="menu-item"><router-link to="/index/current-session"><i class="iconfont icon-msg"></i></router-link><div class="text">消息</div></div>
			<div class="menu-item"><router-link to=""><i class="iconfont icon-cc-users"></i></router-link><div class="text">客户</div></div>
			<div class="menu-item"><router-link to="/index/history-session"><i class="iconfont icon-history"></i></router-link><div class="text">历史</div></div>
			<div class="menu-item"><router-link to=""><i class="iconfont icon-customer"></i></router-link><div class="text">客户</div></div>
			<div class="menu-item"><router-link to=""><i class="iconfont icon-order"></i></router-link><div class="text">订单</div></div>
			<div class="menu-item"><router-link to=""><i class="iconfont icon-statics"></i></router-link><div class="text">统计</div></div>
			<div class="menu-item separate-line"><i class="iconfont icon-fengexian"></i></div>
			<div class="menu-item"><router-link to=""><i class="iconfont icon-Settingscontroloptions"></i></router-link><div class="text">设置</div></div>
			<div class="menu-item"><router-link to=""><i class="iconfont icon-logout"></i></router-link><div class="text">退出</div></div>
		</div>
	</div>
</template>

<script scoped >
	
	export default{
		name:'NavBar',
		data:function(){
			return {
				
			}
		}
	}
</script>

<style>
	/* 菜单 */
	.nav{
		position: absolute;
		left: 0;
		top: 0;
		width: 64px;
		height: 100vh;
		background-color: #000;
		border: 1px solid #797979;
	}
	.logo{
		margin: 29px auto 20px;
		width: 48px;
		height: 48px;
		background-color: #006eff;
		font-family: Arial Regular, Arial, sans-serif;
		font-weight: 700;
		line-height: 48px;
		text-align: center;
		color: #fff;
		border-radius: 50%;
	}
	
	.menu{
		
	}
	.menu .menu-item{
		position: relative;
		font-weight: 700;
		height: 56px;
		line-height: 56px;
		text-align: center;
		color: #FFFFFF;
		cursor: pointer;
	}
	.menu a{
		color: #fff;
	}
	.menu .menu-item.separate-line{
		/* cursor: ; */
	}
	.menu i{
		font-size: 20px;
	}
	.menu .text{
		display: none;
		position: absolute;
		top:10px;
		right: -60px;
		width: 50px;
		height: 36px;
		border-radius: 4px;
		line-height: 36px;
		background-color: #000000;
	}
	.menu-item:hover{
		color: #006EFF;
	}
	.menu-item:hover .text{
		display: block;
		color: #fff;
	}
	.menu .text::before{
		position: absolute;
		left: -16px;
		top: 10px;
		content: "";
		width: 0;
		height: 0;
		border: transparent 8px solid;
		border-right-color: #000000;
	}
</style>
