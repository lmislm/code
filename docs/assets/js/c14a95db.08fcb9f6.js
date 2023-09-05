"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(h,s(s({ref:t},d),{},{components:n})):o.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(7294),r=n(6010);const a="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var o=n(7462),r=n(7294),a=n(6010),s=n(2466),i=n(6550),l=n(1980),c=n(7392),d=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=p(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[l,c]=h({queryString:n,groupId:o}),[u,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,d.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),g=(()=>{const e=l??u;return m({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,a]),tabValues:a}}var g=n(2389);const v="tabList__CuJ",y="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),o=c[n].value;o!==i&&(u(t),l(o))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},s,{className:(0,a.Z)("tabs__item",y,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",v)},r.createElement(b,(0,o.Z)({},e,t)),r.createElement(w,(0,o.Z)({},e,t)))}function E(e){const t=(0,g.Z)();return r.createElement(k,(0,o.Z)({key:String(t)},e))}},7778:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(7462),r=n(7294);async function a(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://livecodes.io/",params:o={},config:r={},import:a,lite:s,loading:i="lazy",template:l,view:c="split"}=t,d="headless"===c;let u,p=null;if("string"==typeof e)p=document.querySelector(e);else if(e instanceof HTMLElement)p=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!p){if(!d)throw new Error(`Cannot find element: "${e}"`);p=document.createElement("div"),x(p),document.body.appendChild(p)}try{u=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const m=u.origin;if("object"==typeof o&&Object.keys(o).forEach((e=>{u.searchParams.set(e,String(o[e]))})),"string"==typeof r)try{new URL(r),u.searchParams.set("config",r)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof r)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(r).length>0&&u.searchParams.set("config","sdk")}l&&u.searchParams.set("template",l),a&&u.searchParams.set("x",a),s&&u.searchParams.set("lite","true"),u.searchParams.set("embed","true"),u.searchParams.set("loading",d?"eager":i),u.searchParams.set("view",c);let h=!1;const f="Cannot call API methods after calling `destroy()`.",g=await new Promise((e=>{if(!p)return;const t=p.dataset.height||p.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";p.style.height=e}"false"===p.dataset.defaultStyles||d||(p.style.backgroundColor||="#fff",p.style.border||="1px solid black",p.style.borderRadius||="5px",p.style.boxSizing||="border-box",p.style.padding||="0",p.style.width||="100%",p.style.height||=p.style.height||"300px",p.style.minHeight="200px",p.style.overflow||="hidden",p.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const o="eager"===i?"eager":"lazy";n.setAttribute("loading",o),n.classList.add("livecodes"),d?x(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=p.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===m&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:r},m))})),n.onload=()=>{e(n)},n.src=u.href,p.appendChild(n)})),v=new Promise((e=>{addEventListener("message",(function t(n){n.source===g.contentWindow&&n.origin===m&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),v.settled=!0)}))})),y=()=>h?Promise.reject(f):new Promise((async e=>{v.settled&&e();g.contentWindow?.postMessage({type:"livecodes-load"},m),await v,e()})),b=(e,t)=>new Promise((async(n,o)=>{if(h)return o(f);await y();const r=N();addEventListener("message",(function t(a){if(a.source===g.contentWindow&&a.origin===m&&"livecodes-api-response"===a.data?.type&&a.data?.id===r&&a.data.method===e){removeEventListener("message",t);const e=a.data.payload;e?.error?o(e.error):n(e)}})),g.contentWindow?.postMessage({method:e,id:r,args:t},m)})),w={},k=["load","ready","code","console","tests","destroy"],E=(e,t)=>{if(h)throw new Error(f);return k.includes(e)?(b("watch",[e]),w[e]||(w[e]=[]),w[e]?.push(t),{remove:()=>{w[e]=w[e]?.filter((e=>e!==t)),0===w[e]?.length&&b("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==g.contentWindow||e.origin!==m||!t||!w[t])return;const n=e.data?.payload;w[t]?.forEach((e=>{e(n)}))}));const C=()=>{Object.values(w).forEach((e=>{e.length=0})),g?.remove?.(),h=!0};if("lazy"===i&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await y(),t.unobserve(p))}))}),{rootMargin:"150px"}).observe(p)}function x(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const N=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>y(),run:()=>b("run"),format:e=>b("format",[e]),getShareUrl:e=>b("getShareUrl",[e]),getConfig:e=>b("getConfig",[e]),setConfig:e=>b("setConfig",[e]),getCode:()=>b("getCode"),show:(e,t)=>b("show",[e,t]),runTests:()=>b("runTests"),onChange:e=>E("code",e),watch:E,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return b("exec",[e,...n])},destroy:()=>v.settled?b("destroy").then(C):h?Promise.reject(f):(C(),Promise.resolve())}}function s(e){const{className:t,style:n,height:o,sdkReady:s,...i}=e,l=(0,r.useRef)(null);let c;return(0,r.useEffect)((()=>{if(l.current)return a(l.current,i).then((e=>{c=e,"function"==typeof s&&s(e)})),()=>{c?.destroy()}}),[]),r.createElement("div",{ref:l,className:t,style:n,"data-height":o})}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let o;const r=e.dataset.config||e.dataset.prefill;if(r)try{o=JSON.parse(r)}catch{}a(e,{import:"dom/"+encodeURIComponent(e.outerHTML),...t,...o?{config:o}:{}})}))}));var i=n(1446),l=n(412),c=n(814),d=n(4866),u=n(5162),p=n(2134),m=n(420);function h(e){const[t,n]=(0,r.useState)(e.js),[o,a]=(0,r.useState)(e.ts),[s,i]=(0,r.useState)(e.react),[h,f]=(0,r.useState)(e.vue),[g,v]=(0,r.useState)(e.svelte),y="3.7rem",[b,w]=(0,r.useState)(!0),[k,E]=(0,r.useState)(y),C=(0,r.useRef)(null),x=()=>{setTimeout((()=>{E(`calc(${C.current.offsetHeight}px + ${y})`)}),5),setTimeout((()=>{E(`calc(${C.current.offsetHeight}px + ${y})`)}),255)};return(0,r.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),a(e(o,"ts")),i(e(s,"jsx")),f(e(h,"html")),v(e(g,"html"))}}),[]),r.createElement("details",{className:`alert alert--info ${p.Z.details} ${m.Z.details}`,"data-collapsed":b,style:{height:b?y:k,overflow:"hidden",willChange:"height",transition:`height ${b?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},r.createElement("summary",{onClick:()=>{w(!b),x()}},"show code"),r.createElement("div",{ref:C,style:{display:"block",overflow:"hidden"}},r.createElement("div",{className:p.Z.collapsibleContent},r.createElement(d.Z,{groupId:"sdk-code"},r.createElement(u.Z,{value:"js",label:"JS",attributes:{onMouseDown:x}},r.createElement(c.Z,{language:"js"},t)),r.createElement(u.Z,{value:"ts",label:"TS",attributes:{onMouseDown:x}},r.createElement(c.Z,{language:"ts"},o)),r.createElement(u.Z,{value:"react",label:"React",attributes:{onMouseDown:x}},r.createElement(c.Z,{language:"jsx"},s)),r.createElement(u.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:x}},r.createElement(c.Z,{language:"html"},h)),r.createElement(u.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:x}},r.createElement(c.Z,{language:"html"},g))))))}const f="container_Egsj";function g(e){const{className:t,style:n,showCode:a,height:l,...c}=e,d=e=>JSON.stringify(e,null,2),u=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),p=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${d(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),g=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${d(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,v=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return r.createElement(r.Fragment,null,r.createElement(s,(0,o.Z)({className:`${f} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:i.G},e)),!1!==e.showCode&&r.createElement(h,{js:u,ts:p,react:m,vue:g,svelte:v}))}},6491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,mdDemo:()=>u,mdxDemo:()=>p,metadata:()=>l,pyDemo:()=>m,toc:()=>d});var o=n(7462),r=(n(7294),n(3905)),a=n(7778);const s={},i="Headless Mode",l={unversionedId:"sdk/headless",id:"sdk/headless",title:"Headless Mode",description:"The LiveCodes SDK can be used to create playgrounds in headless mode. In this mode, no visible output is displayed in the embedding web page. However, all SDK methods are accessible (e.g. for updating code, getting compiled code, console output, result HTML, shareable URLs, formatting code, running tests, etc).",source:"@site/docs/sdk/headless.md",sourceDirName:"sdk",slug:"/sdk/headless",permalink:"/livecodes/docs/sdk/headless",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/sdk/headless.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Svelte",permalink:"/livecodes/docs/sdk/svelte"},next:{title:"Advanced Topics",permalink:"/livecodes/docs/advanced/"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Markdown Editor",id:"markdown-editor",level:3},{value:"MDX Editor",id:"mdx-editor",level:3},{value:"Python Interpreter",id:"python-interpreter",level:3}],u={markup:{language:"html",content:'<textarea id="editor" style="display: none;"></textarea>\n<div id="output">Loading...</div>\n\n<script type="module">\n  import { createPlayground } from "https://unpkg.com/livecodes@0.2.0";\n  import debounce from "https://jspm.dev/debounce";\n\n  const initialCode = "# Hello, LiveCodes!\\n\\n";\n\n  // the code editor\n  const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {\n    lineNumbers: true,\n    mode: "markdown",\n  });\n  editor.setSize("100%", 200);\n  editor.setValue(initialCode);\n\n  // the playground\n  const options = {\n    view: "headless",\n  };\n\n  const livecodes = await createPlayground(options);\n\n  const compile = async () => {\n    await livecodes.setConfig({\n      autoupdate: false,\n      markup: {\n        language: "markdown",\n        content: editor.doc.getValue(),\n      },\n    });\n  };\n\n  // watch for changes\n  editor.on("change", debounce(compile, 1000));\n  livecodes.watch("code", ({ code, config }) => {\n    createSandbox(document.querySelector("#output"), code.markup.compiled);\n  });\n\n  await compile();\n\n  // create a sandbox for safe execution of compiled code\n  function createSandbox (container, html) {\n    const iframe = document.createElement("iframe");\n    iframe.src = "https://livecodes-sandbox.pages.dev/v7/";\n    iframe.sandbox =\n      "allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts";\n    iframe.onload = () => {\n      iframe.contentWindow.postMessage({ html }, "*");\n    };\n    container.innerHTML = "";\n    container.appendChild(iframe);\n    return iframe;\n  };\n<\/script>\n\n<link rel="stylesheet" href="https://unpkg.com/codemirror@5.65.15/lib/codemirror.css" />\n<script src="https://unpkg.com/codemirror@5.65.15/lib/codemirror.js"><\/script>\n<script src="https://unpkg.com/codemirror@5.65.15/mode/markdown/markdown.js"><\/script>\n\n<style>\n  * {\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    overflow: hidden;\n  }\n  #output {\n    flex: 1;\n  }\n  #output iframe {\n    width: 100%;\n    height: 100%;\n    border: none;\n  }\n</style>\n'}},p={markup:{language:"html",content:'<textarea id="editor" style="display: none;"></textarea>\n<div id="output">Loading...</div>\n\n<script type="module">\n  import { createPlayground } from "https://unpkg.com/livecodes@0.2.0";\n  import debounce from "https://jspm.dev/debounce";\n\n  const initialCode = `import { useState, useEffect } from \'react\';\n\nexport const Hello = ({name}) => {\n  const [count, setCount] = useState(0);\n  return (\n    <>\n      <h1>Hello, {name}!</h1>\n      <p>You clicked {count} times.</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </>\n  );\n};\n\n<Hello name="LiveCodes"></Hello>\n\n## MDX in short\n\n- \u2764\ufe0f Powerful\n- \ud83d\udcbb Everything is a component\n- \ud83d\udd27 Customizable\n- \ud83d\udcda Markdown-based\n- \ud83d\udd25 Blazingly blazing fast\n\n> from [mdxjs.com](https://mdxjs.com/)\n`;\n\n  // the code editor\n  const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {\n    lineNumbers: true,\n    mode: "markdown",\n  });\n  editor.setSize("100%", 200);\n  editor.setValue(initialCode);\n\n  // the playground\n  const options = {\n    view: "headless",\n    config: { autoupdate: false },\n  };\n\n  const livecodes = await createPlayground(options);\n\n  const compile = async () => {\n    await livecodes.setConfig({\n      autoupdate: false,\n      markup: {\n        language: "mdx",\n        content: editor.doc.getValue(),\n      },\n    });\n  };\n\n  // watch for changes\n  editor.on("change", debounce(compile, 1000));\n  livecodes.watch("code", ({ code, config }) => {\n    createSandbox(document.querySelector("#output"), code.result);\n  });\n\n  await compile();\n\n  // create a sandbox for safe execution of compiled code\n  function createSandbox (container, html) {\n    const iframe = document.createElement("iframe");\n    iframe.src = "https://livecodes-sandbox.pages.dev/v7/";\n    iframe.sandbox =\n      "allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts";\n    iframe.onload = () => {\n      iframe.contentWindow.postMessage({ html }, "*");\n    };\n    container.innerHTML = "";\n    container.appendChild(iframe);\n    return iframe;\n  };\n<\/script>\n\n<link rel="stylesheet" href="https://unpkg.com/codemirror@5.65.15/lib/codemirror.css" />\n<script src="https://unpkg.com/codemirror@5.65.15/lib/codemirror.js"><\/script>\n<script src="https://unpkg.com/codemirror@5.65.15/mode/markdown/markdown.js"><\/script>\n\n<style>\n  * {\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    overflow: hidden;\n  }\n  #output {\n    flex: 1;\n  }\n  #output iframe {\n    width: 100%;\n    height: 100%;\n    border: none;\n  }\n</style>\n'}},m={markup:{language:"html",content:'<textarea id="editor" style="display: none"></textarea>\n<div id="output">Loading...</div>\n\n<script type="module">\n  import { createPlayground } from "https://unpkg.com/livecodes@0.2.0";\n  import debounce from "https://jspm.dev/debounce";\n\n  const initialCode = `def say_hello(name):\n  return f"Hello, {name}!"\n\nprint(say_hello("LiveCodes"))\n`;\n\n  // the code editor\n  const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {\n    lineNumbers: true,\n    mode: "python",\n  });\n  editor.setSize("100%", 250);\n  editor.setValue(initialCode);\n\n  // the playground\n  const options = {\n    view: "headless",\n  };\n\n  const livecodes = await createPlayground(options);\n\n  const run = async () => {\n    await livecodes.setConfig({\n      autoupdate: true,\n      script: {\n        language: "python",\n        content: editor.doc.getValue(),\n      },\n    });\n  };\n\n  // watch for changes\n  editor.on("change", debounce(run, 1000));\n  livecodes.watch("console", ({ method, args }) => {\n    const output = document.querySelector("#output");\n    output.innerHTML = args.join("\\n");\n    if (method === "error") {\n      output.style.color = "red";\n    } else {\n      output.style.color = "unset";\n    }\n  });\n\n  await run();\n<\/script>\n\n<link rel="stylesheet" href="https://unpkg.com/codemirror@5.65.15/lib/codemirror.css" />\n<script src="https://unpkg.com/codemirror@5.65.15/lib/codemirror.js"><\/script>\n<script src="https://unpkg.com/codemirror@5.65.15/mode/python/python.js"><\/script>\n\n<style>\n  * {\n    margin: 0;\n    padding: 0;\n  }\n  body {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    overflow: hidden;\n  }\n  #output {\n    flex: 1;\n    margin: 1em;\n    white-space: pre;\n    font-family: monospace;\n  }\n  #output iframe {\n    width: 100%;\n    height: 100%;\n    border: none;\n  }\n</style>\n'}},h={toc:d,mdDemo:u,mdxDemo:p,pyDemo:m};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"headless-mode"},"Headless Mode"),(0,r.kt)("p",null,"The LiveCodes ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/"},"SDK")," can be used to create playgrounds in headless mode. In this mode, no visible output is displayed in the embedding web page. However, all ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#sdk-methods"},"SDK methods")," are accessible (e.g. for ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#setconfig"},"updating code"),", ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#getcode"},"getting compiled code"),", console output, ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#getcode"},"result HTML"),", ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#getshareurl"},"shareable URLs"),", ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#format"},"formatting code"),", ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#runtests"},"running tests"),", etc)."),(0,r.kt)("p",null,"This provides the power of leveraging the wide range of features and language support offered by LiveCodes, while retaining full control over the UI."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To create a headless playground, set the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#embed-options"},"embed option")," ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#view"},(0,r.kt)("inlineCode",{parentName:"a"},"view"))," to ",(0,r.kt)("inlineCode",{parentName:"p"},'"headless"'),"."),(0,r.kt)("p",null,"Please note that in headless mode, the first parameter (",(0,r.kt)("inlineCode",{parentName:"p"},"container"),") of the function ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#createplayground"},(0,r.kt)("inlineCode",{parentName:"a"},"createPlayground"))," is optional and can be omitted."),(0,r.kt)("div",{style:{clear:"both"}}),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { createPlayground } from 'livecodes';\n\ncreatePlayground({\n  view: 'headless',\n  config: {\n    markup: {\n      language: 'markdown',\n      content: '# Hello World!',\n    },\n  },\n}).then(async (playground) => {\n  const code = await playground.getCode();\n  console.log(code.markup.compiled); // \"<h1>Hello World!</h1>\"\n  console.log(code.result); // (result page HTML)\n});\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The following examples show how to use the headless mode to make a Markdown editor, an MDX editor and a Python interpreter."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You may want to view the following playgrounds in full screen (using the full screen button in the top right of each playground).")),(0,r.kt)("h3",{id:"markdown-editor"},"Markdown Editor"),(0,r.kt)("p",null,"In this demo, code changes are watched using the SDK method ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#watch"},(0,r.kt)("inlineCode",{parentName:"a"},"watch('code', callback)")),". The callback function accepts an argument which is an object with the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," (see ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#getcode"},(0,r.kt)("inlineCode",{parentName:"a"},"getCode"))," and ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#getconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"getConfig")),"). The compiled code is obtained as ",(0,r.kt)("inlineCode",{parentName:"p"},"code.markup.compiled"),"."),(0,r.kt)(a.Z,{config:u,height:"80vh",mdxType:"LiveCodes"}),(0,r.kt)("h3",{id:"mdx-editor"},"MDX Editor"),(0,r.kt)("p",null,"In this demo, code changes are watched using the SDK method ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#watch"},(0,r.kt)("inlineCode",{parentName:"a"},"watch('code', callback)")),". The callback function accepts an argument which is an object with the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," (see ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#getcode"},(0,r.kt)("inlineCode",{parentName:"a"},"getCode"))," and ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#getconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"getConfig")),"). The result HTML is obtained as ",(0,r.kt)("inlineCode",{parentName:"p"},"code.result"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you do not want to run the result page in the headless playground and only want to get the generated result HTML, you can set the configuration option ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/configuration-object#autoupdate"},"`autoupdate")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,r.kt)(a.Z,{config:p,height:"80vh",mdxType:"LiveCodes"}),(0,r.kt)("h3",{id:"python-interpreter"},"Python Interpreter"),(0,r.kt)("p",null,"In this demo, console output is obtained using the SDK method ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#watch"},(0,r.kt)("inlineCode",{parentName:"a"},"watch('code', callback)")),". The callback function accepts an argument which is an object with the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"method")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"args")," indicating the console method and the arguments that were passed (as an array)."),(0,r.kt)(a.Z,{config:m,height:"80vh",mdxType:"LiveCodes"}))}f.isMDXComponent=!0},420:(e,t,n)=>{n.d(t,{Z:()=>o});const o={details:"details_sGeq"}},2134:(e,t,n)=>{n.d(t,{Z:()=>o});const o={details:"details_iMJ2",isBrowser:"isBrowser_HA_8",collapsibleContent:"collapsibleContent_AEyV"}}}]);