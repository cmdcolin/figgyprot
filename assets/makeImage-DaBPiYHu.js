import{n as Bo,b5 as io,b6 as co,ba as M,p as X,bb as ao,bc as lo,bd as Ho}from"./index-CGKDrrCR.js";const fo=7,ho=4.5,Fo=7,bo={C:"G",G:"C",A:"T",T:"A"},Go=.6;async function Yo(o,po){var P,R,j,N,B,H,F,G,L,Y;const{features:mo,regions:yo,bpPerPx:_,colorBy:W,displayCrossHatches:go,visibleModifications:z={},scaleOpts:Z,height:uo,theme:vo,config:w,ticks:To,stopToken:x}=po,ko=Bo.createJBrowseTheme(vo),u=yo[0],So=(u.end-u.start)/_,D=Ho,v=uo-D*2,oo={...Z,range:[0,v]},_o=io(oo),wo=io({...oo,range:[0,v/2],scaleType:"linear"}),Do=co(Z.scaleType),Co=co("linear"),Mo=M.readConfObject(w,"indicatorThreshold"),Io=M.readConfObject(w,"showInterbaseCounts"),Oo=M.readConfObject(w,"showArcs"),Ao=M.readConfObject(w,"showInterbaseIndicators"),b=e=>v-(_o(e)||0)+D,T=e=>b(Do)-b(e),eo=e=>v-(wo(e)||0)+D,to=e=>eo(Co)-eo(e),{bases:I,softclip:Eo,hardclip:Po,insertion:Ro}=ko.palette,k={A:I.A.main,C:I.C.main,G:I.G.main,T:I.T.main,insertion:Ro,softclip:Eo,hardclip:Po,total:M.readConfObject(w,"color"),mod_NONE:"blue",cpg_meth:"red",cpg_unmeth:"blue"},U=[...mo.values()];o.fillStyle=k.total;let O=performance.now();for(const e of U){if(e.get("type")==="skip")continue;const[C,h]=X.featureSpanPx(e,u,_),S=h-C+Go,f=e.get("score");o.fillRect(C,b(f),S,T(f)),performance.now()-O>400&&(ao(x),O=performance.now())}let no=0;const so=u.reversed?1/_:0,jo=W.type==="modifications",No=W.type==="methylation",A=(P=W.modifications)===null||P===void 0?void 0:P.isolatedModification;O=performance.now();for(const e of U){if(performance.now()-O>400&&ao(x),e.get("type")==="skip")continue;const[h,S]=X.featureSpanPx(e,u,_),f=e.get("snpinfo"),y=Math.max(S-h,1),r=e.get("score");if(jo){let i=0;const c=(R=f.refbase)===null||R===void 0?void 0:R.toUpperCase(),{nonmods:d,mods:l,snps:t,ref:n}=f;for(const a of Object.keys(d).sort().reverse()){const s=z[a.replace("nonmod_","")]||z[a.replace("mod_","")];if(!s){console.warn(`${a} not known yet`);continue}if(A&&s.type!==A)continue;const p=bo[s.base],$=s.base==="N"?r:(((j=t[s.base])===null||j===void 0?void 0:j.entryDepth)||0)+(((N=t[p])===null||N===void 0?void 0:N.entryDepth)||0)+(c===s.base?n[1]:0)+(c===p?n[-1]:0),J=s.base==="N"?r:(((B=t[s.base])===null||B===void 0?void 0:B.entryDepth)||0)+(((H=t[p])===null||H===void 0?void 0:H.entryDepth)||0)+(c===s.base?n.entryDepth:0)+(c===p?n.entryDepth:0),{entryDepth:V,avgProbability:q=0}=f.nonmods[a],g=J/r*(V/$),K=lo("blue",q),m=T(r),Q=b(r)+m;o.fillStyle=K,o.fillRect(Math.round(h),Q-(i+g*m),y,g*m),i+=g*m}for(const a of Object.keys(l).sort().reverse()){const s=z[a.replace("mod_","")];if(!s){console.warn(`${a} not known yet`);continue}if(A&&s.type!==A)continue;const p=bo[s.base],$=s.base==="N"?r:(((F=t[s.base])===null||F===void 0?void 0:F.entryDepth)||0)+(((G=t[p])===null||G===void 0?void 0:G.entryDepth)||0)+(c===s.base?n[1]:0)+(c===p?n[-1]:0),J=s.base==="N"?r:(((L=t[s.base])===null||L===void 0?void 0:L.entryDepth)||0)+(((Y=t[p])===null||Y===void 0?void 0:Y.entryDepth)||0)+(c===s.base?n.entryDepth:0)+(c===p?n.entryDepth:0),{entryDepth:V,avgProbability:q=0}=l[a],g=J/r*(V/$),ro=s.color||"black",K=lo(ro,q),m=T(r),Q=b(r)+m;o.fillStyle=K,o.fillRect(Math.round(h),Q-(i+g*m),y,g*m),i+=g*m}}else if(No){const{depth:i,nonmods:c,mods:d}=f;let l=0;for(const t of Object.keys(d).sort().reverse()){const{entryDepth:n}=d[t],a=T(r),s=b(r)+a;o.fillStyle=k[t]||"black",o.fillRect(Math.round(h),s-(n+l)/i*a,y,n/i*a),l+=n}for(const t of Object.keys(c).sort().reverse()){const{entryDepth:n}=c[t],a=T(r),s=b(r)+a;o.fillStyle=k[t]||"black",o.fillRect(Math.round(h),s-(n+l)/i*a,y,n/i*a),l+=n}}else{const{depth:i,snps:c}=f;let d=0;for(const l of Object.keys(c).sort().reverse()){const{entryDepth:t}=c[l],n=T(r),a=b(r)+n;o.fillStyle=k[l]||"black",o.fillRect(Math.round(h),a-(t+d)/i*n,y,t/i*n),d+=t}}const E=Object.keys(f.noncov);if(Io){let i=0;for(const c of E){const{entryDepth:d}=f.noncov[c],l=.6;o.fillStyle=k[c],o.fillRect(h-l+so,ho+to(i),l*2,to(d)),i+=d}}if(Ao){let i=0,c=0,d="";for(const t of E){const{entryDepth:n}=f.noncov[t];i+=n,n>c&&(c=n,d=t)}const l=Math.max(r,no);if(i>l*Mo&&l>Fo){o.fillStyle=k[d],o.beginPath();const t=h+so;o.moveTo(t-fo/2,0),o.lineTo(t+fo/2,0),o.lineTo(t,ho),o.fill()}}no=r}if(Oo)for(const e of U){if(e.get("type")!=="skip")continue;const C=e.get("start"),h=e.get("end"),[S,f]=X.bpSpanPx(C,h,u,_);o.beginPath();const y=e.get("effectiveStrand"),r="rgba(255,200,200,0.7)",E="rgba(200,200,255,0.7)",i="rgba(200,200,200,0.7)";y===1?o.strokeStyle=r:y===-1?o.strokeStyle=E:o.strokeStyle=i,o.lineWidth=Math.log(e.get("score")+1),o.moveTo(S,v-D*2),o.bezierCurveTo(S,0,f,0,f,v-D*2),o.stroke()}if(go){o.lineWidth=1,o.strokeStyle="rgba(140,140,140,0.8)";for(const e of To.values)o.beginPath(),o.moveTo(0,Math.round(b(e))),o.lineTo(So,Math.round(b(e))),o.stroke()}}export{Yo as makeImage};
//# sourceMappingURL=makeImage-DaBPiYHu.js.map
