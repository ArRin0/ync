<template>
	<div class="box tem3">
		<el-button type="info" plain="" @click="dialogFormVisible = true"><span class="dialog-btn">拉黑客户</span></el-button>
		<el-dialog title="拉黑客户" :visible.sync="dialogFormVisible" class="abow_dialog">
        <el-form :model="form">
			<el-form-item label="拉黑原因" :label-width="formLabelWidth">
			  <el-input type="textarea" v-model="form.reason" autocomplete="off"  placeholder="请输入拉黑原因"></el-input>
			</el-form-item>

		</el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="doSubmit">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	 export default {
		name:"black",
		data() {
	      return {
	        dialogFormVisible: false,
	        form: {
				customerServiceId:'',
				reason: '',
				customerId:'12',
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
					.post("black/create", this.form) //请求接口
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
				this.dialogFormVisible=false;
			}
		}
	  };
</script>

<style>
</style>