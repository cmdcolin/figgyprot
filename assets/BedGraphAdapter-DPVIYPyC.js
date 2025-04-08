import{I as T}from"./main-BPWpXae6.js";import{B as b,i as F,O as y}from"./index-BjO4yXzc.js";import{aH as g}from"./index-CGKDrrCR.js";class N extends b.BaseFeatureDataAdapter{constructor(){super(...arguments),this.intervalTrees={}}async getNames(){const{header:e,columnNames:t}=await this.loadData();if(t.length)return t;const a=e.split(/\n|\r\n|\r/).filter(i=>!!i).at(-1);return a!=null&&a.includes("	")?a.slice(1).split("	").map(i=>i.trim()):void 0}async loadFeatureIntervalTreeHelper(e){var t;const{features:c}=await this.loadData(),a=c[e];if(!a)return;const i=((t=await this.getNames())===null||t===void 0?void 0:t.slice(3))||[],r=new T;for(let s=0;s<a.length;s++){const n=a[s],[h,d,f,...o]=n.split("	");for(let l=0;l<o.length;l++){const u=`${this.id}-${h}-${s}-${l}`,p=+d,m=+f,v=+o[l],w=i[l]||`col${l}`;v&&r.insert([p,m],new g.SimpleFeature({id:u,data:{refName:h,start:p,end:m,score:v,source:w}}))}}return r}async getRefNames(e={}){const{features:t}=await this.loadData(e);return Object.keys(t)}async loadDataP(e={}){const t=this.pluginManager,c=this.getConf("bedGraphLocation"),a=await g.fetchAndMaybeUnzip(F.openLocation(c,t),e);if(a.length>536870888)throw new Error("Data exceeds maximum string length (512MB)");const r=new TextDecoder("utf8",{fatal:!0}).decode(a).split(/\n|\r\n|\r/).filter(o=>!!o),s=[];let n=0;for(;n<r.length&&r[n].startsWith("#");n++)s.push(r[n]);const h=s.join(`
`),d={};for(;n<r.length;n++){const o=r[n],l=o.indexOf("	"),u=o.slice(0,l);d[u]||(d[u]=[]),d[u].push(o)}const f=this.getConf("columnNames");return{header:h,features:d,columnNames:f}}async loadFeatureIntervalTree(e){return this.intervalTrees[e]||(this.intervalTrees[e]=this.loadFeatureIntervalTreeHelper(e).catch(t=>{throw this.intervalTrees[e]=void 0,t})),this.intervalTrees[e]}async loadData(e={}){return this.bedFeatures||(this.bedFeatures=this.loadDataP(e).catch(t=>{throw this.bedFeatures=void 0,t})),this.bedFeatures}getFeatures(e,t={}){return y(async c=>{const{start:a,end:i,refName:r}=e,s=await this.loadFeatureIntervalTree(r);for(const n of(s==null?void 0:s.search([a,i]))||[])c.next(n);c.complete()})}freeResources(){}}export{N as default};
//# sourceMappingURL=BedGraphAdapter-DPVIYPyC.js.map
