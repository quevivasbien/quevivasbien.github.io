import{_ as P}from"./preload-helper.41c905a7.js";import{S as k,i as D,s as E,k as b,a as w,e as m,l as y,m as x,h as o,c as I,b as d,G as r,o as V,q,r as S,H as p,w as A}from"./index.12bdb194.js";function u(f){let e,a;return{c(){e=b("div"),a=q("Plot is loading...")},l(i){e=y(i,"DIV",{});var t=x(e);a=S(t,"Plot is loading..."),t.forEach(o)},m(i,t){d(i,e,t),p(e,a)},d(i){i&&o(e)}}}function C(f){let e,a,i,t=f[1]===void 0&&u();return{c(){e=b("div"),a=w(),t&&t.c(),i=m()},l(l){e=y(l,"DIV",{});var s=x(e);s.forEach(o),a=I(l),t&&t.l(l),i=m()},m(l,s){d(l,e,s),f[6](e),d(l,a,s),t&&t.m(l,s),d(l,i,s)},p(l,[s]){l[1]===void 0?t||(t=u(),t.c(),t.m(i.parentNode,i)):t&&(t.d(1),t=null)},i:r,o:r,d(l){l&&o(e),f[6](null),l&&o(a),t&&t.d(l),l&&o(i)}}}function G(f,e,a){let{data:i=[{x:[1,2,3],y:[2,1,3],type:"scatter"}]}=e,{title:t}=e,{xlabel:l}=e,{ylabel:s}=e,v={title:t,xaxis:{title:l},yaxis:{title:s},responsive:!0},c,_;V(async()=>{P(()=>import("./plotly-basic.00e68f4c.js").then(n=>n.p),[],import.meta.url).then(async n=>{a(1,_=await n.newPlot(c,i,v))})});function h(n){A[n?"unshift":"push"](()=>{c=n,a(0,c)})}return f.$$set=n=>{"data"in n&&a(2,i=n.data),"title"in n&&a(3,t=n.title),"xlabel"in n&&a(4,l=n.xlabel),"ylabel"in n&&a(5,s=n.ylabel)},[c,_,i,t,l,s,h]}class M extends k{constructor(e){super(),D(this,e,G,C,E,{data:2,title:3,xlabel:4,ylabel:5})}}export{M as P};
