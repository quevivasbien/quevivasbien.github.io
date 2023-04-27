import{S as Q,i as U,s as X,k as h,q as o,a as B,l as d,m as u,r as s,h as a,c as M,n,b as g,H as t,C as N}from"../chunks/index.d8bf866d.js";function Z(O){let f,A,S,c,E,p,j,C,k,l,H,m,P,x,v,q,F,_,r,G,w,L,R,b,T,z;return{c(){f=h("h1"),A=o("Making a multiplayer game with SvelteKit & Firebase"),S=B(),c=h("p"),E=o("A few months back, I created a "),p=h("a"),j=o("CLI clone"),C=o(" of the Boggle word game. This was originally just a toy project I wrote on a weekend to try out some Rust crates for CLIs, but I wanted to return to this idea and see if I could make a browser-based version where multiple players could compete to find words."),k=B(),l=h("p"),H=o("I chose to use SvelteKit for this, since I’ve found Svelte to be a very friendly web framework. I hadn’t previously made any non-static web apps with Svelte, so I also figured this would be good chance to try out some of SvelteKit’s server-side features. I originally intended to build the project with "),m=h("a"),P=o("SvelteKit’s Node adapter"),x=o(" and host it on an AWS server along with my own database, though after a great deal of fiddling I realized I could accomplish the same objective with much less hassle using Firebase’s "),v=h("a"),q=o("realtime database"),F=o(". I also ended up hosting the app on Vercel, instead of GitHub Pages like I have in the past, in order to make use of some of SvelteKit’s SSR features (which are helpful for dynamic page routing)."),_=B(),r=h("p"),G=o("The latest version is playable "),w=h("a"),L=o("here"),R=o(". You can check out the code on "),b=h("a"),T=o("GitHub"),z=o("."),this.h()},l(e){f=d(e,"H1",{});var i=u(f);A=s(i,"Making a multiplayer game with SvelteKit & Firebase"),i.forEach(a),S=M(e),c=d(e,"P",{});var K=u(c);E=s(K,"A few months back, I created a "),p=d(K,"A",{href:!0,rel:!0});var V=u(p);j=s(V,"CLI clone"),V.forEach(a),C=s(K," of the Boggle word game. This was originally just a toy project I wrote on a weekend to try out some Rust crates for CLIs, but I wanted to return to this idea and see if I could make a browser-based version where multiple players could compete to find words."),K.forEach(a),k=M(e),l=d(e,"P",{});var y=u(l);H=s(y,"I chose to use SvelteKit for this, since I’ve found Svelte to be a very friendly web framework. I hadn’t previously made any non-static web apps with Svelte, so I also figured this would be good chance to try out some of SvelteKit’s server-side features. I originally intended to build the project with "),m=d(y,"A",{href:!0,rel:!0});var W=u(m);P=s(W,"SvelteKit’s Node adapter"),W.forEach(a),x=s(y," and host it on an AWS server along with my own database, though after a great deal of fiddling I realized I could accomplish the same objective with much less hassle using Firebase’s "),v=d(y,"A",{href:!0,rel:!0});var Y=u(v);q=s(Y,"realtime database"),Y.forEach(a),F=s(y,". I also ended up hosting the app on Vercel, instead of GitHub Pages like I have in the past, in order to make use of some of SvelteKit’s SSR features (which are helpful for dynamic page routing)."),y.forEach(a),_=M(e),r=d(e,"P",{});var I=u(r);G=s(I,"The latest version is playable "),w=d(I,"A",{href:!0,rel:!0});var D=u(w);L=s(D,"here"),D.forEach(a),R=s(I,". You can check out the code on "),b=d(I,"A",{href:!0,rel:!0});var J=u(b);T=s(J,"GitHub"),J.forEach(a),z=s(I,"."),I.forEach(a),this.h()},h(){n(p,"href","https://github.com/quevivasbien/boggle"),n(p,"rel","nofollow"),n(m,"href","https://kit.svelte.dev/docs/adapter-node"),n(m,"rel","nofollow"),n(v,"href","https://firebase.google.com/docs/database"),n(v,"rel","nofollow"),n(w,"href","https://wiggle-game.vercel.app"),n(w,"rel","nofollow"),n(b,"href","https://github.com/quevivasbien/wiggle"),n(b,"rel","nofollow")},m(e,i){g(e,f,i),t(f,A),g(e,S,i),g(e,c,i),t(c,E),t(c,p),t(p,j),t(c,C),g(e,k,i),g(e,l,i),t(l,H),t(l,m),t(m,P),t(l,x),t(l,v),t(v,q),t(l,F),g(e,_,i),g(e,r,i),t(r,G),t(r,w),t(w,L),t(r,R),t(r,b),t(b,T),t(r,z)},p:N,i:N,o:N,d(e){e&&a(f),e&&a(S),e&&a(c),e&&a(k),e&&a(l),e&&a(_),e&&a(r)}}}class ee extends Q{constructor(f){super(),U(this,f,null,Z,X,{})}}export{ee as default};