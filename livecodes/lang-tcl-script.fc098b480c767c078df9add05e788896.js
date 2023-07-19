"use strict";(()=>{var u=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(s,o)=>(typeof require<"u"?require:s)[o]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var f=["jspm","skypack"],h=["unpkg","jsdelivr","fastly.jsdelivr"],j=["fastly.jsdelivr.gh","jsdelivr.gh","statically"],n={getModuleUrl:(t,{isModule:s=!0,defaultCDN:o="jspm"}={})=>{t=t.replace(/#nobundle/g,"");let e=x(t,s,o);return e||(s?"https://jspm.dev/"+t:"https://cdn.jsdelivr.net/npm/"+t)},getUrl:(t,s)=>t.startsWith("http")?t:x(t,!1,s||w())||t,cdnLists:{npm:h,module:f,gh:j},checkCDNs:async(t,s)=>{let o=[s,...n.cdnLists.npm].filter(Boolean);for(let e of o)try{if((await fetch(n.getUrl(t,e),{method:"HEAD"})).ok)return e}catch{}return n.cdnLists.npm[0]}},w=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||n.cdnLists.npm[0]}catch{return n.cdnLists.npm[0]}},x=(t,s,o)=>{let e=s&&t.startsWith("unpkg:")?"?module":"";t.startsWith("gh:")?t=t.replace("gh",j[0]):t.includes(":")||(t=(o||(s?f[0]:h[0]))+":"+t);for(let l of C){let[i,r]=l;if(i.test(t))return t.replace(i,r)+e}return null},C=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(npm:)(.+)/i,"https://jspm.dev/$2"],[/^(node:)(.+)/i,"https://jspm.dev/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly.jsdelivr.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:b,getModuleUrl:M}=n,U=b("@live-codes/browser-compilers@0.7.6/dist/");var k="0.6.64",S=b(`malinajs@${k}/malina.js`);var $=U+"wacl/";livecodes.tcl=livecodes.tcl||{};livecodes.tcl.run=livecodes.tcl.run||(t=>new Promise(async s=>{livecodes.tcl.input=t,livecodes.tcl.output=null;let o=async(p,g,a)=>{let v=window.prompt;window.prompt=()=>g;let c=null,d=null;a.stdout=m=>{c=(c??"")+m+`
`},a.stderr=m=>{d=(d??"")+m+`
`};let y=a.Eval(p);return c=(c??"")+y,window.prompt=v,{output:c,error:d}},e="";document.querySelectorAll('script[type="text/tcl"]').forEach(p=>e+=p.innerHTML+`
`);let i=await livecodes.tcl.loaded,r=await o(e,t,i);r.error!=null?console.error(r.error):r.output!=null&&console.log(r.output),livecodes.tcl.input=t,livecodes.tcl.output=r.output,livecodes.tcl.error=r.error,livecodes.tcl.ready=!0,s(r)}));livecodes.tcl.loaded=new Promise(t=>{requirejs.config({baseUrl:$}),u(["tcl/wacl"],s=>{s.onReady(o=>{t(o)})})});window.addEventListener("load",async()=>{parent.postMessage({type:"loading",payload:!0},"*"),livecodes.tcl.ready=!1,await livecodes.tcl.run(livecodes.tcl.input),parent.postMessage({type:"loading",payload:!1},"*")});})();
