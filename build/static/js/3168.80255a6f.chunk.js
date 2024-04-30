"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[3168],{56236:function(n,e,t){t.d(e,{Z:function(){return l}});var r=t(72791),a=(t(66068),t(79096),t(22519));t(36656),t(92444);t(9084),t(37215);var c="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product;"undefined"!==typeof document||c?r.useLayoutEffect:r.useEffect,new WeakMap;var o=t(15341),s=t(80184);const u=["onKeyDown"];const i=r.forwardRef(((n,e)=>{let{onKeyDown:t}=n,r=function(n,e){if(null==n)return{};var t,r,a={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,u);const[c]=(0,o.FT)(Object.assign({tagName:"a"},r)),i=(0,a.Z)((n=>{c.onKeyDown(n),null==t||t(n)}));return((l=r.href)&&"#"!==l.trim()||r.role)&&"button"!==r.role?(0,s.jsx)("a",Object.assign({ref:e},r,{onKeyDown:t})):(0,s.jsx)("a",Object.assign({ref:e},r,c,{onKeyDown:i}));var l}));i.displayName="Anchor";var l=i},15341:function(n,e,t){t.d(e,{FT:function(){return o}});var r=t(72791),a=t(80184);const c=["as","disabled"];function o(n){let{tagName:e,disabled:t,href:r,target:a,rel:c,onClick:o,tabIndex:s=0,type:u}=n;e||(e=null!=r||null!=a||null!=c?"a":"button");const i={tagName:e};if("button"===e)return[{type:u||"button",disabled:t},i];const l=n=>{(t||"a"===e&&function(n){return!n||"#"===n.trim()}(r))&&n.preventDefault(),t?n.stopPropagation():null==o||o(n)};return[{role:"button",disabled:void 0,tabIndex:t?void 0:s,href:"a"===e&&t?void 0:r,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?c:void 0,onClick:l,onKeyDown:n=>{" "===n.key&&(n.preventDefault(),l(n))}},i]}const s=r.forwardRef(((n,e)=>{let{as:t,disabled:r}=n,s=function(n,e){if(null==n)return{};var t,r,a={},c=Object.keys(n);for(r=0;r<c.length;r++)t=c[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,c);const[u,{tagName:i}]=o(Object.assign({tagName:t,disabled:r},s));return(0,a.jsx)(i,Object.assign({},s,u,{ref:e}))}));s.displayName="Button",e.ZP=s},66068:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(72791);function a(){return(0,r.useState)(null)}},79096:function(n,e,t){var r=t(72791);e.Z=function(n){var e=(0,r.useRef)(n);return(0,r.useEffect)((function(){e.current=n}),[n]),e}},22519:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(72791),a=t(79096);function c(n){var e=(0,a.Z)(n);return(0,r.useCallback)((function(){return e.current&&e.current.apply(e,arguments)}),[e])}},36656:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(72791),a=t(22519);function c(n,e,t,c){void 0===c&&(c=!1);var o=(0,a.Z)(t);(0,r.useEffect)((function(){var t="function"===typeof n?n():n;return t.addEventListener(e,o,c),function(){return t.removeEventListener(e,o,c)}}),[n])}},92444:function(n,e,t){t.d(e,{Z:function(){return c}});var r=t(36656),a=t(72791);function c(n,e,t){void 0===t&&(t=!1);var c=(0,a.useCallback)((function(){return document}),[]);return(0,r.Z)(c,n,e,t)}},9084:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(72791);function a(){var n=(0,r.useRef)(!0),e=(0,r.useRef)((function(){return n.current}));return(0,r.useEffect)((function(){return function(){n.current=!1}}),[]),e.current}},37215:function(n,e,t){t.d(e,{Z:function(){return a}});var r=t(72791);function a(n){var e=(0,r.useRef)(null);return(0,r.useEffect)((function(){e.current=n})),e.current}},2461:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(81694),a=t.n(r),c=t(72791),o=t(10162),s=t(56236),u=t(80184);const i=c.forwardRef(((n,e)=>{let{bsPrefix:t,active:r,children:c,className:i,as:l="li",linkAs:f=s.Z,linkProps:d,href:v,title:b,target:p,...m}=n;const x=(0,o.vE)(t,"breadcrumb-item");return(0,u.jsx)(l,{ref:e,...m,className:a()(x,i,{active:r}),"aria-current":r?"page":void 0,children:r?c:(0,u.jsx)(f,{...d,href:v,title:b,target:p,children:c})})}));i.displayName="BreadcrumbItem",i.defaultProps={active:!1,linkProps:{}};var l=i;const f=c.forwardRef(((n,e)=>{let{bsPrefix:t,className:r,listProps:c,children:s,label:i,as:l="nav",...f}=n;const d=(0,o.vE)(t,"breadcrumb");return(0,u.jsx)(l,{"aria-label":i,className:r,ref:e,...f,children:(0,u.jsx)("ol",{...c,className:a()(d,null==c?void 0:c.className),children:s})})}));f.displayName="Breadcrumb",f.defaultProps={label:"breadcrumb",listProps:{}};var d=Object.assign(f,{Item:l})},2677:function(n,e,t){var r=t(81694),a=t.n(r),c=t(72791),o=t(10162),s=t(80184);const u=["xxl","xl","lg","md","sm","xs"];const i=c.forwardRef(((n,e)=>{const[{className:t,...r},{as:c="div",bsPrefix:i,spans:l}]=function(n){let{as:e,bsPrefix:t,className:r,...c}=n;t=(0,o.vE)(t,"col");const s=[],i=[];return u.forEach((n=>{const e=c[n];let r,a,o;delete c[n],"object"===typeof e&&null!=e?({span:r,offset:a,order:o}=e):r=e;const u="xs"!==n?"-".concat(n):"";r&&s.push(!0===r?"".concat(t).concat(u):"".concat(t).concat(u,"-").concat(r)),null!=o&&i.push("order".concat(u,"-").concat(o)),null!=a&&i.push("offset".concat(u,"-").concat(a))})),[{...c,className:a()(r,...s,...i)},{as:e,bsPrefix:t,spans:s}]}(n);return(0,s.jsx)(c,{...r,ref:e,className:a()(t,!l.length&&i)})}));i.displayName="Col",e.Z=i},89743:function(n,e,t){var r=t(81694),a=t.n(r),c=t(72791),o=t(10162),s=t(80184);const u=["xxl","xl","lg","md","sm","xs"],i=c.forwardRef(((n,e)=>{let{bsPrefix:t,className:r,as:c="div",...i}=n;const l=(0,o.vE)(t,"row"),f="".concat(l,"-cols"),d=[];return u.forEach((n=>{const e=i[n];let t;delete i[n],null!=e&&"object"===typeof e?({cols:t}=e):t=e;const r="xs"!==n?"-".concat(n):"";null!=t&&d.push("".concat(f).concat(r,"-").concat(t))})),(0,s.jsx)(c,{ref:e,...i,className:a()(r,l,...d)})}));i.displayName="Row",e.Z=i}}]);
//# sourceMappingURL=3168.80255a6f.chunk.js.map