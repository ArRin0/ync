<template>
	<div class="box tem4">
		<el-button type="text" @click="dialogFormVisible = true"><span class="dialog-btn"><i class="iconfont icon-tuichu"></i>结束会话</span></el-button>
		<el-dialog title="结束会话确认" :visible.sync="dialogFormVisible" class="abow_dialog">
        <el-form :model="form">
			<el-form-item label="确定要结束当前会话吗？" :label-width="formLabelWidth">
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
		name:"EndSession",
		data() {
	      return {
	        dialogFormVisible: false,
	        form: {
			
				description: '',

	        },
	        formLabelWidth: '240px'
	      };
	    }
	  };
</script>

<style>
</style>