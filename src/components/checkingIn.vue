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
<!-- 		<div class="pagination">
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
		</div> -->
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
	        dataItem: 'onlineTimeBegin',
	        dataName: '首次登陆时间'
	      }, {
	        dataItem: 'averageResponseTime',
	        dataName: '忙碌时长'
	      }, {
	        dataItem: 'busyTime',
	        dataName: '空闲时长'
	      }, {
	        dataItem: 'totalOnlineTime',
	        dataName: '在线时长'
	      }, {
	        dataItem: 'averageSessionTime',
	        dataName: '离线时长'
	      }],
	    }
	  },
		created:function(){
				this.$axios
				.get('/cs/CustomerServiceCheckingIn')
				.then(resp=>{
					let {data} = resp;
					this.tables = data.result;
				})
			}
		
	}
</script>

<style>
	.boxShadow{
		margin-top: 20px;
		padding-left: 20px;
		padding-right: 20px;
	}
</style>
