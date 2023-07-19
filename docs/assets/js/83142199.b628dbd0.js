"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8663],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3590:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i="Deploy",s={unversionedId:"features/deploy",id:"features/deploy",title:"Deploy",description:"The result page (of any number of projects) can be deployed and hosted at GitHub Pages (a free service from GitHub for hosting static websites). This requires login with a GitHub account.",source:"@site/docs/features/deploy.md",sourceDirName:"features",slug:"/features/deploy",permalink:"/livecodes/docs/features/deploy",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/features/deploy.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Data URLs",permalink:"/livecodes/docs/features/data-urls"},next:{title:"Sync",permalink:"/livecodes/docs/features/sync"}},l={},p=[{value:"Related",id:"related",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"The result page (of any number of projects) can be deployed and hosted at ",(0,o.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"GitHub Pages")," (a free service from GitHub for hosting static websites). This requires login with a ",(0,o.kt)("a",{parentName:"p",href:"/livecodes/docs/features/github-integration"},"GitHub account"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy")," screen can be accessed from the app menu \u2192 Deploy."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"LiveCodes Deploy",src:r(3780).Z,width:"2695",height:"1366"})),(0,o.kt)("p",null,"The result page (and optionally the source code) is pushed to ",(0,o.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch of a ",(0,o.kt)("strong",{parentName:"p"},"public")," GitHub repo (new or existing). The page, shortly, becomes available on ",(0,o.kt)("inlineCode",{parentName:"p"},"https://{user}.github.io/{repo}/"),"."),(0,o.kt)("p",null,"If an existing repo is selected, the content of the ",(0,o.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch (if existing) is replaced by the deployed content."),(0,o.kt)("p",null,"If the option ",(0,o.kt)("inlineCode",{parentName:"p"},"Commit source code")," is enabled, the source code will be deployed to the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/src"),"."),(0,o.kt)("p",null,"The code for the result page (and source code) is deployed as separate files for markup (",(0,o.kt)("inlineCode",{parentName:"p"},"/index.html"),"), styles (",(0,o.kt)("inlineCode",{parentName:"p"},"style.css"),") and script (",(0,o.kt)("inlineCode",{parentName:"p"},"script.js"),"). This allows re-use of these resources in other projects. Of course, multiple projects can be deloyed and linked to each other to act like a multi-page website."),(0,o.kt)("p",null,"The LiveCodes app will remember the repo used to deploy each project, so that later updates to the project can be deployed to the same repo."),(0,o.kt)("h2",{id:"related"},"Related"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livecodes/docs/features/export"},"Export")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livecodes/docs/features/share"},"Share")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livecodes/docs/features/broadcast"},"Broadcast")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/livecodes/docs/features/github-integration"},"GitHub integration"))))}d.isMDXComponent=!0},3780:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/deploy-d1540338be0915200f7f17c4b3328c4c.jpg"}}]);