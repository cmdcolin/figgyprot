import{c as N,j as v,cz as O,eu as Z,bO as q,bN as _,ev as ee,ew as te,ex as re,ey as ne,ez as se,eA as oe,eB as ae,db as ie,bM as ce}from"./index-CGKDrrCR.js";var R={},F={};Object.defineProperty(F,"__esModule",{value:!0});F.ErrorBoundary=void 0;const le=v,ue=N;class de extends ue.Component{constructor(t){super(t),this.state={error:void 0}}componentDidCatch(t,d){console.error("ErrorBoundary caught an error:",t,d),this.setState({error:t})}render(){return this.state.error?(0,le.jsx)(this.props.FallbackComponent,{error:this.state.error}):this.props.children}}F.ErrorBoundary=de;var L={},J={};Object.defineProperty(J,"__esModule",{value:!0});J.default=_e;const fe=v,pe=O,he=(0,pe.makeStyles)()(a=>({bg:{padding:4,margin:4,overflow:"auto",maxHeight:200,background:a.palette.mode==="dark"?"#833":"#f88",border:`1px solid ${a.palette.divider}`}}));function _e({children:a}){const{classes:t}=he();return(0,fe.jsx)("div",{className:t.bg,children:a})}var P={},z={};Object.defineProperty(z,"__esModule",{value:!0});z.default=ye;const me=v,ge=q,xe=Z,be=O,je=(0,be.makeStyles)()({dots:{"&::after":{display:"inline-block",content:'""',width:"1em",textAlign:"left",animation:`${(0,xe.keyframes)`
      0% {
        content: '';
      }
      25% {
          content: '.';
      }
      50% {
        content: '..';
      }
      75% {
        content: '...';
      }
      `} 1.2s infinite ease-in-out`}}});function ye({message:a,variant:t="body2",...d}){const{cx:f,classes:l}=je();return(0,me.jsx)(ge.Typography,{className:f(l.dots,d.className),...d,variant:t,children:a||"Loading"})}var G;function ve(){if(G)return P;G=1;var a=_&&_.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(P,"__esModule",{value:!0}),P.default=c;const t=v,d=N,f=q,l=a(ee()),p=te(),M=O,E=a(De()),b=a(z);function S({href:e,children:s}){return(0,t.jsx)(f.Link,{target:"_blank",href:e,children:s})}async function $(e){const s=await fetch(e);if(!s.ok)throw new Error(`HTTP ${s.status} fetching ${e}: ${await s.text()}`);return s}async function B(e){return(await $(e)).json()}async function k(e){return(await $(e)).text()}const u={};async function T(e){var s;if(u[e]!==void 0)return u[e];const m=new URL(e).search,g=await k(e);let h=((s=new RegExp(/\/\/# sourceMappingURL=(.*)/).exec(g))===null||s===void 0?void 0:s[1])||"";h=new URL(h,e).href+m;const j=await B(h),y=new p.SourceMapConsumer(j);return u[e]=y,y}async function D(e){const s=e.split(`
`),m=[];for(const g of s){const h=new RegExp(/(.*)(https?:\/\/.*):(\d+):(\d+)/).exec(g);if(h===null){m.push(g);continue}const j=h[2],x=(await T(j)).originalPositionFor({line:Number.parseInt(h[3]),column:Number.parseInt(h[4])});if(!x.source||!x.line||!x.column){m.push(g);continue}m.push(`${x.source}:${x.line}:${x.column+1} (${h[1].trim()})`)}return m.join(`
`)}const r=1e4;function n(e,s){if(e.startsWith("Error:")){const m=`${s}`;return e.slice(m.length)}else return e}const i=(0,M.makeStyles)()(e=>({pre:{background:(0,f.alpha)(e.palette.error.main,.2),border:`1px solid ${e.palette.divider}`,overflow:"auto",margin:20,maxHeight:300}}));function o({text:e,extra:s}){const{classes:m}=i(),g=encodeURIComponent(`${[`I got this error from JBrowse, here is the stack trace:
`,"```",e,"```",s?`supporting data: ${JSON.stringify(s,null,2)}`:""].join(`
`)}
`),h=[e,s?`supporting data: ${JSON.stringify(s,null,2)}`:""].join(`
`),j="jbrowse2@berkeley.edu",y=`https://github.com/GMOD/jbrowse-components/issues/new?labels=bug&title=JBrowse+issue&body=${g}`,x=`mailto:${j}?subject=JBrowse%202%20error&body=${g}`;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(f.Typography,{children:["Post a new issue at ",(0,t.jsx)(S,{href:y,children:"GitHub"})," or send an email to ",(0,t.jsx)(S,{href:x,children:j})," "]}),(0,t.jsx)("pre",{className:m.pre,children:h})]})}function c({error:e,onClose:s,extra:m}){const[g,h]=(0,d.useState)(),[j,y]=(0,d.useState)(),[x,A]=(0,d.useState)(!1),Y=`${typeof e=="object"&&e!==null&&"stack"in e?e.stack:""}`,C=e?`${e}`:"",H=n(Y,C);(0,d.useEffect)(()=>{(async()=>{try{const w=await D(H);h(w)}catch(w){console.error(w),h(H),y(w)}})()},[H]);const U=[j?"Error loading source map, showing raw stack trace below:":"",C.length>r?`${C.slice(0,r)}...`:C,g||"No stack trace available",window.JBrowseSession?`JBrowse ${window.JBrowseSession.version}`:""].filter(w=>!!w).join(`
`);return(0,t.jsxs)(E.default,{open:!0,onClose:s,title:"Stack trace",maxWidth:"xl",children:[(0,t.jsx)(f.DialogContent,{children:g===void 0?(0,t.jsx)(b.default,{variant:"h6"}):(0,t.jsx)(o,{text:U,extra:m})}),(0,t.jsxs)(f.DialogActions,{children:[(0,t.jsx)(f.Button,{variant:"contained",color:"secondary",onClick:()=>{(0,l.default)(U),A(!0),setTimeout(()=>{A(!1)},1e3)},children:x?"Copied!":"Copy stack trace to clipboard"}),(0,t.jsx)(f.Button,{variant:"contained",color:"primary",onClick:s,children:"Close"})]})]})}return P}var W;function Se(){if(W)return L;W=1;var a=_&&_.__createBinding||(Object.create?function(r,n,i,o){o===void 0&&(o=i);var c=Object.getOwnPropertyDescriptor(n,i);(!c||("get"in c?!n.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return n[i]}}),Object.defineProperty(r,o,c)}:function(r,n,i,o){o===void 0&&(o=i),r[o]=n[i]}),t=_&&_.__setModuleDefault||(Object.create?function(r,n){Object.defineProperty(r,"default",{enumerable:!0,value:n})}:function(r,n){r.default=n}),d=_&&_.__importStar||function(){var r=function(n){return r=Object.getOwnPropertyNames||function(i){var o=[];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(o[o.length]=c);return o},r(n)};return function(n){if(n&&n.__esModule)return n;var i={};if(n!=null)for(var o=r(n),c=0;c<o.length;c++)o[c]!=="default"&&a(i,n,o[c]);return t(i,n),i}}(),f=_&&_.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(L,"__esModule",{value:!0});const l=v,p=N,M=f(re),E=f(ne),b=q,S=O,$=f(J),B=(0,p.lazy)(()=>Promise.resolve().then(()=>d(ve()))),k=(0,S.makeStyles)()(r=>({bg:{background:r.palette.divider,border:"1px solid black",margin:20},iconFloat:{float:"right",marginLeft:100}}));function u(r){let n="";const i="is not assignable",o=r.indexOf(i);if(o!==-1){const c=r.slice(0,o+i.length),e=/.*at path "(.*)" snapshot `(.*)` is not assignable/m.exec(c);e&&(r=`Failed to load element at ${e[1]}...Failed element had snapshot`,n=e[2]);const s=/.*snapshot `(.*)` is not assignable/.exec(c);s&&(r="Failed to load element...Failed element had snapshot",n=s[1])}return n}function T({error:r,onReset:n}){const{classes:i}=k(),[o,c]=(0,p.useState)(!1);return(0,l.jsxs)("div",{className:i.iconFloat,children:[typeof r=="object"&&r&&"stack"in r?(0,l.jsx)(b.Tooltip,{title:"Get stack trace",children:(0,l.jsx)(b.IconButton,{onClick:()=>{c(!0)},color:"primary",children:(0,l.jsx)(E.default,{})})}):null,n?(0,l.jsx)(b.Tooltip,{title:"Retry",children:(0,l.jsx)(b.IconButton,{onClick:n,color:"primary",children:(0,l.jsx)(M.default,{})})}):null,o?(0,l.jsx)(p.Suspense,{fallback:null,children:(0,l.jsx)(B,{error:r,onClose:()=>{c(!1)}})}):null]})}function D({error:r,onReset:n}){const{classes:i}=k(),o=`${r}`,c=o.indexOf("expected an instance of"),e=c!==-1?o.slice(0,c):o,s=u(o);return(0,l.jsxs)($.default,{children:[e.slice(0,1e4),(0,l.jsx)(T,{error:r,onReset:n}),s?(0,l.jsx)("pre",{className:i.bg,children:JSON.stringify(JSON.parse(s),null,2)}):null]})}return L.default=D,L}var I={},X=_&&_.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(I,"__esModule",{value:!0});I.default=Te;const $e=v,K=X(se),ke=X(oe),we=ae(),Me=["a","b","br","code","div","em","h1","h2","h3","h4","h5","h6","i","img","li","p","pre","span","small","strong","table","tbody","sup","sub","td","tfoot","th","thead","tr","u","ul"];let Q=!1;const Ee=new RegExp(Me.map(a=>`<${a}\\b[^>]*>`).join("|"),"i");function Be(a){return Ee.test(a)}function Te({html:a,className:t}){const d=(0,we.linkify)(`${a}`),f=Be(d)?d:(0,ke.default)(d);return Q||(Q=!0,K.default.addHook("afterSanitizeAttributes",l=>{l.tagName==="A"&&(l.setAttribute("rel","noopener noreferrer"),l.setAttribute("target","_blank"))})),(0,$e.jsx)("span",{className:t,dangerouslySetInnerHTML:{__html:K.default.sanitize(f)}})}var V;function De(){if(V)return R;V=1;var a=_&&_.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(R,"__esModule",{value:!0});const t=v,d=N,f=F,l=a(ie),p=q,M=ce,E=O,b=a(Se()),S=a(I),$=(0,E.makeStyles)()(u=>({closeButton:{position:"absolute",right:u.spacing(1),top:u.spacing(1),color:u.palette.grey[500]}}));function B({error:u}){return(0,t.jsx)("div",{style:{width:800,margin:40},children:(0,t.jsx)(b.default,{error:u})})}const k=(0,M.observer)(function(u){const{classes:T}=$(),{title:D,header:r,children:n,onClose:i}=u,o=(0,p.useTheme)();return(0,t.jsx)(p.Dialog,{...u,children:(0,t.jsxs)(p.ScopedCssBaseline,{children:[(0,d.isValidElement)(r)?r:(0,t.jsxs)(p.DialogTitle,{children:[(0,t.jsx)(S.default,{html:D||""}),i?(0,t.jsx)(p.IconButton,{className:T.closeButton,onClick:()=>{i()},children:(0,t.jsx)(l.default,{})}):null]}),(0,t.jsx)(p.Divider,{}),(0,t.jsx)(f.ErrorBoundary,{FallbackComponent:B,children:(0,t.jsx)(p.ThemeProvider,{theme:(0,p.createTheme)(o,{components:{MuiInputBase:{styleOverrides:{input:{boxSizing:"content-box!important"}}}}}),children:n})})]})})});return R.default=k,R}export{F as E,z as L,I as S,Se as a,De as r};
//# sourceMappingURL=Dialog-DMOWZHAH.js.map
