import{E as y,D as A,F as C,H as c,r as b,J as I,K as L,j as a,L as j,G as m,M as $}from"./index-zPjSCOCx.js";import{u as z,F}from"./TextField-D1Q6Ts3k.js";import{T as R}from"./Typography-C2Y8IMQV.js";function T(n){return A("MuiInputAdornment",n)}const M=y("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),f=M;var x;const N=["children","className","component","disablePointerEvents","disableTypography","position","variant"],U=(n,t)=>{const{ownerState:e}=n;return[t.root,t[`position${m(e.position)}`],e.disablePointerEvents===!0&&t.disablePointerEvents,t[e.variant]]},_=n=>{const{classes:t,disablePointerEvents:e,hiddenLabel:o,position:s,size:r,variant:l}=n,d={root:["root",e&&"disablePointerEvents",s&&`position${m(s)}`,l,o&&"hiddenLabel",r&&`size${m(r)}`]};return $(d,T,t)},S=C("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:U})(({theme:n,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},t.variant==="filled"&&{[`&.${f.positionStart}&:not(.${f.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),w=b.forwardRef(function(t,e){const o=I({props:t,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:d=!1,disableTypography:g=!1,position:u,variant:v}=o,E=L(o,N),i=z()||{};let p=v;v&&i.variant,i&&!p&&(p=i.variant);const h=c({},o,{hiddenLabel:i.hiddenLabel,size:i.size,disablePointerEvents:d,position:u,variant:p}),P=_(h);return a.jsx(F.Provider,{value:null,children:a.jsx(S,c({as:l,ownerState:h,className:j(P.root,r),ref:e},E,{children:typeof s=="string"&&!g?a.jsx(R,{color:"text.secondary",children:s}):a.jsxs(b.Fragment,{children:[u==="start"?x||(x=a.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})}),J=w;export{J as I};