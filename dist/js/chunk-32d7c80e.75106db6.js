(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32d7c80e"],{"0418":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top"},[a("div",{staticClass:"h3"},[t._v(t._s(t.name))]),a("div",{staticClass:"users-info"},[t._m(0),t._m(1),a("div",{staticClass:"user-name"},[t._v("\n\t\t\t"+t._s(t.user.nickName)),a("i",{staticClass:"iconfont icon-icon_down-arrow"}),t._m(2)])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-msg msg"},[a("i",{staticClass:"iconfont icon-lingdang"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-img"},[a("img",{attrs:{src:"img/u94.svg"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-status"},[a("div",{staticClass:"user-status-item active"},[a("i",{staticClass:"iconfont icon-dian"}),t._v("在线")]),a("div",{staticClass:"user-status-item"},[a("i",{staticClass:"iconfont icon-dian"}),t._v("离线")])])}],n={props:["name"],name:"GHeader",data:function(){return{user:{}}},created:function(){var t=localStorage.getItem("user");this.user=JSON.parse(t)}},l=n,o=(a("8baf"),a("2877")),r=Object(o["a"])(l,i,s,!1,null,null,null);e["a"]=r.exports},"182d":function(t,e,a){"use strict";var i=a("e2d9"),s=a.n(i);s.a},"1bae":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("nav-bar"),a("g-header",{attrs:{name:"数据总览"}}),a("leftlist"),a("div",{staticClass:"container"},[a("div",{staticClass:"choice"},[a("drop")],1),a("div",{staticClass:"box1"},[a("block",{attrs:{type1:"总会话量",type2:"230",type3:"有效会话数200"}}),a("block",{attrs:{type1:"总客户量",type2:"30",type3:"有效客户20"}}),a("block",{attrs:{type1:"总访问量",type2:"208",type3:"访客对话率50%"}}),a("block",{attrs:{type1:"平均会话时长",type2:"9m3s",type3:"平均响应时间30s"}}),a("block",{attrs:{type1:"好评率",type2:"78%",type3:"评价率67%"}}),a("block",{attrs:{type1:"一次性解决问题率",type2:"60%",type3:"解决率65%"}}),a("block",{attrs:{type1:"总会话消息量",type2:"2900",type3:"有效消息数200"}}),a("block",{attrs:{type1:"总人工消息",type2:"2600",type3:"总客服消息数2389"}}),a("block",{attrs:{type1:"平均每会话消息数",type2:"28",type3:"平均每会话有效消息数15"}})],1),a("div",[a("div",{staticClass:"col"},[a("linechart",{attrs:{id:"bar1",data:t.objectData1}})],1)]),a("div",{staticClass:"box2"},[a("div",{staticClass:"col2"},[a("piech",{attrs:{id:"bar2",data:t.objectData2}})],1),a("div",{staticClass:"col2"},[a("piech",{attrs:{id:"bar3",data:t.objectData3}})],1)])])],1)},s=[],n=a("ab10"),l=a("d000"),o=a("0418"),r=a("75fd"),c=a("ec3e"),u=a("53e0"),d=a("a9e7"),v={name:"data",components:{leftlist:n["a"],NavBar:l["a"],GHeader:o["a"],block:r["a"],piech:c["a"],drop:u["a"],linechart:d["a"]},data:function(){return{objectData1:{textTile:"总访问量",nameArray:["10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00"],series:[{name:"总会话量",symbol:"none",type:"line",itemStyle:{color:"rgb(46, 212, 119)"},data:[15,12,22,25,30,40,30,33,36,40,45,60,45,43,42]},{name:"有效会话量",symbol:"none",type:"line",itemStyle:{color:"rgb(26, 125, 254)"},data:[30,17,22,15,23,47,55,47,54,40,43,40,35,40,37]},{name:"邮件营销",symbol:"none",type:"line",itemStyle:{color:"rgb(255, 98, 98)"},data:[25,32,12,22,10,30,33,37,46,50,40,45,40,43,45]}]},objectData2:{textTile:"客户来源占比",nameArray:["网页","APP","小程序","公众号","头条号"],series:[{name:"来源",type:"pie",radius:["35%","60%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"20",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:880,name:"网页",itemStyle:{color:"rgb(26, 125, 254)"}},{value:300,name:"APP",itemStyle:{color:"rgb(255, 145, 56)"}},{value:200,name:"小程序",itemStyle:{color:"rgb(153, 153, 255)"}},{value:130,name:"公众号",itemStyle:{color:"rgb(46, 212, 119)"}},{value:60,name:"头条号",itemStyle:{color:"rgb(255, 98, 98)"}}]}]},objectData3:{textTile:"评价占比",nameArray:["好评","中评","差评"],series:[{name:"评价",type:"pie",radius:["35%","60%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"20",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:180,name:"好评",itemStyle:{color:"rgb(46, 212, 119)"}},{value:99,name:"中评",itemStyle:{color:"rgb(26, 125, 254)"}},{value:25,name:"差评",itemStyle:{color:"rgb(255, 98, 98)"}}]}]}}}},p=v,f=(a("182d"),a("2877")),m=Object(f["a"])(p,i,s,!1,null,"2e8b1a3d",null);e["default"]=m.exports},"28f0":function(t,e,a){"use strict";var i=a("af4f"),s=a.n(i);s.a},"3fd7":function(t,e,a){},"43c8":function(t,e,a){"use strict";var i=a("e596"),s=a.n(i);s.a},"53e0":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"myf"},[a("div",{staticClass:"timelay"},[a("el-date-picker",{attrs:{"prefix-icon":"el-icon-date",type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small","value-format":"yyyy-MM-dd"},on:{change:function(e){return t.selectModel4(e)}},model:{value:t.rangeDate,callback:function(e){t.rangeDate=e},expression:"rangeDate"}})],1),a("div",{staticClass:"layui-inline"},[a("div",{staticClass:"layui-input-inline"},[a("el-select",{attrs:{filterable:"","collapse-tags":"",placeholder:"全部客服"},on:{change:function(e){return t.selectModel(e)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)]),a("div",{staticClass:"layui-inline"},[a("div",{staticClass:"layui-input-inline"},[a("el-select",{attrs:{filterable:"","collapse-tags":"",placeholder:"全部客服组"},on:{change:function(e){return t.selectModel2(e)}},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},t._l(t.options2,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)])])},s=[],n={name:"drop",data:function(){return{options:[{value:"全部客服",label:"全部客服"},{value:"王美美",label:"王美美"},{value:"七尾",label:"七尾"},{value:"李想",label:"李想"},{value:"王之",label:"王之"}],options2:[{value:"全部来源",label:"全部来源"},{value:"Mac",label:"Mac"},{value:"Windows",label:"Windows"},{value:"手机",label:"手机"}],options3:[{value:"全部客服组",label:"全部客服组"},{value:"客服组一",label:"客服组一"},{value:"客服组二",label:"客服组二"},{value:"客服组三",label:"客服组三"}],value:"",value2:"",value3:""}}},l=n,o=(a("43c8"),a("2877")),r=Object(o["a"])(l,i,s,!1,null,"507f9d02",null);e["a"]=r.exports},"614c":function(t,e,a){"use strict";var i=a("e9c7"),s=a.n(i);s.a},"75fd":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"p",staticStyle:{"font-size":"14px","font-weight":"400",color:"rgba(51, 51, 51, 0.898)"}},[t._v(t._s(t.type1))]),a("div",{staticClass:"p",staticStyle:{"font-size":"48px","font-weight":"600",color:"rgba(0, 110, 255, 0.898)"}},[t._v(t._s(t.type2))]),a("div",{staticClass:"p",staticStyle:{"font-size":"12px","font-weight":"400",color:"#999999"}},[t._v(t._s(t.type3))])])},s=[],n={props:["type1","type2","type3"]},l=n,o=(a("c02a"),a("2877")),r=Object(o["a"])(l,i,s,!1,null,null,null);e["a"]=r.exports},"782e":function(t,e,a){},"8baf":function(t,e,a){"use strict";var i=a("782e"),s=a.n(i);s.a},a9e7:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"echarts"},[a("div",{ref:"data",staticStyle:{width:"1040px",height:"425px"},attrs:{id:t.id}})])},s=[],n={name:"linechart",props:["id","data"],data:function(){return{}},watch:{data:{handler:function(t){this.drawBar(t)},deep:!0,immediate:!0}},mounted:function(){this.drawBar(this.data)},methods:{drawBar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.textTile,a=void 0===e?"":e,i=t.nameArray,s=void 0===i?[]:i,n=t.series,l=void 0===n?[]:n,o=this.$echarts.init(document.getElementById(this.id)),r={title:{text:a,x:50,textStyle:{width:218,height:24,fontSize:18,fontWeight:0}},tooltip:{trigger:"axis"},xAxis:{data:s,boundaryGap:!1,type:"category",axisLine:{lineStyle:{color:"grey",width:2}}},yAxis:{type:"value",boundaryGap:[52,52],max:75,min:0,interval:15,axisLine:{lineStyle:{color:"grey",width:0}}},series:l};o.setOption(r,!0),console.log(r),window.addEventListener("resize",function(){o.resize()})}}},l=n,o=a("2877"),r=Object(o["a"])(l,i,s,!1,null,null,null);e["a"]=r.exports},ab10:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"workOrder"},[a("dl",[a("dt",[t._v("在线客服")]),t._l(t.items,function(e,i){return a("dd",{class:t.activeClass==t.position?"active":"",on:{click:function(e){return t.IsActive(i)}}},[a("div",{staticClass:"item"},[t._v(t._s(e.name))])])})],2)])},s=[],n={name:"LeftListOfData",data:function(){return{activeClass:-1,items:[{name:"数据总览"},{name:"工作量统计"},{name:"工作质量统计"},{name:"考勤统计"},{name:"访问统计"}]}},methods:{created:function(){this.k=this.$route.query.k,this.activeClass=k},IsActive:function(t){0==t&&this.$router.push({path:"/data?k=".concat(t),query:{k:t}}),1==t&&this.$router.push({path:"/workload?k=".concat(t),query:{k:t}}),2==t&&this.$router.push({path:"/workmanship?k=".concat(t),query:{k:t}}),3==t&&this.$router.push({path:"/attendance?k=".concat(t),query:{k:t}}),4==t&&this.$router.push({path:"/visits?k=".concat(t),query:{k:t}})}}},l=n,o=(a("614c"),a("2877")),r=Object(o["a"])(l,i,s,!1,null,"624803a3",null);e["a"]=r.exports},af4f:function(t,e,a){},c02a:function(t,e,a){"use strict";var i=a("3fd7"),s=a.n(i);s.a},d000:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav"},[a("div",{staticClass:"logo"},[t._v("Logo")]),a("div",{staticClass:"menu"},[a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/home"}},[a("i",{staticClass:"iconfont icon-shouye7"})])],1),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/index/current-session"}},[a("i",{staticClass:"iconfont icon-gongdanguanli"})])],1),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/visit"}},[a("i",{staticClass:"iconfont icon-fangke"})])],1),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/index/history-session"}},[a("i",{staticClass:"iconfont icon-lishi"})])],1),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/customer"}},[a("i",{staticClass:"iconfont icon-yonghu"})])],1),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/WorkOrder"}},[a("i",{staticClass:"iconfont icon-gongdan"})])],1),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/data"}},[a("i",{staticClass:"iconfont icon-tongji"})])],1),t._m(0),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/settingofpersonal"}},[a("i",{staticClass:"iconfont icon-shezhi"})])],1),a("div",{staticClass:"menu-item"},[a("router-link",{attrs:{to:"/login"}},[a("i",{staticClass:"iconfont icon-tubiaoshangchuanmoban"})])],1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu-item separate-line"},[a("i",{staticClass:"iconfont icon-hengxian"})])}],n={name:"NavBar",data:function(){return{}}},l=n,o=(a("28f0"),a("2877")),r=Object(o["a"])(l,i,s,!1,null,"6331d2fa",null);e["a"]=r.exports},e2d9:function(t,e,a){},e596:function(t,e,a){},e9c7:function(t,e,a){},ec3e:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"echarts"},[a("div",{ref:"data",staticStyle:{width:"470px",height:"350px"},attrs:{id:t.id}})])},s=[],n={name:"piechart",props:["id","data"],data:function(){return{}},watch:{data:{deep:!0,immediate:!0,handler:function(t){this.drawBar(t)}}},mounted:function(){this.drawBar(this.data)},methods:{drawBar:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.textTile,a=void 0===e?"":e,i=t.nameArray,s=void 0===i?[]:i,n=t.series,l=void 0===n?[]:n,o=this.$echarts.init(document.getElementById(this.id)),r={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},title:{text:a,x:20,textStyle:{width:218,height:24,fontSize:18,fontWeight:0}},legend:{orient:"vertical",right:50,data:s},series:l};o.setOption(r,!0),console.log(r),window.addEventListener("resize",function(){o.resize()})}}},l=n,o=a("2877"),r=Object(o["a"])(l,i,s,!1,null,null,null);e["a"]=r.exports}}]);
//# sourceMappingURL=chunk-32d7c80e.75106db6.js.map