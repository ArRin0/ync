<template>
	<div>
  <div class="Box">
    <!--  调用子组件  对应子组件的id=bar和data=objectData数据绑定-->
    <bar-chart :id="'bar1'" :data="objectData"></bar-chart>
  </div>
  <div class="Box">
    <!--  调用子组件  对应子组件的id=bar和data=objectData数据绑定-->
    <bar-chart :id="'bar2'" :data="objectData"></bar-chart>
  </div>
  <div class="Box">
    <!--  调用子组件  对应子组件的id=bar和data=objectData数据绑定-->
    <bar-chart :id="'bar3'" :data="objectData"></bar-chart>
  </div>
  <div class="Box">
    <!--  调用子组件  对应子组件的id=bar和data=objectData数据绑定-->
    <bar-chart :id="'bar4'" :data="objectData"></bar-chart>
  </div>
  </div>
</template>


<script>
  import BarChart from "./components/piechart.vue";

  export default {
    name: "About",
    components: {BarChart},
    data() {
      return {
        objectData: {
          textTile: "父子组件传值echarts案例",
          totalText: '这是一个test',
          nameArray: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          series: [],
        }
      }
    },
    mounted() {
      this.getSeries();
    },
    methods: {
      getSeries() {
        this.objectData.series.push({
          name: '温度',
          type: "bar",
          barWidth: "20%",
          data: ['32', '30', '28', '29', '36', '33', '25'],
          itemStyle: {
            normal: {
              //好，这里就是重头戏了，定义一个list，然后根据所以取得不同的值，这样就实现了，
              color: function (params) {
                // build a color map as your need.
                var colorList = [
                  '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                  '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                  '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
                ];
                return colorList[params.dataIndex]
              },
              label: {
                show: true,
                position: 'top',
                formatter: '{c}'
              }
            }
          }
        })
      }
    }
  }
</script>

<style>
	.box2{
		display: flex;
		flex-wrap: wrap;
		padding-left: 22pxpx;
	}
	.col{
		width: 435px;
		height: 300px;
	}
</style>