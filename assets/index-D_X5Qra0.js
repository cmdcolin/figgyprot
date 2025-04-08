import{dY as p,cm as q,fI as M,bN as _,fJ as te,fj as re,am as P,an as U,fK as ne,az as W,cf as x,fm as ae,fL as se,fM as oe}from"./index-CGKDrrCR.js";function j(a){return(typeof a=="object"&&a!==null&&"message"in a?a.message:`${a}`).replace(/\.$/,"")}class H{async getBufferFromResponse(e){const t=await e.arrayBuffer();return p.Buffer.from(t)}constructor(e,t={}){this.baseOverrides={},this.url=e;const r=t.fetch||globalThis.fetch.bind(globalThis);if(!r)throw new TypeError("no fetch function supplied, and none found in global environment");t.overrides&&(this.baseOverrides=t.overrides),this.fetchImplementation=r}async fetch(e,t){let r;try{r=await this.fetchImplementation(e,t)}catch(n){if(`${n}`.includes("Failed to fetch")){console.warn(`generic-filehandle: refetching ${e} to attempt to work around chrome CORS header caching bug`);try{r=await this.fetchImplementation(e,{...t,cache:"reload"})}catch(i){throw new Error(`${j(i)} fetching ${e}`,{cause:i})}}else throw new Error(`${j(n)} fetching ${e}`,{cause:n})}return r}async read(e,t=0,r,n=0,i={}){const{headers:s={},signal:o,overrides:c={}}=i;r<1/0?s.range=`bytes=${n}-${n+r}`:r===1/0&&n!==0&&(s.range=`bytes=${n}-`);const u=await this.fetch(this.url,{...this.baseOverrides,...c,headers:{...s,...c.headers,...this.baseOverrides.headers},method:"GET",redirect:"follow",mode:"cors",signal:o});if(!u.ok)throw new Error(`HTTP ${u.status} fetching ${this.url}`);if(u.status===200&&n===0||u.status===206){const f=await this.getBufferFromResponse(u),d=f.copy(e,t,0,Math.min(r,f.length)),l=u.headers.get("content-range"),g=/\/(\d+)$/.exec(l||"");return g!=null&&g[1]&&(this._stat={size:parseInt(g[1],10)}),{bytesRead:d,buffer:e}}throw u.status===200?new Error(`${this.url} fetch returned status 200, expected 206`):new Error(`HTTP ${u.status} fetching ${this.url}`)}async readFile(e={}){let t,r;typeof e=="string"?(t=e,r={}):(t=e.encoding,r=e,delete r.encoding);const{headers:n={},signal:i,overrides:s={}}=r,o=await this.fetch(this.url,{headers:n,method:"GET",redirect:"follow",mode:"cors",signal:i,...this.baseOverrides,...s});if(o.status!==200)throw new Error(`HTTP ${o.status} fetching ${this.url}`);if(t==="utf8")return o.text();if(t)throw new Error(`unsupported encoding: ${t}`);return this.getBufferFromResponse(o)}async stat(){if(!this._stat){const e=p.Buffer.allocUnsafe(10);if(await this.read(e,0,10,0),!this._stat)throw new Error(`unable to determine size of file at ${this.url}`)}return this._stat}async close(){}}function z(a){const e=new FileReader;return new Promise((t,r)=>{e.onerror=()=>{e.abort(),r(new Error("problem reading blob"))},e.onabort=()=>{r(new Error("blob reading was aborted"))},e.onload=()=>{e.result&&typeof e.result!="string"?t(e.result):r(new Error("unknown error reading blob"))},e.readAsArrayBuffer(a)})}function ie(a){const e=new FileReader;return new Promise((t,r)=>{e.onerror=()=>{e.abort(),r(new Error("problem reading blob"))},e.onabort=()=>{r(new Error("blob reading was aborted"))},e.onload=()=>{e.result&&typeof e.result=="string"?t(e.result):r(new Error("unknown error reading blob"))},e.readAsText(a)})}class ce{constructor(e){this.blob=e,this.size=e.size}async read(e,t=0,r,n=0){if(!r)return{bytesRead:0,buffer:e};const i=n,s=i+r,o=await z(this.blob.slice(i,s)),c=p.Buffer.from(o);return{bytesRead:c.copy(e,t),buffer:c}}async readFile(e){const t=typeof e=="string"?e:e==null?void 0:e.encoding;if(t==="utf8")return ie(this.blob);if(t)throw new Error(`unsupported encoding: ${t}`);const r=await z(this.blob);return p.Buffer.from(r)}async stat(){return{size:this.size}}async close(){}}function Q(a,e={}){return new H(a,e)}function ue(a,e,t,r={}){if(t!==void 0)return t;if(a!==void 0)return Q(a,r);if(e!==void 0)return new q(e,r);throw new Error("no url, path, or filehandle provided, cannot open")}const fe=Object.freeze(Object.defineProperty({__proto__:null,BlobFile:ce,LocalFile:q,RemoteFile:H,fromUrl:Q,open:ue},Symbol.toStringTag,{value:"Module"}));var he={},y={};Object.defineProperty(y,"__esModule",{value:!0});y.isSequenceAdapter=de;y.isRegionsAdapter=le;y.isFeatureAdapter=ge;y.isRefNameAliasAdapter=me;y.isTextSearchAdapter=be;function de(a){return"getRegions"in a&&"getFeatures"in a}function le(a){return"getRegions"in a}function ge(a){return"getFeatures"in a}function me(a){return"getRefNameAliases"in a}function be(a){return"searchIndex"in a}var V={};Object.defineProperty(V,"__esModule",{value:!0});var C={},I={};Object.defineProperty(I,"__esModule",{value:!0});I.default=pe;const k=M();function pe(a,e="",t=5e3){const r=[a];for(;r.length;){const n=r.pop();for(const[i,s]of Object.entries(n)){if(e.length>t)return(0,k.hashCode)(e);typeof s=="object"&&s!==null?r.push(s):e+=`${i}-${s}`}}return(0,k.hashCode)(e)}var we=_&&_.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(C,"__esModule",{value:!0});C.BaseAdapter=void 0;const N=re,G=te(),_e=we(I),ye=(0,G.ConfigurationSchema)("empty",{});class J{constructor(e=ye.create(),t,r){if(this.config=e,this.getSubAdapter=t,this.pluginManager=r,typeof jest>"u"){const n=(0,N.isStateTreeNode)(e)?(0,N.getSnapshot)(e):e;this.id=`${(0,_e.default)(n)}`}else this.id="test"}getConf(e){return(0,G.readConfObject)(this.config,e)}}C.BaseAdapter=J;J.capabilities=[];var F={},O={};Object.defineProperty(O,"__esModule",{value:!0});var Ge=O.ObservableCreate=ve;const Se=P;function ve(a,e){return new Se.Observable(t=>{try{const r=a(t);r!=null&&r.catch&&r.catch(n=>{t.error(n)})}catch(r){t.error(r)}})}var R={};Object.defineProperty(R,"__esModule",{value:!0});R.calcStdFromSums=K;R.rectifyStats=Y;R.scoresToStats=Ce;R.blankStats=X;const Ae=P,Re=U;function K(a,e,t,r=!1){if(t===0)return 0;let n;return r?n=e/t-a*a/(t*t):(n=e-a*a/t,t>1&&(n/=t-1)),n<0?0:Math.sqrt(n)}function Y(a){return{...a,scoreMean:(a.scoreSum||0)/(a.featureCount||a.basesCovered||1),scoreStdDev:K(a.scoreSum,a.scoreSumSquares,a.featureCount||a.basesCovered),featureDensity:(a.featureCount||1)/a.basesCovered}}async function Ce(a,e){const{start:t,end:r}=a,n={scoreMin:Number.MAX_VALUE,scoreMax:Number.MIN_VALUE,scoreSum:0,scoreSumSquares:0,featureCount:0};let i=!1;const{scoreMin:s,scoreMax:o,scoreSum:c,scoreSumSquares:u,featureCount:f}=await(0,Ae.firstValueFrom)(e.pipe((0,Re.reduce)((d,l)=>{const g=l.get("score"),w=l.get("summary"),{scoreMax:T,scoreMin:h}=d;return d.scoreMax=Math.max(T,w?l.get("maxScore"):g),d.scoreMin=Math.min(h,w?l.get("minScore"):g),d.scoreSum+=g,d.scoreSumSquares+=g*g,d.featureCount+=1,i=!0,d},n)));return i?Y({scoreMax:o,scoreMin:s,scoreSum:c,scoreSumSquares:u,featureCount:f,basesCovered:r-t+1}):X()}function X(){return{scoreMin:0,scoreMax:0,scoreMean:0,scoreStdDev:0,scoreSum:0,scoreSumSquares:0,featureCount:0,featureDensity:0,basesCovered:0}}Object.defineProperty(F,"__esModule",{value:!0});F.BaseFeatureDataAdapter=void 0;const B=P,L=U,Fe=C,v=M(),$e=O,D=R,Te=ne;class Be extends Fe.BaseAdapter{async getHeader(e){return null}async getMetadata(e){return null}getFeaturesInRegion(e,t={}){return(0,$e.ObservableCreate)(async r=>{const n=await this.hasDataForRefName(e.refName,t);(0,Te.checkStopToken)(t.stopToken),n?this.getFeatures(e,t).subscribe(r):r.complete()})}getFeaturesInMultipleRegions(e,t={}){return(0,B.merge)(...e.map(r=>this.getFeaturesInRegion(r,t)))}async hasDataForRefName(e,t={}){return(await this.getRefNames(t)).includes(e)}async getRegionQuantitativeStats(e,t){const r=this.getFeatures(e,t);return(0,D.scoresToStats)(e,r)}async getMultiRegionQuantitativeStats(e=[],t){if(!e.length)return(0,D.blankStats)();const r=await Promise.all(e.map(f=>this.getRegionQuantitativeStats(f,t))),n=(0,v.max)(r.map(f=>f.scoreMax)),i=(0,v.min)(r.map(f=>f.scoreMin)),s=(0,v.sum)(r.map(f=>f.scoreSum)),o=(0,v.sum)(r.map(f=>f.scoreSumSquares)),c=(0,v.sum)(r.map(f=>f.featureCount)),u=(0,v.sum)(r.map(f=>f.basesCovered));return(0,D.rectifyStats)({scoreMin:i,scoreMax:n,featureCount:c,basesCovered:u,scoreSumSquares:o,scoreSum:s})}getRegionFeatureDensityStats(e,t){let r=+Date.now();const n=async(s,o)=>{const{start:c,end:u}=e,f=c*.75+u*.25,d=await(0,B.firstValueFrom)(this.getFeatures({...e,start:Math.max(0,Math.round(f-s/2)),end:Math.min(Math.round(f+s/2),u)},t).pipe((0,L.toArray)()));return i(s,{featureDensity:d.length/s},d.length,o)},i=async(s,o,c,u)=>{const f=e.end-e.start;if(c>=70||s*2>f)return o;if(u<=5e3){const d=+Date.now();return u+=d-r,r=d,n(s*2,u)}else return console.warn("Stats estimation reached timeout, or didn't get enough features"),{featureDensity:Number.POSITIVE_INFINITY}};return n(1e3,0)}async getMultiRegionFeatureDensityStats(e,t){if(!e.length)throw new Error("No regions supplied");return this.getRegionFeatureDensityStats(e[0],t)}async getSources(e){const t=await(0,B.firstValueFrom)(this.getFeaturesInMultipleRegions(e).pipe((0,L.toArray)())),r=new Set;for(const n of t)r.add(n.get("source"));return[...r].map(n=>({name:n}))}}F.BaseFeatureDataAdapter=Be;var $={};Object.defineProperty($,"__esModule",{value:!0});$.BaseSequenceAdapter=void 0;const De=F;class Ee extends De.BaseFeatureDataAdapter{async getMultiRegionFeatureDensityStats(){return{featureDensity:0}}}$.BaseSequenceAdapter=Ee;(function(a){var e=_&&_.__createBinding||(Object.create?function(s,o,c,u){u===void 0&&(u=c);var f=Object.getOwnPropertyDescriptor(o,c);(!f||("get"in f?!o.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return o[c]}}),Object.defineProperty(s,u,f)}:function(s,o,c,u){u===void 0&&(u=c),s[u]=o[c]}),t=_&&_.__exportStar||function(s,o){for(var c in s)c!=="default"&&!Object.prototype.hasOwnProperty.call(o,c)&&e(o,s,c)};Object.defineProperty(a,"__esModule",{value:!0}),a.BaseSequenceAdapter=a.BaseFeatureDataAdapter=a.BaseAdapter=void 0,t(y,a),t(V,a);var r=C;Object.defineProperty(a,"BaseAdapter",{enumerable:!0,get:function(){return r.BaseAdapter}});var n=F;Object.defineProperty(a,"BaseFeatureDataAdapter",{enumerable:!0,get:function(){return n.BaseFeatureDataAdapter}});var i=$;Object.defineProperty(a,"BaseSequenceAdapter",{enumerable:!0,get:function(){return i.BaseSequenceAdapter}})})(he);var Me={};const Z=W(fe);var A={};function Pe(a){if(typeof a!="string")return{};const e={};return a.toLowerCase().replace(/(?:^|(?:\s*,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g,(r,n,i,s)=>{const o=i||s;return e[n]=o?o.toLowerCase():!0,""})?{}:(Object.keys(e).forEach(r=>{if(/^[\d]+$/.test(e[r]))try{const n=parseInt(e[r],10);Number.isNaN(n)||(e[r]=n)}catch{}}),e)}class Ie{constructor({minimumTTL:e}){this.minimumTTL=e}calculateChunkExpirationDate(e){const{headers:t={},requestDate:r,responseDate:n}=e;let i=n||r;if(!i){if(!t.date)return;i=new Date(t.date)}const s=c=>new Date(i.getTime()+c);if(/\bno-cache\b/.test(t.pragma))return s(this.minimumTTL);const o=Pe(t["cache-control"]);if(o["no-cache"]||o["no-store"]||o["must-revalidate"])return s(this.minimumTTL);if(o["max-age"]!==void 0){const c=o["max-age"]*1e3;return s(Math.max(c,this.minimumTTL))}else{if(this._coerceToDate(t.expires))return this._coerceToDate(t.expires);if(this._coerceToDate(t["last-modified"])){const c=this._coerceToDate(t["last-modified"]),u=(i.getTime()-c.getTime())/10;return s(u)}}}_coerceToDate(e){if(e){if(e instanceof Date)return e;if(typeof e=="string"||typeof e=="number")return new Date(e)}}cachedChunkIsValid(e){const t=this.calculateChunkExpirationDate(e);return!t||new Date<=t}chunkIsCacheable(){return!0}}class Oe{constructor({frequency:e=100,fetch:t,maxExtraSize:r=32e3,maxFetchSize:n=1e6}){this.requestQueues={},this.fetchCallback=t,this.frequency=e,this.maxExtraSize=r,this.maxFetchSize=n}_canAggregate(e,t){return t.start<=e.end+this.maxExtraSize&&t.end-t.start+e.end-e.start<this.maxFetchSize}_allSignalsFired(e){return new Promise(t=>{let r=e.filter(n=>!n.aborted).length;e.forEach(n=>{n.addEventListener("abort",()=>{r-=1,r||t()})})}).catch(t=>{console.error(t)})}_dispatch({url:e,start:t,end:r,requests:n}){const i=new AbortController,s=[];n.forEach(({requestOptions:o})=>{o!=null&&o.signal&&s.push(o.signal)}),s.length===n.length&&this._allSignalsFired(s).then(()=>i.abort()),this.fetchCallback(e,t,r-1,{signal:i.signal}).then(o=>{const c=o.buffer;n.forEach(({start:u,end:f,resolve:d})=>{d({headers:o.headers,buffer:c.slice(u-t,f-t)})})},o=>{n.forEach(({reject:c})=>c(o))})}_aggregateAndDispatch(){Object.entries(this.requestQueues).forEach(([e,t])=>{if(!(t!=null&&t.length))return;const r=[];if(t.forEach(i=>{var s;const{requestOptions:o,reject:c}=i;!((s=o==null?void 0:o.signal)===null||s===void 0)&&s.aborted?c(Object.assign(new Error("aborted"),{code:"ERR_ABORTED"})):r.push(i)}),r.sort((i,s)=>i.start-s.start),t.length=0,!r.length)return;let n;for(const i of r)n&&this._canAggregate(n,i)?(n.requests.push(i),n.end=i.end):(n&&this._dispatch(n),n={requests:[i],url:e,start:i.start,end:i.end});n&&this._dispatch(n)})}_enQueue(e,t){this.requestQueues[e]||(this.requestQueues[e]=[]),this.requestQueues[e].push(t)}fetch(e,t,r,n={}){return new Promise((i,s)=>{this._enQueue(e,{start:t,end:r,resolve:i,reject:s,requestOptions:n}),this.timeout||(this.timeout=setTimeout(()=>{this.timeout=void 0,this._aggregateAndDispatch()},this.frequency||1))})}}async function xe(a,e,t,r={}){const n=new Date,i=Object.assign({method:"GET",headers:{range:`bytes=${e}-${t}`}},r),s=await fetch(a,i),o=new Date;if(s.status!==206&&s.status!==200)throw new Error(`HTTP ${s.status} when fetching ${a} bytes ${e}-${t}`);if(s.status===200)throw new Error(`HTTP ${s.status} when fetching ${a} bytes ${e}-${t}`);const c=await s.arrayBuffer().then(u=>p.Buffer.from(u));return{headers:s.headers.map,requestDate:n,responseDate:o,buffer:c}}function je(a){return a.name==="AbortError"||a.code==="ERR_ABORTED"||!!a.message.match(/\b(aborted|AbortError)\b/i)}class ze{constructor({fetch:e=xe,size:t=1e7,chunkSize:r=32768,aggregationTime:n=100,minimumTTL:i=1e3,maxFetchSize:s=r*4,maxExtraFetch:o=r}){this.aggregator=new Oe({fetch:e,frequency:n,maxFetchSize:s,maxExtraSize:o}),this.chunkSize=r,this.chunkCache=new x({maxSize:Math.floor(t/r)||1}),this.cacheSemantics=new Ie({minimumTTL:i}),this.stats=new x({maxSize:20})}async getRange(e,t=0,r,n={}){let i=r;if(i===void 0){const d=await this.stat(e);if(d.size===void 0)throw new Error("length not specified, and could not determine size of the remote file");i=d.size-t}const s=Math.floor(t/this.chunkSize),o=Math.floor((t+i-1)/this.chunkSize),c=new Array(o-s+1);for(let d=s;d<=o;d+=1)c[d-s]=this._getChunk(e,d,n).then(l=>l&&{headers:l.headers,buffer:l.buffer,chunkNumber:d});let u=await Promise.all(c);if(u=u.filter(d=>!!d),!u.length)return{headers:{},buffer:p.Buffer.allocUnsafe(0)};const f=t-u[0].chunkNumber*this.chunkSize;return{headers:this._makeHeaders(u[0].headers,t,t+i-1),buffer:this._makeBuffer(u,f,i)}}_makeBuffer(e,t,r){if(e.length===1)return e[0].buffer.slice(t,t+r);if(e.length===0)return p.Buffer.allocUnsafe(0);const n=e.map(c=>c.buffer),i=n.shift().slice(t);let s=n.pop(),o=i.length+n.reduce((c,u)=>c+u.length,0)+s.length-r;return o<0&&(o=0),s=s.slice(0,s.length-o),p.Buffer.concat([i,...n,s])}async stat(e){let t=this.stats.get(e);if(!t){const r=await this._getChunk(e,0);if(this._recordStatsIfNecessary(e,r),t=this.stats.get(e),!t)throw new Error(`failed to retrieve file size for ${e}`)}return t}_headersToStats(e){const{headers:t}=e,r={};if(t["content-range"]){const n=t["content-range"].match(/\d+-\d+\/(\d+)/);n&&(r.size=parseInt(n[1],10),Number.isNaN(r.size)&&delete r.size)}return t["last-modified"]&&(r.mtime=new Date(t["last-modified"]),r.mtime.toString()==="Invalid Date"&&delete r.mtime,r.mtime&&(r.mtimeMs=r.mtime.getTime())),r}_makeHeaders(e,t,r){const n=Object.assign({},e||{});n["content-length"]=r-t;const s=(n["content-range"]||"").match(/\d+-\d+\/(\d+)/);return s&&(n["content-range"]=`${t}-${r-1}/${s[1]}`,n["x-resource-length"]=s[1]),n}async _getChunk(e,t,r){const n=`${e}/${t}`,i=this.chunkCache.get(n);if(i){let l,g;try{l=await i}catch(w){if(je(w))g=!0;else throw w}return g||!this.cacheSemantics.cachedChunkIsValid(l)?(this._uncacheIfSame(n,i),this._getChunk(e,t,r)):(this._recordStatsIfNecessary(e,l),l)}const s=t*this.chunkSize;let o=s+this.chunkSize;const c=this.stats.get(e);if(c!=null&&c.size){if(s>=c.size)return;o>=c.size&&(o=c.size)}let u=!1;const f=this.aggregator.fetch(e,s,o,r).catch(l=>{throw u=!0,this._uncacheIfSame(n,f),l});u||this.chunkCache.set(n,f);const d=await f;return this._recordStatsIfNecessary(e,d),this.cacheSemantics.chunkIsCacheable(d)||this._uncacheIfSame(n,f),d}_recordStatsIfNecessary(e,t){this.stats.has(e)||this.stats.set(e,this._headersToStats(t))}_uncacheIfSame(e,t){this.chunkCache.get(e)===t&&this.chunkCache.delete(e)}reset(){this.stats.clear(),this.chunkCache.clear()}}const ke=Object.freeze(Object.defineProperty({__proto__:null,HttpRangeFetcher:ze},Symbol.toStringTag,{value:"Module"})),Ne=W(ke);Object.defineProperty(A,"__esModule",{value:!0});A.RemoteFileWithRangeCache=void 0;A.clearCache=He;const Le=p,qe=Ne,Ue=Z,E={};function We(a,e,t,r={}){const n=E[a];if(!n)throw new Error(`fetch not registered for ${a}`);return n(a,e,t,r)}const ee=new qe.HttpRangeFetcher({fetch:We,size:500*1024**2,chunkSize:128*1024,maxFetchSize:100*1024**2,minimumTTL:24*60*60*1e3});function He(){ee.reset()}class Qe extends Ue.RemoteFile{async fetch(e,t){const r=String(e);E[r]||(E[r]=this.fetchBinaryRange.bind(this));const n=new Headers(t==null?void 0:t.headers).get("range");if(n){const i=/bytes=(\d+)-(\d+)/.exec(n);if(i){const[,s,o]=i,c=Number.parseInt(s,10),f=Number.parseInt(o,10)-c,{buffer:d,headers:l}=await ee.getRange(e,c,f+1);return new Response(d,{status:206,headers:l})}}return super.fetch(e,t)}async fetchBinaryRange(e,t,r,n={}){const i=new Date,s=await super.fetch(e,{...n,headers:{...n.headers,range:`bytes=${t}-${r}`}}),o=new Date;if(!s.ok){const f=`HTTP ${s.status} fetching ${e} bytes ${t}-${r}`,d=" (should be 206 for range requests)";throw new Error(`${f}${s.status===200?d:""}`)}const c={};for(const[f,d]of s.headers.entries())c[f]=d;const u=await s.arrayBuffer();return{headers:c,requestDate:i,responseDate:o,buffer:Le.Buffer.from(u)}}}A.RemoteFileWithRangeCache=Qe;(function(a){var e=_&&_.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(a,"__esModule",{value:!0}),a.RemoteFileWithRangeCache=void 0,a.resolveUriLocation=f,a.openLocation=d,a.getFetcher=l;const t=e(ae),r=Z,n=A,i=M(),s=oe,o=se();function c(h){return"localPath"in h}function u(h){return"blobId"in h}function f(h){return h.baseUri?{...h,uri:new URL(h.uri,h.baseUri).href}:h}function d(h,b){if(c(h)){if(!h.localPath)throw new Error("No local path provided");if(t.default||i.isElectron)return new r.LocalFile(h.localPath);throw new Error("can't use local files in the browser")}if(u(h)){const m=(0,s.getBlob)(h.blobId);if(!m)throw new Error(`file ("${h.name}") was opened locally from a previous session. To restore it, go to track settings and reopen the file`);return new r.BlobFile(m)}if((0,o.isUriLocation)(h)){if(!h.uri)throw new Error("No URI provided");const m=f(h);if(b){const S=g(h,b);if(S)return S.openLocation(m)}return new n.RemoteFileWithRangeCache(m.uri,{fetch:w})}throw new Error("invalid fileLocation")}function l(h,b){if(!(0,o.isUriLocation)(h))throw new Error(`Not a valid UriLocation: ${JSON.stringify(h)}`);if(b){const m=g(h,b);if(m)return m.getFetcher(h)}return w}function g(h,b){const{rootModel:m}=b;if(m&&(0,o.isRootModelWithInternetAccounts)(m))return m.findAppropriateInternetAccount(h);if(h.internetAccountPreAuthorization){if(!h.internetAccountPreAuthorization.authInfo.token)throw new Error("Failed to obtain token from internet account. Try reloading the page");return b.getInternetAccountType(h.internetAccountPreAuthorization.internetAccountType).stateModel.create({type:h.internetAccountPreAuthorization.internetAccountType,configuration:h.internetAccountPreAuthorization.authInfo.configuration})}}async function w(h,b){var m;const S=await fetch(h,b);if(S.status===401&&(!((m=S.headers.get("WWW-Authenticate"))===null||m===void 0)&&m.includes("Basic")))throw new o.AuthNeededError("Accessing HTTPBasic resource without authentication",h.toString());return S}var T=A;Object.defineProperty(a,"RemoteFileWithRangeCache",{enumerable:!0,get:function(){return T.RemoteFileWithRangeCache}})})(Me);export{he as B,Ge as O,Me as i};
//# sourceMappingURL=index-D_X5Qra0.js.map
