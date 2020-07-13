<template>
	<div class="box">
		<div class="p" style="font-size: 14px; font-weight: 400; color: rgba(51, 51, 51, 0.898);">{{type1}}</div>
		<div class="p" style="font-size: 48px;font-weight: 600;color: rgba(0, 110, 255, 0.898);">{{type2}}</div>
		<div class="p" style="font-size: 12px; font-weight: 400; color: #999999">{{type3}}</div>
	</div>
</template>

<script>
	export default{
		props:["type1","type2","type3"],
		}
</script>

<style>
	.box{
		width: 149px;
		height: 150px;
		top: 10px;
		text-align: center;
		padding-top: 14px;
		padding-left: 6px;
		padding-right: 6px;
		padding-bottom: 15px;
		background-color: rgb(240, 245, 252);
		margin: 6px;
		border-radius: 4px;
	}
	.box .p{
		width: 149px;
		height: 50px;
		font-size: 14px;
		font-weight: 400;
		color: #333333;
		line-height: 20px;
		font-feature-settings: "kern";
		text-align: center;
		word-wrap: break-word
	}
</style>
