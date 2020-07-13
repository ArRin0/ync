<template>
	<div class="page">
		<NavBar></NavBar>
		<g-header name = "客户详情"></g-header>
		<div class="btns">
			<el-button class="button1">< 返回</el-button>
			<ButtonCreateOrder class="button2"></ButtonCreateOrder>
<!-- 			<el-button type="primary" class="button2">创建工单</el-button> -->
			<DeleteCustomer class="button3"></DeleteCustomer>
			<ButtonBlack class="button4"></ButtonBlack>
		</div>
		<div class="customer-info">
			<dl class="customer-info-dl">
				<dt>客户信息
				<div class="box">
						<span class="dialog-btn" @click="dialogFormVisible = true">编辑</span>
						<el-dialog title="编辑客户信息" :visible.sync="dialogFormVisible" class="abow_dialog">
						  <el-form :model="form">
							  <el-form-item label="客户名称" :label-width="formLabelWidth">
								<el-input v-model="form.username" autocomplete="off" placeholder="请输入"></el-input>
							  </el-form-item>
							  
							  <el-form-item label="真实姓名" :label-width="formLabelWidth">
								<el-input v-model="form.realname" autocomplete="off" placeholder="请输入"></el-input>
							  </el-form-item>
							  
							  
							  <el-form-item label="客户电话" :label-width="formLabelWidth">
								<el-input v-model="form.phone" autocomplete="off" placeholder="请输入"></el-input>
							  </el-form-item>
							 
							  <el-form-item label="客户邮箱" :label-width="formLabelWidth">
								<el-input v-model="form.email" autocomplete="off" placeholder="请输入"></el-input>
							  </el-form-item>
							  <el-form-item label="客户公司" :label-width="formLabelWidth">
								<el-input v-model="form.corporation" autocomplete="off" placeholder="请输入"></el-input>
							  </el-form-item>
							 
							  <el-form-item label="客户地址" :label-width="formLabelWidth">
								<el-input v-model="form.address" autocomplete="off" placeholder="请输入"></el-input>
							  </el-form-item>
							  
							  <el-form-item label="客户等级" :label-width="formLabelWidth">
							    <el-select v-model="form.level" placeholder="请选择">
							  	<el-option label="普通客户" value="1"></el-option>
							  	<el-option label="VIP客户" value="2"></el-option>
							  	<el-option label="潜在客户" value="3"></el-option>
							    </el-select>
							  </el-form-item>
							  
							  <el-form-item label="客户来源" :label-width="formLabelWidth">
							    <el-select v-model="form.source" placeholder="请选择">
							  	<el-option label="客服录入" value="1"></el-option>
							  	<el-option label="网页介入" value="2"></el-option>
							    </el-select>
							  </el-form-item>
							
							<el-form-item label="选择标签" :label-width="formLabelWidth">
							  <el-radio v-model="form.radio" label="1">潜在客户</el-radio>
							  <el-radio v-model="form.radio" label="2">上市公司</el-radio>
							</el-form-item>
						
							<el-form-item label="客户备注" :label-width="formLabelWidth">
							  <el-input type="textarea" v-model="form.description" autocomplete="off"  placeholder="请输入"></el-input>
							</el-form-item>
							
						</el-form>
						  <div slot="footer" class="dialog-footer">
						    <el-button @click="dialogFormVisible = false">取 消</el-button>
						    <el-button type="primary" @click="dialogFormVisible = false">保 存</el-button>
							</div>
						</el-dialog>
					</div>
				</dt>
				<dd><span class="label">客户名称</span><span class="item">{{customer.nickName}}</span></dd>
				<dd><span class="label">真实姓名</span><span class="item">{{customer.realName}}</span></dd>
				<dd><span class="label">客户电话</span><span class="item">{{customer.phone}}</span></dd>
				<dd><span class="label">客户邮箱</span><span class="item">{{customer.email}}</span></dd>
				<dd><span class="label">客户公司</span><span class="item">{{customer.company}}</span></dd>
				<dd><span class="label">客户地址</span><span class="item">{{customer.address}}</span></dd>
				<dd><span class="label">客户等级</span><span class="item">{{customer.level}}</span></dd>
				<dd><span class="label">客户来源</span><span class="item">{{customer.channel}}</span></dd>
				<dd><span class="label">客户备注</span><span class="item">{{customer.remark}}</span></dd>
				<dd><span class="label">客户标签</span><span class="item"><span>已上市</span><span>潜在客户</span></span></dd>
			</dl>
		</div>
		<div class="details">
			<div class="top">
				<div class="user-img">
					<i class="iconfont icon-beizit"></i>
				</div>
				<div class="msg-info">
					<div class="user-info"><span class="user">王伟</span></div>
					<div class="msg-latest">北京</div>
				</div>		
			</div>	
			<div class="session-util-tab">
				<dl>
					<dt class="tabs">
						<span :class="activeClass ==k?'tab-title active':'tab-title'" v-for="(title,k) in titles" @click="IsActive(k)">{{title.name}}</span>
					</dt>
					<dd>
						<div :class="activeClass ==0?'tab-content active':'tab-content'">
							<el-radio v-model="radio" label="1">全部</el-radio>
							<el-radio v-model="radio" label="2">本周</el-radio>
							<el-radio v-model="radio" label="3">本月</el-radio>
							<el-radio v-model="radio" label="4">上月</el-radio>
						</div>
						<div :class="activeClass ==1?'tab-content active':'tab-content'">
							<el-radio v-model="radio" label="1">全部</el-radio>
							<el-radio v-model="radio" label="2">本周</el-radio>
							<el-radio v-model="radio" label="3">本月</el-radio>
							<el-radio v-model="radio" label="4">上月</el-radio>
						</div>
						<div :class="activeClass ==2?'tab-content active':'tab-content'">
							<el-radio v-model="radio" label="1">全部</el-radio>
							<el-radio v-model="radio" label="2">本周</el-radio>
							<el-radio v-model="radio" label="3">本月</el-radio>
							<el-radio v-model="radio" label="4">上月</el-radio></div>
					</dd>
				</dl>
			</div>
			
			    <el-table
			      :data="tables.slice((currentPage-1)*pagesize,currentPage*pagesize)"
			      ref="multipleTable"
			      tooltip-effect="dark"
			      style="width: 100% "
				  header-cell-style="background-color: rgba(0, 110, 255, 0.098)"
				  >
			      <template v-for='(col) in tableData'>
			        <el-table-column
			          sortable
			          :show-overflow-tooltip="true"
			          :prop="col.dataItem"
			          :label="col.dataName"
			          :key="col.dataItem"
			          width=auto
					  align="center"
					  >
			        </el-table-column>
			      </template>
			    </el-table>
				<div class="pagination">
					<el-pagination 
						@size-change="handleSizeChange" 
						@current-change="handleCurrentChange" 
						:current-page="currentPage" 
						:page-sizes="[5, 10, 20, 40]" 
						:page-size="pagesize" 
						layout="total, sizes,prev, pager, next" 
						:total="tables.length" 
						prev-text="上一页" 
						next-text="下一页">
					</el-pagination>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	import ButtonCreateOrder from '@/components/ButtonCreateOrder.vue'
	import DeleteCustomer from '@/components/DeleteCustomer.vue'
	import ButtonBlack from '@/components/ButtonBlack.vue'
	
	export default {
		  name:"CustomerDetails",
		  components: {
		  	NavBar,
		  	GHeader,
			ButtonCreateOrder,
			DeleteCustomer,
			ButtonBlack
		  },
	data:function(){
		return {
			nickName:'',
			customer:{
				nickName:'',
				realName:'',
				phone:'',
				email:'',
				company:'',
				address:'',
				level:'',
				channel:'',
				remark:''
			},
			currentPage: 1, //默认显示页面为1
			pagesize: 5, //    每页的数据条数
			rangeDate: [] ,
			tables: [{
				Time:"2020/7/13 22:20",
				browser:"微信",
				customerService:"王美美",
				group:"未分组",
				visitDuration:"12分20秒",
				m:5
			},
			{
				Time:"2020/7/13 22:20",
				browser:"微信",
				customerService:"王美美",
				group:"未分组",
				visitDuration:"12分20秒",
				m:5
			},
			{
				Time:"2020/7/13 22:20",
				browser:"微信",
				customerService:"王美美",
				group:"未分组",
				visitDuration:"12分20秒",
				m:5
			},{
				Time:"2020/7/13 22:20",
				browser:"微信",
				customerService:"王美美",
				group:"未分组",
				visitDuration:"12分20秒",
				m:5
			},{
				Time:"2020/7/13 22:20",
				browser:"微信",
				customerService:"王美美",
				group:"未分组",
				visitDuration:"12分20秒",
				m:5
			},{
				Time:"2020/7/13 22:20",
				browser:"微信",
				customerService:"王美美",
				group:"未分组",
				visitDuration:"12分20秒",
				m:5
			},{
				Time:"2020/7/13 22:20",
				browser:"微信",
				customerService:"王美美",
				group:"未分组",
				visitDuration:"12分20秒",
				m:5
			},{
				Time:"2020/7/13 22:20",
				browser:"微信",
				customerService:"王美美",
				group:"未分组",
				visitDuration:"12分20秒",
				m:5
			},{
				Time:"2020/7/13 22:20",
				browser:"微信",
				customerService:"王美美",
				group:"未分组",
				visitDuration:"12分20秒",
				m:5
			},{
				Time:"2020/7/13 22:20",
				browser:"微信",
				customerService:"王美美",
				group:"未分组",
				visitDuration:"12分20秒",
				m:5
			},{
				Time:"2020/7/13 22:20",
				browser:"微信",
				customerService:"王美美",
				group:"未分组",
				visitDuration:"12分20秒",
				m:5
			}],
			myinputs:'',
			tableData: [{
			  dataItem: 'Time',
			  dataName: '访问时间'
			}, {
			  dataItem: 'browser',
			  dataName: '来源'
			}, {
			  dataItem: 'customerService',
			  dataName: '客服'
			}, {
			  dataItem: 'group',
			  dataName: '客服组'
			}, {
			  dataItem: 'visitDuration',
			  dataName: '访问时常'
			}, {
			  dataItem: 'm',
			  dataName: '满意度'
			}],
			activeClass: 0,// 0为默认选择第一个，-1为不选择
			activeName: '1',
		    radio:'1',
			titles:[
			    {name: '历史会话'},
			    {name: '历史工单'},
				{name: '拉黑记录'},
			],
			dialogFormVisible: false,
			form: {
			  username:'',
			  realname: '',
			  email: '',
			  phone: '',
			  level:'',
			  source:'',
			  radio: '-1',
			  corporation:'',
			  address:'',
			},
			formLabelWidth: '120px',
		}
	},
	created() {
	    this.nickName=this.$route.query.nickName;
		this.$axios
		.get(`cInfo/selectBynickName?nickName=${this.nickName}`)
		.then(resp=>{
			let {data} = resp;
			this.customer = data.result;
			console.log(this.customer)
		})
	},
	methods: {
	      IsActive(k) {
	        this.activeClass = k;
	      },
		  
	}
	
	}
	
