(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-493aad15"],{"0418":function(t,a,i){"use strict";var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"top"},[i("div",{staticClass:"h3"},[t._v(t._s(t.name))]),i("div",{staticClass:"users-info"},[t._m(0),t._m(1),i("div",{staticClass:"user-name"},[t._v("\n\t\t\t"+t._s(t.user.nickName)),i("i",{staticClass:"iconfont icon-icon_down-arrow"}),t._m(2)])])])},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"user-msg msg"},[i("i",{staticClass:"iconfont icon-lingdang"})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"user-img"},[i("img",{attrs:{src:"img/u94.svg"}})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"user-status"},[i("div",{staticClass:"user-status-item active"},[i("i",{staticClass:"iconfont icon-dian"}),t._v("在线")]),i("div",{staticClass:"user-status-item"},[i("i",{staticClass:"iconfont icon-dian"}),t._v("离线")])])}],n={props:["name"],name:"GHeader",data:function(){return{user:{}}},created:function(){var t=localStorage.getItem("user");this.user=JSON.parse(t)}},o=n,c=(i("8baf"),i("2877")),l=Object(c["a"])(o,s,e,!1,null,null,null);a["a"]=l.exports},"28f0":function(t,a,i){"use strict";var s=i("af4f"),e=i.n(s);e.a},"368c":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"page"},[i("nav-bar"),i("g-header",{attrs:{name:"首页"}}),i("div",{staticClass:"main-area"},[t._m(0),t._m(1),i("div",{staticClass:"item2"},[i("linechart",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"bar1",data:t.objectData1}})],1),i("div",{staticClass:"item3"},[i("div",{staticClass:"text"},[t._v("快捷入口")]),i("div",{staticClass:"socket"},[i("div",{staticClass:"control"},[i("router-link",{attrs:{to:"/index/current-session"}},[i("div",{staticClass:"c-img",staticStyle:{"background-color":"#006eff"}},[i("i",{staticClass:"iconfont icon-gongdanguanli",staticStyle:{position:"relative",top:"6px"}})]),i("span",{staticClass:"link_text"},[t._v("当前会话")])])],1),i("div",{staticClass:"control"},[i("router-link",{attrs:{to:"/visit"}},[i("div",{staticClass:"c-img",staticStyle:{"background-color":"#ff6262"}},[i("i",{staticClass:"iconfont icon-icon-test",staticStyle:{position:"relative",top:"6px"}})]),i("span",{staticClass:"link_text"},[t._v("访客管理")])])],1),i("div",{staticClass:"control"},[i("router-link",{attrs:{to:"/index/history-session"}},[i("div",{staticClass:"c-img",staticStyle:{"background-color":"#2ed477"}},[i("i",{staticClass:"iconfont icon-lishi",staticStyle:{position:"relative",top:"6px"}})]),i("span",{staticClass:"link_text"},[t._v("会话记录")])])],1),i("div",{staticClass:"control"},[i("router-link",{attrs:{to:"/customer"}},[i("div",{staticClass:"c-img",staticStyle:{"background-color":"#ff9138"}},[i("i",{staticClass:"iconfont icon-yonghu",staticStyle:{position:"relative",top:"6px"}})]),i("span",{staticClass:"link_text"},[t._v("客户管理")])])],1),i("div",{staticClass:"control"},[i("router-link",{attrs:{to:"/WorkOrder"}},[i("div",{staticClass:"c-img",staticStyle:{"background-color":"#006eff"}},[i("i",{staticClass:"iconfont icon-gongdan",staticStyle:{position:"relative",top:"6px"}})]),i("span",{staticClass:"link_text"},[t._v("工单中心")])])],1),i("div",{staticClass:"control"},[i("router-link",{attrs:{to:"/data"}},[i("div",{staticClass:"c-img",staticStyle:{"background-color":"#ff6262"}},[i("i",{staticClass:"iconfont icon-tongji",staticStyle:{position:"relative",top:"6px"}})]),i("span",{staticClass:"link_text"},[t._v("数据报表")])])],1),i("div",{staticClass:"control"},[i("router-link",{attrs:{to:""}},[i("div",{staticClass:"c-img",staticStyle:{"background-color":"#e4e4e4"}},[i("i",{staticClass:"iconfont icon-jia",staticStyle:{position:"relative",top:"6px"}})]),i("span",{staticClass:"link_text"},[t._v("编辑入口")])])],1)])]),i("div",{staticClass:"item4"},[i("Table")],1)])],1)},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"item0"},[i("h2",{staticClass:"htext"},[t._v("客服七尾，欢迎回来！")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"item1"},[i("div",{staticClass:"box"},[i("div",{staticClass:"p",staticStyle:{"font-size":"14px","font-weight":"400",color:"rgba(51, 51, 51, 0.898)"}},[t._v("总会话量")]),i("div",{staticClass:"p",staticStyle:{"font-size":"48px","font-weight":"650",color:"rgba(0, 110, 255, 0.898)"}},[t._v("230")]),i("div",{staticClass:"p",staticStyle:{"font-size":"12px","font-weight":"400",color:"#999999"}},[t._v("较昨日上涨10%")])]),i("div",{staticClass:"box"},[i("div",{staticClass:"p",staticStyle:{"font-size":"14px","font-weight":"400",color:"rgba(51, 51, 51, 0.898)"}},[t._v("处理中的会话数量")]),i("div",{staticClass:"p",staticStyle:{"font-size":"48px","font-weight":"650",color:"rgb(255, 98, 98)"}},[t._v("200")]),i("div",{staticClass:"p",staticStyle:{"font-size":"12px","font-weight":"400",color:"#999999"}},[t._v("较昨日上涨10%")])]),i("div",{staticClass:"box"},[i("div",{staticClass:"p",staticStyle:{"font-size":"14px","font-weight":"400",color:"rgba(51, 51, 51, 0.898)"}},[t._v("在线客服数")]),i("div",{staticClass:"p",staticStyle:{"font-size":"48px","font-weight":"650",color:"rgb(46, 212, 119)"}},[t._v("30")]),i("div",{staticClass:"p",staticStyle:{"font-size":"12px","font-weight":"400",color:"#999999"}},[t._v("较昨日上涨10%")])]),i("div",{staticClass:"box"},[i("div",{staticClass:"p",staticStyle:{"font-size":"14px","font-weight":"400",color:"rgba(51, 51, 51, 0.898)"}},[t._v("今日消息数")]),i("div",{staticClass:"p",staticStyle:{"font-size":"48px","font-weight":"650",color:"rgb(255, 145, 56)"}},[t._v("2300")]),i("div",{staticClass:"p",staticStyle:{"font-size":"12px","font-weight":"400",color:"#999999"}},[t._v("较昨日上涨10%")])])])}],n=i("d000"),o=i("0418"),c=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"myf"},[t._m(0),i("div",{staticClass:"boxShadow"},[i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tables.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize),"tooltip-effect":"dark","header-cell-style":"background-color: rgba(0, 110, 255, 0.098)"}},[t._l(t.tableData,function(a){return[i("el-table-column",{key:a.dataItem,attrs:{sortable:"","show-overflow-tooltip":!0,prop:a.dataItem,label:a.dataName,width:"auto",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return["在线"==a.row[a.column.property]?i("span",{staticStyle:{color:"#55ff00"}},[t._v(t._s(a.row[a.column.property]))]):"离线"==a.row[a.column.property]?i("span",{staticStyle:{color:"red"}},[t._v(t._s(a.row[a.column.property]))]):i("span",[t._v(t._s(a.row[a.column.property]))])]}}],null,!0)})]})],2),i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[5,10,20,40],"page-size":t.pagesize,layout:"total, sizes,prev, pager, next",total:t.tables.length,"prev-text":"上一页","next-text":"下一页"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)])},l=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"la"},[i("label",[t._v("客服监控")])])}],r={name:"hometable",data:function(){return{currentPage:1,pagesize:5,rangeDate:[],tables:[],myinputs:"",tableData:[{dataItem:"nickName",dataName:"客服昵称"},{dataItem:"onlineState",dataName:"在线状态"},{dataItem:"totalOnlineTime",dataName:"在线时常"},{dataItem:"sessionCount",dataName:"会话数"},{dataItem:"averageResponseTime",dataName:"平均响应时长"},{dataItem:"averageSessionTime",dataName:"平均会话时常"}]}},created:function(){var t=this;this.$axios.get("cs/CustomerServiceMonitor").then(function(a){var i=a.data;t.tables=i.result})},methods:{handleSizeChange:function(t){this.pagesize=t},handleCurrentChange:function(t){this.currentPage=t}}},d=r,u=(i("d465"),i("2877")),v=Object(u["a"])(d,c,l,!1,null,"ce01810c",null),f=v.exports,m=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"echarts"},[i("div",{ref:"data",staticStyle:{width:"837px",height:"357px"},attrs:{id:t.id}})])},p=[],g={name:"linechart",props:["id","data"],data:function(){return{}},watch:{data:{handler:function(t){this.drawBar(t)},deep:!0,immediate:!0}},mounted:function(){this.drawBar(this.data)},methods:{drawBar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.textTile,i=void 0===a?"":a,s=t.nameArray,e=void 0===s?[]:s,n=t.series,o=void 0===n?[]:n,c=this.$echarts.init(document.getElementById(this.id)),l={title:{text:i,x:50,y:15,textStyle:{width:218,height:24,fontSize:18,fontWeight:0}},tooltip:{trigger:"axis"},xAxis:{data:e,boundaryGap:!1,type:"category",axisLine:{lineStyle:{color:"grey",width:2}}},yAxis:{type:"value",boundaryGap:[52,52],max:75,min:0,interval:15,axisLine:{lineStyle:{color:"grey",width:0}}},series:o};c.setOption(l,!0),console.log(l),window.addEventListener("resize",function(){c.resize()})}}},C=g,h=Object(u["a"])(C,m,p,!1,null,null,null),_=h.exports,y={name:"Index",components:{NavBar:n["a"],GHeader:o["a"],Table:f,linechart:_},data:function(){return{objectData1:{textTile:"访问量统计",nameArray:["10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"],series:[{name:"总会话量",symbol:"none",type:"line",itemStyle:{color:"rgb(46, 212, 119)"},data:[15,12,22,25,30,40,30,33,36,40,45,60,45,43,42]},{name:"有效会话量",symbol:"none",type:"line",itemStyle:{color:"rgb(26, 125, 254)"},data:[30,17,22,15,23,47,55,47,54,40,43,40,35,40,37]},{name:"邮件营销",symbol:"none",type:"line",itemStyle:{color:"rgb(255, 98, 98)"},data:[25,32,12,22,10,30,33,37,46,50,40,45,40,43,45]}]}}}},x=y,b=(i("96496"),Object(u["a"])(x,s,e,!1,null,"05e9de6a",null));a["default"]=b.exports},"782e":function(t,a,i){},"8baf":function(t,a,i){"use strict";var s=i("782e"),e=i.n(s);e.a},9649:function(t,a,i){},96496:function(t,a,i){"use strict";var s=i("9649"),e=i.n(s);e.a},af4f:function(t,a,i){},d000:function(t,a,i){"use strict";var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"nav"},[i("div",{staticClass:"logo"},[t._v("Logo")]),i("div",{staticClass:"menu"},[i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/home"}},[i("i",{staticClass:"iconfont icon-shouye7"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/index/current-session"}},[i("i",{staticClass:"iconfont icon-gongdanguanli"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/visit"}},[i("i",{staticClass:"iconfont icon-fangke"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/index/history-session"}},[i("i",{staticClass:"iconfont icon-lishi"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/customer"}},[i("i",{staticClass:"iconfont icon-yonghu"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/WorkOrder"}},[i("i",{staticClass:"iconfont icon-gongdan"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/data"}},[i("i",{staticClass:"iconfont icon-tongji"})])],1),t._m(0),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/settingofpersonal"}},[i("i",{staticClass:"iconfont icon-shezhi"})])],1),i("div",{staticClass:"menu-item"},[i("router-link",{attrs:{to:"/login"}},[i("i",{staticClass:"iconfont icon-tubiaoshangchuanmoban"})])],1)])])},e=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"menu-item separate-line"},[i("i",{staticClass:"iconfont icon-hengxian"})])}],n={name:"NavBar",data:function(){return{}}},o=n,c=(i("28f0"),i("2877")),l=Object(c["a"])(o,s,e,!1,null,"6331d2fa",null);a["a"]=l.exports},d465:function(t,a,i){"use strict";var s=i("e965"),e=i.n(s);e.a},e965:function(t,a,i){}}]);
//# sourceMappingURL=chunk-493aad15.0a35d493.js.map