"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[8141],{75184:function(e,a,t){t(72791);var s=t(89743),r=t(2677),i=t(2461),n=t(80184);a.Z=e=>(0,n.jsx)(s.Z,{children:(0,n.jsx)(r.Z,{children:(0,n.jsxs)("div",{className:"page-title-box",children:[(0,n.jsx)("h4",{className:"page-title",children:e.title}),(0,n.jsx)("div",{className:"page-title-right",children:(0,n.jsxs)(i.Z,{listProps:{className:"m-0"},children:[(0,n.jsx)(i.Z.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map(((e,a)=>e.active?(0,n.jsx)(i.Z.Item,{active:!0,children:e.label},a):(0,n.jsx)(i.Z.Item,{href:e.path,children:e.label},a)))]})})]})})})},48141:function(e,a,t){t.r(a);var s=t(72791),r=t(89743),i=t(2677),n=t(9140),c=t(43360),o=t(74330),l=t(75184),d=t(24506),m=t(80184);const u=e=>{let{pricingPlans:a}=e;return(0,m.jsx)(r.Z,{children:(a||[]).map(((e,a)=>(0,m.jsx)(i.Z,{lg:4,children:(0,m.jsx)(n.Z,{className:"card-pricing",children:(0,m.jsxs)(n.Z.Body,{className:"p-4",children:[(0,m.jsxs)("div",{className:"d-flex",children:[(0,m.jsxs)("div",{className:"flex-grow-1",children:[(0,m.jsx)("h5",{className:"mt-0 mb-2 fs-16",children:e.name}),(0,m.jsxs)("h2",{className:"mt-0 mb-2",children:["$",e.price," ",(0,m.jsxs)("span",{className:"fs-14",children:["/ ",e.duration]})]})]}),(0,m.jsx)("div",{className:"align-self-center flex-shrink-0",children:(0,m.jsx)(o.Z,{icon:e.icon,className:"icon-dual icon-lg"})})]}),(0,m.jsx)("ul",{className:"card-pricing-features text-muted border-top pt-2 mt-2 ps-0 list-unstyled",children:(e.features||[]).map(((e,a)=>(0,m.jsxs)("li",{children:[(0,m.jsx)("i",{className:"uil uil-check text-success fs-15 me-1"}),e]},a)))}),(0,m.jsx)("div",{className:"mt-5 text-center",children:(0,m.jsxs)(c.Z,{variant:e.isRecommended?"primary":"soft-primary",className:"px-sm-4",children:[(0,m.jsx)("i",{className:"uil uil-arrow-right me-1"}),"Buy Now for $",e.price]})})]})})},a)))})};a.default=()=>(0,m.jsxs)(s.Fragment,{children:[(0,m.jsx)(l.Z,{breadCrumbItems:[{label:"Pages",path:"/pages/pricing"},{label:"Pricing",path:"/pages/pricing",active:!0}],title:"Pricing"}),(0,m.jsx)(r.Z,{className:"justify-content-center",children:(0,m.jsxs)(i.Z,{xl:10,children:[(0,m.jsxs)("div",{className:"text-center my-4",children:[(0,m.jsx)("h3",{children:"Simple pricing for Everyone"}),(0,m.jsx)("p",{className:"text-muted",children:"Fully functional accounts are starting from $19/month only"})]}),(0,m.jsx)(u,{pricingPlans:d.dh})]})})]})},24506:function(e,a,t){t.d(a,{NF:function(){return s},ZF:function(){return i},dh:function(){return r}});const s={invoice_id:"000028",customer:" Greeva Navadiya",notes:"All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above",invoice_date:"Jul 17, 2019",due_date:"Jul 27,2019",address:{owner:"Greeva Navadiya",line_1:"795 Folsom Ave, Suite 600",city:"San Francisco",state:"CA",zip:94107,phone:"(123) 456-7890"},items:[{id:1,name:"Web Design",description:"2 Pages static website - my website",hours:22,hour_rate:30,total:660},{id:2,name:"Software Development",description:"Invoice editor software - AB'c Software",hours:112.5,hour_rate:35,total:3937.5}],sub_total:4597.5,discount:459.75,total:4137.75},r=[{id:1,name:"Professional Pack",icon:"users",price:19,duration:"Month",features:["10 GB Storage","500 GB Bandwidth","No Domain","Email Support","24x7 Support"],isRecommended:!1},{id:2,name:"Business Pack",icon:"briefcase",price:29,duration:"Month",features:["50 GB Storage","900 GB Bandwidth","2 Domain","Email Support","24x7 Support"],isRecommended:!0},{id:3,name:"Enterprise Pack",icon:"shopping-bag",price:49,duration:"Month",features:["100 GB Storage","Unlimited Bandwidth","Unlimited Domain","Email Support","24x7 Support"],isRecommended:!1}],i=[{icon:"uil-presentation-lines-alt",title:"Why is the Site Down?",desc:"If several languages coalesce, the grammar of the resulting language is more simple."},{icon:"uil-clock-eight",title:"What is the Downtime?",desc:"Everyone realizes why a new common language would be desirable one could refuse."},{icon:"uil-envelope",title:"Do you need Support?",desc:"You need to be sure there isn't anything embar.. Please contact us via email no-reply@domain.com"}]},43360:function(e,a,t){var s=t(81694),r=t.n(s),i=t(72791),n=t(15341),c=t(10162),o=t(80184);const l=i.forwardRef(((e,a)=>{let{as:t,bsPrefix:s,variant:i,size:l,active:d,className:m,...u}=e;const p=(0,c.vE)(s,"btn"),[h,{tagName:f}]=(0,n.FT)({tagName:t,...u}),x=f;return(0,o.jsx)(x,{...u,...h,ref:a,className:r()(m,p,d&&"active",i&&"".concat(p,"-").concat(i),l&&"".concat(p,"-").concat(l),u.href&&u.disabled&&"disabled")})}));l.displayName="Button",l.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=l},9140:function(e,a,t){t.d(a,{Z:function(){return P}});var s=t(81694),r=t.n(s),i=t(72791),n=t(10162),c=t(66543),o=t(27472),l=t(80184);const d=i.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,variant:i,as:c="img",...o}=e;const d=(0,n.vE)(t,"card-img");return(0,l.jsx)(c,{ref:a,className:r()(i?"".concat(d,"-").concat(i):d,s),...o})}));d.displayName="CardImg";var m=d,u=t(96040);const p=i.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,as:c="div",...o}=e;const d=(0,n.vE)(t,"card-header"),m=(0,i.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,l.jsx)(u.Z.Provider,{value:m,children:(0,l.jsx)(c,{ref:a,...o,className:r()(s,d)})})}));p.displayName="CardHeader";var h=p;const f=(0,o.Z)("h5"),x=(0,o.Z)("h6"),v=(0,c.Z)("card-body"),g=(0,c.Z)("card-title",{Component:f}),b=(0,c.Z)("card-subtitle",{Component:x}),N=(0,c.Z)("card-link",{Component:"a"}),j=(0,c.Z)("card-text",{Component:"p"}),y=(0,c.Z)("card-footer"),Z=(0,c.Z)("card-img-overlay"),w=i.forwardRef(((e,a)=>{let{bsPrefix:t,className:s,bg:i,text:c,border:o,body:d,children:m,as:u="div",...p}=e;const h=(0,n.vE)(t,"card");return(0,l.jsx)(u,{ref:a,...p,className:r()(s,h,i&&"bg-".concat(i),c&&"text-".concat(c),o&&"border-".concat(o)),children:d?(0,l.jsx)(v,{children:m}):m})}));w.displayName="Card",w.defaultProps={body:!1};var P=Object.assign(w,{Img:m,Title:g,Subtitle:b,Body:v,Link:N,Text:j,Header:h,Footer:y,ImgOverlay:Z})},96040:function(e,a,t){const s=t(72791).createContext(null);s.displayName="CardHeaderContext",a.Z=s},66543:function(e,a,t){t.d(a,{Z:function(){return d}});var s=t(81694),r=t.n(s),i=/-(.)/g;var n=t(72791),c=t(10162),o=t(80184);const l=e=>{return e[0].toUpperCase()+(a=e,a.replace(i,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function d(e){let{displayName:a=l(e),Component:t,defaultProps:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=n.forwardRef(((a,s)=>{let{className:i,bsPrefix:n,as:l=t||"div",...d}=a;const m=(0,c.vE)(n,e);return(0,o.jsx)(l,{ref:s,className:r()(i,m),...d})}));return i.defaultProps=s,i.displayName=a,i}},27472:function(e,a,t){var s=t(72791),r=t(81694),i=t.n(r),n=t(80184);a.Z=e=>s.forwardRef(((a,t)=>(0,n.jsx)("div",{...a,ref:t,className:i()(a.className,e)})))}}]);
//# sourceMappingURL=8141.f87f6545.chunk.js.map