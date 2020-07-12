<template>
	<div class="box">
		<el-button type="primary" @click="dialogFormVisible = true"><span class="dialog-btn">更改状态</span></el-button>
		<el-dialog title="更改工单状态" :visible.sync="dialogFormVisible" class="abow_dialog">
		 
		  <el-form :model="form">
			<el-form-item label="工单状态" :label-width="formLabelWidth">
			  <el-select v-model="form.state" placeholder="请选择">
			    <el-option label="未分配" value="1"></el-option>
			    <el-option label="待处理" value="2"></el-option>
				<el-option label="处理中" value="3"></el-option>
				<el-option label="已解决" value="4"></el-option>
				<el-option label="已关闭" value="5"></el-option>
			  </el-select>
		    </el-form-item>
			
			
			<el-form-item label="处理备注" :label-width="formLabelWidth">
			  <el-input type="textarea" v-model="form.orderDesc" autocomplete="off"  placeholder="请输入备注"></el-input>
			</el-form-item>
			
			<div class="appendix">添加附件（最多上传5个附件，单个文件最大20M)</div>
			
			
		</el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="doSubmit;dialogFormVisible=false;">保 存</el-button>
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
			  state:'',
	        },
	        formLabelWidth: '120px'
	      };
	    },
			
	  };
</script>

<style>
	.appendix{
		margin-left: 50px;
		margin-bottom:40px;
		color: #006EFF;
	}
	body{
		height: 100hv;
	}
	.abow_dialog {
    .el-dialog {
		display:flex;
		flex-direction:column;
        .el-dialog__body {
			overflow: auto;
			width: 600px;
        }
    }
}
</style>