"use strict";var livecodes=(()=>{var O=Object.defineProperty;var B=Object.getOwnPropertyDescriptor;var G=Object.getOwnPropertyNames;var V=Object.prototype.hasOwnProperty;var X=(o,r)=>{for(var m in r)O(o,m,{get:r[m],enumerable:!0})},Y=(o,r,m,f)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of G(r))!V.call(o,a)&&a!==m&&O(o,a,{get:()=>r[a],enumerable:!(f=B(r,a))||f.enumerable});return o};var Z=o=>Y(O({},"__esModule",{value:!0}),o);var _={};X(_,{createPlayground:()=>q});async function q(o,r={}){typeof o=="object"&&!(o instanceof HTMLElement)&&o.view==="headless"&&(r=o,o=null);let{appUrl:m="https://livecodes.io/",params:f={},config:a={},import:L,lite:F,loading:x="lazy",template:R,view:T="split"}=r,E=T==="headless",s=null;if(typeof o=="string")s=document.querySelector(o);else if(o instanceof HTMLElement)s=o;else if(!(E&&typeof o=="object"))throw new Error("A valid container element is required.");if(!s)if(E)s=document.createElement("div"),j(s),document.body.appendChild(s);else throw new Error(`Cannot find element: "${o}"`);let l;try{l=new URL(m)}catch(e){throw new Error(`"${m}" is not a valid URL.`)}let v=l.origin;if(typeof f=="object"&&Object.keys(f).forEach(e=>{l.searchParams.set(e,String(f[e]))}),typeof a=="string")try{new URL(a),l.searchParams.set("config",a)}catch(e){throw new Error('"config" is not a valid URL or configuration object.')}else if(typeof a=="object")Object.keys(a).length>0&&l.searchParams.set("config","sdk");else throw new Error('"config" is not a valid URL or configuration object.');R&&l.searchParams.set("template",R),L&&l.searchParams.set("x",L),F&&l.searchParams.set("lite","true"),l.searchParams.set("embed","true"),l.searchParams.set("loading",E?"eager":x),l.searchParams.set("view",T);let b=!1,S="Cannot call API methods after calling `destroy()`.",g=await(()=>new Promise(e=>{var c,u,w,y,P,C,h,k,K;if(!s)return;let n=s.dataset.height||s.style.height;if(n&&!E){let I=isNaN(Number(n))?n:n+"px";s.style.height=I}s.dataset.defaultStyles!=="false"&&!E&&((c=s.style).backgroundColor||(c.backgroundColor="#fff"),(u=s.style).border||(u.border="1px solid black"),(w=s.style).borderRadius||(w.borderRadius="5px"),(y=s.style).boxSizing||(y.boxSizing="border-box"),(P=s.style).padding||(P.padding="0"),(C=s.style).width||(C.width="100%"),(h=s.style).height||(h.height=s.style.height||"300px"),s.style.minHeight="200px",(k=s.style).overflow||(k.overflow="hidden"),(K=s.style).resize||(K.resize="vertical"));let t=document.createElement("iframe");t.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),t.setAttribute("allowtransparency","true"),t.setAttribute("allowpaymentrequest","true"),t.setAttribute("allowfullscreen","true"),t.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");let i=x==="eager"?"eager":"lazy";t.setAttribute("loading",i),t.classList.add("livecodes"),E?j(t):(t.style.height="100%",t.style.minHeight="200px",t.style.width="100%",t.style.margin="0",t.style.border="0",t.style.borderRadius=s.style.borderRadius),addEventListener("message",function I(A){var W,z;A.source!==t.contentWindow||A.origin!==v||((W=A.data)==null?void 0:W.type)!=="livecodes-get-config"||(removeEventListener("message",I),(z=t.contentWindow)==null||z.postMessage({type:"livecodes-config",payload:a},v))}),t.onload=()=>{e(t)},t.src=l.href,s.appendChild(t)}))(),M=new Promise(e=>{addEventListener("message",function n(t){var i;t.source!==g.contentWindow||t.origin!==v||((i=t.data)==null?void 0:i.type)!=="livecodes-ready"||(removeEventListener("message",n),e(),M.settled=!0)})}),H=()=>b?Promise.reject(S):new Promise(async e=>{var t;M.settled&&e();let n={type:"livecodes-load"};(t=g.contentWindow)==null||t.postMessage(n,v),await M,e()}),d=(e,n)=>new Promise(async(t,i)=>{var u;if(b)return i(S);await H();let c=$();addEventListener("message",function w(y){var P,C;if(!(y.source!==g.contentWindow||y.origin!==v||((P=y.data)==null?void 0:P.type)!=="livecodes-api-response"||((C=y.data)==null?void 0:C.id)!==c)&&y.data.method===e){removeEventListener("message",w);let h=y.data.payload;h!=null&&h.error?i(h.error):t(h)}}),(u=g.contentWindow)==null||u.postMessage({method:e,id:c,args:n},v)}),p={},J=["load","ready","code","console","tests","destroy"],U=(e,n)=>{var t;if(b)throw new Error(S);return J.includes(e)?(d("watch",[e]),p[e]||(p[e]=[]),(t=p[e])==null||t.push(n),{remove:()=>{var i,c;p[e]=(i=p[e])==null?void 0:i.filter(u=>u!==n),((c=p[e])==null?void 0:c.length)===0&&d("watch",[e,"unsubscribe"])}}):{remove:()=>{}}},Q=e=>({"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"})[e];addEventListener("message",async e=>{var i,c,u,w;let n=Q((c=(i=e.data)==null?void 0:i.type)!=null?c:"");if(e.source!==g.contentWindow||e.origin!==v||!n||!p[n])return;let t=(u=e.data)==null?void 0:u.payload;(w=p[n])==null||w.forEach(y=>{y(t)})});let D=()=>{var e;Object.values(p).forEach(n=>{n.length=0}),(e=g==null?void 0:g.remove)==null||e.call(g),b=!0};x==="lazy"&&"IntersectionObserver"in window&&new IntersectionObserver((n,t)=>{n.forEach(async i=>{i.isIntersecting&&(await H(),t.unobserve(s))})},{rootMargin:"150px"}).observe(s);function j(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}let $=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>H(),run:()=>d("run"),format:e=>d("format",[e]),getShareUrl:e=>d("getShareUrl",[e]),getConfig:e=>d("getConfig",[e]),setConfig:e=>d("setConfig",[e]),getCode:()=>d("getCode"),show:(e,n)=>d("show",[e,n]),runTests:()=>d("runTests"),onChange:e=>U("code",e),watch:U,exec:(e,...n)=>d("exec",[e,...n]),destroy:()=>M.settled?d("destroy").then(D):b?Promise.reject(S):(D(),Promise.resolve())}}var N;globalThis.document&&document.currentScript&&"prefill"in((N=document.currentScript)==null?void 0:N.dataset)&&window.addEventListener("load",()=>{document.querySelectorAll(".livecodes").forEach(o=>{let r,m=o.dataset.options;if(m)try{r=JSON.parse(m)}catch(L){}let f,a=o.dataset.config||o.dataset.prefill;if(a)try{f=JSON.parse(a)}catch(L){}q(o,{import:"dom/"+encodeURIComponent(o.outerHTML),...r,...f?{config:f}:{}})})});return Z(_);})();
