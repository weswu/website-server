(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de049862"],{"4cca":function(t,e,n){"use strict";var a=n("a593");e["a"]=a["a"].extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame(()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0})}})},8346:function(t,e,n){},ae6b:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)},i=[],s={name:"BaseView",created:function(){}},o=s,r=n("2c07"),d=n("7033"),c=n.n(d),l=(n("8346"),n("4cca")),u=l["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:n,footer:a,insetFooter:i,bottom:s,left:o}=this.$vuetify.application;return{paddingTop:e+t+"px",paddingRight:n+"px",paddingBottom:a+i+s+"px",paddingLeft:o+"px"}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}}),p=n("41c8"),m=u.extend({name:"v-main",created(){Object(p["d"])("v-content","v-main",this)},render(t){const e=u.options.render.call(this,t);return e.data.staticClass+=" v-content",e.children[0].data.staticClass+=" v-content__wrap",t(e.tag,e.data,e.children)}}),v=n("302e"),f=Object(r["a"])(o,a,i,!1,null,null,null);e["default"]=f.exports;c()(f,{VContent:m,VFadeTransition:v["c"]})}}]);