<template>
		<div class="myf">
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
					  <template slot-scope="scope">       
							  <span style="color: #55ff00" v-if="scope.row[scope.column.property] == '在线'">{{scope.row[scope.column.property]}}</span>
							  <span style="color: red" v-else-if="scope.row[scope.column.property] == '离线'">{{scope.row[scope.column.property]}}</span>
							  <span v-else>{{scope.row[scope.column.property]}}</span>
					  </template>
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


</template>
<script>
	
  export default {
	  name:"hometable",
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
          dataItem: 'onlineState',
          dataName: '在线状态'
        }, {
          dataItem: 'totalOnlineTime',
          dataName: '在线时常'
        }, {
          dataItem: 'sessionCount',
          dataName: '会话数'
        }, {
          dataItem: 'averageResponseTime',
          dataName: '平均响应时长'
        }, {
          dataItem: 'averageSessionTime',
          dataName: '平均会话时常'
        }],
      }
    },
	created:function(){
			this.$axios
			.get('cs/CustomerServiceMonitor')
			.then(resp=>{
				debugger
				let {data} = resp;
				this.tables = data.result;
			})
		},
	methods: {
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
		width: 1294px;
		height: auto;
		background-color: #FFFFFF;
/* 		margin-left: 74px;
		margin-top: 74px; */
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
 