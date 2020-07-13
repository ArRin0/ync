<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="角色管理"></g-header>
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
				<el-table-column prop="col1" label="角色ID" align="center"></el-table-column>
				<el-table-column prop="col2" label="角色名称" align="center"></el-table-column>
				<el-table-column prop="col3" label="角色人数" align="center"></el-table-column>
				<el-table-column prop="col4" label="创建时间" align="center"></el-table-column>
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
		
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfSetting.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	import drop from '../components/droprole.vue'
	
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
				    col1: "003",
				    col2: "客服分组一",
				    col3: "5",
				    col4: "2019/09/12 10:99"
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
</style>
