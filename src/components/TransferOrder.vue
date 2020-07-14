<template>
	<div class="box">
		<el-button type="primary" @click="dialogFormVisible = true"><span class="dialog-btn">转交工单</span></el-button>
		<el-dialog title="转交工单" :visible.sync="dialogFormVisible" class="abow_dialog">
		 
		  <el-form :model="form">
		
		
			
			<el-form-item label="受理客服组" :label-width="formLabelWidth">
			  <el-select v-model="form.serviceGroup" placeholder="请选择">
			    <el-option label="客服组一" value="1"></el-option>
			    <el-option label="客服组二" value="2"></el-option>
				<el-option label="客服组三" value="3"></el-option>
			  </el-select>
			</el-form-item>
			
			<el-form-item label="受理客服" :label-width="formLabelWidth">
			  <el-select v-model="form.customerServiceId" placeholder="请选择">
			    <el-option label="王美" value="1"></el-option>
			    <el-option label="程琳" value="2"></el-option>
				<el-option label="七尾" value="3"></el-option>
			  </el-select>
			</el-form-item>
			
			
			
			<el-form-item label="处理备注" :label-width="formLabelWidth">
			  <el-input type="textarea" v-model="form.orderDesc" autocomplete="off"  placeholder="请输入备注"></el-input>
			</el-form-item>
			
			<div class="appendix" type="file">添加附件（最多上传5个附件，单个文件最大20M)</div>
		</el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="doSubmit;dialogFormVisible=false;">创建工单</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	 export default {
		name:"TransferOrder",
		data() {
	      return {
	        dialogFormVisible: false,
	        form: {
			  cclist:'',
			  orderDesc: '',
	          title: '',
	          type: '',
			  priority: '1',
			  state:'',
			  customerServiceId:'',
			  customerId:'',
	        },
	        formLabelWidth: '120px'
	      };
	    },
		methods:{
			doSubmit:function(data){
				console.log(this.form);
				this.$axios
					.post("workorder/create", this.form) //请求接口
					.then(resp => { //当服务器返回结果后处理
						let {
							data
						} = resp;
						if(data.success){
						}
					})
					.catch(err => { //当请求失败，处理
						console.log(err)
					})
			}
		}
			
	  };
</script>

<style scoped >
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