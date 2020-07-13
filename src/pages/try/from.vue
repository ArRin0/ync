<template>
  <div class="boxShadow">
    <div style="margin-top: 20px">
 
      <el-table
        :data="tables"
        ref="multipleTable"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change='selectArInfo'>
        <el-table-column type="selection" width= "45px""></el-table-column>
        <el-table-column label="序号" width= auto type="index">
        </el-table-column>
        <template v-for='(col) in tableData'>
          <el-table-column
            sortable
            :show-overflow-tooltip="true"
            :prop="col.dataItem"
            :label="col.dataName"
            :key="col.dataItem"
            width="124px">
          </el-table-column>
        </template>
        <el-table-column label="操作" width="80" align="center">
          <template slot-scope="scope">
            <el-button size="mini" class="del-com" @click="delTabColOne()" ><i class="iconfont icon-shanchu"></i></el-button>
          </template>
        </el-table-column>
      </el-table>
 
 
    </div>
  </div>
 
</template>
<script>
  export default {
    data () {
      return {
        tables: [],
        tableData: [{
          dataItem: 'visitorName',
          dataName: '访客名称'
        }, {
          dataItem: 'browser',
          dataName: '来源'
        }, {
          dataItem: 'terminal',
          dataName: '终端'
        }, {
          dataItem: 'visitTime',
          dataName: '访问时间'
        }, {
          dataItem: 'visitDuration',
          dataName: '访问时常'
        }, {
          dataItem: 'ip',
          dataName: 'ip地址'
        }, {
          dataItem: 'state',
          dataName: '访客状态'
        }]
      }
    },created:function(){
			this.$axios
			.get('/visitor/select')
			.then(resp=>{
				let {data} = resp;
				this.tables = data.result;
			})
		}
  }
</script>
 