import{d as s,u as o,r as m,an as d,j as e,ao as l,b as p,ap as u}from"./index-zPjSCOCx.js";import{u as c}from"./index-RsJkgdGT.js";import{C as h}from"./Container-CIbaX3ys.js";import{P as x}from"./Modal-BfUPnkXy.js";import{T as f}from"./Typography-C2Y8IMQV.js";import{T as g}from"./TextField-D1Q6Ts3k.js";import{B as y}from"./Button-DG8RXmVZ.js";import"./isMuiElement-DHVOMEXX.js";import"./Menu-Do7zX5Rp.js";const E=()=>{const{isAdmin:i}=s(r=>r.auth),t=o(),a=c(""),n=r=>{r.preventDefault(),t(u(a.value))};return m.useEffect(()=>{t(d())},[t]),i?e.jsx(l,{to:"/admin/dashboard"}):e.jsx("div",{style:{backgroundImage:p},children:e.jsx(h,{component:"main",maxWidth:"xs",sx:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:e.jsxs(x,{elevation:3,sx:{padding:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(f,{variant:"h5",children:"Admin Login"}),e.jsxs("form",{style:{width:"100%",marginTop:"1rem"},onSubmit:n,children:[e.jsx(g,{required:!0,fullWidth:!0,label:"Secret Key",type:"password",margin:"normal",variant:"outlined",value:a.value,onChange:a.changeHandler}),e.jsx(y,{sx:{marginTop:"1rem"},variant:"contained",color:"primary",type:"submit",fullWidth:!0,children:"Login"})]})]})})})};export{E as default};