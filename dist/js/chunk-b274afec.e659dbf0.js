(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b274afec"],{"0266":function(t,s,e){},"0418":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"top"},[e("div",{staticClass:"h3"},[t._v(t._s(t.name))]),e("div",{staticClass:"users-info"},[t._m(0),t._m(1),e("div",{staticClass:"user-name"},[t._v("\n\t\t\t"+t._s(t.user.nickName)),e("i",{staticClass:"iconfont icon-icon_down-arrow"}),t._m(2)])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user-msg msg"},[e("i",{staticClass:"iconfont icon-lingdang"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user-img"},[e("img",{attrs:{src:"img/u94.svg"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user-status"},[e("div",{staticClass:"user-status-item active"},[e("i",{staticClass:"iconfont icon-dian"}),t._v("在线")]),e("div",{staticClass:"user-status-item"},[e("i",{staticClass:"iconfont icon-dian"}),t._v("离线")])])}],n={props:["name"],name:"GHeader",data:function(){return{user:{}}},created:function(){var t=localStorage.getItem("user");this.user=JSON.parse(t)}},c=n,l=(e("8baf"),e("2877")),o=Object(l["a"])(c,a,i,!1,null,null,null);s["a"]=o.exports},2333:function(t,s,e){"use strict";var a=e("3819"),i=e.n(a);i.a},"284c":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"workOrder"},[e("dl",[e("dt",[t._v("通用设置")]),t._l(t.items1,function(s,a){return e("dd",{class:t.activeClass1==a?"active":"",on:{click:function(s){return t.IsActive1(a)}}},[e("div",{staticClass:"item"},[t._v(t._s(s.name))])])})],2),e("dl",[e("dt",[t._v("团队设置")]),t._l(t.items2,function(s,a){return e("dd",{class:t.activeClass2==a?"active":"",on:{click:function(s){return t.IsActive2(a)}}},[e("div",{staticClass:"item"},[t._v(t._s(s.name))])])})],2),e("dl",[e("dt",[t._v("客服设置")]),t._l(t.items3,function(s,a){return e("dd",{class:t.activeClass3==a?"active":"",on:{click:function(s){return t.IsActive3(a)}}},[e("div",{staticClass:"item"},[t._v(t._s(s.name))])])})],2),e("dl",[e("dt",[t._v("工单设置")]),t._l(t.items4,function(s,a){return e("dd",{class:t.activeClass4==a?"active":"",on:{click:function(s){return t.IsActive4(a)}}},[e("div",{staticClass:"item"},[t._v(t._s(s.name))])])})],2),e("dl",[e("dt",[t._v("全局设置")]),t._l(t.items5,function(s,a){return e("dd",{class:t.activeClass5==a?"active":"",on:{click:function(s){return t.IsActive5(a)}}},[e("div",{staticClass:"item"},[t._v(t._s(s.name))])])})],2)])},i=[],n={name:"LeftListOfWorkOrder",data:function(){return{activeClass1:-1,activeClass2:-1,activeClass3:-1,activeClass4:-1,activeClass5:-1,items1:[{name:"个人信息"},{name:"通知公告"}],items2:[{name:"企业信息"},{name:"客服管理"},{name:"分组管理"},{name:"角色管理"}],items3:[{name:"常用语"},{name:"自动回复"},{name:"对话规则"},{name:"分配规则"},{name:"会话评价"},{name:"客户信息"},{name:"客户标签"},{name:"黑名单"}],items4:[{name:"基础设置"},{name:"工单分类"}],items5:[{name:"操作日志"},{name:"消息通知"}]}},methods:{IsActive1:function(t){this.activeClass1=t,this.activeClass2=-1,this.activeClass3=-1,this.activeClass4=-1,this.activeClass5=-1,0==t&&this.$router.push("/settingofpersonal"),1==t&&this.$router.push("/settingofnotice")},IsActive2:function(t){this.activeClass1=-1,this.activeClass2=t,this.activeClass3=-1,this.activeClass4=-1,this.activeClass5=-1,0==t&&this.$router.push("/settingofcompany"),1==t&&this.$router.push("/settingofcustserv"),2==t&&this.$router.push("/settingofgroup"),3==t&&this.$router.push("/settingofrole")},IsActive3:function(t){this.activeClass1=-1,this.activeClass2=-1,this.activeClass3=t,this.activeClass4=-1,this.activeClass5=-1,0==t&&this.$router.push("/settingofcommonwords"),1==t&&this.$router.push("/settingofreply"),2==t&&this.$router.push("/settingofdialogrule"),3==t&&this.$router.push("/settingofdistributionrule"),4==t&&this.$router.push("/settingofsessionevaluation"),5==t&&this.$router.push("/settingofcustomerinfor"),6==t&&this.$router.push("/settingofcustomerlabel"),7==t&&this.$router.push("/settingofblacklist")},IsActive4:function(t){this.activeClass1=-1,this.activeClass2=-1,this.activeClass3=-1,this.activeClass4=t,this.activeClass5=-1,0==t&&this.$router.push("/settingofbasicsetting"),1==t&&this.$router.push("/settingofclassification")},IsActive5:function(t){this.activeClass1=-1,this.activeClass2=-1,this.activeClass3=-1,this.activeClass4=-1,this.activeClass5=t,0==t&&this.$router.push("/settingofoperatelog"),1==t&&this.$router.push("/settingofnotification")}}},c=n,l=(e("5718"),e("2877")),o=Object(l["a"])(c,a,i,!1,null,"4c89495d",null);s["a"]=o.exports},"28f0":function(t,s,e){"use strict";var a=e("af4f"),i=e.n(a);i.a},3819:function(t,s,e){},"407d":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page"},[e("nav-bar"),e("g-header",{attrs:{name:"操作日志"}}),e("leftlist"),e("div",{staticClass:"container"},[e("div",{staticClass:"choice"},[e("drop")],1),e("div",{staticClass:"overview-style"},[e("div",{staticClass:"top-select-group"},[e("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.value1,callback:function(s){t.value1=s},expression:"value1"}}),e("el-input",{staticStyle:{width:"216px"},attrs:{placeholder:"请输入操作人信息",clearable:""},model:{value:t.searchKeyword,callback:function(s){t.searchKeyword=s},expression:"searchKeyword"}}),e("el-button",{attrs:{type:"primary"}},[t._v("搜索")]),e("el-button",{staticStyle:{float:"right"}},[t._v("导出当前数据")])],1),e("div",{staticClass:"bottom-table-group"},[e("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{"background-color":"#e6f1ff",height:"62px"},data:t.tableData,"tooltip-effect":"dark","cell-style":t.cellStyle},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{prop:"col1",label:"操作人",align:"center"}}),e("el-table-column",{attrs:{prop:"col2",label:"操作动作",align:"center"}}),e("el-table-column",{attrs:{prop:"col3",label:"操作对象",align:"center"}}),e("el-table-column",{attrs:{prop:"col4",label:"操作时间",align:"center"}}),e("el-table-column",{attrs:{prop:"col5",label:"操作IP",align:"center"}})],1)],1),e("div",{staticClass:"bottom-pagination-group"},[e("el-pagination",{attrs:{background:"","current-page":t.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, prev, pager, next,sizes, jumper",total:400},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])])],1)},i=[],n=e("284c"),c=e("d000"),l=e("0418"),o=(e("baed"),{name:"operatelog",components:{leftlist:n["a"],NavBar:c["a"],GHeader:l["a"]},data:function(){return{tableData:[{col1:"七尾",col2:"新增工单",col3:"工单标题：客户报价",col4:"2019/09/12 10:99",col5:"132.224.22.2"},{col1:"七尾",col2:"新增工单",col3:"工单标题：客户报价",col4:"2019/09/12 10:99",col5:"132.224.22.2"},{col1:"七尾",col2:"新增工单",col3:"工单标题：客户报价",col4:"2019/09/12 10:99",col5:"132.224.22.2"},{col1:"七尾",col2:"新增工单",col3:"工单标题：客户报价",col4:"2019/09/12 10:99",col5:"132.224.22.2"},{col1:"七尾",col2:"新增工单",col3:"工单标题：客户报价",col4:"2019/09/12 10:99",col5:"132.224.22.2"},{col1:"七尾",col2:"新增工单",col3:"工单标题：客户报价",col4:"2019/09/12 10:99",col5:"132.224.22.2"},{col1:"七尾",col2:"新增工单",col3:"工单标题：客户报价",col4:"2019/09/12 10:99",col5:"132.224.22.2"},{col1:"七尾",col2:"新增工单",col3:"工单标题：客户报价",col4:"2019/09/12 10:99",col5:"132.224.22.2"},{col1:"七尾",col2:"新增工单",col3:"工单标题：客户报价",col4:"2019/09/12 10:99",col5:"132.224.22.2"},{col1:"七尾",col2:"新增工单",col3:"工单标题：客户报价",col4:"2019/09/12 10:99",col5:"132.224.22.2"}]}}}),r=o,u=(e("d910"),e("9bf8"),e("2877")),v=Object(u["a"])(r,a,i,!1,null,"d9422c4a",null);s["default"]=v.exports},5718:function(t,s,e){"use strict";var a=e("0266"),i=e.n(a);i.a},"65d5":function(t,s,e){},"782e":function(t,s,e){},"8baf":function(t,s,e){"use strict";var a=e("782e"),i=e.n(a);i.a},"9bf8":function(t,s,e){"use strict";var a=e("a3c2"),i=e.n(a);i.a},a3c2:function(t,s,e){},af4f:function(t,s,e){},baed:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"myf"},[e("div",{staticClass:"timelay"},[e("el-date-picker",{attrs:{"prefix-icon":"el-icon-date",type:"daterange","start-placeholder":"请选择日期","end-placeholder":"请选择日期",size:"medium","value-format":"yyyy-MM-dd"},on:{change:function(s){return t.selectModel4(s)}},model:{value:t.rangeDate,callback:function(s){t.rangeDate=s},expression:"rangeDate"}})],1),e("div",{staticClass:"layui-inline"},[e("div",{staticClass:"layui-input-inline"},[e("el-input",{staticStyle:{width:"170px"},attrs:{placeholder:"请输入公告标题"},model:{value:t.input,callback:function(s){t.input=s},expression:"input"}}),e("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[t._v("搜索")])],1)]),e("div",{staticClass:"btn",attrs:{tyle:"width: 100px;"}},[e("el-button",{staticStyle:{width:"100px"},attrs:{type:"primary"}},[t._v("添加公告")])],1),e("div",{staticClass:"btn",staticStyle:{width:"100px"}},[e("el-button",{staticStyle:{width:"100px"}},[t._v("批量删除")])],1),e("div",{staticClass:"btn",staticStyle:{width:"120px"}},[e("el-button",{staticStyle:{width:"120px"}},[t._v("导出当前数据")])],1)])},i=[],n={name:"drop",data:function(){return{}}},c=n,l=(e("2333"),e("2877")),o=Object(l["a"])(c,a,i,!1,null,null,null);s["a"]=o.exports},d000:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"nav"},[e("div",{staticClass:"logo"},[t._v("Logo")]),e("div",{staticClass:"menu"},[e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/home"}},[e("i",{staticClass:"iconfont icon-shouye7"})])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/index/current-session"}},[e("i",{staticClass:"iconfont icon-gongdanguanli"})])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/visit"}},[e("i",{staticClass:"iconfont icon-fangke"})])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/index/history-session"}},[e("i",{staticClass:"iconfont icon-lishi"})])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/customer"}},[e("i",{staticClass:"iconfont icon-yonghu"})])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/WorkOrder"}},[e("i",{staticClass:"iconfont icon-gongdan"})])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/data"}},[e("i",{staticClass:"iconfont icon-tongji"})])],1),t._m(0),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/settingofpersonal"}},[e("i",{staticClass:"iconfont icon-shezhi"})])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/login"}},[e("i",{staticClass:"iconfont icon-tubiaoshangchuanmoban"})])],1)])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"menu-item separate-line"},[e("i",{staticClass:"iconfont icon-hengxian"})])}],n={name:"NavBar",data:function(){return{}}},c=n,l=(e("28f0"),e("2877")),o=Object(l["a"])(c,a,i,!1,null,"6331d2fa",null);s["a"]=o.exports},d910:function(t,s,e){"use strict";var a=e("65d5"),i=e.n(a);i.a}}]);
//# sourceMappingURL=chunk-b274afec.e659dbf0.js.map