<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="客户标签"></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="overview-style">
			  <div class="top-select-group">
			    <el-input placeholder="客户标签名称" v-model="searchKeyword" clearable style="width: 216px"></el-input>
			    <el-button type="primary">搜索</el-button>
			    <el-button style="float:right;">批量删除</el-button>
			    <el-button style="float:right;" type="primary" @click="addDialogVisible=true">添加标签</el-button>
			  </div>
			
			  <div class="middle-table-group">
			    <el-table
			      :header-cell-style="{'background-color':'#e6f1ff','height':'62px'}"
			      ref="multipleTable"
			      :data="tableData"
			      tooltip-effect="dark"
			      style="width: 100%"
			      @selection-change="handleSelectionChange"
			      :cell-style="cellStyle"
			    >
			      <el-table-column type="selection" width="55" align="center"></el-table-column>
			      <el-table-column prop="col1" label="ID" align="center"></el-table-column>
			      <el-table-column prop="col2" label="标签预览" align="center">
			        <template slot-scope="scope">
			          <el-tag type="success">{{scope.row.col2}}</el-tag>
			        </template>
			      </el-table-column>
			      <el-table-column prop="col3" label="使用次数" align="center"></el-table-column>
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
			
			  <el-dialog title="添加标签" top="9vh" :visible.sync="addDialogVisible" width="33%">
			    <div class="add-dialog-style">
			      <el-form ref="addOrderForm" :model="addOrderForm" label-position="left" label-width="120px">
			        <el-form-item :rules="{  message: '请输入标签名称'}" label="标签名称">
			          <el-input style="width:100%;" v-model="addOrderForm.name1" placeholder="请输入标签名称"></el-input>
			        </el-form-item>
			
			
			        <el-form-item label="选择标签颜色">
			          <el-radio-group v-model="radio">
			            <el-radio :label="1">备选项</el-radio>
			            <el-radio :label="2">备选项</el-radio>
			            <el-radio :label="3">备选项</el-radio>
			            <el-radio :label="4">备选项</el-radio>
			            <el-radio :label="5">备选项</el-radio>
			            <el-radio :label="6">备选项</el-radio>
			            <el-radio :label="7">备选项</el-radio>
			            <el-radio :label="8">备选项</el-radio>
			            <el-radio :label="9">备选项</el-radio>
			          </el-radio-group>
			        </el-form-item>
			
			      </el-form>
			    </div>
			    <div slot="footer" class="dialog-footer">
			      <el-button @click.native.prevent="handleClean" type="text" size="normal">清空</el-button>
			      <el-button @click="addDialogVisible = false">取消</el-button>
			      <el-button type="primary" @click="addDialogVisible = false">保存</el-button>
			    </div>
			  </el-dialog>
			
			  <el-dialog title="删除确认" :visible.sync="deleteDialogVisible" top="34vh" width="26%">
			    <div class="delete-dialog-style">删除后无法恢复，确定删除此信息吗？</div>
			    <span slot="footer" class="dialog-footer">
			      <el-button @click="deleteDialogVisible = false">取消</el-button>
			      <el-button type="primary" @click="deleteDialogVisible = false">确定</el-button>
			    </span>
			  </el-dialog>
			
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
		name:"customerlabel",
		components: {
			leftlist,
			NavBar,
			GHeader,
		},
		data() {
		  return {
		    tableData: [
		      {
		        col1: "001",
		        col2: "标签名",
		        col3: "5",
		        col4: "2019/09/12 10:99"
		      },
		      {
		        col1: "001",
		        col2: "标签名",
		        col3: "5",
		        col4: "2019/09/12 10:99"
		      },
		      {
		        col1: "001",
		        col2: "标签名",
		        col3: "5",
		        col4: "2019/09/12 10:99"
		      },
		      {
		        col1: "001",
		        col2: "标签名",
		        col3: "5",
		        col4: "2019/09/12 10:99"
		      },
		      {
		        col1: "001",
		        col2: "标签名",
		        col3: "5",
		        col4: "2019/09/12 10:99"
		      },
		      {
		        col1: "001",
		        col2: "标签名",
		        col3: "5",
		        col4: "2019/09/12 10:99"
		      },
		      {
		        col1: "001",
		        col2: "标签名",
		        col3: "5",
		        col4: "2019/09/12 10:99"
		      },
		      {
		        col1: "001",
		        col2: "标签名",
		        col3: "5",
		        col4: "2019/09/12 10:99"
		      },
		      {
		        col1: "001",
		        col2: "标签名",
		        col3: "5",
		        col4: "2019/09/12 10:99"
		      },
		      {
		        col1: "001",
		        col2: "标签名",
		        col3: "5",
		        col4: "2019/09/12 10:99"
		      }
		    ],
		    addDialogVisible: false,
		    deleteDialogVisible: false,
		    addOrderForm: {
		      name1: "",
		      name2: ""
		    },
		    radio: ''
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
  padding-left: 398px;
}
.middle-table-group {
  margin-top: 20px;
}
.add-dialog-style {
  height: 150px;
  overflow: auto;
  padding: 20px 0 10px 20px;
  margin-top: 10px;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
}
.delete-dialog-style {
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
  padding: 20px;
  padding-bottom: 70px;
}
</style>
<style>
	.page {
		position: relative;
		width: 1680px;
	}
	.main-area{
		width: 1326px;
		margin: 10px 74px;
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
