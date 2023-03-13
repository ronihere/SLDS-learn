var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/badges/docs.mdx.js"]=function(e){function t(t){for(var a,c,r=t[0],s=t[1],o=t[2],u=0,b=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(l,c)&&l[c]&&b.push(l[c][0]),l[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);for(d&&d(t);b.length;)b.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==l[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},l={7:0},i=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var d=s;return i.push([765,0]),n()}({0:function(e,t){e.exports=React},20:function(e,t){e.exports=ReactDOM},21:function(e,t){e.exports=JSBeautify},765:function(e,t,n){"use strict";n.r(t),n.d(t,"getElement",(function(){return S})),n.d(t,"getContents",(function(){return x}));var a=n(0),l=n.n(a),i=n(4),c=n(15),r=n(2),s=n(28),o=n(45),d=(n(11),n(39)),u=n(47),b=l.a.createElement(u.a,null,"Badge Label"),h=[{id:"inverse",label:"Inverse",element:l.a.createElement(u.c,null,"Inverse badge")},{id:"with-left-icon",label:"With left icon",element:l.a.createElement(u.a,null,l.a.createElement(u.b,{symbol:"moneybag"}),"423 Credits Available")},{id:"with-right-icon",label:"With right icon",element:l.a.createElement(u.a,null,"423 Credits Available",l.a.createElement(u.b,{symbol:"moneybag",align:"right"}))},{id:"light-with-left-icon",label:"Light with left icon",element:l.a.createElement(u.d,null,l.a.createElement(u.b,{symbol:"moneybag"}),"423 Credits Available")},{id:"light-with-right-icon",label:"Light with right icon",element:l.a.createElement(u.d,null,"423 Credits Available",l.a.createElement(u.b,{symbol:"moneybag",align:"right"}))},{id:"inverse-with-left-icon",label:"Inverse with left icon",element:l.a.createElement(u.c,null,l.a.createElement(u.b,{symbol:"moneybag",isInverse:!0}),"423 Credits Available")},{id:"inverse-with-right-icon",label:"Inverse with right icon",element:l.a.createElement(u.c,null,"423 Credits Available",l.a.createElement(u.b,{symbol:"moneybag",align:"right",isInverse:!0}))},{id:"badge-with-child",label:"With Child Element",element:l.a.createElement(u.a,null,"Component In: ",l.a.createElement("em",null,"Lightning"))}],g=(u.a,u.a,u.a,n(1)),m=i.c.a,f=i.c.code,p=i.c.h2,O=i.c.h3,y=i.c.p,E=i.c.table,j=i.c.tbody,v=i.c.td,w=i.c.th,_=i.c.thead,B=i.c.tr,S=function(){return Object(a.createElement)(i.b,{},Object(a.createElement)("div",{className:"doc lead"},"Badges are labels which hold small amounts of information."),Object(a.createElement)(r.a,{exampleOnly:!0},Object(g.f)(b)),p({id:"About-Badges"},"About Badges"),y({},"Badges are composed of text inside a ",f({},"span")," element and may include inline/inline-block elements and/or icons."),O({id:"Colors"},"Colors"),y({},"There are six different color badges you can use."),E({},_({},B({},w({},"Badge"),w({},"class"),w({},"description"))),j({},B({},v({},Object(a.createElement)(u.a,{key:"1"},"Default Badge")),v({},f({},".slds-badge")),v({},"This is the default badge. You probably want to use this one unless you fall into a specific use-case.")),B({},v({},Object(a.createElement)(u.c,{key:"2"},"Darker Badge")),v({},f({},".slds-badge_inverse")),v({},"This badge is used when you need higher contrast than our default badge.")),B({},v({},Object(a.createElement)(u.d,{key:"3"},"Lightest Badge")),v({},f({},".slds-badge_lightest")),v({},"This badge is used when you need higher contrast, such as on colored backgrounds.")),B({},v({},Object(a.createElement)(u.a,{key:"4",isSuccess:!0},"Success Badge")),v({},f({},".slds-badge .slds-theme_success")),v({},"This is a badge used to communicate success.")),B({},v({},Object(a.createElement)(u.a,{key:"5",isWarning:!0},"Warning Badge")),v({},f({},".slds-badge .slds-theme_warning")),v({},"This is a badge used to communicate a warning.")),B({},v({},Object(a.createElement)(u.a,{key:"6",isError:!0},"Error Badge")),v({},f({},".slds-badge .slds-theme_error")),v({},"This is a badge used to communicate an error.")))),p({id:"Base"},"Base"),Object(a.createElement)(r.a,{toggleCode:!1},Object(g.f)(b)),p({id:"Badges-with-Icons"},"Badges with Icons"),y({},"You can include an icon in your badge. For maximum visual clarity, ",m({href:"/icons/#utility"},"Utility icons")," are the suggested icon type inside badges. You may also choose to put an icon in a badge without text, but in that case, be sure to include assistive text."),y({},"The icon can be aligned to the left or right side of the text. To use an icon, wrap the icon with ",f({},'<span class="slds-badge__icon">'),". Add the classes ",f({},"slds-badge__icon_left")," or ",f({},"slds-badge__icon_right")," to the wrapper for spacing the icon in relation to the text label."),Object(a.createElement)(o.a,null,Object(a.createElement)(s.a,null,Object(a.createElement)("strong",null,"Base: Icon on the left"),Object(a.createElement)(r.a,null,Object(g.f)(h,"with-left-icon"))),Object(a.createElement)(s.a,null,Object(a.createElement)("strong",null,"Base: Icon on the right"),Object(a.createElement)(r.a,null,Object(g.f)(h,"with-right-icon"))),Object(a.createElement)(s.a,null,Object(a.createElement)(r.a,null,Object(g.f)(h,"light-with-left-icon"))),Object(a.createElement)(s.a,null,Object(a.createElement)(r.a,null,Object(g.f)(h,"light-with-right-icon")))),y({},"When using inverse themed badges, add the ",f({},"slds-badge__icon_inverse")," class to ",f({},"slds-badge__icon")," to inverse the icon."),Object(a.createElement)(o.a,null,Object(a.createElement)(s.a,null,Object(a.createElement)("strong",null,"Icon on the left"),Object(a.createElement)(r.a,null,Object(g.f)(h,"inverse-with-left-icon"))),Object(a.createElement)(s.a,null,Object(a.createElement)("strong",null,"Icon on the right"),Object(a.createElement)(r.a,null,Object(g.f)(h,"inverse-with-right-icon")))),p({id:"Badges-with-Nested-Elements"},"Badges with Nested Elements"),y({},"Along with icons, you can have nested textual elements, such as ",f({},"strong"),", ",f({},"em"),", and ",f({},"span")," elements, within a badge. Only ",f({},"inline")," and ",f({},"inline-block")," elements are supported at this time."),Object(a.createElement)(c.a,{title:"Badge with nested element"},Object(a.createElement)(r.a,{toggleCode:!1},Object(a.createElement)(u.a,null,"Component In: ",Object(a.createElement)("em",null,"Lightning")))),p({id:"Styling-Hooks-Overview"},"Styling Hooks Overview"),Object(a.createElement)(d.a,{name:"badges",type:"component"}))},x=function(){return Object(i.a)(S())}}});