var k='<div id="backup-container" class="modal-container"><div class="modal-title">Backup / Restore</div><ul id="backup-tabs" class="modal-tabs"><li data-target="backup" class="active">Backup</li><li data-target="restore">Restore</li></ul><div id="backup-screens" class="modal-screen-container"><div id="backup" class="tab-content active"><div class="modal-screen"><div class="description">Backup LiveCodes data, so that it can be later restored on this or other devices.<br>Please visit the <a href="{{DOCS_BASE_URL}}features/backup-restore" target="_blank" rel="noopener">documentations</a> for details.</div><form id="backup-form"><div id="backup-stores"><div class="backup-store"><input type="checkbox" id="backup-projects-checkbox" data-store="projects" checked> <label for="backup-projects-checkbox">Projects</label></div><div class="backup-store"><input type="checkbox" id="backup-templates-checkbox" data-store="templates" checked> <label for="backup-templates-checkbox">User Templates</label></div><div class="backup-store"><input type="checkbox" id="backup-snippets-checkbox" data-store="snippets" checked> <label for="backup-snippets-checkbox">Code Snippets</label></div><div class="backup-store"><input type="checkbox" id="backup-assets-checkbox" data-store="assets" checked> <label for="backup-assets-checkbox">Assets</label></div><div class="backup-store"><input type="checkbox" id="backup-user-settings-checkbox" data-store="userConfig" checked> <label for="backup-user-settings-checkbox">User Settings</label></div></div><button id="backup-btn" class="wide-button" type="submit">Backup</button></form></div></div><div id="restore" class="tab-content"><div class="modal-screen"><div class="description">Restore previously backed-up LiveCodes data.<br>If you choose to replace current content, you may want to back it up first.<br>Please visit the <a href="{{DOCS_BASE_URL}}features/backup-restore" target="_blank" rel="noopener">documentations</a> for details.</div><form id="restore-form"><div class="input-container"><span><input type="radio" name="restore-mode" id="restore-mode-replace" value="replace" checked> <label class="radio-label" for="restore-mode-replace">Replace current content</label> </span><span><input type="radio" name="restore-mode" id="restore-mode-merge" value="merge"> <label class="radio-label" for="restore-mode-merge">Merge with current content</label></span></div><label for="file-input" class="file-input-label">Restore from file</label> <input type="file" id="file-input" class="file-input" accept=".zip,zip,application/zip,application/x-zip,application/x-zip-compressed"></form></div></div></div></div>';var J=e=>e.replace(/{{APP_VERSION}}/g,"10").replace(/{{SDK_VERSION}}/g,"0.1.2").replace(/{{COMMIT_SHA}}/g,"77c8e1d").replace(/{{REPO_URL}}/g,"https://github.com/live-codes/livecodes").replace(/{{DOCS_BASE_URL}}/g,"/livecodes/docs/");var v=J(k);var V=(e,t="_")=>e.replace(/[\W]+/g,t);var q=(e,t,o)=>{let n=document.createElement("a");n.style.display="none",n.href=o,n.download=V(e)+"."+t,n.click(),n.remove()},E=(e,t)=>new Promise((o,n)=>{if(t&&globalThis[t])return o(globalThis[t]);if(typeof globalThis.importScripts=="function")return globalThis.importScripts(e),t&&globalThis[t]?o(globalThis[t]):o(globalThis);let s=document.createElement("script");s.src=e,s.async=!0;let a=()=>{s.removeEventListener("load",c),s.removeEventListener("error",g)},c=()=>{if(a(),!t)return o("loaded: "+e);let y=setInterval(()=>{if(window[t])return clearInterval(y),o(window[t])},5)},g=()=>{a(),n("failed to load: "+e)};s.addEventListener("load",c),s.addEventListener("error",g),document.head.appendChild(s)});var w=()=>{let e=new Date,t=e.getTimezoneOffset();return e=new Date(e.getTime()-t*60*1e3),e.toISOString().split("T")[0]};var U=e=>new Uint8Array(atob(e).split("").map(t=>t.charCodeAt(0)));var B=["jspm","skypack"],C=["unpkg","jsdelivr","fastly.jsdelivr"],I=["fastly.jsdelivr.gh","jsdelivr.gh","statically"],u={getModuleUrl:(e,{isModule:t=!0,defaultCDN:o="jspm"}={})=>{e=e.replace(/#nobundle/g,"");let n=j(e,t,o);return n||(t?"https://jspm.dev/"+e:"https://cdn.jsdelivr.net/npm/"+e)},getUrl:(e,t)=>e.startsWith("http")?e:j(e,!1,t||Z())||e,cdnLists:{npm:C,module:B,gh:I},checkCDNs:async(e,t)=>{let o=[t,...u.cdnLists.npm].filter(Boolean);for(let n of o)try{if((await fetch(u.getUrl(e,n),{method:"HEAD"})).ok)return n}catch{}return u.cdnLists.npm[0]}},Z=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||u.cdnLists.npm[0]}catch{return u.cdnLists.npm[0]}},j=(e,t,o)=>{let n=t&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",I[0]):e.includes(":")||(e=(o||(t?B[0]:C[0]))+":"+e);for(let s of K){let[a,c]=s;if(a.test(e))return e.replace(a,c)+n}return null},K=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(npm:)(.+)/i,"https://jspm.dev/$2"],[/^(node:)(.+)/i,"https://jspm.dev/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly.jsdelivr.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:A,getModuleUrl:se}=u;var S=A("jszip@3.10.1/dist/jszip.js");var G="0.6.64",ce=A(`malinajs@${G}/malina.js`);var T=()=>document.querySelector("#backup-link");var h=e=>e.querySelector("#file-input"),R=e=>e.querySelector(".file-input-label");var D=e=>e.querySelector("#backup-form"),P=e=>e.querySelector("#backup-btn"),F=e=>e.querySelectorAll('#backup input[type="checkbox"]:checked');var Q=e=>{let t=document.createElement("div");t.innerHTML=v;let o=t.firstChild,n=o.querySelectorAll("#backup-tabs li");return n.forEach(s=>{e.addEventListener(s,"click",()=>{n.forEach(c=>c.classList.remove("active")),s.classList.add("active"),document.querySelectorAll("#backup-screens > div").forEach(c=>{c.classList.remove("active")});let a=o.querySelector("#"+s.dataset.target);a?.classList.add("active"),a?.querySelector("input")?.focus()})}),o},b="In progress...",X=()=>T()?.dataset.hint===b,x=({inProgress:e,backupContainer:t})=>{let o=T(),n=P(t),s=h(t),a=R(t);e??X()?(o&&(o.classList.add("hint--bottom"),o.dataset.hint=b),n.innerText=b,n.disabled=!0,a.innerText=b,s.disabled=!0):(o&&(o.classList.remove("hint--bottom"),o.dataset.hint=""),n.innerText="Backup",n.disabled=!1,a.innerText="Restore from file",s.disabled=!1)},de=({baseUrl:e,modal:t,notifications:o,eventsManager:n,stores:s,deps:a})=>{let c=Q(n),g=D(c),y=h(c);x({backupContainer:c});let M=import(e+"sync.a659d3a79c646e8c0ce87b251d02bd34.js").then(r=>(r.init(e),r)),$=async r=>{let p=await E(S,"JSZip"),i=new p;r.forEach(({filename:H,content:L})=>{i.file(H,L)});let l=await i.generateAsync({type:"base64",compression:"DEFLATE",compressionOptions:{level:6}}),m="livecodes_backup_"+w(),d="zip",f="data:application/zip;base64,"+encodeURIComponent(l);q(m,d,f)},N=async()=>{let r=[...F(c)].map(l=>l.dataset.store).filter(Boolean);if(r.length===0){o.warning("Please select at least one store to backup");return}r.includes("userConfig")&&(r.push("userData"),r.push("appData"));let p=await M,i=await Promise.all(r.filter(l=>!!s[l]).map(async l=>({filename:l+".b64",content:await p.exportStoreAsBase64Update({storeKey:l})||""})));await $(i)},O=r=>new Promise((p,i)=>{if(r.files?.length===0)return;let l=r.files[0];if(!l.name.endsWith(".zip")){i("Error: Incorrect file type");return}let m=100*1024*1024;if(l.size>m){i("Error: Exceeded size 100 MB");return}p(l)}),W=async r=>{let l=(await(await E(S,"JSZip")).loadAsync(r)).file(/\.b64$/);return Promise.all(l.map(async m=>({filename:m.name,content:await m.async("string")})))},z=async r=>{let p=await M,l=new FormData(g).get("restore-mode")==="merge";for(let d of r){let f=d.filename.slice(0,-4);if(s[f]){let L=U(d.content);await p.restoreFromUpdate({update:L,storeKey:f,mergeCurrent:l})}}r.find(d=>d.filename.startsWith("user"))&&a.loadUserConfig(),o.success("Restored Successfully!")};n.addEventListener(g,"submit",async r=>{r.preventDefault(),x({inProgress:!0,backupContainer:c}),await N(),x({inProgress:!1,backupContainer:c})}),n.addEventListener(y,"change",async()=>{x({inProgress:!0,backupContainer:c}),await Promise.resolve(y).then(O).then(W).then(z).catch(r=>{o.error(r)}),x({inProgress:!1,backupContainer:c})}),t.show(c,{isAsync:!0})};export{de as createBackupUI,X as isInProgress,x as updateProgressStatus};
