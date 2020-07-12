<template>
	<div class="page">
		<NavBar></NavBar>
		<g-header></g-header>
		<div class="myf">
			    <div class="layui-inline">
				    <div class="layui-input-inline"  >
					<el-select v-model="value" @change="selectModel($event)" filterable collapse-tags   placeholder="全部客服">
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
				<div class="layui-inline">
				    <div class="layui-input-inline" >
					<el-select v-model="value3" @change="selectModel3($event)" filterable collapse-tags   placeholder="全部终端">
					<el-option
					      v-for="item in options3"
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
          dataItem: 'visitorName',
          dataName: '访客名称'
        }, {
          dataItem: 'browser',
          dataName: '来源'
        }, {
          dataItem: 'terminal',
          dataName: '终端'
        }, {
          dataItem: 'visitTime',
          dataName: '访问时间'
        }, {
          dataItem: 'visitDuration',
          dataName: '访问时常'
        }, {
          dataItem: 'ip',
          dataName: 'ip地址'
        }, {
          dataItem: 'state',
          dataName: '访客状态'
        }],
		options: [{
		  value: '全部客服',
		  label: '全部客服'
		}, {
		  value: '王美美',
		  label: '王美美'
		}, {
		  value: '七尾',
		  label: '七尾'
		}, {
		  value: '李想',
		  label: '李想'
		}, {
		  value: '王之',
		  label: '王之'
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
		options3: [{
		  value: '全部终端',
		  label: '全部终端'
		}, {
		  value: 'chrome',
		  label: 'chrome'
		}, {
		  value: 'app',
		  label: 'app'
		}, {
		  value: '小程序',
		  label: '小程序'
		}],
        value: '',
		value2:'',
		value3:''
      }
    },
	created:function(){
			this.$axios
			.get('/visitor/select')
			.then(resp=>{
				let {data} = resp;
				this.option.series.data = data.result;
			})
		},
	methods: {
		selectModel(value){
			let nickName = value;
			if(nickName == '全部客服'){
				this.$axios
				.get('/visitor/select')
				.then(resp=>{
						let {data} = resp;
						
				})
			}else{
				this.$axios
				.get(`/visitor/select?nickName=${nickName}`)
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
					.get('/visitor/select')
					.then(resp=>{
						let {data} = resp;
						this.tables = data.result;
				})
			}else{
				this.$axios
					.get(`/visitor/select?browser=${browser}`)
					.then(resp=>{
						let {data} = resp;
						this.tables = data.result;
				})
			}
	},
	selectModel3(value3){
			let terminal = value3;
			if(terminal == '全部终端'){
				this.$axios
					.get('/visitor/select')
					.then(resp=>{
						let {data} = resp;
						this.tables = data.result;
				})
			}else{
				this.$axios
					.get(`/visitor/select?terminal=${terminal}`)
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
	  			.get(`/visitor/select?beginTime=${beginTime}&endTime=${endTime}`)
	  			.then(resp=>{
	  				let {data} = resp;
	  				this.tables = data.result;
	  		})
	  		},
		selectModel5(){
			debugger
				let visitorName = this.myinputs;
				this.$axios
					.get(`/visitor/select?visitorName=${visitorName}`)
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
 