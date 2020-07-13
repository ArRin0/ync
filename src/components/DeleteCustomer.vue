<template>
	<div class="box">
		<el-button type="info" plain @click="dialogFormVisible = true"><span class="dialog-btn">删除客户</span></el-button>
		<el-dialog title="删除确认" :visible.sync="dialogFormVisible" class="abow_dialog">
        <el-form :model="form">
			<el-form-item label="客户信息删除后无法恢复，确定删除此客户信息吗？" :label-width="formLabelWidth">
			</el-form-item>

		</el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	 export default {
		name:"DeleteCustomer",
		data() {
	      return {
	        dialogFormVisible: false,
	        form: {
			
			  description: '',

	        },
	        formLabelWidth: '480px'
	      };
	    }
	  };
</script>

<style>
</style>