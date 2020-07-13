<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header name="通知公告"></g-header>
		<leftlist></leftlist>
		<div class="container">
			<el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="网页端" name="first">
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">欢迎消息</label>
					    <el-switch v-model="value1"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">每段对话开启时，系统将自动向顾客发送一段欢迎语</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea1" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">客服无应答时消息</label>
					    <el-switch v-model="value2"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">客服一段时间没有响应顾客消息时，系统自动向他发送一段消息</label>
					  </div>
					  <div>
					    <br />
					    <label style="font-size: 14px">客服超过</label>
					    <el-input placeholder="请输入内容" v-model="input1" style="width: 50px;padding: 0px 5px"></el-input>
					    <label style="font-size: 14px">秒无响应时自动发送</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea2" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">顾客无响应时消息</label>
					    <el-switch v-model="value3"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">客服一段时间没有响应顾客消息时，系统自动向他发送一段消息</label>
					  </div>
					  <div>
					    <br />
					    <label style="font-size: 14px">顾客超过</label>
					    <el-input placeholder="请输入内容" v-model="input2" style="width: 50px;padding: 0px 5px"></el-input>
					    <label style="font-size: 14px">秒无响应时自动发送</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea3" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">对话结束</label>
					    <el-switch v-model="value4"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">对话结束后，系统自动向顾客发送一段结束语</label>
					  </div>
					  <div style="padding-top: 20px">
					    <div style="padding: 10px 0px">
					      <label style="font-size: 14px;padding-right: 5px">客服手动结束时</label>
					    </div>
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea4" rows="8"></el-input>
					  </div>
					  <div style="padding-top: 20px">
					    <div style="padding: 10px 0px">
					      <label style="font-size: 14px;padding-right: 5px">系统自动关闭时</label>
					    </div>
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea5" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
				</el-tab-pane>
				
			    <el-tab-pane label="手机APP" name="second">
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">欢迎消息</label>
					    <el-switch v-model="value1"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">每段对话开启时，系统将自动向顾客发送一段欢迎语</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea1" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">客服无应答时消息</label>
					    <el-switch v-model="value2"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">客服一段时间没有响应顾客消息时，系统自动向他发送一段消息</label>
					  </div>
					  <div>
					    <br />
					    <label style="font-size: 14px">客服超过</label>
					    <el-input placeholder="请输入内容" v-model="input1" style="width: 50px;padding: 0px 5px"></el-input>
					    <label style="font-size: 14px">秒无响应时自动发送</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea2" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">顾客无响应时消息</label>
					    <el-switch v-model="value3"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">客服一段时间没有响应顾客消息时，系统自动向他发送一段消息</label>
					  </div>
					  <div>
					    <br />
					    <label style="font-size: 14px">顾客超过</label>
					    <el-input placeholder="请输入内容" v-model="input2" style="width: 50px;padding: 0px 5px"></el-input>
					    <label style="font-size: 14px">秒无响应时自动发送</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea3" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">对话结束</label>
					    <el-switch v-model="value4"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">对话结束后，系统自动向顾客发送一段结束语</label>
					  </div>
					  <div style="padding-top: 20px">
					    <div style="padding: 10px 0px">
					      <label style="font-size: 14px;padding-right: 5px">客服手动结束时</label>
					    </div>
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea4" rows="8"></el-input>
					  </div>
					  <div style="padding-top: 20px">
					    <div style="padding: 10px 0px">
					      <label style="font-size: 14px;padding-right: 5px">系统自动关闭时</label>
					    </div>
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea5" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
				</el-tab-pane>
				
			    <el-tab-pane label="微信小程序" name="third">
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">欢迎消息</label>
					    <el-switch v-model="value1"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">每段对话开启时，系统将自动向顾客发送一段欢迎语</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea1" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">客服无应答时消息</label>
					    <el-switch v-model="value2"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">客服一段时间没有响应顾客消息时，系统自动向他发送一段消息</label>
					  </div>
					  <div>
					    <br />
					    <label style="font-size: 14px">客服超过</label>
					    <el-input placeholder="请输入内容" v-model="input1" style="width: 50px;padding: 0px 5px"></el-input>
					    <label style="font-size: 14px">秒无响应时自动发送</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea2" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">顾客无响应时消息</label>
					    <el-switch v-model="value3"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">客服一段时间没有响应顾客消息时，系统自动向他发送一段消息</label>
					  </div>
					  <div>
					    <br />
					    <label style="font-size: 14px">顾客超过</label>
					    <el-input placeholder="请输入内容" v-model="input2" style="width: 50px;padding: 0px 5px"></el-input>
					    <label style="font-size: 14px">秒无响应时自动发送</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea3" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">对话结束</label>
					    <el-switch v-model="value4"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">对话结束后，系统自动向顾客发送一段结束语</label>
					  </div>
					  <div style="padding-top: 20px">
					    <div style="padding: 10px 0px">
					      <label style="font-size: 14px;padding-right: 5px">客服手动结束时</label>
					    </div>
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea4" rows="8"></el-input>
					  </div>
					  <div style="padding-top: 20px">
					    <div style="padding: 10px 0px">
					      <label style="font-size: 14px;padding-right: 5px">系统自动关闭时</label>
					    </div>
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea5" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
				</el-tab-pane>
				
			    <el-tab-pane label="微博" name="fourth">
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">欢迎消息</label>
					    <el-switch v-model="value1"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">每段对话开启时，系统将自动向顾客发送一段欢迎语</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea1" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">客服无应答时消息</label>
					    <el-switch v-model="value2"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">客服一段时间没有响应顾客消息时，系统自动向他发送一段消息</label>
					  </div>
					  <div>
					    <br />
					    <label style="font-size: 14px">客服超过</label>
					    <el-input placeholder="请输入内容" v-model="input1" style="width: 50px;padding: 0px 5px"></el-input>
					    <label style="font-size: 14px">秒无响应时自动发送</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea2" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">顾客无响应时消息</label>
					    <el-switch v-model="value3"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">客服一段时间没有响应顾客消息时，系统自动向他发送一段消息</label>
					  </div>
					  <div>
					    <br />
					    <label style="font-size: 14px">顾客超过</label>
					    <el-input placeholder="请输入内容" v-model="input2" style="width: 50px;padding: 0px 5px"></el-input>
					    <label style="font-size: 14px">秒无响应时自动发送</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea3" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">对话结束</label>
					    <el-switch v-model="value4"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">对话结束后，系统自动向顾客发送一段结束语</label>
					  </div>
					  <div style="padding-top: 20px">
					    <div style="padding: 10px 0px">
					      <label style="font-size: 14px;padding-right: 5px">客服手动结束时</label>
					    </div>
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea4" rows="8"></el-input>
					  </div>
					  <div style="padding-top: 20px">
					    <div style="padding: 10px 0px">
					      <label style="font-size: 14px;padding-right: 5px">系统自动关闭时</label>
					    </div>
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea5" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
				</el-tab-pane>
				
				<el-tab-pane label="手机站" name="fifth">
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">欢迎消息</label>
					    <el-switch v-model="value1"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">每段对话开启时，系统将自动向顾客发送一段欢迎语</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea1" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">客服无应答时消息</label>
					    <el-switch v-model="value2"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">客服一段时间没有响应顾客消息时，系统自动向他发送一段消息</label>
					  </div>
					  <div>
					    <br />
					    <label style="font-size: 14px">客服超过</label>
					    <el-input placeholder="请输入内容" v-model="input1" style="width: 50px;padding: 0px 5px"></el-input>
					    <label style="font-size: 14px">秒无响应时自动发送</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea2" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">顾客无响应时消息</label>
					    <el-switch v-model="value3"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">客服一段时间没有响应顾客消息时，系统自动向他发送一段消息</label>
					  </div>
					  <div>
					    <br />
					    <label style="font-size: 14px">顾客超过</label>
					    <el-input placeholder="请输入内容" v-model="input2" style="width: 50px;padding: 0px 5px"></el-input>
					    <label style="font-size: 14px">秒无响应时自动发送</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea3" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">对话结束</label>
					    <el-switch v-model="value4"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">对话结束后，系统自动向顾客发送一段结束语</label>
					  </div>
					  <div style="padding-top: 20px">
					    <div style="padding: 10px 0px">
					      <label style="font-size: 14px;padding-right: 5px">客服手动结束时</label>
					    </div>
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea4" rows="8"></el-input>
					  </div>
					  <div style="padding-top: 20px">
					    <div style="padding: 10px 0px">
					      <label style="font-size: 14px;padding-right: 5px">系统自动关闭时</label>
					    </div>
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea5" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
				</el-tab-pane>
				
				<el-tab-pane label="移动网站" name="sixth">
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">欢迎消息</label>
					    <el-switch v-model="value1"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">每段对话开启时，系统将自动向顾客发送一段欢迎语</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea1" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">客服无应答时消息</label>
					    <el-switch v-model="value2"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">客服一段时间没有响应顾客消息时，系统自动向他发送一段消息</label>
					  </div>
					  <div>
					    <br />
					    <label style="font-size: 14px">客服超过</label>
					    <el-input placeholder="请输入内容" v-model="input1" style="width: 50px;padding: 0px 5px"></el-input>
					    <label style="font-size: 14px">秒无响应时自动发送</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea2" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">顾客无响应时消息</label>
					    <el-switch v-model="value3"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">客服一段时间没有响应顾客消息时，系统自动向他发送一段消息</label>
					  </div>
					  <div>
					    <br />
					    <label style="font-size: 14px">顾客超过</label>
					    <el-input placeholder="请输入内容" v-model="input2" style="width: 50px;padding: 0px 5px"></el-input>
					    <label style="font-size: 14px">秒无响应时自动发送</label>
					  </div>
					  <div style="padding-top: 20px">
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea3" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
					<div>
					  <div>
					    <label style="font-size: 14px;padding-right: 5px">对话结束</label>
					    <el-switch v-model="value4"></el-switch>
					  </div>
					  <div>
					    <label style="font-size: 12px;color: #C0C4CC;">对话结束后，系统自动向顾客发送一段结束语</label>
					  </div>
					  <div style="padding-top: 20px">
					    <div style="padding: 10px 0px">
					      <label style="font-size: 14px;padding-right: 5px">客服手动结束时</label>
					    </div>
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea4" rows="8"></el-input>
					  </div>
					  <div style="padding-top: 20px">
					    <div style="padding: 10px 0px">
					      <label style="font-size: 14px;padding-right: 5px">系统自动关闭时</label>
					    </div>
					    <el-input type="textarea" placeholder="请输入消息内容" v-model="textarea5" rows="8"></el-input>
					  </div>
					  <div style="margin: 20px 0;"></div>
					  <el-button type="primary" style="margin-bottom: 20px;">保存</el-button>
					</div>
				</el-tab-pane>
			  </el-tabs>
		</div>
		
	</div>
</template>

<script>
	import leftlist from '@/components/LeftListOfSetting.vue'
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'
	
	 export default {
		name:"personal",
		components: {
			leftlist,
			NavBar,
			GHeader,
		},
		props: {},
		data() {
		  return {
		    activeName: "first",
		    value1: true,
		    value2: true,
		    value3: true,
		    value4: true,
		    input1: "20",
		    input2: "20",
		    textarea1: "",
		    textarea2: "",
		    textarea3: "",
		    textarea4: "",
		    textarea5: ""
		  };
		},
		watch: {},
		computed: {},
		methods: {
		  handleClick(tab, event) {
		    console.log(tab, event);
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
	textarea{
		resize:none;
		width: 1040px;
		height: 100px;
		border-style: none;
		outline-style: none;
		border: 2px;
		font-size: 15px;
		padding-top: 0;
	}
</style>
