(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},28:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s(1),n=s.n(c),r=s(17),i=s.n(r),j=(s(25),s(26),s(14)),l=s.n(j),d=s(18),h=s(7),o=s(9),b=s(2),u=(s(28),function(e){var t=e.newDeaths,s=e.newCases;return Object(a.jsxs)("div",{className:"cases-container",children:[Object(a.jsxs)("div",{className:"left",children:[Object(a.jsx)("p",{className:"caseText deaths-left",children:"Today's Deaths"}),Object(a.jsx)("h2",{children:t})]}),Object(a.jsxs)("div",{className:"right",children:[Object(a.jsx)("p",{className:"casesText cases-right",children:"Today's Cases"})," ",Object(a.jsx)("h2",{children:s})]})]})}),O=s(8),x=s.n(O),p=function(e){var t=e.totalDeaths,s=e.totalCases,c=e.lastUpdate,n=e.totalRecovered;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"total-container",children:[Object(a.jsxs)("div",{className:"left",children:[Object(a.jsx)("p",{className:"caseText deaths-left",children:"Total Deaths"}),Object(a.jsx)("h2",{children:t})]}),Object(a.jsxs)("div",{className:"centre",children:[Object(a.jsx)("p",{className:"casesText cases-right",children:"Total Cases"})," ",Object(a.jsx)("h2",{children:s})]}),Object(a.jsxs)("div",{className:"right",children:[Object(a.jsx)("p",{className:"casesText cases-right",children:"Recovered"})," ",Object(a.jsx)("h2",{children:n})]})]}),Object(a.jsxs)("p",{className:"date-update",children:["Last Update ",x()(c).calendar()]})]})},f=function(){return Object(a.jsx)("nav",{className:"nav",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)("li",{children:"Home"})}),Object(a.jsx)(o.b,{to:"/today",children:Object(a.jsx)("li",{children:"Today"})}),Object(a.jsx)(o.b,{to:"/yesterday",children:Object(a.jsx)("li",{children:"Yesterday"})}),Object(a.jsx)(o.b,{to:"/news",children:Object(a.jsx)("li",{children:"News"})})]})})},v=function(e){var t=e.yesterdayCases,s=e.yesterdayDeaths;return Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"cases-container",children:[Object(a.jsxs)("div",{className:"left",children:[Object(a.jsx)("p",{className:"caseText deaths-left",children:"Yesterday's Deaths"}),Object(a.jsxs)("h2",{children:[s," "]})]}),Object(a.jsxs)("div",{className:"right",children:[Object(a.jsx)("p",{className:"casesText cases-right",children:"Yesterday's Cases"})," ",Object(a.jsx)("h2",{children:t})]})]})})};x.a.locale();var m=function(e){var t=e.articles;return Object(a.jsx)("div",{className:"news-grid",children:t.map((function(e){return Object(a.jsxs)("div",{className:"news-div",children:[Object(a.jsxs)("a",{rel:"noreferrer",target:"_blank",href:e.webUrl,children:[" ",Object(a.jsx)("h2",{children:e.webTitle})," "]}),Object(a.jsxs)("div",{className:"news-info-box",children:[Object(a.jsx)("h5",{children:e.sectionName}),Object(a.jsx)("h5",{children:e.type}),Object(a.jsx)("h5",{children:x()(e.webPublicationDate).format("Do MMMM  YYYY")})]})]},e.id)}))})},g=function(e){var t=e.totalDeaths;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"homepage-title",children:"Covid-19 UK Figures"}),Object(a.jsxs)("p",{className:"hp-paragraph",children:["Well it's been one hell of a year, unfortunately there has been over ",Object(a.jsx)("strong",{children:t})," deaths so far and there is still a way to go before any vaccine is delivered in any great numbers to the population. "]}),Object(a.jsx)("p",{className:"hp-paragraph",children:"This has been an awful year for so many families who have lost loved ones, but less not forget our wonderful NHS, the people who keep that running deserve a bloody medal and a good pay rise."}),Object(a.jsx)("p",{className:"hp-paragraph",children:"As the year comes to a close and 2021 begins, I think it's vital that we keep vigilant against this awful virus and keep washing our hands, keep 2 metres apart and WEAR A MASK to protect other around us. Hopefully 2021 will be better year than this, but it's still not going to return normal for a long time.  "})]})},y=function(e){e.time;return Object(a.jsx)("div",{className:"footer",children:Object(a.jsxs)("p",{className:"year",children:["Copyright \xa9 ",x()().format("YYYY")," Chris Clark "]})})},N=function(){var e=Object(c.useState)(),t=Object(h.a)(e,2),s=t[0],n=t[1],r=Object(c.useState)(),i=Object(h.a)(r,2),j=i[0],O=i[1],N=Object(c.useState)(),w=Object(h.a)(N,2),Y=w[0],D=w[1],C=Object(c.useState)(),T=Object(h.a)(C,2),S=T[0],k=T[1],M=Object(c.useState)(),A=Object(h.a)(M,2),F=A[0],U=A[1],L=Object(c.useState)(),R=Object(h.a)(L,2),_=R[0],E=R[1],H=Object(c.useState)(!1),I=Object(h.a)(H,2),P=I[0],B=I[1],J=Object(c.useState)(),K=Object(h.a)(J,2),W=K[0],q=K[1],z=Object(c.useState)(),G=Object(h.a)(z,2),Q=G[0],V=G[1],X=Object(c.useState)([]),Z=Object(h.a)(X,2),$=Z[0],ee=Z[1];return Object(c.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,s,a,c,r,i,j,d,h,o,b,u,p,f,v,m,g,y,N,w,Y;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B(!0),t=x()().subtract(2,"days").format("YYYY-MM-DD"),s=x()().subtract(1,"days").format("YYYY-MM-DD"),e.next=5,fetch("https://covid19-api.org/api/status/gb");case 5:return a=e.sent,e.next=8,a.json();case 8:return c=e.sent,r=c.cases,i=c.deaths,j=c.last_update,d=c.recovered,e.next=15,fetch("https://covid19-api.org/api/diff/gb");case 15:return h=e.sent,e.next=18,h.json();case 18:return o=e.sent,b=o.new_cases,u=o.new_deaths,e.next=23,fetch("https://covid19-api.org/api/status/gb?date=".concat(t));case 23:return p=e.sent,e.next=26,p.json();case 26:return f=e.sent,e.next=29,fetch("https://covid19-api.org/api/status/gb?date=".concat(s));case 29:return v=e.sent,e.next=32,v.json();case 32:return m=e.sent,g=m.deaths-f.deaths,y=m.cases-f.cases,e.next=37,fetch("https://content.guardianapis.com/search?q=%22coronavirus%22&api-key=9b549b4d-9451-47fb-aed2-a99a8f8c0562");case 37:return N=e.sent,e.next=40,N.json();case 40:w=e.sent,Y=w.response.results,n(i),O(r),D(d),k(j),U(b),E(u),V(y),ee(Y),q(g),B(!1);case 52:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsxs)(o.a,{children:[Object(a.jsx)(f,{}),Object(a.jsxs)("div",{children:[Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{path:"/",exact:!0,render:function(){return Object(a.jsx)(g,{totalDeaths:s})}}),Object(a.jsx)(b.a,{path:"/today",render:function(){return Object(a.jsx)(u,{newDeaths:_,newCases:F})}}),Object(a.jsx)(b.a,{path:"/yesterday",render:function(){return Object(a.jsx)(v,{yesterdayCases:Q,yesterdayDeaths:W})}}),Object(a.jsx)(b.a,{path:"/news",render:function(){return Object(a.jsx)(m,{articles:$})}}),Object(a.jsx)(b.a,{path:"/news/:id"})]}),P?Object(a.jsx)("h1",{className:"loading",children:"Loading..."}):Object(a.jsx)(p,{totalDeaths:s,totalCases:j,lastUpdate:S,totalRecovered:Y}),Object(a.jsx)(y,{})]})]})};var w=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(N,{})})},Y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,39)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),Y()}},[[38,1,2]]]);
//# sourceMappingURL=main.81da235c.chunk.js.map