import{B as C,f as b}from"./util-DreLZf5p.js";import{T as w}from"./tabixIndexedFile-D1WMCFJN.js";import{aH as c,aI as u}from"./index-CGKDrrCR.js";import{B as x,i as d,O as N}from"./index-BjO4yXzc.js";class S extends x.BaseFeatureDataAdapter{constructor(e,a,t){super(e,a,t);const s=this.getConf("bedGzLocation"),n=this.getConf(["index","indexType"]),r=this.getConf(["index","location"]),o=this.getConf("autoSql"),i=this.pluginManager;this.bed=new w({filehandle:d.openLocation(s,i),csiFilehandle:n==="CSI"?d.openLocation(r,i):void 0,tbiFilehandle:n!=="CSI"?d.openLocation(r,i):void 0,chunkCacheSize:50*2**20}),this.columnNames=this.getConf("columnNames"),this.scoreColumn=this.getConf("scoreColumn"),this.parser=new C({autoSql:o})}async getRefNames(e={}){return this.bed.getReferenceSequenceNames(e)}async getHeader(e){return this.bed.getHeader(e)}async getMetadataPre2(e){return this.setupP||(this.setupP=this.getMetadataPre().catch(a=>{throw this.setupP=void 0,a})),this.setupP}async getMetadataPre(){return{meta:await this.bed.getMetadata()}}async getMetadata(e){const{statusCallback:a=()=>{}}=e||{};return c.updateStatus("Downloading index",a,()=>this.getMetadataPre2(e))}async getNames(){if(this.columnNames.length)return this.columnNames;const t=(await this.getHeader()).split(/\n|\r\n|\r/).filter(s=>!!s).at(-1);return t!=null&&t.includes("	")?t.slice(1).split("	").map(s=>s.trim()):void 0}getFeatures(e,a){const{stopToken:t,statusCallback:s=()=>{}}=a||{};return N(async n=>{const{meta:r}=await this.getMetadata(),{columnNumbers:o}=r,i=o.ref-1,h=o.start-1,m=o.end-1,p=await this.getNames();let l=performance.now();u(t),await c.updateStatus("Downloading features",s,()=>this.bed.getLines(e.refName,e.start,e.end,{lineCallback:(f,g)=>{performance.now()-l>200&&(u(t),l=performance.now()),n.next(new c.SimpleFeature(b({line:f,colRef:i,colStart:h,colEnd:m,scoreColumn:this.scoreColumn,parser:this.parser,uniqueId:`${this.id}-${g}`,names:p})))},stopToken:t})),n.complete()},t)}freeResources(){}}S.capabilities=["getFeatures","getRefNames"];export{S as default};
//# sourceMappingURL=BedTabixAdapter-BaE7gOnM.js.map
