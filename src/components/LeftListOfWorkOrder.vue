<template>
	<div class="workOrder">
			<dl>
				<dt>工单</dt>
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
				    {name: '全部工单 (1000)'},
				    {name: '待我处理的 (100)'},
					{name: '我创建的 (0)'},
					{name: '抄送我的 (0)'},
					{name: '我处理的 (0)'},
					{name: '我解决的 (0)'},
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
		position: fixed;
		top: 74px;
		left: 74px;
		width: 240px;
		height: 892px;
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
