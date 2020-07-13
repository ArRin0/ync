<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="通知公告"></g-header>
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
				<el-table-column prop="col1" label="公告标题" align="center"></el-table-column>
				<el-table-column prop="col2" label="公告内容" align="center"></el-table-column>
				<el-table-column prop="col3" label="发布人" align="center"></el-table-column>
				<el-table-column prop="col4" label="发布时间" align="center"></el-table-column>
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

		<el-dialog title="添加公告" top="9vh" :visible.sync="addDialogVisible" width="33%">
		  <div class="add">
		    <el-form ref="addOrderForm" :model="addOrderForm" label-position="left" label-width="120px">
		      <el-form-item :rules="{ required: true, message: '请输入'}" label="公告标题">
		        <el-input style="width:100%;" v-model="addOrderForm.name1" placeholder="请输入"></el-input>
		      </el-form-item>
		      <el-form-item :rules="{  message: '请输入'}" label="公告内容">
		        <el-input type="textarea" :rows="10" v-model="addOrderForm.name2" placeholder="请输入"></el-input>
		      </el-form-item>
		    </el-form>
		  </div>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click.native.prevent="handleClean" type="text" size="normal">清空</el-button>
		    <el-button @click="addDialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="addDialogVisible = false">保存</el-button>
		  </div>
		</el-dialog>
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
	import drop from '../components/drop.vue'
	
	 export default {
		name:"personal",
		components: {
			leftlist,
			NavBar,
			GHeader,
			drop
		},
		props: {},
		  data() {
		    return {
		      tableData: [
		        {
		          col1: "产品上线通知",
		          col2: "WCTmm-234号产品将于本月9号正式上......",
		          col3: "Admin",
		          col4: "2019/09/12 10:55"
		        },
		        {
		          col1: "产品上线通知",
		          col2: "WCTmm-234号产品将于本月9号正式上......",
		          col3: "Admin",
		          col4: "2019/09/12 10:55"
		        },
		        {
		          col1: "产品上线通知",
		          col2: "WCTmm-234号产品将于本月9号正式上......",
		          col3: "Admin",
		          col4: "2019/09/12 10:55"
		        },
		        {
		          col1: "产品上线通知",
		          col2: "WCTmm-234号产品将于本月9号正式上......",
		          col3: "Admin",
		          col4: "2019/09/12 10:55"
		        },
		        {
		          col1: "产品上线通知",
		          col2: "WCTmm-234号产品将于本月9号正式上......",
		          col3: "Admin",
		          col4: "2019/09/12 10:55"
		        },
		        {
		          col1: "产品上线通知",
		          col2: "WCTmm-234号产品将于本月9号正式上......",
		          col3: "Admin",
		          col4: "2019/09/12 10:55"
		        },
		        {
		          col1: "产品上线通知",
		          col2: "WCTmm-234号产品将于本月9号正式上......",
		          col3: "Admin",
		          col4: "2019/09/12 10:55"
		        },
		        {
		          col1: "产品上线通知",
		          col2: "WCTmm-234号产品将于本月9号正式上......",
		          col3: "Admin",
		          col4: "2019/09/12 10:55"
		        },
		        {
		          col1: "产品上线通知",
		          col2: "WCTmm-234号产品将于本月9号正式上......",
		          col3: "Admin",
		          col4: "2019/09/12 10:55"
		        },
		        {
		          col1: "产品上线通知",
		          col2: "WCTmm-234号产品将于本月9号正式上......",
		          col3: "Admin",
		          col4: "2019/09/12 10:55"
		        }
		      ],
		      multipleSelection: [],
		      deleteDialogVisible: false,
		      addDialogVisible: false,
		      addOrderForm: {
		        name1: "",
		        name2: ""
		      },
		    };
		  },
		  watch: {},
		  computed: {},
		  methods: {
		    handleSelectionChange(val) {
		      this.multipleSelection = val;
		    }
		  },
		  created() {},
		  mounted() {},
		};
</script>

<style>
	.page {
		position: relative;
		width: 1680px;
	}
	.container{
		width: 1040px;
		height: 950px;
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
