<template>
	<div class="current-session">
		<session-list type="history"></session-list>
		<session-window></session-window>
	</div>
</template>

<script>
	import SessionList from '../components/SessionList.vue'
	import SessionWindow from '../components/SessionWindow.vue'
	
	export default{
		name:"CurrentSession",
		components:{
			SessionList,SessionWindow
		}
	}
</script>

<style>
.current-session{
	display: flex;
}


</style>
