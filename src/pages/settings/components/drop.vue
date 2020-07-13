<template>
	<div class="myf">
		<div class="timelay">
			<el-date-picker
			      v-model="rangeDate"
			      prefix-icon="el-icon-date"
			      type="daterange"
			      start-placeholder="请选择日期"
			      end-placeholder="请选择日期"
			      size="medium"
			      value-format="yyyy-MM-dd"
				  @change="selectModel4($event)"
			></el-date-picker>
		</div>
		    <div class="layui-inline">
			    <div class="layui-input-inline"  >
				<el-input v-model="input" placeholder="请输入公告标题" style="width: 170px;"></el-input>
				<el-button type="primary" icon="el-icon-search" style="width: 60px;text-align: center;">搜索</el-button>
			    </div>
		    </div>
		<div>
			<div><el-button type="primary" style="width: 60px;text-align: center;">搜索</el-button></div>
			<div><el-button type="primary" icon="el-icon-search" style="width: 60px;text-align: center;">搜索</el-button></div>
			<div><el-button type="primary" icon="el-icon-search" style="width: 60px;text-align: center;">搜索</el-button></div>
		</div>
		</div>
</template>

<script>
	export default{
		name:"drop",
		data () {
		  return {
			
		  }
		},
	}
</script>

<style>
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
</style>
