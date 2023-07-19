var w=["jspm","skypack"],v=["unpkg","jsdelivr","fastly.jsdelivr"],k=["fastly.jsdelivr.gh","jsdelivr.gh","statically"],l={getModuleUrl:(t,{isModule:e=!0,defaultCDN:s="jspm"}={})=>{t=t.replace(/#nobundle/g,"");let o=C(t,e,s);return o||(e?"https://jspm.dev/"+t:"https://cdn.jsdelivr.net/npm/"+t)},getUrl:(t,e)=>t.startsWith("http")?t:C(t,!1,e||B())||t,cdnLists:{npm:v,module:w,gh:k},checkCDNs:async(t,e)=>{let s=[e,...l.cdnLists.npm].filter(Boolean);for(let o of s)try{if((await fetch(l.getUrl(t,o),{method:"HEAD"})).ok)return o}catch{}return l.cdnLists.npm[0]}},B=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||l.cdnLists.npm[0]}catch{return l.cdnLists.npm[0]}},C=(t,e,s)=>{let o=e&&t.startsWith("unpkg:")?"?module":"";t.startsWith("gh:")?t=t.replace("gh",k[0]):t.includes(":")||(t=(s||(e?w[0]:v[0]))+":"+t);for(let r of A){let[n,i]=r;if(n.test(t))return t.replace(n,i)+o}return null},A=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(npm:)(.+)/i,"https://jspm.dev/$2"],[/^(node:)(.+)/i,"https://jspm.dev/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly.jsdelivr.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var E=t=>t.replace(/<\/script>/g,"<\\/script>");var x=(t,e="_")=>t.replace(/[\W]+/g,e);var m=(t,e,s)=>{let o=document.createElement("a");o.style.display="none",o.href=s,o.download=x(t)+"."+e,o.click(),o.remove()},L=(t,e)=>new Promise((s,o)=>{if(e&&globalThis[e])return s(globalThis[e]);if(typeof globalThis.importScripts=="function")return globalThis.importScripts(t),e&&globalThis[e]?s(globalThis[e]):s(globalThis);let r=document.createElement("script");r.src=t,r.async=!0;let n=()=>{r.removeEventListener("load",i),r.removeEventListener("error",a)},i=()=>{if(n(),!e)return s("loaded: "+t);let p=setInterval(()=>{if(window[e])return clearInterval(p),s(window[e])},5)},a=()=>{n(),o("failed to load: "+t)};r.addEventListener("load",i),r.addEventListener("error",a),document.head.appendChild(r)});var y=t=>t.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm,"$1");var b=/(import\s+?(?:(?:(?:[\w*\s{},\$]*)\s+from\s+?)|))((?:".*?")|(?:'.*?'))([\s]*?(?:;|$|))/g,P=/(import\s*?\(\s*?((?:".*?")|(?:'.*?'))\s*?\))/g,O=t=>[...y(t).matchAll(new RegExp(b)),...y(t).matchAll(new RegExp(P))].map(e=>e[2].replace(/"/g,"").replace(/'/g,"")),N=t=>!t.startsWith("https://deno.bundlejs.com/")&&!t.startsWith("https://edge.bundlejs.com/")&&!t.endsWith("#nobundle")&&(t.startsWith("https://deno.land/")||t.startsWith("https://github.com/")||t.startsWith("https://raw.githubusercontent.com/")||t.startsWith("https://gitlab.com/")||t.startsWith("https://bitbucket.org")||t.endsWith(".ts")||t.endsWith(".jsx")||t.endsWith(".tsx")),z=t=>!t.startsWith("https://")&&!t.startsWith("http://")&&!t.startsWith(".")&&!t.startsWith("/")&&!t.startsWith("data:")&&!t.startsWith("blob:"),H=t=>(t.endsWith(".css")||t.endsWith(".scss")||t.endsWith(".sass")||t.endsWith(".less")||t.endsWith(".styl"))&&!t.startsWith("./style"),S=(t,e)=>Object.keys(e).find(s=>s===t||t.startsWith(s+"/")),J=(t,e,s=!0)=>O(t).map(o=>{if(!N(o)&&!z(o)||H(o))return{};{let r={...e.imports,...e.customSettings?.imports},n=S(o,r);return n?{[n]:r[n]}:s?{[o]:l.getModuleUrl(o,{defaultCDN:e?.customSettings?.defaultCDN})}:{}}}).reduce((o,r)=>({...o,...r}),{});var $=(t,e,s)=>(s=s||J(t,e),t.replace(new RegExp(b),o=>{if(!s)return o;let r=o.replace(new RegExp(b),"$2").replace(/"/g,"").replace(/'/g,""),n=S(r,s);return n?o.replace(n,s[n]):o}));var u=(t,{getLanguageExtension:e})=>{let s={markup:"index",style:"style",script:"script"},o=Object.keys(s).reduce((a,p)=>{let c=s[p],d=t[p].language,g=e?.(d)||"md",U=t[p].content||"";return{...a,...U?{[c+"."+g]:{content:U}}:{}}},{}),r=t.stylesheets.length>0?{styles:{content:t.stylesheets.map(a=>`<link rel="stylesheet" href="${a}" />`).join(`
`)}}:void 0,n=t.scripts.length>0?{scripts:{content:t.scripts.map(a=>`<script src="${a}"><\/script>`).join(`
`)}}:void 0,i=t.tests?.content?{["script.spec."+e?.(t.tests?.language)||"ts"]:{content:t.tests?.content}}:void 0;return{...o,...r,...n,...i}},j=(t,e,s,o=!0)=>{let r=o?"https://gist.github.com/":"https://github.com/",n=e?e.username?"by ["+e.displayName+"]("+r+e.username+")":"by "+e.displayName:"",i=s?`[project](https://livecodes.io/?x=${s})`:"project";return{[x(t.title)+".md"]:{content:`# ${t.title}
A ${i} created ${n} on [LiveCodes](https://livecodes.io).`}}},f=({baseUrl:t,editorId:e,config:s,compiled:o,supportedLanguages:r,getLanguageCompiler:n})=>{if(r[e].includes(s[e].language))return[];let i=n?.(s[e].language)?.scripts,a=s[e].language==="python"?s[e].content||"":o[e];return(typeof i=="function"?i({compiled:a,baseUrl:t,config:s}):i)?.filter(c=>c.startsWith("https://"))||[]},h=({editorId:t,config:e,compiled:s,supportedLanguages:o,getLanguageCompiler:r})=>{let n=["javascript","jsx","tsx",...o.script].includes(e.script.language),i={markup:["html",...o.markup].includes(e.markup.language)?e.markup.content:s.markup,style:["css",...o.style].includes(e.style.language)?e.style.content:s.style,script:e.script.language==="php"?e.script.content?.replace(/<\?php/g,"")||"":e.script.language==="python"?e.script.content:$((n?e.script.content:s.script)||"",e)},a=r?.(e.script.language)?.scriptType;if(!n&&a&&a!=="module"){if(t==="markup")return i.markup+`
<script type="${a}">
${E(i.script||"")}
<\/script>
`;if(t==="script")return e.script.language==="python"?'window.addEventListener("load", () => {brython()});':""}return i[t]||""};var q=(t,{baseUrl:e,compiled:s,deps:o})=>{let r=document.createElement("form");r.action="https://codepen.io/pen/define",r.method="POST",r.target="_blank",r.style.display="none";let n=document.createElement("input");n.name="data";let i={markup:["markdown","haml"],style:["less","scss","sass","stylus"],script:["babel","typescript","coffeescript","livescript"]},a=c=>h({editorId:c,config:t,compiled:s,supportedLanguages:i,...o}),p=c=>f({baseUrl:e,editorId:c,config:t,compiled:s,supportedLanguages:i,...o});n.value=JSON.stringify({title:t.title,desciption:t.description,tags:t.tags,html:a("markup"),html_pre_processor:i.markup.includes(t.markup.language)?t.markup.language:"none",css:a("style"),css_pre_processor:i.style.includes(t.style.language)?t.style.language:"none",css_starter:t.cssPreset==="normalize.css"?"normalize":t.cssPreset==="reset-css"?"reset":"neither",css_prefix:t.processors.includes("autoprefixer")?"autoprefixer":"neither",js:a("script"),js_pre_processor:i.script.includes(t.script.language)?t.script.language:t.script.language==="jsx"?"babel":t.script.language==="tsx"?"typescript":"none",html_classes:t.customSettings.htmlClasses||"",head:t.customSettings.head||"",css_external:t.stylesheets.join(";"),js_external:[...t.scripts,...p("markup"),...p("style"),...p("script")].join(";")}),r.appendChild(n),document.body.appendChild(r),r.submit(),r.remove()};var F=async(t,{user:e,deps:s})=>{if(!e)return;let o=K(t,e,s),n=await(await I(t,e,o)).json();if(n.id){let i=j(t,e,n.html_url);await I(t,e,i,n.id),window.open("https://gist.github.com/"+n.id)}},K=(t,e,s)=>{let o=j(t,e),r=u(t,s);return{...o,...r}},I=(t,e,s,o)=>{let r={accept:"application/vnd.github.v3+json",description:t.title,files:s,public:!0},n="https://api.github.com/gists";return o&&(n+="/"+o),fetch(n,{method:o?"PATCH":"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"token "+e.token},body:JSON.stringify(r)})};var R=(t,e)=>{let s=t.title,o="html",r="data:text/html;charset=utf-8,"+encodeURIComponent(e);m(s,o,r)};var T=(t,{baseUrl:e,compiled:s,deps:o})=>{let r=document.createElement("form");r.action="https://jsfiddle.net/api/post/library/pure/",r.method="POST",r.target="_blank",r.style.display="none";let n={markup:["haml"],style:["scss","sass"],script:["babel","typescript","coffeescript"]},i=c=>h({editorId:c,config:t,compiled:s,supportedLanguages:n,...o}),a=c=>f({baseUrl:e,editorId:c,config:t,compiled:s,supportedLanguages:n,...o}),p={title:t.title,description:t.description||"",html:i("markup"),css:i("style"),css_panel:t.style.language==="scss"?"1":"0",js:i("script"),js_panel:t.script.language==="typescript"?"4":t.script.language==="jsx"?"3":t.script.language==="coffeescript"?"5":"0",resources:[...t.stylesheets,...t.scripts,...a("markup"),...a("style"),...a("script")].join(",")};Object.keys(p).forEach(c=>{let d=document.createElement("input");d.name=c,d.value=p[c],r.appendChild(d)}),document.body.appendChild(r),r.submit(),r.remove()};var W=t=>{let e=t.title,s="json",o="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,2));m(e,s,o)};var{getUrl:_,getModuleUrl:qt}=l;var M=_("jszip@3.10.1/dist/jszip.js");var V="0.6.64",It=_(`malinajs@${V}/malina.js`);var D=async(t,{html:e,deps:s},o)=>{let r=await L(M,"JSZip"),n=new r,i=u(t,s);Object.keys(i).forEach(g=>{n.file(g,i[g]?.content)}),n.file("result.html",e),n.file("livecodes.json",JSON.stringify(t,null,2));let a=await n.generateAsync({type:"base64"}),p=t.title,c="zip",d="data:application/zip;base64,"+encodeURIComponent(a);m(p,c,d)};var Nt=(t,e,s,o)=>{({json:W,src:D,html:R,codepen:q,jsfiddle:T,githubGist:F})[s](t,o,e)};export{Nt as exportConfig};
