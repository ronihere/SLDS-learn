var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/datepickers/docs.mdx.js"]=function(e){function t(t){for(var n,l,i=t[0],c=t[1],o=t[2],u=0,p=[];u<i.length;u++)l=i[u],Object.prototype.hasOwnProperty.call(d,l)&&d[l]&&p.push(d[l][0]),d[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(s&&s(t);p.length;)p.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==d[c]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},d={25:0},r=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var s=c;return r.push([781,0]),a()}({0:function(e,t){e.exports=React},20:function(e,t){e.exports=ReactDOM},21:function(e,t){e.exports=JSBeautify},781:function(e,t,a){"use strict";a.r(t),a.d(t,"getElement",(function(){return O})),a.d(t,"getContents",(function(){return j}));var n=a(0),d=a.n(n),r=a(4),l=a(2),i=(a(28),a(45),a(14)),c=a(1),o=a(38),s="height: 25rem;",u=function(e){return d.a.createElement("div",{className:"slds-form slds-form_compound"},d.a.createElement("fieldset",{className:"slds-form-element"},d.a.createElement("legend",{className:"slds-form-element__label slds-form-element__legend"},"Start and End Date"),d.a.createElement("div",{className:"slds-form-element__control"},d.a.createElement("div",{className:"slds-form-element__group"},d.a.createElement("div",{className:"slds-form-element__row"},e.children)))))},p=[{id:"default",label:"Base - Default",demoStyles:s,element:d.a.createElement(u,null,d.a.createElement(o.b,{idPrefix:"rangeDefault_start",labelContent:"Start Date",dateInputId:"".concat("date-input-id-01","-default"),isOpen:!0,todayActive:!0}),d.a.createElement(o.b,{idPrefix:"rangeDefault_end",labelContent:"End Date",dateInputId:"".concat("date-input-id-02","-default")}))}],m=[{id:"start-date",label:"Start date selected",demoStyles:s,element:d.a.createElement(u,null,d.a.createElement(o.b,{idPrefix:"rangeSelected_start",labelContent:"Start Date",dateInputId:"".concat("date-input-id-01","-start_selected"),isOpen:!0,todayActive:!0,dateSelected:"single",dateRange:"week-4",defaultValue:"06/24/2021"}),d.a.createElement(o.b,{idPrefix:"rangeSelected_end",labelContent:"End Date",dateInputId:"".concat("date-input-id-02","-start_selected")}))},{id:"end-date-week",label:"End date selected (Same week)",demoStyles:s,element:d.a.createElement(u,null,d.a.createElement(o.b,{idPrefix:"rangeWeekSame_start",labelContent:"Start Date",dateInputId:"".concat("date-input-id-01","-end_selected"),defaultValue:"06/24/2021"}),d.a.createElement(o.b,{idPrefix:"rangeWeekSame_end",labelContent:"End Date",dateInputId:"".concat("date-input-id-02","-end_selected"),isOpen:!0,todayActive:!0,dateSelected:!0,dateRange:"week-4",defaultValue:"06/27/2020"}))},{id:"end-date-weeks",label:"End date selected (Different week)",demoStyles:s,element:d.a.createElement(u,null,d.a.createElement(o.b,{idPrefix:"rangeWeekDiff_start",labelContent:"Start Date",dateInputId:"".concat("date-input-id-01","-end_selected_diff_week"),defaultValue:"06/24/2021"}),d.a.createElement(o.b,{idPrefix:"rangeWeekDiff_end",labelContent:"End Date",dateInputId:"".concat("date-input-id-02","-end_selected_diff_week"),isOpen:!0,todayActive:!0,dateSelected:!0,dateRange:"week-4-5",dateRangeMulti:!0,defaultValue:"06/30/2020"}))},{id:"today-in-range",label:"Today - In selected range",demoStyles:s,element:d.a.createElement(u,null,d.a.createElement(o.b,{idPrefix:"rangeToday_start",labelContent:"Start Date",dateInputId:"".concat("date-input-id-01","-today_in_range"),defaultValue:"06/24/2021"}),d.a.createElement(o.b,{idPrefix:"rangeToday_end",labelContent:"End Date",dateInputId:"".concat("date-input-id-02","-today_in_range"),isOpen:!0,todayActiveInRange:!0,dateSelected:!0,dateRange:"week-4-5",dateRangeMulti:!0,defaultValue:"06/30/2020"}))},{id:"span-across-month-in-range",label:"Current and adjacent month in selected range",demoStyles:s,element:d.a.createElement(u,null,d.a.createElement(o.b,{idPrefix:"rangeSpanMonth_start",labelContent:"Start Date",dateInputId:"".concat("date-input-id-01","-adjacent_month"),defaultValue:"06/28/2020"}),d.a.createElement(o.b,{idPrefix:"rangeSpanMonth_end",labelContent:"End Date",dateInputId:"".concat("date-input-id-02","-adjacent_month"),isOpen:!0,dateSelected:!0,dateRange:"week-5",defaultValue:"07/04/2020"}))}],b=(o.c,o.b,"".concat("date-input-id-01","-default"),o.b,"".concat("date-input-id-02","-default"),o.c,o.b,"".concat("date-input-id-01","-table-start_selected"),o.b,"".concat("date-input-id-02","-table-start_selected"),o.c,o.b,"".concat("date-input-id-01","-table-end_selected"),o.b,"".concat("date-input-id-02","-table-end_selected"),o.c,o.b,"".concat("date-input-id-01","-table-end_selected_diff_week"),o.b,"".concat("date-input-id-02","-table-end_selected_diff_week"),o.c,o.b,"".concat("date-input-id-01","-table-today_in_range"),o.b,"".concat("date-input-id-02","-table-today_in_range"),o.c,o.b,"".concat("date-input-id-01","-table-adjacent_month"),o.b,"".concat("date-input-id-02","-table-adjacent_month"),r.c.a),f=r.c.code,h=r.c.h2,g=r.c.h3,y=r.c.h4,_=r.c.li,k=r.c.p,S=r.c.strong,w=r.c.ul,O=function(){return Object(n.createElement)(r.b,{},Object(n.createElement)("div",{className:"doc lead"},"A datepicker is a text input to capture a date. You can select a single date, date range or date and time."),Object(n.createElement)(l.a,{exampleOnly:!0,demoStyles:Object(c.e)(o.d)},Object(c.f)(o.d)),h({id:"About-Datepickers"},"About Datepickers"),g({id:"Implementation"},"Implementation"),k({},"The datepicker is a ",b({href:"/components/form-element"},"form element"),", containing a label and text ",b({href:"/components/input"},"input"),", and a dropdown ",b({href:"/components/menus"},"menu"),", containing a grid-based calendar and filters. The form element acts as a trigger for the dropdown."),Object(n.createElement)(i.a,{type:"warning"},Object(n.createElement)("p",null,"Placement of inline form elements inside a data table cell is not supported. Instead, use a button to invoke a popover, which does support form elements.")),k({},"The datepicker has the following markup requirements:"),k({},S({},"Desktop:")),w({},_({},"Add ",f({},".slds-is-open")," to the element with ",f({},".slds-dropdown-trigger")," to invoke the dropdown that contains the datepicker."),_({},"The ",f({},".slds-is-selected")," modifier class is required on the ",f({},"td")," element that has the selected day."),_({},"The ",f({},".slds-is-today")," modifier class is required on the ",f({},"td")," element that is the current day."),_({},"The ",f({},".slds-has-multi-selection")," modifier class is required on the ",f({},"tr")," element that contains multiple days selected in the ",S({},"same")," week."),_({},"The ",f({},".slds-has-multi-row-selection")," modifier class is required on any ",f({},"tr")," element that contains multiple days selected in the ",S({},"multiple")," weeks."),_({},"The ",f({},".slds-is-selected-multi")," modifier class is required on the ",f({},"td")," element that contains a selected day within a range.")),k({},S({},"Mobile:")),w({},_({},"When on mobile, we want to leverage the native date picker by changing the ",f({},"input")," type from ",f({},"text")," to ",f({},"date")),_({},"The ",f({},'input type="date"')," will create an input field allowing a date and time to be easily entered — this includes year, month, day."),_({},"When switching ",f({},'input type="text"')," to ",f({},'input type="date"')," for mobile, we need to remove the ARIA attributes. The native rendering doesn't require these.",w({},_({},"On the element with the class ",f({},"slds-combobox"),", please remove ",f({},'role="combobox"'),", ",f({},"aria-expanded"),", and ",f({},"aria-haspopup"),"."),_({},"On the ",f({},"input")," that we just added ",f({},'type="date"')," to, please remove ",f({},"aria-controls"),", ",f({},"aria-autocomplete"),", and ",f({},'role="textbox"'),".")))),g({id:"Accessibility"},"Accessibility"),y({id:"Markup"},"Markup"),k({},S({},"Dialog:")),w({},_({},"Should act as a focus trap so the user only cycles through the datepicker ",f({},"dialog")," when the datepicker is open")),k({},S({},"Grid:")),w({},_({},"Table must be labelled with ",f({},'role="grid"')," and be appropriately labelled with ",f({},"aria-labelledby")),_({},"Use ",f({},'aria-multiselectable="true"')," to allow for selection of multiple days"),_({},"Should act as a single focus stop")),k({},S({},"Gridcell:")),w({},_({},"All dates should have ",f({},'role="gridcell"')," and ",f({},'aria-selected="false"')," on the ",f({},"gridcell")," by default"),_({},"If a date is selected, ",f({},"aria-selected")," should be set to ",f({},"true")," on the corresponding ",f({},"gridcell")),_({},f({},"aria-current")," is used to indicate which day is today and should be set to ",f({},'aria-current="date"')),_({},f({},"aria-label")," is used to provide the full ",f({},"DD MM YYYY")," text of the date")),k({},S({},"Opening the Datepicker:")),w({},_({},"Mouse user: open the datepicker when a mouse user clicks on the input"),_({},"Keyboard user: only open the datepicker when a keyboard user presses ",f({},"enter")," or ",f({},"space")," on the datepicker button",w({},_({},"Do not open the datepicker when user focus is on the input")))),y({id:"Keyboard-Interactions"},"Keyboard Interactions"),w({},_({},"When the datepicker opens, place user focus on either the currently selected date in the grid or if no date is selected the current day"),_({},f({},"left")," and ",f({},"right")," arrow keys to navigate row"),_({},f({},"up")," and ",f({},"down")," arrow keys to navigate between weeks on the same day"),_({},f({},"home")," and ",f({},"end")," keys to jump to beginning or end of current row"),_({},f({},"pagedown")," and ",f({},"pageup")," to navigate between months"),_({},f({},"alt + pagedown")," and ",f({},"alt + pageup")," to navigate between years"),_({},f({},"enter")," to select date and close datepicker"),_({},f({},"esc")," to close datepicker without choosing a date")),h({id:"Base"},"Base"),Object(n.createElement)(l.a,{demoStyles:Object(c.e)(o.d)},Object(c.f)(o.d)),g({id:"States"},"States"),y({id:"Date-Selected"},"Date Selected"),Object(n.createElement)(l.a,{demoStyles:Object(c.e)(o.e,"datepicker-day-selected")},Object(c.f)(o.e,"datepicker-day-selected")),y({id:"Date-Picker-Has-Error"},"Date Picker Has Error"),Object(n.createElement)(l.a,{demoStyles:Object(c.e)(o.e,"datepicker-with-error")},Object(c.f)(o.e,"datepicker-with-error")),y({id:"Date-Required"},"Date Required"),Object(n.createElement)(l.a,{demoStyles:Object(c.e)(o.e,"datepicker-required")},Object(c.f)(o.e,"datepicker-required")),y({id:"Date-Required-Date-Picker-Has-Error"},"Date Required, Date Picker Has Error"),Object(n.createElement)(l.a,{demoStyles:Object(c.e)(o.e,"datepicker-required-with-error")},Object(c.f)(o.e,"datepicker-required-with-error")),h({id:"Range"},"Range"),Object(n.createElement)(l.a,{demoStyles:Object(c.e)(p)},Object(c.f)(p)),g({id:"States-2"},"States"),y({id:"Start-Date-Selected"},"Start Date Selected"),Object(n.createElement)(l.a,{demoStyles:Object(c.e)(m,"start-date")},Object(c.f)(m,"start-date")),y({id:"End-date-selected-(Same-week)"},"End date selected (Same week)"),Object(n.createElement)(l.a,{demoStyles:Object(c.e)(m,"end-date-week")},Object(c.f)(m,"end-date-week")),y({id:"End-date-selected-(Different-week)"},"End date selected (Different week)"),Object(n.createElement)(l.a,{demoStyles:Object(c.e)(p)},Object(c.f)(p)),y({id:"Today-In-selected-range"},"Today - In selected range"),Object(n.createElement)(l.a,{demoStyles:Object(c.e)(p)},Object(c.f)(p)),y({id:"Current-And-Adjacent-Month-In-Selected-Range"},"Current And Adjacent Month In Selected Range"),Object(n.createElement)(l.a,{demoStyles:Object(c.e)(p)},Object(c.f)(p)))},j=function(){return Object(r.a)(O())}}});