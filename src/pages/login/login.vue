<template>
	<layout>
		<Gform type="登录"></Gform>
	</layout>
</template>

<script>
	import layout from './components/layout.vue'
	import Gform from './components/form.vue'
	
	export default{
		name:"login",
		components:{layout,Gform}
	}
</script>

<style>
</style>
<template>
	<layout>
		<Gform type="登录" @abcEvent="doSubmit"></Gform>
	</layout>
</template>

<script>
	import layout from './components/layout.vue'
	import Gform from './components/form.vue'
	
	export default{
		name:"login",
		components:{layout,Gform},
		methods:{
			doSubmit:function(data){
				this.$axios
					.post("/cs/login", data) //请求接口/cs/regist，
					.then(resp => { //当服务器返回结果后处理
						let {
							data
						} = resp;
						if(data.success){
							localStorage.setItem("user",JSON.stringify(data.result))
							this.$router.push("/index");
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
