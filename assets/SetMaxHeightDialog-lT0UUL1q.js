import{o as x,m as h,c as u,j as e,d,D as m,T as g,e as p,f as y,B as r}from"./index-CGKDrrCR.js";const j=h()({root:{width:500}}),S=x(function({model:s,handleClose:a}){const{classes:i}=j(),{maxHeight:n=""}=s,[t,c]=u.useState(`${n}`),o=t!==""&&!Number.isNaN(+t);return e.jsxs(d.Dialog,{open:!0,onClose:a,title:"Set max height",children:[e.jsxs(m,{className:i.root,children:[e.jsx(g,{children:'Set max height for the track. For example, you can increase this if the layout says "Max height reached"'}),e.jsx(p,{value:t,onChange:l=>{c(l.target.value)},placeholder:"Enter max score"}),o?null:e.jsx("div",{style:{color:"red"},children:"Invalid number"})]}),e.jsxs(y,{children:[e.jsx(r,{variant:"contained",color:"primary",type:"submit",autoFocus:!0,disabled:!o,onClick:()=>{s.setMaxHeight(+t),a()},children:"Submit"}),e.jsx(r,{variant:"contained",color:"secondary",onClick:()=>{a()},children:"Cancel"})]})]})});export{S as default};
//# sourceMappingURL=SetMaxHeightDialog-lT0UUL1q.js.map
