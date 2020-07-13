<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="客服管理"></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="choice"><drop></drop></div>
			
			<div class="table">
			  <el-table
				ref="multipleTable"
				:header-cell-style="{'background-color':'#e6f1ff','height':'62px'}"
				:data="tableData"
				tooltip-effect="dark"
				style="width: 100%; margin-left: 20px;"
				fit
				@selection-change="handleSelectionChange"
				:cell-style="cellStyle"
			  >
				<el-table-column type="selection" width="55" align="center"></el-table-column>
				<el-table-column prop="col1" label="ID" align="center" >
				  <template slot-scope="scope">
				    <span style="color:#409EFF">{{scope.row.col1}}</span>
				  </template>
				</el-table-column>
				<el-table-column prop="col2" label="账号" align="center"></el-table-column>
				<el-table-column prop="col3" label="客服昵称" align="center"></el-table-column>
				<el-table-column prop="col4" label="客服姓名" align="center"></el-table-column>
				<el-table-column prop="col5" label="客户分组" align="center"></el-table-column>
				<el-table-column prop="col6" label="客户角色" align="center"></el-table-column>
				<el-table-column prop="col7" label="客户状态" align="center">
					<template slot-scope="scope">
					    <el-switch
					    v-model="scope.row.col7">
					    </el-switch>
					  </template>
					</el-table-column>
				<el-table-column label="操作" align="center">
				  <template slot-scope="scope">
					<el-button
					  @click="addDialogVisible=true"
					  type="text"
					  size="normal"
					>编辑</el-button>
					<el-button
					  @click="deleteDialogVisible=true"
					  type="text"
					  size="normal"
					>删除</el-button>
				  </template>
				</el-table-column>
			  </el-table>
			</div>
			
			<div class="bottom">
			  <el-pagination
				background
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page="currentPage4"
				:page-sizes="[10, 20, 30, 40, 50, 60,70,80,90,100]"
				:page-size="10"
				layout="total, prev, pager, next,sizes, jumper"
				:total="100"
			  ></el-pagination>
			</div>
			
		</div>
		
		<el-dialog title="删除确认" :visible.sync="deleteDialogVisible" top="34vh" width="26%">
		  <div class="delete">删除后无法恢复，确定删除此信息吗？</div>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="deleteDialogVisible = false">取消</el-button>
		    <el-button type="primary" @click="deleteDialogVisible = false">确定</el-button>
		  </span>
		</el-dialog>
		
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfSetting.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	import drop from '../components/dropcustserv.vue'
	
	 export default {
		name:"personal",
		components: {
			leftlist,
			NavBar,
			GHeader,
			drop
		},
		data(){
			return{
				tableData: [
				  {
					col1: "1253",
					col2: "116789@163.com",
					col3: "小美",
					col4: "杜微",
					col5: "客服组一",
					col6: "工单客服",
					col7: true
				  },
				],
			}
		}
	}
</script>

<style>
	.page {
		position: relative;
		width: 1680px;
	}
	.container{
		width: 1040px;
		height: 1869px;
		background-color: #FFFFFF;
		border-radius: 4px;
		position: absolute;
		top: 74px;
		left: 324px;
	}
	.choice{
		width: 1040px;
		height: 70px;
	}
	.table {
		width: 1002px;
		margin-top: 20px;
	}
	.bottom {
	  padding: 20px 20px 0;
	  padding-left: 300px;
	}
	.delete {
	  border-top: 1px solid #f2f2f2;
	  border-bottom: 1px solid #f2f2f2;
	  padding: 20px;
	  padding-bottom: 70px;
	}
	.add {
	  height: 350px;
	  overflow: auto;
	  padding: 20px 0 10px 20px;
	  margin-top: 10px;
	  border-top: 1px solid #f2f2f2;
	  border-bottom: 1px solid #f2f2f2;
	}
</style>
