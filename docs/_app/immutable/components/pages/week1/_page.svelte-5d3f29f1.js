import{S as Z,i as z,s as $,k,q as S,a as T,e as w,l as b,m as y,r as V,h as n,c as j,n as N,b as E,D as m,P as W,u as X,B as F,J as x,p as P}from"../../../chunks/index-b294bf51.js";function G(o,t,l){const s=o.slice();return s[8]=t[l].number,s[9]=t[l].top,s[10]=t[l].left,s[12]=l,s}function K(o){let t,l=o[8]+"",s,u,i;function _(){return o[5](o[8],o[12])}return{c(){t=k("button"),s=S(l),this.h()},l(f){t=b(f,"BUTTON",{style:!0,class:!0});var c=y(t);s=V(c,l),c.forEach(n),this.h()},h(){P(t,"position","sticky"),P(t,"top",o[9]+"%"),P(t,"left",o[10]+"%"),N(t,"class","svelte-2uyo6p")},m(f,c){E(f,t,c),m(t,s),u||(i=W(t,"click",_),u=!0)},p(f,c){o=f,c&1&&l!==(l=o[8]+"")&&X(s,l),c&1&&P(t,"top",o[9]+"%"),c&1&&P(t,"left",o[10]+"%")},d(f){f&&n(t),u=!1,i()}}}function Q(o){let t,l;return{c(){t=k("div"),l=S("Oj vad hände här?"),this.h()},l(s){t=b(s,"DIV",{class:!0});var u=y(t);l=V(u,"Oj vad hände här?"),u.forEach(n),this.h()},h(){N(t,"class","pop svelte-2uyo6p")},m(s,u){E(s,t,u),m(t,l)},d(s){s&&n(t)}}}function ee(o){let t,l,s,u,i,_,f,c,M,O,d,v,I,B,g,q,H,D=o[0],h=[];for(let e=0;e<D.length;e+=1)h[e]=K(G(o,D,e));let p=o[2]&&Q();return{c(){t=k("main"),l=k("div"),s=k("p"),u=S(R),i=T(),_=k("div"),f=k("p"),c=T(),M=k("h1"),O=S("Logga in som "),d=S(o[1]),v=T(),I=k("div");for(let e=0;e<h.length;e+=1)h[e].c();B=T(),p&&p.c(),g=w(),this.h()},l(e){t=b(e,"MAIN",{});var r=y(t);l=b(r,"DIV",{class:!0});var a=y(l);s=b(a,"P",{});var L=y(s);u=V(L,R),L.forEach(n),a.forEach(n),i=j(r),_=b(r,"DIV",{class:!0});var J=y(_);f=b(J,"P",{});var Y=y(f);Y.forEach(n),J.forEach(n),r.forEach(n),c=j(e),M=b(e,"H1",{});var A=y(M);O=V(A,"Logga in som "),d=V(A,o[1]),A.forEach(n),v=j(e),I=b(e,"DIV",{class:!0});var U=y(I);for(let C=0;C<h.length;C+=1)h[C].l(U);U.forEach(n),B=j(e),p&&p.l(e),g=w(),this.h()},h(){N(l,"class","knapp svelte-2uyo6p"),N(_,"class","knapp svelte-2uyo6p"),N(I,"class","container svelte-2uyo6p")},m(e,r){E(e,t,r),m(t,l),m(l,s),m(s,u),m(t,i),m(t,_),m(_,f),E(e,c,r),E(e,M,r),m(M,O),m(M,d),E(e,v,r),E(e,I,r);for(let a=0;a<h.length;a+=1)h[a].m(I,null);E(e,B,r),p&&p.m(e,r),E(e,g,r),q||(H=W(_,"click",o[4]),q=!0)},p(e,[r]){if(r&2&&X(d,e[1]),r&9){D=e[0];let a;for(a=0;a<D.length;a+=1){const L=G(e,D,a);h[a]?h[a].p(L,r):(h[a]=K(L),h[a].c(),h[a].m(I,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=D.length}e[2]?p||(p=Q(),p.c(),p.m(g.parentNode,g)):p&&(p.d(1),p=null)},i:F,o:F,d(e){e&&n(t),e&&n(c),e&&n(M),e&&n(v),e&&n(I),x(h,e),e&&n(B),p&&p.d(e),e&&n(g),q=!1,H()}}}let R="Login under";function te(o,t,l){let s="1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29".split(","),u="ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ".split(""),i=[],_="",f=!1;for(let d of s)i.push({number:d,top:Math.random()*100,left:Math.random()*100});setInterval(()=>{l(0,i=[]);for(let d of s)i.push({number:d,top:Math.random()*100,left:Math.random()*100})},2e3);function c(d,v){l(1,_+=u[d-1]),l(0,i[v].top=Math.random()*100,i),l(0,i[v].left=Math.random()*100,i),l(0,i)}return[i,_,f,c,()=>{l(2,f=!f)},(d,v)=>c(d,v)]}class se extends Z{constructor(t){super(),z(this,t,te,ee,$,{})}}export{se as default};
