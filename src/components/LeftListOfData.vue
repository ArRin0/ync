<template>
	<div class="workOrder">
			<dl>
				<dt>在线客服</dt>
				<dd :class="activeClass ==k?'active':''" v-for="(item,k) in items" @click="IsActive(k)">
					<div class="item">{{item.name}}</div>
				</dd>
			</dl>
	</div>
</template>

<script>
	export default{
		name:'LeftListOfWorkOrder',
		data:function(){
			return {
				activeClass: -1,// 0为默认选择第一个，-1为不选择
				items:[
				    {name: '数据总览'},
				    {name: '工作量统计'},
					{name: '工作质量统计'},
					{name: '考勤统计'},
					{name: '访问统计'},
				],
			}
		},
		methods: {
		      IsActive(k) {
		        this.activeClass = k;
		      }
		}
	}
</script>

<style>
	.workOrder dt,.workOrder dd{
		height: 48px;
	}
	
	.workOrder dt{
		padding-left: 20px;
		line-height: 48px;
		color: rgb(153, 153, 153);;
		font-size: 13px;
		font-weight: 400;
	}
	
	.workOrder{
		width: 240px;
		height: 700px;
		background-color: #FFFFFF;
		font-size: 14px;
		font-weight: 400;
		color: #333333;
	}
	
	.workOrder .item{
		padding-left: 20px;
		line-height: 48px;
	}
	.workOrder .active{
		background-color: rgba(0, 110, 255, 0.098);
		border-left: 4px solid blue;
	}
	.workOrder dd{
		cursor:pointer;
	}
	.workOrder dd:hover{
		background-color:rgba(0, 110, 255, 0.098) ;
	}
	
</style>
