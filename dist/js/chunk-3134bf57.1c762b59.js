(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3134bf57"],{"0418":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"top"},[e("div",{staticClass:"h3"},[t._v("首页")]),e("div",{staticClass:"users-info"},[t._m(0),t._m(1),e("div",{staticClass:"user-name"},[t._v("\n\t\t\t"+t._s(t.user.nickName)),e("i",{staticClass:"iconfont icon-icon_down-arrow"}),t._m(2)])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"user-msg msg"},[e("i",{staticClass:"iconfont icon-lingdang"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"user-img"},[e("img",{attrs:{src:"img/u94.svg"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"user-status"},[e("div",{staticClass:"user-status-item active"},[e("i",{staticClass:"iconfont icon-dian"}),t._v("在线")]),e("div",{staticClass:"user-status-item"},[e("i",{staticClass:"iconfont icon-dian"}),t._v("离线")])])}],l={name:"GHeader",data:function(){return{user:{}}},created:function(){var t=localStorage.getItem("user");this.user=JSON.parse(t)}},n=l,c=(e("8baf"),e("2877")),o=Object(c["a"])(n,s,i,!1,null,null,null);a["a"]=o.exports},"34ba":function(t,a,e){"use strict";var s=e("7dbb"),i=e.n(s);i.a},"3c20":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page"},[e("NavBar"),e("g-header"),e("div",{staticClass:"myf"},[e("div",{staticClass:"layui-inline"},[e("div",{staticClass:"layui-input-inline"},[e("el-select",{attrs:{filterable:"","collapse-tags":"",placeholder:"全部客服"},on:{change:function(a){return t.selectModel(a)}},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}},t._l(t.options,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)]),e("div",{staticClass:"layui-inline"},[e("div",{staticClass:"layui-input-inline"},[e("el-select",{attrs:{filterable:"","collapse-tags":"",placeholder:"全部来源"},on:{change:function(a){return t.selectModel2(a)}},model:{value:t.value2,callback:function(a){t.value2=a},expression:"value2"}},t._l(t.options2,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)]),e("div",{staticClass:"layui-inline"},[e("div",{staticClass:"layui-input-inline"},[e("el-select",{attrs:{filterable:"","collapse-tags":"",placeholder:"全部终端"},on:{change:function(a){return t.selectModel3(a)}},model:{value:t.value3,callback:function(a){t.value3=a},expression:"value3"}},t._l(t.options3,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)]),e("div",{staticClass:"timelay"},[e("el-date-picker",{attrs:{"prefix-icon":"el-icon-date",type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small","value-format":"yyyy-MM-dd"},on:{change:function(a){return t.selectModel4(a)}},model:{value:t.rangeDate,callback:function(a){t.rangeDate=a},expression:"rangeDate"}})],1),e("div",{staticClass:"myinput"},[e("el-input",{attrs:{placeholder:"输入关键词搜索","prefix-icon":"el-icon-search"},model:{value:t.myinputs,callback:function(a){t.myinputs=a},expression:"myinputs"}})],1),e("div",{staticClass:"myinput"},[e("el-button",{attrs:{type:"primary",round:""},on:{click:function(a){return t.selectModel5(a)}}},[t._v("搜索")])],1),e("div",{staticClass:"boxShadow"},[e("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tables,"tooltip-effect":"dark","header-cell-style":"background-color: rgba(0, 110, 255, 0.098)"}},[t._l(t.tableData,function(t){return[e("el-table-column",{key:t.dataItem,attrs:{sortable:"","show-overflow-tooltip":!0,prop:t.dataItem,label:t.dataName,width:"auto",align:"center"}})]}),e("el-table-column",{attrs:{label:"操作",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("el-button",{staticClass:"del-com",attrs:{size:"mini"}},[e("i",{staticClass:"iconfont icon-shanchu"})])]}}])})],2)],1)])],1)},i=[],l=e("d000"),n=e("0418"),c={name:"visitFrom",components:{NavBar:l["a"],GHeader:n["a"]},data:function(){return{rangeDate:[],tables:[],myinputs:"",tableData:[{dataItem:"visitorName",dataName:"访客名称"},{dataItem:"browser",dataName:"来源"},{dataItem:"terminal",dataName:"终端"},{dataItem:"visitTime",dataName:"访问时间"},{dataItem:"visitDuration",dataName:"访问时常"},{dataItem:"ip",dataName:"ip地址"},{dataItem:"state",dataName:"访客状态"}],options:[{value:"全部客服",label:"全部客服"},{value:"王美美",label:"王美美"},{value:"七尾",label:"七尾"},{value:"李想",label:"李想"},{value:"王之",label:"王之"}],options2:[{value:"全部来源",label:"全部来源"},{value:"Mac",label:"Mac"},{value:"Windows",label:"Windows"},{value:"手机",label:"手机"}],options3:[{value:"全部终端",label:"全部终端"},{value:"chrome",label:"chrome"},{value:"app",label:"app"},{value:"小程序",label:"小程序"}],value:"",value2:"",value3:""}},created:function(){var t=this;this.$axios.get("/visitor/select").then(function(a){var e=a.data;t.tables=e.result})},methods:{selectModel:function(t){var a=this,e=t;"全部客服"==e?this.$axios.get("/visitor/select").then(function(t){var e=t.data;a.tables=e.result}):this.$axios.get("/visitor/select?nickName=".concat(e)).then(function(t){var e=t.data;a.tables=e.result})},selectModel2:function(t){var a=this,e=t;"全部来源"==e?this.$axios.get("/visitor/select").then(function(t){var e=t.data;a.tables=e.result}):this.$axios.get("/visitor/select?browser=".concat(e)).then(function(t){var e=t.data;a.tables=e.result})},selectModel3:function(t){var a=this,e=t;"全部终端"==e?this.$axios.get("/visitor/select").then(function(t){var e=t.data;a.tables=e.result}):this.$axios.get("/visitor/select?terminal=".concat(e)).then(function(t){var e=t.data;a.tables=e.result})},watch:{rangeDate:function(t,a){null!==t?(this.tableParams.beginDate=t[0],this.tableParams.endDate=t[1]):(this.tableParams.beginDate=null,this.tableParams.endDate=null)}},selectModel4:function(t){var a=this,e=t[0],s=t[1];this.$axios.get("/visitor/select?beginTime=".concat(e,"&endTime=").concat(s)).then(function(t){var e=t.data;a.tables=e.result})},selectModel5:function(){var t=this,a=this.myinputs;this.$axios.get("/visitor/select?visitorName=".concat(a)).then(function(a){var e=a.data;t.tables=e.result})}}},o=c,r=(e("9cff"),e("2877")),u=Object(r["a"])(o,s,i,!1,null,null,null);a["default"]=u.exports},"782e":function(t,a,e){},"7dbb":function(t,a,e){},"8baf":function(t,a,e){"use strict";var s=e("782e"),i=e.n(s);i.a},"93a4":function(t,a,e){},"9cff":function(t,a,e){"use strict";var s=e("93a4"),i=e.n(s);i.a},d000:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"nav"},[e("div",{staticClass:"logo"},[t._v("Logo")]),e("div",{staticClass:"menu"},[e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:""}},[e("i",{staticClass:"iconfont icon-shouye7"})]),e("div",{staticClass:"text"},[t._v("首页")])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/index/current-session"}},[e("i",{staticClass:"iconfont icon-gongdanguanli"})]),e("div",{staticClass:"text"},[t._v("消息")])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:""}},[e("i",{staticClass:"iconfont icon-icon-test"})]),e("div",{staticClass:"text"},[t._v("客户")])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:"/index/history-session"}},[e("i",{staticClass:"iconfont icon-lishi"})]),e("div",{staticClass:"text"},[t._v("历史")])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:""}},[e("i",{staticClass:"iconfont icon-yonghu"})]),e("div",{staticClass:"text"},[t._v("客户")])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:""}},[e("i",{staticClass:"iconfont icon-gongdan"})]),e("div",{staticClass:"text"},[t._v("订单")])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:""}},[e("i",{staticClass:"iconfont icon-tongji"})]),e("div",{staticClass:"text"},[t._v("统计")])],1),t._m(0),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:""}},[e("i",{staticClass:"iconfont icon-shezhi"})]),e("div",{staticClass:"text"},[t._v("设置")])],1),e("div",{staticClass:"menu-item"},[e("router-link",{attrs:{to:""}},[e("i",{staticClass:"iconfont icon-tubiaoshangchuanmoban"})]),e("div",{staticClass:"text"},[t._v("退出")])],1)])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"menu-item separate-line"},[e("i",{staticClass:"iconfont icon-hengxian"})])}],l={name:"NavBar",data:function(){return{}}},n=l,c=(e("34ba"),e("2877")),o=Object(c["a"])(n,s,i,!1,null,null,null);a["a"]=o.exports}}]);
//# sourceMappingURL=chunk-3134bf57.1c762b59.js.map