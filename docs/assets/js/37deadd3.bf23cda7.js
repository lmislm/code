"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2063],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(i,".").concat(m)]||u[m]||p[m]||s;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7462),r=n(7294),s=n(6010),o=n(2466),l=n(6550),i=n(1980),c=n(7392),d=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,c]=h({queryString:n,groupId:a}),[u,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=i??u;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,s]),tabValues:s}}var g=n(2389);const b="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=c[n].value;a!==l&&(u(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},o,{className:(0,s.Z)("tabs__item",v,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function E(e){const t=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},7778:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7462),r=n(7294);async function s(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://livecodes.io/",params:a={},config:r={},import:s,lite:o,loading:l="lazy",template:i,view:c="split"}=t,d="headless"===c;let u,p=null;if("string"==typeof e)p=document.querySelector(e);else if(e instanceof HTMLElement)p=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!p){if(!d)throw new Error(`Cannot find element: "${e}"`);p=document.createElement("div"),j(p),document.body.appendChild(p)}try{u=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const m=u.origin;if("object"==typeof a&&Object.keys(a).forEach((e=>{u.searchParams.set(e,String(a[e]))})),"string"==typeof r)try{new URL(r),u.searchParams.set("config",r)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof r)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(r).length>0&&u.searchParams.set("config","sdk")}i&&u.searchParams.set("template",i),s&&u.searchParams.set("x",s),o&&u.searchParams.set("lite","true"),u.searchParams.set("embed","true"),u.searchParams.set("loading",d?"eager":l),u.searchParams.set("view",c);let h=!1;const f="Cannot call API methods after calling `destroy()`.",g=await new Promise((e=>{if(!p)return;const t=p.dataset.height||p.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";p.style.height=e}"false"===p.dataset.defaultStyles||d||(p.style.backgroundColor||="#fff",p.style.border||="1px solid black",p.style.borderRadius||="5px",p.style.boxSizing||="border-box",p.style.padding||="0",p.style.width||="100%",p.style.height||=p.style.height||"300px",p.style.minHeight="200px",p.style.overflow||="hidden",p.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const a="eager"===l?"eager":"lazy";n.setAttribute("loading",a),n.classList.add("livecodes"),d?j(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=p.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===m&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:r},m))})),n.onload=()=>{e(n)},n.src=u.href,p.appendChild(n)})),b=new Promise((e=>{addEventListener("message",(function t(n){n.source===g.contentWindow&&n.origin===m&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),b.settled=!0)}))})),v=()=>h?Promise.reject(f):new Promise((async e=>{b.settled&&e();g.contentWindow?.postMessage({type:"livecodes-load"},m),await b,e()})),y=(e,t)=>new Promise((async(n,a)=>{if(h)return a(f);await v();const r=C();addEventListener("message",(function t(s){if(s.source===g.contentWindow&&s.origin===m&&"livecodes-api-response"===s.data?.type&&s.data?.id===r&&s.data.method===e){removeEventListener("message",t);const e=s.data.payload;e?.error?a(e.error):n(e)}})),g.contentWindow?.postMessage({method:e,id:r,args:t},m)})),k={},w=["load","ready","code","console","tests","destroy"],E=(e,t)=>{if(h)throw new Error(f);return w.includes(e)?(y("watch",[e]),k[e]||(k[e]=[]),k[e]?.push(t),{remove:()=>{k[e]=k[e]?.filter((e=>e!==t)),0===k[e]?.length&&y("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==g.contentWindow||e.origin!==m||!t||!k[t])return;const n=e.data?.payload;k[t]?.forEach((e=>{e(n)}))}));const N=()=>{Object.values(k).forEach((e=>{e.length=0})),g?.remove?.(),h=!0};if("lazy"===l&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(p))}))}),{rootMargin:"150px"}).observe(p)}function j(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const C=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>v(),run:()=>y("run"),format:e=>y("format",[e]),getShareUrl:e=>y("getShareUrl",[e]),getConfig:e=>y("getConfig",[e]),setConfig:e=>y("setConfig",[e]),getCode:()=>y("getCode"),show:(e,t)=>y("show",[e,t]),runTests:()=>y("runTests"),onChange:e=>E("code",e),watch:E,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return y("exec",[e,...n])},destroy:()=>b.settled?y("destroy").then(N):h?Promise.reject(f):(N(),Promise.resolve())}}function o(e){const{className:t,style:n,height:a,sdkReady:o,...l}=e,i=(0,r.useRef)(null);let c;return(0,r.useEffect)((()=>{if(i.current)return s(i.current,l).then((e=>{c=e,"function"==typeof o&&o(e)})),()=>{c?.destroy()}}),[]),r.createElement("div",{ref:i,className:t,style:n,"data-height":a})}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let a;const r=e.dataset.config||e.dataset.prefill;if(r)try{a=JSON.parse(r)}catch{}s(e,{import:"dom/"+encodeURIComponent(e.outerHTML),...t,...a?{config:a}:{}})}))}));var l=n(1446),i=n(412),c=n(814),d=n(4866),u=n(5162),p=n(2134),m=n(420);function h(e){const[t,n]=(0,r.useState)(e.js),[a,s]=(0,r.useState)(e.ts),[o,l]=(0,r.useState)(e.react),[h,f]=(0,r.useState)(e.vue),[g,b]=(0,r.useState)(e.svelte),v="3.7rem",[y,k]=(0,r.useState)(!0),[w,E]=(0,r.useState)(v),N=(0,r.useRef)(null),j=()=>{setTimeout((()=>{E(`calc(${N.current.offsetHeight}px + ${v})`)}),5),setTimeout((()=>{E(`calc(${N.current.offsetHeight}px + ${v})`)}),255)};return(0,r.useEffect)((()=>{if(i.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),s(e(a,"ts")),l(e(o,"jsx")),f(e(h,"html")),b(e(g,"html"))}}),[]),r.createElement("details",{className:`alert alert--info ${p.Z.details} ${m.Z.details}`,"data-collapsed":y,style:{height:y?v:w,overflow:"hidden",willChange:"height",transition:`height ${y?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},r.createElement("summary",{onClick:()=>{k(!y),j()}},"show code"),r.createElement("div",{ref:N,style:{display:"block",overflow:"hidden"}},r.createElement("div",{className:p.Z.collapsibleContent},r.createElement(d.Z,{groupId:"sdk-code"},r.createElement(u.Z,{value:"js",label:"JS",attributes:{onMouseDown:j}},r.createElement(c.Z,{language:"js"},t)),r.createElement(u.Z,{value:"ts",label:"TS",attributes:{onMouseDown:j}},r.createElement(c.Z,{language:"ts"},a)),r.createElement(u.Z,{value:"react",label:"React",attributes:{onMouseDown:j}},r.createElement(c.Z,{language:"jsx"},o)),r.createElement(u.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:j}},r.createElement(c.Z,{language:"html"},h)),r.createElement(u.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:j}},r.createElement(c.Z,{language:"html"},g))))))}const f="container_Egsj";function g(e){const{className:t,style:n,showCode:s,height:i,...c}=e,d=e=>JSON.stringify(e,null,2),u=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),p=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${d(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),g=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${d(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,b=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return r.createElement(r.Fragment,null,r.createElement(o,(0,a.Z)({className:`${f} ${e.className}`,style:{height:i||"50vh",...e.style},appUrl:l.G},e)),!1!==e.showCode&&r.createElement(h,{js:u,ts:p,react:m,vue:g,svelte:b}))}},5885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),s=n(7778);const o={},l="Tests",i={unversionedId:"features/tests",id:"features/tests",title:"Tests",description:"Overview",source:"@site/docs/features/tests.md",sourceDirName:"features",slug:"/features/tests",permalink:"/livecodes/docs/features/tests",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/features/tests.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Compiled Code",permalink:"/livecodes/docs/features/compiled-code"},next:{title:"Module Resolution",permalink:"/livecodes/docs/features/module-resolution"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Demos",id:"demos",level:2},{value:"Tests Panel",id:"tests-panel",level:2},{value:"Supported Languages",id:"supported-languages",level:2},{value:"Importing Code",id:"importing-code",level:2},{value:"Supported Jest features",id:"supported-jest-features",level:2},{value:"Supported testing libraries",id:"supported-testing-libraries",level:2},{value:"Testing library",id:"testing-library",level:3},{value:"Chai",id:"chai",level:3},{value:"Examples",id:"examples",level:2},{value:"SDK",id:"sdk",level:2}],u={toc:d};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tests"},"Tests"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Automated tests can be added for projects. The tests are run in the context of the result web page."),(0,r.kt)("p",null,"The automated tests are run by the ",(0,r.kt)("a",{href:"https://jestjs.io/",target:"_blank"},"Jest testing framework"),", which runs totally in the browser (using ",(0,r.kt)("a",{href:"https://github.com/kvendrik/jest-lite",target:"_blank"},"jest-lite"),"). In addition, other ",(0,r.kt)("a",{parentName:"p",href:"#supported-testing-libraries"},"testing libraries")," are also supported."),(0,r.kt)("p",null,"Screenshots:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Livecodes Tests",src:n(6595).Z,width:"3200",height:"1800"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Livecodes Tests",src:n(1619).Z,width:"3200",height:"1800"})),(0,r.kt)("h2",{id:"use-cases"},"Use Cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automated tests increase the confidence in the code and can improve the quality of projects."),(0,r.kt)("li",{parentName:"ul"},"Allows ",(0,r.kt)("a",{href:"https://en.wikipedia.org/wiki/Test-driven_development",target:"_blank"},"Test-driven development (TDD)"),"."),(0,r.kt)("li",{parentName:"ul"},"Can be used for education and training by preparing projects with tests that are required to pass by the students' implementation (similar to ",(0,r.kt)("a",{href:"https://www.freecodecamp.org/learn",target:"_blank"},"freeCodeCamp"),")."),(0,r.kt)("li",{parentName:"ul"},"Can be used by wesites that offer coding challenges (similar to ",(0,r.kt)("a",{href:"https://www.codewars.com/",target:"_blank"},"Codewars"),").")),(0,r.kt)("h2",{id:"demos"},"Demos"),(0,r.kt)("p",null,"Demo: (template=jest)"),(0,r.kt)(s.Z,{template:"jest",params:{tests:"open"},mdxType:"LiveCodes"}),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,"Demo: (template=jest-react)"),(0,r.kt)(s.Z,{template:"jest-react",params:{tests:"open"},mdxType:"LiveCodes"}),(0,r.kt)("h2",{id:"tests-panel"},"Tests Panel"),(0,r.kt)("p",null,'The "Tests" panel is located in the "',(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/tools-pane"},"Tools pane"),'" below the result page.'),(0,r.kt)("p",null,"In the tests panel, you can find:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"Run" button: To run tests (keyboard shortcut: Ctrl/Cmd + Alt + t).'),(0,r.kt)("li",{parentName:"ul"},'"Watch" button toggle: To watch the project and re-run tests automatically when code changes.'),(0,r.kt)("li",{parentName:"ul"},'"Reset" button: Resets test results.'),(0,r.kt)("li",{parentName:"ul"},'"Edit" button: Opens a code editor to edit tests (not in embeds).'),(0,r.kt)("li",{parentName:"ul"},"Test results.")),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please note that the tests panel are hidden by default in ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/embeds"},"embedded playgrounds")," unless the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/configuration-object#tests"},"project has tests"),". In such case, the panel is added to the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/tools-pane"},"tools pane"),". However, the test editor is not shown."),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/"},"SDK")," can control the visibility of the different tools in the tools pane (see ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/configuration-object#tools"},(0,r.kt)("inlineCode",{parentName:"a"},"tools"))," property of the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/configuration-object"},"configuration object"),")."),(0,r.kt)("p",{parentName:"admonition"},"The tests panel and the test editor are always shown in the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/getting-started#standalone-app"},"full standalone app"),".")),(0,r.kt)("h2",{id:"supported-languages"},"Supported Languages"),(0,r.kt)("p",null,"The testing code can be written using JavaScript, TypeScript, JSX or TSX.\nHowever, since the tests are run against the result web page, they can test projects that use any language/framework."),(0,r.kt)("p",null,"This is ",(0,r.kt)("a",{href:"https://livecodes.io/?x=id/3i8wrwcwhud&tests",target:"_blank"},"a demo")," for running tests against a Python project."),(0,r.kt)(s.Z,{import:"id/3i8wrwcwhud",params:{tests:"open"},mdxType:"LiveCodes"}),(0,r.kt)("h2",{id:"importing-code"},"Importing Code"),(0,r.kt)("p",null,"Functions, objects or values can be exported from the ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," code like a regular ES module.\nThese can then be imported in the test code for usage. This is only available for code in the ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," editor. The testing code also have access to global objects like ",(0,r.kt)("inlineCode",{parentName:"p"},"window"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// in the script editor\nexport default function greet() {\n  return 'Hello, World!';\n}\n\nexport const add = (x, y) => x + y;\n\nwindow.multiply = (x, y) => x * y;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// in the test editor\nimport greet, { add } from './script'; // relative import without extension\n\ndescribe('test imported', () => {\n  test('greet', () => {\n    expect(greet()).toBe('Hello, World!');\n  });\n\n  test('add', () => {\n    expect(add(1, 2)).toBe(3);\n  });\n});\n\ndescribe('test global', () => {\n  test('multiply', () => {\n    expect(window.multiply(2, 3)).toBe(6);\n  });\n});\n")),(0,r.kt)("h2",{id:"supported-jest-features"},"Supported Jest features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Jest globals: ",(0,r.kt)("inlineCode",{parentName:"li"},"expect"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"test"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"it"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"describe"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"beforeAll"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"afterAll"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"beforeEach"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"afterEach")),(0,r.kt)("li",{parentName:"ul"},"Jest function mocks: ",(0,r.kt)("inlineCode",{parentName:"li"},"jest.fn"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"jest.spyOn"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"jest.clearAllMocks"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"jest.resetAllMocks"))),(0,r.kt)("p",null,"These can be directly used in the test editor, without the need for any imports.\nAutocomplete is available in Monaco editor for Jest API."),(0,r.kt)("h2",{id:"supported-testing-libraries"},"Supported testing libraries"),(0,r.kt)("p",null,"In addition to Jest, you may wish to use other supported testing libraries. These have to be explicitly imported to the testing code."),(0,r.kt)("h3",{id:"testing-library"},"Testing library"),(0,r.kt)("p",null,"Simple and complete testing utilities that encourage good testing practices."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://testing-library.com/docs/dom-testing-library/intro",target:"_blank"},"DOM Testing Library"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  getByLabelText,\n  getByText,\n  getByTestId,\n  queryByTestId,\n  waitFor,\n} from '@testing-library/dom';\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://testing-library.com/docs/react-testing-library/intro",target:"_blank"},"React Testing Library"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { render, fireEvent, waitFor, screen } from '@testing-library/react';\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://testing-library.com/docs/ecosystem-jest-dom",target:"_blank"},"jest-dom"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import '@testing-library/jest-dom';\n")),(0,r.kt)("h3",{id:"chai"},"Chai"),(0,r.kt)("p",null,"Jest assertions can be used in the tests. However, if you prefer to Chai, it can be easily used.\nAutocomplete is also available in Monaco editor for Chai API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { assert } from 'chai';\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Usage examples are provided in the starter templates (",(0,r.kt)("a",{href:"pathname:///../?template=jest",target:"_blank"},"Jest Starter")," and ",(0,r.kt)("a",{href:"pathname:///../?template=jest-react",target:"_blank"},"Jest/React Starter"),")."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The test code is added to the result page and run in its context. Please note that script errors (e.g. import or syntax errors) may prevent the tests from loading.")),(0,r.kt)("h2",{id:"sdk"},"SDK"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/"},"SDK")," allows ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/js-ts#runtests"},"running tests")," and collecting results."))}p.isMDXComponent=!0},420:(e,t,n)=>{n.d(t,{Z:()=>a});const a={details:"details_sGeq"}},2134:(e,t,n)=>{n.d(t,{Z:()=>a});const a={details:"details_iMJ2",isBrowser:"isBrowser_HA_8",collapsibleContent:"collapsibleContent_AEyV"}},1619:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/test-editor-39ae8d77141b5bf8415a1c6ba8aa84ed.png"},6595:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tests-177ca40bddadb461513c5f348fb31334.png"}}]);