"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[4850],{33976:function(e,l,a){var s=a(72791),t=a(59513),r=a.n(t),c=a(81694),n=a.n(c),d=a(80184);const i=(0,s.forwardRef)(((e,l)=>(0,d.jsx)("input",{type:"text",className:n()("form-control",e.inputClass),onClick:e.onClick,value:e.value,onChange:()=>{console.log("date value changed")},ref:l}))),m=(0,s.forwardRef)(((e,l)=>(0,d.jsxs)("div",{className:"input-group input-group-sm",ref:l,children:[(0,d.jsx)("input",{type:"text",className:n()("form-control",e.inputClass),onClick:e.onClick,value:e.value,readOnly:!0}),(0,d.jsx)("span",{className:"input-group-text bg-blue border-blue text-white",children:(0,d.jsx)("i",{className:"mdi mdi-calendar-range"})})]})));l.Z=e=>{const l=!0===(e.hideAddon||!1)?(0,d.jsx)(i,{inputClass:e.inputClass}):(0,d.jsx)(m,{inputClass:e.inputClass});return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(r(),{calendarClassName:e.calendarClassName||"shadow",selectsRange:e.selectsRange,startDate:e.startDate,endDate:e.endDate,selected:e.value,onChange:l=>e.onChange(l),customInput:l,timeIntervals:e.tI,showTimeSelect:e.showTimeSelect,timeFormat:e.timeFormat||"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat||"MM/dd/yyyy",minDate:e.minDate,maxDate:e.maxDate,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})}},75184:function(e,l,a){a(72791);var s=a(89743),t=a(2677),r=a(2461),c=a(80184);l.Z=e=>(0,c.jsx)(s.Z,{children:(0,c.jsx)(t.Z,{children:(0,c.jsxs)("div",{className:"page-title-box",children:[(0,c.jsx)("h4",{className:"page-title",children:e.title}),(0,c.jsx)("div",{className:"page-title-right",children:(0,c.jsxs)(r.Z,{listProps:{className:"m-0"},children:[(0,c.jsx)(r.Z.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map(((e,l)=>e.active?(0,c.jsx)(r.Z.Item,{active:!0,children:e.label},l):(0,c.jsx)(r.Z.Item,{href:e.path,children:e.label},l)))]})})]})})})},96607:function(e,l,a){a.r(l);var s=a(72791),t=a(9140),r=a(89743),c=a(2677),n=a(11087),d=a(78291),i=a(29375),m=(a(48901),a(13587)),h=a.n(m),o=a(75184),x=a(33976),j=a(80184);const b=()=>(0,j.jsx)(t.Z,{children:(0,j.jsxs)(t.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title",children:(0,j.jsx)(n.rU,{rel:"noreferrer",to:{pathname:"https://github.com/JedWatson/react-select"},target:"_blank",children:"React select"})}),(0,j.jsx)("p",{className:"mb-1 mt-3 fw-bold",children:"Single Selection"}),(0,j.jsx)("p",{className:"text-muted fs-14",children:"React-Select based Select element"}),(0,j.jsx)(d.ZP,{className:"react-select react-select-container",classNamePrefix:"react-select",options:[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}]}),(0,j.jsx)("p",{className:"mb-1 mt-3 fw-bold",children:"Multiple Selection"}),(0,j.jsx)("p",{className:"text-muted fs-14",children:"React-Select based Select (Multiple) element"}),(0,j.jsx)(d.ZP,{isMulti:!0,options:[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],className:"react-select react-select-container",classNamePrefix:"react-select"})]})}),p=()=>{const[e,l]=(0,s.useState)([]),[a,r]=(0,s.useState)([]),c=[{id:1,value:"chocolate",label:"Chocolate"},{id:2,value:"strawberry",label:"Strawberry"},{id:3,value:"vanilla",label:"Vanilla"}];return(0,j.jsx)(t.Z,{children:(0,j.jsxs)(t.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title",children:(0,j.jsx)(n.rU,{rel:"noreferrer",to:{pathname:"http://ericgio.github.io/react-bootstrap-typeahead/"},target:"_blank",children:"Typeahead"})}),(0,j.jsx)("p",{className:"mb-1 mt-3 fw-bold",children:"Single Selection"}),(0,j.jsx)("p",{className:"text-muted fs-14",children:"Typeahead based Select element"}),(0,j.jsx)(i.pY,{id:"select2",labelKey:"label",multiple:!1,onChange:e=>{l(e)},options:c,placeholder:"Choose a state...",selected:e}),(0,j.jsx)("p",{className:"mb-1 mt-3 fw-bold",children:"Multiple Selection"}),(0,j.jsx)("p",{className:"text-muted fs-14",children:"Typeahead based Select (Multiple) element"}),(0,j.jsx)(i.pY,{id:"select3",labelKey:"label",multiple:!0,onChange:e=>{r(e)},options:c,placeholder:"Choose a state...",selected:a})]})})},u=()=>{const[e,l]=(0,s.useState)(new Date),a=e=>{e&&l(e)};return(0,j.jsx)(t.Z,{children:(0,j.jsxs)(t.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title",children:"Date & Time Picker"}),(0,j.jsxs)("p",{className:"text-muted fs-14",children:["A simple date picker using"," ",(0,j.jsx)(n.rU,{target:"_blank",rel:"noreferrer",to:{pathname:"https://reactdatepicker.com/"},children:"ReactJS Datepicker"})]}),(0,j.jsxs)(r.Z,{children:[(0,j.jsx)(c.Z,{lg:6,children:(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)("label",{className:"form-label",children:"Single Date"})," ",(0,j.jsx)("br",{}),(0,j.jsx)(x.Z,{hideAddon:!0,value:e,onChange:e=>{a(e)}})]})}),(0,j.jsx)(c.Z,{lg:6,children:(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)("label",{className:"form-label",children:"Single Date with multiple months"})," ",(0,j.jsx)("br",{}),(0,j.jsx)(x.Z,{hideAddon:!0,monthsShown:2,value:e,onChange:e=>{a(e)}})]})})]}),(0,j.jsxs)(r.Z,{children:[(0,j.jsx)(c.Z,{lg:6,children:(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)("label",{className:"form-label",children:"Custom date format"})," ",(0,j.jsx)("br",{}),(0,j.jsx)(x.Z,{hideAddon:!0,dateFormat:"yyyy-MM-dd",value:e,onChange:e=>{a(e)}})]})}),(0,j.jsx)(c.Z,{lg:6,children:(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)("label",{className:"form-label",children:"Specific date range"})," ",(0,j.jsx)("br",{}),(0,j.jsx)(x.Z,{hideAddon:!0,minDate:new Date,maxDate:new Date((new Date).setDate((new Date).getDate()+7)),value:e,onChange:e=>{a(e)}})]})})]}),(0,j.jsxs)(r.Z,{children:[(0,j.jsx)(c.Z,{lg:6,children:(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)("label",{className:"form-label",children:"Select Time"})," ",(0,j.jsx)("br",{}),(0,j.jsx)(x.Z,{hideAddon:!0,showTimeSelect:!0,timeFormat:"HH:mm",tI:60,dateFormat:"MMMM d, yyyy h:mm aa",timeCaption:"time",value:e,onChange:e=>{a(e)}})]})}),(0,j.jsx)(c.Z,{lg:6,children:(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)("label",{className:"form-label",children:"Time only"})," ",(0,j.jsx)("br",{}),(0,j.jsx)(x.Z,{hideAddon:!0,showTimeSelect:!0,showTimeSelectOnly:!0,tI:60,dateFormat:"h:mm aa",timeCaption:"Time",value:e,onChange:e=>{a(e)}})]})})]})]})})},N=()=>(0,j.jsx)(t.Z,{children:(0,j.jsxs)(t.Z.Body,{children:[(0,j.jsx)("h4",{className:"header-title",children:"Input Masks"}),(0,j.jsxs)("p",{className:"text-muted fs-14",children:["Input masks by"," ",(0,j.jsx)(n.rU,{target:"_blank",rel:"noreferrer",to:{pathname:"https://github.com/text-mask/text-mask/tree/master/react#readme"},children:"react-text-mask"})]}),(0,j.jsxs)(r.Z,{children:[(0,j.jsx)(c.Z,{lg:6,children:(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)("label",{className:"form-label",children:"Phone Number with Area Code"})," ",(0,j.jsx)("br",{}),(0,j.jsx)(h(),{mask:["(",/[1-9]/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholder:"(__) ____-____",className:"form-control"})]})}),(0,j.jsx)(c.Z,{lg:6,children:(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)("label",{className:"form-label",children:"US Phone Number"})," ",(0,j.jsx)("br",{}),(0,j.jsx)(h(),{mask:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],placeholder:"(___) ___-____",className:"form-control"})]})})]}),(0,j.jsxs)(r.Z,{children:[(0,j.jsx)(c.Z,{lg:6,children:(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)("label",{className:"form-label",children:"Date"})," ",(0,j.jsx)("br",{}),(0,j.jsx)(h(),{mask:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/],placeholder:"__/__/____",className:"form-control"})]})}),(0,j.jsx)(c.Z,{lg:6,children:(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)("label",{className:"form-label",children:"Time"})," ",(0,j.jsx)("br",{}),(0,j.jsx)(h(),{mask:[/\d/,/\d/,":",/\d/,/\d/,":",/\d/,/\d/],placeholder:"__:__:__",className:"form-control"})]})})]})]})});l.default=()=>(0,j.jsxs)(s.Fragment,{children:[(0,j.jsx)(o.Z,{breadCrumbItems:[{label:"Forms",path:"/forms/advanced"},{label:"Form Advanced",path:"/forms/advanced",active:!0}],title:"Form Advanced"}),(0,j.jsxs)(r.Z,{children:[(0,j.jsx)(c.Z,{lg:6,children:(0,j.jsx)(b,{})}),(0,j.jsx)(c.Z,{lg:6,children:(0,j.jsx)(p,{})})]}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(c.Z,{children:(0,j.jsx)(u,{})})}),(0,j.jsx)(r.Z,{children:(0,j.jsx)(c.Z,{children:(0,j.jsx)(N,{})})})]})}}]);
//# sourceMappingURL=4850.1a99c969.chunk.js.map