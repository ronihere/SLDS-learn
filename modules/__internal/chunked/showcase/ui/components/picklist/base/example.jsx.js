var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/picklist/base/example.jsx.js"]=function(e){function t(t){for(var s,o,a=t[0],c=t[1],r=t[2],p=0,u=[];p<a.length;p++)o=a[p],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&u.push(l[o][0]),l[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);for(d&&d(t);u.length;)u.shift()();return i.push.apply(i,r||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==l[c]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},l={114:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},i=[];function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var a=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var r=0;r<a.length;r++)t(a[r]);var d=c;return i.push([705,0]),n()}({0:function(e,t){e.exports=React},16:function(e,t){e.exports=ReactDOM},705:function(e,t,n){"use strict";n.r(t),n.d(t,"states",(function(){return N}));var s=n(0),l=n.n(s),i=n(18),o=n(20),a=n(1),c=n.n(a),r=n(2),d=n.n(r),p=n(9),u=n(4),m=n(5),b=n(6),_=function(e){return l.a.createElement("div",{className:d()("slds-dropdown",e.className),role:"listbox"},e.children)},x=function(e){return l.a.createElement("ul",{id:e.id||"option-list-01",className:d()("slds-dropdown__list",e.className),role:"group"===e.role?"group":"presentation","aria-label":"group"===e.role?e["aria-label"]:null},e.children)},h=function(e){var t=b.d.uniqueId("listbox-option-");return l.a.createElement("li",{className:e.className,role:"presentation"},l.a.createElement("span",{className:d()("presentation"===e.role?"slds-lookup__item_label":e.text?"slds-lookup__item-action slds-lookup__item-action_label":"slds-lookup__item-action slds-media"),role:e.role?e.role:"option",tabIndex:e.tabIndex||"-1",id:t},e.isSelectable?l.a.createElement(p.a,{className:"slds-icon slds-icon_selected slds-icon_x-small slds-icon-text-default slds-m-right_x-small slds-shrink-none",sprite:"utility",symbol:"check"}):null,e.headerText?l.a.createElement("h3",{className:"slds-text-title_caps",role:"presentation"},e.headerText):e.text?l.a.createElement("span",{className:"slds-truncate",title:e.title},e.children):e.children))},O=function(e){var t=e.autocomplete,n=e.dropdown,s=e.placeholder;return l.a.createElement(m.b,null,l.a.createElement(m.d,{labelContent:"Categories",inputId:"text-input-01"}),l.a.createElement(m.c,{className:"slds-input-has-icon slds-input-has-icon_right slds-picklist__input"},l.a.createElement("input",{id:"text-input-01",className:"slds-lookup__search-input slds-input",type:"text",placeholder:s,"aria-owns":"option-list-01",role:"textbox",readOnly:!t,"aria-autocomplete":t?"list":null}),t?null:l.a.createElement(u.b,{className:"slds-input__icon slds-text-color_default",symbol:"down",assistiveText:"Expand category options","aria-expanded":"open"===n?"true":"false",iconClassName:"slds-button__icon",tabIndex:"-1"})))};O.propTypes={autocomplete:c.a.bool,dropdown:c.a.string,placeholder:c.a.string},O.defaultProps={placeholder:"Select an Option…"};var y=n(66),f=n(8),E={option1:{name:"Option A"},option2:{name:"Option B"},option3:{name:"Option ABCDEFGHIJKLMNOPQRSTUVWXYZ"}},I={option1:{name:"Option A",selected:!0},option2:{name:"Option B"},option3:{name:"Option ABCDEFGHIJKLMNOPQRSTUVWXYZ"}},g={option1:{name:"Option A",selected:!0},option2:{name:"Option B",selected:!0},option3:{name:"Option ABCDEFGHIJKLMNOPQRSTUVWXYZ"}},N=(t.default=[{id:"default",label:"Default",element:l.a.createElement(i.b,{id:b.d.uniqueId("combobox-id-"),containerClassName:"slds-size_small","aria-controls":"listbox-id-1",inputIconPosition:"right",rightInputIcon:l.a.createElement(f.UtilityIcon,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:l.a.createElement(o.e,{id:"listbox-id-1",snapshot:E,type:"plain",count:8}),resultsType:"listbox",selectOnly:!0,hasInteractions:!0})}],[{id:"focused",label:"Focused",element:l.a.createElement(i.b,{id:b.d.uniqueId("combobox-id-"),containerClassName:"slds-size_small","aria-controls":"listbox-id-2",inputIconPosition:"right",rightInputIcon:l.a.createElement(f.UtilityIcon,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:l.a.createElement(o.e,{id:"listbox-id-2",snapshot:E,type:"plain",count:8}),resultsType:"listbox",selectOnly:!0,hasFocus:!0,isOpen:!0})},{id:"open-item-focused",label:"Open - Item Focused",element:l.a.createElement(i.b,{id:b.d.uniqueId("combobox-id-"),containerClassName:"slds-size_small","aria-controls":"listbox-id-3",inputIconPosition:"right",rightInputIcon:l.a.createElement(f.UtilityIcon,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:l.a.createElement(o.e,{id:"listbox-id-3",snapshot:{option1:{name:"Option A",focused:!0},option2:{name:"Option B"},option3:{name:"Option ABCDEFGHIJKLMNOPQRSTUVWXYZ"}},type:"plain",count:8}),resultsType:"listbox","aria-activedescendant":"option1",selectOnly:!0,hasFocus:!0,isOpen:!0})},{id:"open-option-selected",label:"Open - Option Selected",element:l.a.createElement(i.b,{id:b.d.uniqueId("combobox-id-"),containerClassName:"slds-size_small","aria-controls":"listbox-id-4",inputIconPosition:"right",value:"Option A",rightInputIcon:l.a.createElement(f.UtilityIcon,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:l.a.createElement(o.e,{id:"listbox-id-4",snapshot:I,type:"plain",count:8}),resultsType:"listbox","aria-activedescendant":"option1",selectOnly:!0,hasFocus:!0,isOpen:!0})},{id:"open-options-selected",label:"Open - Options Selected",element:l.a.createElement(i.b,{id:b.d.uniqueId("combobox-id-"),containerClassName:"slds-size_small","aria-controls":"listbox-id-5",selectOnly:!0,value:"2 Options Selected",inputIconPosition:"right",rightInputIcon:l.a.createElement(f.UtilityIcon,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:l.a.createElement(o.e,{id:"listbox-id-5",snapshot:g,type:"plain",count:8}),resultsType:"listbox",isOpen:!0,hasFocus:!0})},{id:"closed-option-selected",label:"Closed - Option Selected",element:l.a.createElement(i.b,{id:b.d.uniqueId("combobox-id-"),containerClassName:"slds-size_small","aria-controls":"listbox-id-6",inputIconPosition:"right",value:"Option A",rightInputIcon:l.a.createElement(f.UtilityIcon,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:l.a.createElement(o.e,{id:"listbox-id-6",snapshot:I,type:"plain",count:8}),resultsType:"listbox","aria-activedescendant":"option1",selectOnly:!0})},{id:"closed-options-selected",label:"Closed - Options Selected",element:l.a.createElement(i.b,{id:b.d.uniqueId("combobox-id-"),containerClassName:"slds-size_small","aria-controls":"listbox-id-7",selectOnly:!0,value:"2 Options Selected",inputIconPosition:"right",rightInputIcon:l.a.createElement(f.UtilityIcon,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:l.a.createElement(o.e,{id:"listbox-id-7",snapshot:g,type:"plain",count:8}),resultsType:"listbox",listboxOfSelections:l.a.createElement(y.a,{snapshot:{option1:{name:"Option A",tabIndex:0},option2:{name:"Option B"}},count:2})})},{id:"group-heading",label:"Group heading label",element:l.a.createElement(i.b,{id:b.d.uniqueId("combobox-id-"),containerClassName:"slds-size_small","aria-controls":"listbox-id-8",selectOnly:!0,inputIconPosition:"right",rightInputIcon:l.a.createElement(f.UtilityIcon,{symbol:"down",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:l.a.createElement(o.d,{id:"listbox-id-8",className:"slds-dropdown slds-dropdown_fluid"},l.a.createElement(o.b,{"aria-label":"Group One",snapshot:{option0:{name:"Recently Viewed",label:!0},option1:{name:"Option A"},option2:{name:"Option B"}},count:3})),resultsType:"listbox",isOpen:!0,hasFocus:!0})},{id:"deprecated-picklist-open",label:"Deprecated Picklist Open",element:l.a.createElement("div",{className:"demo-only",style:{height:"240px"}},l.a.createElement("div",{className:"slds-picklist slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"},l.a.createElement(O,{dropdown:"open"}),l.a.createElement(_,{className:"slds-dropdown_left slds-dropdown_length-5"},l.a.createElement(x,null,l.a.createElement(h,{isSelectable:!0,text:!0,title:"Option A",tabIndex:"0"},"Option A"),l.a.createElement(h,{isSelectable:!0,text:!0,title:"Option B"},"Option B"),l.a.createElement(h,{isSelectable:!0,text:!0,title:"Option C"},"Option C"),l.a.createElement(h,{isSelectable:!0,text:!0,title:"Option D"},"Option D"),l.a.createElement(h,{isSelectable:!0,text:!0,title:"Option E"},"Option E"),l.a.createElement(h,{isSelectable:!0,text:!0,title:"Option F"},"Option FGHIJKLMNOPQRSTUVWXYZ")))))}])}});