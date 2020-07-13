<template>
	<div class="session-main-body">
		<div class="title"><h3>七尾~在线客服</h3></div>
		<div class="session-window">
			<div class="session-msg sender">
				<div class="user-img">
					<i class="iconfont icon-beizit"></i>
				</div>
				<div class="msg-detail">
					<div class="msg-title">
						<span class="user-name">客服1号</span>
						<span class="msg-time">2020/06/09 20:09</span>
					</div>
					<div class="msg-content">您好，请问有什么可以帮您呢？您好，请问有什么可以帮您呢？您好，请问有什么可以帮您呢？您好，请问有什么可以帮您呢？您好，请问有什么可以帮您呢？您好，请问有什么可以帮您呢？</div>
				</div>
			</div>
			<div class="session-msg receiver">
				<div class="user-img">
					<i class="iconfont icon-beizit"></i>
				</div>
				<div class="msg-detail">
					<div class="msg-title">
						<span class="user-name">北京客户</span>
						<span class="msg-time">2020/06/09 20:09</span>
					</div>
					<div class="msg-content">您好，我想咨询下。。。？</div>
				</div>
			</div>
			<div class="session-msg receiver">
				<div class="user-img">
					<i class="iconfont icon-beizit"></i>
				</div>
				<div class="msg-detail">
					<div class="msg-title">
						<span class="user-name">北京客户</span>
						<span class="msg-time">2020/06/09 20:09</span>
					</div>
					<div class="msg-content">您好，我想咨询下。。。？您好，我想咨询下。。。？您好，我想咨询下。。。？您好，我想咨询下。。。？您好，我想咨询下。。。？您好，我想咨询下。。。？您好，我想咨询下。。。？您好，我想咨询下。。。？</div>
				</div>
			</div>
			<div class="session-msg receiver">
				<div class="user-img">
					<i class="iconfont icon-beizit"></i>
				</div>
				<div class="msg-detail">
					<div class="msg-title">
						<span class="user-name">北京客户</span>
						<span class="msg-time">2020/06/09 20:09</span>
					</div>
					<div class="msg-content">您好，我想咨询下。。。？</div>
				</div>
			</div>
			<div class="session-msg receiver">
				<div class="user-img">
					<i class="iconfont icon-beizit"></i>
				</div>
				<div class="msg-detail">
					<div class="msg-title">
						<span class="user-name">北京客户</span>
						<span class="msg-time">2020/06/09 20:09</span>
					</div>
					<div class="msg-content">您好，我想咨询下。。。？</div>
				</div>
			</div>
			<div class="session-msg receiver">
				<div class="user-img">
					<i class="iconfont icon-beizit"></i>
				</div>
				<div class="msg-detail">
					<div class="msg-title">
						<span class="user-name">北京客户</span>
						<span class="msg-time">2020/06/09 20:09</span>
					</div>
					<div class="msg-content">您好，我想咨询下。。。？</div>
				</div>
			</div>
		</div>
		<div class="session-input">
			<div class="icon-img">
				<span class="icon"><i class="iconfont icon-xiaolian1"></i></span>
				<span class="file"><i class="iconfont icon-tupian"></i></span>
			</div>
			<div class="input-box">
				<textarea id="msg" placeholder="请输入内容">
	
				</textarea>
			</div>
			<div class="input-btn">
				<button type="button">发送</button>
			</div>
		</div>
	</div>
</template>