</script>

<style>
	.button1{
		position: absolute;
		top: 75px;
		left: 76px;
	}
	.button2{
		position: absolute;
		top: 75px;
		left:1040px;
	}
	.button3{
		position: absolute;
		top: 75px;
		left:1150px;
	}
	.button4{
		position: absolute;
		top: 75px;
		left:1260px;
	}
	.page{
		position: relative;
	}
	.customer-info{
		position: absolute;
		left: 76px;
		top: 125px;
		background-color: white;
		width: 340px;
		height: 649px;
	}
	.details{
		position: absolute;
		left: 426px;
		top: 125px;
		width: 942px;
		height: 649px;
		background-color: white;
	}
	.customer-info-dl dd .label{
		display: inline-block;
		width: 74px;
		margin-right: 8px;
		color: rgb(204,204,204);
		margin-left:18px;
	}
	.customer-info-dl dd{
		height: 43px;
		line-height: 43px;
		font-size: 13px;
		font-weight: 400;
	}
	.customer-info-dl dd .item{
		color: rgb(51,51,51);
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.customer-info-dl dt{
		font-size: 16px;
		font-weight: 400;
		color: rgb(51,51,51);
		margin-bottom: 16px;
		margin-top: 20px;
		margin-left:18px;
		display: flex;
	}
	.item span{
		background-color:rgb(46, 212, 119) ;
		padding:3px 10px;
		margin-right:21px;
		color: white;
	}
	.box{
		flex:1;
		display: flex;
	}
	.dialog-btn{
		flex:1;
		text-align: right;
		padding-right: 20px;
		font-size: 14px;
		color:rgb(0, 110, 255);
		cursor: pointer;
	}
	.top .user-img{
		width: 64px;
		height: 64px;
		text-align: center;
		line-height: 64px;
		border-radius: 50%;
		background-color: #e4e4e4;
		color: white;
		margin-right: 8px;
	}
	.top{
		display: flex;
		margin-top: 20px;
		padding-left: 20px;
		position: static;
		width: 500px;
	}
	.msg-info .user{
		font-weight: 500;
	}
	.msg-info .msg-latest{
		font-size: 12px;
		font-weight: 300;
		color: rgba(0,0,0,.5);
	}
	.user-img i{
		font-size: 30px;
	}
	.user{
		font-size: 28px;
	}
	.user-info{
	  margin-bottom: 10px;;
	}
	.msg-latest{
		font-size: 14px;
	}
	.session-util-tab .tabs{
		display: flex;
		/* justify-content:; */
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
	.tab-title{
		margin-right: 51px;
	}
	.dialog-btn {
	    flex: 1;
	    text-align: right;
	    font-size: 14px;
	    color: rgb(0, 110, 255);
	    cursor: pointer;
		padding-right: 0;
	}
</style>
