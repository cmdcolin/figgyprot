const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SyntenyTooltip-tih_J4U5.js","./index-CGKDrrCR.js","./index-DIqbght7.css","./index-CmLsXt2o.js","./Dialog-DMOWZHAH.js"])))=>i.map(i=>d[i]);
import{a8 as R,j as a,o as F,m as z,c as s,cS as A,_ as ae}from"./index-CGKDrrCR.js";import{u as V}from"./index-CmLsXt2o.js";import{o as ie,a as ce,M as O,g as ue,b as Y}from"./drawSynteny-BYnW9s8U.js";import"./Dialog-DMOWZHAH.js";function le({model:e,onClose:r,anchorEl:C}){const i=R.getContainingView(e),{clientX:f,clientY:d,feature:u}=C;return a.jsx(V.Menu,{onMenuItemClick:(n,c)=>{c(n),r()},anchorEl:{nodeType:1,getBoundingClientRect:()=>{const n=f,c=d;return{top:c,left:n,bottom:c,right:n,width:0,height:0,x:n,y:c,toJSON(){}}}},onClose:r,open:!!C,menuItems:[{label:"Center on feature",onClick:()=>{const{f:n}=u,c=n.get("start"),m=n.get("end"),w=n.get("refName"),h=n.get("mate"),M=i.views[e.level],b=i.views[e.level+1];M.navToLocString(`${w}:${c}-${m}`).catch(g=>{const v=`${M.assemblyNames[0]}:${g}`;console.error(v),R.getSession(e).notifyError(v,g)}),b.navToLocString(`${h.refName}:${h.start}-${h.end}`).catch(g=>{const v=`${b.assemblyNames[0]}:${g}`;console.error(v),R.getSession(e).notifyError(v,g)})}}]})}const fe=s.lazy(()=>ae(()=>import("./SyntenyTooltip-tih_J4U5.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),de=z()({pix:{imageRendering:"pixelated",pointerEvents:"none",visibility:"hidden",position:"absolute"},rel:{position:"relative"},mouseoverCanvas:{position:"absolute",pointEvents:"none"},mainCanvas:{position:"absolute"}}),ge=F(function({model:e}){const{classes:r}=de(),{mouseoverId:C,height:i}=e,f=s.useRef(0),d=R.getContainingView(e),u=d.width,n=s.useRef(0),c=s.useRef(!1),m=s.useRef(null),[w,h]=s.useState(),[M,b]=s.useState(""),[g,v]=s.useState(),[X,S]=s.useState(),[N,_]=s.useState(),[q,G]=s.useState(),k=s.useRef(null),J=s.useCallback(t=>{e.setMouseoverCanvasRef(t)},[e,i,u]),K=s.useCallback(t=>{e.setMainCanvasRef(t),k.current=t},[e,i,u]);s.useEffect(()=>{var t;function x(o){if(o.preventDefault(),o.ctrlKey){n.current+=o.deltaY/500;for(const l of d.views)l.setScaleFactor(n.current<0?1-n.current:1/(1+n.current));m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{var l;for(const p of d.views)p.setScaleFactor(1),p.zoomTo(n.current>0?p.bpPerPx*(1+n.current):p.bpPerPx/(1-n.current),o.clientX-(((l=k.current)===null||l===void 0?void 0:l.getBoundingClientRect().left)||0));n.current=0},300)}else Math.abs(o.deltaY)<Math.abs(o.deltaX)&&(f.current+=o.deltaX/2),c.current||(c.current=!0,window.requestAnimationFrame(()=>{A(()=>{for(const l of d.views)l.horizontalScroll(f.current);f.current=0,c.current=!1})}))}return(t=k.current)===null||t===void 0||t.addEventListener("wheel",x),()=>{var o;(o=k.current)===null||o===void 0||o.removeEventListener("wheel",x)}},[e,i,u]);const U=s.useCallback(t=>{e.setClickMapCanvasRef(t)},[e,i,u]),W=s.useCallback(t=>{e.setCigarClickMapCanvasRef(t)},[e,i,u]);return a.jsxs("div",{className:r.rel,children:[a.jsx("canvas",{ref:J,width:u,height:i,className:r.mouseoverCanvas}),a.jsx("canvas",{ref:K,onMouseMove:t=>{var x;if(X!==void 0)f.current+=X-t.clientX,S(t.clientX),c.current||(c.current=!0,window.requestAnimationFrame(()=>{A(()=>{for(const o of d.views)o.horizontalScroll(f.current);f.current=0,c.current=!1})}));else{const o=e.clickMapCanvas,l=e.cigarClickMapCanvas;if(!o||!l)return;const p=o.getBoundingClientRect(),$=o.getContext("2d"),I=l.getContext("2d");if(!$||!I)return;const{clientX:T,clientY:L}=t,D=T-p.left,P=L-p.top;v(T),G(L);const[H,Q,Z]=$.getImageData(D,P,1,1).data,[ee,te,ne]=I.getImageData(D,P,1,1).data,se=Math.floor(O/e.numFeats),y=Y(H,Q,Z,se);if(e.setMouseoverId((x=e.featPositions[y])===null||x===void 0?void 0:x.f.id()),y===-1)b("");else if(e.featPositions[y]){const{f:re,cigar:E}=e.featPositions[y],oe=Math.floor(O/E.length),B=Y(ee,te,ne,oe);b(ue({feature:re,cigarOp:E[B],cigarOpLen:E[B+1]}))}}},onMouseLeave:()=>{e.setMouseoverId(void 0),_(void 0),S(void 0)},onMouseDown:t=>{S(t.clientX),_(t.clientX)},onMouseUp:t=>{S(void 0),N!==void 0&&Math.abs(t.clientX-N)<5&&ce(t,e)},onContextMenu:t=>{ie(t,e,h)},"data-testid":"synteny_canvas",className:r.mainCanvas,width:u,height:i}),a.jsx("canvas",{ref:U,className:r.pix,width:u,height:i}),a.jsx("canvas",{ref:W,className:r.pix,width:u,height:i}),C&&M&&g&&q?a.jsx(fe,{title:M}):null,w?a.jsx(le,{model:e,anchorEl:w,onClose:()=>{h(void 0)}}):null]})}),j=z()(e=>{const r=e.palette.action.disabledBackground;return{loading:{paddingLeft:"0.6em",backgroundColor:e.palette.background.default,backgroundImage:`repeating-linear-gradient(45deg, transparent, transparent 5px, ${r} 5px, ${r} 10px)`,textAlign:"center"},blockMessage:{background:"#f1f1f1",padding:10},blockError:{background:"#f1f1f1",padding:10,color:"red"}}});function ve(){const[e,r]=s.useState(!1),{classes:C}=j();return s.useEffect(()=>{const i=setTimeout(()=>{r(!0)},300);return()=>{clearTimeout(i)}}),e?a.jsx("div",{className:C.loading,children:a.jsx(V.LoadingEllipses,{})}):null}function pe({messageText:e}){const{classes:r}=j();return a.jsx("div",{className:r.blockMessage,children:e})}function Ce({error:e}){const{classes:r}=j();return a.jsx("div",{className:r.blockError,children:`${e}`})}const be=F(function({model:e}){return e.error?a.jsx(Ce,{error:e.error}):e.message?a.jsx(pe,{messageText:e.message}):e.features?a.jsx(ge,{model:e}):a.jsx(ve,{})});export{be as default};
//# sourceMappingURL=Component-CTc-5mbW.js.map
