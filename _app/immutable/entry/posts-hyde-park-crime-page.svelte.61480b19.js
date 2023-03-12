import{S as Ie,i as Pe,s as ge,k as h,q as s,a as o,y as x,l as p,m as d,r as i,h as t,c as l,z as H,n as fe,b as r,H as n,A as R,G as Te,g as U,d as q,B as M}from"../chunks/index.12bdb194.js";import{F as z}from"../chunks/Figure.ea279e8a.js";const ke=""+new URL("../assets/ucpd_map2.9aa7f174.png",import.meta.url).href,Se=""+new URL("../assets/hyde_park_daily_incidents.653580c4.png",import.meta.url).href,Ee=""+new URL("../assets/thefts_robberies_by_hour.6b334c62.png",import.meta.url).href,xe=""+new URL("../assets/violent_crimes_hourly.2554958e.png",import.meta.url).href,He=""+new URL("../assets/hyde_park_hourly_incidents.21f417b7.png",import.meta.url).href;function Re($e){let u,X,A,c,Z,v,ee,te,C,m,G,f,ae,$,re,ne,I,se,ie,L,P,oe,O,j,B,g,le,D,y,F,w,J,T,he,Y,k,pe,K,_,N,b,Q,S,de,V;return m=new z({props:{src:ke}}),y=new z({props:{src:Se}}),w=new z({props:{src:He}}),_=new z({props:{src:Ee}}),b=new z({props:{src:xe}}),{c(){u=h("h1"),X=s("Hyde Park crime map"),A=o(),c=h("p"),Z=s("The University of Chicago Police Department has "),v=h("a"),ee=s("a site"),te=s(` where you can see the various incidents reported to the department each day.
    I wanted to be able to visualize where these incidents were concentrated, and
    since each event is labeled with an address, I figured I could create a map to
    do that.`),C=o(),x(m.$$.fragment),G=o(),f=h("p"),ae=s(`To create this, I used Python's Requests and Beautiful Soup libraries to
    scrape the incident report archives, gathering all incidents from 1
    September 2019 to 1 September 2020. I then cleaned up the data and used the `),$=h("a"),re=s("Geocoder"),ne=s(`
    Python library to get GPS coordinates for each incident address. (I wasn't
    able to get coordinates for some events that didn't occur at proper numeric
    addresses.) The final product is just a Matplotlib scatterplot of those
    coordinates overlaid on an
    `),I=h("a"),se=s("OpenStreetMap"),ie=s(" view of Hyde Park."),L=o(),P=h("p"),oe=s(`You can see that most incidents are concentrated at the University of
    Chicago hospital, with a few on the university campus, and most of the rest
    around the main stores and other businesses in the area. There are, of
    course, a significant number of incidents in residential areas as well.`),O=o(),j=h("hr"),B=o(),g=h("p"),le=s(`The incidents also have information about when they were reported, so I
    generated plots of the days and times of day that they were generally
    reported:`),D=o(),x(y.$$.fragment),F=o(),x(w.$$.fragment),J=o(),T=h("p"),he=s(`The daily counts are interesting -- you can clearly see a sizable decrease
    in crimes during the holidays, and the unrest in May/June shows up as well.
    The hourly counts are not quite what I expected; I found it odd that most
    crimes were committed in the middle of the day, although I guess that is
    when most people are out and about.`),Y=o(),k=h("p"),pe=s("I also broke down the hourly counts by type of crime, as you can see below."),K=o(),x(_.$$.fragment),N=o(),x(b.$$.fragment),Q=o(),S=h("p"),de=s(`Overall, the data are interesting and worth perusing for anyone who lives in
    Hyde Park. I'm sure there are many more insights that could be extracted
    from the data I collected.`),this.h()},l(e){u=p(e,"H1",{});var a=d(u);X=i(a,"Hyde Park crime map"),a.forEach(t),A=l(e),c=p(e,"P",{});var W=d(c);Z=i(W,"The University of Chicago Police Department has "),v=p(W,"A",{href:!0});var ue=d(v);ee=i(ue,"a site"),ue.forEach(t),te=i(W,` where you can see the various incidents reported to the department each day.
    I wanted to be able to visualize where these incidents were concentrated, and
    since each event is labeled with an address, I figured I could create a map to
    do that.`),W.forEach(t),C=l(e),H(m.$$.fragment,e),G=l(e),f=p(e,"P",{});var E=d(f);ae=i(E,`To create this, I used Python's Requests and Beautiful Soup libraries to
    scrape the incident report archives, gathering all incidents from 1
    September 2019 to 1 September 2020. I then cleaned up the data and used the `),$=p(E,"A",{href:!0});var ce=d($);re=i(ce,"Geocoder"),ce.forEach(t),ne=i(E,`
    Python library to get GPS coordinates for each incident address. (I wasn't
    able to get coordinates for some events that didn't occur at proper numeric
    addresses.) The final product is just a Matplotlib scatterplot of those
    coordinates overlaid on an
    `),I=p(E,"A",{href:!0});var me=d(I);se=i(me,"OpenStreetMap"),me.forEach(t),ie=i(E," view of Hyde Park."),E.forEach(t),L=l(e),P=p(e,"P",{});var ye=d(P);oe=i(ye,`You can see that most incidents are concentrated at the University of
    Chicago hospital, with a few on the university campus, and most of the rest
    around the main stores and other businesses in the area. There are, of
    course, a significant number of incidents in residential areas as well.`),ye.forEach(t),O=l(e),j=p(e,"HR",{}),B=l(e),g=p(e,"P",{});var we=d(g);le=i(we,`The incidents also have information about when they were reported, so I
    generated plots of the days and times of day that they were generally
    reported:`),we.forEach(t),D=l(e),H(y.$$.fragment,e),F=l(e),H(w.$$.fragment,e),J=l(e),T=p(e,"P",{});var _e=d(T);he=i(_e,`The daily counts are interesting -- you can clearly see a sizable decrease
    in crimes during the holidays, and the unrest in May/June shows up as well.
    The hourly counts are not quite what I expected; I found it odd that most
    crimes were committed in the middle of the day, although I guess that is
    when most people are out and about.`),_e.forEach(t),Y=l(e),k=p(e,"P",{});var be=d(k);pe=i(be,"I also broke down the hourly counts by type of crime, as you can see below."),be.forEach(t),K=l(e),H(_.$$.fragment,e),N=l(e),H(b.$$.fragment,e),Q=l(e),S=p(e,"P",{});var ve=d(S);de=i(ve,`Overall, the data are interesting and worth perusing for anyone who lives in
    Hyde Park. I'm sure there are many more insights that could be extracted
    from the data I collected.`),ve.forEach(t),this.h()},h(){fe(v,"href","https://incidentreports.uchicago.edu/incidentReportArchive.php"),fe($,"href","https://pypi.org/project/geocoder/"),fe(I,"href","https://www.openstreetmap.org/")},m(e,a){r(e,u,a),n(u,X),r(e,A,a),r(e,c,a),n(c,Z),n(c,v),n(v,ee),n(c,te),r(e,C,a),R(m,e,a),r(e,G,a),r(e,f,a),n(f,ae),n(f,$),n($,re),n(f,ne),n(f,I),n(I,se),n(f,ie),r(e,L,a),r(e,P,a),n(P,oe),r(e,O,a),r(e,j,a),r(e,B,a),r(e,g,a),n(g,le),r(e,D,a),R(y,e,a),r(e,F,a),R(w,e,a),r(e,J,a),r(e,T,a),n(T,he),r(e,Y,a),r(e,k,a),n(k,pe),r(e,K,a),R(_,e,a),r(e,N,a),R(b,e,a),r(e,Q,a),r(e,S,a),n(S,de),V=!0},p:Te,i(e){V||(U(m.$$.fragment,e),U(y.$$.fragment,e),U(w.$$.fragment,e),U(_.$$.fragment,e),U(b.$$.fragment,e),V=!0)},o(e){q(m.$$.fragment,e),q(y.$$.fragment,e),q(w.$$.fragment,e),q(_.$$.fragment,e),q(b.$$.fragment,e),V=!1},d(e){e&&t(u),e&&t(A),e&&t(c),e&&t(C),M(m,e),e&&t(G),e&&t(f),e&&t(L),e&&t(P),e&&t(O),e&&t(j),e&&t(B),e&&t(g),e&&t(D),M(y,e),e&&t(F),M(w,e),e&&t(J),e&&t(T),e&&t(Y),e&&t(k),e&&t(K),M(_,e),e&&t(N),M(b,e),e&&t(Q),e&&t(S)}}}class Me extends Ie{constructor(u){super(),Pe(this,u,null,Re,ge,{})}}export{Me as default};
