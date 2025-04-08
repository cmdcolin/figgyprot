import{o as w,c0 as B,bZ as N,k as F,bg as $,j as s,a4 as a,m as A}from"./index-CGKDrrCR.js";const T=A()(()=>({vtext:{gridColumn:"1/2",gridRow:"1/2",pointerEvents:"none",userSelect:"none"},htext:{gridColumn:"2/2",gridRow:"2/2",pointerEvents:"none",userSelect:"none"}})),z=w(function({model:l}){const{viewWidth:o,borderY:r}=l,{classes:n}=T();return s.jsx("svg",{width:o,height:r,className:n.htext,children:s.jsx(I,{model:l})})}),I=w(function({model:l}){const{viewWidth:o,borderX:r,borderY:n,hview:i,htextRotation:x,hticks:y}=l,{offsetPx:f,width:d,dynamicBlocks:g,bpPerPx:v}=i,u=g.contentBlocks,b=B(u,o,f),c=N(),j={...F(i),width:d,staticBlocks:i.staticBlocks},m=y.map(t=>{var e;return[t,(e=$({refName:t.refName,coord:t.base,self:j}))===null||e===void 0?void 0:e.offsetPx]}).filter(t=>t[1]!==void 0).map(t=>[t[0],t[1]-f]);return s.jsxs(s.Fragment,{children:[u.filter(t=>!b.has(t.key)).map(t=>{const e=t.offsetPx,p=0,P=Math.floor(e-i.offsetPx);return s.jsx("text",{transform:`rotate(${x},${P},${p})`,x:P,y:p+1,fontSize:11,dominantBaseline:"hanging",textAnchor:"end",...a.getFillProps(c.palette.text.primary),children:t.refName},JSON.stringify(t))}),m.map(([t,e])=>e>0&&e<d?s.jsx("line",{x1:e,x2:e,y1:0,y2:t.type==="major"?6:4,strokeWidth:1,...a.getFillProps(c.palette.text.primary)},`line-${JSON.stringify(t)}`):null),m.filter(t=>t[0].type==="major").map(([t,e])=>e>10&&e<d?s.jsx("text",{x:e-7,y:0,transform:`rotate(${x},${e},0)`,fontSize:11,dominantBaseline:"middle",textAnchor:"end",...a.getFillProps(c.palette.text.primary),children:a.getTickDisplayStr(t.base+1,v)},`text-${JSON.stringify(t)}`):null),s.jsx("text",{y:n-12,x:(o-r)/2,textAnchor:"middle",fontSize:11,dominantBaseline:"hanging",...a.getFillProps(c.palette.text.primary),children:i.assemblyNames.join(",")})]})}),H=w(function({model:l}){const{borderX:o,viewHeight:r}=l,{classes:n}=T();return s.jsx("svg",{className:n.vtext,width:o,height:r,children:s.jsx(M,{model:l})})}),M=w(function({model:l}){const{viewHeight:o,borderX:r,borderY:n,vview:i,vtextRotation:x,vticks:y}=l,{offsetPx:f,width:d,dynamicBlocks:g,bpPerPx:v}=i,u=g.contentBlocks,b=B(u,o,f),c=N(),j={...F(i),width:d,staticBlocks:i.staticBlocks},m=y.map(t=>{var e;return[t,(e=$({refName:t.refName,coord:t.base,self:j}))===null||e===void 0?void 0:e.offsetPx]}).filter(t=>t[1]!==void 0).map(t=>[t[0],t[1]-f]);return s.jsxs(s.Fragment,{children:[u.filter(t=>!b.has(t.key)).map(t=>{const e=t.offsetPx,p=r,P=Math.floor(o-e+f);return s.jsx("text",{transform:`rotate(${x},${p},${e})`,x:p,y:P,fontSize:11,textAnchor:"end",...a.getFillProps(c.palette.text.primary),children:t.refName},JSON.stringify(t))}),m.map(([t,e])=>e>0?s.jsx("line",{y1:o-e,y2:o-e,x1:r,x2:r-(t.type==="major"?6:4),strokeWidth:1,...a.getStrokeProps(c.palette.grey[400])},`line-${JSON.stringify(t)}`):null),m.filter(t=>t[0].type==="major").map(([t,e])=>e>10&&e<o?s.jsx("text",{y:o-e-3,x:r-7,textAnchor:"end",dominantBaseline:"hanging",fontSize:11,...a.getFillProps(c.palette.text.primary),children:a.getTickDisplayStr(t.base+1,v)},`text-${JSON.stringify(t)}`):null),s.jsx("text",{y:(o-n)/2,x:12,transform:`rotate(-90,12,${(o-n)/2})`,textAnchor:"middle",fontSize:11,...a.getFillProps(c.palette.text.primary),children:i.assemblyNames.join(",")})]})}),O=w(function({model:l,children:o}){const{viewWidth:r,viewHeight:n,hview:i,vview:x}=l,y=i.dynamicBlocks.contentBlocks,f=x.dynamicBlocks.contentBlocks;if(!y.length||!f.length)return null;const d=i.displayedRegionsTotalPx-i.offsetPx,g=x.displayedRegionsTotalPx-x.offsetPx,v=y[0].offsetPx-i.offsetPx,u=f[0].offsetPx-x.offsetPx,b=N(),c=b.palette.divider,j=Math.max(v,0),m=Math.max(n-g,0),t=Math.min(d-v,r),e=Math.min(n-u-m,n);let p=Number.POSITIVE_INFINITY,P=Number.POSITIVE_INFINITY;return s.jsxs(s.Fragment,{children:[s.jsx("rect",{x:j,y:m,width:t,height:e,...a.getFillProps(b.palette.background.default)}),s.jsxs("g",{children:[y.map(S=>{const h=S.offsetPx-i.offsetPx,k=Math.floor(h)!==Math.floor(p);return k&&(p=h),k?s.jsx("line",{x1:h,y1:0,x2:h,y2:n,...a.getStrokeProps(c)},JSON.stringify(S)):null}),f.map(S=>{const h=n-(S.offsetPx-x.offsetPx),k=Math.floor(h)!==Math.floor(P);return k&&(P=h),k?s.jsx("line",{x1:0,y1:h,x2:r,y2:h,...a.getStrokeProps(c)},JSON.stringify(S)):null}),s.jsx("line",{x1:d,y1:0,x2:d,y2:n,...a.getStrokeProps(c)}),s.jsx("line",{x1:0,y1:n-g,x2:r,y2:n-g,...a.getStrokeProps(c)})]}),o]})});function J({model:l,children:o}){const{viewWidth:r,viewHeight:n}=l;return s.jsx("svg",{width:r,height:n,style:{background:"rgba(0,0,0,0.12)"},children:s.jsx(O,{model:l,children:o})})}export{O as G,I as H,M as V,H as a,z as b,J as c};
//# sourceMappingURL=Grid-DdYAsDNK.js.map
