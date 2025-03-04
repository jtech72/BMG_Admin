"use strict";(self.webpackChunkhyper_react=self.webpackChunkhyper_react||[]).push([[283],{4476:(e,l,s)=>{s.d(l,{A:()=>t});var a=s(5043),n=s(5475),i=s(579);const t=e=>{let{pageIndex:l,pageSize:s,totalPages:t,setPageIndex:d,onChangePageSize:r}=e;return(0,a.useEffect)((()=>{l>t&&d(Math.max(1,t))}),[l,t,d]),(0,i.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1 pt-2",children:[(0,i.jsxs)("div",{className:"d-inline-block me-3",children:[(0,i.jsx)("label",{className:"me-1",children:"Display :"}),(0,i.jsx)("select",{value:s,onChange:e=>{const l=Number(e.target.value);r(l),d(1)},className:"form-select d-inline-block w-auto",children:[10,20,50,100].map((e=>(0,i.jsx)("option",{value:e,children:e},e)))})]}),(0,i.jsxs)("span",{className:"me-3",children:["Page ",(0,i.jsxs)("strong",{children:[l," of ",t]})]}),(0,i.jsx)("label",{children:"Go to page: "}),(0,i.jsx)("input",{type:"number",placeholder:`${l}`,min:"1",max:t,onChange:e=>{const l=Number(e.target.value);l>=1&&l<=t&&d(l)},className:"form-control ms-1 d-inline-block",style:{width:"80px"}}),(0,i.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0 pe-4",children:[l>1&&(0,i.jsx)("li",{className:"page-item",onClick:()=>d(l-1),children:(0,i.jsx)(n.N_,{to:"#",className:"page-link",children:"Previous"})}),Array.from({length:t}).map(((e,s)=>{const a=s+1,r=a===l;return t<=5||a>=l-1&&a<=l+1||(1===a||a===t)?(0,i.jsx)("li",{className:"page-item "+(r?"active":""),onClick:()=>d(a),children:(0,i.jsx)(n.N_,{to:"#",className:"page-link",children:a})},a):2===a&&l>=5||a===t-1&&l<=t-4?(0,i.jsx)("li",{className:"page-item disabled",children:(0,i.jsx)(n.N_,{to:"#",className:"page-link px-0",children:"..."})},a):null})),l<t&&(0,i.jsx)("li",{className:"page-item",onClick:()=>d(l+1),children:(0,i.jsx)(n.N_,{to:"#",className:"page-link",children:"Next"})})]})]})}},5009:(e,l,s)=>{s.d(l,{A:()=>d});s(5043);var a=s(1072),n=s(8602),i=s(9397),t=s(579);const d=e=>(0,t.jsx)(a.A,{children:(0,t.jsx)(n.A,{children:(0,t.jsxs)("div",{className:"page-title-box",children:[(0,t.jsx)("div",{className:"page-title-right",children:(0,t.jsxs)(i.A,{listProps:{className:"m-0"},children:[(0,t.jsx)(i.A.Item,{href:"/",children:"Dashboard"}),e.breadCrumbItems.map(((e,l)=>e.active?(0,t.jsx)(i.A.Item,{active:!0,style:{color:"#703133"},children:e.label},l):(0,t.jsx)(i.A.Item,{href:e.path,children:e.label},l)))]})}),(0,t.jsx)("h4",{className:"page-title",style:{color:"#703133"},children:e.title})]})})})},5948:(e,l,s)=>{s.d(l,{N7:()=>t,Rh:()=>i});s(5043);var a=s(2942),n=s(579);const i=()=>(0,n.jsx)("div",{style:{height:"50vh",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsx)(a.IN,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})}),t=()=>(0,n.jsx)("div",{className:" d-flex justify-content-center align-items-center w-100",children:(0,n.jsx)(a.ul,{visible:!0,height:"30",width:"30",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#fff","#fff","#fff","#fff","#fff"]})})},6283:(e,l,s)=>{s.r(l),s.d(l,{default:()=>u});var a=s(5043),n=s(1072),i=s(8602),t=s(8258),d=s(4556),r=s(5009),c=s(5948),o=s(5784),x=s(4476),m=s(579);const h=e=>{let{connectTab:l}=e;const[s,n]=(0,a.useState)("Buyers"),i=(e,a)=>{e!==s&&(n(e),l(a))};return(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:"navbar text-dark ",children:[(0,m.jsx)("div",{className:"nav-item "+("Buyers"===s?"active":""),onClick:()=>i("Buyers",0),children:"Buyer's"}),(0,m.jsx)("div",{className:"nav-item "+("Sellers"===s?"active":""),onClick:()=>i("Sellers",1),children:"Seller's"})]})})},u=()=>{var e,l,s,u,p;const v=(0,d.d4)((e=>e)),j=(0,d.wA)(),[g,N]=(0,a.useState)(""),f=null===v||void 0===v||null===(e=v.userDataReducer)||void 0===e||null===(l=e.userData)||void 0===l?void 0:l.users;console.log({UserData:f});const b=null===v||void 0===v||null===(s=v.userDataReducer)||void 0===s?void 0:s.loading,[y,A]=(0,a.useState)(0),w=null===v||void 0===v||null===(u=v.userDataReducer)||void 0===u||null===(p=u.userData)||void 0===p?void 0:p.totalRecords,[k,C]=(0,a.useState)(1),[S,$]=(0,a.useState)(20),[P,I]=(0,a.useState)(Math.ceil(w/S));return(0,a.useEffect)((()=>{I(Math.ceil(w/S))}),[w,S]),(0,a.useEffect)((()=>{j((0,o.Y5)({search:g,limit:S,page:k,type:0===y?"buyer":"seller"}))}),[j,k,S,g,y]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.A,{breadCrumbItems:[{label:"Buyer's & Seller's",path:"/bmg/buyer-seller"},{label:"Users",path:"/bmg/buyer-seller",active:!0}],title:"Buyer's & Seller's"}),(0,m.jsxs)(n.A,{children:[(0,m.jsx)(i.A,{lg:6,className:"d-flex justify-content-start ",children:(0,m.jsx)(h,{connectTab:e=>{A(e)}})}),(0,m.jsx)("div",{children:0===y?(0,m.jsx)(i.A,{xs:12,children:(0,m.jsx)(t.A,{style:{boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"},children:(0,m.jsxs)(t.A.Body,{className:"text-center",children:[(0,m.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[(0,m.jsxs)("span",{className:"px-3 py-1 bg-dark text-light rounded",children:["Total Buyer's: ",(null===f||void 0===f?void 0:f.length)||0]}),(0,m.jsxs)("div",{className:"d-flex",children:[(0,m.jsx)("input",{type:"text",className:"form-control w-auto me-1",placeholder:"Search...",value:g,onChange:e=>N(e.target.value)}),g&&(0,m.jsx)("i",{className:"mdi mdi-backspace-outline text-danger fs-3",onClick:()=>N(""),style:{cursor:"pointer"}})]})]}),b?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(c.Rh,{})}):(0,m.jsx)(m.Fragment,{children:f&&f.length>0?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"d-flex justify-content-center",children:(0,m.jsxs)("table",{className:"table table-striped bg-white",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{className:"",style:{color:"#703133"},children:[(0,m.jsx)("th",{scope:"col",children:(0,m.jsx)("i",{className:"mdi mdi-merge"})}),(0,m.jsx)("th",{scope:"col",children:"Name"}),(0,m.jsx)("th",{scope:"col",children:"Email"}),(0,m.jsx)("th",{scope:"col",children:"Contact No"}),(0,m.jsx)("th",{scope:"col",children:"Location"}),(0,m.jsx)("th",{scope:"col",children:"Verified"})]})}),(0,m.jsx)("tbody",{children:null===f||void 0===f?void 0:f.map(((e,l)=>{var s,a,n,i,t,d,r,c,o,x,h,u;return(0,m.jsxs)("tr",{className:"text-dark fw-bold text-nowrap",children:[(0,m.jsx)("th",{scope:"row",children:l+1}),(0,m.jsx)("td",{className:"fw-bold text-info",children:null!==e&&void 0!==e&&e.name||null!==e&&void 0!==e&&e.lastName?(0,m.jsx)("span",{children:`${null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s.charAt(0).toUpperCase()}${(null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a.slice(1))||""} \n        ${null===e||void 0===e||null===(n=e.lastName)||void 0===n?void 0:n.charAt(0).toUpperCase()}${(null===e||void 0===e||null===(i=e.lastName)||void 0===i?void 0:i.slice(1))||""}`.trim()}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"fw-bold text-success",children:null!==e&&void 0!==e&&e.email?(0,m.jsxs)("span",{children:[null===e||void 0===e?void 0:e.email,"  "]}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"fw-bold",children:null!==e&&void 0!==e&&e.phoneNumber?(0,m.jsxs)("span",{children:[null===e||void 0===e?void 0:e.phoneNumber,"  "]}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"fw-bold text-primary",children:null!==e&&void 0!==e&&e.primaryAddress?(0,m.jsx)("span",{children:`${(null===e||void 0===e||null===(t=e.primaryAddress)||void 0===t?void 0:t.address)||""}, \n        ${(null===e||void 0===e||null===(d=e.primaryAddress)||void 0===d?void 0:d.street)||""}, \n        ${(null===e||void 0===e||null===(r=e.primaryAddress)||void 0===r||null===(c=r.city)||void 0===c?void 0:c.name)||""}, \n        ${(null===e||void 0===e||null===(o=e.primaryAddress)||void 0===o||null===(x=o.state)||void 0===x?void 0:x.name)||""}, \n        ${(null===e||void 0===e||null===(h=e.primaryAddress)||void 0===h||null===(u=h.country)||void 0===u?void 0:u.name)||""}`.replace(/,\s*,/g,",").trim()}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"fw-bold",children:e?(0,m.jsx)("span",{className:`badge ${null!==e&&void 0!==e&&e.isVerified?"bg-success":"bg-danger"} px-2 py-1`,children:null!==e&&void 0!==e&&e.isVerified?"\u2705 Verified":"\u274c Not Verified"}):(0,m.jsx)("span",{className:"badge bg-secondary px-2 py-1",children:"N/A"})})]},l)}))})]})})}):(0,m.jsx)("div",{className:"text-center d-flex align-items-center justify-content-center",style:{height:"30vh"},children:(0,m.jsx)("code",{className:"fs-4",children:"No Buyer's found."})})}),(0,m.jsx)(x.A,{pageIndex:k,pageSize:S,totalPages:P,setPageIndex:C,onChangePageSize:$})]})})}):1===y?(0,m.jsx)(i.A,{xs:12,children:(0,m.jsx)(t.A,{style:{boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"},children:(0,m.jsxs)(t.A.Body,{className:"text-center",children:[(0,m.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[(0,m.jsxs)("span",{className:"px-3 py-1 bg-dark text-light rounded",children:["Total Seller's: ",(null===f||void 0===f?void 0:f.length)||0]}),(0,m.jsxs)("div",{className:"d-flex",children:[(0,m.jsx)("input",{type:"text",className:"form-control w-auto me-1",placeholder:"Search...",value:g,onChange:e=>N(e.target.value)}),g&&(0,m.jsx)("i",{className:"mdi mdi-backspace-outline text-danger fs-3",onClick:()=>N(""),style:{cursor:"pointer"}})]})]}),b?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(c.Rh,{})}):(0,m.jsx)(m.Fragment,{children:f&&(null===f||void 0===f?void 0:f.length)>0?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:"d-flex justify-content-center",children:(0,m.jsxs)("table",{className:"table table-striped bg-white",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{className:"",style:{color:"#703133"},children:[(0,m.jsx)("th",{scope:"col",children:(0,m.jsx)("i",{className:"mdi mdi-merge"})}),(0,m.jsx)("th",{scope:"col",children:"Name"}),(0,m.jsx)("th",{scope:"col",children:"Email"}),(0,m.jsx)("th",{scope:"col",children:"Contact No"}),(0,m.jsx)("th",{scope:"col",children:"Location"}),(0,m.jsx)("th",{scope:"col",children:"Verified"})]})}),(0,m.jsx)("tbody",{children:null===f||void 0===f?void 0:f.map(((e,l)=>{var s,a,n,i,t,d,r,c,o,x,h,u;return(0,m.jsxs)("tr",{className:"text-dark fw-bold text-nowrap",children:[(0,m.jsx)("th",{scope:"row",children:l+1}),(0,m.jsx)("td",{className:"fw-bold text-info",children:null!==e&&void 0!==e&&e.name||null!==e&&void 0!==e&&e.lastName?(0,m.jsx)("span",{children:`${null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s.charAt(0).toUpperCase()}${(null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a.slice(1))||""} \n        ${null===e||void 0===e||null===(n=e.lastName)||void 0===n?void 0:n.charAt(0).toUpperCase()}${(null===e||void 0===e||null===(i=e.lastName)||void 0===i?void 0:i.slice(1))||""}`.trim()}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"fw-bold text-success",children:null!==e&&void 0!==e&&e.email?(0,m.jsxs)("span",{children:[null===e||void 0===e?void 0:e.email,"  "]}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"fw-bold",children:null!==e&&void 0!==e&&e.phoneNumber?(0,m.jsxs)("span",{children:[null===e||void 0===e?void 0:e.phoneNumber,"  "]}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"fw-bold text-primary",children:null!==e&&void 0!==e&&e.primaryAddress?(0,m.jsx)("span",{children:`${(null===e||void 0===e||null===(t=e.primaryAddress)||void 0===t?void 0:t.address)||""}, \n        ${(null===e||void 0===e||null===(d=e.primaryAddress)||void 0===d?void 0:d.street)||""}, \n        ${(null===e||void 0===e||null===(r=e.primaryAddress)||void 0===r||null===(c=r.city)||void 0===c?void 0:c.name)||""}, \n        ${(null===e||void 0===e||null===(o=e.primaryAddress)||void 0===o||null===(x=o.state)||void 0===x?void 0:x.name)||""}, \n        ${(null===e||void 0===e||null===(h=e.primaryAddress)||void 0===h||null===(u=h.country)||void 0===u?void 0:u.name)||""}`.replace(/,\s*,/g,",").trim()}):(0,m.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,m.jsx)("td",{className:"text-uppercase fw-bold",children:e?(0,m.jsx)("span",{className:`badge ${null!==e&&void 0!==e&&e.isVerified?"bg-success":"bg-danger"} px-2 py-1`,children:null!==e&&void 0!==e&&e.isVerified?"\u2705 Verified":"\u274c Not Verified"}):(0,m.jsx)("span",{className:"badge bg-secondary px-2 py-1",children:"N/A"})})]},l)}))})]})})}):(0,m.jsx)("div",{className:"text-center d-flex align-items-center justify-content-center",style:{height:"30vh"},children:(0,m.jsx)("code",{className:"fs-4",children:"No Seller's found."})})}),(0,m.jsx)(x.A,{pageIndex:k,pageSize:S,totalPages:P,setPageIndex:C,onChangePageSize:$})]})})}):null})]})]})}},9397:(e,l,s)=>{s.d(l,{A:()=>m});var a=s(8139),n=s.n(a),i=s(5043),t=s(7852),d=s(7071),r=s(579);const c=i.forwardRef(((e,l)=>{let{bsPrefix:s,active:a=!1,children:i,className:c,as:o="li",linkAs:x=d.A,linkProps:m={},href:h,title:u,target:p,...v}=e;const j=(0,t.oU)(s,"breadcrumb-item");return(0,r.jsx)(o,{ref:l,...v,className:n()(j,c,{active:a}),"aria-current":a?"page":void 0,children:a?i:(0,r.jsx)(x,{...m,href:h,title:u,target:p,children:i})})}));c.displayName="BreadcrumbItem";const o=c,x=i.forwardRef(((e,l)=>{let{bsPrefix:s,className:a,listProps:i={},children:d,label:c="breadcrumb",as:o="nav",...x}=e;const m=(0,t.oU)(s,"breadcrumb");return(0,r.jsx)(o,{"aria-label":c,className:a,ref:l,...x,children:(0,r.jsx)("ol",{...i,className:n()(m,null==i?void 0:i.className),children:d})})}));x.displayName="Breadcrumb";const m=Object.assign(x,{Item:o})}}]);
//# sourceMappingURL=283.7247a153.chunk.js.map