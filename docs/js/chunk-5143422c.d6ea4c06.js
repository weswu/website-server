(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5143422c"],{"5cf2":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var a=i("76d9"),s=i("b942");const n=Object(s["h"])("v-card__actions"),r=Object(s["h"])("v-card__subtitle"),c=Object(s["h"])("v-card__text"),o=Object(s["h"])("v-card__title");a["a"]},7316:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var a=i("6865"),s=i("4326"),n=i("41c8"),r=i("a593");const c=r["a"].extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return Object(n["c"])("v-item is missing a default scopedSlot",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:{[this.activeClass]:this.isActive}}),t):(Object(n["c"])("v-item should only contain a single element",this),t)}});e["b"]=Object(s["a"])(c,Object(a["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"})},"7daa":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","max-width":"90%","min-width":"275","offset-x":"","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.attrs,s=e.on;return[i("v-card",t._g(t._b({staticClass:"py-2 px-4",staticStyle:{position:"fixed",top:"164px",right:"-35px"},attrs:{id:"settings",color:"#0000004D",dark:"",flat:"",width:"100"}},"v-card",a,!1),s),[i("v-icon",{attrs:{large:""}},[t._v(" mdi-cog ")])],1)]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[i("v-card",{staticClass:"py-2"},[i("base-title",{attrs:{align:"center",title:"Theme Colors",space:"0"}}),i("v-card-text",[i("v-item-group",{staticClass:"d-flex justify-center",model:{value:t.$vuetify.theme.themes.light.primary,callback:function(e){t.$set(t.$vuetify.theme.themes.light,"primary",e)},expression:"$vuetify.theme.themes.light.primary"}},t._l(t.colors,(function(e){return i("v-item",{key:e,attrs:{value:e},scopedSlots:t._u([{key:"default",fn:function(t){var a=t.active,s=t.toggle;return[i("base-avatar",{staticClass:"ma-2",staticStyle:{cursor:"pointer"},attrs:{color:e,outlined:a,size:"48"},on:{click:function(t){return t.stopPropagation(),s(t)}}})]}}],null,!0)})})),1),i("v-divider",{staticClass:"my-6"}),i("base-btn",{attrs:{to:{name:"Sink"},block:"",color:"grey darken-1",dark:""},on:{click:function(e){t.menu=!1}}},[t._v(" View All Components ")]),i("v-divider",{staticClass:"my-6"}),i("base-img",{staticClass:"mx-auto mb-6",attrs:{src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-light.png",width:"88"}}),i("div",{staticClass:"text-center"},[i("base-btn",{attrs:{tile:!1,to:{name:"Pro"},rounded:""},on:{click:function(e){t.menu=!1}}},[t._v(" Go Pro "),i("v-icon",{attrs:{right:""}},[t._v(" mdi-rocket ")])],1)],1)],1)],1)],1)},s=[],n={name:"HomeSettings",data:function(){return{colors:[this.$vuetify.theme.themes.light.primary,"#9368e9","#F4511E"],menu:!1}}},r=n,c=i("2c07"),o=i("7033"),l=i.n(o),u=i("76d9"),d=i("5cf2"),m=i("41ba"),v=i("08d4"),h=i("7316"),f=i("a369"),p=i("0664"),g=Object(c["a"])(r,a,s,!1,null,null,null);e["default"]=g.exports;l()(g,{VCard:u["a"],VCardText:d["a"],VDivider:m["a"],VIcon:v["a"],VItem:h["b"],VItemGroup:f["b"],VMenu:p["a"]})}}]);