import{o as x,m as d,c as p,j as e,bt as m,D as h,bu as j,T as k,aq as u,M as t,f as b,B as f,bv as g}from"./index-CGKDrrCR.js";import{d as y}from"./GridBookmarkWidget-bcOK_ipM.js";const v=d()({flexItem:{display:"flex",alignItems:"center",gap:"5px"},container:{display:"flex",flexFlow:"column",gap:"5px"}}),E=x(function({model:s,onClose:o}){const{classes:a}=v(),[l,n]=p.useState("BED"),{selectedBookmarks:r}=s,i=r.length===0;return e.jsxs(m.Dialog,{open:!0,onClose:()=>{o()},title:"Export bookmarks",children:[e.jsxs(h,{className:a.container,children:[e.jsx(j,{severity:"info",children:i?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"All bookmarks will be exported."}),e.jsx("br",{}),e.jsx("span",{children:"Use the checkboxes to select individual bookmarks to export."})]}):"Only selected bookmarks will be exported."}),e.jsxs("div",{className:a.flexItem,children:[e.jsx(k,{children:"Format to download:"}),e.jsxs(u,{size:"small",value:l,onChange:c=>{n(c.target.value)},children:[e.jsx(t,{value:"BED",children:"BED"}),e.jsx(t,{value:"TSV",children:"TSV"})]})]})]}),e.jsx(b,{children:e.jsx(f,{variant:"contained",color:"primary",startIcon:e.jsx(g,{}),onClick:()=>{y(l,s),o()},children:"Download"})})]})});export{E as default};
//# sourceMappingURL=ExportBookmarksDialog-Bgnb35w9.js.map
