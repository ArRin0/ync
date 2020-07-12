<template>
	<div class="page">
		<NavBar></NavBar>
		<g-header></g-header>
		<div class="myf">
			    <div class="layui-inline">
				    <div class="layui-input-inline"  >
					<el-select v-model="value" @change="selectModel($event)" filterable collapse-tags   placeholder="客户等级">
					<el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				    </div>
			    </div>
				<div class="layui-inline">
				    <div class="layui-input-inline" >
					<el-select v-model="value2" @change="selectModel2($event)" filterable collapse-tags   placeholder="全部来源">
					<el-option
					      v-for="item in options2"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				    </div>
				</div>
				<div class="timelay">
					<el-date-picker
					      v-model="rangeDate"
					      prefix-icon="el-icon-date"
					      type="daterange"
					      start-placeholder="开始日期"
					      end-placeholder="结束日期"
					      size="small"
					      value-format="yyyy-MM-dd"
						  @change="selectModel4($event)"
					></el-date-picker>
				</div>
				<div class="myinput">
					<el-input placeholder="输入关键词搜索"
								prefix-icon="el-icon-search"
								v-model="myinputs">
					</el-input>
				</div>
				<div class="myinput">
					<el-button type="primary" round @click="selectModel5($event)">搜索</el-button>
				</div>
			<div class="boxShadow">
			    <el-table
			      :data="tables.slice((currentPage-1)*pagesize,currentPage*pagesize)"
			      ref="multipleTable"
			      tooltip-effect="dark"
			      style="width: 100% "
				  header-cell-style="background-color: rgba(0, 110, 255, 0.098)"
				  >
				  <el-table-column type="selection" width= "45px" ></el-table-column>
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
			      <el-table-column label="操作" width="80" align="center">
			        <template slot-scope="scope">
			          <el-button size="mini" class="del-com" ><i class="iconfont icon-shanchu"></i></el-button>
			        </template>
			      </el-table-column>
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
	</div>


</template>
<script>
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	
	
  export default {
	  name:"visitFrom",
	  components: {
	  	NavBar,
	  	GHeader
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
          dataName: '客户名称'
        }, {
          dataItem: 'realName',
          dataName: '真实姓名'
        }, {
          dataItem: 'phone',
          dataName: '电话'
        }, {
          dataItem: 'email',
          dataName: '邮箱'
        }, {
          dataItem: 'level',
          dataName: '客户等级'
        }, {
          dataItem: 'channel',
          dataName: '客户来源'
        }],
		options: [{
		  value: '全部等级',
		  label: '全部等级'
		}, {
		  value: '普通客户',
		  label: '普通客户'
		}, {
		  value: 'VIP客户',
		  label: 'VIP客户'
		}, {
		  value: '潜在客户',
		  label: '潜在客户'
		}],
		options2: [{
		  value: '全部来源',
		  label: '全部来源'
		}, {
		  value: 'Mac',
		  label: 'Mac'
		}, {
		  value: 'Windows',
		  label: 'Windows'
		}, {
		  value: '手机',
		  label: '手机'
		}],
        value: '',
		value2:'',
		value3:''
      }
    },
	created:function(){
			this.$axios
			.get('/cInfo/select')
			.then(resp=>{
				let {data} = resp;
				this.tables = data.result;
			})
		},
	methods: {
		selectModel(value){
			let level = value;
			if(level == '全部等级'){
				this.$axios
				.get('/cInfo/select')
				.then(resp=>{
						let {data} = resp;
						this.tables = data.result;
				})
			}else{
				this.$axios
				.get(`/cInfo/select?level=${level}`)
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
					.get('/cInfo/select')
					.then(resp=>{
						let {data} = resp;
						this.tables = data.result;
				})
			}else{
				this.$axios
					.get(`/cInfo/select?browser=${browser}`)
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
	  			.get(`/cInfo/select?beginTime=${beginTime}&endTime=${endTime}`)
	  			.then(resp=>{
	  				let {data} = resp;
	  				this.tables = data.result;
	  		})
	  		},
		selectModel5(){
				let visitorName = this.myinputs;
				this.$axios
					.get(`/cInfo/select?visitorName=${visitorName}`)
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
 