<template>
	<div class="session-box">
		<div class="session-head">
			<div class="user-info">
				<span class="user-name">北京客户</span>
				<span class="session-index">首次会话</span>
			</div>
			<div class="dialog-btns">
				<CreateWorkOrder></CreateWorkOrder>
				<Transfer></Transfer>
				<black></black>
				<EndSession></EndSession>
				<!-- 创建工单的对话框 -->

				<!-- 拉黑对话框 -->
			</div>
		</div>
		<div class="session-body">
			<div class="session-main-body">
				<div class="session-window">
					<div class="session-msg sender" v-for="msg in msgs" :key="msg.id">
						<div class="user-img">
							<i class="iconfont icon-beizit"></i>
						</div>
						<div class="msg-detail">
							<div class="msg-title">
								<span class="user-name">{{msg.msgSenderName}}</span>
								<span class="msg-time">{{msg.createTime}}</span>
							</div>
							<div class="msg-content">{{msg.content}}</div>
						</div>
					</div>
				</div>
				<div class="session-input">
					<div class="icon-img">
						<span class="icon"><i class="iconfont icon-xiaolian1"></i></span>
						<span class="file"><i class="iconfont icon-tupian"></i></span>
					</div>
					<div class="input-box">
						<textarea id="msg" placeholder="请输入内容" v-model="content">

						</textarea>
					</div>
					<div class="input-btn">
						<button type="button" @click="sendMsg">发送</button>
					</div>
				</div>
			</div>
			<div class="session-util-tab">
				<dl>
					<dt class="tabs">
						<span :class="activeClass ==k?'tab-title active':'tab-title'" v-for="(title,k) in titles" @click="IsActive(k)">{{title.name}}</span>
					</dt>
					<dd>
						<div :class="activeClass ==0?'tab-content active':'tab-content'">
							<dl class="customer-device">
								<dt>访客信息</dt>
								<dd><span class="label">来源</span><span class="item">113.128.230.51</span></dd>
								<dd><span class="label">IP地址</span><span class="item">113.128.230.51</span></dd>
								<dd><span class="label">浏览器</span><span class="item">Chrome 81.0.4044.138</span></dd>
								<dd><span class="label">屏幕尺寸</span><span class="item">1440 x 900</span></dd>
								<dd><span class="label">设备</span><span class="item">Mac</span></dd>
							</dl>
							<dl class="customer-info">
								<dt>客户信息<button><i class="iconfont icon-2bianji"></i>编辑</button></dt>
								<dd><span class="label">客户名称</span><span class="item">北京市客户</span></dd>
								<dd><span class="label">真实姓名</span><span class="item">王伟</span></dd>
								<dd><span class="label">客户电话</span><span class="item">—</span></dd>
								<dd><span class="label">客户邮箱</span><span class="item">—</span></dd>
								<dd><span class="label">客户公司</span><span class="item">—</span></dd>
								<dd><span class="label">客户地址</span><span class="item">—</span></dd>
								<dd><span class="label">客户等级</span><span class="item">普通客户</span></dd>
								<dd><span class="label">客户来源</span><span class="item">访客转化</span></dd>
								<dd><span class="label">客户备注</span><span class="item">—</span></dd>
								<dd><span class="label">客户标签</span><span class="item"><span>已上市</span><span>潜在客户</span></span></dd>
							</dl>
						</div>
						<div :class="activeClass ==1?'tab-content active':'tab-content'">
							<el-collapse v-model="activeName" accordion>
							  <el-collapse-item title="礼貌性常用语" name="1">
							    <div class="common">很高兴为您服务，祝您生活愉快！</div>
							    <div class="common">不客气，这是我应该的！</div>
							  </el-collapse-item>
							  <el-collapse-item title="常见问题回答" name="2">
							    <div class="common">目前人有些多，麻烦您等待一会呢</div>
							    <div class="common">好的，这就为您办理该业务</div>
							  </el-collapse-item>
							</el-collapse>
						</div>
						<div :class="activeClass ==2?'tab-content active':'tab-content'">
							<dl class="customer-info">
								<dt>工单信息</dt>
								<dd><span class="label">工单标题</span><span class="item">分类一</span></dd>
								<dd><span class="label">工单描述</span><span class="item">客户需要型号SU-CC8990的产品</span></dd>
								<dd><span class="label">工单分类</span><span class="item">分类一</span></dd>
								<dd><span class="label">抄送人</span><span class="item">王涛，吴敏儿</span></dd>
								<dd><span class="label">优先级</span><span class="item">低</span></dd>
								<dd><span class="label">工单状态</span><span class="item">处理中</span></dd>
								<dd><span class="label">受理客服组</span><span class="item">客服组一</span></dd>
								<dd><span class="label">受理客户</span><span class="item">王先生</span></dd>
								<dd><span class="label">创建时间</span><span class="item">2020/06/09 20:09</span></dd>
								<dd><span class="label">更新时间</span><span class="item">2020/06/09 20:09</span></dd>
								<dd class="detail">查看工单时间<i class="iconfont icon-xiangqing"></i></dd>
							</dl>
						</div>
					</dd>
				</dl>
			</div>
		</div>
		<!-- 对话框区 -->
		<el-dialog title="创建工单" :visible.sync="orderDialogVisible" width="30%" :before-close="handleClose">
			<el-form ref="form" :model="form" label-width="80px">
				
				<el-form-item label="工单分类">
					<el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="工单标题">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="工单描述">
					<el-input type="textarea" v-model="form.desc"></el-input>
				</el-form-item>
				<el-form-item label="附件">
					<el-upload
					  class="upload-demo"
					  action="http://localhost:8080/ccs//oss/file/upload/"
					  :on-success="handleAvatarSuccess"
					  multiple
					  :limit="3"
					  >
					  <el-button size="small" type="primary">点击上传</el-button>
					  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
					</el-upload>
				</el-form-item>
				<el-form-item label="抄送人">
					<el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				
				<el-form-item label="优先级">
					<el-radio-group v-model="form.resource">
						<el-radio label="线上品牌商赞助"></el-radio>
						<el-radio label="线下场地免费"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="工单状态">
					<el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">立即创建</el-button>
					<el-button>取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
	import CreateWorkOrder from '@/components/CreateWorkOrder.vue'
	import Transfer from '@/components/Transfer.vue'
	import black from '@/components/black.vue'
	import EndSession from '@/components/EndSession.vue'
	require('../../../utils/date.js')
	
	export default {
		name: "SessionWindow",
		components:{CreateWorkOrder,Transfer,black,EndSession},
		props: ["session","msgs","socket"],
		data: function() {
			return {
				activeClass: 0,
				activeName: '1',
				titles:[
				    {name: '资料'},
				    {name: '常用语'},
					{name: '历史工单'},
				],
				orderDialogVisible: false,
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				content:'',
				cs:null
			}
		},
		created: function() {
			let suser = localStorage.getItem("user");
			this.cs = JSON.parse(suser);
		},
		methods: {
	
			      IsActive(k) {
			        this.activeClass = k;
			      },
			
			createOrder() {
				this.orderDialogVisible = true;
			},
			handleClose() {
				this.orderDialogVisible = false;
			},
			handleAvatarSuccess(event){
				console.log(event);
			},
			sendMsg(){
				let msg ={
					content:this.content,
					msgSenderId:this.cs.id,
					msgSenderName:this.cs.nickName,
					msgReceiverId:this.session.visitorId,
					sessionId:this.session.id,
					createTime:new Date().format('yyyy-MM-dd hh:mm:ss')
				}
				this.socket.send(JSON.stringify(msg));//websocket接受的是字符串
				this.msgs.push(msg);//当前界面内容更新
				this.content="";//聊天输入元素清空
			}
		}
	}
