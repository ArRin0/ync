(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-164ceff4"],{"0266":function(t,s,i){},"0418":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"top"},[i("div",{staticClass:"h3"},[t._v(t._s(t.name))]),i("div",{staticClass:"users-info"},[t._m(0),t._m(1),i("div",{staticClass:"user-name"},[t._v("\n\t\t\t"+t._s(t.user.nickName)),i("i",{staticClass:"iconfont icon-icon_down-arrow"}),t._m(2)])])])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"user-msg msg"},[i("i",{staticClass:"iconfont icon-lingdang"})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"user-img"},[i("img",{attrs:{src:"img/u94.svg"}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"user-status"},[i("div",{staticClass:"user-status-item active"},[i("i",{staticClass:"iconfont icon-dian"}),t._v("在线")]),i("div",{staticClass:"user-status-item"},[i("i",{staticClass:"iconfont icon-dian"}),t._v("离线")])])}],n={props:["name"],name:"GHeader",data:function(){return{user:{}}},created:function(){var t=localStorage.getItem("user");this.user=JSON.parse(t)}},c=n,l=(i("8baf"),i("2877")),o=Object(l["a"])(c,e,a,!1,null,null,null);s["a"]=o.exports},"284c":function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"workOrder"},[i("dl",[i("dt",[t._v("通用设置")]),t._l(t.items1,function(s,e){return i("dd",{class:t.activeClass1==e?"active":"",on:{click:function(s){return t.IsActive1(e)}}},[i("div",{staticClass:"item"},[t._v(t._s(s.name))])])})],2),i("dl",[i("dt",[t._v("团队设置")]),t._l(t.items2,function(s,e){return i("dd",{class:t.activeClass2==e?"active":"",on:{click:function(s){return t.IsActive2(e)}}},[i("div",{staticClass:"item"},[t._v(t._s(s.name))])])})],2),i("dl",[i("dt",[t._v("客服设置")]),t._l(t.items3,function(s,e){return i("dd",{class:t.activeClass3==e?"active":"",on:{click:function(s){return t.IsActive3(e)}}},[i("div",{staticClass:"item"},[t._v(t._s(s.name))])])})],2),i("dl",[i("dt",[t._v("工单设置")]),t._l(t.items4,function(s,e){return i("dd",{class:t.activeClass4==e?"active":"",on:{click:function(s){return t.IsActive4(e)}}},[i("div",{staticClass:"item"},[t._v(t._s(s.name))])])})],2),i("dl",[i("dt",[t._v("全局设置")]),t._l(t.items5,function(s,e){return i("dd",{class:t.activeClass5==e?"active":"",on:{click:function(s){return t.IsActive5(e)}}},[i("div",{staticClass:"item"},[t._v(t._s(s.name))])])})],2)])},a=[],n={name:"LeftListOfWorkOrder",data:function(){return{activeClass1:-1,activeClass2:-1,activeClass3:-1,activeClass4:-1,activeClass5:-1,items1:[{name:"个人信息"},{name:"通知公告"}],items2:[{name:"企业信息"},{name:"客服管理"},{name:"分组管理"},{name:"角色管理"}],items3:[{name:"常用语"},{name:"自动回复"},{name:"对话规则"},{name:"分配规则"},{name:"会话评价"},{name:"客户信息"},{name:"客户标签"},{name:"黑名单"}],items4:[{name:"基础设置"},{name:"工单分类"}],items5:[{name:"操作日志"},{name:"消息通知"}]}},methods:{IsActive1:function(t){this.activeClass1=t,this.activeClass2=-1,this.activeClass3=-1,this.activeClass4=-1,this.activeClass5=-1,0==t&&this.$router.push("/settingofpersonal"),1==t&&this.$router.push("/settingofnotice")},IsActive2:function(t){this.activeClass1=-1,this.activeClass2=t,this.activeClass3=-1,this.activeClass4=-1,this.activeClass5=-1,0==t&&this.$router.push("/settingofcompany"),1==t&&this.$router.push("/settingofcustserv"),2==t&&this.$router.push("/settingofgroup"),3==t&&this.$router.push("/settingofrole")},IsActive3:function(t){this.activeClass1=-1,this.activeClass2=-1,this.activeClass3=t,this.activeClass4=-1,this.activeClass5=-1,0==t&&this.$router.push("/settingofcommonwords"),1==t&&this.$router.push("/settingofreply"),2==t&&this.$router.push("/settingofdialogrule"),3==t&&this.$router.push("/settingofdistributionrule"),4==t&&this.$router.push("/settingofsessionevaluation"),5==t&&this.$router.push("/settingofcustomerinfor"),6==t&&this.$router.push("/settingofcustomerlabel"),7==t&&this.$router.push("/settingofblacklist")},IsActive4:function(t){this.activeClass1=-1,this.activeClass2=-1,this.activeClass3=-1,this.activeClass4=t,this.activeClass5=-1,0==t&&this.$router.push("/settingofbasicsetting"),1==t&&this.$router.push("/settingofclassification")},IsActive5:function(t){this.activeClass1=-1,this.activeClass2=-1,this.activeClass3=-1,this.activeClass4=-1,this.activeClass5=t,0==t&&this.$router.push("/settingofoperatelog"),1==t&&this.$router.push("/settingofnotification")}}},c=n,l=(i("5718"),i("2877")),o=Object(l["a"])(c,e,a,!1,null,"4c89495d",null);s["a"]=o.exports},"28f0":function(t,s,i){"use strict";var e=i("af4f"),a=i.n(e);a.a},5718:function(t,s,i){"use strict";var e=i("0266"),a=i.n(e);a.a},"5d6e":function(t,s,i){"use strict";var e=i("8ad6"),a=i.n(e);a.a},"782e":function(t,s,i){},"8ad6":function(t,s,i){},"8baf":function(t,s,i){"use strict";var e=i("782e"),a=i.n(e);a.a},add7:function(t,s,i){},af4f:function(t,s,i){},d000:function(t,s,i){"use strict";var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"nav"},[i("div",{staticClass:"logo"},[t._v("Logo")]),i("div",{staticClass:"menu"},[i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/home"}},[i("i",{staticClass:"iconfont icon-shouye7"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/index/current-session"}},[i("i",{staticClass:"iconfont icon-gongdanguanli"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/visit"}},[i("i",{staticClass:"iconfont icon-fangke"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/index/history-session"}},[i("i",{staticClass:"iconfont icon-lishi"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/customer"}},[i("i",{staticClass:"iconfont icon-yonghu"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/WorkOrder"}},[i("i",{staticClass:"iconfont icon-gongdan"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/data"}},[i("i",{staticClass:"iconfont icon-tongji"})])],1),t._m(0),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/settingofpersonal"}},[i("i",{staticClass:"iconfont icon-shezhi"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/login"}},[i("i",{staticClass:"iconfont icon-tubiaoshangchuanmoban"})])],1)])])},a=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"menu-item separate-line"},[i("i",{staticClass:"iconfont icon-hengxian"})])}],n={name:"NavBar",data:function(){return{}}},c=n,l=(i("28f0"),i("2877")),o=Object(l["a"])(c,e,a,!1,null,"6331d2fa",null);s["a"]=o.exports},d06d:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"page"},[i("nav-bar"),i("g-header",{attrs:{name:"分组管理"}}),i("leftlist"),i("div",{staticClass:"container"},[i("div",{staticClass:"choice"},[i("drop")],1),i("div",{staticClass:"table"},[i("el-table",{ref:"multipleTable",staticStyle:{width:"100%","margin-left":"20px"},attrs:{"header-cell-style":{"background-color":"#e6f1ff",height:"62px"},data:t.tableData,"tooltip-effect":"dark",fit:"","cell-style":t.cellStyle},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),i("el-table-column",{attrs:{prop:"col1",label:"分组ID",align:"center"}}),i("el-table-column",{attrs:{prop:"col2",label:"分组名称",align:"center"}}),i("el-table-column",{attrs:{prop:"col3",label:"组内人数",align:"center"}}),i("el-table-column",{attrs:{prop:"col4",label:"创建时间",align:"center"}}),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(s){return[i("el-button",{attrs:{type:"text",size:"normal"},on:{click:function(s){t.addDialogVisible=!0}}},[t._v("编辑")]),i("el-button",{attrs:{type:"text",size:"normal"},on:{click:function(s){t.deleteDialogVisible=!0}}},[t._v("删除")])]}}])})],1)],1),i("div",{staticClass:"bottom"},[i("el-pagination",{attrs:{background:"","current-page":t.currentPage4,"page-sizes":[10,20,30,40,50,60,70,80,90,100],"page-size":10,layout:"total, prev, pager, next,sizes, jumper",total:100},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])],1)},a=[],n=i("284c"),c=i("d000"),l=i("0418"),o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"myf"},[i("div",{staticClass:"layui-inline"},[i("div",{staticClass:"layui-input-inline"},[i("el-input",{staticStyle:{width:"216px"},attrs:{placeholder:"客服分组名称"},model:{value:t.input,callback:function(s){t.input=s},expression:"input"}}),i("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[t._v("搜索")])],1)]),i("div",{staticStyle:{width:"400px",display:"flex","justify-content":"space-around"}},[i("div",{staticClass:"btn",attrs:{tyle:"width: 100px;"}},[i("el-button",{staticStyle:{width:"100px"},attrs:{type:"primary"}},[t._v("添加分组")])],1),i("div",{staticClass:"btn",staticStyle:{width:"100px"}},[i("el-button",{staticStyle:{width:"100px"}},[t._v("批量删除")])],1),i("div",{staticClass:"btn",staticStyle:{width:"120px"}},[i("el-button",{staticStyle:{width:"120px"}},[t._v("导出当前数据")])],1)])])},r=[],u={name:"drop",data:function(){return{}}},v=u,d=(i("fa1d"),i("2877")),f=Object(d["a"])(v,o,r,!1,null,null,null),m=f.exports,h={name:"personal",components:{leftlist:n["a"],NavBar:c["a"],GHeader:l["a"],drop:m},data:function(){return{tableData:[{col1:"003",col2:"客服分组一",col3:"5",col4:"2019/09/12 10:99"}]}}},C=h,p=(i("5d6e"),Object(d["a"])(C,e,a,!1,null,null,null));s["default"]=p.exports},fa1d:function(t,s,i){"use strict";var e=i("add7"),a=i.n(e);a.a}}]);
//# sourceMappingURL=chunk-164ceff4.bcf6570a.js.map