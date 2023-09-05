async function Q(n,w={}){typeof n=="object"&&!(n instanceof HTMLElement)&&n.view==="headless"&&(w=n,n=null);let{appUrl:E="https://livecodes.io/",params:u={},config:m={},import:L,lite:N,loading:x="lazy",template:O,view:R="split"}=w,v=R==="headless",s=null;if(typeof n=="string")s=document.querySelector(n);else if(n instanceof HTMLElement)s=n;else if(!(v&&typeof n=="object"))throw new Error("A valid container element is required.");if(!s)if(v)s=document.createElement("div"),D(s),document.body.appendChild(s);else throw new Error(`Cannot find element: "${n}"`);let a;try{a=new URL(E)}catch(e){throw new Error(`"${E}" is not a valid URL.`)}let p=a.origin;if(typeof u=="object"&&Object.keys(u).forEach(e=>{a.searchParams.set(e,String(u[e]))}),typeof m=="string")try{new URL(m),a.searchParams.set("config",m)}catch(e){throw new Error('"config" is not a valid URL or configuration object.')}else if(typeof m=="object")Object.keys(m).length>0&&a.searchParams.set("config","sdk");else throw new Error('"config" is not a valid URL or configuration object.');O&&a.searchParams.set("template",O),L&&a.searchParams.set("x",L),N&&a.searchParams.set("lite","true"),a.searchParams.set("embed","true"),a.searchParams.set("loading",v?"eager":x),a.searchParams.set("view",R);let b=!1,S="Cannot call API methods after calling `destroy()`.",c=await(()=>new Promise(e=>{var l,y,h,d,P,C,g,j,k;if(!s)return;let o=s.dataset.height||s.style.height;if(o&&!v){let I=isNaN(Number(o))?o:o+"px";s.style.height=I}s.dataset.defaultStyles!=="false"&&!v&&((l=s.style).backgroundColor||(l.backgroundColor="#fff"),(y=s.style).border||(y.border="1px solid black"),(h=s.style).borderRadius||(h.borderRadius="5px"),(d=s.style).boxSizing||(d.boxSizing="border-box"),(P=s.style).padding||(P.padding="0"),(C=s.style).width||(C.width="100%"),(g=s.style).height||(g.height=s.style.height||"300px"),s.style.minHeight="200px",(j=s.style).overflow||(j.overflow="hidden"),(k=s.style).resize||(k.resize="vertical"));let t=document.createElement("iframe");t.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),t.setAttribute("allowtransparency","true"),t.setAttribute("allowpaymentrequest","true"),t.setAttribute("allowfullscreen","true"),t.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");let r=x==="eager"?"eager":"lazy";t.setAttribute("loading",r),t.classList.add("livecodes"),v?D(t):(t.style.height="100%",t.style.minHeight="200px",t.style.width="100%",t.style.margin="0",t.style.border="0",t.style.borderRadius=s.style.borderRadius),addEventListener("message",function I(A){var K,W;A.source!==t.contentWindow||A.origin!==p||((K=A.data)==null?void 0:K.type)!=="livecodes-get-config"||(removeEventListener("message",I),(W=t.contentWindow)==null||W.postMessage({type:"livecodes-config",payload:m},p))}),t.onload=()=>{e(t)},t.src=a.href,s.appendChild(t)}))(),M=new Promise(e=>{addEventListener("message",function o(t){var r;t.source!==c.contentWindow||t.origin!==p||((r=t.data)==null?void 0:r.type)!=="livecodes-ready"||(removeEventListener("message",o),e(),M.settled=!0)})}),H=()=>b?Promise.reject(S):new Promise(async e=>{var t;M.settled&&e();let o={type:"livecodes-load"};(t=c.contentWindow)==null||t.postMessage(o,p),await M,e()}),i=(e,o)=>new Promise(async(t,r)=>{var y;if(b)return r(S);await H();let l=J();addEventListener("message",function h(d){var P,C;if(!(d.source!==c.contentWindow||d.origin!==p||((P=d.data)==null?void 0:P.type)!=="livecodes-api-response"||((C=d.data)==null?void 0:C.id)!==l)&&d.data.method===e){removeEventListener("message",h);let g=d.data.payload;g!=null&&g.error?r(g.error):t(g)}}),(y=c.contentWindow)==null||y.postMessage({method:e,id:l,args:o},p)}),f={},q=["load","ready","code","console","tests","destroy"],T=(e,o)=>{var t;if(b)throw new Error(S);return q.includes(e)?(i("watch",[e]),f[e]||(f[e]=[]),(t=f[e])==null||t.push(o),{remove:()=>{var r,l;f[e]=(r=f[e])==null?void 0:r.filter(y=>y!==o),((l=f[e])==null?void 0:l.length)===0&&i("watch",[e,"unsubscribe"])}}):{remove:()=>{}}},F=e=>({"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"})[e];addEventListener("message",async e=>{var r,l,y,h;let o=F((l=(r=e.data)==null?void 0:r.type)!=null?l:"");if(e.source!==c.contentWindow||e.origin!==p||!o||!f[o])return;let t=(y=e.data)==null?void 0:y.payload;(h=f[o])==null||h.forEach(d=>{d(t)})});let U=()=>{var e;Object.values(f).forEach(o=>{o.length=0}),(e=c==null?void 0:c.remove)==null||e.call(c),b=!0};x==="lazy"&&"IntersectionObserver"in window&&new IntersectionObserver((o,t)=>{o.forEach(async r=>{r.isIntersecting&&(await H(),t.unobserve(s))})},{rootMargin:"150px"}).observe(s);function D(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}let J=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>H(),run:()=>i("run"),format:e=>i("format",[e]),getShareUrl:e=>i("getShareUrl",[e]),getConfig:e=>i("getConfig",[e]),setConfig:e=>i("setConfig",[e]),getCode:()=>i("getCode"),show:(e,o)=>i("show",[e,o]),runTests:()=>i("runTests"),onChange:e=>T("code",e),watch:T,exec:(e,...o)=>i("exec",[e,...o]),destroy:()=>M.settled?i("destroy").then(U):b?Promise.reject(S):(U(),Promise.resolve())}}var z;globalThis.document&&document.currentScript&&"prefill"in((z=document.currentScript)==null?void 0:z.dataset)&&window.addEventListener("load",()=>{document.querySelectorAll(".livecodes").forEach(n=>{let w,E=n.dataset.options;if(E)try{w=JSON.parse(E)}catch(L){}let u,m=n.dataset.config||n.dataset.prefill;if(m)try{u=JSON.parse(m)}catch(L){}Q(n,{import:"dom/"+encodeURIComponent(n.outerHTML),...w,...u?{config:u}:{}})})});export{Q as createPlayground};
