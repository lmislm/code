"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),o=n(6010);const a="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(7462),o=n(7294),a=n(6010),s=n(2466),l=n(6550),i=n(1980),c=n(7392),d=n(12);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[i,c]=f({queryString:n,groupId:r}),[u,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,d.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),h=(()=>{const e=i??u;return m({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,a]),tabValues:a}}var h=n(2389);const v="tabList__CuJ",y="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),r=c[n].value;r!==l&&(u(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},s,{className:(0,a.Z)("tabs__item",y,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=g(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",v)},o.createElement(b,(0,r.Z)({},e,t)),o.createElement(w,(0,r.Z)({},e,t)))}function E(e){const t=(0,h.Z)();return o.createElement(k,(0,r.Z)({key:String(t)},e))}},7778:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7462),o=n(7294);const a=async function(e,t){void 0===t&&(t={});const{appUrl:n="https://livecodes.io/",params:r={},config:o={},import:a,lite:s=!1,loading:l="lazy",template:i,view:c="split"}=t;let d,u;if(d="string"==typeof e?document.querySelector(e):e,!e)throw new Error("Container element is required.");if(!d)throw new Error(`Cannot find element: "${e}"`);try{u=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const p=u.origin;if("object"==typeof r&&Object.keys(r).forEach((e=>{u.searchParams.set(e,String(r[e]))})),"string"==typeof o)try{new URL(o),u.searchParams.set("config",o)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof o)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(o).length>0&&u.searchParams.set("config","sdk")}i&&u.searchParams.set("template",i),a&&u.searchParams.set("x",a),u.searchParams.set(s?"lite":"embed","true"),u.searchParams.set("loading",l),u.searchParams.set("view",c);let m=!1;const f="Cannot call API methods after calling `destroy()`.",g=await new Promise((e=>{if(!d)return;const t=d.dataset.height||d.style.height;if(t){const e=isNaN(Number(t))?t:t+"px";d.style.height=e}"false"!==d.dataset.defaultStyles&&(d.style.backgroundColor||="#fff",d.style.border||="1px solid black",d.style.borderRadius||="5px",d.style.boxSizing||="border-box",d.style.padding||="0",d.style.width||="100%",d.style.height||=d.style.height||"300px",d.style.minHeight="200px",d.style.overflow||="hidden",d.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const r="eager"===l?"eager":"lazy";n.setAttribute("loading",r),n.classList.add("livecodes"),n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=d.style.borderRadius,addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===p&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:o},p))})),n.onload=()=>{e(n)},n.src=u.href,d.innerHTML="",d.appendChild(n)})),h=new Promise((e=>{addEventListener("message",(function t(n){n.source===g.contentWindow&&n.origin===p&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),h.settled=!0)}))})),v=()=>m?Promise.reject(f):new Promise((async e=>{h.settled&&e();g.contentWindow?.postMessage({type:"livecodes-load"},p),await h,e()})),y=(e,t)=>new Promise((async(n,r)=>{if(m)return r(f);await v(),addEventListener("message",(function t(o){if(o.source===g.contentWindow&&o.origin===p&&"livecodes-api-response"===o.data?.type&&o.data.method===e){removeEventListener("message",t);const e=o.data.payload;e?.error?r(e.error):n(e)}})),g.contentWindow?.postMessage({method:e,args:t},p)}));let b=[];addEventListener("message",(async e=>{if(e.source!==g.contentWindow||e.origin!==p||"livecodes-change"!==e.data?.type)return;const t=await y("getCode"),n=await y("getConfig");b.forEach((e=>{e({code:t,config:n})}))}));const w=()=>{b.length=0,d&&(d.innerHTML=""),m=!0};if("lazy"===l&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(d))}))}),{rootMargin:"150px"}).observe(d)}return{load:()=>v(),run:()=>y("run"),format:e=>y("format",[e]),getShareUrl:e=>y("getShareUrl",[e]),getConfig:e=>y("getConfig",[e]),setConfig:e=>y("setConfig",[e]),getCode:()=>y("getCode"),show:(e,t)=>y("show",[e,t]),runTests:()=>y("runTests"),onChange:e=>(e=>{if(m)throw new Error(f);return b.push(e),{remove:()=>{b=b.filter((t=>t!==e))}}})(e),exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return y("exec",[e,...n])},destroy:()=>h.settled?y("destroy").then(w):m?Promise.reject(f):(w(),Promise.resolve())}};function s(e){const{className:t,style:n,height:r,sdkReady:s,...l}=e,i=(0,o.useRef)(null);let c;return(0,o.useEffect)((()=>{if(i.current)return a(i.current,l).then((e=>{c=e,"function"==typeof s&&s(e)})),()=>{c?.destroy()}}),[]),o.createElement("div",{ref:i,className:t,style:n,"data-height":r})}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let r;const o=e.dataset.config||e.dataset.prefill;if(o)try{r=JSON.parse(o)}catch{}a(e,{import:"dom/"+encodeURIComponent(e.outerHTML),...t,...r?{config:r}:{}})}))}));var l=n(1446),i=n(412),c=n(814),d=n(4866),u=n(5162),p=n(2134),m=n(420);function f(e){const[t,n]=(0,o.useState)(e.js),[r,a]=(0,o.useState)(e.ts),[s,l]=(0,o.useState)(e.react),[f,g]=(0,o.useState)(e.vue),[h,v]=(0,o.useState)(e.svelte),y="3.7rem",[b,w]=(0,o.useState)(!0),[k,E]=(0,o.useState)(y),S=(0,o.useRef)(null),C=()=>{setTimeout((()=>{E(`calc(${S.current.offsetHeight}px + ${y})`)}),5),setTimeout((()=>{E(`calc(${S.current.offsetHeight}px + ${y})`)}),255)};return(0,o.useEffect)((()=>{if(i.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),a(e(r,"ts")),l(e(s,"jsx")),g(e(f,"html")),v(e(h,"html"))}}),[]),o.createElement("details",{className:`alert alert--info ${p.Z.details} ${m.Z.details}`,"data-collapsed":b,style:{height:b?y:k,overflow:"hidden",willChange:"height",transition:`height ${b?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},o.createElement("summary",{onClick:()=>{w(!b),C()}},"show code"),o.createElement("div",{ref:S,style:{display:"block",overflow:"hidden"}},o.createElement("div",{className:p.Z.collapsibleContent},o.createElement(d.Z,{groupId:"sdk-code"},o.createElement(u.Z,{value:"js",label:"JS",attributes:{onMouseDown:C}},o.createElement(c.Z,{language:"js"},t)),o.createElement(u.Z,{value:"ts",label:"TS",attributes:{onMouseDown:C}},o.createElement(c.Z,{language:"ts"},r)),o.createElement(u.Z,{value:"react",label:"React",attributes:{onMouseDown:C}},o.createElement(c.Z,{language:"jsx"},s)),o.createElement(u.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:C}},o.createElement(c.Z,{language:"html"},f)),o.createElement(u.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:C}},o.createElement(c.Z,{language:"html"},h))))))}const g="container_Egsj";function h(e){const{className:t,style:n,showCode:a,height:i,...c}=e,d=e=>JSON.stringify(e,null,2),u=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),p=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${d(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),h=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${d(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,v=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return o.createElement(o.Fragment,null,o.createElement(s,(0,r.Z)({className:`${g} ${e.className}`,style:{height:i||"50vh",...e.style},appUrl:l.G},e)),!1!==e.showCode&&o.createElement(f,{js:u,ts:p,react:m,vue:h,svelte:v}))}},9390:(e,t,n)=>{n.r(t),n.d(t,{ESMCode:()=>m,UMDCode:()=>f,assets:()=>u,config:()=>g,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),a=n(7778),s=n(2263),l=n(814);const i={},c="Getting Started",d={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"There are multiple options:",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/livecodes/docs/getting-started",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/getting-started.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Why Another Playground?",permalink:"/livecodes/docs/why"},next:{title:"Features",permalink:"/livecodes/docs/features/"}},u={},p=[{value:"Standalone App",id:"standalone-app",level:2},{value:"Embedded Playgrounds",id:"embedded-playgrounds",level:2},{value:"App Embed Screen",id:"app-embed-screen",level:3},{value:"SDK",id:"sdk",level:3},{value:"Option 1: Using a bundler",id:"option-1-using-a-bundler",level:4},{value:"Option 2: Load from CDN",id:"option-2-load-from-cdn",level:4},{value:"Add your own content",id:"add-your-own-content",level:4},{value:"Self-Hosting",id:"self-hosting",level:2}],m=()=>{const{siteConfig:e}=(0,s.Z)();return(0,o.kt)(l.Z,{title:"index.html",language:"html",mdxType:"CodeBlock"},`<div id="container"></div>\n<script type="module">\n  import { createPlayground } from 'https://unpkg.com/livecodes@${e.customFields.sdkVersion}';\n\n  createPlayground('#container', {\n    template: 'react',\n    // other embed options\n  });\n<\/script>`)},f=()=>{const{siteConfig:e}=(0,s.Z)();return(0,o.kt)(l.Z,{title:"index.html",language:"html",mdxType:"CodeBlock"},`<div id="container"></div>\n<script src="https://unpkg.com/livecodes@${e.customFields.sdkVersion}/livecodes.umd.js"><\/script>\n<script>\n  // the UMD version provides the global object \`livecodes\`\n livecodes.createPlayground('#container', {\n${" ".repeat(4)}template: 'react',\n    // other embed options\n });\n<\/script>\n`)},g={markup:{language:"markdown",content:"# Hello LiveCodes!"},style:{language:"css",content:"body { color: blue; }"},script:{language:"javascript",content:'console.log("hello from JavaScript!");'},activeEditor:"script"},h={toc:p,ESMCode:m,UMDCode:f,config:g};function v(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"There are multiple options:"),(0,o.kt)("h2",{id:"standalone-app"},"Standalone App"),(0,o.kt)("p",null,"The easiest way to get started with LiveCodes is to just use the app (",(0,o.kt)("a",{parentName:"p",href:"https://livecodes.io"},"https://livecodes.io"),")."),(0,o.kt)("p",null,"It is packed with ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/"},"features")," and offers various ways to ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/import"},"import code"),"."),(0,o.kt)("h2",{id:"embedded-playgrounds"},"Embedded Playgrounds"),(0,o.kt)("p",null,"LiveCodes playgrounds can be easily ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/embeds"},"embedded")," into any web page. This can be achieved using:"),(0,o.kt)("h3",{id:"app-embed-screen"},"App Embed Screen"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"#standalone-app"},"standalone app")," allows you to embed any project from the ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/embeds"},"embed screen"),". The UI allows setting embed options and shows a preview of the embedded playground.",(0,o.kt)("br",{parentName:"p"}),"\n","Copy the generated code snippet (at the bottom of the screen) and add it to the web page that you want to embed the playground in."),(0,o.kt)("h3",{id:"sdk"},"SDK"),(0,o.kt)("p",null,"LiveCodes ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/"},(0,o.kt)("abbr",{title:"Software Development Kit"},"SDK"))," is available as ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/livecodes"},"npm package")," to allow easy embedding and communication with playgrounds."),(0,o.kt)("h4",{id:"option-1-using-a-bundler"},"Option 1: Using a bundler"),(0,o.kt)("p",null,"Install from npm."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm i livecodes\n")),(0,o.kt)("p",null,"then you can use it like that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"import { createPlayground } from 'livecodes';\n\ncreatePlayground('#container', {\n  template: 'react',\n  // other embed options\n});\n")),(0,o.kt)("h4",{id:"option-2-load-from-cdn"},"Option 2: Load from CDN"),(0,o.kt)("p",null,"ESM:"),(0,o.kt)(m,{mdxType:"ESMCode"}),(0,o.kt)("p",null,"UMD:"),(0,o.kt)(f,{mdxType:"UMDCode"}),(0,o.kt)("h4",{id:"add-your-own-content"},"Add your own content"),(0,o.kt)("p",null,"You may use any of the methods to ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/code-prefill"},"prefill the playground")," with your own code."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"import { createPlayground } from 'livecodes';\n\nconst config = {\n  markup: {\n    language: 'markdown',\n    content: '# Hello LiveCodes!',\n  },\n  style: {\n    language: 'css',\n    content: 'body { color: blue; }',\n  },\n  script: {\n    language: 'javascript',\n    content: 'console.log(\"hello from JavaScript!\");',\n  },\n  activeEditor: 'script',\n};\n\ncreatePlayground('#container', { config, params: { console: 'open' } });\n")),(0,o.kt)("p",null,"Live demo:",(0,o.kt)("br",{parentName:"p"}),"\n","(this is an interactive playground - try editing the code!)"),(0,o.kt)(a.Z,{config:g,params:{console:"open"},mdxType:"LiveCodes"}),(0,o.kt)("p",null,"Please refer to the section on ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/embeds"},"Embedded Playgrounds")," for more details."),(0,o.kt)("h2",{id:"self-hosting"},"Self-Hosting"),(0,o.kt)("p",null,"LiveCodes can be hosted on any static file server or CDN."),(0,o.kt)("p",null,"The easiest way is to download the app from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/live-codes/livecodes/releases"},"releases"),", extract the folder and add it to your website."),(0,o.kt)("p",null,"Please check the section on ","[self-hosting]"," for other methods of self-hosting, including the built-in setup to deploy to GitHub pages and how to use the SDK with the self-hosted app."))}v.isMDXComponent=!0},420:(e,t,n)=>{n.d(t,{Z:()=>r});const r={details:"details_sGeq"}},2134:(e,t,n)=>{n.d(t,{Z:()=>r});const r={details:"details_iMJ2",isBrowser:"isBrowser_HA_8",collapsibleContent:"collapsibleContent_AEyV"}}}]);