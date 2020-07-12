<template>
	<div class="boxShadow">
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
</template>

<script>

	export default {
		 name:"workload",
		 components: {
		  	
		  },
	  data () {
	    return {
			currentPage: 1, //默认显示页面为1
			pagesize: 5, //    每页的数据条数
			rangeDate: [] ,
	      tables: [],
			myinputs:'',
	      tableData: [{
	        dataItem: 'nickName',
	        dataName: '客服昵称'
	      }, {
	        dataItem: 'msgCount',
	        dataName: '消息总量'
	      }, {
	        dataItem: 'sessionCount',
	        dataName: '会话总量'
	      }, {
	        dataItem: 'finishedSession',
	        dataName: '结束会话数量'
	      }, {
	        dataItem: 'totalTime',
	        dataName: '会话总时长'
	      }, {
	        dataItem: 'averageSessionTime',
	        dataName: '单会话平均时长'
	      }],
	    }
	  },
		created:function(){
				this.$axios
				.get('/cs/CustomerServiceWorkload')
				.then(resp=>{
					debugger
					let {data} = resp;
					this.tables = data.result;
				})
			},
		methods: {
			selectModel(value){
				let nickName = value;
				if(nickName == '全部客服'){
					this.$axios
					.get('/visitor/select')
					.then(resp=>{
							let {data} = resp;
							
					})
				}else{
					this.$axios
					.get(`/visitor/select?nickName=${nickName}`)
					.then(resp=>{
							let {data} = resp;
							this.tables = data.result;
					})
				}
			},
			selectModel2(value2){
				let browser = value2;
				if(browser == '全部来源'){
					this.$axios
						.get('/visitor/select')
						.then(resp=>{
							let {data} = resp;
							this.tables = data.result;
					})
				}else{
					this.$axios
						.get(`/visitor/select?browser=${browser}`)
						.then(resp=>{
							let {data} = resp;
							this.tables = data.result;
					})
				}
		},
		selectModel3(value3){
				let terminal = value3;
				if(terminal == '全部终端'){
					this.$axios
						.get('/visitor/select')
						.then(resp=>{
							let {data} = resp;
							this.tables = data.result;
					})
				}else{
					this.$axios
						.get(`/visitor/select?terminal=${terminal}`)
						.then(resp=>{
							let {data} = resp;
							this.tables = data.result;
					})
				}
		},
	  watch: {
	      rangeDate: function (newVal, oldVal) {
	        if (newVal !== null) {
	          this.tableParams.beginDate = newVal[0]
	          this.tableParams.endDate = newVal[1]
	        } else {
	          this.tableParams.beginDate = null
	          this.tableParams.endDate = null
	        }
			
	      }
	    },
		  selectModel4(newVal){
		  		let beginTime = newVal[0];
		  		let endTime = newVal[1];
		  		this.$axios
		  			.get(`/visitor/select?beginTime=${beginTime}&endTime=${endTime}`)
		  			.then(resp=>{
		  				let {data} = resp;
		  				this.tables = data.result;
		  		})
		  		},
			selectModel5(){
				debugger
					let visitorName = this.myinputs;
					this.$axios
						.get(`/visitor/select?visitorName=${visitorName}`)
						.then(resp=>{
							let {data} = resp;
							this.tables = data.result;
					})
					},
			handleSizeChange: function(size) {
				this.pagesize = size;
				/*console.log(this.pagesize) */
			},
			//点击第几页
			handleCurrentChange: function(currentPage) {
				this.currentPage = currentPage;
				/*console.log(this.currentPage) */
			},
		}
	}
</script>

<style>
	.myf{
		position: absolute;
		height: 765px;
		width: 1292px;
		background-color: #FFFFFF;
		margin-left: 74px;
		margin-top: 74px;
		border-radius: 5px;
	}
	.down{
		border-radius: 5px;
		background-color: rgb(242,242,242);
		display: inline-block;
		width: 160px;
		height: 40px;
		margin-left:20px ;
		text-align: center;
		line-height: 10px;
		margin-top: 21px;
		margin-bottom: 21px;
	}
	.boxShadow{
		margin-top: 20px;
		padding-left: 20px;
		padding-right: 20px;
	}
	.layui-inline{
		display: inline-block;
		margin-left: 20px;
		margin-top: 21px;
	}
	.timelay{
		display: inline-block;
		margin-left: 20px;
	}
	.layui-input-inline{
		height: 10px;
		width: 160px;
	}
	.myinput{
		display: inline-block;
		margin-left: 20px;
	}
</style>
