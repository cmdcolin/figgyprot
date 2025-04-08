import{o as U,m as P,c as t,bG as D,j as e,bB as y,D as E,bC as g,e as u,au as A,bH as L,bI as M,f as N,B as h}from"./index-CGKDrrCR.js";const O=P()(a=>({dialogContent:{display:"flex",flexDirection:"column"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:a.transitions.create("transform",{duration:a.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}})),k=U(function({onClose:a,model:x}){const{classes:s,cx:p}=O(),[i,b]=t.useState(""),[l,f]=t.useState(""),[o,j]=t.useState(""),[r,v]=t.useState(""),[d,C]=t.useState(!1),{jbrowse:c}=D.getSession(x),S=!!(i&&l||o||r);function m(){i&&l?c.addPlugin({name:i,umdUrl:l}):o?c.addPlugin({esmUrl:o}):r&&c.addPlugin({cjsUrl:r})}return e.jsx(y.Dialog,{open:!0,onClose:a,title:"Add custom plugin",children:e.jsxs("form",{onSubmit:m,children:[e.jsxs(E,{className:s.dialogContent,children:[e.jsx(g,{children:"Enter the name of the plugin and its URL. The name should match what is defined in the plugin's build."}),e.jsx(u,{label:"Plugin name",variant:"outlined",value:i,onChange:n=>{b(n.target.value)}}),e.jsx(u,{label:"Plugin URL",variant:"outlined",value:l,onChange:n=>{f(n.target.value)}}),e.jsxs(g,{onClick:()=>{C(!d)},children:[e.jsx(A,{className:p(s.expand,{[s.expandOpen]:d}),"aria-expanded":d,"aria-label":"show more",children:e.jsx(L,{})}),"Advanced options"]}),e.jsx(M,{in:d,children:e.jsxs("div",{className:s.dialogContent,children:[e.jsx(g,{children:"The above fields assume that the plugin is built in UMD format. If your plugin is in another format, or you have additional builds you want to add (such as a CJS build for using NodeJS APIs in desktop), you can enter the URLs for those builds below."}),e.jsx(u,{label:"ESM build URL",variant:"outlined",value:o,onChange:n=>{j(n.target.value)}}),e.jsx(u,{label:"CJS build URL",variant:"outlined",value:r,onChange:n=>{v(n.target.value)}})]})})]}),e.jsxs(N,{children:[e.jsx(h,{variant:"contained",onClick:a,children:"Cancel"}),e.jsx(h,{variant:"contained",color:"primary",onClick:m,disabled:!S,children:"Submit"})]})]})})});export{k as default};
//# sourceMappingURL=AddCustomPluginDialog-Bnvi5N7z.js.map
