<template>
	<div class="box tem2">
		<el-button type="text" @click="dialogFormVisible = true"><span class="dialog-btn"><i class="iconfont icon-fanhui"></i>转接</span></el-button>
		<el-dialog title="转接" :visible.sync="dialogFormVisible" class="abow_dialog">
		 
		  <el-form :model="form">
			<el-form-item label="受理客服组" :label-width="formLabelWidth">
			  <el-select v-model="form.serviceGroup" placeholder="请选择">
			    <el-option label="客服组一" value="1"></el-option>
			    <el-option label="客服组二" value="2"></el-option>
				<el-option label="客服组三" value="3"></el-option>
			  </el-select>
			</el-form-item>
			
			<el-form-item label="受理客服" :label-width="formLabelWidth">
			  <el-select v-model="form.service" placeholder="请选择">
			    <el-option label="王美" value="1"></el-option>
			    <el-option label="程琳" value="2"></el-option>
				<el-option label="七尾" value="3"></el-option>
			  </el-select>
			</el-form-item>
			
			
			<el-form-item label="处理备注" :label-width="formLabelWidth">
			  <el-input type="textarea" v-model="form.description" autocomplete="off"  placeholder="请输入工单描述"></el-input>
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
		name:"Transfer",
		data() {
	      return {
	        dialogFormVisible: false,
	        form: {
			
			  description: '',
	   
			  serviceGroup:'',
			  service:'',
	        },
	        formLabelWidth: '120px'
	      };
	    }
	  };
</script>

<style>
	
</style>