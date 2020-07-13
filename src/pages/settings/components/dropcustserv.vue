<template>
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
			<div class="layui-input-inline"  >
				<el-input v-model="input" placeholder="客服昵称/工号/手机号" style="width: 216px;"></el-input>
				<el-button type="primary" icon="el-icon-search">搜索</el-button>
			 </div>
		</div>

		<div class="btn" tyle="width: 100px;"><el-button type="primary" style="width: 100px;">添加客服</el-button></div>
		<div class="btn" style="width: 100px;"><el-button style="width: 100px;">批量操作</el-button></div>
		<div class="btn" style="width: 120px;"><el-button style="width: 120px;">导出当前数据</el-button></div>

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
		  }
		},
	}
</script>

<style>
	.myf{
		display: flex;
		justify-content: space-around;
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
