import{bO as v,cz as h,cA as g,j as r,o as b}from"./index-CGKDrrCR.js";import{u as _}from"./index-CmLsXt2o.js";import"./Dialog-DMOWZHAH.js";var u={};Object.defineProperty(u,"__esModule",{value:!0});var j=u.default=T;const l=r,t=g,s=v,P=h;function $(e){return Math.round(e*1e5)/1e5}const S=(0,P.makeStyles)()(e=>({tooltip:{position:"absolute",pointerEvents:"none",backgroundColor:(0,s.alpha)(e.palette.grey[700],.9),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.fontSize,lineHeight:`${$(14/10)}em`,maxWidth:300,wordWrap:"break-word"}}));function T({clientPoint:e,children:d,placement:p="right"}){var o,n;const i=(o=(0,s.useTheme)().components)===null||o===void 0?void 0:o.MuiPopper,{classes:c}=S(),{refs:f,floatingStyles:a,context:m}=(0,t.useFloating)({placement:p,strategy:"fixed",middleware:[(0,t.offset)(5)]}),x=(0,t.useClientPoint)(m,e),{getFloatingProps:y}=(0,t.useInteractions)([x]);return(0,l.jsx)(s.Portal,{container:(n=i==null?void 0:i.defaultProps)===null||n===void 0?void 0:n.container,children:(0,l.jsx)("div",{className:c.tooltip,ref:f.setFloating,style:{...a,zIndex:1e5,visibility:a.transform==="translate(0px, 0px)"?"hidden":void 0,pointerEvents:"none"},...y(),children:d})})}const k=b(function({title:e}){return e?r.jsx(j,{children:r.jsx(_.SanitizedHTML,{html:e})}):null});export{k as default};
//# sourceMappingURL=SyntenyTooltip-tih_J4U5.js.map
