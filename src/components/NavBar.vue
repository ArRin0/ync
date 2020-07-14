<template>
	<div class="nav">
		<div class="logo">Logo</div>
		<div class="menu">
			<div class="menu-item"><router-link to="/home"><i class="iconfont icon-shouye7"></i></router-link></div>
			<div class="menu-item"><router-link to="/index/current-session"><i class="iconfont icon-gongdanguanli"></i></router-link></div>
			<div class="menu-item"><router-link to="/visit"><i class="iconfont icon-fangke"></i></router-link></div>
			<div class="menu-item"><router-link to="/index/history-session"><i class="iconfont icon-lishi"></i></router-link></div>
			<div class="menu-item"><router-link to="/customer"><i class="iconfont icon-yonghu"></i></router-link></div>
			<div class="menu-item"><router-link to="/WorkOrder"><i class="iconfont icon-gongdan"></i></router-link></div>
			<div class="menu-item"><router-link to="/data"><i class="iconfont icon-tongji"></i></router-link></div>
			<div class="menu-item separate-line"><i class="iconfont icon-hengxian"></i></div>
			<div class="menu-item"><router-link to="/settingofpersonal"><i class="iconfont icon-shezhi"></i></router-link></div>
			<div class="menu-item"><router-link to="/login"><i class="iconfont icon-tubiaoshangchuanmoban"></i></router-link></div>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:'NavBar',
		data:function(){
			return {
				
			}
		}
	}
</script>

<style scoped >
	/* 菜单 */
	.nav{
		position: fixed;
		z-index: 999;
		left: 0;
		top: 0;
		width: 64px;
		height: 722px;
		background-color: #171c3a;
		border: 1px solid #797979;
	}
	.router-link-active{
		text-decoration:none;
	}
	a{
		text-decoration:none;
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
		text-decoration:none;
		color: #FFFFFF;
		cursor: pointer;
	}
	.menu a{
		color: #fff;
	}
	.menu .menu-item.separate-line{
		color: dimgrey;
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
