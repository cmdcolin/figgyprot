import{bO as y,cz as b,cA as g,j as o,o as j,c as a,cb as _}from"./index-CGKDrrCR.js";var p={};Object.defineProperty(p,"__esModule",{value:!0});var P=p.default=w;const u=o,n=g,c=y,S=b;function T(t){return Math.round(t*1e5)/1e5}const $=(0,S.makeStyles)()(t=>({tooltip:{position:"absolute",pointerEvents:"none",backgroundColor:(0,c.alpha)(t.palette.grey[700],.9),borderRadius:t.shape.borderRadius,color:t.palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.fontSize,lineHeight:`${T(14/10)}em`,maxWidth:300,wordWrap:"break-word"}}));function w({clientPoint:t,children:e,placement:i="right"}){var r,s;const l=(r=(0,c.useTheme)().components)===null||r===void 0?void 0:r.MuiPopper,{classes:f}=$(),{refs:x,floatingStyles:d,context:m}=(0,n.useFloating)({placement:i,strategy:"fixed",middleware:[(0,n.offset)(5)]}),h=(0,n.useClientPoint)(m,t),{getFloatingProps:v}=(0,n.useInteractions)([h]);return(0,u.jsx)(c.Portal,{container:(s=l==null?void 0:l.defaultProps)===null||s===void 0?void 0:s.container,children:(0,u.jsx)("div",{className:f.tooltip,ref:x.setFloating,style:{...d,zIndex:1e5,visibility:d.transform==="translate(0px, 0px)"?"hidden":void 0,pointerEvents:"none"},...v(),children:e})})}const z=a.forwardRef(function({message:e},i){return o.jsx("div",{ref:i,children:a.isValidElement(e)?e:e?o.jsx(_.SanitizedHTML,{html:String(e)}):null})}),k=j(function({contents:t}){return t?o.jsx(a.Suspense,{fallback:null,children:o.jsx(P,{children:o.jsx(z,{message:t})})}):null});export{k as default};
//# sourceMappingURL=ArcTooltip-DE0aeYNk.js.map
