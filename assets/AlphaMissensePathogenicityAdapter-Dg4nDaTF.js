var p=Object.defineProperty;var m=(n,s,t)=>s in n?p(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t;var u=(n,s,t)=>m(n,typeof s!="symbol"?s+"":s,t);import{B as h,i as g,O as _}from"./index-D_X5Qra0.js";import{ah as c}from"./index-CGKDrrCR.js";class y extends h.BaseFeatureDataAdapter{constructor(){super(...arguments);u(this,"feats")}async loadDataP(){return(await g.openLocation(this.getConf("location")).readFile("utf8")).split(`
`).slice(1).map(a=>a.trim()).filter(a=>!!a).map((a,e)=>{const[o,r,f]=a.split(","),l=o[0],i=o.at(-1),d=o.slice(1,-1);return{uniqueId:`feat-${e}`,ref:l,variant:i,start:+d,end:+d+1,score:+r,am_class:f}})}async loadData(t={}){return this.feats||(this.feats=this.loadDataP().catch(a=>{throw this.feats=void 0,a})),this.feats}async getGlobalStats(t){const a=await this.loadData(),e=c.min(a.map(r=>r.score)),o=c.max(a.map(r=>r.score));return{scoreMin:e,scoreMax:o}}async getMultiRegionFeatureDensityStats(t){return{featureDensity:0}}async getRefNames(t={}){return[]}getFeatures(t,a={}){return _(async e=>{const{start:o,end:r,refName:f}=t,l=await this.loadData();for(const i of l)c.doesIntersect2(i.start,i.end,o,r)&&e.next(new c.SimpleFeature({...i,refName:f,source:i.variant}));e.complete()})}async getSources(){const t=new Set,a=await this.loadData();for(const e of a)t.add(e.variant);return[...t].map(e=>({name:e,__name:e}))}freeResources(){}}u(y,"capabilities",["getFeatures","getRefNames"]);export{y as default};
//# sourceMappingURL=AlphaMissensePathogenicityAdapter-Dg4nDaTF.js.map
