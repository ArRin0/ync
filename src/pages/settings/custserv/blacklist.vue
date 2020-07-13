<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="黑名单"></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="visitor-container">
			  <div class="top-item-group">
			    <el-select v-model="serviceValue" clearable placeholder="客户等级">
			      <el-option
			        v-for="item in serviceOptions"
			        :key="item.value"
			        :label="item.label"
			        :value="item.value"
			      ></el-option>
			    </el-select>
			    <el-select v-model="sourceValue" clearable placeholder="全部来源">
			      <el-option
			        v-for="item in sourceOptions"
			        :key="item.value"
			        :label="item.label"
			        :value="item.value"
			      ></el-option>
			    </el-select>
			    <el-input placeholder="请输入关键词搜索" v-model="searchKeyword" clearable></el-input>
			    <el-button type="primary">搜索</el-button>
			    <el-button style="float:right;">导出数据</el-button>
			    <el-button type="primary" style="float:right;">批量解禁</el-button>
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
			      <el-table-column prop="col1" label="客户名称" align="center"></el-table-column>
			      <el-table-column prop="col2" label="真实姓名" align="center"></el-table-column>
			      <el-table-column prop="col3" label="电话" align="center"></el-table-column>
			      <el-table-column prop="col4" label="邮箱" align="center"></el-table-column>
			      <el-table-column prop="col5" label="客户等级" align="center"></el-table-column>
			      <el-table-column prop="col6" label="客户来源" align="center"></el-table-column>
			      <el-table-column label="操作" align="center">
			        <template slot-scope="scope">
			          <el-button
			            @click="getDetail()"
			            type="text"
			            size="normal"
			          >详情</el-button>
			          <el-button
			            @click="unbanDialogVisible=true"
			            type="text"
			            size="normal"
			          >解禁</el-button>
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
			
			  <el-dialog title="解禁确认" :visible.sync="unbanDialogVisible" top="34vh" width="26%">
			    <div class="unban-dialog-style">确定要解禁该客户吗？</div>
			    <span slot="footer" class="dialog-footer">
			      <el-button @click="unbanDialogVisible = false">取消</el-button>
			      <el-button type="primary" @click="unbanDialogVisible = false">确定</el-button>
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
		name:"blacklist",
		components: {
			leftlist,
			NavBar,
			GHeader,
		},
		data() {
		  return {
		    tableData: [
		      {
		        col1: "河北省秦皇岛市客户",
		        col2: "林芳",
		        col3: "18845678900",
		        col4: "1190887@163.com",
		        col5: "普通客户",
		        col6: "客服录入"
		      },
		      {
		        col1: "河北省秦皇岛市客户",
		        col2: "林芳",
		        col3: "18845678900",
		        col4: "1190887@163.com",
		        col5: "普通客户",
		        col6: "客服录入"
		      },
		      {
		        col1: "河北省秦皇岛市客户",
		        col2: "林芳",
		        col3: "18845678900",
		        col4: "1190887@163.com",
		        col5: "普通客户",
		        col6: "客服录入"
		      },
		      {
		        col1: "河北省秦皇岛市客户",
		        col2: "林芳",
		        col3: "18845678900",
		        col4: "1190887@163.com",
		        col5: "普通客户",
		        col6: "客服录入"
		      },
		      {
		        col1: "河北省秦皇岛市客户",
		        col2: "林芳",
		        col3: "18845678900",
		        col4: "1190887@163.com",
		        col5: "普通客户",
		        col6: "客服录入"
		      },
		      {
		        col1: "河北省秦皇岛市客户",
		        col2: "林芳",
		        col3: "18845678900",
		        col4: "1190887@163.com",
		        col5: "普通客户",
		        col6: "客服录入"
		      },
		      {
		        col1: "河北省秦皇岛市客户",
		        col2: "林芳",
		        col3: "18845678900",
		        col4: "1190887@163.com",
		        col5: "普通客户",
		        col6: "客服录入"
		      },
		      {
		        col1: "河北省秦皇岛市客户",
		        col2: "林芳",
		        col3: "18845678900",
		        col4: "1190887@163.com",
		        col5: "普通客户",
		        col6: "客服录入"
		      },
		      {
		        col1: "河北省秦皇岛市客户",
		        col2: "林芳",
		        col3: "18845678900",
		        col4: "1190887@163.com",
		        col5: "普通客户",
		        col6: "客服录入"
		      },
		      {
		        col1: "河北省秦皇岛市客户",
		        col2: "林芳",
		        col3: "18845678900",
		        col4: "1190887@163.com",
		        col5: "普通客户",
		        col6: "客服录入"
		      }
		    ],
		    serviceOptions: [
		      {
		        value: "选项1",
		        label: "全部等级"
		      },
		      {
		        value: "选项2",
		        label: "普通客户"
		      },
		      {
		        value: "选项3",
		        label: "VIP客户"
		      },
		      {
		        value: "选项4",
		        label: "潜在客户"
		      }
		    ],
		    serviceValue: "",
		    sourceOptions: [
		      {
		        value: "Mac",
		        label: "Mac"
		      },
		      {
		        value: "Windows",
		        label: "Windows"
		      },
		      {
		        value: "手机",
		        label: "手机"
		      }
		    ],
		    sourceValue: "",
		    searchKeyword: "",
		    multipleSelection: [],
		    unbanDialogVisible: false
		  };
		},
		methods: {
		  getDetail(){
		    this.$router.push("/customer/detail")
		  }
		},
	}
</script>
<style scoped>
.top-item-group {
  padding-bottom: 20px;
}
.visitor-container {
  /* margin: 20px; */
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
}
.bottom-pagination-group {
  padding: 20px 20px 0;
  padding-left: 398px;
}
.el-select {
  width: 162px;
}
.el-input {
  width: 200px;
}

.unban-dialog-style {
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

