import{S as g,i as q,s as C,k as v,a as E,q as x,l as y,m as b,h as m,c as I,r as S,n as k,p as h,b as w,D as d,P as A,R as B,u as K,B as P}from"../../../chunks/index-b294bf51.js";function N(n){let l,t,u,a,i,o,r,f,_,p,c;return{c(){l=v("main"),t=v("div"),u=E(),a=v("div"),i=E(),o=v("div"),r=v("p"),f=x("Score: "),_=x(n[2]),this.h()},l(e){l=y(e,"MAIN",{class:!0});var s=b(l);t=y(s,"DIV",{class:!0,style:!0});var V=b(t);V.forEach(m),u=I(s),a=y(s,"DIV",{class:!0,style:!0}),b(a).forEach(m),s.forEach(m),i=I(e),o=y(e,"DIV",{class:!0});var D=b(o);r=y(D,"P",{});var M=b(r);f=S(M,"Score: "),_=S(M,n[2]),M.forEach(m),D.forEach(m),this.h()},h(){k(t,"class","box svelte-1lomf6y"),h(t,"left",n[4]+"px"),h(t,"top",n[3]+"px"),k(a,"class","enemy box svelte-1lomf6y"),h(a,"left",n[1]+"px"),h(a,"top",n[0]+"px"),k(l,"class","svelte-1lomf6y"),k(o,"class","score svelte-1lomf6y")},m(e,s){w(e,l,s),d(l,t),d(l,u),d(l,a),w(e,i,s),w(e,o,s),d(o,r),d(r,f),d(r,_),p||(c=A(window,"keydown",B(n[5])),p=!0)},p(e,[s]){s&16&&h(t,"left",e[4]+"px"),s&8&&h(t,"top",e[3]+"px"),s&2&&h(a,"left",e[1]+"px"),s&1&&h(a,"top",e[0]+"px"),s&4&&K(_,e[2])},i:P,o:P,d(e){e&&m(l),e&&m(i),e&&m(o),p=!1,c()}}}function R(n,l,t){let u=0,a=0,i=0,o=0,r=0,f=[];for(let p=0;p<450;p+=50)f.push(p);function _(p){let c=o,e=r;switch(p.keyCode){case 38:c-=50;break;case 40:c+=50;break;case 37:e-=50;break;case 39:e+=50;break}e>=0&&e<500&&t(4,r=e),c>=0&&c<500&&t(3,o=c),Math.abs(o-u)<20&&Math.abs(r-a)<20&&(t(0,u=f[Math.round(Math.random()*(f.length-1))]),t(1,a=f[Math.round(Math.random()*(f.length-1))]),t(2,i=i+1))}return[u,a,i,o,r,_]}class z extends g{constructor(l){super(),q(this,l,R,N,C,{})}}export{z as default};
