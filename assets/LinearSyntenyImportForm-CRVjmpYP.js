import{o as k,c as h,j as e,P as N,T as P,cD as E,c4 as I,h as b,R as C,at as R,eb as G,B as A,a8 as g,a9 as B,aq as V,M as W,aa as _,ap as H,ad as U,m as M,au as L,aw as D,ec as J,c3 as K}from"./index-CGKDrrCR.js";import{u as y}from"./index-CmLsXt2o.js";import"./Dialog-DMOWZHAH.js";function Q({radioOption:t,assembly1:n,assembly2:s,fileLocation:o,indexFileLocation:a,bed1Location:r,bed2Location:c}){if(t===".paf")return{type:"PAFAdapter",pafLocation:o,queryAssembly:n,targetAssembly:s};if(t===".out")return{type:"MashMapAdapter",outLocation:o,queryAssembly:n,targetAssembly:s};if(t===".delta")return{type:"DeltaAdapter",deltaLocation:o,queryAssembly:n,targetAssembly:s};if(t===".chain")return{type:"ChainAdapter",chainLocation:o,queryAssembly:n,targetAssembly:s};if(t===".anchors")return{type:"MCScanAnchorsAdapter",mcscanAnchorsLocation:o,bed1Location:r,bed2Location:c,assemblyNames:[n,s]};if(t===".anchors.simple")return{type:"MCScanSimpleAnchorsAdapter",mcscanSimpleAnchorsLocation:o,bed1Location:r,bed2Location:c,assemblyNames:[n,s]};if(t===".pif.gz")return{type:"PairwiseIndexedPAFAdapter",pifGzLocation:o,index:{location:a},assemblyNames:[n,s]};throw new Error(`Unknown to detect type ${t} from filename (select radio button to clarify)`)}function X(t){return t?t.uri||t.localPath||t.name:void 0}function Y(t){return t.endsWith(".gz")?t.slice(0,-3):t}function Z(t){return t.split("#")[0].split("?")[0].split("/").pop()}function O(t){const n=t.split(".").pop();return n?`.${n}`:""}const ee=k(function({model:t,assembly1:n,assembly2:s,selectedRow:o}){const[a,r]=h.useState(!1),[c,u]=h.useState(),[x,p]=h.useState(),[d,f]=h.useState(),[m,v]=h.useState(),[l,w]=h.useState(""),[F,T]=h.useState(),S=X(d),j=l||(S?O(Y(S)):"");h.useEffect(()=>{try{if(d){const i=S?Z(S):"MyTrack",z=`${i}-${Date.now()}-sessionTrack`;T(void 0),t.setImportFormSyntenyTrack(o,{type:"userOpened",value:{trackId:z,name:i,assemblyNames:[s,n],type:"SyntenyTrack",adapter:Q({radioOption:j,assembly1:a?s:n,assembly2:a?n:s,fileLocation:d,indexFileLocation:m,bed1Location:x,bed2Location:c})}})}}catch(i){console.error(i),T(i)}},[a,t,o,S,n,s,x,c,d,m,j]);const q={".paf":"minimap2 target.fa query.fa",".pif.gz":"minimap2 target.fa query.fa",".out":"mashmap target.fa query.fa",".delta":"mummer target.fa query.fa",".chain":"e.g. queryToTarget.chain"};return e.jsxs(N,{style:{padding:12},children:[F?e.jsx(y.ErrorMessage,{error:F}):null,e.jsx(P,{style:{textAlign:"center"},children:"Add a .paf (minimap2), .delta (Mummer), .chain (UCSC liftover), .anchors or .anchors.simple (MCScan), or .pif.gz (jbrowse CLI make-pif) file to view. These file types can also be gzipped."}),e.jsx(E,{value:j,onChange:i=>{w(i.target.value)},children:e.jsx(I,{container:!0,justifyContent:"center",children:[".paf",".delta",".out",".chain",".anchors",".anchors.simple",".pif.gz"].map(i=>e.jsx(b,{value:i,control:e.jsx(C,{}),label:i},i))})}),e.jsx(I,{container:!0,justifyContent:"center",children:j===".paf"||j===".out"||j===".delta"||j===".chain"||j===".pif.gz"?e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[e.jsx(y.FileSelector,{name:`${j} location`,inline:!0,description:"",location:d,setLocation:i=>{f(i)}}),e.jsxs("div",{children:[e.jsxs("div",{children:["Verify or click swap",e.jsx(R,{title:e.jsx("code",{children:q[j]}),children:e.jsx(G,{})})]}),e.jsxs("div",{style:{display:"flex",gap:20},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,alignItems:"center"},children:[e.jsx("div",{children:e.jsx("i",{children:a?s:n})}),e.jsx("div",{children:"query assembly"}),e.jsx("div",{children:e.jsx("i",{children:a?n:s})}),e.jsx("div",{children:"target assembly"})]}),e.jsx(A,{variant:"contained",onClick:()=>{r(!a)},children:"Swap?"})]})]})]}):l===".anchors"||l===".anchors.simple"?e.jsxs("div",{children:[e.jsxs("div",{style:{margin:20},children:["Open the ",l," and .bed files for both genome assemblies from the MCScan (Python version) pipeline"," ",e.jsx("a",{href:"https://github.com/tanghaibao/jcvi/wiki/MCscan-(Python-version)",children:"(more info)"})]}),e.jsxs("div",{children:[e.jsx(y.FileSelector,{inline:!0,name:l,location:d,setLocation:i=>{f(i)}}),e.jsx(y.FileSelector,{inline:!0,name:"genome 1 .bed (left column of anchors file)",description:"",location:x,setLocation:i=>{p(i)}}),e.jsx(y.FileSelector,{inline:!0,name:"genome 2 .bed (right column of anchors file)",description:"",location:c,setLocation:i=>{u(i)}})]}),e.jsxs("div",{style:{margin:"auto",display:"flex",justifyContent:"center",gap:20},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4,alignItems:"center"},children:[e.jsx("div",{children:e.jsx("i",{children:a?s:n})}),e.jsx("div",{children:"bed1 assembly"}),e.jsx("div",{children:e.jsx("i",{children:a?n:s})}),e.jsx("div",{children:"bed2 assembly"})]}),e.jsx(A,{variant:"contained",onClick:()=>{r(!a)},children:"Swap?"})]})]}):l===".pif.gz"?e.jsxs("div",{style:{display:"flex"},children:[e.jsx("div",{children:e.jsx(y.FileSelector,{name:`${l} location`,description:"",location:d,setLocation:i=>{f(i)}})}),e.jsx("div",{children:e.jsx(y.FileSelector,{name:`${l} index location`,description:"",location:m,setLocation:i=>{v(i)}})})]}):e.jsx(y.FileSelector,{name:l?`${l} location`:"",description:"",location:d,setLocation:i=>{f(i)}})})]})}),te=k(function({model:t,selectedRow:n,assembly1:s,assembly2:o}){var a;const r=g.getSession(t),{importFormSyntenyTrackSelections:c}=t,{tracks:u=[],sessionTracks:x=[]}=r,d=[...u,...x].filter(l=>{const w=B.readConfObject(l,"assemblyNames");return w.includes(s)&&w.includes(o)&&l.type.includes("Synteny")}),f=((a=d[0])===null||a===void 0?void 0:a.trackId)||"",m=c[n],v=(m==null?void 0:m.type)==="preConfigured"?m.value:void 0;return h.useEffect(()=>{t.setImportFormSyntenyTrack(n,{type:"preConfigured",value:f})},[o,s,f,n,t]),e.jsxs(N,{style:{padding:12},children:[e.jsx(P,{children:'Select a track from the select box below, the track will be shown when you hit "Launch".'}),v&&d.map(l=>l.trackId).includes(v)?e.jsx(V,{value:v,onChange:l=>{t.setImportFormSyntenyTrack(n,{type:"preConfigured",value:l.target.value})},children:d.map(l=>e.jsx(W,{value:l.trackId,children:_.getTrackName(l,r)},l.trackId))}):e.jsx(y.ErrorMessage,{error:`No synteny tracks found for ${s},${o}`})]})});function ne({model:t,assembly1:n,assembly2:s,selectedRow:o}){const[a,r]=h.useState("tracklist");return h.useEffect(()=>{a==="none"&&t.setImportFormSyntenyTrack(o,{type:"none"})},[a,t,o]),e.jsxs("div",{children:[e.jsx(H,{children:e.jsxs(E,{row:!0,value:a,"aria-labelledby":"group-label",onChange:c=>{r(c.target.value)},children:[e.jsx(b,{value:"none",control:e.jsx(C,{}),label:"None"}),e.jsx(b,{value:"tracklist",control:e.jsx(C,{}),label:"Existing track"}),e.jsx(b,{value:"custom",control:e.jsx(C,{}),label:"New track"})]})}),a==="custom"?e.jsx(ee,{model:t,selectedRow:o,assembly2:s,assembly1:n}):null,a==="tracklist"?e.jsx(te,{model:t,selectedRow:o,assembly1:n,assembly2:s}):null]})}const se=U(e.jsx("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos"),$=M()(t=>({mb:{marginBottom:10},button:{margin:t.spacing(2)},rel:{position:"relative"},synbutton:{position:"absolute",top:30},bg:{background:t.palette.divider}})),re=k(function({selectedRow:t,selectedAssemblyNames:n,setSelectedRow:s,setSelectedAssemblyNames:o,model:a}){const{classes:r,cx:c}=$(),u=g.getSession(a);return n.map((x,p)=>e.jsxs("div",{className:r.rel,children:[e.jsxs("span",{children:["Row ",p+1,": "]}),e.jsx(L,{disabled:n.length<=2,onClick:()=>{a.importFormRemoveRow(p),o(n.map((d,f)=>f===p?void 0:d).filter(g.notEmpty)),t>=n.length-2&&s(0)},children:e.jsx(D,{})}),e.jsx(y.AssemblySelector,{helperText:"",selected:x,onChange:d=>{o(n.map((f,m)=>m===p?d:f))},session:u}),p!==n.length-1?e.jsx(L,{"data-testid":"synbutton",className:c(r.synbutton,p===t?r.bg:void 0),onClick:()=>{s(p)},children:e.jsx(se,{})}):null]},`${x}-${p}`))}),ae=k(function({model:t,selectedAssemblyNames:n,setSelectedAssemblyNames:s,selectedRow:o,setSelectedRow:a,defaultAssemblyName:r,onLaunch:c}){const{classes:u}=$();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:u.mb,children:"Select assemblies for linear synteny view"}),e.jsx(re,{model:t,selectedAssemblyNames:n,setSelectedAssemblyNames:s,selectedRow:o,setSelectedRow:a}),e.jsxs("div",{children:[e.jsx(A,{className:u.button,variant:"contained",color:"secondary",onClick:()=>{s([...n,r])},children:"Add row"}),e.jsx(A,{className:u.button,onClick:c,variant:"contained",color:"primary",children:"Launch"})]})]})});async function oe({selectedAssemblyNames:t,model:n}){const s=g.getSession(n),{assemblyManager:o}=s,{importFormSyntenyTrackSelections:a}=n;n.setViews(await Promise.all(t.map(async r=>{const c=await o.waitForAssembly(r);if(!c)throw new Error(`Assembly "${r}" failed to load`);return{type:"LinearGenomeView",bpPerPx:1,offsetPx:0,hideHeader:!0,displayedRegions:c.regions}})));for(const r of n.views)r.setWidth(n.width),r.showAllRegions();g.isSessionWithAddTracks(s)?J(a).map((r,c)=>{var u;r.type==="userOpened"?(s.addTrackConf(r.value),n.toggleTrack((u=r.value)===null||u===void 0?void 0:u.trackId,c)):r.type==="preConfigured"&&n.showTrack(r.value,c)}):s.notify("Can't add tracks","warning"),n.clearImportFormSyntenyTracks()}const ie=M()(t=>({importFormContainer:{padding:t.spacing(4)},flex:{display:"flex",gap:90},rightPanel:{flexGrow:11},leftPanel:{flexGrow:4,flexShrink:0}})),ue=k(function({model:t}){const{classes:n}=ie(),s=g.getSession(t),{assemblyNames:o}=s,a=o[0]||"",[r,c]=h.useState(0),[u,x]=h.useState([a,a]),[p,d]=h.useState(),f=async()=>{try{d(void 0),await oe({selectedAssemblyNames:u,model:t})}catch(m){console.error(m),d(m)}};return e.jsxs(K,{className:n.importFormContainer,children:[p?e.jsx(y.ErrorMessage,{error:p}):null,e.jsxs("div",{className:n.flex,children:[e.jsx("div",{className:n.leftPanel,children:e.jsx(ae,{model:t,selectedAssemblyNames:u,setSelectedAssemblyNames:x,selectedRow:r,setSelectedRow:c,defaultAssemblyName:a,onLaunch:()=>{f()}})}),e.jsxs("div",{className:n.rightPanel,children:[e.jsxs("div",{children:["Synteny dataset to display between row ",r+1," and"," ",r+2]}),e.jsx(ne,{model:t,selectedRow:r,assembly1:u[r],assembly2:u[r+1]})]})]})]})});export{ue as default};
//# sourceMappingURL=LinearSyntenyImportForm-CRVjmpYP.js.map
