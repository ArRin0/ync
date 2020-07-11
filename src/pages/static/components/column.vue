<template>
	<div id="myChart" :style="{width: '500px', height: '300px'}"></div>
</template>

<script>
	export default {
	  name: 'hello',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App'
	    }
	  },
	  mounted(){
	    this.drawLine();
	  },
	  methods: {
	    drawLine(){
	        // 基于准备好的dom，初始化echarts实例
	        let myChart = this.$echarts.init(document.getElementById('myChart'))
	        // 绘制图表
			debugger
			var list = [5,20,36,10,10,20];
			var option = {
	            title: { text: '在Vue中使用echarts' },
	            tooltip: {},
				legend: {
				        data:['销量']
				},
	            xAxis: {
	                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
	            },
	            yAxis: {data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},
	            series: [{
	                name: '销量',
	                type: 'bar',
	                data: list
	            }]
	        };
			 
	        myChart.setOption(option);
	    }
	  }
	}
</script>

<style>
</style>