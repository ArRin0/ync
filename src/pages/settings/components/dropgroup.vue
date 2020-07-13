<template>
	<div class="myf">
		<div class="layui-inline">
			<div class="layui-input-inline"  >
				<el-input v-model="input" placeholder="客服分组名称" style="width: 216px;"></el-input>
				<el-button type="primary" icon="el-icon-search">搜索</el-button>
			 </div>
		</div>
		<div style="width: 400px;display: flex; justify-content: space-around;">
			<div class="btn" tyle="width: 100px;"><el-button type="primary" style="width: 100px;">添加分组</el-button></div>
			<div class="btn" style="width: 100px;"><el-button style="width: 100px;">批量删除</el-button></div>
			<div class="btn" style="width: 120px;"><el-button style="width: 120px;">导出当前数据</el-button></div>
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
	.myf{
		display: flex;
		justify-content: space-between;
	}
	.layui-inline{
		display: inline-block;
		margin-left: 20px;
		margin-top: 21px;
	}
	.btn{
		margin-top: 21px;
	}
</style>
