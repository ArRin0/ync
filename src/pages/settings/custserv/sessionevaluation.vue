<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="会话评价"></g-header>
		<leftlist></leftlist>
		<div class="container">
			<div class="overview-style">
			  <el-row :gutter="20">
			    <el-col :span="16"><div class="grid-content bg-purple">
			
			      <div style="margin-left: 20px">
			        <br/>
			        <label style="font-size: 18px;font-weight: 500">会话评价</label>
			        <br/>
			        <label style="color: #C0C4CC;font-size: 12px;">工单被更新时，同步通知工单创建人</label>
			        <br/>
			        <br/>
			      </div>
			
			      <div style="margin-left: 20px;margin-right: 20px">
			        <label style="font-size: 14px">人工客服是否解决问题</label>
			        <el-switch
			          v-model="value1" style="padding-left: 10px">
			        </el-switch>
			        <br/>
			        <label style="color: #C0C4CC;font-size: 12px;">开启此功能后，在人工客服满意度评价页显示是否解决问题选项，帮助统计客服解决问题的能力。</label>
			        <el-divider></el-divider>
			      </div>
			
			      <div style="margin-left: 20px;margin-right: 20px">
			        <label style="font-size: 14px">结束对话时系统自动邀请评价</label>
			        <el-switch
			          v-model="value2" style="padding-left: 10px">
			        </el-switch>
			        <br/>
			        <br/>
			        <label style="font-size: 14px">设置邀请评价文案</label>
			        <br/>
			        <br/>
			        <el-input
			          type="textarea"
			          placeholder="请对客服的服务质量做出评价"
			          v-model="textarea1"
			          rows="8">
			        </el-input>
			      </div>
			
			      <div style="margin: 20px 0;"></div>
			      <el-button type="primary" style="margin-bottom: 20px;margin-left: 20px">保存</el-button>
			    </div></el-col>
			
			    <el-col :span="8" ><div class="grid-content bg-purple">
			          <div style="margin-left: 20px">
			            <br/>
			            <label style="font-size: 18px;font-weight: 500">预览</label>
			            <br/>
			            <br/>
			          </div>
			
			          <div style="margin-left: 20px;margin-right: 20px" align="center">
			            <label style="font-size: 14px;">请对客服的服务质量做出评价</label>
			            <br/>
			            <br/>
			            <el-row style="margin-bottom: 10px">
			              <el-radio v-model="radio" label="1">
			                <i class="iconfont">&#xe643;</i>
			              </el-radio>
			              <el-radio v-model="radio" label="2">
			                <i class="iconfont">&#xe63e;</i>
			              </el-radio>
			              <el-radio v-model="radio" label="3">
			                <i class="iconfont">&#xe63f;</i>
			              </el-radio>
			            </el-row>
			            <div style="font-size: 14px">
			              <label style="margin: 30px">好评</label>
			              <label style="margin: 30px">中评</label>
			              <label style="margin: 30px">差评</label>
			            </div>
			            <br/>
			            <br/>
			            <el-input
			              type="textarea"
			              placeholder="请对客服的服务做出评价"
			              v-model="textarea2"
			              rows="8">
			            </el-input>
			            <div style="margin: 20px 0;"></div>
			            <el-button type="primary" style="margin-bottom: 20px;margin-left: 20px">提交</el-button>
			            <br/>
			            <br/>
			            <br/>
			          </div>
			
			    </div></el-col>
			  </el-row>
			</div>
		</div>
		
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfSetting.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	import drop from '../components/drop.vue'
	
	 export default {
		name:"sessionevaluation",
		components: {
			leftlist,
			NavBar,
			GHeader,
		},
		data() {
		  return {
		    value1: true,
		    value2: true,
		    textarea1: '',
		    textarea2: '',
		    radio: ''
		  };
		},
	}
</script>
<style scoped>
  .overview-style {
    padding: 20px;
    border-radius: 5px;
  }
  el-row {
    margin-bottom: 20px;
  }
  el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background-color: #fff
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 1890132 */
    src: url('//at.alicdn.com/t/font_1890132_ugxdrp8g13d.eot');
    src: url('//at.alicdn.com/t/font_1890132_ugxdrp8g13d.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1890132_ugxdrp8g13d.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1890132_ugxdrp8g13d.woff') format('woff'),
    url('//at.alicdn.com/t/font_1890132_ugxdrp8g13d.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1890132_ugxdrp8g13d.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 40px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
</style>

<style>
	.page {
		position: relative;
		width: 1680px;
	}
	.main-area{
		width: 1326px;
		margin: 10px 74px;
	}
	.container{
		width: 1040px;
		height: 1869px;
		background-color: #FFFFFF;
		border-radius: 4px;
		position: absolute;
		top: 74px;
		left: 324px;
	}
	.choice{
		width: 1040px;
		height: 70px;
	}
</style>
