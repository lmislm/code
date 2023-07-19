"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5147],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),s=n(6550),i=n(1980),c=n(7392),u=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,c]=g({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var f=n(2389);const v="tabList__CuJ",y="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(d(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",y,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function E(e){const t=(0,f.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},7778:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),r=n(7294);const o=async function(e,t){void 0===t&&(t={});const{appUrl:n="https://livecodes.io/",params:a={},config:r={},import:o,lite:l=!1,loading:s="lazy",template:i,view:c="split"}=t;let u,d;if(u="string"==typeof e?document.querySelector(e):e,!e)throw new Error("Container element is required.");if(!u)throw new Error(`Cannot find element: "${e}"`);try{d=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const p=d.origin;if("object"==typeof a&&Object.keys(a).forEach((e=>{d.searchParams.set(e,String(a[e]))})),"string"==typeof r)try{new URL(r),d.searchParams.set("config",r)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof r)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(r).length>0&&d.searchParams.set("config","sdk")}i&&d.searchParams.set("template",i),o&&d.searchParams.set("x",o),d.searchParams.set(l?"lite":"embed","true"),d.searchParams.set("loading",s),d.searchParams.set("view",c);let m=!1;const g="Cannot call API methods after calling `destroy()`.",h=await new Promise((e=>{if(!u)return;const t=u.dataset.height||u.style.height;if(t){const e=isNaN(Number(t))?t:t+"px";u.style.height=e}"false"!==u.dataset.defaultStyles&&(u.style.backgroundColor||="#fff",u.style.border||="1px solid black",u.style.borderRadius||="5px",u.style.boxSizing||="border-box",u.style.padding||="0",u.style.width||="100%",u.style.height||=u.style.height||"300px",u.style.minHeight="200px",u.style.overflow||="hidden",u.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const a="eager"===s?"eager":"lazy";n.setAttribute("loading",a),n.classList.add("livecodes"),n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=u.style.borderRadius,addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===p&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:r},p))})),n.onload=()=>{e(n)},n.src=d.href,u.innerHTML="",u.appendChild(n)})),f=new Promise((e=>{addEventListener("message",(function t(n){n.source===h.contentWindow&&n.origin===p&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),f.settled=!0)}))})),v=()=>m?Promise.reject(g):new Promise((async e=>{f.settled&&e();h.contentWindow?.postMessage({type:"livecodes-load"},p),await f,e()})),y=(e,t)=>new Promise((async(n,a)=>{if(m)return a(g);await v(),addEventListener("message",(function t(r){if(r.source===h.contentWindow&&r.origin===p&&"livecodes-api-response"===r.data?.type&&r.data.method===e){removeEventListener("message",t);const e=r.data.payload;e?.error?a(e.error):n(e)}})),h.contentWindow?.postMessage({method:e,args:t},p)}));let b=[];addEventListener("message",(async e=>{if(e.source!==h.contentWindow||e.origin!==p||"livecodes-change"!==e.data?.type)return;const t=await y("getCode"),n=await y("getConfig");b.forEach((e=>{e({code:t,config:n})}))}));const w=()=>{b.length=0,u&&(u.innerHTML=""),m=!0};if("lazy"===s&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(u))}))}),{rootMargin:"150px"}).observe(u)}return{load:()=>v(),run:()=>y("run"),format:e=>y("format",[e]),getShareUrl:e=>y("getShareUrl",[e]),getConfig:e=>y("getConfig",[e]),setConfig:e=>y("setConfig",[e]),getCode:()=>y("getCode"),show:(e,t)=>y("show",[e,t]),runTests:()=>y("runTests"),onChange:e=>(e=>{if(m)throw new Error(g);return b.push(e),{remove:()=>{b=b.filter((t=>t!==e))}}})(e),exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return y("exec",[e,...n])},destroy:()=>f.settled?y("destroy").then(w):m?Promise.reject(g):(w(),Promise.resolve())}};function l(e){const{className:t,style:n,height:a,sdkReady:l,...s}=e,i=(0,r.useRef)(null);let c;return(0,r.useEffect)((()=>{if(i.current)return o(i.current,s).then((e=>{c=e,"function"==typeof l&&l(e)})),()=>{c?.destroy()}}),[]),r.createElement("div",{ref:i,className:t,style:n,"data-height":a})}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let a;const r=e.dataset.config||e.dataset.prefill;if(r)try{a=JSON.parse(r)}catch{}o(e,{import:"dom/"+encodeURIComponent(e.outerHTML),...t,...a?{config:a}:{}})}))}));var s=n(1446),i=n(412),c=n(814),u=n(4866),d=n(5162),p=n(2134),m=n(420);function g(e){const[t,n]=(0,r.useState)(e.js),[a,o]=(0,r.useState)(e.ts),[l,s]=(0,r.useState)(e.react),[g,h]=(0,r.useState)(e.vue),[f,v]=(0,r.useState)(e.svelte),y="3.7rem",[b,w]=(0,r.useState)(!0),[k,E]=(0,r.useState)(y),C=(0,r.useRef)(null),N=()=>{setTimeout((()=>{E(`calc(${C.current.offsetHeight}px + ${y})`)}),5),setTimeout((()=>{E(`calc(${C.current.offsetHeight}px + ${y})`)}),255)};return(0,r.useEffect)((()=>{if(i.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),o(e(a,"ts")),s(e(l,"jsx")),h(e(g,"html")),v(e(f,"html"))}}),[]),r.createElement("details",{className:`alert alert--info ${p.Z.details} ${m.Z.details}`,"data-collapsed":b,style:{height:b?y:k,overflow:"hidden",willChange:"height",transition:`height ${b?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},r.createElement("summary",{onClick:()=>{w(!b),N()}},"show code"),r.createElement("div",{ref:C,style:{display:"block",overflow:"hidden"}},r.createElement("div",{className:p.Z.collapsibleContent},r.createElement(u.Z,{groupId:"sdk-code"},r.createElement(d.Z,{value:"js",label:"JS",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"js"},t)),r.createElement(d.Z,{value:"ts",label:"TS",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"ts"},a)),r.createElement(d.Z,{value:"react",label:"React",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"jsx"},l)),r.createElement(d.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"html"},g)),r.createElement(d.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:N}},r.createElement(c.Z,{language:"html"},f))))))}const h="container_Egsj";function f(e){const{className:t,style:n,showCode:o,height:i,...c}=e,u=e=>JSON.stringify(e,null,2),d=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${u(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),p=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${u(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${u(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),f=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${u(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,v=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${u(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return r.createElement(r.Fragment,null,r.createElement(l,(0,a.Z)({className:`${h} ${e.className}`,style:{height:i||"50vh",...e.style},appUrl:s.G},e)),!1!==e.showCode&&r.createElement(g,{js:d,ts:p,react:m,vue:f,svelte:v}))}},8085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,config:()=>d,config2:()=>m,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>i,params:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(7778);const l={},s="Haml",i={unversionedId:"languages/haml",id:"languages/haml",title:"Haml",description:"Haml compiler for client side javascript view templates using clientside-haml-js.",source:"@site/docs/languages/haml.md",sourceDirName:"languages",slug:"/languages/haml",permalink:"/livecodes/docs/languages/haml",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/haml.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Go (Golang)",permalink:"/livecodes/docs/languages/go"},next:{title:"Handlebars",permalink:"/livecodes/docs/languages/handlebars"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Pre-rendered (Default)",id:"pre-rendered-default",level:3},{value:"Dynamic",id:"dynamic",level:3},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extension",id:"extension",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Custom Settings",id:"custom-settings",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Pre-rendered",id:"pre-rendered",level:3},{value:"Dynamic",id:"dynamic-1",level:3},{value:"Links",id:"links",level:2}],d={markup:{language:"haml",content:"%p Hello, #{name}!"},customSettings:{template:{data:{name:"LiveCodes"}}}},p={compiled:"open"},m={markup:{language:"haml",content:"%p Hello, #{name}!"},script:{language:"javascript",content:'window.livecodes.templateData = { name: "LiveCodes" };'},customSettings:{template:{prerender:!1}},activeEditor:"script"},g={toc:u,config:d,params:p,config2:m};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"haml"},"Haml"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://haml.info/"},"Haml")," compiler for client side javascript view templates using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/uglyog/clientside-haml-js"},"clientside-haml-js"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"There are 2 modes for rendering:"),(0,r.kt)("h3",{id:"pre-rendered-default"},"Pre-rendered (Default)"),(0,r.kt)("p",null,"The values of the expressions are evaluated and added to the template during compilation of the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/result"},"result page"),"."),(0,r.kt)("p",null,"The values of all expressions should be supplied in advance using ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/advanced/custom-settings"},"custom settings")," to the property ",(0,r.kt)("inlineCode",{parentName:"p"},"template.data")," which accepts an object of key-value pairs."),(0,r.kt)("p",null,"Example: This provides the value of the expression ",(0,r.kt)("inlineCode",{parentName:"p"},"name")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Custom Settings"',title:'"Custom','Settings"':!0},'{\n  "template": {\n    "data": {\n      "name": "LiveCodes"\n    }\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#pre-rendered"},"Full example below")),(0,r.kt)("h3",{id:"dynamic"},"Dynamic"),(0,r.kt)("p",null,"To use this mode, the property ",(0,r.kt)("inlineCode",{parentName:"p"},"template.prerender")," in ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/advanced/custom-settings"},"custom settings")," should be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Custom Settings"',title:'"Custom','Settings"':!0},'{\n  "template": {\n    "prerender": false\n  }\n}\n')),(0,r.kt)("p",null,"In this mode, in addition to values supplied in custom settings (see above), expressions can have values that are evaluated during the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/result"},"result page")," runtime."),(0,r.kt)("p",null,"This can be achieved in JavaScript (or any ",(0,r.kt)("a",{parentName:"p",href:"../languages/"},"language")," that compiles to it) by assigning ",(0,r.kt)("inlineCode",{parentName:"p"},"window.livecodes.templateData")," to an object with the data."),(0,r.kt)("p",null,"Please note that template rendering occurs on ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event"},"page load"),", so the assignment must occur before that."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Script Editor (JS)"',title:'"Script',Editor:!0,'(JS)"':!0},"window.livecodes.templateData = { name: 'LiveCodes' };\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#dynamic-1"},"Full example below")),(0,r.kt)("h2",{id:"language-info"},"Language Info"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"haml")),(0,r.kt)("h3",{id:"extension"},"Extension"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".haml")),(0,r.kt)("h3",{id:"editor"},"Editor"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"markup")),(0,r.kt)("h2",{id:"compiler"},"Compiler"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/uglyog/clientside-haml-js"},"clientside-haml-js"),"."),(0,r.kt)("h3",{id:"version"},"Version"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"clientside-haml-js"),": v5.4"),(0,r.kt)("h2",{id:"code-formatting"},"Code Formatting"),(0,r.kt)("p",null,"Not supported."),(0,r.kt)("h2",{id:"custom-settings"},"Custom Settings"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/advanced/custom-settings"},"Custom settings")," added to the property ",(0,r.kt)("inlineCode",{parentName:"p"},"haml")," are passed as a JSON object to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/uglyog/clientside-haml-js#client-side-haml-api"},(0,r.kt)("inlineCode",{parentName:"a"},"haml.compileHaml"))," method during compile. Please check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/uglyog/clientside-haml-js#client-side-haml-api"},"documentation")," for full reference."),(0,r.kt)("p",null,"Please note that custom settings should be valid JSON (i.e. functions are not allowed)."),(0,r.kt)("h2",{id:"example-usage"},"Example Usage"),(0,r.kt)("h3",{id:"pre-rendered"},"Pre-rendered"),(0,r.kt)(o.Z,{config:d,params:p,mdxType:"LiveCodes"}),(0,r.kt)("h3",{id:"dynamic-1"},"Dynamic"),(0,r.kt)(o.Z,{config:m,mdxType:"LiveCodes"}),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://haml.info/"},"Haml")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/uglyog/clientside-haml-js"},"clientside-haml-js"))))}h.isMDXComponent=!0},420:(e,t,n)=>{n.d(t,{Z:()=>a});const a={details:"details_sGeq"}},2134:(e,t,n)=>{n.d(t,{Z:()=>a});const a={details:"details_iMJ2",isBrowser:"isBrowser_HA_8",collapsibleContent:"collapsibleContent_AEyV"}}}]);