import{U as g,V as u,J as i,W as p,X as S,y as n,Z as d}from"./index-CGKDrrCR.js";function y(t){g(t,u(async()=>{try{const o=i.getContainingView(t);if(!o.initialized)return;const{rpcManager:e}=i.getSession(t),{adapterConfig:r}=t,c=p();t.setSourcesLoading(c);const s=S.getRpcSessionId(t),a=await e.call(s,"MultiWiggleGetSources",{regions:o.staticBlocks.contentBlocks,sessionId:s,adapterConfig:r});n(t)&&t.setSources(a)}catch(o){!d(o)&&n(t)&&(console.error(o),i.getSession(t).notifyError(`${o}`,o))}}))}export{y as getMultiWiggleSourcesAutorun};
//# sourceMappingURL=getMultiWiggleSourcesAutorun-qHD_ipTj.js.map
