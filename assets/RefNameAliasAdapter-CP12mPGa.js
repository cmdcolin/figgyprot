import{ai as m,ao as c}from"./index-CGKDrrCR.js";class h extends m.BaseAdapter{async getRefNameAliases(){const t=this.getConf("location");if(t.uri===""||t.uri==="/path/to/my/aliases.txt")return[];const n=await c.openLocation(t,this.pluginManager).readFile("utf8"),o=this.getConf("refNameColumn"),a=this.getConf("refNameColumnHeaderName"),s=n.trim().split(/\n|\r\n|\r/).filter(e=>!!e),r=s.filter(e=>e.startsWith("#")),l=a&&r.length?r.at(-1).split("	").indexOf(a):o;return s.filter(e=>!e.startsWith("#")).map(e=>{const i=e.split("	");return{refName:i[l],aliases:i.filter(f=>!!f.trim())}})}async freeResources(){}}export{h as default};
//# sourceMappingURL=RefNameAliasAdapter-CP12mPGa.js.map
