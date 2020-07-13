<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="常用语"></g-header>
		<leftlist></leftlist>
		<div class="container">
			
			<el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="个人库" name="first">
					<div class="choice">
						<div class="myf">
							<div class="layui-inline">
								<div class="layui-input-inline"  >
									<el-input v-model="input" placeholder="搜索常用语" style="width: 216px;"></el-input>
									<el-button type="primary" icon="el-icon-search">搜索</el-button>
								 </div>
							</div>
							<div style="width: 400px;display: flex; justify-content: space-around;">
								<div class="btn" tyle="width: 100px;"><el-button type="primary" style="width: 100px;">添加分类</el-button></div>
								<div class="btn" style="width: 100px;"><el-button @click="addword1Visible=true" style="width: 100px;">添加常用语</el-button></div>
								<div class="btn" style="width: 120px;"><el-button type="primary" @click="addclass1Visible=true" style="width: 120px;">导入常用语</el-button></div>
							</div>
						</div>
					</div>
					
					<div style="padding-top: 10px">
					  <el-collapse v-model="activeNames" accordion @change="handleChange">
					    <el-button
					      style="position: absolute;right: 100px; font-size: 15px;"
					      type= "text"
						  circle="true"
					      icon="el-icon-edit"
					      @click="editDialogVisible=true"
					    ></el-button>
					    <el-button
					      style="position: absolute;right: 50px;font-size: 15px;"
					      type="text"
					      icon="el-icon-delete"
					      circle="true"
					      @click="deleteDialogVisible=true"
					    ></el-button>
					    <el-collapse-item name="1">
					      <template style="position: relative;" slot="title">
					        <label style="font-size: 16px">欢迎语</label>
					      </template>
					      <div class="item">你好，请问有什么可以帮您？
					        <el-button class="header-icon el-icon-edit"
					          style="position: absolute;right: 100px;font-size: 15px;"
					          type="text"
					          size="mini"
					          circle
					          @click="editword1Visible=true"
					        ></el-button>
					        <el-button class="header-icon el-icon-delete"
					           style="position: absolute;right: 50px;font-size: 15px;"
					           type="text"
					           size="mini"
					           circle
					           @click="deleteDialogVisible=true"
					        ></el-button>
					      </div>
					      <div class="item">你好，请问有什么可以帮您？
					        <el-button class="header-icon el-icon-edit"
					                   style="position: absolute;right: 100px;font-size: 15px;"
					                   type="text"
					                   size="mini"
					                   circle
					                   @click="editword1Visible=true"
					        ></el-button>
					        <el-button class="header-icon el-icon-delete"
					                   style="position: absolute;right: 50px;font-size: 15px;"
					                   type="text"
					                   size="mini"
					                   circle
					                   @click="deleteDialogVisible=true"
					        ></el-button>
					      </div>
					      <div class="item">你好，请问有什么可以帮您？</div>
					    </el-collapse-item>
					
					    <el-button
					      style="position: absolute;right: 100px;font-size: 15px;"
					      type="text"
					      icon="el-icon-edit"
					      circle
					      @click="editDialogVisible=true"
					    ></el-button>
					    <el-button
					      style="position: absolute;right: 50px;font-size: 15px;"
					      type="text"
					      icon="el-icon-delete"
					      circle
					      @click="deleteDialogVisible=true"
					    ></el-button>
					    <el-collapse-item name="2">
					      <template style="position: relative;" slot="title">
					        <label style="font-size: 16px">业务相关用语</label>
					      </template>
					      <div class="item">你好，请问有什么可以帮您？
					        <el-button class="header-icon el-icon-edit"
					          style="position: absolute;right: 100px;font-size: 15px;"
					          type="text"
					          size="mini"
					          circle
					          @click="editword1Visible=true"
					        ></el-button>
					        <el-button class="header-icon el-icon-delete"
					           style="position: absolute;right: 50px;font-size: 15px;"
					           type="text"
					           size="mini"
					           circle
					           @click="deleteDialogVisible=true"
					        ></el-button>
					      </div>
					      <div class="item">你好，请问有什么可以帮您？
					        <el-button class="header-icon el-icon-edit"
					                   style="position: absolute;right: 100px;font-size: 15px;"
					                   type="text"
					                   size="mini"
					                   circle
					                   @click="editword1Visible=true"
					        ></el-button>
					        <el-button class="header-icon el-icon-delete"
					                   style="position: absolute;right: 50px;font-size: 15px;"
					                   type="text"
					                   size="mini"
					                   circle
					                   @click="deleteDialogVisible=true"
					        ></el-button>
					      </div>
					      <div class="item">你好，请问有什么可以帮您？</div>
					    </el-collapse-item>
					  </el-collapse>
					</div>
				</el-tab-pane>
				
			    <el-tab-pane label="公共库" name="second">
					<div class="choice">
						<div class="myf">
							<div class="layui-inline">
								<div class="layui-input-inline"  >
									<el-input v-model="input" placeholder="搜索常用语" style="width: 216px;"></el-input>
									<el-button type="primary" icon="el-icon-search">搜索</el-button>
								 </div>
							</div>
							<div style="width: 400px;display: flex; justify-content: space-around;">
								<div class="btn" tyle="width: 100px;"><el-button type="primary" style="width: 100px;">添加分类</el-button></div>
								<div class="btn" style="width: 100px;"><el-button @click="addword1Visible=true" style="width: 100px;">添加常用语</el-button></div>
								<div class="btn" style="width: 120px;"><el-button type="primary" @click="addclass1Visible=true" style="width: 120px;">导入常用语</el-button></div>
							</div>
						</div>
					</div>
					
					<div style="padding-top: 10px">
					  <el-collapse v-model="activeNames" accordion @change="handleChange">
					    <el-button
					      style="position: absolute;right: 100px;font-size: 15px;"
					      type="text"
					      icon="el-icon-edit"
					      circle
					      @click="editDialogVisible=true"
					    ></el-button>
					    <el-button
					      style="position: absolute;right: 50px;font-size: 15px;"
					      type="text"
					      icon="el-icon-delete"
					      circle
					      @click="deleteDialogVisible=true"
					    ></el-button>
					    <el-collapse-item name="1">
					      <template style="position: relative;" slot="title">
					        <label style="font-size: 16px">生鲜产品业务常用语</label>
					      </template>
					      <div class="item">你好，请问有什么可以帮您？
					        <el-button class="header-icon el-icon-edit"
					          style="position: absolute;right: 100px;font-size: 15px;"
					          type="text"
					          size="mini"
					          circle
					          @click="editword1Visible=true"
					        ></el-button>
					        <el-button class="header-icon el-icon-delete"
					           style="position: absolute;right: 50px;font-size: 15px;"
					           type="text"
					           size="mini"
					           circle
					           @click="deleteDialogVisible=true"
					        ></el-button>
					      </div>
					      <div class="item">你好，请问有什么可以帮您？
					        <el-button class="header-icon el-icon-edit"
					                   style="position: absolute;right: 100px;font-size: 15px;"
					                   type="text"
					                   size="mini"
					                   circle
					                   @click="editword1Visible=true"
					        ></el-button>
					        <el-button class="header-icon el-icon-delete"
					                   style="position: absolute;right: 50px;font-size: 15px;"
					                   type="text"
					                   size="mini"
					                   circle
					                   @click="deleteDialogVisible=true"
					        ></el-button>
					      </div>
					      <div class="item">你好，请问有什么可以帮您？</div>
					    </el-collapse-item>
					
					    <el-button
					      style="position: absolute;right: 100px;font-size: 15px;"
					      type="text"
					      icon="el-icon-edit"
					      circle
					      @click="editDialogVisible=true"
					    ></el-button>
					    <el-button
					      style="position: absolute;right: 50px;font-size: 15px;"
					      type="text"
					      icon="el-icon-delete"
					      circle
					      @click="deleteDialogVisible=true"
					    ></el-button>
					    <el-collapse-item name="2">
					      <template style="position: relative;" slot="title">
					        <label style="font-size: 16px">推广常用语</label>
					      </template>
					      <div class="item">你好，请问有什么可以帮您？
					        <el-button class="header-icon el-icon-edit"
					          style="position: absolute;right: 100px;font-size: 15px;"
					          type="text"
					          size="mini"
					          circle
					          @click="editword1Visible=true"
					        ></el-button>
					        <el-button class="header-icon el-icon-delete"
					           style="position: absolute;right: 50px;font-size: 15px;"
					           type="text"
					           size="mini"
					           circle
					           @click="deleteDialogVisible=true"
					        ></el-button>
					      </div>
					      <div class="item">你好，请问有什么可以帮您？
					        <el-button class="header-icon el-icon-edit"
					                   style="position: absolute;right: 100px;font-size: 15px;"
					                   type="text"
					                   size="mini"
					                   circle
					                   @click="editword1Visible=true"
					        ></el-button>
					        <el-button class="header-icon el-icon-delete"
					                   style="position: absolute;right: 50px;font-size: 15px;"
					                   type="text"
					                   size="mini"
					                   circle
					                   @click="deleteDialogVisible=true"
					        ></el-button>
					      </div>
					      <div class="item">你好，请问有什么可以帮您？</div>
					    </el-collapse-item>
					  </el-collapse>
					</div>
				</el-tab-pane>
			  </el-tabs>
			  
			  <el-dialog title="添加分类" top="9vh" :visible.sync="addclass1Visible" width="33%">
			    <div class="classfy">
			      <el-form
			        ref="addOrderForm"
			        :model="addclass1Form"
			        label-position="left"
			        label-width="120px"
			      >
			        <el-form-item :rules="{  message: '请输入分类名称'}" label="分类名称">
			          <el-input style="width:100%;" v-model="addclass1Form.name1" placeholder="请输入分类名称"></el-input>
			        </el-form-item>
			      </el-form>
			    </div>
			    <div slot="footer" class="dialog-footer">
			      <el-button @click.native.prevent="handleClean" type="text" size="normal">清空</el-button>
			      <el-button @click="addclass1Visible = false">取消</el-button>
			      <el-button type="primary" @click="addclass1Visible = false">确定</el-button>
			    </div>
			  </el-dialog>
			  
			  <el-dialog title="添加常用语" top="9vh" :visible.sync="addword1Visible" width="33%">
			    <div class="addcommonwords">
			      <el-form ref="addOrderForm" :model="addword1Form" label-position="left" label-width="120px">
			        <el-form-item :rules="{  message: '请选择'}" label="选择分类">
			          <el-select style="width:100%;" v-model="addword1Form.name1" placeholder="请选择">
			            <el-option label="默认分组" value="option1"></el-option>
			            <el-option label="欢迎语" value="option2"></el-option>
			            <el-option label="业务相关" value="option3"></el-option>
			          </el-select>
			        </el-form-item>
			        <el-form-item :rules="{  message: '请输入常用语'}" label="常用语内容">
			          <el-input type="textarea" :rows="6" v-model="addword1Form.name2" placeholder="请输入常用语"></el-input>
			        </el-form-item>
			      </el-form>
			    </div>
			    <div slot="footer" class="dialog-footer">
			      <el-button @click.native.prevent="handleClean" type="text" size="normal">清空</el-button>
			      <el-button @click="addword1Visible = false">取消</el-button>
			      <el-button type="primary" @click="addword1Visible = false">确定</el-button>
			    </div>
			  </el-dialog>
			
			<el-dialog title="编辑常用语" top="9vh" :visible.sync="editword1Visible" width="33%">
			  <div class="add2-dialog-style">
			    <el-form ref="addOrderForm" :model="editword1Form" label-position="left" label-width="120px">
			      <el-form-item :rules="{  message: '请选择'}" label="选择分类">
			        <el-select style="width:100%;" v-model="editword1Form.name1" placeholder="请选择">
			          <el-option label="默认分组" value="option1"></el-option>
			          <el-option label="欢迎语" value="option2"></el-option>
			          <el-option label="业务相关" value="option3"></el-option>
			        </el-select>
			      </el-form-item>
			      <el-form-item :rules="{  message: '请输入常用语'}" label="常用语内容">
			        <el-input type="textarea" :rows="6" v-model="editword1Form.name2" placeholder="请输入常用语"></el-input>
			      </el-form-item>
			    </el-form>
			  </div>
			  <div slot="footer" class="dialog-footer">
			    <el-button @click.native.prevent="handleClean" type="text" size="normal">清空</el-button>
			    <el-button @click="editword1Visible = false">取消</el-button>
			    <el-button type="primary" @click="editword1Visible = false">确定</el-button>
			  </div>
			</el-dialog>
			
			<el-dialog title="添加常用语" top="9vh" :visible.sync="addword2Visible" width="33%">
			  <div class="add2-dialog-style">
			    <el-form ref="addOrderForm" :model="addword2Form" label-position="left" label-width="120px">
			      <el-form-item :rules="{ message: '请选择'}" label="选择分类">
			        <el-select style="width:100%;" v-model="addword2Form.name1" placeholder="请选择">
			          <el-option label="默认分组" value="option1"></el-option>
			          <el-option label="欢迎语" value="option2"></el-option>
			          <el-option label="业务相关" value="option3"></el-option>
			        </el-select>
			      </el-form-item>
			      <el-form-item :rules="{ message: '请输入常用语'}" label="常用语内容">
			        <el-input type="textarea" :rows="6" v-model="addword2Form.name2" placeholder="请输入常用语"></el-input>
			      </el-form-item>
			    </el-form>
			  </div>
			  <div slot="footer" class="dialog-footer">
			    <el-button @click.native.prevent="handleClean" type="text" size="normal">清空</el-button>
			    <el-button @click="addword2Visible = false">取消</el-button>
			    <el-button type="primary" @click="addword2Visible = false">创建工单</el-button>
			  </div>
			</el-dialog>
			
			
			
			<el-dialog title="添加分类" top="9vh" :visible.sync="addclass2Visible" width="33%">
			  <div class="classfy">
			    <el-form
			      ref="addOrderForm"
			      :model="addclass2Form"
			      label-position="left"
			      label-width="120px"
			    >
			      <el-form-item :rules="{ message: '请输入分类名称'}" label="分类名称">
			        <el-input style="width:100%;" v-model="addclass2Form.name1" placeholder="请输入分类名称"></el-input>
			      </el-form-item>
			    </el-form>
			  </div>
			  <div slot="footer" class="dialog-footer">
			    <el-button @click.native.prevent="handleClean" type="text" size="normal">清空</el-button>
			    <el-button @click="addclass2Visible = false">取消</el-button>
			    <el-button type="primary" @click="addclass2Visible = false">确定</el-button>
			  </div>
			</el-dialog>
			
			<el-dialog title="编辑分类" top="9vh" :visible.sync="editDialogVisible" width="33%">
			  <div class="classfy">
			    <el-form ref="addOrderForm" :model="editForm" label-position="left" label-width="120px">
			      <el-form-item :rules="{  message: '请输入分类名称'}" label="分类名称">
			        <el-input style="width:100%;" v-model="editForm.name1" placeholder="请输入分类名称"></el-input>
			      </el-form-item>
			    </el-form>
			  </div>
			  <div slot="footer" class="dialog-footer">
			    <el-button @click.native.prevent="handleClean" type="text" size="normal">清空</el-button>
			    <el-button @click="editDialogVisible = false">取消</el-button>
			    <el-button type="primary" @click="editDialogVisible = false">保存</el-button>
			  </div>
			</el-dialog>
			
			<el-dialog title="删除确认" :visible.sync="deleteDialogVisible" top="34vh" width="26%">
			  <div class="delete-dialog-style">删除后无法恢复，确定删除此信息吗？</div>
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="deleteDialogVisible = false">取消</el-button>
			    <el-button type="primary" @click="deleteDialogVisible = false">确定</el-button>
			  </span>
			</el-dialog>
		</div>
		
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfSetting.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	
	 export default {
		name:"commonwords",
		components: {
			leftlist,
			NavBar,
			GHeader,
		},
		props: {},
		data() {
		  return {
		    activeName: "first",
		    activeNames: ["1"],
		    addword1Visible: false,
		    addclass1Visible: false,
		    addword2Visible: false,
		    addclass2Visible: false,
		    editDialogVisible: false,
		    editword1Visible: false,
		    addword1Form: {
		      name1: "",
		      name2: ""
		    },
		    editword1Form: {
		      name1: "",
		      name2: ""
		    },
		    addword2Form: {
		      name1: "",
		      name2: ""
		    },
		    addclass1Form: {
		      name1: ""
		    },
		    addclass2Form: {
		      name1: ""
		    },
		    editForm: {
		      name1: ""
		    },
		    deleteDialogVisible: false
		  };
		},
		watch: {},
		computed: {},
		methods: {
		  handleClick(tab, event) {
		    console.log(tab, event);
		  },
		  handleChange(val) {
		    console.log(val);
		  }
		},
		created() {},
		mounted() {}
	}
