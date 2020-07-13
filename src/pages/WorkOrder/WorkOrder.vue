<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="工单"></g-header>
		<leftlist></leftlist>
		<div class="btns">
			<ButtonCreateOrder class="button2"></ButtonCreateOrder>
<!-- 			<el-button type="primary" class="button2">创建工单</el-button> -->
			<el-button type="info" plain class="button3">批量修改</el-button>
			<el-button type="info" plain class="button4">导出工单</el-button>
		</div>
		<div class="container">
			<div class="top-select-group">
			  <el-select v-model="statusValue" clearable placeholder="全部状态">
			    <el-option
			      v-for="item in statusOptions"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value"
			    ></el-option>
			  </el-select>
			  <el-select v-model="priorityValue" clearable placeholder="全部优先级">
			    <el-option
			      v-for="item in priorityOptions"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value"
			    ></el-option>
			  </el-select>
			  <el-select v-model="partitionValue" clearable placeholder="全部分类">
			    <el-option
			      v-for="item in partitionOptions"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value"
			    ></el-option>
			  </el-select>
			  <el-select v-model="channelValue" clearable placeholder="全部渠道">
			    <el-option
			      v-for="item in channelOptions"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value"
			    ></el-option>
			  </el-select>
			  <el-select v-model="serviceGroupValue" clearable placeholder="全部客服组">
			    <el-option
			      v-for="item in serviceGroupOptions"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value"
			    ></el-option>
			  </el-select>
			  <el-select v-model="serviceValue" clearable placeholder="全部客服">
			    <el-option
			      v-for="item in serviceOptions"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value"
			    ></el-option>
			  </el-select>
			</div>
			<div class="bottom-item-group">
			  <el-date-picker
			    v-model="value1"
			    type="daterange"
			    range-separator="至"
			    start-placeholder="开始日期"
			    end-placeholder="结束日期"
			  ></el-date-picker>
			  <div class="search-item-group">
			    <el-input placeholder="请输入关键词搜索" v-model="searchKeyword" clearable></el-input>
			    <el-button type="primary">搜索</el-button>
			  </div>
			</div>
			<allWorkOrder></allWorkOrder>
		</div>
		
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfWorkOrder.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	import ButtonCreateOrder from '@/components/ButtonCreateOrder.vue'
	import DeleteCustomer from '@/components/DeleteCustomer.vue'
	import ButtonBlack from '@/components/ButtonBlack.vue'
	import allWorkOrder from '@/components/allWorkOrder.vue'
	
	 export default {
		name:"WorkOrder",
		components: {
			leftlist,
			NavBar,
			GHeader,
			ButtonCreateOrder,
			 DeleteCustomer,
			 ButtonBlack,
			 allWorkOrder
		},
		data() {
		  return {
		    statusOptions: [
		      {
		        value: "选项1",
		        label: "未分配"
		      },
		      {
		        value: "选项2",
		        label: "待处理"
		      },
		      {
		        value: "选项3",
		        label: "处理中"
		      },
		      {
		        value: "选项4",
		        label: "已解决"
		      },
		      {
		        value: "选项5",
		        label: "已关闭"
		      }
		    ],
		    statusValue: "",
		    priorityOptions: [
		      {
		        value: "选项1",
		        label: "低"
		      },
		      {
		        value: "选项2",
		        label: "中"
		      },
		      {
		        value: "选项3",
		        label: "高"
		      },
		      {
		        value: "选项4",
		        label: "紧急"
		      }
		    ],
		    priorityValue: "",
		    partitionOptions: [
		      {
		        value: "选项1",
		        label: "分类一"
		      },
		      {
		        value: "选项2",
		        label: "分类二"
		      },
		      {
		        value: "选项3",
		        label: "分类三"
		      }
		    ],
		    partitionValue: "",
		    channelOptions: [
		      {
		        value: "选项1",
		        label: "手动录入"
		      },
		      {
		        value: "选项2",
		        label: "即时聊天"
		      },
		      {
		        value: "选项3",
		        label: "客户管理"
		      }
		    ],
		    channelValue: "",
		    serviceGroupOptions: [
		      {
		        value: "选项1",
		        label: "客服组一"
		      },
		      {
		        value: "选项2",
		        label: "客服组二"
		      },
		      {
		        value: "选项3",
		        label: "客服组三"
		      }
		    ],
		    serviceGroupValue: "",
		    serviceOptions: [
		      {
		        value: "选项1",
		        label: "王美美"
		      },
		      {
		        value: "选项2",
		        label: "七尾"
		      },
		      {
		        value: "选项3",
		        label: "李想"
		      },
		      {
		        value: "选项4",
		        label: "王志"
		      }
		    ],
		    serviceValue: "",
		    searchKeyword: "",
		    addDialogVisible: false,
		    addOrderForm: {
		      name1: "",
		      name2: "",
		      name3: "",
		      name4: "",
		      name5: "",
		      name6: "",
		      name7: "",
		      name8: "",
		      name9: ""
		    },
		    multipleSelection: [],
		  };
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
  padding-left: 570px;
}
.el-select {
  width: 162px;
}
.el-input {
  width: 200px;
}
.top-select-group {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.bottom-item-group {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 15px;
}
.add-dialog-style {
  height: 440px;
  overflow: auto;
  padding: 20px 0 10px 20px;
  margin-top: 10px;
  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;
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
		top: 128px;
		left: 324px;
		padding-top: 20px;
	}
	.choice{
		width: 1040px;
		height: 70px;
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
</style>
