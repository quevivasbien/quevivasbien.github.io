import{S as bt,i as _t,s as $t,k as h,q as s,a as n,y,l as f,m as p,r,h as t,c as l,z as v,n as Q,b as a,H as o,A as g,G as kt,g as b,d as _,B as $}from"../chunks/index.12bdb194.js";import{b as It}from"../chunks/paths.93e8174e.js";import{F as k}from"../chunks/Figure.ea279e8a.js";const Tt=""+new URL("../assets/chicago_crime.05326db5.png",import.meta.url).href,Pt=""+new URL("../assets/chicago_crime_no_log.d508db1f.png",import.meta.url).href,At=""+new URL("../assets/chicago_violent_crime.854fe31c.png",import.meta.url).href,Et=""+new URL("../assets/crime_per_pop.3bd6153f.png",import.meta.url).href,xt=""+new URL("../assets/crime_per_pop_no_log.7ec70e40.png",import.meta.url).href,Ct=""+new URL("../assets/daily_crimes.a0af7a29.png",import.meta.url).href,Ht=""+new URL("../assets/daily_violent_crimes.e2c44e42.png",import.meta.url).href,Lt=""+new URL("../assets/daily_homicides.de7cba52.png",import.meta.url).href;function zt(gt){let d,Ae,X,c,Ee,L,xe,Ce,z,He,Le,Z,R,ze,ee,I,te,u,Re,U,Ue,je,ie,j,Me,ae,T,oe,M,Se,se,P,re,S,De,ne,le,he,m,Oe,N,Be,Fe,D,qe,Ge,O,Je,We,fe,B,Ye,pe,A,me,F,Ve,ce,E,de,q,Ke,ue,we,ye,G,Ne,ve,x,ge,J,Qe,be,W,Xe,_e,C,$e,Y,Ze,ke,H,Ie,V,et,Te;return I=new k({props:{src:Tt}}),T=new k({props:{src:Pt}}),P=new k({props:{src:At}}),A=new k({props:{src:Et}}),E=new k({props:{src:xt}}),x=new k({props:{src:Ct}}),C=new k({props:{src:Ht}}),H=new k({props:{src:Lt}}),{c(){d=h("h1"),Ae=s("Crime in Chicago, so far in 2020"),X=n(),c=h("p"),Ee=s("I realized that I was doing things the hard way when I made "),L=h("a"),xe=s("my map of crime in Hyde Park"),Ce=s(" -- the City of Chicago has "),z=h("a"),He=s("an excellent site"),Le=s(" where they make available all sorts of data -- including crime data -- in various formats. The best part is that each event is pre-labeled with GPS coordinates, so not only did I not need to scrape the website for the data, I didn't have to geocode the events either. I downloaded all of the data for 2020 up to now (early September) and made a few visualizations as an extension of my Hyde Park project. (I would have used all the data they have, since 2001, but my little laptop was not having fun chugging through the 7 million+ observations in there, and I figured the 2020 data will give a more current picture, anyway.)"),Z=n(),R=h("p"),ze=s("The first thing I made was this attractive-looking map of where crimes are concentrated. It's a log-scale hex-bin map of almost the entire city (reddish colors indicate more crimes per area). I honestly want to hang this on my wall; it's very interesting to look at closely (of course, that's just me being a map nerd)."),ee=n(),y(I.$$.fragment),te=n(),u=h("p"),Re=s("You can see that Hyde Park seems to exist in a little bubble of crime, which is not surprising. Downtown has the highest concentration of crimes, which is surprising based on the fact that people there tend to be more wealthy than the average person in the city, but not surprising based on the fact that the concentration of people there is considerably higher than anywhere else in the city. I'm sure the looting that's been occuring of the past few months has also contributed to that. The large sections of the city where mainly economically disadvantaged, African American people live have very high rates of crime. On the other hand, the sections of the city dominated by Latin Americans have relatively low crime rates (compare with "),U=h("a"),Ue=s("this excellent map from Wikipedia"),je=s("). The lower-density suburbs have low crime rates."),ie=n(),j=h("p"),Me=s("The non-log-scaled version is also helpful for identifying especially high-crime areas:"),ae=n(),y(T.$$.fragment),oe=n(),M=h("p"),Se=s("I also filtered the data to look only and violent crimes and see if there was any significant difference between the distribution of these crimes and the overall distribution."),se=n(),y(P.$$.fragment),re=n(),S=h("p"),De=s("There doesn't seem to be too much of a difference here, although it looks like the distrubution of violent crime might have more to do with the neighborhood and less to do with the population density; I'd have to do a more careful analysis with population data on hand to be sure, though."),ne=n(),le=h("hr"),he=n(),m=h("p"),Oe=s("The big issue with these above graphics is that they don't control for the population of the area: we would expect areas with higher population to have higher crime, all else equal (as I mentioned with respect to the high crime present downtown). So if we want to get an idea of how prevalent crime is "),N=h("i"),Be=s("per capita"),Fe=s(" we need to normalize the data by population. Luckily, the city "),D=h("a"),qe=s("has data available"),Ge=s(" -- based on the 2010 census -- that tell the population living in every census tract in the city. Using "),O=h("a"),Je=s("a handy API from the FCC"),We=s(", I was able to find which census blocks each of the crimes in the data set occured in, match this to the city's population data, and generate a version of the crime map normalized by population."),fe=n(),B=h("p"),Ye=s("Here's a log-scaled version:"),pe=n(),y(A.$$.fragment),me=n(),F=h("p"),Ve=s("And here's a linearly-scaled version:"),ce=n(),y(E.$$.fragment),de=n(),q=h("p"),Ke=s("Disentangling the crime data from the population density, we can get a better idea of which areas really seem to have a problem with crime. The linearly-scaled version pinpoints several hotspots of inordinately high crime, and the log-scaled version provides an overview for the entire city. This normalization still has some drawbacks, though: for example, the area between I-90 and the river, between the Willis Tower and Chinatown, is highlighted here as an area of especially high crime, but that area is mostly a business district -- very few people live there, so the population scaling is exaggerating the crime rates."),ue=n(),we=h("hr"),ye=n(),G=h("p"),Ne=s("The last thing I did was to take a look at how the crime rates have changed throughout the year."),ve=n(),y(x.$$.fragment),ge=n(),J=h("p"),Qe=s("This is interesting. You can see a sizable lull in April and May, I'm guessing due to lockdown restrictions that kept people in their houses. The Black Lives Matter protests at the end of May and beginnning of June show up very clearly, as does the looting in early August."),be=n(),W=h("p"),Xe=s("Again, I broke down the data by type of crime as well. Here's the timeline for violent crimes:"),_e=n(),y(C.$$.fragment),$e=n(),Y=h("p"),Ze=s("And here are the data for just homicides:"),ke=n(),y(H.$$.fragment),Ie=n(),V=h("p"),et=s("These last two provide some interesting insights into how the dynamics of crime have changed since the COVID-19 lockdowns. Even though overall crime was down in April and May, homicides were significantly elevated (at least compared to the previous months; I'd have to look at data from years before to know what is typical for the season). Overall crime is still down compared to the beginning of the year, but violent crime has, since the beginning of June, been above what it was at the beginning of the year."),this.h()},l(e){d=f(e,"H1",{});var i=p(d);Ae=r(i,"Crime in Chicago, so far in 2020"),i.forEach(t),X=l(e),c=f(e,"P",{});var K=p(c);Ee=r(K,"I realized that I was doing things the hard way when I made "),L=f(K,"A",{href:!0});var tt=p(L);xe=r(tt,"my map of crime in Hyde Park"),tt.forEach(t),Ce=r(K," -- the City of Chicago has "),z=f(K,"A",{href:!0});var it=p(z);He=r(it,"an excellent site"),it.forEach(t),Le=r(K," where they make available all sorts of data -- including crime data -- in various formats. The best part is that each event is pre-labeled with GPS coordinates, so not only did I not need to scrape the website for the data, I didn't have to geocode the events either. I downloaded all of the data for 2020 up to now (early September) and made a few visualizations as an extension of my Hyde Park project. (I would have used all the data they have, since 2001, but my little laptop was not having fun chugging through the 7 million+ observations in there, and I figured the 2020 data will give a more current picture, anyway.)"),K.forEach(t),Z=l(e),R=f(e,"P",{});var at=p(R);ze=r(at,"The first thing I made was this attractive-looking map of where crimes are concentrated. It's a log-scale hex-bin map of almost the entire city (reddish colors indicate more crimes per area). I honestly want to hang this on my wall; it's very interesting to look at closely (of course, that's just me being a map nerd)."),at.forEach(t),ee=l(e),v(I.$$.fragment,e),te=l(e),u=f(e,"P",{});var Pe=p(u);Re=r(Pe,"You can see that Hyde Park seems to exist in a little bubble of crime, which is not surprising. Downtown has the highest concentration of crimes, which is surprising based on the fact that people there tend to be more wealthy than the average person in the city, but not surprising based on the fact that the concentration of people there is considerably higher than anywhere else in the city. I'm sure the looting that's been occuring of the past few months has also contributed to that. The large sections of the city where mainly economically disadvantaged, African American people live have very high rates of crime. On the other hand, the sections of the city dominated by Latin Americans have relatively low crime rates (compare with "),U=f(Pe,"A",{href:!0});var ot=p(U);Ue=r(ot,"this excellent map from Wikipedia"),ot.forEach(t),je=r(Pe,"). The lower-density suburbs have low crime rates."),Pe.forEach(t),ie=l(e),j=f(e,"P",{});var st=p(j);Me=r(st,"The non-log-scaled version is also helpful for identifying especially high-crime areas:"),st.forEach(t),ae=l(e),v(T.$$.fragment,e),oe=l(e),M=f(e,"P",{});var rt=p(M);Se=r(rt,"I also filtered the data to look only and violent crimes and see if there was any significant difference between the distribution of these crimes and the overall distribution."),rt.forEach(t),se=l(e),v(P.$$.fragment,e),re=l(e),S=f(e,"P",{});var nt=p(S);De=r(nt,"There doesn't seem to be too much of a difference here, although it looks like the distrubution of violent crime might have more to do with the neighborhood and less to do with the population density; I'd have to do a more careful analysis with population data on hand to be sure, though."),nt.forEach(t),ne=l(e),le=f(e,"HR",{}),he=l(e),m=f(e,"P",{});var w=p(m);Oe=r(w,"The big issue with these above graphics is that they don't control for the population of the area: we would expect areas with higher population to have higher crime, all else equal (as I mentioned with respect to the high crime present downtown). So if we want to get an idea of how prevalent crime is "),N=f(w,"I",{});var lt=p(N);Be=r(lt,"per capita"),lt.forEach(t),Fe=r(w," we need to normalize the data by population. Luckily, the city "),D=f(w,"A",{href:!0});var ht=p(D);qe=r(ht,"has data available"),ht.forEach(t),Ge=r(w," -- based on the 2010 census -- that tell the population living in every census tract in the city. Using "),O=f(w,"A",{href:!0});var ft=p(O);Je=r(ft,"a handy API from the FCC"),ft.forEach(t),We=r(w,", I was able to find which census blocks each of the crimes in the data set occured in, match this to the city's population data, and generate a version of the crime map normalized by population."),w.forEach(t),fe=l(e),B=f(e,"P",{});var pt=p(B);Ye=r(pt,"Here's a log-scaled version:"),pt.forEach(t),pe=l(e),v(A.$$.fragment,e),me=l(e),F=f(e,"P",{});var mt=p(F);Ve=r(mt,"And here's a linearly-scaled version:"),mt.forEach(t),ce=l(e),v(E.$$.fragment,e),de=l(e),q=f(e,"P",{});var ct=p(q);Ke=r(ct,"Disentangling the crime data from the population density, we can get a better idea of which areas really seem to have a problem with crime. The linearly-scaled version pinpoints several hotspots of inordinately high crime, and the log-scaled version provides an overview for the entire city. This normalization still has some drawbacks, though: for example, the area between I-90 and the river, between the Willis Tower and Chinatown, is highlighted here as an area of especially high crime, but that area is mostly a business district -- very few people live there, so the population scaling is exaggerating the crime rates."),ct.forEach(t),ue=l(e),we=f(e,"HR",{}),ye=l(e),G=f(e,"P",{});var dt=p(G);Ne=r(dt,"The last thing I did was to take a look at how the crime rates have changed throughout the year."),dt.forEach(t),ve=l(e),v(x.$$.fragment,e),ge=l(e),J=f(e,"P",{});var ut=p(J);Qe=r(ut,"This is interesting. You can see a sizable lull in April and May, I'm guessing due to lockdown restrictions that kept people in their houses. The Black Lives Matter protests at the end of May and beginnning of June show up very clearly, as does the looting in early August."),ut.forEach(t),be=l(e),W=f(e,"P",{});var wt=p(W);Xe=r(wt,"Again, I broke down the data by type of crime as well. Here's the timeline for violent crimes:"),wt.forEach(t),_e=l(e),v(C.$$.fragment,e),$e=l(e),Y=f(e,"P",{});var yt=p(Y);Ze=r(yt,"And here are the data for just homicides:"),yt.forEach(t),ke=l(e),v(H.$$.fragment,e),Ie=l(e),V=f(e,"P",{});var vt=p(V);et=r(vt,"These last two provide some interesting insights into how the dynamics of crime have changed since the COVID-19 lockdowns. Even though overall crime was down in April and May, homicides were significantly elevated (at least compared to the previous months; I'd have to look at data from years before to know what is typical for the season). Overall crime is still down compared to the beginning of the year, but violent crime has, since the beginning of June, been above what it was at the beginning of the year."),vt.forEach(t),this.h()},h(){Q(L,"href",It+"/posts/hyde-park-crime/"),Q(z,"href","https://data.cityofchicago.org/"),Q(U,"href","https://upload.wikimedia.org/wikipedia/commons/5/53/Race_and_ethnicity_2010-_Chicago_%285560488484%29.png"),Q(D,"href","https://data.cityofchicago.org/Facilities-Geographic-Boundaries/Population-by-2010-Census-Block/5yjb-v3mj"),Q(O,"href","https://geo.fcc.gov/api/census/")},m(e,i){a(e,d,i),o(d,Ae),a(e,X,i),a(e,c,i),o(c,Ee),o(c,L),o(L,xe),o(c,Ce),o(c,z),o(z,He),o(c,Le),a(e,Z,i),a(e,R,i),o(R,ze),a(e,ee,i),g(I,e,i),a(e,te,i),a(e,u,i),o(u,Re),o(u,U),o(U,Ue),o(u,je),a(e,ie,i),a(e,j,i),o(j,Me),a(e,ae,i),g(T,e,i),a(e,oe,i),a(e,M,i),o(M,Se),a(e,se,i),g(P,e,i),a(e,re,i),a(e,S,i),o(S,De),a(e,ne,i),a(e,le,i),a(e,he,i),a(e,m,i),o(m,Oe),o(m,N),o(N,Be),o(m,Fe),o(m,D),o(D,qe),o(m,Ge),o(m,O),o(O,Je),o(m,We),a(e,fe,i),a(e,B,i),o(B,Ye),a(e,pe,i),g(A,e,i),a(e,me,i),a(e,F,i),o(F,Ve),a(e,ce,i),g(E,e,i),a(e,de,i),a(e,q,i),o(q,Ke),a(e,ue,i),a(e,we,i),a(e,ye,i),a(e,G,i),o(G,Ne),a(e,ve,i),g(x,e,i),a(e,ge,i),a(e,J,i),o(J,Qe),a(e,be,i),a(e,W,i),o(W,Xe),a(e,_e,i),g(C,e,i),a(e,$e,i),a(e,Y,i),o(Y,Ze),a(e,ke,i),g(H,e,i),a(e,Ie,i),a(e,V,i),o(V,et),Te=!0},p:kt,i(e){Te||(b(I.$$.fragment,e),b(T.$$.fragment,e),b(P.$$.fragment,e),b(A.$$.fragment,e),b(E.$$.fragment,e),b(x.$$.fragment,e),b(C.$$.fragment,e),b(H.$$.fragment,e),Te=!0)},o(e){_(I.$$.fragment,e),_(T.$$.fragment,e),_(P.$$.fragment,e),_(A.$$.fragment,e),_(E.$$.fragment,e),_(x.$$.fragment,e),_(C.$$.fragment,e),_(H.$$.fragment,e),Te=!1},d(e){e&&t(d),e&&t(X),e&&t(c),e&&t(Z),e&&t(R),e&&t(ee),$(I,e),e&&t(te),e&&t(u),e&&t(ie),e&&t(j),e&&t(ae),$(T,e),e&&t(oe),e&&t(M),e&&t(se),$(P,e),e&&t(re),e&&t(S),e&&t(ne),e&&t(le),e&&t(he),e&&t(m),e&&t(fe),e&&t(B),e&&t(pe),$(A,e),e&&t(me),e&&t(F),e&&t(ce),$(E,e),e&&t(de),e&&t(q),e&&t(ue),e&&t(we),e&&t(ye),e&&t(G),e&&t(ve),$(x,e),e&&t(ge),e&&t(J),e&&t(be),e&&t(W),e&&t(_e),$(C,e),e&&t($e),e&&t(Y),e&&t(ke),$(H,e),e&&t(Ie),e&&t(V)}}}class Mt extends bt{constructor(d){super(),_t(this,d,null,zt,$t,{})}}export{Mt as default};
