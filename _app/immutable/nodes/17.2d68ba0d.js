import{S as ei,i as ti,s as ii,k as s,q as f,a as l,y as Nt,l as r,m as n,r as c,h as t,c as p,z as jt,n as h,b as o,G as i,A as Gt,H as ai,g as Dt,d as Jt,B as Vt}from"../chunks/index.f5836231.js";import{F as Yt}from"../chunks/Figure.19bd84b5.js";const oi=""+new URL("../assets/claim-theta-regimes.ffb32570.png",import.meta.url).href,si=""+new URL("../assets/claim-A-beliefs-diff.5e59d146.png",import.meta.url).href;function ri(Zt){let d,qe,ie,x,_,$e,A,Se,Le,ae,y,Oe,R,Be,Ue,oe,q,He,se,E,Ce,re,$,Fe,ne,S,u,Me,X,We,Ke,N,Qe,Re,fe,b,Xe,v,Ne,je,ce,I,le,P,Ge,pe,L,De,he,O,j,Je,me,B,Ve,ue,U,G,Ye,de,H,Ze,ye,T,et,be,C,tt,ve,F,D,it,ge,g,at,w,ot,st,we,z,ke,k,rt,_e,M,nt,Ee,m,J,V,ft,ct,Y,Z,lt,pt,ee,te,ht,Ie,W,mt,Pe;return I=new Yt({props:{src:oi,caption:"Aggregate safety increases with price when the cost of safety increases quickly with higher performance. In the model, the parameter θ determines how the cost of safety scales with performance – higher θ means that the cost of safety increases quickly as performance increases.",id:"fig:claim-theta-regimes"}}),z=new Yt({props:{src:si,caption:"If a safety-conscious player’s competitor is sufficiently unconcerned about disaster, it is typically better to subsidize the safety-conscious player. Shown here is an example with various assumptions about the strength of the safety-performance tradeoff (θ). Notice that in some cases it is better to subsidize the competitor if they are only moderately less safety-conscious than the safety-conscious player.",id:"fig:claim-A-beliefs-diff"}}),{c(){d=s("h1"),qe=f("Compute pricing and the AI safety tax"),ie=l(),x=s("p"),_=s("em"),$e=f("This is a summary of a paper I created with Robert Trager and Nicholas Emery-Xu. The full version is "),A=s("a"),Se=f("available on arXiv"),Le=f("."),ae=l(),y=s("p"),Oe=f(`Using a model in which actors compete to develop a potentially
dangerous new technology (advanced AI), we study how changes in the
price of compute affect actors’ spending on safety. In the model, actors
split spending between safety and performance, with safety determining
the probability of a “disaster” outcome, and performance determining the
actors’ competitiveness relative to their peers. This allows us to
formalize the idea of a `),R=s("em"),Be=f("safety tax"),Ue=f(`, where actors’ spending on
safety comes at the cost of spending on performance (and vice
versa).`),oe=l(),q=s("p"),He=f(`Below we summarize some insights from this model, explained in more
detail in the full paper.`),se=l(),E=s("h2"),Ce=f(`Importance of safety’s
returns to scale`),re=l(),$=s("p"),Fe=f(`In addition to the tradeoff introduced by forcing actors to split
spending between safety and performance, we also allow for the
possibility that safety may be more costly when performance is higher.
(It may be more difficult to ensure that more advanced AI systems are
safe.) The rate at which the cost of safety scales with performance is
critical to understanding how actors will respond to changes in the
price of compute.`),ne=l(),S=s("blockquote"),u=s("p"),Me=f(`We find that, when actors are identical to each other, a
`),X=s("em"),We=f("decrease"),Ke=f(" in the price of compute leads to an "),N=s("em"),Qe=f("increase"),Re=f(`
in safety if and only if the production of safety is able to outpace the
production of performance in terms of having higher returns to scale
(i.e., if a uniform increase in spending on both safety and performance
causes safety to increase relative to performance).`),fe=l(),b=s("p"),Xe=f("This relationship is illustrated in Figure "),v=s("a"),Ne=f("1"),je=f(`. The takeaway here is
that, if we expect safety research to require an increasingly large
portion of compute resources as performance/capabilities increase, then
making compute more expensive is likely to improve safety. We can
interpret this as a reframing of the idea that slowing down AI
development may be a good way to improve safety.`),ce=l(),Nt(I.$$.fragment),le=l(),P=s("h2"),Ge=f(`Monopolies
good for safety, competition encourages risk-taking`),pe=l(),L=s("p"),De=f(`When there is less competitive pressure to increase performance,
actors are able to spend more on safety. Safety therefore tends to be
higher if one actor has an overwhelming competitive advantage (meaning
they are able to produce performance at a much lower cost, either
because they are more efficient or because they face a lower compute
price). Safety is relatively lower when competitors are evenly matched,
and can actually be especially bad if one actor has only a small
advantage, since then laggards might find it beneficial to catch up by
trading safety for performance.`),he=l(),O=s("blockquote"),j=s("p"),Je=f(`Providing a subsidy to a single actor may have a positive or negative
effect on aggregate safety, but safety can be made arbitrarily high by
providing a sufficiently large subsidy to a single actor.`),me=l(),B=s("p"),Ve=f(`This insight is not particularly helpful if we are not able to
provide an enormous subsidy sufficient to give an actor a decisive
advantage, since if the subsidy provided is not large enough, it may
actually have a negative effect on safety. It’s therefore worth
considering whom (if anyone) should be subsidized if we can only provide
a modest subsidy.`),ue=l(),U=s("blockquote"),G=s("p"),Ye=f(`In general, subsidizing actors with a performance advantage is better
for safety than subsidizing performance laggards, though this is
sensitive to some assumptions.`),de=l(),H=s("p"),Ze=f(`The intuition here is that a subsidy for a performance leader further
reduces the competitive pressure on that actor, while a subsidy for a
performance laggard just brings them into closer competition with the
leader(s).`),ye=l(),T=s("h2"),et=f(`Often
unclear whether to subsidize safety-conscious actors`),be=l(),C=s("p"),tt=f(`In the case where we cannot give a single player a decisive edge, we
might think that helping safety-conscious actors is a good idea. It
turns out that this is not always the case; the effect of such an
intervention depends on a number of factors, including what exactly is
meant by being “safety-conscious.” The basic concern here is that
providing a safety-conscious actor with a subsidy might encourage their
competitor(s) to take on more risk in order to catch up, while the
safety-conscious actor will not take on as much risk to be competitive
if their competitor is subsidized instead.`),ve=l(),F=s("blockquote"),D=s("p"),it=f(`If a safety-conscious actor’s competitor believes that there is
near-zero risk of disaster, it is typically better to subsidize the
safety-conscious actor. However, the right course of action is unclear
if the difference in beliefs is not so stark.`),ge=l(),g=s("p"),at=f("Figure "),w=s("a"),ot=f("2"),st=f(` shows an example
illustration of this claim.`),we=l(),Nt(z.$$.fragment),ke=l(),k=s("h2"),rt=f(`Some policy
implications`),_e=l(),M=s("p"),nt=f(`There is still a lot of work to do with this sort of model, but we
can already give some suggestions relevant for policy.`),Ee=l(),m=s("ul"),J=s("li"),V=s("p"),ft=f(`Increasing compute prices (or otherwise making AI progress more
difficult) may be helpful if we are worried about safety keeping pace
with capabilities/performance.`),ct=l(),Y=s("li"),Z=s("p"),lt=f(`Policies that bring actors into closer competition are likely bad
for safety. Backing a single, dominant actor may be better.`),pt=l(),ee=s("li"),te=s("p"),ht=f(`Subsidizing an actor may have an unforeseen negative effect on
safety if competitors respond by taking on more risk to catch up.
Providing subsidies to an actor tends to be helpful only when they
already have an advantage and/or their competitors are very unconcerned
about disaster.`),Ie=l(),W=s("p"),mt=f(`As a general observation, simply changing prices for one or more
actors does not come across as an especially promising way to improve
safety. Providing subsidies/taxes conditional on actors’ strategies
(e.g., giving a discount to actors who pass a safety audit) is probably
much better – we are currently looking more into this sort of
intervention.`),this.h()},l(e){d=r(e,"H1",{});var a=n(d);qe=c(a,"Compute pricing and the AI safety tax"),a.forEach(t),ie=p(e),x=r(e,"P",{});var ut=n(x);_=r(ut,"EM",{});var Te=n(_);$e=c(Te,"This is a summary of a paper I created with Robert Trager and Nicholas Emery-Xu. The full version is "),A=r(Te,"A",{href:!0});var dt=n(A);Se=c(dt,"available on arXiv"),dt.forEach(t),Le=c(Te,"."),Te.forEach(t),ut.forEach(t),ae=p(e),y=r(e,"P",{});var ze=n(y);Oe=c(ze,`Using a model in which actors compete to develop a potentially
dangerous new technology (advanced AI), we study how changes in the
price of compute affect actors’ spending on safety. In the model, actors
split spending between safety and performance, with safety determining
the probability of a “disaster” outcome, and performance determining the
actors’ competitiveness relative to their peers. This allows us to
formalize the idea of a `),R=r(ze,"EM",{});var yt=n(R);Be=c(yt,"safety tax"),yt.forEach(t),Ue=c(ze,`, where actors’ spending on
safety comes at the cost of spending on performance (and vice
versa).`),ze.forEach(t),oe=p(e),q=r(e,"P",{});var bt=n(q);He=c(bt,`Below we summarize some insights from this model, explained in more
detail in the full paper.`),bt.forEach(t),se=p(e),E=r(e,"H2",{id:!0});var vt=n(E);Ce=c(vt,`Importance of safety’s
returns to scale`),vt.forEach(t),re=p(e),$=r(e,"P",{});var gt=n($);Fe=c(gt,`In addition to the tradeoff introduced by forcing actors to split
spending between safety and performance, we also allow for the
possibility that safety may be more costly when performance is higher.
(It may be more difficult to ensure that more advanced AI systems are
safe.) The rate at which the cost of safety scales with performance is
critical to understanding how actors will respond to changes in the
price of compute.`),gt.forEach(t),ne=p(e),S=r(e,"BLOCKQUOTE",{});var wt=n(S);u=r(wt,"P",{});var K=n(u);Me=c(K,`We find that, when actors are identical to each other, a
`),X=r(K,"EM",{});var kt=n(X);We=c(kt,"decrease"),kt.forEach(t),Ke=c(K," in the price of compute leads to an "),N=r(K,"EM",{});var _t=n(N);Qe=c(_t,"increase"),_t.forEach(t),Re=c(K,`
in safety if and only if the production of safety is able to outpace the
production of performance in terms of having higher returns to scale
(i.e., if a uniform increase in spending on both safety and performance
causes safety to increase relative to performance).`),K.forEach(t),wt.forEach(t),fe=p(e),b=r(e,"P",{});var xe=n(b);Xe=c(xe,"This relationship is illustrated in Figure "),v=r(xe,"A",{href:!0,"data-reference-type":!0,"data-reference":!0});var Et=n(v);Ne=c(Et,"1"),Et.forEach(t),je=c(xe,`. The takeaway here is
that, if we expect safety research to require an increasingly large
portion of compute resources as performance/capabilities increase, then
making compute more expensive is likely to improve safety. We can
interpret this as a reframing of the idea that slowing down AI
development may be a good way to improve safety.`),xe.forEach(t),ce=p(e),jt(I.$$.fragment,e),le=p(e),P=r(e,"H2",{id:!0});var It=n(P);Ge=c(It,`Monopolies
good for safety, competition encourages risk-taking`),It.forEach(t),pe=p(e),L=r(e,"P",{});var Pt=n(L);De=c(Pt,`When there is less competitive pressure to increase performance,
actors are able to spend more on safety. Safety therefore tends to be
higher if one actor has an overwhelming competitive advantage (meaning
they are able to produce performance at a much lower cost, either
because they are more efficient or because they face a lower compute
price). Safety is relatively lower when competitors are evenly matched,
and can actually be especially bad if one actor has only a small
advantage, since then laggards might find it beneficial to catch up by
trading safety for performance.`),Pt.forEach(t),he=p(e),O=r(e,"BLOCKQUOTE",{});var Tt=n(O);j=r(Tt,"P",{});var zt=n(j);Je=c(zt,`Providing a subsidy to a single actor may have a positive or negative
effect on aggregate safety, but safety can be made arbitrarily high by
providing a sufficiently large subsidy to a single actor.`),zt.forEach(t),Tt.forEach(t),me=p(e),B=r(e,"P",{});var xt=n(B);Ve=c(xt,`This insight is not particularly helpful if we are not able to
provide an enormous subsidy sufficient to give an actor a decisive
advantage, since if the subsidy provided is not large enough, it may
actually have a negative effect on safety. It’s therefore worth
considering whom (if anyone) should be subsidized if we can only provide
a modest subsidy.`),xt.forEach(t),ue=p(e),U=r(e,"BLOCKQUOTE",{});var At=n(U);G=r(At,"P",{});var qt=n(G);Ye=c(qt,`In general, subsidizing actors with a performance advantage is better
for safety than subsidizing performance laggards, though this is
sensitive to some assumptions.`),qt.forEach(t),At.forEach(t),de=p(e),H=r(e,"P",{});var $t=n(H);Ze=c($t,`The intuition here is that a subsidy for a performance leader further
reduces the competitive pressure on that actor, while a subsidy for a
performance laggard just brings them into closer competition with the
leader(s).`),$t.forEach(t),ye=p(e),T=r(e,"H2",{id:!0});var St=n(T);et=c(St,`Often
unclear whether to subsidize safety-conscious actors`),St.forEach(t),be=p(e),C=r(e,"P",{});var Lt=n(C);tt=c(Lt,`In the case where we cannot give a single player a decisive edge, we
might think that helping safety-conscious actors is a good idea. It
turns out that this is not always the case; the effect of such an
intervention depends on a number of factors, including what exactly is
meant by being “safety-conscious.” The basic concern here is that
providing a safety-conscious actor with a subsidy might encourage their
competitor(s) to take on more risk in order to catch up, while the
safety-conscious actor will not take on as much risk to be competitive
if their competitor is subsidized instead.`),Lt.forEach(t),ve=p(e),F=r(e,"BLOCKQUOTE",{});var Ot=n(F);D=r(Ot,"P",{});var Bt=n(D);it=c(Bt,`If a safety-conscious actor’s competitor believes that there is
near-zero risk of disaster, it is typically better to subsidize the
safety-conscious actor. However, the right course of action is unclear
if the difference in beliefs is not so stark.`),Bt.forEach(t),Ot.forEach(t),ge=p(e),g=r(e,"P",{});var Ae=n(g);at=c(Ae,"Figure "),w=r(Ae,"A",{href:!0,"data-reference-type":!0,"data-reference":!0});var Ut=n(w);ot=c(Ut,"2"),Ut.forEach(t),st=c(Ae,` shows an example
illustration of this claim.`),Ae.forEach(t),we=p(e),jt(z.$$.fragment,e),ke=p(e),k=r(e,"H2",{class:!0,id:!0});var Ht=n(k);rt=c(Ht,`Some policy
implications`),Ht.forEach(t),_e=p(e),M=r(e,"P",{});var Ct=n(M);nt=c(Ct,`There is still a lot of work to do with this sort of model, but we
can already give some suggestions relevant for policy.`),Ct.forEach(t),Ee=p(e),m=r(e,"UL",{});var Q=n(m);J=r(Q,"LI",{});var Ft=n(J);V=r(Ft,"P",{});var Mt=n(V);ft=c(Mt,`Increasing compute prices (or otherwise making AI progress more
difficult) may be helpful if we are worried about safety keeping pace
with capabilities/performance.`),Mt.forEach(t),Ft.forEach(t),ct=p(Q),Y=r(Q,"LI",{});var Wt=n(Y);Z=r(Wt,"P",{});var Kt=n(Z);lt=c(Kt,`Policies that bring actors into closer competition are likely bad
for safety. Backing a single, dominant actor may be better.`),Kt.forEach(t),Wt.forEach(t),pt=p(Q),ee=r(Q,"LI",{});var Qt=n(ee);te=r(Qt,"P",{});var Rt=n(te);ht=c(Rt,`Subsidizing an actor may have an unforeseen negative effect on
safety if competitors respond by taking on more risk to catch up.
Providing subsidies to an actor tends to be helpful only when they
already have an advantage and/or their competitors are very unconcerned
about disaster.`),Rt.forEach(t),Qt.forEach(t),Q.forEach(t),Ie=p(e),W=r(e,"P",{});var Xt=n(W);mt=c(Xt,`As a general observation, simply changing prices for one or more
actors does not come across as an especially promising way to improve
safety. Providing subsidies/taxes conditional on actors’ strategies
(e.g., giving a discount to actors who pass a safety audit) is probably
much better – we are currently looking more into this sort of
intervention.`),Xt.forEach(t),this.h()},h(){h(A,"href","https://arxiv.org/abs/2302.11436"),h(E,"id","importance-of-safetys-returns-to-scale"),h(v,"href","#fig:claim-theta-regimes"),h(v,"data-reference-type","ref"),h(v,"data-reference","fig:claim-theta-regimes"),h(P,"id","monopolies-good-for-safety-competition-encourages-risk-taking"),h(T,"id","often-unclear-whether-to-subsidize-safety-conscious-actors"),h(w,"href","#fig:claim-A-beliefs-diff"),h(w,"data-reference-type","ref"),h(w,"data-reference","fig:claim-A-beliefs-diff"),h(k,"class","unnumbered"),h(k,"id","some-policy-implications")},m(e,a){o(e,d,a),i(d,qe),o(e,ie,a),o(e,x,a),i(x,_),i(_,$e),i(_,A),i(A,Se),i(_,Le),o(e,ae,a),o(e,y,a),i(y,Oe),i(y,R),i(R,Be),i(y,Ue),o(e,oe,a),o(e,q,a),i(q,He),o(e,se,a),o(e,E,a),i(E,Ce),o(e,re,a),o(e,$,a),i($,Fe),o(e,ne,a),o(e,S,a),i(S,u),i(u,Me),i(u,X),i(X,We),i(u,Ke),i(u,N),i(N,Qe),i(u,Re),o(e,fe,a),o(e,b,a),i(b,Xe),i(b,v),i(v,Ne),i(b,je),o(e,ce,a),Gt(I,e,a),o(e,le,a),o(e,P,a),i(P,Ge),o(e,pe,a),o(e,L,a),i(L,De),o(e,he,a),o(e,O,a),i(O,j),i(j,Je),o(e,me,a),o(e,B,a),i(B,Ve),o(e,ue,a),o(e,U,a),i(U,G),i(G,Ye),o(e,de,a),o(e,H,a),i(H,Ze),o(e,ye,a),o(e,T,a),i(T,et),o(e,be,a),o(e,C,a),i(C,tt),o(e,ve,a),o(e,F,a),i(F,D),i(D,it),o(e,ge,a),o(e,g,a),i(g,at),i(g,w),i(w,ot),i(g,st),o(e,we,a),Gt(z,e,a),o(e,ke,a),o(e,k,a),i(k,rt),o(e,_e,a),o(e,M,a),i(M,nt),o(e,Ee,a),o(e,m,a),i(m,J),i(J,V),i(V,ft),i(m,ct),i(m,Y),i(Y,Z),i(Z,lt),i(m,pt),i(m,ee),i(ee,te),i(te,ht),o(e,Ie,a),o(e,W,a),i(W,mt),Pe=!0},p:ai,i(e){Pe||(Dt(I.$$.fragment,e),Dt(z.$$.fragment,e),Pe=!0)},o(e){Jt(I.$$.fragment,e),Jt(z.$$.fragment,e),Pe=!1},d(e){e&&t(d),e&&t(ie),e&&t(x),e&&t(ae),e&&t(y),e&&t(oe),e&&t(q),e&&t(se),e&&t(E),e&&t(re),e&&t($),e&&t(ne),e&&t(S),e&&t(fe),e&&t(b),e&&t(ce),Vt(I,e),e&&t(le),e&&t(P),e&&t(pe),e&&t(L),e&&t(he),e&&t(O),e&&t(me),e&&t(B),e&&t(ue),e&&t(U),e&&t(de),e&&t(H),e&&t(ye),e&&t(T),e&&t(be),e&&t(C),e&&t(ve),e&&t(F),e&&t(ge),e&&t(g),e&&t(we),Vt(z,e),e&&t(ke),e&&t(k),e&&t(_e),e&&t(M),e&&t(Ee),e&&t(m),e&&t(Ie),e&&t(W)}}}class ci extends ei{constructor(d){super(),ti(this,d,null,ri,ii,{})}}export{ci as component};
