<template>
	<div class="workOrder">
			<dl>
				<dt>在线客服</dt>
				<dd :class="activeClass ==position?'active':''" v-for="(item,k) in items" @click="IsActive(k)">
					<div class="item">{{item.name}}</div>
				</dd>
			</dl>
	</div>
</template>

<script>
	export default{
		name:'LeftListOfData',
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
		      created() {
				this.k=this.$route.query.k;
		        this.activeClass = k;
		      },
			  IsActive(k) {
			  	if (k == 0) {
			  		this.$router.push({
						path:`/data?k=${k}`,
						query:{k:k}
					});
			  	}
			  	if (k == 1) {
						this.$router.push({
							path:`/workload?k=${k}`,
							query:{k:k}
						});
					}
					if (k == 2) {
						this.$router.push({
							path:`/workmanship?k=${k}`,
							query:{k:k}
						});
					}
					if (k == 3) {
						this.$router.push({
							path:`/attendance?k=${k}`,
							query:{k:k}
						});
					}
					if (k == 4) {
						this.$router.push({
							path:`/visits?k=${k}`,
							query:{k:k}
						});
					}
			  },
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
		height: 630px;
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
