<template>
	<!-- 必须有一个根元素 -->
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	// 导入要使用的组件

// vue组件的构造参数
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	html{
		/* background-color: rgba(0, 110, 255, 0.098); */
		background-color: rgba(0, 110, 255, 0.098);
		font-family: PingFangSC-Regular, "PingFang SC", sans-serif;
		font-size: 14px;
		font-feature-settings: "kern";
	}
</style>