</script>

<style>
	/* 聊天部分 */
	.session-box {
		width: 1016px;
		height: 800px;
		background-color: #fff;
		border-radius: 4px;
	}

	.session-head {
		display: flex;
		height: 53px;
		padding: 15px 19px 16px;
		border-bottom: 2px solid rgba(242, 242, 242, 0.498);
	}

	.dialog-btns {
		flex: 1;
	/* 	text-align: right; */
		color: #006EFF;
	}

	.dialog-btns span {
		margin-right: 34px;
	}

	.session-index {
		font-size: 12px;
		opacity: .6;
	}

	.dialog-btns span:hover {
		cursor: pointer;
	}

	.session-body {
		display: flex;

	}

	.session-body .session-main-body {
		width: 700px;
		border-right: 2px solid rgba(242, 242, 242, 0.498);
	}

	.session-main-body .session-window {
		background-color: rgba(242, 242, 242, 0.498);
		height: 500px;
		padding: 50px 20px;
		overflow: auto;
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
		color: #ccc;
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
		padding: 10px 20px;
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
		height: 40px;
	}

	.input-box textarea {
		height: 100%;
		width: 100%;
		border-style: none;
	}

	.input-btn {
		text-align: right;
	}

	.input-btn button {
		background-color: #006EFF;
		color: #fff;
		border-style: none;
		width: 100px;
		height: 40px;
		border-radius: 4px;
	}

	/* 选项卡 */
	.session-util-tab .tabs {
		display: flex;
		justify-content: space-between;
		height: 64px;
		padding: 0px 22px;
		border-bottom: 2px solid rgba(242, 242, 242, 0.498);
		color: rgb(51, 51, 51);
		font-weight: 400;
	}

	.session-util-tab .tabs span {
		line-height: 64px;
	}

	.session-util-tab .tabs span.active {
		color: #006EFF;
		border-bottom: 4px solid #006EFF;
	}

	.session-util-tab>dl>dd {
		padding: 20px;
	}

	.session-util-tab>dl>dd .tab-content {
		display: none;
	}

	.session-util-tab>dl>dd .tab-content.active {
		display: block;
	}

	.tab-content dt {
		font-size: 16px;
		font-weight: 400;
		color: rgb(51, 51, 51);
		margin-bottom: 16px;
	}

	.tab-content dt button {
		float: right;
		background-color: transparent;
		border-style: none;
		color: #006EFF;
	}

	.tab-content dt button i {
		margin-right: 10px;
	}

	.tab-content dd {
		height: 24px;
		line-height: 24px;
		font-size: 13px;
		font-weight: 400;
	}

	.tab-content dd .label {
		display: inline-block;
		width: 74px;
		margin-right: 13px;
		color: rgb(204, 204, 204);
	}

	.tab-content dd .item {
		color: rgb(51, 51, 51);
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.tab-content dl {
		margin-bottom: 20px;
	}

	.detail {
		text-align: right;
		color: #006EFF;
		cursor: pointer;
	}
	
	
	
	
	
	
	
	.session-box{
			width: 1016px;
			height: 800px;
			background-color: #fff;
			border-radius: 4px;
		}
		
		.session-head{
			display: flex;
			height: 53px;
			padding: 15px 19px 16px;
			border-bottom: 2px solid rgba(242, 242, 242, 0.498);
			box-sizing: border-box;
			position: relative;
		}
		
		.dialog-btns{
			flex: 1;
			/* text-align: right; */
			color: #006EFF;
			display: flex;
		}
		.session-index{
			font-size: 14px;
			opacity: .6;
		}
		.user-name{
			font-size: 16px;
		}
		.session-body{
			display: flex;
			
		}
		.session-body .session-main-body{
			width: 700px;
			border-right: 2px solid rgba(242, 242, 242, 0.498);
		}
		.session-main-body .session-window{
			background-color: rgba(242, 242, 242, 0.498);
			height: 420px;
			padding: 50px 20px;
			overflow-y:auto;
		}
		.session-main-body .session-window::-webkit-scrollbar{
			display: none;
		}
		.session-main-body .session-input{
			height: 147px;
		}
		.session-body .session-util-tab{
			width: 340px;
		}
		
		.session-window .session-msg{
			display: flex;
		}
		
		.session-msg .user-img{
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
		.session-msg.receiver .user-img{
			margin-right: 0px;
			margin-left: 10px;
		}
		.session-msg .msg-detail{
			max-width: 80%;
		}
		.session-msg .msg-title{
			color: #ccc;
			margin-bottom: 6px;
		}
		.session-msg .msg-content{
			padding: 10px 12px;
			background-color: #fff;
			box-shadow: rgb(204, 204, 204) 0px 0px 5px 0px;
			border-radius: 4px;
			margin-bottom: 20px;
		}
		.session-msg.receiver{
			flex-direction: row-reverse;
		}
		.session-input{
			padding: 10px 20px;
		}
		.session-input .icon-img{
			height: 30px;
			line-height: 30px;
			margin-bottom: 12px;
		}
		.session-input .icon-img i{
			font-size: 20px;
			color: rgba(0,0,0,.6);
		}
		.session-input .icon-img span{
			margin-right: 23px;
		}
		.session-input .input-box{
			height: 100px;
		}
		.input-box textarea{
			height: 100%;
			width: 100%;
			border-style:none ;
		}
		.input-box textarea:focus{
			outline: none;
		}
		.input-btn{
			text-align: right;
		}
		.input-btn button{
			background-color: #006EFF;
			color: #fff;
			border-style: none;
			width: 100px;
			height: 40px;
			border-radius: 4px;
			margin-top: 10px;
		}
		
		/* 选项卡 */
		.tab-title:hover{
			cursor:pointer;
		}
		.session-util-tab .tabs{
			display: flex;
			justify-content: space-between;
			height: 64px;
			padding: 0px 22px;
			border-bottom: 2px solid  rgba(242, 242, 242, 0.498);
			color:rgb(51,51,51);
			font-weight: 400;
		}
		.session-util-tab .tabs span{
			line-height: 64px;
		}
		.session-util-tab .tabs span.active{
			color: #006EFF;
			border-bottom: 4px solid #006EFF;
		}
		.session-util-tab>dl>dd{
			padding: 20px;
		}
		.session-util-tab>dl>dd .tab-content{
			display: none;
		}
		.session-util-tab>dl>dd .tab-content.active{
			display: block;
		}
		
		.tab-content dt{
			font-size: 16px;
			font-weight: 400;
			color: rgb(51,51,51);
			margin-bottom: 16px;
		}
		.box>span{
			float: right;
			background-color: transparent;
			border-style: none;
			color: #006EFF;
			font-size: 14px;
		}
		.box>span:hover{
			cursor: pointer;
		}
		.tab-content dt button i{
			margin-right: 10px;
		}
		.tab-content dd{
			height: 24px;
			line-height: 24px;
			font-size: 13px;
			font-weight: 400;
		}
		.tab-content dd .label{
			display: inline-block;
			width: 74px;
			margin-right: 13px;
			color: rgb(204,204,204);
		}
		
		.tab-content dd .item{
			color: rgb(51,51,51);
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
		
		.tab-content dl{
			margin-bottom: 20px;
		}
		
		.detail{
			text-align: right;
			color: #006EFF;
			cursor: pointer;
		}
		.common:hover{
			cursor: pointer;
			background-color: rgba(0, 110, 255, 0.098);
		}
		.common{
			height: 40px;
			width: 340px;
			line-height: 40px;
			font-size: 13px;
			font-weight: 400;
			padding-left: 20px;
			border:1px solid hsla(0,0%,100%,.5 );
			background:white;
			background-clip:padding-box;
		}
	/* 	CreateWorkOrder{
			width: 60px;
			float:right;
		}
		.box{
			float:right;
		}
		.el-button.el-button--text{
			height: 20px;
		} */
		 .tem1.box{
			position: absolute;
			left:630px;
			bottom: 6px;	
		}	
		.tem2.box{
			position: absolute;
			left:740px;
			bottom: 6px;	
		}	
		.tem3.box{
			position: absolute;
			left:830px;
			bottom: 6px;	
		}	
		.tem4.box{
			position: absolute;
			left:920px;
			bottom: 6px;	
		}	
</style>
