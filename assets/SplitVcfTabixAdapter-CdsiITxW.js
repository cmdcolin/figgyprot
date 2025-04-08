import{T as d}from"./tabixIndexedFile-D1WMCFJN.js";import{a_ as g,a$ as p,b0 as f,b1 as h}from"./index-CGKDrrCR.js";import{V as m,a as C}from"./index-CSgzi_hl.js";class v extends g.BaseFeatureDataAdapter{async configurePre(t){const e=this.getConf("indexType"),a=this.getConf("vcfGzLocationMap")[t],n=this.getConf("indexLocationMap")[t]||{uri:`${a.uri}.${e.toLowerCase()}`},o=p.openLocation(a,this.pluginManager),s=e==="CSI",i=new d({filehandle:o,csiFilehandle:s?p.openLocation(n,this.pluginManager):void 0,tbiFilehandle:s?void 0:p.openLocation(n,this.pluginManager),chunkCacheSize:50*2**20});return{vcf:i,parser:new m({header:await i.getHeader()})}}async configure(t,e){const{statusCallback:a=()=>{}}=e||{};return f.updateStatus("Downloading index",a,()=>this.configurePre(t))}async getRefNames(){return Object.keys(this.getConf("vcfGzLocationMap"))}getFeatures(t,e={}){return h(async a=>{const{refName:n,start:o,end:s}=t,{statusCallback:i=()=>{}}=e,{vcf:r,parser:c}=await this.configure(t.refName,e);await f.updateStatus("Downloading variants",i,()=>r.getLines(n,o,s,{lineCallback:(l,u)=>{a.next(new C({variant:c.parseLine(l),parser:c,id:`${this.id}-vcf-${u}`}))},...e})),a.complete()},e.stopToken)}async getSources(){const t=this.getConf("samplesTsvLocation"),e=Object.keys(this.getConf("vcfGzLocationMap"))[0];if(t.uri===""||t.uri==="/path/to/samples.tsv"){const{parser:a}=await this.configure(e);return a.samples.map(n=>({name:n}))}else{const n=(await f.fetchAndMaybeUnzipText(p.openLocation(t,this.pluginManager))).split(/\n|\r\n|\r/),o=n[0].split("	"),{parser:s}=await this.configure(e),i=new Set(s.samples);return n.slice(1).map(r=>{const c=r.split("	");return{name:c[0],...Object.fromEntries(c.slice(1).map((l,u)=>[o[u+1],l]))}}).filter(r=>i.has(r.name))}}freeResources(){}}export{v as default};
//# sourceMappingURL=SplitVcfTabixAdapter-CdsiITxW.js.map
