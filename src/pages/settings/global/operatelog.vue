<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="操作日志"></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="choice"><drop></drop></div>
			<div class="overview-style">
			  <div class="top-select-group">
			    <el-date-picker
			      v-model="value1"
			      type="daterange"
			      range-separator="至"
			      start-placeholder="开始日期"
			      end-placeholder="结束日期"
			    ></el-date-picker>
			    <el-input placeholder="请输入操作人信息" v-model="searchKeyword" clearable style="width: 216px"></el-input>
			    <el-button type="primary">搜索</el-button>
			    <el-button style="float:right;">导出当前数据</el-button>
			  </div>
			  <div class="bottom-table-group">
			    <el-table
			      :header-cell-style="{'background-color':'#e6f1ff','height':'62px'}"
			      ref="multipleTable"
			      :data="tableData"
			      tooltip-effect="dark"
			      style="width: 100%"
			      @selection-change="handleSelectionChange"
			      :cell-style="cellStyle"
			    >
			      <el-table-column prop="col1" label="操作人" align="center"></el-table-column>
			      <el-table-column prop="col2" label="操作动作" align="center"></el-table-column>
			      <el-table-column prop="col3" label="操作对象" align="center"></el-table-column>
			      <el-table-column prop="col4" label="操作时间" align="center"></el-table-column>
			      <el-table-column prop="col5" label="操作IP" align="center"></el-table-column>
			    </el-table>
			  </div>
			  <div class="bottom-pagination-group">
			    <el-pagination
			      background
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page="currentPage4"
			      :page-sizes="[100, 200, 300, 400]"
			      :page-size="100"
			      layout="total, prev, pager, next,sizes, jumper"
			      :total="400"
			    ></el-pagination>
			  </div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfSetting.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	import drop from '../components/drop.vue'
	
	 export default {
		name:"operatelog",
		components: {
			leftlist,
			NavBar,
			GHeader,
		},
		data() {
		  return {
		    tableData: [
		      {
		        col1: "七尾",
		        col2: "新增工单",
		        col3: "工单标题：客户报价",
		        col4: "2019/09/12 10:99",
		        col5: "132.224.22.2"
		      },
		      {
		        col1: "七尾",
		        col2: "新增工单",
		        col3: "工单标题：客户报价",
		        col4: "2019/09/12 10:99",
		        col5: "132.224.22.2"
		      },
		      {
		        col1: "七尾",
		        col2: "新增工单",
		        col3: "工单标题：客户报价",
		        col4: "2019/09/12 10:99",
		        col5: "132.224.22.2"
		      },
		      {
		        col1: "七尾",
		        col2: "新增工单",
		        col3: "工单标题：客户报价",
		        col4: "2019/09/12 10:99",
		        col5: "132.224.22.2"
		      },
		      {
		        col1: "七尾",
		        col2: "新增工单",
		        col3: "工单标题：客户报价",
		        col4: "2019/09/12 10:99",
		        col5: "132.224.22.2"
		      },
		      {
		        col1: "七尾",
		        col2: "新增工单",
		        col3: "工单标题：客户报价",
		        col4: "2019/09/12 10:99",
		        col5: "132.224.22.2"
		      },
		      {
		        col1: "七尾",
		        col2: "新增工单",
		        col3: "工单标题：客户报价",
		        col4: "2019/09/12 10:99",
		        col5: "132.224.22.2"
		      },
		      {
		        col1: "七尾",
		        col2: "新增工单",
		        col3: "工单标题：客户报价",
		        col4: "2019/09/12 10:99",
		        col5: "132.224.22.2"
		      },
		      {
		        col1: "七尾",
		        col2: "新增工单",
		        col3: "工单标题：客户报价",
		        col4: "2019/09/12 10:99",
		        col5: "132.224.22.2"
		      },
		      {
		        col1: "七尾",
		        col2: "新增工单",
		        col3: "工单标题：客户报价",
		        col4: "2019/09/12 10:99",
		        col5: "132.224.22.2"
		      }
		    ]
		  };
		},
	}
</script>
<style scoped>
.overview-style {
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
}
.bottom-pagination-group {
  padding: 20px 20px 0;
  padding-left:398px;
}
.bottom-table-group {
  margin-top: 20px;
}
</style>

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
</style>
