import{B as i,r as u,$ as c,ak as m,D as d,a2 as l,a6 as p,J as _,w as f,L as g,u as v,a3 as B}from"./vendor.bf608252.js";import S from"./Login.e3e0230a.js";import{_ as I,a as x,f as C,G as M,Q as T,aK as U}from"./index.31054725.js";import"./LoginForm.9d50bd01.js";/* empty css              *//* empty css               */import"./LoginFormTitle.556ba886.js";const k=i({setup(L){const{prefixCls:t}=x("st-login"),e=C(),a=M(),r=T(),o=u(0),n=()=>r.getProjectConfig.permissionMode===U.BACK;return c(()=>{var s;o.value=(s=e.getUserInfo)==null?void 0:s.userId,e.getUserInfo}),m(()=>{(o.value&&o.value!==e.getUserInfo.userId||n()&&a.getLastBuildMenuTime===0)&&document.location.reload()}),(s,P)=>(d(),l(B,null,{default:p(()=>[_("div",{class:g(v(t))},[f(S,{sessionTimeout:""})],2)]),_:1}))}});var N=I(k,[["__scopeId","data-v-5a3bbd0c"]]);export{N as default};