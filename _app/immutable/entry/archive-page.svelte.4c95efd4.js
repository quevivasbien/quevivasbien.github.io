import{S as J,i as K,s as L,y as A,a as v,z as C,c as h,A as k,b as p,g as D,d as H,B as I,h as c,k as x,q as B,e as G,l as d,m as b,r as w,H as _,R as M,n as E,G as O}from"../chunks/index.12bdb194.js";import{N as Q,T as U,C as W,B as X}from"../chunks/TextContent.7e86015a.js";import{p as P}from"../chunks/posts.663b97ea.js";import{b as Y}from"../chunks/paths.93e8174e.js";function R(m,s,i){const l=m.slice();return l[0]=s[i],l}function F(m){let s,i,l=m[0].title+"",o,r,a,e,n=m[0].date+"",t,f,u,N,T=m[0].tags.join(", ")+"",V,q;return{c(){s=x("a"),i=x("h3"),o=B(l),r=v(),a=x("div"),e=x("div"),t=B(n),f=v(),u=x("div"),N=B("tags: "),V=B(T),q=v(),this.h()},l($){s=d($,"A",{class:!0,href:!0});var g=b(s);i=d(g,"H3",{});var j=b(i);o=w(j,l),j.forEach(c),g.forEach(c),r=h($),a=d($,"DIV",{class:!0});var y=b(a);e=d(y,"DIV",{class:!0});var z=b(e);t=w(z,n),z.forEach(c),f=h(y),u=d(y,"DIV",{class:!0});var S=b(u);N=w(S,"tags: "),V=w(S,T),S.forEach(c),q=h(y),y.forEach(c),this.h()},h(){E(s,"class","text-gray-900"),E(s,"href",Y+"/posts/"+m[0].slug+"/"),E(e,"class","flex absolute left-0 text-gray-400 italic"),E(u,"class","flex absolute right-0 text-gray-400 italic"),E(a,"class","flex relative pb-8")},m($,g){p($,s,g),_(s,i),_(i,o),p($,r,g),p($,a,g),_(a,e),_(e,t),_(a,f),_(a,u),_(u,N),_(u,V),_(a,q)},p:O,d($){$&&c(s),$&&c(r),$&&c(a)}}}function Z(m){let s,i,l,o,r=P,a=[];for(let e=0;e<r.length;e+=1)a[e]=F(R(m,r,e));return{c(){s=x("h1"),i=B("Archive"),l=v();for(let e=0;e<a.length;e+=1)a[e].c();o=G()},l(e){s=d(e,"H1",{});var n=b(s);i=w(n,"Archive"),n.forEach(c),l=h(e);for(let t=0;t<a.length;t+=1)a[t].l(e);o=G()},m(e,n){p(e,s,n),_(s,i),p(e,l,n);for(let t=0;t<a.length;t+=1)a[t].m(e,n);p(e,o,n)},p(e,n){if(n&0){r=P;let t;for(t=0;t<r.length;t+=1){const f=R(e,r,t);a[t]?a[t].p(f,n):(a[t]=F(f),a[t].c(),a[t].m(o.parentNode,o))}for(;t<a.length;t+=1)a[t].d(1);a.length=r.length}},d(e){e&&c(s),e&&c(l),M(a,e),e&&c(o)}}}function tt(m){let s,i,l,o,r,a,e,n;return s=new Q({props:{current:"archive"}}),l=new U({props:{$$slots:{default:[Z]},$$scope:{ctx:m}}}),r=new W({}),e=new X({}),{c(){A(s.$$.fragment),i=v(),A(l.$$.fragment),o=v(),A(r.$$.fragment),a=v(),A(e.$$.fragment)},l(t){C(s.$$.fragment,t),i=h(t),C(l.$$.fragment,t),o=h(t),C(r.$$.fragment,t),a=h(t),C(e.$$.fragment,t)},m(t,f){k(s,t,f),p(t,i,f),k(l,t,f),p(t,o,f),k(r,t,f),p(t,a,f),k(e,t,f),n=!0},p(t,[f]){const u={};f&8&&(u.$$scope={dirty:f,ctx:t}),l.$set(u)},i(t){n||(D(s.$$.fragment,t),D(l.$$.fragment,t),D(r.$$.fragment,t),D(e.$$.fragment,t),n=!0)},o(t){H(s.$$.fragment,t),H(l.$$.fragment,t),H(r.$$.fragment,t),H(e.$$.fragment,t),n=!1},d(t){I(s,t),t&&c(i),I(l,t),t&&c(o),I(r,t),t&&c(a),I(e,t)}}}class rt extends J{constructor(s){super(),K(this,s,null,tt,L,{})}}export{rt as default};
