<template>
	<div class="box">
		<el-button type="primary" @click="dialogFormVisible = true"><span class="dialog-btn">添加客户</span></el-button>
		<el-dialog title="新建客户信息" :visible.sync="dialogFormVisible" class="abow_dialog">
		  <el-form :model="form">
			  <el-form-item label="客户名称" :label-width="formLabelWidth">
				<el-input v-model="form.nickName" autocomplete="off" placeholder="请输入"></el-input>
			  </el-form-item>
			  
			  <el-form-item label="真实姓名" :label-width="formLabelWidth">
				<el-input v-model="form.realName" autocomplete="off" placeholder="请输入"></el-input>
			  </el-form-item>
			  
			  
			  <el-form-item label="客户电话" :label-width="formLabelWidth">
				<el-input v-model="form.phone" autocomplete="off" placeholder="请输入"></el-input>
			  </el-form-item>
			 
			  <el-form-item label="客户邮箱" :label-width="formLabelWidth">
				<el-input v-model="form.email" autocomplete="off" placeholder="请输入"></el-input>
			  </el-form-item>
			  <el-form-item label="客户公司" :label-width="formLabelWidth">
				<el-input v-model="form.company" autocomplete="off" placeholder="请输入"></el-input>
			  </el-form-item>
			 
			  <el-form-item label="客户地址" :label-width="formLabelWidth">
				<el-input v-model="form.address" autocomplete="off" placeholder="请输入"></el-input>
			  </el-form-item>
			  
			  <el-form-item label="客户等级" :label-width="formLabelWidth">
			    <el-select v-model="form.level" placeholder="请选择">
			  	<el-option label="普通客户" value="1"></el-option>
			  	<el-option label="VIP客户" value="2"></el-option>
			  	<el-option label="潜在客户" value="3"></el-option>
			    </el-select>
			  </el-form-item>
			  
			  <el-form-item label="客户来源" :label-width="formLabelWidth">
			    <el-select v-model="form.channel" placeholder="请选择">
			  	<el-option label="客服录入" value="1"></el-option>
			  	<el-option label="网页介入" value="2"></el-option>
			    </el-select>
			  </el-form-item>
			
			<el-form-item label="选择标签" :label-width="formLabelWidth">
			  <el-radio v-model="form.tags" label="1">潜在客户</el-radio>
			  <el-radio v-model="form.tags" label="2">上市公司</el-radio>
			</el-form-item>
		
			<el-form-item label="客户备注" :label-width="formLabelWidth">
			  <el-input type="textarea" v-model="form.remark" autocomplete="off"  placeholder="请输入"></el-input>
			</el-form-item>
			
		</el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="doSubmit">保 存</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	 export default {
		name:"AddCustomer",
		data() {
	      return {
	        dialogFormVisible: false,
	        form: {
				remark:'',
				customerServiceId:'',
				nickName:'',
				realName: '',
				email: '',
				phone: '',
				level:'',
				channel:'',
				tags: '-1',
				company:'',
				address:'',
	        },
	        formLabelWidth: '120px'
	      };
	    },
		created:function(){
				let suser = localStorage.getItem("user");
				this.form.customerServiceId=JSON.parse(suser).customerServiceId;
		},
		methods:{
			doSubmit:function(data){
				console.log(this.form);
				this.$axios
					.post("cInfo/create", this.form) //请求接口
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

<style scoped>
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