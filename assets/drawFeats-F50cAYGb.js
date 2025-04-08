import{ba as I,p as T,E as L}from"./index-CGKDrrCR.js";import{s as V,f as U,g as $,a as B,b as F}from"./color-1oA5eWCF.js";function R(t,a,n,o,r,c){n<0&&(t+=n,n=-n),o<0&&(a+=o,o=-o),c&&(r.fillStyle=c),r.fillRect(t,a,n,o)}function E(t,a,n,o,r,c){n<0&&(t+=n,n=-n),o<0&&(a+=o,o=-o),c&&(r.strokeStyle=c),r.strokeRect(t,a,n,o)}function j({ctx:t,self:a,chainData:n,view:o,asm:r}){var c,m,N,b,_;const C=[],{chains:A}=n,{height:v}=a,u=I.getConf(a,"featureHeight");for(const h of A){let f=Number.MAX_VALUE,e=Number.MIN_VALUE;for(const s of h){const i=r.getCanonicalRefName(s.refName)||s.refName,d=(c=o.bpToPx({refName:i,coord:s.start}))===null||c===void 0?void 0:c.offsetPx,l=(m=o.bpToPx({refName:i,coord:s.end}))===null||m===void 0?void 0:m.offsetPx;d!==void 0&&l!==void 0&&(f=Math.min(f,d),e=Math.max(e,l))}C.push({distance:Math.abs(e-f),minX:f,chain:h})}const k=C.map(h=>h.distance),y=Math.log(T.max(k)),H=Math.max(Math.log(T.min(k))-1,0),O=(v-20)/(y-H),z=u/2-.5;for(const{minX:h,distance:f,chain:e}of C){const s=f,i=(Math.log(s)-H)*O;R(h-o.offsetPx,i+z,s,1,t,"black");const d=e[0];let l;d.flags&2048?l=((N=d.SA)===null||N===void 0?void 0:N.split(";")[0].split(",")[2])==="-"?-1:1:l=d.strand;for(const P of e){const M=r.getCanonicalRefName(P.refName)||P.refName,g=(b=o.bpToPx({refName:M,coord:P.start}))===null||b===void 0?void 0:b.offsetPx,p=(_=o.bpToPx({refName:M,coord:P.end}))===null||_===void 0?void 0:_.offsetPx;if(g!==void 0&&p!==void 0){const S=Math.max(p-g,2),x=g-o.offsetPx,D=P.strand*l===-1?"color_rev_strand":"color_fwd_strand";E(x,i,S,u,t,V[D]),R(x,i,S,u,t,U[D])}}}}function q({ctx:t,self:a,chainData:n,view:o,asm:r}){var c,m,N,b,_,C,A;const v=[],u=I.getConf(a,"featureHeight"),k=((c=a.colorBy)===null||c===void 0?void 0:c.type)||"insertSizeAndOrientation",{chains:y,stats:H}=n;for(const f of y)if(f.length>1){const e=f[0],s=f[1],i=r.getCanonicalRefName(e.refName)||e.refName,d=r.getCanonicalRefName(s.refName)||s.refName,l=(m=o.bpToPx({refName:i,coord:e.start}))===null||m===void 0?void 0:m.offsetPx,P=(N=o.bpToPx({refName:i,coord:e.end}))===null||N===void 0?void 0:N.offsetPx,M=(b=o.bpToPx({refName:d,coord:s.start}))===null||b===void 0?void 0:b.offsetPx,g=(_=o.bpToPx({refName:d,coord:s.end}))===null||_===void 0?void 0:_.offsetPx;let p=0;if(l!==void 0&&P!==void 0&&M!==void 0&&g!==void 0){if(e.refName===s.refName){const S=Math.min(e.start,s.start),x=Math.max(e.end,s.end);p=Math.abs(x-S)}v.push({r1s:l,r1e:P,r2s:M,r2e:g,v0:e,v1:s,distance:p})}}else if(a.drawSingletons){const e=f[0],s=r.getCanonicalRefName(e.refName)||e.refName,i=(C=o.bpToPx({refName:s,coord:e.start}))===null||C===void 0?void 0:C.offsetPx,d=(A=o.bpToPx({refName:s,coord:e.end}))===null||A===void 0?void 0:A.offsetPx;if(i!==void 0&&d!==void 0){const l=Math.max(d-i,2);R(i-o.offsetPx,0,l,u,t,"#f00"),E(i-o.offsetPx,0,l,u,t,"#a00")}}const O=Math.log(T.max(v.map(f=>f.distance))),z=Math.max(Math.log(T.min(v.map(f=>f.distance)))-1,0),h=(a.height-20)/(O-z);for(const{r1e:f,r1s:e,r2e:s,r2s:i,distance:d,v0:l,v1:P}of v){const M=Math.max(f-e,2),g=Math.max(s-i,2),[p,S]=G({type:k,v0:l,v1:P,stats:H})||[],x=(Math.log(d)-z)*h,X=u/2-.5,D=i-f;R(f-o.offsetPx,x+X,D,1,t,"black"),E(e-o.offsetPx,x,M,u,t,S),E(i-o.offsetPx,x,g,u,t,S),R(e-o.offsetPx,x,M,u,t,p),R(i-o.offsetPx,x,g,u,t,p)}}function G({type:t,v0:a,v1:n,stats:o}){if(t==="insertSizeAndOrientation")return $(a,n,o);if(t==="orientation")return B(a);if(t==="insertSize")return F(a,n,o);if(t==="gradient"){const r=Math.min(a.start,n.start),c=Math.max(a.end,n.end);return[`hsl(${Math.log10(Math.abs(c-r))*10},50%,50%)`,`hsl(${Math.log10(Math.abs(c-r))*10},50%,30%)`]}}function Q(t,a){const{chainData:n}=t;if(!n)return;const{assemblyManager:o}=T.getSession(t),r=T.getContainingView(t),c=r.assemblyNames[0],m=o.get(c);if(!m)return;L(n)?q({self:t,view:r,asm:m,ctx:a,chainData:n}):j({self:t,view:r,asm:m,ctx:a,chainData:n})}export{Q as drawFeats};
//# sourceMappingURL=drawFeats-F50cAYGb.js.map
