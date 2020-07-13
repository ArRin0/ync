<template>
	<div class="box">
		<el-button type="text" @click="dialogFormVisible = true"><span class="dialog-btn"><i class="iconfont icon-lahei"></i>拉黑</span></el-button>
		<el-dialog title="拉黑客户" :visible.sync="dialogFormVisible" class="abow_dialog">
        <el-form :model="form">
			<el-form-item label="拉黑原因" :label-width="formLabelWidth">
			  <el-input type="textarea" v-model="form.description" autocomplete="off"  placeholder="请输入拉黑原因"></el-input>
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
		name:"CreateWorkOrder",
		data() {
	      return {
	        dialogFormVisible: false,
	        form: {
			
			  description: '',

	        },
	        formLabelWidth: '120px'
	      };
	    }
	  };
</script>

<style>
</style>