(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65fe60b6"],{"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),c=r("785a"),a=r("17c2"),o=r("9112"),s=function(t){if(t&&t.forEach!==a)try{o(t,"forEach",a)}catch(e){t.forEach=a}};for(var l in i)i[l]&&s(n[l]&&n[l].prototype);s(c)},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),c=i("forEach");t.exports=c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"2f79":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("b42e");var n="_uid"},"3eda":function(t,e,r){"use strict";r("a2a1")},"46cf":function(t,e,r){},"571f":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products-list-view"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-3"},[r("ProductsListFilters",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoadingCategories,expression:"isLoadingCategories"}],attrs:{categories:t.categories,filters:t.filters},on:{change:t.onFiltersChange}})],1),r("div",{staticClass:"col-9"},[r("ProductsList",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoadingProducts,expression:"isLoadingProducts"}],attrs:{products:t.filteredProducts},on:{"add-to-cart":t.onAddToCart,"show-detail":t.onShowDetail}})],1)])])},i=[],c=r("d4ec"),a=r("bee2"),o=r("262e"),s=r("2caf"),l=(r("d3b7"),r("25f0"),r("9ab4")),u=r("1b40"),b=r("4bb5"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products-list"},[r("div",{staticClass:"row m-n2"},[t.products.length?t._l(t.products,(function(e){return r("div",{key:e.id,staticClass:"products-list__item col-md-4 p-2"},[r("ProductsListCard",{attrs:{product:e},on:{"add-to-cart":function(r){return t.addToCart(e)},"show-detail":function(r){return t.showDetail(e)}}})],1)})):r("div",{staticClass:"d-block text-center text-muted p-5"},[t._v(" Нет продуктов. ")])],2)])},f=[],p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",{staticClass:"products-list-card",attrs:{"img-src":t.product.img}},[r("b-card-text",{staticClass:"products-list-card__title mb-2"},[t._v(" "+t._s(t.product.name)+" ")]),r("b-card-text",{staticClass:"font-weight-bold mb-2"},[t._v(" "+t._s(t._f("currency")(t.product.price))+" ")]),r("b-card-text",{staticClass:"products-list-card__description"},[t._v(" "+t._s(t._f("truncate")(t.product.description,54))+" ")]),r("b-button-group",{attrs:{size:"sm"}},[r("b-button",{attrs:{variant:"outline-primary"},on:{click:t.addToCart}},[t._v(" В корзину ")]),r("b-button",{attrs:{variant:"outline-secondary"},on:{click:t.showDetail}},[t._v(" Подробнее ")])],1)],1)},h=[],O=r("205f"),j=r("d6e4"),v=r("2b0e"),m=r("b42e"),g=r("c637"),y=r("a723"),w=r("d82f"),C=r("cf75"),P=r("1947");function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){k(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var D=Object(C["d"])(Object(w["i"])(_(_({},Object(w["h"])(P["b"],["size"])),{},{ariaRole:Object(C["c"])(y["o"],"group"),size:Object(C["c"])(y["o"]),tag:Object(C["c"])(y["o"],"div"),vertical:Object(C["c"])(y["f"],!1)})),g["c"]),$=v["a"].extend({name:g["c"],functional:!0,props:D,render:function(t,e){var r=e.props,n=e.data,i=e.children;return t(r.tag,Object(m["a"])(n,{class:k({"btn-group":!r.vertical,"btn-group-vertical":r.vertical},"btn-group-".concat(r.size),r.size),attrs:{role:r.ariaRole}}),i)}}),S=r("b1f3"),V=function(t){Object(o["a"])(r,t);var e=Object(s["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return Object(a["a"])(r,[{key:"addToCart",value:function(){this.$emit("add-to-cart")}},{key:"showDetail",value:function(){this.$emit("show-detail")}}]),r}(u["d"]);Object(l["a"])([Object(u["c"])({type:Object})],V.prototype,"product",void 0),V=Object(l["a"])([Object(u["a"])({name:"ProductsListCard",filters:{truncate:S["b"],currency:S["a"]},components:{BCard:O["a"],BCardText:j["a"],BButtonGroup:$,BButton:P["a"]}})],V);var L=V,A=L,F=(r("d1fa"),r("2877")),E=Object(F["a"])(A,p,h,!1,null,null,null),T=E.exports,I=function(t){Object(o["a"])(r,t);var e=Object(s["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return Object(a["a"])(r,[{key:"addToCart",value:function(t){this.$emit("add-to-cart",t)}},{key:"showDetail",value:function(t){this.$emit("show-detail",t)}}]),r}(u["d"]);Object(l["a"])([Object(u["c"])({type:Array,default:function(){return[]}})],I.prototype,"products",void 0),I=Object(l["a"])([Object(u["a"])({name:"ProductsList",components:{ProductsListCard:T}})],I);var z=I,B=z,W=(r("3eda"),Object(F["a"])(B,d,f,!1,null,null,null)),q=W.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.filters?r("div",{staticClass:"products-list-filters card p-4 shadow-sm"},[r("b-form-group",{staticClass:"products-list-filters__search",attrs:{label:"Программы НМО"}},[r("b-form-input",{attrs:{placeholder:"Поиск",type:"text",value:t.filters.query},on:{input:t.onQueryInput}})],1),r("hr",{staticClass:"mt-3 mb-4"}),r("div",{staticClass:"products-list-filters__categories"},[r("h5",{staticClass:"d-block mb-3"},[t._v(" Категории ")]),r("b-nav",{attrs:{pills:"",vertical:""}},[r("b-nav-item",{attrs:{active:null===t.filters.selectedCategory},on:{click:function(e){return t.onCategoryClick(null)}}},[t._v(" Все категории ")]),t._l(t.categories,(function(e){return r("b-nav-item",{key:e.id,attrs:{active:t.filters.selectedCategory===e.id},on:{click:function(r){return t.onCategoryClick(e.id)}}},[t._v(" "+t._s(e.name)+" ")])}))],2)],1)],1):t._e()},R=[];r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function N(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function H(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function G(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?H(Object(r),!0).forEach((function(e){N(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function J(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var Q=function(t){return t="left"===t?"start":"right"===t?"end":t,"justify-content-".concat(t)},K=Object(C["d"])({align:Object(C["c"])(y["o"]),cardHeader:Object(C["c"])(y["f"],!1),fill:Object(C["c"])(y["f"],!1),justified:Object(C["c"])(y["f"],!1),pills:Object(C["c"])(y["f"],!1),small:Object(C["c"])(y["f"],!1),tabs:Object(C["c"])(y["f"],!1),tag:Object(C["c"])(y["o"],"ul"),vertical:Object(C["c"])(y["f"],!1)},g["x"]),U=v["a"].extend({name:g["x"],functional:!0,props:K,render:function(t,e){var r,n=e.props,i=e.data,c=e.children,a=n.tabs,o=n.pills,s=n.vertical,l=n.align,u=n.cardHeader;return t(n.tag,Object(m["a"])(i,{staticClass:"nav",class:(r={"nav-tabs":a,"nav-pills":o&&!a,"card-header-tabs":!s&&u&&a,"card-header-pills":!s&&u&&o&&!a,"flex-column":s,"nav-fill":!s&&n.fill,"nav-justified":!s&&n.justified},J(r,Q(l),!s&&l),J(r,"small",n.small),r)}),c)}}),X=r("aa59");function Y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Y(Object(r),!0).forEach((function(e){tt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function tt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var et=Object(w["g"])(X["b"],["event","routerTag"]),rt=Object(C["d"])(Object(w["i"])(Z(Z({},et),{},{linkAttrs:Object(C["c"])(y["k"],{}),linkClasses:Object(C["c"])(y["d"])})),g["y"]),nt=v["a"].extend({name:g["y"],functional:!0,props:rt,render:function(t,e){var r=e.props,n=e.data,i=e.listeners,c=e.children;return t("li",Object(m["a"])(Object(w["g"])(n,["on"]),{staticClass:"nav-item"}),[t(X["a"],{staticClass:"nav-link",class:r.linkClasses,attrs:r.linkAttrs,props:Object(C["e"])(et,r),on:i},c)])}}),it=r("e863"),ct=r("992e"),at=r("9b76"),ot=r("2326"),st=r("228e"),lt=r("fa73"),ut=function(t){return"\\"+t},bt=function(t){t=Object(lt["g"])(t);var e=t.length,r=t.charCodeAt(0);return t.split("").reduce((function(n,i,c){var a=t.charCodeAt(c);return 0===a?n+"�":127===a||a>=1&&a<=31||0===c&&a>=48&&a<=57||1===c&&a>=48&&a<=57&&45===r?n+ut("".concat(a.toString(16)," ")):0===c&&45===a&&1===e?n+ut(i):a>=128||45===a||95===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?n+i:n+ut(i)}),"")},dt=r("906c"),ft=r("6c06"),pt=r("7b1e"),ht=r("3a58"),Ot=Object(C["d"])({state:Object(C["c"])(y["f"],null)},"formState"),jt=v["a"].extend({props:Ot,computed:{computedState:function(){return Object(pt["b"])(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null},computedAriaInvalid:function(){var t=this.ariaInvalid;return!0===t||"true"===t||""===t||!1===this.computedState?"true":t}}}),vt=r("90ef"),mt=r("8c18"),gt=r("b28b"),yt=Object(C["d"])({tag:Object(C["c"])(y["o"],"div")},g["p"]),wt=v["a"].extend({name:g["p"],functional:!0,props:yt,render:function(t,e){var r=e.props,n=e.data,i=e.children;return t(r.tag,Object(m["a"])(n,{staticClass:"form-row"}),i)}});function Ct(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var Pt=Object(C["d"])({id:Object(C["c"])(y["o"]),inline:Object(C["c"])(y["f"],!1),tag:Object(C["c"])(y["o"],"small"),textVariant:Object(C["c"])(y["o"],"muted")},g["q"]),xt=v["a"].extend({name:g["q"],functional:!0,props:Pt,render:function(t,e){var r=e.props,n=e.data,i=e.children;return t(r.tag,Object(m["a"])(n,{class:Ct({"form-text":!r.inline},"text-".concat(r.textVariant),r.textVariant),attrs:{id:r.id}}),i)}}),_t=Object(C["d"])({ariaLive:Object(C["c"])(y["o"]),forceShow:Object(C["c"])(y["f"],!1),id:Object(C["c"])(y["o"]),role:Object(C["c"])(y["o"]),state:Object(C["c"])(y["f"],null),tag:Object(C["c"])(y["o"],"div"),tooltip:Object(C["c"])(y["f"],!1)},g["o"]),kt=v["a"].extend({name:g["o"],functional:!0,props:_t,render:function(t,e){var r=e.props,n=e.data,i=e.children,c=r.tooltip,a=r.ariaLive,o=!0===r.forceShow||!1===r.state;return t(r.tag,Object(m["a"])(n,{class:{"d-block":o,"invalid-feedback":!c,"invalid-tooltip":c},attrs:{id:r.id||null,role:r.role||null,"aria-live":a||null,"aria-atomic":a?"true":null}}),i)}}),Dt=Object(C["d"])({ariaLive:Object(C["c"])(y["o"]),forceShow:Object(C["c"])(y["f"],!1),id:Object(C["c"])(y["o"]),role:Object(C["c"])(y["o"]),state:Object(C["c"])(y["f"],null),tag:Object(C["c"])(y["o"],"div"),tooltip:Object(C["c"])(y["f"],!1)},g["r"]),$t=v["a"].extend({name:g["r"],functional:!0,props:Dt,render:function(t,e){var r=e.props,n=e.data,i=e.children,c=r.tooltip,a=r.ariaLive,o=!0===r.forceShow||!0===r.state;return t(r.tag,Object(m["a"])(n,{class:{"d-block":o,"valid-feedback":!c,"valid-tooltip":c},attrs:{id:r.id||null,role:r.role||null,"aria-live":a||null,"aria-atomic":a?"true":null}}),i)}});function St(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Vt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?St(Object(r),!0).forEach((function(e){Lt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):St(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Lt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var At=["input","select","textarea"],Ft=At.map((function(t){return"".concat(t,":not([disabled])")})).join(),Et=[].concat(At,["a","button","label"]),Tt=function(){return Object(C["d"])(Object(w["i"])(Vt(Vt(Vt(Vt({},vt["b"]),Ot),Object(st["a"])().reduce((function(t,e){return t[Object(C["g"])(e,"contentCols")]=Object(C["c"])(y["g"]),t[Object(C["g"])(e,"labelAlign")]=Object(C["c"])(y["o"]),t[Object(C["g"])(e,"labelCols")]=Object(C["c"])(y["g"]),t}),Object(w["c"])(null))),{},{description:Object(C["c"])(y["o"]),disabled:Object(C["c"])(y["f"],!1),feedbackAriaLive:Object(C["c"])(y["o"],"assertive"),invalidFeedback:Object(C["c"])(y["o"]),label:Object(C["c"])(y["o"]),labelClass:Object(C["c"])(y["d"]),labelFor:Object(C["c"])(y["o"]),labelSize:Object(C["c"])(y["o"]),labelSrOnly:Object(C["c"])(y["f"],!1),tooltip:Object(C["c"])(y["f"],!1),validFeedback:Object(C["c"])(y["o"]),validated:Object(C["c"])(y["f"],!1)})),g["m"])},It={name:g["m"],mixins:[vt["a"],jt,mt["a"]],get props(){return delete this.props,this.props=Tt()},data:function(){return{ariaDescribedby:null}},computed:{contentColProps:function(){return this.getColProps(this.$props,"content")},labelAlignClasses:function(){return this.getAlignClasses(this.$props,"label")},labelColProps:function(){return this.getColProps(this.$props,"label")},isHorizontal:function(){return Object(w["f"])(this.contentColProps).length>0||Object(w["f"])(this.labelColProps).length>0}},watch:{ariaDescribedby:function(t,e){t!==e&&this.updateAriaDescribedby(t,e)}},mounted:function(){var t=this;this.$nextTick((function(){t.updateAriaDescribedby(t.ariaDescribedby)}))},methods:{getAlignClasses:function(t,e){return Object(st["a"])().reduce((function(r,n){var i=t[Object(C["g"])(n,"".concat(e,"Align"))]||null;return i&&r.push(["text",n,i].filter(ft["a"]).join("-")),r}),[])},getColProps:function(t,e){return Object(st["a"])().reduce((function(r,n){var i=t[Object(C["g"])(n,"".concat(e,"Cols"))];return i=""===i||(i||!1),Object(pt["b"])(i)||"auto"===i||(i=Object(ht["b"])(i,0),i=i>0&&i),i&&(r[n||(Object(pt["b"])(i)?"col":"cols")]=i),r}),{})},updateAriaDescribedby:function(t,e){var r=this.labelFor;if(it["f"]&&r){var n=Object(dt["p"])("#".concat(bt(r)),this.$refs.content);if(n){var i="aria-describedby",c=(t||"").split(ct["p"]),a=(e||"").split(ct["p"]),o=(Object(dt["e"])(n,i)||"").split(ct["p"]).filter((function(t){return!Object(ot["a"])(a,t)})).concat(c).filter((function(t,e,r){return r.indexOf(t)===e})).filter(ft["a"]).join(" ").trim();o?Object(dt["r"])(n,i,o):Object(dt["m"])(n,i)}}},onLegendClick:function(t){if(!this.labelFor){var e=t.target,r=e?e.tagName:"";if(-1===Et.indexOf(r)){var n=Object(dt["q"])(Ft,this.$refs.content).filter(dt["k"]);1===n.length&&Object(dt["c"])(n[0])}}}},render:function(t){var e=this.computedState,r=this.feedbackAriaLive,n=this.isHorizontal,i=this.labelFor,c=this.normalizeSlot,a=this.safeId,o=this.tooltip,s=a(),l=!i,u=t(),b=c(at["j"])||this.label,d=b?a("_BV_label_"):null;if(b||n){var f=this.labelSize,p=this.labelColProps,h=l?"legend":"label";this.labelSrOnly?(b&&(u=t(h,{class:"sr-only",attrs:{id:d,for:i||null}},[b])),u=t(n?gt["a"]:"div",{props:n?p:{}},[u])):u=t(n?gt["a"]:h,{on:l?{click:this.onLegendClick}:{},props:n?Vt(Vt({},p),{},{tag:h}):{},attrs:{id:d,for:i||null,tabindex:l?"-1":null},class:[l?"bv-no-focus-ring":"",n||l?"col-form-label":"",!n&&l?"pt-0":"",n||l?"":"d-block",f?"col-form-label-".concat(f):"",this.labelAlignClasses,this.labelClass]},[b])}var O=t(),j=c(at["i"])||this.invalidFeedback,v=j?a("_BV_feedback_invalid_"):null;j&&(O=t(kt,{props:{ariaLive:r,id:v,role:r?"alert":null,state:e,tooltip:o},attrs:{tabindex:j?"-1":null}},[j]));var m=t(),g=c(at["q"])||this.validFeedback,y=g?a("_BV_feedback_valid_"):null;g&&(m=t($t,{props:{ariaLive:r,id:y,role:r?"alert":null,state:e,tooltip:o},attrs:{tabindex:g?"-1":null}},[g]));var w=t(),C=c(at["d"])||this.description,P=C?a("_BV_description_"):null;C&&(w=t(xt,{attrs:{id:P,tabindex:"-1"}},[C]));var x=this.ariaDescribedby=[P,!1===e?v:null,!0===e?y:null].filter(ft["a"]).join(" ")||null,_=t(n?gt["a"]:"div",{props:n?this.contentColProps:{},ref:"content"},[c(at["c"],{ariaDescribedby:x,descriptionId:P,id:s,labelId:d})||t(),O,m,w]);return t(l?"fieldset":n?wt:"div",{staticClass:"form-group",class:[{"was-validated":this.validated},this.stateClass],attrs:{id:s,disabled:l?this.disabled:null,role:l?null:"group","aria-invalid":this.computedAriaInvalid,"aria-labelledby":l&&n?d:null}},n&&l?[t(wt,[u,_])]:[u,_])}},zt=r("6b77"),Bt="input, textarea, select",Wt=Object(C["d"])({autofocus:Object(C["c"])(y["f"],!1),disabled:Object(C["c"])(y["f"],!1),form:Object(C["c"])(y["o"]),id:Object(C["c"])(y["o"]),name:Object(C["c"])(y["o"]),required:Object(C["c"])(y["f"],!1)},"formControls"),qt=v["a"].extend({props:Wt,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(dt["o"])((function(){var e=t.$el;t.autofocus&&Object(dt["k"])(e)&&(Object(dt["l"])(e,Bt)||(e=Object(dt["p"])(Bt,e)),Object(dt["c"])(e))}))}))}}}),Mt=v["a"].extend({computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}}),Rt=Object(C["d"])({size:Object(C["c"])(y["o"])},"formControls"),Nt=v["a"].extend({props:Rt,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}}),Ht=r("0056"),Gt=r("a8c8"),Jt=r("58f2");function Qt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Kt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Qt(Object(r),!0).forEach((function(e){Ut(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Qt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Ut(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var Xt=Object(Jt["a"])("value",{type:y["j"],defaultValue:"",event:Ht["r"]}),Yt=Xt.mixin,Zt=Xt.props,te=Xt.prop,ee=Xt.event,re=Object(C["d"])(Object(w["i"])(Kt(Kt({},Zt),{},{ariaInvalid:Object(C["c"])(y["h"],!1),autocomplete:Object(C["c"])(y["o"]),debounce:Object(C["c"])(y["j"],0),formatter:Object(C["c"])(y["i"]),lazy:Object(C["c"])(y["f"],!1),lazyFormatter:Object(C["c"])(y["f"],!1),number:Object(C["c"])(y["f"],!1),placeholder:Object(C["c"])(y["o"]),plaintext:Object(C["c"])(y["f"],!1),readonly:Object(C["c"])(y["f"],!1),trim:Object(C["c"])(y["f"],!1)})),"formTextControls"),ne=v["a"].extend({mixins:[Yt],props:re,data:function(){var t=this[te];return{localValue:Object(lt["g"])(t),vModelValue:this.modifyValue(t)}},computed:{computedClass:function(){var t=this.plaintext,e=this.type,r="range"===e,n="color"===e;return[{"custom-range":r,"form-control-plaintext":t&&!r&&!n,"form-control":n||!t&&!r},this.sizeFormClass,this.stateClass]},computedDebounce:function(){return Object(Gt["a"])(Object(ht["b"])(this.debounce,0),0)},hasFormatter:function(){return Object(C["b"])(this.formatter)}},watch:Ut({},te,(function(t){var e=Object(lt["g"])(t),r=this.modifyValue(t);e===this.localValue&&r===this.vModelValue||(this.clearDebounce(),this.localValue=e,this.vModelValue=r)})),created:function(){this.$_inputDebounceTimer=null},mounted:function(){this.$on(Ht["s"],this.clearDebounce)},beforeDestroy:function(){this.clearDebounce()},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(lt["g"])(t),!this.hasFormatter||this.lazyFormatter&&!r||(t=this.formatter(t,e)),t},modifyValue:function(t){return t=Object(lt["g"])(t),this.trim&&(t=t.trim()),this.number&&(t=Object(ht["a"])(t,t)),t},updateValue:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.lazy;if(!n||r){this.clearDebounce();var i=function(){if(t=e.modifyValue(t),t!==e.vModelValue)e.vModelValue=t,e.$emit(ee,t);else if(e.hasFormatter){var r=e.$refs.input;r&&t!==r.value&&(r.value=t)}},c=this.computedDebounce;c>0&&!n&&!r?this.$_inputDebounceTimer=setTimeout(i,c):i()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,r=this.formatValue(e,t);!1===r||t.defaultPrevented?Object(zt["f"])(t,{propagation:!1}):(this.localValue=r,this.updateValue(r),this.$emit(Ht["g"],r))}},onChange:function(t){var e=t.target.value,r=this.formatValue(e,t);!1===r||t.defaultPrevented?Object(zt["f"])(t,{propagation:!1}):(this.localValue=r,this.updateValue(r,!0),this.$emit(Ht["b"],r))},onBlur:function(t){var e=t.target.value,r=this.formatValue(e,t,!0);!1!==r&&(this.localValue=Object(lt["g"])(this.modifyValue(r)),this.updateValue(r,!0)),this.$emit(Ht["a"],t)},focus:function(){this.disabled||Object(dt["c"])(this.$el)},blur:function(){this.disabled||Object(dt["b"])(this.$el)}}}),ie=v["a"].extend({computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}}),ce=r("bc9a");function ae(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function oe(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ae(Object(r),!0).forEach((function(e){se(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function se(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var le=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],ue=Object(C["d"])(Object(w["i"])(oe(oe(oe(oe(oe(oe({},vt["b"]),Wt),Rt),Ot),re),{},{list:Object(C["c"])(y["o"]),max:Object(C["c"])(y["j"]),min:Object(C["c"])(y["j"]),noWheel:Object(C["c"])(y["f"],!1),step:Object(C["c"])(y["j"]),type:Object(C["c"])(y["o"],"text",(function(t){return Object(ot["a"])(le,t)}))})),g["n"]),be=v["a"].extend({name:g["n"],mixins:[ce["a"],vt["a"],qt,Nt,jt,ne,Mt,ie],props:ue,computed:{localType:function(){var t=this.type;return Object(ot["a"])(le,t)?t:"text"},computedAttrs:function(){var t=this.localType,e=this.name,r=this.form,n=this.disabled,i=this.placeholder,c=this.required,a=this.min,o=this.max,s=this.step;return{id:this.safeId(),name:e,form:r,type:t,disabled:n,placeholder:i,required:c,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:a,max:o,step:s,list:"password"!==t?this.list:null,"aria-required":c?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return oe(oe({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var e=this.$el;Object(zt["c"])(t,e,"focus",this.onWheelFocus),Object(zt["c"])(t,e,"blur",this.onWheelBlur),t||Object(zt["a"])(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(zt["b"])(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(zt["a"])(document,"wheel",this.stopWheel)},stopWheel:function(t){Object(zt["f"])(t,{propagation:!1}),Object(dt["b"])(this.$el)}},render:function(t){return t("input",{class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}}),de=function(t){Object(o["a"])(r,t);var e=Object(s["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return Object(a["a"])(r,[{key:"onCategoryClick",value:function(t){this.$emit("change",G(G({},this.filters),{},{selectedCategory:t}))}},{key:"onQueryInput",value:function(t){this.$emit("change",G(G({},this.filters),{},{query:t}))}}]),r}(u["d"]);Object(l["a"])([Object(u["b"])("change",{type:Object})],de.prototype,"filters",void 0),Object(l["a"])([Object(u["c"])({type:Array})],de.prototype,"categories",void 0),de=Object(l["a"])([Object(u["a"])({name:"ProductsListFilters",components:{BNav:U,BNavItem:nt,BFormGroup:It,BFormInput:be}})],de);var fe=de,pe=fe,he=(r("844d"),Object(F["a"])(pe,M,R,!1,null,null,null)),Oe=he.exports,je=r("c332"),ve=Object(b["a"])("product"),me=Object(b["a"])("productFilters"),ge=Object(b["a"])("category"),ye=Object(b["a"])("cart"),we=function(t){Object(o["a"])(r,t);var e=Object(s["a"])(r);function r(){var t;return Object(c["a"])(this,r),t=e.apply(this,arguments),t.isLoadingCategories=!0,t.isLoadingProducts=!0,t}return Object(a["a"])(r,[{key:"created",value:function(){var t=this;this.getProducts().then((function(){t.isLoadingProducts=!1})),this.getCategories().then((function(){t.isLoadingCategories=!1}))}},{key:"onFiltersChange",value:function(t){this.setFilters(t)}},{key:"onAddToCart",value:function(t){this.addToCart(t.id)}},{key:"onShowDetail",value:function(t){this.$router.push({name:"ProductDetail",params:{id:t.id.toString()}})}}]),r}(u["d"]);Object(l["a"])([ve.Getter],we.prototype,"filteredProducts",void 0),Object(l["a"])([ve.Action],we.prototype,"getProducts",void 0),Object(l["a"])([me.State],we.prototype,"filters",void 0),Object(l["a"])([me.Mutation("SET_FILTERS")],we.prototype,"setFilters",void 0),Object(l["a"])([ge.State],we.prototype,"categories",void 0),Object(l["a"])([ge.Action],we.prototype,"getCategories",void 0),Object(l["a"])([ye.Action],we.prototype,"addToCart",void 0),we=Object(l["a"])([Object(u["a"])({name:"ProductsListView",components:{ProductsList:q,ProductsListFilters:Oe},directives:{loading:je["a"]}})],we);var Ce=we,Pe=Ce,xe=Object(F["a"])(Pe,n,i,!1,null,null,null);e["default"]=xe.exports},"58f2":function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r("2b0e"),i=r("0056"),c=r("a723"),a=r("cf75");function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.type,s=void 0===r?c["a"]:r,l=e.defaultValue,u=void 0===l?void 0:l,b=e.validator,d=void 0===b?void 0:b,f=e.event,p=void 0===f?i["g"]:f,h=o({},t,Object(a["c"])(s,u,d)),O=n["a"].extend({model:{prop:t,event:p},props:h});return{mixin:O,props:h,prop:t,event:p}}},"7ae0":function(t,e,r){},"844d":function(t,e,r){"use strict";r("7ae0")},"90ef":function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return s}));var n=r("2b0e"),i=r("2f79"),c=r("a723"),a=r("cf75"),o={id:Object(a["c"])(c["o"])},s=n["a"].extend({props:o,data:function(){return{localId_:null}},computed:{safeId:function(){var t=this.id||this.localId_,e=function(e){return t?(e=String(e||"").replace(/\s+/g,"_"),e?t+"_"+e:t):null};return e}},mounted:function(){var t=this;this.$nextTick((function(){t.localId_="__BVID__".concat(t[i["a"]])}))}})},a2a1:function(t,e,r){},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),c=r("df75"),a=r("d039"),o=a((function(){c(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(t){return c(i(t))}})},d1fa:function(t,e,r){"use strict";r("46cf")},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),c=r("56ef"),a=r("fc6a"),o=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),i=o.f,l=c(n),u={},b=0;while(l.length>b)r=i(n,e=l[b++]),void 0!==r&&s(u,e,r);return u}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),c=r("fc6a"),a=r("06cf").f,o=r("83ab"),s=i((function(){a(1)})),l=!o||s;n({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return a(c(t),e)}})}}]);
//# sourceMappingURL=chunk-65fe60b6.3dfde8aa.js.map