<script>
	import UaParser from 'ua-parser-js';
	export default{
		name:"GVisitor",
		data:function(){
			return {
				socket:null,
				userId:null,
			}
		},
		methods:{
			initWebsocket:function(){
					if(typeof(WebSocket) == "undefined") {
					    console.log("您的浏览器不支持WebSocket");
					}else{
					    console.log("您的浏览器支持WebSocket");
					    //实现化WebSocket对象，指定要连接的服务器地址与端口  建立连接
					    var userId = JSON.parse(localStorage.getItem("user")).id;
					    var socketUrl="ws://localhost:8080/ccs/webSocket/"+userId;
					    // var socketUrl="ws://192.168.0.231:22599/webSocket/"+userId;
					    console.log(socketUrl);
					    if(this.socket!=null){
					        this.socket.close();
					        this.socket=null;
					    }
					    this.socket = new WebSocket(socketUrl);
					    //打开事件
					    this.socket.onopen = function() {
					        console.log("websocket已打开");
					        //socket.send("这是来自客户端的消息" + location.href + new Date());
					    };
					    //获得消息事件
					    this.socket.onmessage = function(msg) {
					        //当接收到websocket服务器发送当消息当时候，判断消息是会话列表有更新还是会话消息有更新，更新对应当子组件
					    };
					    //关闭事件
					    this.socket.onclose = function() {
					        console.log("websocket已关闭");
					    };
					    //发生了错误事件
					    this.socket.onerror = function() {
					        console.log("websocket发生了错误");
					    }
					}
				},
			getId:function(){
				// 将客户端信息：IP,客户名称，浏览器，屏幕尺寸，设备等信息提交给服务器，服务器返回当前的访客 id
				 let ip = localStorage.getItem("ip");
				 let visitor_name = localStorage.getItem("cname");
				 
				 let uaParser = new UaParser();
				 let uaInfo = uaParser.getResult();
				 let browser = uaInfo.browser.name;
				 let screenSize = `${window.screen.width}px,${window.screen.height}px`;
				 let params = {
					 ip,
					 visitor_name,
					 browser,
					 screenSize
				 }
				 this.$axios
				 .post('/visitor/save',params)//将封装好的参数提交至后端
				 .then(resp=>{
					 let {data} = resp;
					 this.userId = data.success?data.message:"";
					 this.initWebsocket();
					 console.log(resp);
				 })
				 .catch(err=>{
					 console.log(err)
				 })
				 
			}
			
		},
		created() {
			this.getId();
		}
	}
</script>

<style>
	.session-main-body {
		margin: auto;
		padding-top: 1px;
		padding-bottom: 76px;
		width: 700px;
		border-right: 2px solid rgba(242, 242, 242, 0.498);
		background-color: white;
	}
	
	.title{
		text-align: center;
		margin: 20px;
	}
	
	.session-main-body .session-window {
		background-color: rgba(242, 242, 242, 0.6);
		height: 460px;
		padding: 50px 20px;
		overflow-x: scroll;
	}
	.session-main-body .session-window::-webkit-scrollbar{
		display: none;
	}
	
	.session-main-body .session-input {
		height: 147px;
	}
	
	.session-body .session-util-tab {
		width: 340px;
	}
	
	.session-window .session-msg {
		display: flex;
	}
	
	.session-msg .user-img {
		width: 40px;
		height: 40px;
		line-height: 40px;
		border-radius: 50%;
		text-align: center;
		background-color: #006EFF;
		color: #FFFFFF;
		margin-right: 10px;
		margin-left: 0px;
	}
	
	.session-msg.receiver .user-img {
		margin-right: 0px;
		margin-left: 10px;
	}
	
	.session-msg .msg-detail {
		max-width: 80%;
	}
	
	.session-msg .msg-title {
		color: #aeaeae;
		margin-bottom: 6px;
	}
	
	.session-msg .msg-content {
		padding: 10px 12px;
		background-color: #fff;
		box-shadow: rgb(204, 204, 204) 0px 0px 5px 0px;
		border-radius: 4px;
		margin-bottom: 20px;
	}
	
	.session-msg.receiver {
		flex-direction: row-reverse;
	}
	
	.session-input {
		padding-left: 10px;
	}
	
	.session-input .icon-img {
		height: 30px;
		line-height: 30px;
		margin-bottom: 12px;
	}
	
	.session-input .icon-img i {
		font-size: 20px;
		color: rgba(0, 0, 0, .6);
	}
	
	.session-input .icon-img span {
		margin-right: 23px;
	}
	
	.session-input .input-box {
		height: 120px;
	}
	
	.input-box textarea {
		height: 100%;
		width: 100%;
		border-style: none;
	}
	.input-box textarea:focus{
		outline: none;
	}
	
	.input-btn {
		text-align: right;
	}
	
	.input-btn button {
		background-color: #006EFF;
		color: #fff;
		border-style: none;
		margin-right: 16px;
		margin-top: 6px;
		width: 100px;
		height: 40px;
		border-radius: 4px;
	}
</style>
