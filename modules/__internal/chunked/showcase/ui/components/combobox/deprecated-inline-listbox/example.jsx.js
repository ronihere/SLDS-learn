var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/combobox/deprecated-inline-listbox/example.jsx.js"]=function(e){function t(t){for(var a,o,i=t[0],r=t[1],s=t[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&p.push(c[o][0]),c[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(d&&d(t);p.length;)p.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,i=1;i<n.length;i++){var r=n[i];0!==c[r]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},c={45:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},l=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=r;return l.push([638,0]),n()}({0:function(e,t){e.exports=React},16:function(e,t){e.exports=ReactDOM},638:function(e,t,n){"use strict";n.r(t),n.d(t,"states",(function(){return d}));var a=n(0),c=n.n(a),l=n(25),o=n(17),i=n(28),r="Deprecated – Inline-Listbox",s=function(e){return c.a.createElement(i.c,{listboxClassName:"slds-dropdown slds-dropdown_fluid",vertical:!0,id:"listbox-unique-id"},c.a.createElement(i.d,null,c.a.createElement(i.b,{id:"listbox-option-unique-id-01",entityTitle:"Acme",entityMeta:!0,focused:e.focused})),c.a.createElement(i.d,null,c.a.createElement(i.b,{id:"listbox-option-unique-id-02",entityTitle:"Salesforce.com, Inc.",entityMeta:!0})))};t.default=[{context:r,deprecated:!0,id:"".concat(r.toLowerCase(),"-default"),label:"".concat(r," default"),element:c.a.createElement("div",{className:"demo-only",style:{height:"10rem"}},c.a.createElement(i.a,{inputIcon:"right",inputIconRightSymbol:"search",selectedOptionsInline:!0,autocomplete:!0,listbox:c.a.createElement(s,null)}))}];var d=[{context:r,deprecated:!0,id:"deprecated-focused",label:"Deprecated - Focused",element:c.a.createElement("div",{className:"demo-only",style:{height:"10rem"}},c.a.createElement(i.a,{containerClassName:"slds-has-input-focus",inputIcon:"right",inputIconRightSymbol:"search",selectedOptionsInline:!0,autocomplete:!0,isOpen:!0,listbox:c.a.createElement(s,null)})),script:"\n      document.getElementById('combobox-unique-id').focus()\n    "},{context:r,deprecated:!0,id:"deprecated-open-item-focused",label:"Deprecated - Open - Item Focused",element:c.a.createElement("div",{className:"demo-only",style:{height:"10rem"}},c.a.createElement(i.a,{inputIcon:"right",inputIconRightSymbol:"search",selectedOptionsInline:!0,autocomplete:!0,isOpen:!0,listbox:c.a.createElement(s,{focused:!0}),"aria-activedescendant":"listbox-option-unique-id-01"}))},{context:r,deprecated:!0,id:"deprecated-closed-option-selected",label:"Deprecated - Option Selected",element:c.a.createElement("div",{className:"demo-only",style:{height:"10rem"}},c.a.createElement(i.a,{selectedOptionsInline:!0,autocomplete:!0,readonly:!0,inputIcon:"both",inputIconLeftSprite:"standard",inputIconLeftSymbol:"account",inputButtonIcon:!0,inputIconRightSymbol:"close",value:"Salesforce.com, Inc.",listbox:c.a.createElement(s,null)}))},{context:r,deprecated:!0,id:"deprecated-options-selected",label:"Deprecated - Option(s) Selected",element:c.a.createElement("div",{className:"demo-only",style:{height:"10rem"}},c.a.createElement(i.a,{inputIcon:"right",inputIconRightSymbol:"search",selectedOptionsInline:!0,autocomplete:!0,listbox:c.a.createElement(s,null)},c.a.createElement(o.b,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{label:"Acme",tabIndex:"0"},c.a.createElement(l.StandardIcon,{containerClassName:"slds-pill__icon_container",title:"Account",assistiveText:"Account"}))),c.a.createElement(o.c,null,c.a.createElement(o.a,{label:"Salesforce.com, Inc."},c.a.createElement(l.StandardIcon,{containerClassName:"slds-pill__icon_container",title:"Account",assistiveText:"Account"}))))))},{context:r,deprecated:!0,id:"deprecated-focused-options-selected",label:"Deprecated - Focused - Option(s) Selected",element:c.a.createElement("div",{className:"demo-only",style:{height:"10rem"}},c.a.createElement(i.a,{isOpen:!0,inputIcon:"right",inputIconRightSymbol:"search",containerClassName:"slds-has-input-focus",selectedOptionsInline:!0,autocomplete:!0,listbox:c.a.createElement(s,null)},c.a.createElement(o.b,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{label:"Acme",tabIndex:"0"},c.a.createElement(l.StandardIcon,{containerClassName:"slds-pill__icon_container",title:"Account",assistiveText:"Account"}))),c.a.createElement(o.c,null,c.a.createElement(o.a,{label:"Salesforce.com, Inc."},c.a.createElement(l.StandardIcon,{containerClassName:"slds-pill__icon_container",title:"Account",assistiveText:"Account"})))))),script:"\n      document.getElementById('combobox-unique-id').focus()\n    "}]}});