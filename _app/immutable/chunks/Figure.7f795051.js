import{S as b,i as F,s as G,k as u,a as I,l as o,m as g,c as k,h as f,n as c,T as h,b as p,G as d,H as m,q,r as E,u as v}from"./index.cb9bf0be.js";function _(n){let e,i;return{c(){e=u("figcaption"),i=q(n[1]),this.h()},l(s){e=o(s,"FIGCAPTION",{class:!0,"aria-hidden":!0});var r=g(e);i=E(r,n[1]),r.forEach(f),this.h()},h(){c(e,"class","text-sm text-gray-600 text-center"),c(e,"aria-hidden","true")},m(s,r){p(s,e,r),d(e,i)},p(s,r){r&2&&v(i,s[1])},d(s){s&&f(e)}}}function C(n){let e,i,s,r,t=n[1]&&_(n);return{c(){e=u("figure"),i=u("img"),r=I(),t&&t.c(),this.h()},l(a){e=o(a,"FIGURE",{class:!0});var l=g(e);i=o(l,"IMG",{class:!0,src:!0,alt:!0,id:!0}),r=k(l),t&&t.l(l),l.forEach(f),this.h()},h(){c(i,"class","mx-auto"),h(i.src,s=n[0])||c(i,"src",s),c(i,"alt",n[1]),c(i,"id",n[2]),c(e,"class","p-4 items-center border-x-2 rounded-lg")},m(a,l){p(a,e,l),d(e,i),d(e,r),t&&t.m(e,null)},p(a,[l]){l&1&&!h(i.src,s=a[0])&&c(i,"src",s),l&2&&c(i,"alt",a[1]),l&4&&c(i,"id",a[2]),a[1]?t?t.p(a,l):(t=_(a),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:m,o:m,d(a){a&&f(e),t&&t.d()}}}function S(n,e,i){let{src:s}=e,{caption:r=""}=e,{id:t=""}=e;return n.$$set=a=>{"src"in a&&i(0,s=a.src),"caption"in a&&i(1,r=a.caption),"id"in a&&i(2,t=a.id)},[s,r,t]}class A extends b{constructor(e){super(),F(this,e,S,C,G,{src:0,caption:1,id:2})}}export{A as F};
