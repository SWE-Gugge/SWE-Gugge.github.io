import{S as H,i as P,s as q,k as u,q as x,a as g,l as p,m,r as E,h as f,c as k,n as B,b as A,D as c,B as v,H as w}from"../../../chunks/index-7abfbea8.js";function D(n,e,s){const a=n.slice();return a[0]=e[s],a}function I(n){let e,s,a=n[0][0]+"",h;return{c(){e=u("li"),s=u("a"),h=x(a),this.h()},l(l){e=p(l,"LI",{});var r=m(e);s=p(r,"A",{href:!0});var o=m(s);h=E(o,a),o.forEach(f),r.forEach(f),this.h()},h(){B(s,"href","/search"+n[0][1])},m(l,r){A(l,e,r),c(e,s),c(s,h)},p:v,d(l){l&&f(e)}}}function L(n){let e,s,a,h,l,r,o,C=[["Users","/users"],["Address","/addresses"],["Banks","/banks"],["Appliances","/appliances"],["Beers","/beers"],["Blood Types","/blood_types"],["Credit Cards","/credit_cards"]],_=[];for(let t=0;t<7;t+=1)_[t]=I(D(n,C,t));return{c(){e=u("div"),s=u("h1"),a=x("Press any of the following categories to display their items"),h=g(),l=u("hr"),r=g(),o=u("ul");for(let t=0;t<7;t+=1)_[t].c();this.h()},l(t){e=p(t,"DIV",{class:!0});var i=m(e);s=p(i,"H1",{});var d=m(s);a=E(d,"Press any of the following categories to display their items"),d.forEach(f),h=k(i),l=p(i,"HR",{}),r=k(i),o=p(i,"UL",{});var b=m(o);for(let y=0;y<7;y+=1)_[y].l(b);b.forEach(f),i.forEach(f),this.h()},h(){B(e,"class","chat")},m(t,i){A(t,e,i),c(e,s),c(s,a),c(e,h),c(e,l),c(e,r),c(e,o);for(let d=0;d<7;d+=1)_[d]&&_[d].m(o,null)},p:v,i:v,o:v,d(t){t&&f(e),w(_,t)}}}class U extends H{constructor(e){super(),P(this,e,null,L,q,{})}}export{U as default};
