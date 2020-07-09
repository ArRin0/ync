<template>
	<layout>
		<!-- 当abcEvent发生的时候，执行doSubmit -->
		<Gform type="注册" @abcEvent="doSubmit"></Gform>
	</layout>
</template>

<script>
	import layout from './components/layout.vue'
	import Gform from './components/form.vue'
	import {
		regist
	} from "../../api/customerService.js"

	export default {
		name: "login",
		components: {
			layout,
			Gform
		},
		methods: {
			// 如何处理注册事件
			//当用户在子组件上填写手机号码、密码后，点击注册按钮时，获取到数据，提交到服务器，完成注册功能
			doSubmit: function(data) {
				// 得到子组件用户输入的数据
				this.$axios
					.post("/cs/regist", data) //请求接口/cs/regist，
					.then(resp => { //当服务器返回结果后处理
						let {
							data
						} = resp;
						if (data.success == true) {
							// 跳转到登陆页面
							this.$router.push('/login'); //编程的方式实现
						}
					})
					.catch(err => { //当请求失败，处理
						console.log(err)
					})
			}
		}
	}
</script>

<style>
</style>
