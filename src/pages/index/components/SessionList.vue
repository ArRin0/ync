<template>
	<div class="user-list">
		<dl>
			<dt>{{title}}</dt>
			<dd v-for="session in sessions" @click="doClick(session.id)">
				<div class="user-img">
					<i class="iconfont icon-beizit"></i>
				</div>
				<div class="msg-info">
					<div class="user-info"><span class="user">{{session.visitorName}}</span><span class="msg-time">{{session.createTime}}</span></div>
					<div class="msg-latest">{{session.content}}</div>
				</div>
			</dd>
			
		</dl>
	</div>
</template>

<script>
	export default{
		name:'SessionList',
		props:["type"],
		methods:{
			doClick(id){
				this.$emit("selectedSession",id)
			}
		},
		data:function(){
			//users是登录客服相关的当前会话或者历史会话的用户信息
			return {
				title:this.type=='current'?"当前会话":"历史会话",
				sessions:[
				]
			}
		},
		created:function(){
			let user = JSON.parse(localStorage.getItem("user"));
			let customerServiceId = user.id;
			let tp = (this.type=='current')?0:1;//是否为历史会话的标示
			this.$axios
			.get(`/session/list?customerServiceId=${customerServiceId}&type=${tp}&pageNum=1`)
			.then(resp=>{
				let {data} = resp;
				this.sessions = data.result;
			})
		}
	}
</script>

<style>
	.user-list{
		width: 300px;
		background-color: #fff;
		border-radius: 4px;
		margin-right: 10px;
	}
	.user-list dt,.user-list dd{
		height: 64px;
	}
	.user-list dt{
		padding-left: 16px;
		line-height: 64px;
		color: #333333;
		font-size: 16px;
	}
	
	.user-list dd{
		display: flex;
		padding: 12px 20px;
		border-bottom: 1px solid #f2f2f2;
	}
	
	.user-list .user-img{
		width: 40px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		border-radius: 50%;
		background-color: #e4e4e4;
		color: #FFFFFF;
		margin-right: 8px;
	}
	.msg-info .user-img i{
		/* font-size: 13px; */
	}
	.msg-info .user-info{
		display: flex;
		margin-bottom: 4px;
	}
	.user-info .msg-time{
		flex: 1;
		text-align: right;
	}
	.msg-info .user{
		font-weight: 500;
	}
	dd .msg-info{
		flex: 1;
	}
	.msg-info .msg-time{
		font-size: 10px;
		font-weight: 300;
		color: rgba(0,0,0,.3);
	}
	
	.msg-info .msg-latest{
		font-size: 12px;
		font-weight: 300;
		color: rgba(0,0,0,.5);
	}
	
	.user-list dd.active{
		background-color: rgba(0, 110, 255, 0.098);
		border-right: 2px solid blue;
	}
</style>
