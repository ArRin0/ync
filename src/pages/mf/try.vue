<template>  
  <div id="box" :style="{width:'500px',height:'500px'}"></div>
</template>
<script>
export default {  
    name: "hello",  
    data() {    
    return {      
        msg: "Welcome to Your Vue.js App"    
        };  
    },  
    mounted() {    
    this.drawLine();  
    },  
    methods: {    
        drawLine() {       
      //基于准备好的dom，初始化echarts实例      
        let myChart = this.$echarts.init(document.getElementById("box")); //绘制图表      
        myChart.setOption({        
            title: { text: "在Vue中使用echarts" },        
            tooltip: {},// 悬停效果        
            xAxis: {          
           data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]// x轴数据         
     },        
           yAxis: {},//  y轴数据        
           series: [          
            {            
               name: "销量",            
               type: "bar",// 条状            // y轴数据          
            }        
           ]      
         });    
        },
      },
	  
	  created:function(){
	  	var list=[10,20,20,30,10,10];
	  	myChart.setOptions({
	  		series:[{
	  			data:list
	  		}]
	  	})
	  }
	  
};
</script>
<style>
</style>

