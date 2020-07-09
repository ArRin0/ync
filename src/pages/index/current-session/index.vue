<template>
	<div class="current-session">
		<session-list type="current" @selectedSession="noticeWindow"></session-list>
		<session-window :sessionId="sessionId"></session-window>
	</div>
</template>

<script>
	import SessionList from '../components/SessionList.vue'
	import SessionWindow from '../components/SessionWindow.vue'
	
	export default{
		name:"CurrentSession",
		components:{
			SessionList,SessionWindow
		},
		data:function(){
			return {
				sessionId:""
			}
		},
		methods:{
			noticeWindow:function(sessionId){
				this.sessionId = sessionId;
			}
		}
	}
</script>

<style>
.current-session{
	display: flex;
}


</style>
