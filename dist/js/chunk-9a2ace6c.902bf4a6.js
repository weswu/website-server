(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a2ace6c"],{"0799":function(t,e,s){"use strict";s("623b");var a=s("13f9"),r=s("232b"),o=s("55d5");e["a"]=Object(o["a"])(r["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(a["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"623b":function(t,e,s){},8801:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-section",{attrs:{id:"pro-features"}},[a("v-img",{staticClass:"mx-auto mb-8",attrs:{src:s("9b19"),"max-width":"128"}}),a("base-section-heading",{attrs:{title:"Feature Comparison"}},[t._v(" Get the PRO version of "),a("strong",[t._v("Zero")]),t._v(" and level up your theme"),a("br"),t._v("with additional components, pages, and Free updates. ")]),a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"7"}},[a("v-simple-table",[a("thead",[a("tr",[a("th"),a("th",{staticClass:"body-1 font-weight-bold text-center"},[t._v(" What's in the Demo? ")]),a("th",{staticClass:"body-1 font-weight-bold text-center"},[t._v(" What's in the PRO version? ")])])]),a("tbody",{staticClass:"body-1"},t._l(t.features,(function(e,s){var r=e[0],o=e[1],i=e[2];return a("tr",{key:s},[a("td",{domProps:{textContent:t._s(r)}}),a("td",{staticClass:"text-center font-weight-bold"},["boolean"===typeof o?[a("v-icon",{attrs:{color:o?"success":"error"}},[t._v(" mdi-"+t._s(o?"check":"close")+" ")])]:[t._v(" "+t._s(o)+" ")]],2),a("td",{staticClass:"text-center font-weight-bold"},["boolean"===typeof i?[a("v-icon",{attrs:{color:i?"success":"error"}},[t._v(" mdi-"+t._s(i?"check":"close")+" ")])]:[t._v(" "+t._s(i)+" ")]],2)])})),0)])],1),a("v-col",{attrs:{cols:"12",md:"5"}},[a("v-card",{staticClass:"mb-12",attrs:{elevation:"16"}},[a("base-img",{attrs:{"max-width":"100%",src:"https://cdn.vuetifyjs.com/store/themes/zero/pro.png"}})],1),a("div",{staticClass:"text-center"},[a("base-btn",{attrs:{tile:!1,color:"primary",href:"https://store.vuetifyjs.com/product/zero-theme-pro/?ref=vtyd-pro-page-features",rounded:""}},[t._v(" Buy Pro Now "),a("v-icon",{attrs:{right:""}},[t._v(" mdi-rocket ")])],1)],1)],1)],1)],1)],1)},r=[],o={name:"SectionProChart",data:function(){return{features:[["Components",23,"40+"],["Example Pages",3,10],["Bugfixes and Issues",!0,!0],["Vue CLI Support",!0,!0],["News, Project, and Pricing Pages",!1,!0],["6 Months Free Updates",!1,!0],["Price","Free","$60"]]}}},i=o,n=s("9ca4"),c=s("7033"),l=s.n(c),d=s("e1d0"),h=s("69b1"),p=s("e518"),u=s("05a7"),v=s("c744"),b=s("43e1"),m=s("0799"),f=Object(n["a"])(i,a,r,!1,null,null,null);e["default"]=f.exports;l()(f,{VCard:d["a"],VCol:h["a"],VContainer:p["a"],VIcon:u["a"],VImg:v["a"],VRow:b["a"],VSimpleTable:m["a"]})},"9b19":function(t,e,s){t.exports=s.p+"img/logo.376fe171.svg"}}]);