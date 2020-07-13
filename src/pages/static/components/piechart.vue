<template>
  <div class="echarts">
      <div v-bind:id=id ref="data" style="width: 470px;height: 350px"></div>
  </div>
</template>

<script>
  export default {
    name: "piechart",
    props: ["id", "data"], //接受从父组件传回的值
    data() {
      return {}
    },
    //实时监听父组件传过来的值
    //然后执行drawBar方法 重新绘制柱状图
    watch: {
      data: {
		  deep: true,//深度监听
		  immediate: true,
        handler(value) {
          this.drawBar(value);
        },
      }
    },
    mounted() {
      this.drawBar(this.data)
    },
    methods: {
      drawBar({
                textTile = '',  // 标题 柱状图options里需要用的数据这里作为参数从data里面取值
                nameArray = [],//饼图的标签
                series = [],//series的数据
              } = {}  //作为一个整体的参数
      ) {   //现在是真正开始画图表的时候
        let barBox = this.$echarts.init(document.getElementById(this.id));
        //给图表一个指定的容器dom
        let option = { //设置图表的options
		    tooltip: { //设置鼠标触碰时能看到具体数据
		        trigger: 'item',
		        formatter: '{a} <br/>{b}: {c} ({d}%)'
		    },
          //1.先设置图表的标题
          title: {
            text: textTile,//使用父组件传过来的数据
            x:20,
            textStyle:{
            	width: 218,
            	height: 24,
            	fontSize: 18,
            	fontWeight: 0,
            }
          },
         legend: {
                 orient: 'vertical',
                 right: 50,
                 data: nameArray,
             },

          //6.图表的相关series设置
          series: series,
        };
        //饼状图的相关结构已经定义好了调用setoption
        barBox.setOption(option, true);
        console.log(option)
        window.addEventListener("resize", function () {
          barBox.resize();
        })
      }
    },
  }
</script>


<style>
</style>