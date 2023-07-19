var P=`<div id="list-container" class="list-container"><div class="modal-title">Saved Projects</div><div class="buttons"><button id="bulk-import-button" class="button">Import</button> <button id="export-all-button" class="button">Export All</button> <button id="delete-all-button" class="button danger">Delete All</button></div><div class="modal-message" id="projects-container" class="items-container"><span id="sort-by-label">Sort By:</span> <a href="#" id="sort-by-last-modified" class="active">Last&nbsp;Modified</a>&nbsp;/&nbsp;<a href="#" id="sort-by-title">Title</a>&nbsp;(<a href="#" id="sorted-asc" style="display:none">\u25B2</a><a href="#" id="sorted-desc">\u25BC</a>) <select name="language-filter" id="language-filter"><option value="">All languages</option></select> <input id="filter-tags" type="text" placeholder="Filter by tags"> <input id="search-projects" type="text" placeholder="Search"> <a href="#" id="reset-filters" class="hint--bottom" data-hint="Reset" style="width:auto"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 489.533 489.533" style="width:1em;height:1em" xml:space="preserve"><g><path d="M268.175,488.161c98.2-11,176.9-89.5,188.1-187.7c14.7-128.4-85.1-237.7-210.2-239.1v-57.6c0-3.2-4-4.9-6.7-2.9
		l-118.6,87.1c-2,1.5-2,4.4,0,5.9l118.6,87.1c2.7,2,6.7,0.2,6.7-2.9v-57.5c87.9,1.4,158.3,76.2,152.3,165.6
		c-5.1,76.9-67.8,139.3-144.7,144.2c-81.5,5.2-150.8-53-163.2-130c-2.3-14.3-14.8-24.7-29.2-24.7c-17.9,0-31.9,15.9-29.1,33.6
		C49.575,418.961,150.875,501.261,268.175,488.161z"/></g></svg></a><div class="modal-message no-data"><div>You have no saved projects.</div><div class="description">You can save a project from (settings&nbsp;menu&nbsp;>&nbsp;Save) or by the keyboard shortcut (Ctrl/Cmd&nbsp;+&nbsp;S).</div></div><div class="modal-message no-data" id="no-match"><div>No projects match these filters.</div></div></div></div>`;var te=e=>e.replace(/{{APP_VERSION}}/g,"7").replace(/{{SDK_VERSION}}/g,"0.0.3").replace(/{{COMMIT_SHA}}/g,"9304fa0").replace(/{{REPO_URL}}/g,"https://github.com/live-codes/livecodes").replace(/{{DOCS_BASE_URL}}/g,"/livecodes/docs/");var O=te(P);var oe=(e,t="_")=>e.replace(/[\W]+/g,t),C=()=>{let e=!1,t=navigator.userAgent.toLowerCase();return function(r){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4)))&&(e=!0)}(t||navigator.vendor||window.opera),e};var ne=()=>String(Math.random())+"-"+Date.now().toFixed(),$=(e,t,r)=>{let c=document.createElement("a");c.style.display="none",c.href=r,c.download=oe(e)+"."+t,c.click(),c.remove()},I=(e,t)=>new Promise((r,c)=>{if(t&&globalThis[t])return r(globalThis[t]);if(typeof globalThis.importScripts=="function")return globalThis.importScripts(e),t&&globalThis[t]?r(globalThis[t]):r(globalThis);let s=document.createElement("script");s.src=e,s.async=!0;let l=()=>{s.removeEventListener("load",i),s.removeEventListener("error",y)},i=()=>{if(l(),!t)return r("loaded: "+e);let p=setInterval(()=>{if(window[t])return clearInterval(p),r(window[t])},5)},y=()=>{l(),c("failed to load: "+e)};s.addEventListener("load",i),s.addEventListener("error",y),document.head.appendChild(s)}),B=(e,t,r)=>{if(t&&document.getElementById(t))return;let c=document.createElement("link");c.rel="stylesheet",c.href=e,c.id=t||"styles-"+ne(),document.head.insertBefore(c,r?document.querySelector(r):null)};var F=()=>{let e=new Date,t=e.getTimezoneOffset();return e=new Date(e.getTime()-t*60*1e3),e.toISOString().split("T")[0]};var W=["jspm","skypack"],_=["unpkg","jsdelivr","fastly.jsdelivr"],G=["fastly.jsdelivr.gh","jsdelivr.gh","statically"],k={getModuleUrl:(e,{isModule:t=!0,defaultCDN:r="jspm"}={})=>{e=e.replace(/#nobundle/g,"");let c=N(e,t,r);return c||(t?"https://jspm.dev/"+e:"https://cdn.jsdelivr.net/npm/"+e)},getUrl:(e,t)=>e.startsWith("http")?e:N(e,!1,t||re())||e,cdnLists:{npm:_,module:W,gh:G},checkCDNs:async(e,t)=>{let r=[t,...k.cdnLists.npm].filter(Boolean);for(let c of r)try{if((await fetch(k.getUrl(e,c),{method:"HEAD"})).ok)return c}catch{}return k.cdnLists.npm[0]}},re=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||k.cdnLists.npm[0]}catch{return k.cdnLists.npm[0]}},N=(e,t,r)=>{let c=t&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",G[0]):e.includes(":")||(e=(r||(t?W[0]:_[0]))+":"+e);for(let s of se){let[l,i]=s;if(l.test(e))return e.replace(l,i)+c}return null},se=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(npm:)(.+)/i,"https://jspm.dev/$2"],[/^(node:)(.+)/i,"https://jspm.dev/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly.jsdelivr.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:R,getModuleUrl:Se}=k;var J=R("flexsearch@0.7.21/dist/flexsearch.bundle.js");var ce="0.6.64",be=R(`malinajs@${ce}/malina.js`);var A=R("@yaireo/tagify@4.9.6/dist/");var V=e=>e.querySelector("#bulk-import-button"),K=e=>e.querySelector("#export-all-button"),Z=e=>e.querySelector("#delete-all-button");var Y=typeof window<"u"?window:null,Q=Y===null,ae=Q?void 0:Y.document;var Ie=Q?"calc":["","-webkit-","-moz-","-o-"].filter(function(e){var t=ae.createElement("div");return t.style.cssText="width:"+e+"calc(9px)",!!t.style.length}).shift()+"calc";var X=e=>{try{return JSON.parse(e).map(t=>t.value)}catch{return e.split(",").map(t=>t.trim())}};var ie=(e,t,r,c,s=!1)=>{let l=document.createElement("li");t.appendChild(l);let i=document.createElement("a");i.href="#",i.dataset.id=e.id,i.classList.add("open-project-link");let y=C()?new Date(e.lastModified).toLocaleDateString():new Date(e.lastModified).toLocaleString(),p=[];C()||e.languages.forEach(d=>{let a=document.createElement("span");a.classList.add("language-tag"),a.dataset.lang=c(d),s?a.classList.add("template-tag"):a.title="filter by language",a.textContent=r(d),p.push(a)});let T=[];e.tags=[...new Set(e.tags)].filter(Boolean),!C()&&e.tags.length>0&&e.tags.forEach(d=>{let a=document.createElement("span");a.classList.add("user-tag"),a.dataset.tag=d,s?a.classList.add("template-tag"):a.title="filter by tag",a.textContent=d,T.push(a)});let E=document.createElement("div");E.classList.add("open-title","overflow-text"),E.textContent=e.title,i.appendChild(E);let S=document.createElement("div");S.classList.add("light"),S.textContent="Last modified: "+y,i.appendChild(S);let x=document.createElement("div");x.classList.add("project-tags"),p.forEach(d=>x.append(d)),x.innerHTML+=T.length>0?' <span class="light">|</span> ':"",T.forEach(d=>x.append(d)),i.appendChild(x);let u=document.createElement("div");u.classList.add("template-default");let m=document.createElement("span");m.innerText="Set as default",m.classList.add("template-default-link"),u.appendChild(m);let g=document.createElement("span");g.classList.add("default-template-label"),g.innerText="Default template ",u.appendChild(g);let h=document.createElement("span");h.innerText="(unset)",h.classList.add("template-remove-default-link"),g.appendChild(h),s&&i.appendChild(u),l.appendChild(i);let L=document.createElement("button");return L.classList.add("delete-button"),l.appendChild(L),{link:i,deleteButton:L,setAsDefaultLink:m,removeDefaultLink:h}},pe=e=>{let t=document.createElement("div");return t.innerHTML=`
    <div class="modal-message">Loading...</div>
    <div class="modal-message">${e.title}</div>
    `,t},ue=(e,t,r,c)=>{let s="lastModified",l="desc",i,y=[],p,T=[],E=document.querySelector("#list-container #sort-by-last-modified"),S=document.querySelector("#list-container #sort-by-title"),x=document.querySelector("#list-container #sorted-asc"),u=document.querySelector("#list-container #sorted-desc"),m=document.querySelector("#list-container #language-filter"),g=document.querySelector("#list-container #filter-tags"),h=document.querySelector("#list-container #search-projects"),L=document.querySelector("#list-container #reset-filters");c.map(o=>({name:o.name,title:o.longTitle||o.title})).sort((o,n)=>o.title.toLowerCase()<n.title.toLowerCase()?-1:o.title.toLowerCase()>n.title.toLowerCase()?1:0).forEach(o=>{let n=document.createElement("option");n.text=o.title,n.value=o.name,m.appendChild(n)});let d=async()=>(await e()).filter(o=>i?o.languages.includes(i):!0).filter(o=>y.length>0?y.map(n=>o.tags.includes(n)).every(n=>n===!0):!0).filter(o=>h.value.trim()!==""?T.includes(o.id):!0).sort((o,n)=>s==="lastModified"&&l==="asc"?o.lastModified-n.lastModified:s==="lastModified"&&l==="desc"?n.lastModified-o.lastModified:s==="title"&&l==="asc"&&o.title<n.title?-1:s==="title"&&l==="asc"&&o.title>n.title||s==="title"&&l==="desc"&&o.title<n.title?1:s==="title"&&l==="desc"&&o.title>n.title?-1:0),a=()=>{document.querySelectorAll(".project-tags span").forEach(n=>{n.dataset.lang?r.addEventListener(n,"click",async f=>{f.stopPropagation(),m.value=n.dataset.lang||"",await j()},!1):n.dataset.tag&&r.addEventListener(n,"click",async f=>{f.stopPropagation(),p&&(p.removeAllTags(),p.addTags(n.dataset.tag),await w())},!1)})},b=async()=>{t(await d()),a()},H=()=>{l="asc",x.style.display="unset",u.style.display="none"},M=()=>{l="desc",x.style.display="none",u.style.display="unset"},w=async(o=g.value)=>{y=X(o).filter(n=>n!==""),await b()},j=async(o=m.value)=>{i=o,await b()};r.addEventListener(E,"click",async o=>{o.preventDefault(),s!=="lastModified"||l==="asc"?M():H(),s="lastModified",E.classList.add("active"),S.classList.remove("active"),await b()},!1),r.addEventListener(S,"click",async o=>{o.preventDefault(),s!=="title"?H():l==="asc"?M():H(),s="title",E.classList.remove("active"),S.classList.add("active"),await b()},!1),r.addEventListener(x,"click",async o=>{o.preventDefault(),M(),await b()},!1),r.addEventListener(u,"click",async o=>{o.preventDefault(),H(),await b()},!1),r.addEventListener(g,"keyup",()=>w(g.value),!1),r.addEventListener(m,"change",async()=>{await j()},!1),a(),B(A+"tagify.css","tagify-styles"),I(A+"tagify.min.js","Tagify").then(async o=>{o&&(p=new o(g,{whitelist:Array.from(new Set((await e()).map(n=>n.tags).flat())).sort((n,f)=>f>n?-1:1),dropdown:{maxItems:40,enabled:0,closeOnSelect:!1,highlightFirst:!0}}),p.on("change",()=>w(JSON.stringify(p?.value||""))))}),I(J,"FlexSearch").then(async o=>{let n=new o.Document({index:["title","description","tags","languages"],tokenize:"full",worker:!0});await Promise.all((await e()).map(f=>n.add(f))),r.addEventListener(h,"keyup",async()=>{T=(await n.searchAsync(h.value)).map(v=>v.result).flat(),await b()},!1)}),r.addEventListener(L,"click",async o=>{o.preventDefault(),s="lastModified",l="desc",i="",y=[],T=[],E.classList.add("active"),S.classList.remove("active"),M(),m.value="",p?.removeAllTags(),h.value="",await b()},!1)},ht=async({projectStorage:e,eventsManager:t,showScreen:r,getContentConfig:c,notifications:s,modal:l,loadConfig:i,getProjectId:y,setProjectId:p,languages:T,getLanguageTitle:E,getLanguageByAlias:S})=>{let x=document.createElement("div");x.innerHTML=O;let u=x.firstChild,m=u.querySelector(".no-data"),g=u.querySelector("#no-match.no-data"),h=u.querySelector("#projects-container"),L=document.createElement("ul");L.classList.add("open-list");let d=await e.getList(),a=d,b=V(u),H=K(u),M=Z(u);t.addEventListener(b,"click",()=>{r("import")},!1),t.addEventListener(H,"click",async()=>{let o=(await e.getAllData()).filter(v=>a.find(q=>q.id===v.id)).map(v=>({...v,config:c(v.config)})).sort((v,q)=>v.lastModified-q.lastModified),n="livecodes_export_"+F(),f="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(o));$(n,"json",f)},!1),t.addEventListener(M,"click",async()=>{s.confirm(`Delete ${a.length} projects?`,async()=>{for(let o of a)await e.deleteItem(o.id),y()===o.id&&p("");a=[],d=await e.getList(),await w(a)})},!1),h.appendChild(L);let w=async o=>{a=o,L.innerHTML="",o.forEach(n=>{let{link:f,deleteButton:v}=ie(n,L,E,S);t.addEventListener(f,"click",async q=>{q.preventDefault();let U=pe(n);l.show(U,{size:"small"});let D=f.dataset.id||"",z=(await e.getItem(D))?.config;z&&(await i(z),p(D)),l.close(),U.remove()},!1),t.addEventListener(v,"click",()=>{s.confirm(`Delete project: ${n.title}?`,async()=>{n.id===y()&&p(""),await e.deleteItem(n.id),a=a.filter(U=>U.id!==n.id),v.parentElement.classList.add("hidden"),setTimeout(()=>{w(a)},500)})},!1)}),o.length===0?(L.classList.add("hidden"),M.classList.add("hidden"),H.classList.add("hidden"),(await e.getList()).length===0?(m.classList.remove("hidden"),g.classList.add("hidden")):(m.classList.add("hidden"),g.classList.remove("hidden"))):(L.classList.remove("hidden"),M.classList.remove("hidden"),H.classList.remove("hidden"),m.classList.add("hidden"),g.classList.add("hidden"))};await w(d);let j=()=>e.getList();l.show(u,{isAsync:!0}),ue(j,w,t,T)};export{ie as createOpenItem,ht as createSavedProjectsList};
