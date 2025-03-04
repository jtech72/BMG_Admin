"use strict";(self.webpackChunkhyper_react=self.webpackChunkhyper_react||[]).push([[591],{1072:(e,a,s)=>{s.d(a,{A:()=>i});var r=s(8139),t=s.n(r),n=s(5043),l=s(7852),c=s(579);const o=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,as:n="div",...o}=e;const i=(0,l.oU)(s,"row"),d=(0,l.gy)(),m=(0,l.Jm)(),u=`${i}-cols`,f=[];return d.forEach((e=>{const a=o[e];let s;delete o[e],null!=a&&"object"===typeof a?({cols:s}=a):s=a;const r=e!==m?`-${e}`:"";null!=s&&f.push(`${u}${r}-${s}`)})),(0,c.jsx)(n,{ref:a,...o,className:t()(r,i,...f)})}));o.displayName="Row";const i=o},1719:(e,a,s)=>{s.d(a,{A:()=>g});var r=s(8139),t=s.n(r),n=s(5043),l=s(7121),c=s(1456),o=s(7852),i=s(4488),d=s(579);const m=(0,i.A)("h4");m.displayName="DivStyledAsH4";const u=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n=m,...l}=e;return r=(0,o.oU)(r,"alert-heading"),(0,d.jsx)(n,{ref:a,className:t()(s,r),...l})}));u.displayName="AlertHeading";const f=u;var x=s(7071);const p=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n=x.A,...l}=e;return r=(0,o.oU)(r,"alert-link"),(0,d.jsx)(n,{ref:a,className:t()(s,r),...l})}));p.displayName="AlertLink";const h=p;var b=s(8072),j=s(5632);const N=n.forwardRef(((e,a)=>{const{bsPrefix:s,show:r=!0,closeLabel:n="Close alert",closeVariant:i,className:m,children:u,variant:f="primary",onClose:x,dismissible:p,transition:h=b.A,...N}=(0,l.Zw)(e,{show:"onClose"}),g=(0,o.oU)(s,"alert"),v=(0,c.A)((e=>{x&&x(!1,e)})),y=!0===h?b.A:h,A=(0,d.jsxs)("div",{role:"alert",...y?void 0:N,ref:a,className:t()(m,g,f&&`${g}-${f}`,p&&`${g}-dismissible`),children:[p&&(0,d.jsx)(j.A,{onClick:v,"aria-label":n,variant:i}),u]});return y?(0,d.jsx)(y,{unmountOnExit:!0,...N,ref:void 0,in:r,children:A}):r?A:null}));N.displayName="Alert";const g=Object.assign(N,{Link:h,Heading:f})},2391:(e,a,s)=>{s.d(a,{Z:()=>u,z:()=>l});var r=s(5043),t=s(4858),n=s(579);const l=e=>{let{defaultValues:a,resolver:s,children:l,onSubmit:c,formClass:o}=e;const i=(0,t.mN)({defaultValues:a,resolver:s}),{handleSubmit:d,register:m,control:u,formState:{errors:f}}=i;return(0,n.jsx)("form",{onSubmit:d(c),className:o,noValidate:!0,children:Array.isArray(l)?l.map((e=>e.props&&e.props.name?r.createElement(e.type,{...{...e.props,register:m,key:e.props.name,errors:f,control:u}}):e)):l})};var c=s(7994),o=s(3722),i=s(8139),d=s.n(i);const m=e=>{let{name:a,placeholder:s,refCallback:t,errors:l,register:i,className:m}=e;const[u,f]=(0,r.useState)(!1);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(c.A,{className:"mb-0",children:[(0,n.jsx)(o.A.Control,{type:u?"text":"password",placeholder:s,name:a,id:a,as:"input",ref:e=>{t&&t(e)},className:m,isInvalid:!(!l||!l[a]),...i?i(a):{},autoComplete:a}),(0,n.jsx)("div",{className:d()("input-group-text","input-group-password",{"show-password":u}),"data-password":u?"true":"false",children:(0,n.jsx)("span",{className:"password-eye",onClick:()=>{f(!u)}})})]})})},u=e=>{let{label:a,type:s,name:r,placeholder:t,register:l,errors:c,className:i,labelClassName:d,containerClass:u,refCallback:f,children:x,...p}=e;const h="textarea"===s?"textarea":"select"===s?"select":"input";return(0,n.jsx)(n.Fragment,{children:"hidden"===s?(0,n.jsx)("input",{type:s,name:r,...l?l(r):{},...p}):(0,n.jsx)(n.Fragment,{children:"password"===s?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.A.Group,{className:u,children:[a?(0,n.jsxs)(n.Fragment,{children:[" ",(0,n.jsx)(o.A.Label,{className:d,children:a})," ",x," "]}):null,(0,n.jsx)(m,{name:r,placeholder:t,refCallback:f,errors:c,register:l,className:i}),c&&c[r]?(0,n.jsx)(o.A.Control.Feedback,{type:"invalid",className:"d-block",children:c[r].message}):null]})}):(0,n.jsx)(n.Fragment,{children:"select"===s?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.A.Group,{className:u,children:[a?(0,n.jsx)(o.A.Label,{className:d,children:a}):null,(0,n.jsx)(o.A.Select,{type:s,label:a,name:r,id:r,ref:e=>{f&&f(e)},comp:h,className:i,isInvalid:!(!c||!c[r]),...l?l(r):{},...p,children:x}),c&&c[r]?(0,n.jsx)(o.A.Control.Feedback,{type:"invalid",children:c[r].message}):null]})}):(0,n.jsx)(n.Fragment,{children:"checkbox"===s||"radio"===s?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(o.A.Group,{className:u,children:[(0,n.jsx)(o.A.Check,{type:s,label:a,name:r,id:r,ref:e=>{f&&f(e)},className:i,isInvalid:!(!c||!c[r]),...l?l(r):{},...p}),c&&c[r]?(0,n.jsx)(o.A.Control.Feedback,{type:"invalid",children:c[r].message}):null]})}):(0,n.jsxs)(o.A.Group,{className:u,children:[a?(0,n.jsx)(o.A.Label,{className:d,children:a}):null,(0,n.jsx)(o.A.Control,{type:s,placeholder:t,name:r,id:r,as:h,ref:e=>{f&&f(e)},className:i,isInvalid:!(!c||!c[r]),...l?l(r):{},...p,autoComplete:r,children:x||null}),c&&c[r]?(0,n.jsx)(o.A.Control.Feedback,{type:"invalid",children:c[r].message}):null]})})})})})}},2665:(e,a,s)=>{s.d(a,{A:()=>t});var r=s(5043);function t(){const e=(0,r.useRef)(!0),a=(0,r.useRef)((()=>e.current));return(0,r.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),a.current}},2677:(e,a,s)=>{s.d(a,{A:()=>n});var r=s(5043);const t="undefined"!==typeof s.g&&s.g.navigator&&"ReactNative"===s.g.navigator.product,n="undefined"!==typeof document||t?r.useLayoutEffect:r.useEffect},3906:(e,a,s)=>{s.d(a,{A:()=>u});var r=s(5043),t=s(3519),n=s(1072),l=s(8602),c=s(8258),o=s(5475),i=s(4961),d=s(5383),m=s(579);const u=e=>{let{bottomLinks:a,children:s}=e;const{t:u}=(0,i.B)(),f=(new Date).getFullYear();return(0,r.useEffect)((()=>(document.body&&document.body.classList.add("authentication-bg"),()=>{document.body&&document.body.classList.remove("authentication-bg")})),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"account-pages pt-2 pt-sm-5 pb-4 pb-sm-5",children:(0,m.jsx)(t.A,{children:(0,m.jsx)(n.A,{className:"justify-content-center",children:(0,m.jsxs)(l.A,{md:8,lg:6,xl:5,xxl:4,children:[(0,m.jsxs)(c.A,{children:[(0,m.jsx)(c.A.Header,{className:" text-center",style:{backgroundColor:"#008003"},children:(0,m.jsx)(o.N_,{to:"/",children:(0,m.jsx)("span",{children:(0,m.jsx)("img",{src:d.P,alt:"",height:"70",className:"bg-light rounded-pill px-3"})})})}),(0,m.jsx)(c.A.Body,{className:"p-4",children:s})]}),a]})})})}),(0,m.jsxs)("footer",{className:"footer footer-alt",children:[f," \xa9 BMG - ",(0,m.jsx)("a",{href:"https://rowthtech.com/",className:"text-muted",children:(0,m.jsx)("u",{children:"rowthtech.com"})})]})]})}},4140:(e,a,s)=>{s.d(a,{Am:()=>l,Ay:()=>o});var r=s(5043),t=s(579);const n=["as","disabled"];function l(e){let{tagName:a,disabled:s,href:r,target:t,rel:n,role:l,onClick:c,tabIndex:o=0,type:i}=e;a||(a=null!=r||null!=t||null!=n?"a":"button");const d={tagName:a};if("button"===a)return[{type:i||"button",disabled:s},d];const m=e=>{(s||"a"===a&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),s?e.stopPropagation():null==c||c(e)};return"a"===a&&(r||(r="#"),s&&(r=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:s?void 0:o,href:r,target:"a"===a?t:void 0,"aria-disabled":s||void 0,rel:"a"===a?n:void 0,onClick:m,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),m(e))}},d]}const c=r.forwardRef(((e,a)=>{let{as:s,disabled:r}=e,c=function(e,a){if(null==e)return{};var s={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(a.indexOf(r)>=0)continue;s[r]=e[r]}return s}(e,n);const[o,{tagName:i}]=l(Object.assign({tagName:s,disabled:r},c));return(0,t.jsx)(i,Object.assign({},c,o,{ref:a}))}));c.displayName="Button";const o=c},4488:(e,a,s)=>{s.d(a,{A:()=>c});var r=s(5043),t=s(8139),n=s.n(t),l=s(579);const c=e=>r.forwardRef(((a,s)=>(0,l.jsx)("div",{...a,ref:s,className:n()(a.className,e)})))},4696:(e,a,s)=>{s.d(a,{A:()=>t});var r=s(5043);function t(e){const a=(0,r.useRef)(null);return(0,r.useEffect)((()=>{a.current=e})),a.current}},5383:(e,a,s)=>{s.d(a,{g:()=>t,P:()=>r});const r=s.p+"static/media/logo.9d26b5c616edfdc7bdd9.png",t=s.p+"static/media/Bmg_logo.d3e8caf7368352b98953.png"},5806:(e,a,s)=>{s.r(a),s.d(a,{default:()=>N});var r=s(5043),t=s(4556),n=s(5475),l=s(3216),c=s(1072),o=s(8602),i=s(1719),d=s(4282),m=s(4961),u=s(3033),f=s(8403),x=s(5784),p=s(2391),h=s(3906),b=s(579);const j=()=>{const{t:e}=(0,m.B)();return(0,b.jsx)(c.A,{className:"mt-3",children:(0,b.jsx)(o.A,{className:"text-center",children:(0,b.jsxs)("p",{className:"text-muted",children:[e("Already have account?")," ",(0,b.jsx)(n.N_,{to:"/account/login",className:"text-muted ms-1",children:(0,b.jsx)("b",{children:e("Log In")})})]})})})},N=()=>{const{t:e}=(0,m.B)(),a=(0,t.wA)(),{loading:s,userSignUp:n,error:c}=(0,t.d4)((e=>({loading:e.Auth.loading,error:e.Auth.error,userSignUp:e.Auth.userSignUp})));(0,r.useEffect)((()=>{a((0,x.A)())}),[a]);const o=(0,f.t)(u.Ik().shape({fullname:u.Yj().required(e("Please enter Fullname")),email:u.Yj().required("Please enter Email").email("Please enter valid Email"),password:u.Yj().required(e("Please enter Password"))}));return(0,b.jsxs)(b.Fragment,{children:[n?(0,b.jsx)(l.C5,{to:"/account/confirm"}):null,(0,b.jsxs)(h.A,{bottomLinks:(0,b.jsx)(j,{}),children:[(0,b.jsxs)("div",{className:"text-center w-75 m-auto",children:[(0,b.jsx)("h4",{className:"text-dark-50 text-center mt-0 fw-bold",children:e("Free Sign Up")}),(0,b.jsx)("p",{className:"text-muted mb-4",children:e("Don't have an account? Create your account, it takes less than a minute.")})]}),c&&(0,b.jsx)(i.A,{variant:"danger",className:"my-2",children:c}),(0,b.jsxs)(p.z,{onSubmit:e=>{a((0,x.E_)(e.fullname,e.email,e.password))},resolver:o,defaultValues:{},children:[(0,b.jsx)(p.Z,{label:e("Full Name"),type:"text",name:"fullname",placeholder:e("Enter your name"),containerClass:"mb-3"}),(0,b.jsx)(p.Z,{label:e("Email address"),type:"email",name:"email",placeholder:e("Enter your email"),containerClass:"mb-3"}),(0,b.jsx)(p.Z,{label:e("Password"),type:"password",name:"password",placeholder:e("Enter your password"),containerClass:"mb-3"}),(0,b.jsx)(p.Z,{label:e("I accept Terms and Conditions"),type:"checkbox",name:"checkboxsignup",containerClass:"mb-3 text-muted"}),(0,b.jsx)("div",{className:"mb-3 mb-0 text-center",children:(0,b.jsx)(d.A,{variant:"success",type:"submit",disabled:s,children:e("Sign Up")})})]})]})]})}},6218:(e,a,s)=>{s.d(a,{A:()=>t});var r=s(5043);const t=function(e){const a=(0,r.useRef)(e);return(0,r.useEffect)((()=>{a.current=e}),[e]),a}},7071:(e,a,s)=>{s.d(a,{A:()=>i});var r=s(5043),t=(s(8457),s(6218),s(8894));s(9753);s(2665),s(4696);s(2677);new WeakMap;var n=s(4140),l=s(579);const c=["onKeyDown"];const o=r.forwardRef(((e,a)=>{let{onKeyDown:s}=e,r=function(e,a){if(null==e)return{};var s={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(a.indexOf(r)>=0)continue;s[r]=e[r]}return s}(e,c);const[o]=(0,n.Am)(Object.assign({tagName:"a"},r)),i=(0,t.A)((e=>{o.onKeyDown(e),null==s||s(e)}));return(d=r.href)&&"#"!==d.trim()&&"button"!==r.role?(0,l.jsx)("a",Object.assign({ref:a},r,{onKeyDown:s})):(0,l.jsx)("a",Object.assign({ref:a},r,o,{onKeyDown:i}));var d}));o.displayName="Anchor";const i=o},8258:(e,a,s)=>{s.d(a,{A:()=>L});var r=s(8139),t=s.n(r),n=s(5043),l=s(7852),c=s(579);const o=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n="div",...o}=e;return r=(0,l.oU)(r,"card-body"),(0,c.jsx)(n,{ref:a,className:t()(s,r),...o})}));o.displayName="CardBody";const i=o,d=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n="div",...o}=e;return r=(0,l.oU)(r,"card-footer"),(0,c.jsx)(n,{ref:a,className:t()(s,r),...o})}));d.displayName="CardFooter";const m=d,u=n.createContext(null);u.displayName="CardHeaderContext";const f=u,x=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,as:o="div",...i}=e;const d=(0,l.oU)(s,"card-header"),m=(0,n.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,c.jsx)(f.Provider,{value:m,children:(0,c.jsx)(o,{ref:a,...i,className:t()(r,d)})})}));x.displayName="CardHeader";const p=x,h=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,variant:n,as:o="img",...i}=e;const d=(0,l.oU)(s,"card-img");return(0,c.jsx)(o,{ref:a,className:t()(n?`${d}-${n}`:d,r),...i})}));h.displayName="CardImg";const b=h,j=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n="div",...o}=e;return r=(0,l.oU)(r,"card-img-overlay"),(0,c.jsx)(n,{ref:a,className:t()(s,r),...o})}));j.displayName="CardImgOverlay";const N=j,g=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n="a",...o}=e;return r=(0,l.oU)(r,"card-link"),(0,c.jsx)(n,{ref:a,className:t()(s,r),...o})}));g.displayName="CardLink";const v=g;var y=s(4488);const A=(0,y.A)("h6"),w=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n=A,...o}=e;return r=(0,l.oU)(r,"card-subtitle"),(0,c.jsx)(n,{ref:a,className:t()(s,r),...o})}));w.displayName="CardSubtitle";const C=w,k=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n="p",...o}=e;return r=(0,l.oU)(r,"card-text"),(0,c.jsx)(n,{ref:a,className:t()(s,r),...o})}));k.displayName="CardText";const P=k,R=(0,y.A)("h5"),F=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:n=R,...o}=e;return r=(0,l.oU)(r,"card-title"),(0,c.jsx)(n,{ref:a,className:t()(s,r),...o})}));F.displayName="CardTitle";const E=F,U=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,bg:n,text:o,border:d,body:m=!1,children:u,as:f="div",...x}=e;const p=(0,l.oU)(s,"card");return(0,c.jsx)(f,{ref:a,...x,className:t()(r,p,n&&`bg-${n}`,o&&`text-${o}`,d&&`border-${d}`),children:m?(0,c.jsx)(i,{children:u}):u})}));U.displayName="Card";const L=Object.assign(U,{Img:b,Title:E,Subtitle:C,Body:i,Link:v,Text:P,Header:p,Footer:m,ImgOverlay:N})},8457:(e,a,s)=>{s.d(a,{A:()=>t});var r=s(5043);function t(){return(0,r.useState)(null)}},8894:(e,a,s)=>{s.d(a,{A:()=>n});var r=s(5043),t=s(6218);function n(e){const a=(0,t.A)(e);return(0,r.useCallback)((function(){return a.current&&a.current(...arguments)}),[a])}},9753:(e,a,s)=>{s.d(a,{A:()=>n});var r=s(5043),t=s(8894);function n(e,a,s){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const l=(0,t.A)(s);(0,r.useEffect)((()=>{const s="function"===typeof e?e():e;return s.addEventListener(a,l,n),()=>s.removeEventListener(a,l,n)}),[e])}}}]);
//# sourceMappingURL=591.16d24b25.chunk.js.map