var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/datetime-picker/base/example.jsx.js"]=function(e){function t(t){for(var a,l,s=t[0],i=t[1],d=t[2],u=0,m=[];u<s.length;u++)l=s[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&m.push(n[l][0]),n[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(c&&c(t);m.length;)m.shift()();return o.push.apply(o,d||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var i=r[s];0!==n[i]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var a={},n={58:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},o=[];function l(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=a,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(r,a,function(t){return e[t]}.bind(null,a));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=i;return o.push([641,0]),r()}({0:function(e,t){e.exports=React},16:function(e,t){e.exports=ReactDOM},641:function(e,t,r){"use strict";r.r(t),r.d(t,"examples",(function(){return g})),r.d(t,"states",(function(){return w}));var a=r(0),n=r.n(a),o=r(1),l=r.n(o),s=r(2),i=r.n(s),d=r(6),c=r(18),u=r(20),m=r(22),p=r(8),b=r(36),f=r(4),h=r(5),y=r(12);function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,o=[],l=!0,s=!1;try{for(r=r.call(e);!(l=(a=r.next()).done)&&(o.push(a.value),!t||o.length!==t);l=!0);}catch(e){s=!0,n=e}finally{try{l||null==r.return||r.return()}finally{if(s)throw n}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var S=function(e){var t=e.dropdown,r=e.dropdownIsOpen,o=e.hasFocus,l=e.hasError,s=e.isOpen,m=e.isRequired,b=e.isDisabled,v=e.listboxData,S=e.dateDefaultValue,g=e.showRequiredIndicator,w=Object(a.useRef)(),D=_(Object(a.useState)(""),2),O=D[0],x=D[1],E=_(Object(a.useState)(""),2),I=E[0],j=E[1],q=_(Object(a.useState)(d.d.uniqueId("example-unique-id-")),1)[0],k=_(Object(a.useState)(d.d.uniqueId("example-unique-id-")),1)[0],R=_(Object(a.useState)(d.d.uniqueId("example-unique-id-")),1)[0];Object(a.useEffect)((function(){w.current&&("id"in w.current&&w.current.id&&x(w.current.id),"ariaChecked"in w.current&&w.current.ariaChecked&&j(w.current.textContent))}),[]);var T={"slds-is-open":r};return n.a.createElement("div",{className:"slds-form"},n.a.createElement("fieldset",{className:i()("slds-form-element slds-form-element_compound",{"slds-has-error":l})},n.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},m&&n.a.createElement("abbr",{className:"slds-required",title:"required"},"*"," "),"Date and Time"),n.a.createElement("div",{className:"slds-form-element__control"},n.a.createElement("div",{className:"slds-form-element__group"},n.a.createElement("div",{className:"slds-form-element__row"},n.a.createElement(h.b,{formElementClassName:i()("slds-dropdown-trigger slds-dropdown-trigger_click",T),labelContent:"Date",inputId:q,hasRightIcon:!0,dropdown:t,hasError:l,isRequired:m,showRequiredIndicator:g},n.a.createElement(y.a,{id:q,placeholder:"Select a date…",defaultValue:S,"aria-describedby":l&&q+"-error",required:m,disabled:b}),n.a.createElement(f.b,{className:"slds-input__icon slds-input__icon_right",symbol:"event",assistiveText:"Select a date",title:"Select a date",disabled:b})),n.a.createElement(c.b,{id:k,"aria-controls":R,"aria-activedescendant":O,autocomplete:!0,label:"Time",placeholder:"Select a time…",inputIconPosition:"right",hasError:l,isDisabled:b,rightInputIcon:n.a.createElement(p.UtilityIcon,{symbol:"clock",className:i()("slds-icon slds-icon_x-small slds-icon-text-default",{"slds-icon-text-error":l,"slds-is-disabled":b}),containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:n.a.createElement(u.e,{className:"slds-dropdown_fluid slds-dropdown_left",id:R,snapshot:v,type:"plain",count:6,focusedRef:w}),resultsType:"listbox",hasInteractions:!0,hasFocus:o,isOpen:s,value:I})))),l&&n.a.createElement("div",{className:"slds-form-element__help",id:q+"-error"},"Complete this field.")))};S.propTypes={dropdown:l.a.node,dropdownIsOpen:l.a.bool,hasFocus:l.a.bool,isOpen:l.a.bool,isRequired:l.a.bool,hasError:l.a.bool,listboxIsOpen:l.a.bool,listboxData:l.a.object.isRequired,dateDefaultValue:l.a.string,showRequiredIndicator:l.a.bool,isDisabled:l.a.bool},S.defaultProps={dropdown:n.a.createElement(b.DatePicker,{todayActive:!0}),dropdownIsOpen:!0,showRequiredIndicator:!1,isDisabled:!1},t.default=n.a.createElement(S,{listboxData:m.t});var g=[{id:"small-width-container",label:"Small Width Container",demoStyles:"height: auto; width: 200px; border: 1px dashed #ddd;",storybookStyles:!0,element:n.a.createElement(S,{dropdownIsOpen:!1,listboxData:m.t})}],w=[{id:"date-selection",label:"Date selected",element:n.a.createElement(S,{dropdown:n.a.createElement(b.DatePicker,{todayActive:!0,dateSelected:"single",dateRange:"week-4"}),dateDefaultValue:"06/24/2021",listboxData:m.t})},{id:"time-selection",label:"Time selected",demoStyles:"height: 20rem;",storybookStyles:!0,element:n.a.createElement(S,{dropdown:n.a.createElement(b.DatePicker,{todayActive:!0,dateSelected:"single",dateRange:"week-4",value:"8:00am"}),dropdownIsOpen:!1,dateDefaultValue:"06/24/2021",isOpen:!0,hasFocus:!0,listboxData:m.v})},{id:"required",label:"Date and Time - required",demoStyles:"height: 20rem;",element:n.a.createElement(S,{dropdownIsOpen:!1,isRequired:!0,listboxData:m.t})},{id:"error",label:"Date and Time - error",demoStyles:"height: 20rem;",element:n.a.createElement(S,{dropdownIsOpen:!1,hasError:!0,listboxData:m.t})},{id:"required-error",label:"Date and Time - required and has error",demoStyles:"height: 20rem;",element:n.a.createElement(S,{dropdownIsOpen:!1,isRequired:!0,hasError:!0,listboxData:m.t})},{id:"disabled",label:"Date and Time - disabled",demoStyles:"height: 10rem;",storybookStyles:!0,element:n.a.createElement(S,{dropdownIsOpen:!1,listboxData:m.t,isDisabled:!0})}]}});