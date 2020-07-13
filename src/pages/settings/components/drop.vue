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
				<el-button type="primary" icon="el-icon-search">搜索</el-button>
			 </div>
		</div>

		<div class="btn" tyle="width: 100px;"><el-button type="primary" style="width: 100px;">添加公告</el-button></div>
		<div class="btn" style="width: 100px;"><el-button style="width: 100px;">批量删除</el-button></div>
		<div class="btn" style="width: 120px;"><el-button style="width: 120px;">导出当前数据</el-button></div>

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
	.myf{
		display: flex;
		justify-content: space-around;
	}
	.timelay{
		display: inline-block;
		margin-left: 20px;
		margin-top: 21px;
	}
	.btn{
		margin-top: 21px;
	}
</style>
