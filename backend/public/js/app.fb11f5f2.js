(function(t){function e(e){for(var o,i,l=e[0],c=e[1],s=e[2],d=0,v=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&v.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header",{on:{showdrawer:t.changeButtonname}}),n("v-main",[n("router-view")],1),n("v-footer",{attrs:{color:"primary lighten-1",padless:""}},[n("Footer")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"overflow-hidden",staticStyle:{"background-color":"skyblue"},attrs:{height:"100",align:"center"}},[n("v-container",{staticClass:"fill-height",staticStyle:{"background-color":"blue",margin:"1px",padding:"1px"}},[n("v-row",{staticStyle:{"background-color":"skyblue"},attrs:{align:"center",justify:"center"}},[n("label",{staticClass:"label",on:{click:t.goHome}},[n("b",[t._v("Jeong's Page")])]),n("v-col",[n("v-btn",{style:t.styleObject,attrs:{dark:""},on:{click:t.goTodo}},[t._v("\n          Todo\n        ")])],1),n("v-col",[n("v-btn",{style:t.styleObject,attrs:{dark:""},on:{click:t.goCalcul}},[t._v("\n        Calcul\n        ")])],1),n("v-col",[n("v-btn",{style:t.styleObject,attrs:{dark:""},on:{click:t.showdrawer}},[t._v("\n        Title3\n        ")])],1),n("v-col",[n("v-btn",{style:t.styleObject,attrs:{dark:""},on:{click:t.showdrawer}},[t._v("\n        Title4\n        ")])],1)],1)],1)],1)},l=[],c={props:{title:String,drawer:Boolean},data:function(){return{styleObject:{color:"white"}}},methods:{goHome:function(){"/"!==this.$route.path&&this.$router.push("/")},goTodo:function(){"/todo"!==this.$route.path&&this.$router.push("/todo")},goCalcul:function(){"/calcul"!==this.$route.path&&this.$router.push("/calcul")},showdrawer:function(){this.$emit("showdrawer")}}},s=c,u=(n("8baf"),n("2877")),d=n("6544"),v=n.n(d),p=n("8336"),f=n("62ad"),h=n("a523"),m=n("0fd9"),g=n("8dd9"),b=Object(u["a"])(s,i,l,!1,null,null,null),w=b.exports;v()(b,{VBtn:p["a"],VCol:f["a"],VContainer:h["a"],VRow:m["a"],VSheet:g["a"]});var _=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.count))]),n("v-btn",{attrs:{color:"info"},on:{click:function(e){t.count++}}},[t._v("\n\t\t\tadd\n\t\t")]),n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",[n("v-list-item-avatar",[n("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/78.jpg"}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v("J")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{link:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},y=[],O={name:"mainPage",props:{drawer:Boolean},data:function(){return{title:"MainTitle",count:0,items:[{title:"Home",icon:"dashboard"},{title:"About",icon:"question_answer"}]}},mounted:function(){this.$axios.get("/api/getdata",{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization"},withCredentials:!0}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}},V=O,j=n("ce7e6"),k=n("132d"),x=n("adda"),C=n("8860"),$=n("da13"),P=n("8270"),T=n("5d23"),A=n("34c3"),S=n("f774"),M=Object(u["a"])(V,_,y,!1,null,null,null),I=M.exports;v()(M,{VBtn:p["a"],VDivider:j["a"],VIcon:k["a"],VImg:x["a"],VList:C["a"],VListItem:$["a"],VListItemAvatar:P["a"],VListItemContent:T["a"],VListItemIcon:A["a"],VListItemTitle:T["b"],VNavigationDrawer:S["a"]});var H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{align:"center"}},[t._v("\n\t\t"+t._s(t.getnowDate())+"\n\t")])],1)},L=[],B={methods:{getnowDate:function(){var t=new Date;return t.toLocaleDateString()}}},D=B,E=Object(u["a"])(D,H,L,!1,null,null,null),R=E.exports;v()(E,{VCol:f["a"],VRow:m["a"]});var q={name:"App",components:{Header:w,MainPage:I,Footer:R},data:function(){return{componentname:"MainPage",drawer:!1,title:"titile Vue",count:0}},methods:{changeButtonname:function(){this.title="titile"+this.count++}}},F=q,J=n("7496"),z=n("553a"),N=n("f6c4"),W=Object(u["a"])(F,a,r,!1,null,null,null),X=W.exports;v()(W,{VApp:J["a"],VFooter:z["a"],VMain:N["a"]});var G=n("8c4f"),K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("TodoPage\n")])},Q=[],U={},Y=U,Z=Object(u["a"])(Y,K,Q,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("calculPage\n"),n("v-text-field",[t._v("subPage")])],1)},nt=[],ot={},at=ot,rt=n("8654"),it=Object(u["a"])(at,et,nt,!1,null,null,null),lt=it.exports;v()(it,{VTextField:rt["a"]}),o["a"].use(G["a"]);var ct=new G["a"]({mode:"history",routes:[{path:"/",name:"main",component:I},{path:"/todo",name:"todo",component:tt},{path:"/calcul",name:"calcul",component:lt}]}),st=n("f309");o["a"].use(st["a"]);var ut=new st["a"]({}),dt=n("bc3a"),vt=n.n(dt),pt=n("e6d1"),ft=n.n(pt);o["a"].config.productionTip=!1,o["a"].prototype.$axios=vt.a,o["a"].use(ft.a),new o["a"]({render:function(t){return t(X)},vuetify:ut,router:ct,axios:vt.a,cors:ft.a}).$mount("#app")},"782e":function(t,e,n){},"8baf":function(t,e,n){"use strict";var o=n("782e"),a=n.n(o);a.a}});
//# sourceMappingURL=app.fb11f5f2.js.map