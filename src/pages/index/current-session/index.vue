<template>
	<div class="current-session">
		<session-list type="current" @selectedSession="noticeWindow" :sessionList="sessionList"></session-list>
		<session-window :session="session" :msgs="msgs" :socket="socket"></session-window>
	</div>
</template>

<script>
	import SessionList from '../components/SessionList.vue'
	import SessionWindow from '../components/SessionWindow.vue'
	
	export default{
		name:"CurrentSession",
		components:{
			SessionList,SessionWindow
		},
		data:function(){
			return {
				session:null,
				socket:null,
				sessionList:[],
				msgs:[]
			}
		},
		methods:{
			noticeWindow:function(session){
				this.session = session;
				this.msgs=[]
			},
			initWebsocket:function(){
				if(typeof(WebSocket) == "undefined") {
				    console.log("您的浏览器不支持WebSocket");
				}else{
				    console.log("您的浏览器支持WebSocket");
				    //实现化WebSocket对象，指定要连接的服务器地址与端口  建立连接
				    var userId = JSON.parse(localStorage.getItem("user")).id;
				    var socketUrl="ws://localhost:8080/ccs/webSocket/"+userId+"/cs";
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
				    this.socket.onmessage = (resp)=>{
						let data = JSON.parse(resp.data);
						if(data.type){
							this.sessionList = data.sessionList;
						}else{
							this.msgs.push(data);
							console.log(this.msgs);
						}
						// console.log(this.sessionList)
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
			}
		},
		mounted() {
			// 当页面显示后，客服应该连接websocket
			this.initWebsocket();
		}
	}
</script>

<style>
.current-session{
	display: flex;
}


</style>
