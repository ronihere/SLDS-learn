var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/utilities/horizontal-list/docs.mdx.js"]=function(e){function t(t){for(var n,r,s=t[0],c=t[1],o=t[2],u=0,f=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(m&&m(t);f.length;)f.shift()();return a.push.apply(a,o||[]),l()}function l(){for(var e,t=0;t<a.length;t++){for(var l=a[t],n=!0,s=1;s<l.length;s++){var c=l[s];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=l[0]))}return e}var n={},i={92:0},a=[];function r(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=n,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(l,n,function(t){return e[t]}.bind(null,n));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var m=c;return a.push([747,0]),l()}({0:function(e,t){e.exports=React},20:function(e,t){e.exports=ReactDOM},21:function(e,t){e.exports=JSBeautify},747:function(e,t,l){"use strict";l.r(t),l.d(t,"getElement",(function(){return u})),l.d(t,"getContents",(function(){return f}));var n=l(0),i=l.n(n),a=l(4),r=l(2),s=l(1),c=[{id:"horizontal-list",label:"Default",element:i.a.createElement("ul",{className:"slds-list_horizontal"},i.a.createElement("li",null,"Horizontal List"),i.a.createElement("li",null,"List Item"),i.a.createElement("li",null,"List Item"))},{id:"horizontal-list-links",label:"Links",element:i.a.createElement("ul",{className:"slds-list_horizontal"},i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Horizontal List with inline level links")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")))},{id:"horizontal-list-block-links",label:"Block links",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-block-links"},i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Horizontal List with block level links")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")))},{id:"horizontal-list-block-links-space",label:"Block links with space",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-block-links_space"},i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Horizontal List with block level links and space")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")))},{id:"horizontal-list-inline-block-links",label:"Inline block links",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-inline-block-links"},i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Horizontal List with inline-block level links")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")))},{id:"horizontal-list-inline-block-links-space",label:"Inline block links with space",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-inline-block-links_space"},i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Horizontal List with inline-block level links and space")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")),i.a.createElement("li",null,i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")))},{id:"horizontal-list-left",label:"Divider on Left",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-dividers_left"},i.a.createElement("li",{className:"slds-item"},"Horizontal List with dot dividers to the left"),i.a.createElement("li",{className:"slds-item"},"List Item"),i.a.createElement("li",{className:"slds-item"},"List Item"))},{id:"horizontal-list-link-left",label:"Divider on Left with link",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-dividers_left slds-has-block-links"},i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Horizontal List with block level links and dot dividers")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")))},{id:"horizontal-list-link-space-left",label:"Divider on Left with link space",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-dividers_left slds-has-block-links_space"},i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Horizontal List with block level links and dot dividers with space")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")))},{id:"horizontal-list-right",label:"Divider on Right",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-dividers_right"},i.a.createElement("li",{className:"slds-item"},"Horizontal List with dot dividers to the right"),i.a.createElement("li",{className:"slds-item"},"List Item"),i.a.createElement("li",{className:"slds-item"},"List Item"))},{id:"horizontal-list-link-right",label:"Divider on Right with link",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-dividers_right slds-has-block-links"},i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Horizontal List with block level links and dot dividers")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")))},{id:"horizontal-list-link-space-right",label:"Divider on Right with link space",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-has-dividers_right slds-has-block-links_space"},i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Horizontal List with block level links and dot dividers with space")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")))},{id:"horizontal-list-large",label:"List with large spacing",element:i.a.createElement("ul",{className:"slds-list_horizontal slds-list_horizontal-large"},i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Horizontal List with large spacing between links")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")),i.a.createElement("li",{className:"slds-item"},i.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"List Item")))}],o=a.c.h2,m=a.c.h3,u=function(){return Object(n.createElement)(a.b,{},Object(n.createElement)("div",{className:"doc lead"},"A horizontal list"),o({id:"Base"},"Base"),Object(n.createElement)(r.a,null,Object(s.f)(c,"horizontal-list")),o({id:"Examples"},"Examples"),m({id:"Links"},"Links"),Object(n.createElement)(r.a,null,Object(s.f)(c,"horizontal-list-links")),m({id:"Block-Links"},"Block Links"),Object(n.createElement)(r.a,null,Object(s.f)(c,"horizontal-list-block-links")),m({id:"Block-Links-with-Space"},"Block Links with Space"),Object(n.createElement)(r.a,null,Object(s.f)(c,"horizontal-list-block-links-space")),m({id:"Inline-Block-Links"},"Inline Block Links"),Object(n.createElement)(r.a,null,Object(s.f)(c,"horizontal-list-inline-block-links")),m({id:"Inline-Block-Links-with-Space"},"Inline Block Links with Space"),Object(n.createElement)(r.a,null,Object(s.f)(c,"horizontal-list-inline-block-links-space")),m({id:"Left"},"Left"),Object(n.createElement)(r.a,null,Object(s.f)(c,"horizontal-list-left")),m({id:"Left-with-Link"},"Left with Link"),Object(n.createElement)(r.a,null,Object(s.f)(c,"horizontal-list-link-left")),m({id:"Left-with-Link-Space"},"Left with Link Space"),Object(n.createElement)(r.a,null,Object(s.f)(c,"horizontal-list-link-space-left")),m({id:"Right"},"Right"),Object(n.createElement)(r.a,null,Object(s.f)(c,"horizontal-list-right")),m({id:"Right-with-Link"},"Right with Link"),Object(n.createElement)(r.a,null,Object(s.f)(c,"horizontal-list-link-right")),m({id:"Right-with-Link-Space"},"Right with Link Space"),Object(n.createElement)(r.a,null,Object(s.f)(c,"horizontal-list-link-space-right")))},f=function(){return Object(a.a)(u())}}});