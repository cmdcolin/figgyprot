const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ModalWidget-Dz9QfrP3.js","./index-CGKDrrCR.js","./index-DIqbght7.css"])))=>i.map(i=>d[i]);
import{o as h,m,c,j as e,P as W,dx as j,au as g,dy as C,at as v,dz as D,aw as E,dA as k,M as y,ah as b,ap as z,aq as I,T as x,dv as _,bz as T,bA as S,dB as H,dC as M,by as f,_ as P}from"./index-CGKDrrCR.js";const F=m()(t=>({paper:{overflowY:"auto",height:"100%",position:"relative",zIndex:t.zIndex.drawer,outline:"none",background:t.palette.background.default},resizeHandle:{width:4,position:"fixed",top:0,zIndex:t.zIndex.drawer+1}})),L=h(function({children:t,session:n}){const{drawerPosition:d,drawerWidth:a}=n,{classes:i}=F(),r=c.useRef(null);return c.useEffect(()=>{function o(s){var l,u,p;if(s.target instanceof Element&&(!((l=r.current)===null||l===void 0)&&l.contains(s.target))){const w=(p=(u=n.visibleWidget)===null||u===void 0?void 0:u.view)===null||p===void 0?void 0:p.id;w&&n.setFocusedViewId(w)}}return document.addEventListener("mousedown",o),document.addEventListener("keydown",o),()=>{document.removeEventListener("mousedown",o),document.removeEventListener("keydown",o)}},[n]),e.jsxs(W,{ref:r,className:i.paper,elevation:16,square:!0,children:[d==="right"?e.jsx(j,{onDrag:n.resizeDrawer,className:i.resizeHandle,vertical:!0}):null,t,d==="left"?e.jsx(j,{onDrag:n.resizeDrawer,className:i.resizeHandle,style:{left:a},vertical:!0}):null]})}),N=h(function({session:t}){const[n,d]=c.useState(null),{drawerPosition:a,visibleWidget:i}=t;return e.jsxs(e.Fragment,{children:[e.jsx(g,{color:"inherit",onClick:r=>{d(r.currentTarget)},children:e.jsx(C,{})}),e.jsx(v,{title:"Minimize drawer",children:e.jsx(g,{"data-testid":"drawer-minimize",color:"inherit",onClick:()=>{t.notify(`Drawer minimized, click button on ${a} side of screen to re-open`,"info"),t.minimizeWidgetDrawer()},children:e.jsx(D,{})})}),e.jsx(v,{title:"Close drawer",children:e.jsx(g,{color:"inherit",onClick:()=>{t.hideWidget(i)},children:e.jsx(E,{})})}),e.jsx(k,{anchorEl:n,open:!!n,onClose:()=>{d(null)},children:["left","right"].map(r=>e.jsx(y,{selected:a==="option",onClick:()=>{t.setDrawerPosition(r),d(null)},children:r},r))})]})}),V=m()(t=>({formControl:{margin:0},drawerSelect:{margin:0,color:t.palette.secondary.contrastText},dropDownIcon:{color:t.palette.secondary.contrastText}})),B=h(function({session:t}){const{visibleWidget:n,activeWidgets:d}=t,{classes:a}=V(),{pluginManager:i}=b.getEnv(t);return e.jsx(z,{className:a.formControl,children:e.jsx(I,{value:n==null?void 0:n.id,"data-testid":"widget-drawer-selects",className:a.drawerSelect,classes:{icon:a.dropDownIcon},renderValue:r=>{const o=t.activeWidgets.get(r);if(!o)return e.jsx(x,{variant:"h6",color:"inherit",children:"Unknown widget"});const s=i.getWidgetType(o.type),{HeadingComponent:l,heading:u}=s;return l?e.jsx(l,{model:o}):e.jsx(x,{variant:"h6",color:"inherit",children:u})},onChange:r=>{const o=t.activeWidgets.get(r.target.value);o?t.showWidget(o):t.notify(`Widget not found ${r.target.value}`,"warning")},children:[...d.values()].map(r=>{const o=i.getWidgetType(r.type),{HeadingComponent:s,heading:l}=o;return e.jsxs(y,{"data-testid":`widget-drawer-selects-item-${r.type}`,value:r.id,children:[s?e.jsx(s,{model:r}):e.jsx(x,{variant:"h6",color:"inherit",children:l}),e.jsx(g,{"data-testid":`${r.type}-drawer-delete`,color:"inherit","aria-label":"Delete",onClick:()=>{t.hideWidget(r)},children:e.jsx(_,{})})]},r.id)})})})}),$=m()(t=>({spacer:{flexGrow:1},headerFocused:{background:t.palette.secondary.main},headerUnfocused:{background:t.palette.secondary.dark}})),A=h(function({session:t,setToolbarHeight:n,onPopoutDrawer:d}){var a,i;const{classes:r}=$(),o=t.focusedViewId,s=(i=(a=t.visibleWidget)===null||a===void 0?void 0:a.view)===null||i===void 0?void 0:i.id;return e.jsx(T,{position:"sticky",className:o===s?r.headerFocused:r.headerUnfocused,ref:l=>{n((l==null?void 0:l.getBoundingClientRect().height)||0)},children:e.jsxs(S,{disableGutters:!0,children:[e.jsx(B,{session:t}),e.jsx(v,{title:"Open drawer in dialog",children:e.jsx(g,{color:"inherit",onClick:()=>{d()},children:e.jsx(H,{})})}),e.jsx("div",{className:r.spacer}),e.jsx(N,{session:t})]})})}),R=c.lazy(()=>P(()=>import("./ModalWidget-Dz9QfrP3.js"),__vite__mapDeps([0,1,2]),import.meta.url)),U=h(function({session:t}){const{visibleWidget:n}=t,{pluginManager:d}=b.getEnv(t),a=n?d.evaluateExtensionPoint("Core-replaceWidget",d.getWidgetType(n.type).ReactComponent,{session:t,model:n}):null,[i,r]=c.useState(0),[o,s]=c.useState(!1);return e.jsxs(L,{session:t,children:[e.jsx(A,{onPopoutDrawer:()=>{s(!0)},session:t,setToolbarHeight:r}),e.jsx(c.Suspense,{fallback:e.jsx(f.LoadingEllipses,{}),children:e.jsx(M,{FallbackComponent:({error:l})=>e.jsx(f.ErrorMessage,{error:l}),children:a?o?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:"Opened in dialog..."}),e.jsx(R,{session:t,onClose:()=>{s(!1)}})]}):e.jsxs(e.Fragment,{children:[e.jsx(a,{model:n,session:t,toolbarHeight:i}),e.jsx("div",{style:{height:300}})]}):null})})]})});export{U as default};
//# sourceMappingURL=DrawerWidget-Bfpm74Sg.js.map
