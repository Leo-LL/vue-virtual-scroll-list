(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dynamic-size"],{"1ab8":function(e,t,n){"use strict";var a=n("9d48"),i=n.n(a);i.a},2146:function(e,t,n){"use strict";var a=n("fe3f"),i=n.n(a);i.a},"960e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"example"},[n("github-corner"),n("introduction",{attrs:{description:"The size of each item is dynamic, you don't have to care about size, it will calculate automatic, but you have to make sure that there's an unique id for every array data."}}),n("div",{staticClass:"example-content"},[n("tab",{on:{"tab-change":e.onTabChange}}),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowView,expression:"isShowView"}]},[n("virtual-list",{staticClass:"list-dynamic scroll-touch",attrs:{size:80,keeps:30,"item-class":"list-item-dynamic","data-key":"id","data-sources":e.items,"data-component":e.itemComponent}})],1),n("codeblock",{directives:[{name:"show",rawName:"v-show",value:!e.isShowView,expression:"!isShowView"}]})],1)],1)},i=[],s=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item-inner"},[n("div",{staticClass:"head"},[n("span",[e._v("# "+e._s(e.source.index))]),n("span",[e._v(e._s(e.source.name))])]),n("div",{staticClass:"desc"},[e._v(e._s(e.source.desc))])])}),o=[],c={name:"dynamic-size-item",props:{source:{type:Object,default:function(){return{}}}}},r=c,d=(n("1ab8"),n("2877")),u=Object(d["a"])(r,s,o,!1,null,"d69b8c4a",null),l=u.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("code-high-light",{attrs:{type:"html",code:e.html}}),n("code-high-light",{attrs:{type:"js",code:e.js}})],1)},h=[],p='\n<virtual-list class="list"\n  :size="80" // just assign a estimate value.\n  :keeps="30"\n  :data-key="\'id\'"\n  :data-sources="items"\n  :data-component="itemComponent"\n/>\n',v="\nimport Item from './Item'\nconst items = [\n  {\n    id: 'unique-id-xxx',\n    ...\n  },\n  ....\n]\n\nexport default {\n  ...\n  data () {\n    return {\n      items: items,\n      itemComponent: Item,\n    }\n  }\n  ...\n}\n",f={name:"dynamic-size-code",data:function(){return{html:p,js:v}}},w=f,b=Object(d["a"])(w,m,h,!1,null,null,null),y=b.exports,x=n("835c"),C=n("adf9"),_=n("c57d"),g=n("b95e"),j=[],k=g["c"];while(k--){var z=g["c"]-k;j.push({index:z,name:C["Random"].name(),id:Object(_["a"])(z),desc:C["Random"].paragraph(C["Random"].integer(0,x["a"]?1:3))})}var V={name:"dynamic-size",components:{codeblock:y},data:function(){return{items:j,itemComponent:l,isShowView:g["a"]===g["b"].VIEW}},methods:{onTabChange:function(e){this.isShowView=e===g["b"].VIEW}}},S=V,E=(n("2146"),Object(d["a"])(S,a,i,!1,null,null,null));t["default"]=E.exports},"9d48":function(e,t,n){},fe3f:function(e,t,n){}}]);
//# sourceMappingURL=dynamic-size.6e4c0bb1.js.map