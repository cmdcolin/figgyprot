import{S as y,b5 as ee,b6 as oe,b7 as k,J as p,b8 as x,b9 as g}from"./index-CGKDrrCR.js";function te(t,S){const i=t.toHsl(),l=i.l*(1+S);return x.colord({...i,l:p.clamp(l,0,100)})}function ne(t,S){const i=t.toHsl(),l=i.l*(1-S);return x.colord({...i,l:p.clamp(l,0,100)})}const O=.3,L=2;function se(t,S){const{features:i,bpPerPx:l,regions:R,scaleOpts:E,height:_,config:P,ticks:W,displayCrossHatches:X,offset:I=0,colorCallback:h,inverted:q,stopToken:C}=S,d=R[0],B=(d.end-d.start)/l,N=_-I*2,D=y.readConfObject(P,"filled"),K=y.readConfObject(P,"clipColor"),Y=y.readConfObject(P,"summaryScoreMode"),A=y.readConfObject(P,"bicolorPivotValue"),b=y.readConfObject(P,"minSize"),G=ee({...E,range:[0,N],inverted:q}),Q=oe(E.scaleType),J=G.domain(),H=J[0],T=J[1],m=e=>p.clamp(N-(G(e)||0),0,N)+I,U=e=>m(Q)-m(e),w=e=>D?U(e):Math.max(b,1);let M=!1,j=Number.NEGATIVE_INFINITY;const F=[],V=H<A&&T>A;let c=performance.now();if(Y==="whiskers"){let e,r;c=performance.now();for(const o of i.values()){performance.now()-c>400&&(k(C),c=performance.now());const[n,f]=p.featureSpanPx(o,d,l);if(o.get("summary")){const a=Math.max(f-n+O,b),s=o.get("maxScore"),u=h(o,s),v=V?u:u===e?r:r=te(x.colord(u),.4).toHex();g(n,m(s),a,w(s),t,v),e=u}}r=void 0,e=void 0,c=performance.now();for(const o of i.values()){performance.now()-c>400&&(k(C),c=performance.now());const[n,f]=p.featureSpanPx(o,d,l),a=o.get("score"),s=o.get("maxScore"),u=o.get("minScore"),v=o.get("summary"),z=h(o,a),Z=V&&v?z===e?r:r=x.colord(h(o,s)).mix(x.colord(h(o,u))).toString():z,$=Math.max(f-n+O,b);Math.floor(n)!==Math.floor(j)&&(F.push(o),j=n),M=M||a<H||a>T,g(n,m(a),$,w(a),t,Z),e=z}r=void 0,e=void 0,c=performance.now();for(const o of i.values()){performance.now()-c>400&&(k(C),c=performance.now());const[n,f]=p.featureSpanPx(o,d,l);if(o.get("summary")){const a=o.get("minScore"),s=h(o,a),u=Math.max(f-n+O,b),v=V?s:s===e?r:r=ne(x.colord(s),.4).toHex();g(n,m(a),u,w(a),t,v),e=s}}}else{c=performance.now();for(const e of i.values()){performance.now()-c>400&&(k(C),c=performance.now());const[r,o]=p.featureSpanPx(e,d,l);Math.floor(r)!==Math.floor(j)&&(F.push(e),j=r);const n=e.get("score"),f=h(e,n);M=M||n<H||n>T;const a=Math.max(o-r+O,b);if(Y==="max"){const s=e.get("summary")?e.get("maxScore"):n;g(r,m(s),a,w(s),t,f)}else if(Y==="min"){const s=e.get("summary")?e.get("minScore"):n;g(r,m(s),a,w(s),t,f)}else g(r,m(n),a,w(n),t,f)}}if(t.save(),M){t.fillStyle=K,c=performance.now();for(const e of i.values()){performance.now()-c>400&&(k(C),c=performance.now());const[r,o]=p.featureSpanPx(e,d,l),n=o-r+O,f=e.get("score");f>T?g(r,I,n,L,t):f<H&&E.scaleType!=="log"&&g(r,_,n,L,t)}}if(t.restore(),X){t.lineWidth=1,t.strokeStyle="rgba(200,200,200,0.5)";for(const e of W.values)t.beginPath(),t.moveTo(0,Math.round(m(e))),t.lineTo(B,Math.round(m(e))),t.stroke()}return{reducedFeatures:F}}export{se as drawXY};
//# sourceMappingURL=drawXY-Dx8DJxrp.js.map
