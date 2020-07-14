<template>
	<div class="myf">
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
				<el-select v-model="value2" @change="selectModel2($event)" filterable collapse-tags   placeholder="全部客服组">
				<el-option
				      v-for="item in options2"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			    </div>
			</div>
		</div>
</template>

<script>
	export default{
		name:"drop",
		data () {
		  return {
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
			  value: '全部客服组',
			  label: '全部客服组'
			}, {
			  value: '客服组一',
			  label: '客服组一'
			}, {
			  value: '客服组二',
			  label: '客服组二'
			}, {
			  value: '客服组三',
			  label: '客服组三'
			}],
			rangeDate: '',
		    value: '',
			value2:'',
			value3:''
		  }
		},
	}
</script>

<style scoped >
	.layui-inline{
		display: inline-block;
		margin-left: 20px;
		margin-top: 21px;
	}
	.timelay{
		display: inline-block;
		margin-left: 20px;
	}
	.myinput{
		display: inline-block;
		margin-left: 20px;
	}
	.myf{
		height: 60px;
		width: auto;
	}
</style>
