var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/visual-picker/link/example.jsx.js"]=function(e){function t(t){for(var r,s,o=t[0],i=t[1],c=t[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&f.push(l[s][0]),l[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==l[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},l={159:0,6:0,22:0,73:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,128:0,132:0,136:0,141:0,143:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=i;return a.push([583,0]),n()}({0:function(e,t){e.exports=React},583:function(e,t,n){"use strict";n.r(t),n.d(t,"VisualPickerMediaObject",(function(){return i}));var r=n(0),l=n.n(r),a=n(2),s=n.n(a),o=n(8),i=function(e){var t=e.symbol||"knowledge_base",n=e.icon||l.a.createElement(o.UtilityIcon,{className:"slds-icon-text-default",symbol:t,title:!1,assistiveText:!1});return l.a.createElement("a",{href:"#",className:s()("slds-box slds-box_link slds-box_x-small slds-media",e.className),onClick:function(e){return e.preventDefault()}},l.a.createElement("div",{className:"slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small"},n),l.a.createElement("div",{className:"slds-media__body slds-border_left slds-p-around_small"},e.children))};t.default=[{id:"default",label:"Default",element:l.a.createElement("div",{className:"demo-only",style:{width:"24rem"}},l.a.createElement(i,{symbol:"knowledge_base"},l.a.createElement("h2",{className:"slds-truncate slds-text-heading_small",title:"Share the knowledge"},"Share the knowledge"),l.a.createElement("p",{className:"slds-m-top_small"},"Harness your team's collective know-how with our powerful knowledge base")))}]}});