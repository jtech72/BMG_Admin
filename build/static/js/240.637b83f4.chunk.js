"use strict";(self.webpackChunkhyper_react=self.webpackChunkhyper_react||[]).push([[240],{2740:e=>{e.exports=function(e,t,s,n,a,l,r,i){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var o=[s,n,a,l,r,i],d=0;(c=new Error(t.replace(/%s/g,(function(){return o[d++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},4476:(e,t,s)=>{s.d(t,{A:()=>r});var n=s(5043),a=s(5475),l=s(579);const r=e=>{let{pageIndex:t,pageSize:s,totalPages:r,setPageIndex:i,onChangePageSize:c}=e;return(0,n.useEffect)((()=>{t>r&&i(Math.max(1,r))}),[t,r,i]),(0,l.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1 pt-2",children:[(0,l.jsxs)("div",{className:"d-inline-block me-3",children:[(0,l.jsx)("label",{className:"me-1",children:"Display :"}),(0,l.jsx)("select",{value:s,onChange:e=>{const t=Number(e.target.value);c(t),i(1)},className:"form-select d-inline-block w-auto",children:[10,20,50,100].map((e=>(0,l.jsx)("option",{value:e,children:e},e)))})]}),(0,l.jsxs)("span",{className:"me-3",children:["Page ",(0,l.jsxs)("strong",{children:[t," of ",r]})]}),(0,l.jsx)("label",{children:"Go to page: "}),(0,l.jsx)("input",{type:"number",placeholder:`${t}`,min:"1",max:r,onChange:e=>{const t=Number(e.target.value);t>=1&&t<=r&&i(t)},className:"form-control ms-1 d-inline-block",style:{width:"80px"}}),(0,l.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0 pe-4",children:[t>1&&(0,l.jsx)("li",{className:"page-item",onClick:()=>i(t-1),children:(0,l.jsx)(a.N_,{to:"#",className:"page-link",children:"Previous"})}),Array.from({length:r}).map(((e,s)=>{const n=s+1,c=n===t;return r<=5||n>=t-1&&n<=t+1||(1===n||n===r)?(0,l.jsx)("li",{className:"page-item "+(c?"active":""),onClick:()=>i(n),children:(0,l.jsx)(a.N_,{to:"#",className:"page-link",children:n})},n):2===n&&t>=5||n===r-1&&t<=r-4?(0,l.jsx)("li",{className:"page-item disabled",children:(0,l.jsx)(a.N_,{to:"#",className:"page-link px-0",children:"..."})},n):null})),t<r&&(0,l.jsx)("li",{className:"page-item",onClick:()=>i(t+1),children:(0,l.jsx)(a.N_,{to:"#",className:"page-link",children:"Next"})})]})]})}},5009:(e,t,s)=>{s.d(t,{A:()=>i});s(5043);var n=s(1072),a=s(8602),l=s(9397),r=s(579);const i=e=>(0,r.jsx)(n.A,{children:(0,r.jsx)(a.A,{children:(0,r.jsxs)("div",{className:"page-title-box",children:[(0,r.jsx)("div",{className:"page-title-right",children:(0,r.jsxs)(l.A,{listProps:{className:"m-0"},children:[(0,r.jsx)(l.A.Item,{href:"/",children:"Dashboard"}),e.breadCrumbItems.map(((e,t)=>e.active?(0,r.jsx)(l.A.Item,{active:!0,style:{color:"#703133"},children:e.label},t):(0,r.jsx)(l.A.Item,{href:e.path,children:e.label},t)))]})}),(0,r.jsx)("h4",{className:"page-title",style:{color:"#703133"},children:e.title})]})})})},5948:(e,t,s)=>{s.d(t,{N7:()=>r,Rh:()=>l});s(5043);var n=s(2942),a=s(579);const l=()=>(0,a.jsx)("div",{style:{height:"50vh",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)(n.IN,{strokeColor:"grey",strokeWidth:"4",animationDuration:"0.75",width:"90",visible:!0})}),r=()=>(0,a.jsx)("div",{className:" d-flex justify-content-center align-items-center w-100",children:(0,a.jsx)(n.ul,{visible:!0,height:"25",width:"25",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#fff","#fff","#fff","#fff","#fff"]})})},7121:(e,t,s)=>{s.d(t,{Zw:()=>o,iC:()=>c});var n=s(8168),a=s(8587),l=s(5043);s(2740);function r(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function i(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var n=s.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function c(e,t,s){var n=(0,l.useRef)(void 0!==e),a=(0,l.useState)(t),r=a[0],i=a[1],c=void 0!==e,o=n.current;return n.current=c,!c&&o&&r!==t&&i(t),[c?e:r,(0,l.useCallback)((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];s&&s.apply(void 0,[e].concat(n)),i(e)}),[s])]}function o(e,t){return Object.keys(t).reduce((function(s,l){var o,d=s,u=d[r(l)],x=d[l],h=(0,a.A)(d,[r(l),l].map(i)),p=t[l],m=c(x,u,e[p]),v=m[0],j=m[1];return(0,n.A)({},h,((o={})[l]=v,o[p]=j,o))}),e)}function d(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function u(e){this.setState(function(t){var s=this.constructor.getDerivedStateFromProps(e,t);return null!==s&&void 0!==s?s:null}.bind(this))}function x(e,t){try{var s=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(s,n)}finally{this.props=s,this.state=n}}d.__suppressDeprecationWarning=!0,u.__suppressDeprecationWarning=!0,x.__suppressDeprecationWarning=!0},7993:(e,t,s)=>{s.d(t,{A:()=>A});var n=s(1456),a=s(5043);const l=function(e,t){const s=(0,a.useRef)(!0);(0,a.useEffect)((()=>{if(!s.current)return e();s.current=!1}),t)};var r=s(8232),i=s(9422),c=s(7071),o=s(8139),d=s.n(o),u=s(7121),x=s(7852),h=s(579);const p=a.forwardRef(((e,t)=>{let{className:s,bsPrefix:n,as:a="div",...l}=e;return n=(0,x.oU)(n,"carousel-caption"),(0,h.jsx)(a,{ref:t,className:d()(s,n),...l})}));p.displayName="CarouselCaption";const m=p,v=a.forwardRef(((e,t)=>{let{as:s="div",bsPrefix:n,className:a,...l}=e;const r=d()(a,(0,x.oU)(n,"carousel-item"));return(0,h.jsx)(s,{ref:t,...l,className:r})}));v.displayName="CarouselItem";const j=v;var f=s(2663),g=s(3492),N=s(2643),b=s(4910);const y=a.forwardRef(((e,t)=>{let{defaultActiveIndex:s=0,...o}=e;const{as:p="div",bsPrefix:m,slide:v=!0,fade:j=!1,controls:y=!0,indicators:A=!0,indicatorLabels:w=[],activeIndex:C,onSelect:I,onSlide:S,onSlid:k,interval:P=5e3,keyboard:D=!0,onKeyDown:T,pause:R="hover",onMouseOver:$,onMouseOut:_,wrap:E=!0,touch:M=!0,onTouchStart:O,onTouchMove:F,onTouchEnd:B,prevIcon:U=(0,h.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:L="Previous",nextIcon:z=(0,h.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:W="Next",variant:H,className:Z,children:K,...G}=(0,u.Zw)({defaultActiveIndex:s,...o},{activeIndex:"onSelect"}),V=(0,x.oU)(m,"carousel"),X=(0,x.Wz)(),J=(0,a.useRef)(null),[q,Q]=(0,a.useState)("next"),[Y,ee]=(0,a.useState)(!1),[te,se]=(0,a.useState)(!1),[ne,ae]=(0,a.useState)(C||0);(0,a.useEffect)((()=>{te||C===ne||(J.current?Q(J.current):Q((C||0)>ne?"next":"prev"),v&&se(!0),ae(C||0))}),[C,te,ne,v]),(0,a.useEffect)((()=>{J.current&&(J.current=null)}));let le,re=0;(0,f.jJ)(K,((e,t)=>{++re,t===C&&(le=e.props.interval)}));const ie=(0,r.A)(le),ce=(0,a.useCallback)((e=>{if(te)return;let t=ne-1;if(t<0){if(!E)return;t=re-1}J.current="prev",null==I||I(t,e)}),[te,ne,I,E,re]),oe=(0,n.A)((e=>{if(te)return;let t=ne+1;if(t>=re){if(!E)return;t=0}J.current="next",null==I||I(t,e)})),de=(0,a.useRef)();(0,a.useImperativeHandle)(t,(()=>({element:de.current,prev:ce,next:oe})));const ue=(0,n.A)((()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(de.current)&&(X?ce():oe())})),xe="next"===q?"start":"end";l((()=>{v||(null==S||S(ne,xe),null==k||k(ne,xe))}),[ne]);const he=`${V}-item-${q}`,pe=`${V}-item-${xe}`,me=(0,a.useCallback)((e=>{(0,N.A)(e),null==S||S(ne,xe)}),[S,ne,xe]),ve=(0,a.useCallback)((()=>{se(!1),null==k||k(ne,xe)}),[k,ne,xe]),je=(0,a.useCallback)((e=>{if(D&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(X?oe(e):ce(e));case"ArrowRight":return e.preventDefault(),void(X?ce(e):oe(e))}null==T||T(e)}),[D,T,ce,oe,X]),fe=(0,a.useCallback)((e=>{"hover"===R&&ee(!0),null==$||$(e)}),[R,$]),ge=(0,a.useCallback)((e=>{ee(!1),null==_||_(e)}),[_]),Ne=(0,a.useRef)(0),be=(0,a.useRef)(0),ye=(0,i.A)(),Ae=(0,a.useCallback)((e=>{Ne.current=e.touches[0].clientX,be.current=0,"hover"===R&&ee(!0),null==O||O(e)}),[R,O]),we=(0,a.useCallback)((e=>{e.touches&&e.touches.length>1?be.current=0:be.current=e.touches[0].clientX-Ne.current,null==F||F(e)}),[F]),Ce=(0,a.useCallback)((e=>{if(M){const t=be.current;Math.abs(t)>40&&(t>0?ce(e):oe(e))}"hover"===R&&ye.set((()=>{ee(!1)}),P||void 0),null==B||B(e)}),[M,R,ce,oe,ye,P,B]),Ie=null!=P&&!Y&&!te,Se=(0,a.useRef)();(0,a.useEffect)((()=>{var e,t;if(!Ie)return;const s=X?ce:oe;return Se.current=window.setInterval(document.visibilityState?ue:s,null!=(e=null!=(t=ie.current)?t:P)?e:void 0),()=>{null!==Se.current&&clearInterval(Se.current)}}),[Ie,ce,oe,ie,P,ue,X]);const ke=(0,a.useMemo)((()=>A&&Array.from({length:re},((e,t)=>e=>{null==I||I(t,e)}))),[A,re,I]);return(0,h.jsxs)(p,{ref:de,...G,onKeyDown:je,onMouseOver:fe,onMouseOut:ge,onTouchStart:Ae,onTouchMove:we,onTouchEnd:Ce,className:d()(Z,V,v&&"slide",j&&`${V}-fade`,H&&`${V}-${H}`),children:[A&&(0,h.jsx)("div",{className:`${V}-indicators`,children:(0,f.Tj)(K,((e,t)=>(0,h.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=w&&w.length?w[t]:`Slide ${t+1}`,className:t===ne?"active":void 0,onClick:ke?ke[t]:void 0,"aria-current":t===ne},t)))}),(0,h.jsx)("div",{className:`${V}-inner`,children:(0,f.Tj)(K,((e,t)=>{const s=t===ne;return v?(0,h.jsx)(b.A,{in:s,onEnter:s?me:void 0,onEntered:s?ve:void 0,addEndListener:g.A,children:(t,n)=>a.cloneElement(e,{...n,className:d()(e.props.className,s&&"entered"!==t&&he,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&pe)})}):a.cloneElement(e,{className:d()(e.props.className,s&&"active")})}))}),y&&(0,h.jsxs)(h.Fragment,{children:[(E||0!==C)&&(0,h.jsxs)(c.A,{className:`${V}-control-prev`,onClick:ce,children:[U,L&&(0,h.jsx)("span",{className:"visually-hidden",children:L})]}),(E||C!==re-1)&&(0,h.jsxs)(c.A,{className:`${V}-control-next`,onClick:oe,children:[z,W&&(0,h.jsx)("span",{className:"visually-hidden",children:W})]})]})]})}));y.displayName="Carousel";const A=Object.assign(y,{Caption:m,Item:j})},9240:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});var n=s(5043),a=s(1072),l=s(8602),r=s(8258),i=s(6798),c=s(3519),o=s(7993),d=s(4556),u=s(5009),x=s(5948),h=s(9876),p=s(4476),m=s(579);const v=e=>{let{connectTab:t}=e;const[s,a]=(0,n.useState)("paid-transactions"),l=(e,n)=>{e!==s&&(a(e),t(n))};return(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:"navbar text-dark ",children:[(0,m.jsx)("div",{className:"nav-item "+("paid-transactions"===s?"active":""),onClick:()=>l("paid-transactions",0),children:"Paid Transactions"}),(0,m.jsx)("div",{className:"nav-item "+("unpaid-transactions"===s?"active":""),onClick:()=>l("unpaid-transactions",1),children:"Unpaid Transactions"})]})})},j=()=>{var e,t,s,j,f,g,N,b,y,A,w;const C=(0,d.d4)((e=>e)),I=(0,d.wA)(),[S,k]=(0,n.useState)(""),P=null===C||void 0===C||null===(e=C.getPaidAuctionDataReducer)||void 0===e||null===(t=e.transactionData)||void 0===t?void 0:t.result,D=null===C||void 0===C||null===(s=C.getNonPaidAuctionDataReducer)||void 0===s||null===(j=s.transactionData)||void 0===j?void 0:j.result;console.log({PaidAuctionData:P,NonPaidAuctionData:D});const T=null===C||void 0===C||null===(f=C.getPaidAuctionDataReducer)||void 0===f?void 0:f.loading,R=null===C||void 0===C||null===(g=C.getNonPaidAuctionDataReducer)||void 0===g?void 0:g.loading,[$,_]=(0,n.useState)(0),[E,M]=(0,n.useState)(0),[O,F]=(0,n.useState)(1),[B,U]=(0,n.useState)(10),[L,z]=(0,n.useState)(Math.ceil(E/B));(0,n.useEffect)((()=>{z(Math.ceil(E/B))}),[E,B]),(0,n.useEffect)((()=>{0===$?I((0,h.f7)({search:S,limit:B,page:O})):1===$&&I((0,h.kr)({search:S,limit:B,page:O}))}),[I,$,O,B,S]),(0,n.useEffect)((()=>{var e,t;if(0===$)M((null===C||void 0===C||null===(e=C.getPaidAuctionDataReducer)||void 0===e||null===(t=e.transactionData)||void 0===t?void 0:t.totalRecords)||0),F(1);else if(1===$){var s,n;M((null===C||void 0===C||null===(s=C.getNonPaidAuctionDataReducer)||void 0===s||null===(n=s.transactionData)||void 0===n?void 0:n.totalRecords)||0),F(1)}}),[null===C||void 0===C||null===(N=C.getPaidAuctionDataReducer)||void 0===N||null===(b=N.transactionData)||void 0===b?void 0:b.totalRecords,null===C||void 0===C||null===(y=C.getNonPaidAuctionDataReducer)||void 0===y||null===(A=y.transactionData)||void 0===A?void 0:A.totalRecords,$]);const[W,H]=(0,n.useState)(!1),[Z,K]=(0,n.useState)(null),G=e=>{e&&(K(e),H(!0))},V=e=>{const t=e=>(null===e||void 0===e?void 0:e.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.slice(1).toLowerCase()),s=t(null===e||void 0===e?void 0:e.name),n=t(null===e||void 0===e?void 0:e.lastName);return s&&n?`${s} ${n}`:s||(n||"N/A")},X=e=>{switch(e){case"categoryId":return"Category Name";case"subCategoryId":return"Subcategory Name";default:return e.replace(/([A-Z])/g," $1").replace(/[_-]/g," ").replace(/\b\w/g,(e=>e.toUpperCase()))}},J=(e,t)=>{if("categoryId"===t||"subCategoryId"===t)return(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.subCategoryName)||"N/A";if("object"===typeof e&&null!==e)return(0,m.jsx)("div",{style:{paddingLeft:"20px",borderLeft:"2px solid #ddd"},children:Object.entries(e).map((e=>{let[t,s]=e;return(0,m.jsxs)("div",{children:[console.log({subKey:t,subValue:s}),(0,m.jsxs)("strong",{children:[X(t),":"]})," ",J(s,t)]},t)}))});if((e=>"string"===typeof e&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(e))(e)){return new Date(e).toISOString().split("T")[0]}return e},q=["_id","createdAt","updatedAt","categoryId","subCategoryId","image","status","userId","publish","negotiable","productGenerateId","endBidDateTime","startBidDateTime","buyerId","soldStatus"];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u.A,{breadCrumbItems:[{label:""+(0===$?"Paid-Transactions":"Unpaid-Transactions"),path:"/bmg/transactions",active:!0}],title:"Transactions"}),(0,m.jsxs)(a.A,{children:[(0,m.jsx)(l.A,{lg:6,className:"d-flex justify-content-start ",children:(0,m.jsx)(v,{connectTab:e=>{_(e)}})}),(0,m.jsx)("div",{children:0===$?(0,m.jsx)(l.A,{xs:12,children:(0,m.jsx)(r.A,{style:{boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"},children:(0,m.jsxs)(r.A.Body,{className:"text-center",children:[(0,m.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[(0,m.jsxs)("span",{className:"px-3 py-1 bg-dark text-light rounded",children:["Paid Transactions: ",E]}),(0,m.jsxs)("div",{className:"d-flex",children:[(0,m.jsx)("input",{type:"text",className:"form-control w-auto me-1",placeholder:"Search...",value:S,onChange:e=>k(e.target.value)}),S&&(0,m.jsx)("i",{className:"mdi mdi-backspace-outline text-danger fs-3",onClick:()=>k(""),style:{cursor:"pointer"}})]})]}),T?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(x.Rh,{})}):(0,m.jsx)(m.Fragment,{children:P&&(null===P||void 0===P?void 0:P.length)>0?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"table-responsive",children:(0,m.jsxs)("table",{className:"table table-striped bg-white",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{className:"",style:{color:"#703133"},children:[(0,m.jsx)("th",{scope:"col",children:(0,m.jsx)("i",{className:"mdi mdi-merge"})}),(0,m.jsx)("th",{scope:"col",children:"Payment Id"}),(0,m.jsx)("th",{scope:"col",children:"Order Id"}),(0,m.jsx)("th",{scope:"col",children:"Product Name"}),(0,m.jsx)("th",{scope:"col",children:"Buyer"}),(0,m.jsx)("th",{scope:"col",children:"Seller"}),(0,m.jsx)("th",{scope:"col",children:"Amount"}),(0,m.jsx)("th",{scope:"col",children:"Delivery Status"})]})}),(0,m.jsx)("tbody",{children:null===P||void 0===P?void 0:P.map(((e,t)=>{var s,n;return(0,m.jsxs)("tr",{className:"text-dark fw-bold text-nowrap",children:[(0,m.jsx)("th",{scope:"row",children:t+1}),(0,m.jsx)("td",{className:"text-uppercase text-success",children:null!==e&&void 0!==e&&e.paymentId?(0,m.jsxs)("span",{children:[null===e||void 0===e?void 0:e.paymentId,"  "]}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"text-uppercase text-primary",children:null!==e&&void 0!==e&&e.orderId?(0,m.jsxs)("span",{children:[null===e||void 0===e?void 0:e.orderId,"  "]}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"text-uppercase text-success",children:null!==e&&void 0!==e&&e.productId?(0,m.jsx)("span",{style:{cursor:"pointer",color:"crimson"},onMouseOver:e=>e.target.style.color="rgb(10 207 151)",onMouseOut:e=>e.target.style.color="crimson",onClick:()=>G(null===e||void 0===e?void 0:e.productId),children:(null===e||void 0===e||null===(s=e.productId)||void 0===s||null===(n=s.Product_Name)||void 0===n?void 0:n.slice(0,30))+"..."}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"text-uppercase",children:null!==e&&void 0!==e&&e.userId?(0,m.jsxs)("span",{children:[V(null===e||void 0===e?void 0:e.userId),"  "]}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"text-uppercase",children:null!==e&&void 0!==e&&e.sellerId?(0,m.jsxs)("span",{children:[V(null===e||void 0===e?void 0:e.sellerId),"  "]}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"text-uppercase",children:null!==e&&void 0!==e&&e.totalPrice?(0,m.jsxs)("span",{children:["$ ",null===e||void 0===e?void 0:e.totalPrice,"  "]}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"text-uppercase",children:null!==e&&void 0!==e&&e.deliveryStatus?(0,m.jsxs)("span",{children:[null===e||void 0===e?void 0:e.deliveryStatus,"  "]}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})})]},t)}))})]})})}):(0,m.jsx)("div",{className:"text-center d-flex align-items-center justify-content-center",style:{height:"30vh"},children:(0,m.jsx)("code",{className:"fs-4",children:"No Paid Transactions found."})})}),(0,m.jsx)(p.A,{pageIndex:O,pageSize:B,totalPages:L,setPageIndex:F,onChangePageSize:U})]})})}):1===$?(0,m.jsx)(l.A,{xs:12,children:(0,m.jsx)(r.A,{style:{boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"},children:(0,m.jsxs)(r.A.Body,{className:"text-center",children:[(0,m.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[(0,m.jsxs)("span",{className:"px-3 py-1 bg-dark text-light rounded",children:["UnPaid Transactions: ",E]}),(0,m.jsxs)("div",{className:"d-flex",children:[(0,m.jsx)("input",{type:"text",className:"form-control w-auto me-1",placeholder:"Search...",value:S,onChange:e=>k(e.target.value)}),S&&(0,m.jsx)("i",{className:"mdi mdi-backspace-outline text-danger fs-3",onClick:()=>k(""),style:{cursor:"pointer"}})]})]}),R?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(x.Rh,{})}):(0,m.jsx)(m.Fragment,{children:D&&(null===D||void 0===D?void 0:D.length)>0?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"table-responsive",children:(0,m.jsxs)("table",{className:"table table-striped bg-white",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{className:"",style:{color:"#703133"},children:[(0,m.jsx)("th",{scope:"col",children:(0,m.jsx)("i",{className:"mdi mdi-merge"})}),(0,m.jsx)("th",{scope:"col",children:"Product Name"}),(0,m.jsx)("th",{scope:"col",children:"Category"}),(0,m.jsx)("th",{scope:"col",children:"Sub Category"}),(0,m.jsx)("th",{scope:"col",children:"Buyer"}),(0,m.jsx)("th",{scope:"col",children:"Seller"}),(0,m.jsx)("th",{scope:"col",children:"Amount"})]})}),(0,m.jsx)("tbody",{children:null===D||void 0===D?void 0:D.map(((e,t)=>{var s,n,a;return(0,m.jsxs)("tr",{className:"text-dark fw-bold text-nowrap",children:[(0,m.jsx)("th",{scope:"row",children:t+1}),(0,m.jsx)("td",{className:"text-uppercase text-success",children:e?(0,m.jsx)("span",{style:{cursor:"pointer",color:"crimson"},onMouseOver:e=>e.target.style.color="rgb(10 207 151)",onMouseOut:e=>e.target.style.color="crimson",onClick:()=>G(e),children:(null===e||void 0===e||null===(s=e.Product_Name)||void 0===s?void 0:s.slice(0,30))+"..."}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"text-uppercase",children:null!==e&&void 0!==e&&e.categoryId?(0,m.jsxs)("span",{children:[null===e||void 0===e||null===(n=e.categoryId)||void 0===n?void 0:n.name,"  "]}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"text-uppercase",children:null!==e&&void 0!==e&&e.subCategoryId?(0,m.jsxs)("span",{children:[null===e||void 0===e||null===(a=e.subCategoryId)||void 0===a?void 0:a.subCategoryName,"  "]}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"text-uppercase",children:null!==e&&void 0!==e&&e.buyerId?(0,m.jsxs)("span",{children:[V(null===e||void 0===e?void 0:e.buyerId),"  "]}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"text-uppercase",children:null!==e&&void 0!==e&&e.userId?(0,m.jsxs)("span",{children:[V(null===e||void 0===e?void 0:e.userId),"  "]}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"text-uppercase",children:null!==e&&void 0!==e&&e.highBidingAmount?(0,m.jsxs)("span",{children:["$ ",null===e||void 0===e?void 0:e.highBidingAmount,"  "]}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})})]},t)}))})]})})}):(0,m.jsx)("div",{className:"text-center d-flex align-items-center justify-content-center",style:{height:"30vh"},children:(0,m.jsx)("code",{className:"fs-4",children:"No  UnPaid Transactions were found."})})}),(0,m.jsx)(p.A,{pageIndex:O,pageSize:B,totalPages:L,setPageIndex:F,onChangePageSize:U})]})})}):null})]}),(0,m.jsxs)(i.A,{show:W,onHide:()=>H(!1),centered:!0,size:"lg",children:[(0,m.jsxs)(i.A.Header,{className:"px-2 py-1 text-light",style:{backgroundColor:"#008003"},children:[(0,m.jsx)(i.A.Title,{className:"fw-semibold",children:"Product Details"}),(0,m.jsx)("i",{className:"mdi mdi-close fs-3",onClick:()=>H(!1),style:{cursor:"pointer"}})]}),(0,m.jsx)(i.A.Body,{children:Z&&(0,m.jsxs)(c.A,{children:[(null===(w=Z.image)||void 0===w?void 0:w.length)>0&&(0,m.jsx)(o.A,{interval:5e3,className:"mb-3 shadow-sm rounded",children:Z.image.map(((e,t)=>(0,m.jsx)(o.A.Item,{children:(0,m.jsx)("img",{src:e,alt:`Slide ${t}`,className:"d-block w-100 rounded",style:{maxHeight:"400px",objectFit:"contain",boxShadow:"0px 4px 10px rgba(0,0,0,0.2)"}})},t)))}),(0,m.jsx)(a.A,{className:"border rounded p-3 bg-light",children:Object.entries(Z).filter((e=>{let[t,s]=e;return!q.includes(t)&&s})).map((e=>{let[t,s]=e;return(0,m.jsx)(l.A,{md:6,className:"mb-3",children:(0,m.jsxs)("div",{className:"d-flex flex-column",children:[(0,m.jsx)("strong",{className:"text-muted mb-1",children:X(t)}),(0,m.jsx)("div",{className:"fw-bold",style:{wordBreak:"break-word"},children:J(s,t)})]})},t)}))})]})})]})]})}},9422:(e,t,s)=>{s.d(t,{A:()=>i});var n=s(5043);var a=s(9109);const l=2**31-1;function r(e,t,s){const n=s-Date.now();e.current=n<=l?setTimeout(t,n):setTimeout((()=>r(e,t,s)),l)}function i(){const e=function(){const e=(0,n.useRef)(!0),t=(0,n.useRef)((()=>e.current));return(0,n.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),t.current}(),t=(0,n.useRef)();return(0,a.A)((()=>clearTimeout(t.current))),(0,n.useMemo)((()=>{const s=()=>clearTimeout(t.current);return{set:function(n){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e()&&(s(),a<=l?t.current=setTimeout(n,a):r(t,n,Date.now()+a))},clear:s,handleRef:t}}),[])}}}]);
//# sourceMappingURL=240.637b83f4.chunk.js.map