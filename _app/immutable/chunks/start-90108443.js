import{a3 as oe,S as Z,i as $,s as ee,e as R,b as C,B as A,h as i,I as ae,a4 as ne,a5 as Q,a6 as G,k as S,q as M,a as B,l as L,m as P,r as x,c as D,n as H,D as k,L as re,P as ie,u as J,a7 as se,V as ce,a1 as ue,a2 as de,w as fe,x as be,p as V,y as me,f as he,t as _e,z as ge}from"./index-95f11990.js";import{w as te,r as pe}from"./index-a3c4e8c3.js";const ve=te(void 0),q={};function K(o){return o==="local"?localStorage:sessionStorage}function U(o,e,t){const l=(t==null?void 0:t.serializer)??JSON,r=(t==null?void 0:t.storage)??"local";function w(b,s){K(r).setItem(b,l.stringify(s))}if(!q[o]){const b=te(e,u=>{const d=K(r).getItem(o);d&&u(l.parse(d));{const y=_=>{_.key===o&&u(_.newValue?l.parse(_.newValue):null)};return window.addEventListener("storage",y),()=>window.removeEventListener("storage",y)}}),{subscribe:s,set:h}=b;q[o]={set(u){w(o,u),h(u)},update(u){const d=u(oe(b));w(o,d),h(d)},subscribe:s}}return q[o]}U("modeOsPrefers",!1);U("modeUserPrefers",void 0);U("modeCurrent",!1);const le="(prefers-reduced-motion: reduce)";function ke(){return window.matchMedia(le).matches}pe(ke(),o=>{{const e=l=>{o(l.matches)},t=window.matchMedia(le);return t.addEventListener("change",e),()=>{t.removeEventListener("change",e)}}});function ye(o,e){if(!window.isSecureContext)return console.error("Clipboard action failed: app not running in secure context, see: https://developer.mozilla.org/en-US/docs/Web/API/Clipboard"),{};const t=()=>{o.dispatchEvent(new CustomEvent("copyComplete"))},l=()=>{if(typeof e=="object"){if("element"in e){const r=document.querySelector(`[data-clipboard="${e.element}"]`);if(!r)throw new Error(`Missing HTMLElement with an attribute of [data-clipboard="${e.element}"]`);z(r.innerHTML,"text/html").then(t);return}if("input"in e){const r=document.querySelector(`[data-clipboard="${e.input}"]`);if(!r)throw new Error(`Missing HTMLInputElement with an attribute of [data-clipboard="${e.input}"]`);z(r.value).then(t);return}}z(e).then(t)};return o.addEventListener("click",l),{update(r){e=r},destroy(){o.removeEventListener("click",l)}}}async function z(o,e="text/plain"){navigator.clipboard.write?await navigator.clipboard.write([new ClipboardItem({[e]:new Blob([o],{type:e}),["text/plain"]:new Blob([o],{type:"text/plain"})})]):await new Promise(t=>{t(navigator.clipboard.writeText(String(o)))})}function X(o){let e,t,l,r=Y(o[0])+"",w,b,s,h=(o[7]?o[4]:o[3])+"",u,d,y,_,f,g,I,p,E,N;function n(a,m){return a[6]?Ee:we}let c=n(o),v=c(o);return{c(){e=S("div"),t=S("header"),l=S("span"),w=M(r),b=B(),s=S("button"),u=M(h),_=B(),f=S("pre"),g=S("code"),v.c(),this.h()},l(a){e=L(a,"DIV",{class:!0,"data-testid":!0});var m=P(e);t=L(m,"HEADER",{class:!0});var T=P(t);l=L(T,"SPAN",{class:!0});var O=P(l);w=x(O,r),O.forEach(i),b=D(T),s=L(T,"BUTTON",{type:!0,class:!0});var j=P(s);u=x(j,h),j.forEach(i),T.forEach(i),_=D(m),f=L(m,"PRE",{class:!0});var W=P(f);g=L(W,"CODE",{class:!0});var F=P(g);v.l(F),F.forEach(i),W.forEach(i),m.forEach(i),this.h()},h(){H(l,"class","codeblock-language"),H(s,"type","button"),H(s,"class",d="codeblock-btn "+o[2]),H(t,"class","codeblock-header "+Le),H(g,"class",I="codeblock-code language-"+o[0]+" lineNumbers"),H(f,"class","codeblock-pre "+Pe),H(e,"class",p="codeblock "+o[8]),H(e,"data-testid","codeblock")},m(a,m){C(a,e,m),k(e,t),k(t,l),k(l,w),k(t,b),k(t,s),k(s,u),k(e,_),k(e,f),k(f,g),v.m(g,null),E||(N=[re(s,"click",o[9]),ie(y=ye.call(null,s,o[1]))],E=!0)},p(a,m){m&1&&r!==(r=Y(a[0])+"")&&J(w,r),m&152&&h!==(h=(a[7]?a[4]:a[3])+"")&&J(u,h),m&4&&d!==(d="codeblock-btn "+a[2])&&H(s,"class",d),y&&se(y.update)&&m&2&&y.update.call(null,a[1]),c===(c=n(a))&&v?v.p(a,m):(v.d(1),v=c(a),v&&(v.c(),v.m(g,null))),m&1&&I!==(I="codeblock-code language-"+a[0]+" lineNumbers")&&H(g,"class",I),m&256&&p!==(p="codeblock "+a[8])&&H(e,"class",p)},d(a){a&&i(e),v.d(),E=!1,ce(N)}}}function we(o){let e=o[1].trim()+"",t;return{c(){t=M(e)},l(l){t=x(l,e)},m(l,r){C(l,t,r)},p(l,r){r&2&&e!==(e=l[1].trim()+"")&&J(t,e)},d(l){l&&i(t)}}}function Ee(o){let e,t;return{c(){e=new ue(!1),t=R(),this.h()},l(l){e=de(l,!1),t=R(),this.h()},h(){e.a=t},m(l,r){e.m(o[5],l,r),C(l,t,r)},p(l,r){r&32&&e.p(l[5])},d(l){l&&i(t),l&&e.d()}}}function Ce(o){let e,t=o[0]&&o[1]&&X(o);return{c(){t&&t.c(),e=R()},l(l){t&&t.l(l),e=R()},m(l,r){t&&t.m(l,r),C(l,e,r)},p(l,[r]){l[0]&&l[1]?t?t.p(l,r):(t=X(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:A,o:A,d(l){t&&t.d(l),l&&i(e)}}}const Se="overflow-hidden shadow",Le="text-xs text-white/50 uppercase flex justify-between items-center p-2 pl-4",Pe="whitespace-pre-wrap break-all p-4 pt-1";function Y(o){return o==="js"?"javascript":o==="ts"?"typescript":o==="shell"?"terminal":o}function Ie(o,e,t){let l,r;ae(o,ve,a=>t(17,r=a));const w=ne();let{language:b="plaintext"}=e,{code:s=""}=e,{lineNumbers:h=!1}=e,{background:u="bg-neutral-900/90"}=e,{blur:d=""}=e,{text:y="text-sm"}=e,{color:_="text-white"}=e,{rounded:f="rounded-container-token"}=e,{shadow:g="shadow"}=e,{button:I="btn btn-sm variant-soft !text-white"}=e,{buttonLabel:p="Copy"}=e,{buttonCopied:E="👍"}=e,N=!1,n=s,c=!1;function v(){t(7,c=!0),setTimeout(()=>{t(7,c=!1)},2e3),w("copy")}return o.$$set=a=>{t(19,e=Q(Q({},e),G(a))),"language"in a&&t(0,b=a.language),"code"in a&&t(1,s=a.code),"lineNumbers"in a&&t(10,h=a.lineNumbers),"background"in a&&t(11,u=a.background),"blur"in a&&t(12,d=a.blur),"text"in a&&t(13,y=a.text),"color"in a&&t(14,_=a.color),"rounded"in a&&t(15,f=a.rounded),"shadow"in a&&t(16,g=a.shadow),"button"in a&&t(2,I=a.button),"buttonLabel"in a&&t(3,p=a.buttonLabel),"buttonCopied"in a&&t(4,E=a.buttonCopied)},o.$$.update=()=>{o.$$.dirty&131075&&r!==void 0&&(t(5,n=r.highlight(s,{language:b}).value.trim()),t(6,N=!0)),o.$$.dirty&1056&&h&&(t(5,n=n.replace(/^/gm,()=>'<span class="line"></span>	')),t(6,N=!0)),t(8,l=`${Se} ${u} ${d} ${y} ${_} ${f} ${g} ${e.class??""}`)},e=G(e),[b,s,I,p,E,n,N,c,l,v,h,u,d,y,_,f,g,r]}class Ne extends Z{constructor(e){super(),$(this,e,Ie,Ce,ee,{language:0,code:1,lineNumbers:10,background:11,blur:12,text:13,color:14,rounded:15,shadow:16,button:2,buttonLabel:3,buttonCopied:4})}}function He(o){let e,t,l,r,w,b,s,h,u,d,y,_,f,g,I,p,E,N;return E=new Ne({props:{language:"html",code:"<style> background-color: rgb(0, 255, 0); </style>"}}),{c(){e=S("p"),t=M("Hello, I am "),l=S("em"),r=M("Post One."),w=B(),b=S("p"),s=S("strong"),h=M("Nice to meet you!"),u=B(),d=S("p"),y=M("When i was working on Chatbot I was using this code to give the text box color"),_=B(),f=S("div"),g=M("box"),I=B(),p=S("div"),fe(E.$$.fragment),this.h()},l(n){e=L(n,"P",{});var c=P(e);t=x(c,"Hello, I am "),l=L(c,"EM",{});var v=P(l);r=x(v,"Post One."),v.forEach(i),c.forEach(i),w=D(n),b=L(n,"P",{});var a=P(b);s=L(a,"STRONG",{});var m=P(s);h=x(m,"Nice to meet you!"),m.forEach(i),a.forEach(i),u=D(n),d=L(n,"P",{});var T=P(d);y=x(T,"When i was working on Chatbot I was using this code to give the text box color"),T.forEach(i),_=D(n),f=L(n,"DIV",{style:!0});var O=P(f);g=x(O,"box"),O.forEach(i),I=D(n),p=L(n,"DIV",{style:!0});var j=P(p);be(E.$$.fragment,j),j.forEach(i),this.h()},h(){V(f,"width","20px"),V(f,"height","20px"),V(f,"background-color","red"),V(p,"margin","auto"),V(p,"width","70vw")},m(n,c){C(n,e,c),k(e,t),k(e,l),k(l,r),C(n,w,c),C(n,b,c),k(b,s),k(s,h),C(n,u,c),C(n,d,c),k(d,y),C(n,_,c),C(n,f,c),k(f,g),C(n,I,c),C(n,p,c),me(E,p,null),N=!0},p:A,i(n){N||(he(E.$$.fragment,n),N=!0)},o(n){_e(E.$$.fragment,n),N=!1},d(n){n&&i(e),n&&i(w),n&&i(b),n&&i(u),n&&i(d),n&&i(_),n&&i(f),n&&i(I),n&&i(p),ge(E)}}}const Te={title:"Projektstart",date:"2024-02-21",keywords:["planning"]};class Be extends Z{constructor(e){super(),$(this,e,null,He,ee,{})}}export{Be as default,Te as metadata};
