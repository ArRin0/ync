<template>
	<div class="page">
		<nav-bar></nav-bar>
		<g-header></g-header>
		<div class="main-area">
			<router-view/>
		</div>
	</div>
</template>

<script>
	import NavBar from '@/components/NavBar.vue'
	import GHeader from '@/components/Header.vue'

	export default {
		name: "Index",
		components: {
			NavBar,
			GHeader
		}
	}
</script>

<style>
	.page {
		position: relative;
		width: 1680px;
	}
	.main-area{
		width: 1326px;
		margin: 10px 74px;
		display: flex;
		justify-content: space-between;
	}
</style>
