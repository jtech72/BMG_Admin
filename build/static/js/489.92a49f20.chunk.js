"use strict";(self.webpackChunkhyper_react=self.webpackChunkhyper_react||[]).push([[489],{4476:(e,s,t)=>{t.d(s,{A:()=>n});var l=t(5043),a=t(5475),i=t(579);const n=e=>{let{pageIndex:s,pageSize:t,totalPages:n,setPageIndex:r,onChangePageSize:c}=e;return(0,l.useEffect)((()=>{s>n&&r(Math.max(1,n))}),[s,n,r]),(0,i.jsxs)("div",{className:"d-lg-flex align-items-center text-center pb-1 pt-2",children:[(0,i.jsxs)("div",{className:"d-inline-block me-3",children:[(0,i.jsx)("label",{className:"me-1",children:"Display :"}),(0,i.jsx)("select",{value:t,onChange:e=>{const s=Number(e.target.value);c(s),r(1)},className:"form-select d-inline-block w-auto",children:[10,20,50,100].map((e=>(0,i.jsx)("option",{value:e,children:e},e)))})]}),(0,i.jsxs)("span",{className:"me-3",children:["Page ",(0,i.jsxs)("strong",{children:[s," of ",n]})]}),(0,i.jsx)("label",{children:"Go to page: "}),(0,i.jsx)("input",{type:"number",placeholder:`${s}`,min:"1",max:n,onChange:e=>{const s=Number(e.target.value);s>=1&&s<=n&&r(s)},className:"form-control ms-1 d-inline-block",style:{width:"80px"}}),(0,i.jsxs)("ul",{className:"pagination pagination-rounded d-inline-flex ms-auto align-item-center mb-0 pe-4",children:[s>1&&(0,i.jsx)("li",{className:"page-item",onClick:()=>r(s-1),children:(0,i.jsx)(a.N_,{to:"#",className:"page-link",children:"Previous"})}),Array.from({length:n}).map(((e,t)=>{const l=t+1,c=l===s;return n<=5||l>=s-1&&l<=s+1||(1===l||l===n)?(0,i.jsx)("li",{className:"page-item "+(c?"active":""),onClick:()=>r(l),children:(0,i.jsx)(a.N_,{to:"#",className:"page-link",children:l})},l):2===l&&s>=5||l===n-1&&s<=n-4?(0,i.jsx)("li",{className:"page-item disabled",children:(0,i.jsx)(a.N_,{to:"#",className:"page-link px-0",children:"..."})},l):null})),s<n&&(0,i.jsx)("li",{className:"page-item",onClick:()=>r(s+1),children:(0,i.jsx)(a.N_,{to:"#",className:"page-link",children:"Next"})})]})]})}},4489:(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var l=t(5043),a=t(1072),i=t(8602),n=t(8258),r=t(6798),c=t(3519),d=t(4556),o=t(5009),x=t(5948),h=t(5292),m=t(4476),u=t(579);const g=e=>{let{connectTab:s}=e;const[t,a]=(0,l.useState)("Categories"),i=(e,l)=>{e!==t&&(a(e),s(l))};return(0,u.jsx)("div",{children:(0,u.jsxs)("div",{className:"navbar text-dark ",children:[(0,u.jsx)("div",{className:"nav-item "+("Categories"===t?"active":""),onClick:()=>i("Categories",0),children:"Categories"}),(0,u.jsx)("div",{className:"nav-item "+("Sub-Categories"===t?"active":""),onClick:()=>i("Sub-Categories",1),children:"Sub Categories"})]})})},p=()=>{var e,s,t,p,j,v,N;const b=(0,d.d4)((e=>e)),y=(0,d.wA)(),[f,C]=(0,l.useState)(""),A=null===b||void 0===b||null===(e=b.categoryDataReducer)||void 0===e||null===(s=e.categoryData)||void 0===s?void 0:s.groupedCategories;console.log({CategoryData:A});const w=null===b||void 0===b||null===(t=b.subCategoryDataReducer)||void 0===t||null===(p=t.categoryData)||void 0===p?void 0:p.subCategories,k=null===b||void 0===b||null===(j=b.categoryDataReducer)||void 0===j?void 0:j.loading,S=null===b||void 0===b||null===(v=b.subCategoryDataReducer)||void 0===v?void 0:v.loading,[D,I]=(0,l.useState)(0),[P,R]=(0,l.useState)(0),z=P,[F,_]=(0,l.useState)(1),[M,T]=(0,l.useState)(10),[E,B]=(0,l.useState)(Math.ceil(z/M));(0,l.useEffect)((()=>{B(Math.ceil(z/M))}),[z,M]),(0,l.useEffect)((()=>{var e,s;if(0===D)R(null===b||void 0===b||null===(e=b.categoryDataReducer)||void 0===e||null===(s=e.categoryData)||void 0===s?void 0:s.totalRecords);else if(1===D){var t,l;R(null===b||void 0===b||null===(t=b.subCategoryDataReducer)||void 0===t||null===(l=t.categoryData)||void 0===l?void 0:l.totalRecords)}}),[D]),console.log(null===b||void 0===b||null===(N=b.categoryDataReducer)||void 0===N?void 0:N.categoryData),(0,l.useEffect)((()=>{0===D?y((0,h.Wp)({search:f,limit:M,page:F})):1===D&&y((0,h.mp)({search:f,limit:M,page:F}))}),[y,D,F,M,f]);const H=e=>{if(!e)return"";return new Date(e).toLocaleString("en-US",{weekday:"short",month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})},[L,O]=(0,l.useState)(!1),[W,G]=(0,l.useState)(null),[U,V]=(0,l.useState)(null);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o.A,{breadCrumbItems:[{label:"Categories",path:"/bmg/categories"},{label:"Categories",path:"/bmg/categories",active:!0}],title:"Categories"}),(0,u.jsxs)(a.A,{children:[(0,u.jsx)(i.A,{lg:6,className:"d-flex justify-content-start ",children:(0,u.jsx)(g,{connectTab:e=>{I(e)}})}),(0,u.jsx)("div",{children:0===D?(0,u.jsx)(i.A,{xs:12,children:(0,u.jsx)(n.A,{style:{boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"},children:(0,u.jsxs)(n.A.Body,{className:"text-center",children:[(0,u.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[(0,u.jsxs)("span",{className:"px-3 py-1 bg-dark text-light rounded",children:["Total Categories: ",z||0]}),(0,u.jsxs)("div",{className:"d-flex",children:[(0,u.jsx)("input",{type:"text",className:"form-control w-auto me-1",placeholder:"Search...",value:f,onChange:e=>C(e.target.value)}),f&&(0,u.jsx)("i",{className:"mdi mdi-backspace-outline text-danger fs-3",onClick:()=>C(""),style:{cursor:"pointer"}})]})]}),k?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(x.Rh,{})}):(0,u.jsx)(u.Fragment,{children:A&&(null===A||void 0===A?void 0:A.length)>0?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"table-responsive",children:(0,u.jsxs)("table",{className:"table table-striped bg-white",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{className:"",style:{color:"#703133"},children:[(0,u.jsx)("th",{scope:"col",children:(0,u.jsx)("i",{className:"mdi mdi-merge"})}),(0,u.jsx)("th",{scope:"col",children:"Category Name"}),(0,u.jsx)("th",{scope:"col",children:"Sub Categories"}),(0,u.jsx)("th",{scope:"col",children:"Created At"})]})}),(0,u.jsx)("tbody",{children:null===A||void 0===A?void 0:A.map(((e,s)=>{var t;return(0,u.jsxs)("tr",{className:"text-dark fw-bold text-nowrap",children:[(0,u.jsx)("th",{scope:"row",children:s+1}),(0,u.jsx)("td",{className:"text-uppercase fw-bold text-success",children:null!==e&&void 0!==e&&e.categoryName?(0,u.jsxs)("span",{children:[null===e||void 0===e?void 0:e.categoryName,"  "]}):(0,u.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,u.jsx)("td",{className:"text-uppercase fw-bold text-success",children:(null===e||void 0===e||null===(t=e.subCategories)||void 0===t?void 0:t.length)>0?(0,u.jsx)("span",{style:{cursor:"pointer",color:"crimson"},onMouseOver:e=>e.target.style.color="rgb(10 207 151)",onMouseOut:e=>e.target.style.color="crimson",onClick:()=>{return s=e,console.log({category:s}),void(s&&(G(null===s||void 0===s?void 0:s.categoryName),V(null===s||void 0===s?void 0:s.subCategories),O(!0)));var s},children:" View Sub Categories"}):(0,u.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,u.jsx)("td",{className:"text-uppercase fw-bold text-primary",children:null!==e&&void 0!==e&&e.createdAt?(0,u.jsxs)("span",{children:[H(null===e||void 0===e?void 0:e.createdAt),"  "]}):(0,u.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})})]},s)}))})]})})}):(0,u.jsx)("div",{className:"text-center d-flex align-items-center justify-content-center",style:{height:"30vh"},children:(0,u.jsx)("code",{className:"fs-4",children:"No Categories found."})})}),(0,u.jsx)(m.A,{pageIndex:F,pageSize:M,totalPages:E,setPageIndex:_,onChangePageSize:T})]})})}):1===D?(0,u.jsx)(i.A,{xs:12,children:(0,u.jsx)(n.A,{style:{boxShadow:"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"},children:(0,u.jsxs)(n.A.Body,{className:"text-center",children:[(0,u.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[(0,u.jsxs)("span",{className:"px-3 py-1 bg-dark text-light rounded",children:["Total Sub Categories: ",z||0]}),(0,u.jsxs)("div",{className:"d-flex",children:[(0,u.jsx)("input",{type:"text",className:"form-control w-auto me-1",placeholder:"Search...",value:f,onChange:e=>C(e.target.value)}),f&&(0,u.jsx)("i",{className:"mdi mdi-backspace-outline text-danger fs-3",onClick:()=>C(""),style:{cursor:"pointer"}})]})]}),S?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(x.Rh,{})}):(0,u.jsx)(u.Fragment,{children:w&&(null===w||void 0===w?void 0:w.length)>0?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:"table-responsive",children:(0,u.jsxs)("table",{className:"table table-striped bg-white",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{className:"",style:{color:"#703133"},children:[(0,u.jsx)("th",{scope:"col",children:(0,u.jsx)("i",{className:"mdi mdi-merge"})}),(0,u.jsx)("th",{scope:"col",children:"Sub-Category Name"}),(0,u.jsx)("th",{scope:"col",children:"Category Name"}),(0,u.jsx)("th",{scope:"col",children:"Created At"})]})}),(0,u.jsx)("tbody",{children:null===w||void 0===w?void 0:w.map(((e,s)=>{var t,l;return(0,u.jsxs)("tr",{className:"text-dark fw-bold text-nowrap",children:[(0,u.jsx)("th",{scope:"row",children:s+1}),(0,u.jsx)("td",{className:"text-uppercase fw-bold text-success",children:null!==e&&void 0!==e&&e.subCategoryName?(0,u.jsxs)("span",{children:[null===e||void 0===e?void 0:e.subCategoryName,"  "]}):(0,u.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,u.jsx)("td",{className:"text-uppercase fw-bold text-danger",children:null!==e&&void 0!==e&&null!==(t=e.categoryId)&&void 0!==t&&t.name?(0,u.jsxs)("span",{children:[null===e||void 0===e||null===(l=e.categoryId)||void 0===l?void 0:l.name," "]}):(0,u.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})}),(0,u.jsx)("td",{className:"text-uppercase fw-bold text-primary",children:null!==e&&void 0!==e&&e.createdAt?(0,u.jsxs)("span",{children:[H(null===e||void 0===e?void 0:e.createdAt),"  "]}):(0,u.jsx)("span",{className:"d-flex text-danger justify-content-center",children:"N/A"})})]},s)}))})]})})}):(0,u.jsx)("div",{className:"text-center d-flex align-items-center justify-content-center",style:{height:"30vh"},children:(0,u.jsx)("code",{className:"fs-4",children:"No Sub Category found."})})}),(0,u.jsx)(m.A,{pageIndex:F,pageSize:M,totalPages:E,setPageIndex:_,onChangePageSize:T})]})})}):null})]}),(0,u.jsxs)(r.A,{show:L,onHide:()=>O(!1),centered:!0,size:"lg",children:[(0,u.jsxs)(r.A.Header,{className:"px-2 py-1 text-light",style:{backgroundColor:"#008003"},children:[(0,u.jsxs)(r.A.Title,{className:"fw-semibold",children:["Sub Categories in  ",W," (",null===U||void 0===U?void 0:U.length,")"]}),(0,u.jsx)("i",{className:"mdi mdi-close fs-3",onClick:()=>O(!1),style:{cursor:"pointer"}})]}),(0,u.jsx)(r.A.Body,{children:U&&(null===U||void 0===U?void 0:U.length)>0?(0,u.jsx)(c.A,{children:(0,u.jsxs)("table",{className:"table table-striped rounded shadow-sm",children:[(0,u.jsx)("thead",{className:"bg-success text-light",children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{scope:"col",className:"px-3 py-2",children:"#"}),(0,u.jsx)("th",{scope:"col",className:"px-3 py-2",children:"Sub Category"})]})}),(0,u.jsx)("tbody",{children:null===U||void 0===U?void 0:U.map(((e,s)=>(0,u.jsxs)("tr",{className:"align-middle",children:[(0,u.jsx)("td",{className:"px-3 py-2 fw-bold",children:s+1}),(0,u.jsx)("td",{className:"px-3 py-2",children:(null===e||void 0===e?void 0:e.name)||"N/A"})]},s)))})]})}):(0,u.jsx)("div",{className:"text-center text-muted py-3",children:"No products available."})})]})]})}},5009:(e,s,t)=>{t.d(s,{A:()=>r});t(5043);var l=t(1072),a=t(8602),i=t(9397),n=t(579);const r=e=>(0,n.jsx)(l.A,{children:(0,n.jsx)(a.A,{children:(0,n.jsxs)("div",{className:"page-title-box",children:[(0,n.jsx)("div",{className:"page-title-right",children:(0,n.jsxs)(i.A,{listProps:{className:"m-0"},children:[(0,n.jsx)(i.A.Item,{href:"/",children:"Dashboard"}),e.breadCrumbItems.map(((e,s)=>e.active?(0,n.jsx)(i.A.Item,{active:!0,style:{color:"#703133"},children:e.label},s):(0,n.jsx)(i.A.Item,{href:e.path,children:e.label},s)))]})}),(0,n.jsx)("h4",{className:"page-title",style:{color:"#703133"},children:e.title})]})})})},5948:(e,s,t)=>{t.d(s,{N7:()=>n,Rh:()=>i});t(5043);var l=t(2942),a=t(579);const i=()=>(0,a.jsx)("div",{style:{height:"50vh",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,a.jsx)(l.IN,{strokeColor:"grey",strokeWidth:"4",animationDuration:"0.75",width:"90",visible:!0})}),n=()=>(0,a.jsx)("div",{className:" d-flex justify-content-center align-items-center w-100",children:(0,a.jsx)(l.ul,{visible:!0,height:"25",width:"25",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#fff","#fff","#fff","#fff","#fff"]})})}}]);
//# sourceMappingURL=489.92a49f20.chunk.js.map