</script>

<style>
	.page {
		position: relative;
		width: 1680px;
	}
	.container{
		width: 1040px;
		height: 1869px;
		background-color: #FFFFFF;
		border-radius: 4px;
		position: absolute;
		top: 74px;
		left: 324px;
		padding: 25px;
	}
	.choice{
		width: 1040px;
		height: 70px;
	}
	.myf{
		display: flex;
		justify-content: space-between;
	}
	.layui-inline{
		display: inline-block;
		margin-left: 0px;
		margin-top: 21px;
	}
	.btn{
		margin-top: 21px;
	}
	.addcommonwords {
	  height: 200px;
	  overflow: auto;
	  padding: 20px 0 10px 20px;
	  margin-top: 10px;
	  border-top: 1px solid #f2f2f2;
	  border-bottom: 1px solid #f2f2f2;
	}
	.classfy{
		height: 50px;
		overflow: auto;
		padding: 20px 0 10px 20px;
		margin-top: 10px;
		border-top: 1px solid #f2f2f2;
		border-bottom: 1px solid #f2f2f2;
	}
	.overview-style {
	  padding: 20px;
	  background-color: #fff;
	  border-radius: 5px;
	}
	.item {
	  padding-top: 10px;
	}

	.delete-dialog-style {
	  border-top: 1px solid #f2f2f2;
	  border-bottom: 1px solid #f2f2f2;
	  padding: 20px;
	  padding-bottom: 70px;
	}
	.el-tabs__item {
	  margin-bottom: 20px;
	}
</style>
