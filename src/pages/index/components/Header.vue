<template>
	<div class="top">
		<div class="h3">首页</div>
		<div class="users-info">
			<div class="user-msg msg"><i class="iconfont icon-lingdang"></i></div>
			<div class="user-img"><img src="img/u94.svg" ></div>
			<div class="user-name">
				{{user.nickName}}<i class="iconfont icon-icon_down-arrow"></i>
				<div class="user-status">
					<div class="user-status-item active"><i class="iconfont icon-dian"></i>在线</div>
					<div class="user-status-item"><i class="iconfont icon-dian"></i>离线</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"GHeader",
		data:function(){
			return {
				user:{}
			}
		},
		created() {
			let suser = localStorage.getItem("user");
			this.user = JSON.parse(suser);
		}
	}
</script>

<style>
	.top{
		height: 64px;
		background-color: #FFFFFF;
		/* border: 1px solid #797979; */
		display: flex;
	}
	.top .h3{
		font-family: Arial Regular, Arial, sans-serif;
		font-size: 18px;
		margin: 18px 84px 25px;
	}
	.top .users-info{
		flex: 1;
		display: flex;
		justify-content: flex-end;
		padding-right: 20px;
	}
	.top .users-info div{
		height: 64px;
		line-height: 64px;
	}
	.top .user-msg,.top .user-img{
		position: relative;
		width: 63px;
		text-align: center;
	}
	.user-msg i{
		font-size: 20px;
	}
	.user-msg:hover{
		color: #006eff;
	}
	.user-name i:hover{
		color: #006eff;
	}
	.user-msg.msg::after{
		content: "";
		display: block;
		width: 8px;
		height: 8px;
		background-color: red;
		border-radius: 50%;
		position: absolute;
		top: 20px;
		right: 40px;
	}
	
	.users-info .user-img img{
		margin-top: 12px;
	}
	
	.user-name{
		position: relative;
	}
	.users-info .user-name .user-status{
		display: none;
		position: absolute;
		top: 68px;
		right: 0px;
		width: 80px;
		height: 80px;
		background-color: #fff;
		text-align: center;
	}
	/* 当users-info里的user-name鼠标悬浮的时候，user-name里的user-status的样式是 */
	.users-info .user-name:hover .user-status{
		display: block;
	}
	.user-name .user-status .user-status-item{
		height: 40px;
		line-height: 40px;
	}
	/* 当user-status里的user-status-item还有active这个类当时候，应用样式 */
	.user-status .user-status-item.active{
		color: greenyellow;
	}
</style>
