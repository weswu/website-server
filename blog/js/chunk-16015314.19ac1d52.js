(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16015314"],{"10a9":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-theme-provider",{attrs:{dark:""}},[s("section",{attrs:{id:"hero-alt"}},[s("base-img",{attrs:{height:t.$vuetify.breakpoint.mdAndUp?350:225,gradient:t.gradient,src:t.src,color:"#45516b",flat:"","max-width":"100%",tile:""}},[t.title?s("v-row",{staticClass:"ma-0 fill-height text-center",attrs:{align:"center",justify:"center"}},[s("v-col",{attrs:{cols:"12"}},[s("base-heading",{attrs:{title:t.title,space:"2",weight:"500"}}),s("base-divider",{attrs:{color:"primary",dense:""}}),s("v-breadcrumbs",{staticClass:"justify-center pa-0",attrs:{items:t.items,divider:">"}})],1)],1):t._e()],1)],1)])},r=[],a=(s("b4fb"),s("6e8c")),n={name:"SectionHeroAlt",metaInfo:function(){var t=this;return{changed:function(e){return t.title=e.titleChunk.toUpperCase()}}},provide:{heading:{align:"center"}},data:function(){return{title:""}},computed:{gradient:function(){var t="".concat(this.$vuetify.theme.themes.light.secondary,"CC"),e=Object(a["b"])(Object(a["a"])(t));return"to top, ".concat(e,", ").concat(e)},src:function(){return this.$route.meta.src},items:function(){return[{text:"HOME",to:"/"},{text:this.title}]}}},c=n,o=(s("68c1"),s("2c07")),l=s("7033"),d=s.n(l),u=(s("3a2e"),s("60e4")),h=s("4326"),m=Object(h["a"])(u["a"]).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes(){return{"v-breadcrumbs__item":!0,[this.activeClass]:this.disabled}}},render(t){const{tag:e,data:s}=this.generateRouteLink();return t("li",[t(e,{...s,attrs:{...s.attrs,"aria-current":this.isActive&&this.isLink?"page":void 0}},this.$slots.default)])}}),p=s("b942"),b=Object(p["h"])("v-breadcrumbs__divider","li"),v=s("3117"),f=Object(h["a"])(v["a"]).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:()=>[]},large:Boolean},computed:{classes(){return{"v-breadcrumbs--large":this.large,...this.themeClasses}}},methods:{genDivider(){return this.$createElement(b,this.$slots.divider?this.$slots.divider:this.divider)},genItems(){const t=[],e=!!this.$scopedSlots.item,s=[];for(let i=0;i<this.items.length;i++){const r=this.items[i];s.push(r.text),e?t.push(this.$scopedSlots.item({item:r})):t.push(this.$createElement(m,{key:s.join("."),props:r},[r.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render(t){const e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}}),g=s("4f48"),y=s("6c29"),$=s("a9ce"),C=Object(o["a"])(c,i,r,!1,null,null,null);e["default"]=C.exports;d()(C,{VBreadcrumbs:f,VCol:g["a"],VRow:y["a"],VThemeProvider:$["a"]})},"183a":function(t,e,s){},"3a2e":function(t,e,s){},"68c1":function(t,e,s){"use strict";s("183a")}}]);