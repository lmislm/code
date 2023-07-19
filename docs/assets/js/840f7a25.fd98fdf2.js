"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),o=n(6010);const a="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7462),o=n(7294),a=n(6010),s=n(2466),l=n(6550),i=n(1980),c=n(7392),u=n(12);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[i,c]=f({queryString:n,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),h=(()=>{const e=i??d;return m({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,a]),tabValues:a}}var h=n(2389);const v="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==l&&(d(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},s,{className:(0,a.Z)("tabs__item",b,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function E(e){const t=g(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",v)},o.createElement(y,(0,r.Z)({},e,t)),o.createElement(w,(0,r.Z)({},e,t)))}function k(e){const t=(0,h.Z)();return o.createElement(E,(0,r.Z)({key:String(t)},e))}},7778:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7462),o=n(7294);const a=async function(e,t){void 0===t&&(t={});const{appUrl:n="https://livecodes.io/",params:r={},config:o={},import:a,lite:s=!1,loading:l="lazy",template:i,view:c="split"}=t;let u,d;if(u="string"==typeof e?document.querySelector(e):e,!e)throw new Error("Container element is required.");if(!u)throw new Error(`Cannot find element: "${e}"`);try{d=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const p=d.origin;if("object"==typeof r&&Object.keys(r).forEach((e=>{d.searchParams.set(e,String(r[e]))})),"string"==typeof o)try{new URL(o),d.searchParams.set("config",o)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof o)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(o).length>0&&d.searchParams.set("config","sdk")}i&&d.searchParams.set("template",i),a&&d.searchParams.set("x",a),d.searchParams.set(s?"lite":"embed","true"),d.searchParams.set("loading",l),d.searchParams.set("view",c);let m=!1;const f="Cannot call API methods after calling `destroy()`.",g=await new Promise((e=>{if(!u)return;const t=u.dataset.height||u.style.height;if(t){const e=isNaN(Number(t))?t:t+"px";u.style.height=e}"false"!==u.dataset.defaultStyles&&(u.style.backgroundColor||="#fff",u.style.border||="1px solid black",u.style.borderRadius||="5px",u.style.boxSizing||="border-box",u.style.padding||="0",u.style.width||="100%",u.style.height||=u.style.height||"300px",u.style.minHeight="200px",u.style.overflow||="hidden",u.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const r="eager"===l?"eager":"lazy";n.setAttribute("loading",r),n.classList.add("livecodes"),n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=u.style.borderRadius,addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===p&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:o},p))})),n.onload=()=>{e(n)},n.src=d.href,u.innerHTML="",u.appendChild(n)})),h=new Promise((e=>{addEventListener("message",(function t(n){n.source===g.contentWindow&&n.origin===p&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),h.settled=!0)}))})),v=()=>m?Promise.reject(f):new Promise((async e=>{h.settled&&e();g.contentWindow?.postMessage({type:"livecodes-load"},p),await h,e()})),b=(e,t)=>new Promise((async(n,r)=>{if(m)return r(f);await v(),addEventListener("message",(function t(o){if(o.source===g.contentWindow&&o.origin===p&&"livecodes-api-response"===o.data?.type&&o.data.method===e){removeEventListener("message",t);const e=o.data.payload;e?.error?r(e.error):n(e)}})),g.contentWindow?.postMessage({method:e,args:t},p)}));let y=[];addEventListener("message",(async e=>{if(e.source!==g.contentWindow||e.origin!==p||"livecodes-change"!==e.data?.type)return;const t=await b("getCode"),n=await b("getConfig");y.forEach((e=>{e({code:t,config:n})}))}));const w=()=>{y.length=0,u&&(u.innerHTML=""),m=!0};if("lazy"===l&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(u))}))}),{rootMargin:"150px"}).observe(u)}return{load:()=>v(),run:()=>b("run"),format:e=>b("format",[e]),getShareUrl:e=>b("getShareUrl",[e]),getConfig:e=>b("getConfig",[e]),setConfig:e=>b("setConfig",[e]),getCode:()=>b("getCode"),show:(e,t)=>b("show",[e,t]),runTests:()=>b("runTests"),onChange:e=>(e=>{if(m)throw new Error(f);return y.push(e),{remove:()=>{y=y.filter((t=>t!==e))}}})(e),exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b("exec",[e,...n])},destroy:()=>h.settled?b("destroy").then(w):m?Promise.reject(f):(w(),Promise.resolve())}};function s(e){const{className:t,style:n,height:r,sdkReady:s,...l}=e,i=(0,o.useRef)(null);let c;return(0,o.useEffect)((()=>{if(i.current)return a(i.current,l).then((e=>{c=e,"function"==typeof s&&s(e)})),()=>{c?.destroy()}}),[]),o.createElement("div",{ref:i,className:t,style:n,"data-height":r})}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let r;const o=e.dataset.config||e.dataset.prefill;if(o)try{r=JSON.parse(o)}catch{}a(e,{import:"dom/"+encodeURIComponent(e.outerHTML),...t,...r?{config:r}:{}})}))}));var l=n(1446),i=n(412),c=n(814),u=n(4866),d=n(5162),p=n(2134),m=n(420);function f(e){const[t,n]=(0,o.useState)(e.js),[r,a]=(0,o.useState)(e.ts),[s,l]=(0,o.useState)(e.react),[f,g]=(0,o.useState)(e.vue),[h,v]=(0,o.useState)(e.svelte),b="3.7rem",[y,w]=(0,o.useState)(!0),[E,k]=(0,o.useState)(b),C=(0,o.useRef)(null),N=()=>{setTimeout((()=>{k(`calc(${C.current.offsetHeight}px + ${b})`)}),5),setTimeout((()=>{k(`calc(${C.current.offsetHeight}px + ${b})`)}),255)};return(0,o.useEffect)((()=>{if(i.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),a(e(r,"ts")),l(e(s,"jsx")),g(e(f,"html")),v(e(h,"html"))}}),[]),o.createElement("details",{className:`alert alert--info ${p.Z.details} ${m.Z.details}`,"data-collapsed":y,style:{height:y?b:E,overflow:"hidden",willChange:"height",transition:`height ${y?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},o.createElement("summary",{onClick:()=>{w(!y),N()}},"show code"),o.createElement("div",{ref:C,style:{display:"block",overflow:"hidden"}},o.createElement("div",{className:p.Z.collapsibleContent},o.createElement(u.Z,{groupId:"sdk-code"},o.createElement(d.Z,{value:"js",label:"JS",attributes:{onMouseDown:N}},o.createElement(c.Z,{language:"js"},t)),o.createElement(d.Z,{value:"ts",label:"TS",attributes:{onMouseDown:N}},o.createElement(c.Z,{language:"ts"},r)),o.createElement(d.Z,{value:"react",label:"React",attributes:{onMouseDown:N}},o.createElement(c.Z,{language:"jsx"},s)),o.createElement(d.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:N}},o.createElement(c.Z,{language:"html"},f)),o.createElement(d.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:N}},o.createElement(c.Z,{language:"html"},h))))))}const g="container_Egsj";function h(e){const{className:t,style:n,showCode:a,height:i,...c}=e,u=e=>JSON.stringify(e,null,2),d=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${u(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),p=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${u(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${u(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),h=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${u(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,v=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${u(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return o.createElement(o.Fragment,null,o.createElement(s,(0,r.Z)({className:`${g} ${e.className}`,style:{height:i||"50vh",...e.style},appUrl:l.G},e)),!1!==e.showCode&&o.createElement(f,{js:d,ts:p,react:m,vue:h,svelte:v}))}},5734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905)),a=n(7778);const s={},l="Tools Pane",i={unversionedId:"features/tools-pane",id:"features/tools-pane",title:"Tools Pane",description:"The resizeable tools pane (below the result page) provides an area for developer tools. This currently includes:",source:"@site/docs/features/tools-pane.md",sourceDirName:"features",slug:"/features/tools-pane",permalink:"/livecodes/docs/features/tools-pane",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/features/tools-pane.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"External Resources",permalink:"/livecodes/docs/features/external-resources"},next:{title:"Console",permalink:"/livecodes/docs/features/console"}},c={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tools-pane"},"Tools Pane"),(0,o.kt)("p",null,"The resizeable tools pane (below the result page) provides an area for developer tools. This currently includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livecodes/docs/features/console"},"Console")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livecodes/docs/features/compiled-code"},"Compiled code viewer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livecodes/docs/features/tests"},"Tests")),(0,o.kt)("li",{parentName:"ul"},"Open result page in new window (not in embeds)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livecodes/docs/features/broadcast"},"Broadcast")," status (not in embeds)"),(0,o.kt)("li",{parentName:"ul"},"Loading spinner that appears when the result page is loading")),(0,o.kt)("p",null,"The pane can be resized by dragging the bar. Clicking a tool button toggles opening/closing the pane. Double-click toggles maximize/close."),(0,o.kt)("p",null,"It can be configured to have any of the following states:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"closed")," (default)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"open")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"full")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none"))),(0,o.kt)("p",null,"e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://livecodes.io/?console=open&js=console.log('hello')"},"https://livecodes.io/?console=open&js=console.log('hello')")," ",(0,o.kt)("br",null),"\nopens the console and sets JavaScript code."),(0,o.kt)("p",null,"Demo: (console=open)"),(0,o.kt)(a.Z,{params:{console:"open",js:"console.log('hello')"},mdxType:"LiveCodes"}),(0,o.kt)("p",null,"\xa0"),(0,o.kt)("p",null,"Demo: (console=full)"),(0,o.kt)(a.Z,{params:{console:"full",js:"console.log('hello')"},mdxType:"LiveCodes"}))}p.isMDXComponent=!0},420:(e,t,n)=>{n.d(t,{Z:()=>r});const r={details:"details_sGeq"}},2134:(e,t,n)=>{n.d(t,{Z:()=>r});const r={details:"details_iMJ2",isBrowser:"isBrowser_HA_8",collapsibleContent:"collapsibleContent_AEyV"}}}]);