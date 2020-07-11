<template>
	<div class="session-box">
		<div class="session-head">
			<div class="user-info">
				<span class="user-name">北京客户:{{sessionId}}</span>
				<span class="session-index">首次会话</span>
			</div>
			<div class="dialog-btns">
				<span class="dialog-btn"><i class="iconfont icon-add"></i>创建工单</span>
				<span class="dialog-btn"><i class="iconfont icon-fanhui"></i>转接</span>
				<span class="dialog-btn"><i class="iconfont icon-lahei"></i>拉黑</span>
				<span class="dialog-btn"><i class="iconfont icon-jieshu"></i>结束会话</span>
			</div>
		</div>
		<div class="session-body">
			<div class="session-main-body">
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
			<div class="session-util-tab">
				<dl>
					<dt class="tabs">
						<span class="tab-title active">资料</span>
						<span class="tab-title">常用语</span>
						<span class="tab-title">历史工单</span>
					</dt>
					<dd>
						<div class="tab-content active">
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
						<div class="tab-content active">常用语</div>
						<div class="tab-content">
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
	</div>
</template>

<script>
	export default{
		name:"SessionWindow",
		props:["sessionId"],
		created:function() {
			//根据sessionId查询出这个session相关的消息
			console.log(this.sessionId)
		}
	}
</script>

<style>
	/* 聊天部分 */
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
	}
	
	.dialog-btns{
		flex: 1;
		text-align: right;
		color: #006EFF;
	}
	.dialog-btns span{
		margin-right: 34px;
	}
	.session-index{
		font-size: 12px;
		opacity: .6;
	}
	.dialog-btns span:hover{
		cursor: pointer;
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
		height: 500px;
		padding: 50px 20px;
		overflow:auto;
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
		height: 40px;
	}
	.input-box textarea{
		height: 100%;
		width: 100%;
		border-style:none ;
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
	}
	
	/* 选项卡 */
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
	.tab-content dt button{
		float: right;
		background-color: transparent;
		border-style: none;
		color: #006EFF;
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
</style>
