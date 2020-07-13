<template>
	<div class="workOrder">
		
			<dl>
				<dt>通用设置</dt>
				<dd :class="activeClass1==k?'active':''" v-for="(item,k) in items1" @click="IsActive1(k)">
					<div class="item">{{item.name}}</div>
				</dd>
			</dl>
		
		
			<dl>
				<dt>团队设置</dt>
				<dd :class="activeClass2 ==k?'active':''" v-for="(item,k) in items2" @click="IsActive2(k)">
					<div class="item">{{item.name}}</div>
				</dd>
			</dl>
		
		
			<dl>
				<dt>客服设置</dt>
				<dd :class="activeClass3 ==k?'active':''" v-for="(item,k) in items3" @click="IsActive3(k)">
					<div class="item">{{item.name}}</div>
				</dd>
			</dl>
		
	
			<dl>
				<dt>工单设置</dt>
				<dd :class="activeClass4 ==k?'active':''" v-for="(item,k) in items4" @click="IsActive4(k)">
					<div class="item">{{item.name}}</div>
				</dd>
			</dl>
		
		
			<dl>
				<dt>全局设置</dt>
				<dd :class="activeClass5 ==k?'active':''" v-for="(item,k) in items5" @click="IsActive5(k)">
					<div class="item">{{item.name}}</div>
				</dd>
			</dl>
		
	</div>
	
</template>

<script>
	export default{
		name:'LeftListOfWorkOrder',
		data:function(){
			return {
				activeClass1: -1,// 0为默认选择第一个，-1为不选择
				activeClass2: -1,// 0为默认选择第一个，-1为不选择
				activeClass3: -1,// 0为默认选择第一个，-1为不选择
				activeClass4: -1,// 0为默认选择第一个，-1为不选择
				activeClass5: -1,// 0为默认选择第一个，-1为不选择
				items1:[
				    {name: '个人信息'},
				    {name: '通知公告'},
				],
				items2:[
				    {name: '企业信息'},
				    {name: '客服管理'},
					{name: '分组管理'},
					{name: '角色管理'},
				],
				items3:[
				    {name: '常用语'},
				    {name: '自动回复'},
					{name: '对话规则'},
					{name: '分配规则'},
					{name: '会话评价'},
					{name: '客户信息'},
					{name: '客户标签'},
					{name: '黑名单'},
				],
				items4:[
				    {name: '基础设置'},
				    {name: '工单分类'},
				],
				items5:[
				    {name: '操作日志'},
				    {name: '消息通知'},
				],
			}
		},
		methods: {
		      IsActive1(k) {
		        this.activeClass1 = k;
				this.activeClass2 = -1;
				this.activeClass3 = -1;
				this.activeClass4 = -1;
				this.activeClass5 = -1;
				if (k == 0) {
					this.$router.push('/settingofpersonal');
				}
				if (k == 1) {
					this.$router.push('/settingofnotice');
				}
		      },
			  IsActive2(k) {
			    this.activeClass1 = -1;
			    this.activeClass2 = k;
			    this.activeClass3 = -1;
			    this.activeClass4 = -1;
			    this.activeClass5 = -1;
				if (k == 0) {
					this.$router.push('/settingofcompany');
				}
				if (k == 1) {
					this.$router.push('/settingofcustserv');
				}
				if (k == 2) {
					this.$router.push('/settingofgroup');
				}
				if (k == 3) {
					this.$router.push('/settingofrole');
				}
			  },
			  IsActive3(k) {
			    this.activeClass1 = -1;
			    this.activeClass2 = -1;
			    this.activeClass3 = k;
			    this.activeClass4 = -1;
			    this.activeClass5 = -1;
				if (k == 0) {
					this.$router.push('/settingofcommonwords');
				}
				if (k == 1) {
					this.$router.push('/settingofreply');
				}
				if (k == 2) {
					this.$router.push('/settingofdialogrule');
				}
				if (k == 3) {
					this.$router.push('/settingofdistributionrule');
				}
				if (k == 4) {
					this.$router.push('/settingofsessionevaluation');
				}
				if (k == 5) {
					this.$router.push('/settingofcustomerinfor');
				}
				if (k == 6) {
					this.$router.push('/settingofcustomerlabel');
				}
				if (k == 7) {
					this.$router.push('/settingofblacklist');
				}
			  },
			  IsActive4(k) {
			    this.activeClass1 = -1;
			    this.activeClass2 = -1;
			    this.activeClass3 = -1;
			    this.activeClass4 = k;
			    this.activeClass5 = -1;
				if (k == 0) {
					this.$router.push('/settingofbasicsetting');
				}
				if (k == 1) {
					this.$router.push('/settingofclassification');
				}
			  },
			  IsActive5(k) {
			    this.activeClass1 = -1;
			    this.activeClass2 = -1;
			    this.activeClass3 = -1;
			    this.activeClass4 = -1;
			    this.activeClass5 = k;
				if (k == 0) {
					this.$router.push('/settingofoperatelog');
				}
				if (k == 1) {
					this.$router.push('/settingofnotification');
				}
			  },
		}
	}
</script>

<style>
	.workOrder dt,.workOrder dd{
		height: 48px;
	}
	
	.workOrder dt{
		padding-left: 20px;
		line-height: 48px;
		color: rgb(153, 153, 153);;
		font-size: 13px;
		font-weight: 400;
	}
	
	.workOrder{
		position: fixed;
		top: 74px;
		left: 74px;
		width: 240px;
		height: 650px;
		background-color: #FFFFFF;
		font-size: 14px;
		font-weight: 400;
		color: #333333;
		overflow: scroll;
	}
	
	.workOrder .item{
		padding-left: 20px;
		line-height: 48px;
	}
	.workOrder .active{
		background-color: rgba(0, 110, 255, 0.098);
		border-left: 4px solid blue;
	}
	.workOrder dd{
		cursor:pointer;
	}
	.workOrder dd:hover{
		background-color:rgba(0, 110, 255, 0.098) ;
	}
	
	.workOrder dl{
		margin-bottom: 10px;
	}
	
</style>
