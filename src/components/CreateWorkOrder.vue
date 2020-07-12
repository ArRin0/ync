<template>
	<div class="box">
		<el-button type="text" @click="dialogFormVisible = true"><span class="dialog-btn"><i class="iconfont icon-weibiaoti1"></i>创建工单</span></el-button>
		<el-dialog title="新建工单" :visible.sync="dialogFormVisible" class="abow_dialog">
		 
		  <el-form :model="form">
			<el-form-item label="工单分类" :label-width="formLabelWidth">
			  <el-select v-model="form.sort" placeholder="请选择">
			    <el-option label="分类一" value="1"></el-option>
			    <el-option label="分类二" value="2"></el-option>
				<el-option label="分类三" value="3"></el-option>
			  </el-select>
		    </el-form-item>
			
			<el-form-item label="工单标题" :label-width="formLabelWidth">
			  <el-input v-model="form.title" autocomplete="off" placeholder="请输入工单标题"></el-input>
			</el-form-item>
			
			<el-form-item label="工单描述" :label-width="formLabelWidth">
			  <el-input type="textarea" v-model="form.description" autocomplete="off"  placeholder="请输入工单描述"></el-input>
			</el-form-item>
			
			<div class="appendix">添加附件（最多上传5个附件，单个文件最大20M)</div>
			
			<el-form-item label="抄送人" :label-width="formLabelWidth">
			  <el-select v-model="form.person" placeholder="请选择">
			    <el-option label="七尾" value="1"></el-option>
			    <el-option label="王美" value="2"></el-option>
				<el-option label="程琳" value="3"></el-option>
			  </el-select>
			</el-form-item>
			
			<el-form-item label="优先级" :label-width="formLabelWidth">
			  <el-radio v-model="form.radio" label="1">低</el-radio>
			  <el-radio v-model="form.radio" label="2">中</el-radio>
			  <el-radio v-model="form.radio" label="3">高</el-radio>
			  <el-radio v-model="form.radio" label="4">紧急</el-radio>
			</el-form-item>
			
			<el-form-item label="工单状态" :label-width="formLabelWidth">
			  <el-select v-model="form.state" placeholder="请选择">
			    <el-option label="未分配" value="1"></el-option>
			    <el-option label="待处理" value="2"></el-option>
				<el-option label="处理中" value="3"></el-option>
				<el-option label="已解决" value="4"></el-option>
				<el-option label="已关闭" value="5"></el-option>
			  </el-select>
			</el-form-item>
			
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
			
			<el-form-item label="所属客户" :label-width="formLabelWidth">
			  <el-select v-model="form.customer" placeholder="请选择">
			    <el-option label="李雷" value="1"></el-option>
			    <el-option label="韩梅梅" value="2"></el-option>
				<el-option label="康康" value="3"></el-option>
			  </el-select>
			</el-form-item>
		</el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogFormVisible = false">创建工单</el-button>
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
			  person:'',
			  description: '',
	          title: '',
	          sort: '',
			  radio: '1',
			  state:'',
			  serviceGroup:'',
			  service:'',
			  customer:'',
	        },
	        formLabelWidth: '120px'
	      };
	    }
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