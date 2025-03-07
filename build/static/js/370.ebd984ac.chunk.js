"use strict";(self.webpackChunkhyper_react=self.webpackChunkhyper_react||[]).push([[370],{370:(e,t,n)=>{n.d(t,{A:()=>Y});var o=n(2631),r=n(5173),s=n.n(r),l=n(5043),a=n(9422),i=(n(6440),n(7121)),c=n(8293),u=n(9791),p=n(8139),d=n.n(p),f=n(7950),h=n(8457),v=n(3539),m=n(2188),w=n(753),g=n(182),y=n(8894),A=n(5970);const E=()=>{};const b=function(e,t){let{disabled:n,clickTrigger:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=t||E;(0,A.A)(e,r,{disabled:n,clickTrigger:o});const s=(0,y.A)((e=>{(0,u.v$)(e)&&r(e)}));(0,l.useEffect)((()=>{if(n||null==e)return;const t=(0,g.A)((0,A.j)(e));let o=(t.defaultView||window).event;const r=(0,w.A)(t,"keyup",(e=>{e!==o?s(e):o=void 0}));return()=>{r()}}),[e,n,s])};var x=n(2504),O=n(5978),C=n(9576);const P=l.forwardRef(((e,t)=>{const{flip:n,offset:o,placement:r,containerPadding:s,popperConfig:a={},transition:i,runTransition:c}=e,[u,p]=(0,h.A)(),[d,w]=(0,h.A)(),g=(0,v.A)(p,t),y=(0,x.A)(e.container),A=(0,x.A)(e.target),[E,P]=(0,l.useState)(!e.show),T=(0,m.A)(A,u,(0,O.Ay)({placement:r,enableEvents:!!e.show,containerPadding:s||5,flip:n,offset:o,arrowElement:d,popperConfig:a}));e.show&&E&&P(!1);const k=e.show||!E;if(b(u,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!k)return null;const{onExit:N,onExiting:j,onEnter:R,onEntering:F,onEntered:_}=e;let U=e.children(Object.assign({},T.attributes.popper,{style:T.styles.popper,ref:g}),{popper:T,placement:r,show:!!e.show,arrowProps:Object.assign({},T.attributes.arrow,{style:T.styles.arrow,ref:w})});return U=(0,C.Yc)(i,c,{in:!!e.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:U,onExit:N,onExiting:j,onExited:function(){P(!0),e.onExited&&e.onExited(...arguments)},onEnter:R,onEntering:F,onEntered:_}),y?f.createPortal(U,y):null}));P.displayName="Overlay";const T=P;var k=n(1456),N=n(4723),j=n(5486),R=n(7852),F=n(579);const _=l.forwardRef(((e,t)=>{let{className:n,bsPrefix:o,as:r="div",...s}=e;return o=(0,R.oU)(o,"popover-header"),(0,F.jsx)(r,{ref:t,className:d()(n,o),...s})}));_.displayName="PopoverHeader";const U=_,D=l.forwardRef(((e,t)=>{let{className:n,bsPrefix:o,as:r="div",...s}=e;return o=(0,R.oU)(o,"popover-body"),(0,F.jsx)(r,{ref:t,className:d()(n,o),...s})}));D.displayName="PopoverBody";const M=D;var S=n(6213),I=n(6330);const B=l.forwardRef(((e,t)=>{let{bsPrefix:n,placement:o="right",className:r,style:s,children:l,body:a,arrowProps:i,hasDoneInitialMeasure:c,popper:u,show:p,...f}=e;const h=(0,R.oU)(n,"popover"),v=(0,R.Wz)(),[m]=(null==o?void 0:o.split("-"))||[],w=(0,S.G)(m,v);let g=s;return p&&!c&&(g={...s,...(0,I.A)(null==u?void 0:u.strategy)}),(0,F.jsxs)("div",{ref:t,role:"tooltip",style:g,"x-placement":m,className:d()(r,h,m&&`bs-popover-${w}`),...f,children:[(0,F.jsx)("div",{className:"popover-arrow",...i}),a?(0,F.jsx)(M,{children:l}):l]})})),H=Object.assign(B,{Header:U,Body:M,POPPER_OFFSET:[0,8]});var $=n(615);var G=n(8072),z=n(4586);const L=l.forwardRef(((e,t)=>{let{children:n,transition:o=G.A,popperConfig:r={},rootClose:s=!1,placement:a="top",show:i=!1,...u}=e;const p=(0,l.useRef)({}),[f,h]=(0,l.useState)(null),[v,m]=function(e){const t=(0,l.useRef)(null),n=(0,R.oU)(void 0,"popover"),o=(0,R.oU)(void 0,"tooltip"),r=(0,l.useMemo)((()=>({name:"offset",options:{offset:()=>{if(e)return e;if(t.current){if((0,j.A)(t.current,n))return H.POPPER_OFFSET;if((0,j.A)(t.current,o))return $.A.TOOLTIP_OFFSET}return[0,0]}}})),[e,n,o]);return[t,[r]]}(u.offset),w=(0,c.A)(t,v),g=!0===o?G.A:o||void 0,y=(0,k.A)((e=>{h(e),null==r||null==r.onFirstUpdate||r.onFirstUpdate(e)}));return(0,N.A)((()=>{f&&u.target&&(null==p.current.scheduleUpdate||p.current.scheduleUpdate())}),[f,u.target]),(0,l.useEffect)((()=>{i||h(null)}),[i]),(0,F.jsx)(T,{...u,ref:w,popperConfig:{...r,modifiers:m.concat(r.modifiers||[]),onFirstUpdate:y},transition:g,rootClose:s,placement:a,show:i,children:(e,t)=>{let{arrowProps:s,popper:a,show:i}=t;var c;!function(e,t){const{ref:n}=e,{ref:o}=t;e.ref=n.__wrapped||(n.__wrapped=e=>n((0,z.A)(e))),t.ref=o.__wrapped||(o.__wrapped=e=>o((0,z.A)(e)))}(e,s);const u=null==a?void 0:a.placement,h=Object.assign(p.current,{state:null==a?void 0:a.state,scheduleUpdate:null==a?void 0:a.update,placement:u,outOfBoundaries:(null==a||null==(c=a.state)||null==(c=c.modifiersData.hide)?void 0:c.isReferenceHidden)||!1,strategy:r.strategy}),v=!!f;return"function"===typeof n?n({...e,placement:u,show:i,...!o&&i&&{className:"show"},popper:h,arrowProps:s,hasDoneInitialMeasure:v}):l.cloneElement(n,{...e,placement:u,arrowProps:s,popper:h,hasDoneInitialMeasure:v,className:d()(n.props.className,!o&&i&&"show"),style:{...n.props.style,...e.style}})}})}));L.displayName="Overlay";const W=L;function V(e,t,n){const[r]=t,s=r.currentTarget,l=r.relatedTarget||r.nativeEvent[n];l&&l===s||(0,o.A)(s,l)||e(...t)}s().oneOf(["click","hover","focus"]);const Y=e=>{let{trigger:t=["hover","focus"],overlay:n,children:o,popperConfig:r={},show:s,defaultShow:p=!1,onToggle:d,delay:f,placement:h,flip:v=h&&-1!==h.indexOf("auto"),...m}=e;const w=(0,l.useRef)(null),g=(0,c.A)(w,(0,u.am)(o)),y=(0,a.A)(),A=(0,l.useRef)(""),[E,b]=(0,i.iC)(s,p,d),x=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(f),{onFocus:O,onBlur:C,onClick:P}="function"!==typeof o?l.Children.only(o).props:{},T=(0,l.useCallback)((()=>{y.clear(),A.current="show",x.show?y.set((()=>{"show"===A.current&&b(!0)}),x.show):b(!0)}),[x.show,b,y]),k=(0,l.useCallback)((()=>{y.clear(),A.current="hide",x.hide?y.set((()=>{"hide"===A.current&&b(!1)}),x.hide):b(!1)}),[x.hide,b,y]),N=(0,l.useCallback)((function(){T(),null==O||O(...arguments)}),[T,O]),j=(0,l.useCallback)((function(){k(),null==C||C(...arguments)}),[k,C]),R=(0,l.useCallback)((function(){b(!E),null==P||P(...arguments)}),[P,b,E]),_=(0,l.useCallback)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];V(T,t,"fromElement")}),[T]),U=(0,l.useCallback)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];V(k,t,"toElement")}),[k]),D=null==t?[]:[].concat(t),M={ref:e=>{g((0,z.A)(e))}};return-1!==D.indexOf("click")&&(M.onClick=R),-1!==D.indexOf("focus")&&(M.onFocus=N,M.onBlur=j),-1!==D.indexOf("hover")&&(M.onMouseOver=_,M.onMouseOut=U),(0,F.jsxs)(F.Fragment,{children:["function"===typeof o?o(M):(0,l.cloneElement)(o,M),(0,F.jsx)(W,{...m,show:E,onHide:k,flip:v,placement:h,popperConfig:r,target:w.current,children:n})]})}},615:(e,t,n)=>{n.d(t,{A:()=>p});var o=n(8139),r=n.n(o),s=n(5043),l=n(7852),a=n(6213),i=n(6330),c=n(579);const u=s.forwardRef(((e,t)=>{let{bsPrefix:n,placement:o="right",className:s,style:u,children:p,arrowProps:d,hasDoneInitialMeasure:f,popper:h,show:v,...m}=e;n=(0,l.oU)(n,"tooltip");const w=(0,l.Wz)(),[g]=(null==o?void 0:o.split("-"))||[],y=(0,a.G)(g,w);let A=u;return v&&!f&&(A={...u,...(0,i.A)(null==h?void 0:h.strategy)}),(0,c.jsxs)("div",{ref:t,style:A,role:"tooltip","x-placement":g,className:r()(s,n,`bs-tooltip-${y}`),...m,children:[(0,c.jsx)("div",{className:"tooltip-arrow",...d}),(0,c.jsx)("div",{className:`${n}-inner`,children:p})]})}));u.displayName="Tooltip";const p=Object.assign(u,{TOOLTIP_OFFSET:[0,6]})},6213:(e,t,n)=>{n.d(t,{G:()=>r});var o=n(5043);o.Component;function r(e,t){let n=e;return"left"===e?n=t?"end":"start":"right"===e&&(n=t?"start":"end"),n}},6330:(e,t,n)=>{function o(){return{position:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"absolute",top:"0",left:"0",opacity:"0",pointerEvents:"none"}}n.d(t,{A:()=>o})},9422:(e,t,n)=>{n.d(t,{A:()=>a});var o=n(5043);var r=n(9109);const s=2**31-1;function l(e,t,n){const o=n-Date.now();e.current=o<=s?setTimeout(t,o):setTimeout((()=>l(e,t,n)),s)}function a(){const e=function(){const e=(0,o.useRef)(!0),t=(0,o.useRef)((()=>e.current));return(0,o.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}(),t=(0,o.useRef)();return(0,r.A)((()=>clearTimeout(t.current))),(0,o.useMemo)((()=>{const n=()=>clearTimeout(t.current);return{set:function(o){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e()&&(n(),r<=s?t.current=setTimeout(o,r):l(t,o,Date.now()+r))},clear:n,handleRef:t}}),[])}}}]);
//# sourceMappingURL=370.ebd984ac.chunk.js.map