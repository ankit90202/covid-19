(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(74),l=a.n(c),o=a(1),i=a(18),s=a.n(i),d=a(33),m=a(3),u=a(16),b=a.n(u),f=Object(n.createContext)(),p=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),i=Object(m.a)(o,2),u=i[0],p=i[1],E=Object(n.useState)([]),g=Object(m.a)(E,2),h=g[0],v=g[1],w=Object(n.useState)([]),N=Object(m.a)(w,2),x=N[0],j=N[1],O=Object(n.useState)([]),y=Object(m.a)(O,2),C=y[0],k=y[1],S=Object(n.useState)([]),T=Object(m.a)(S,2),R=T[0],z=T[1],D=function(){var e=Object(d.a)(s.a.mark((function e(){var t,a,n,r,c,o,i,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,b.a.get("https://api.covid19api.com/summary");case 3:return t=e.sent,a=t.data,p(a.Global),v(a.Countries),e.next=9,b.a.get("https://api.rootnet.in/covid19-in/stats/latest");case 9:return n=e.sent,r=n.data,j(r.data.regional),e.next=14,b.a.get("https://api.rootnet.in/covid19-in/hospitals/beds");case 14:return c=e.sent,o=c.data,k(o.data),e.next=19,b.a.get("\thttps://api.covid19india.org/resources/resources.json");case 19:i=e.sent,d=i.data,z(d.resources),l(!1);case 23:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){D()}),[]),r.a.createElement(f.Provider,{value:{loading:c,worldStatus:u,country:h,states:x,bed:C,resource:R}},e.children)},E=a(2),g=a(8);function h(){var e=Object(o.a)(["\n  li a {\n    font-weight: bold;\n  }\n  li a img {\n    max-width: 25px;\n    margin-right: 25px;\n  }\n"]);return h=function(){return e},e}var v=E.a.ul(h()),w=function(e){var t=e.pages.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(g.b,{to:e.link},r.a.createElement("img",{src:e.icon}),r.a.createElement("div",{className:"navname"}," ",e.name)))}));return r.a.createElement(v,null,t)},N=a(79),x=a.n(N),j=a(80),O=a.n(j),y=a(81),C=a.n(y),k=a(82),S=a.n(k),T=a(83),R=a.n(T),z=a(84),D=a.n(z),B=a(85),H=a.n(B);function _(){var e=Object(o.a)(["\n  font-size: 46px;\n  font-weight: bold;\n"]);return _=function(){return e},e}function P(){var e=Object(o.a)(["\n  max-width: 80px;\n  margin-right: 10px;\n"]);return P=function(){return e},e}function I(){var e=Object(o.a)(["\n  margin-bottom: 50px;\n  a {\n    text-decoration: none;\n    display: flex;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 20px;\n    color: #7d58fe;\n  }\n"]);return I=function(){return e},e}var U=E.a.div(I()),W=E.a.img(P()),F=E.a.h2(_()),A=function(){var e=Object(n.useState)([{id:1,name:"World",link:"/",icon:H.a},{id:2,name:"India",link:"/world/country/india/India",icon:D.a},{id:3,name:"Indian State",link:"/india-state",icon:R.a},{id:4,name:"Hospital Beds",link:"/india/hospital-beds",icon:S.a},{id:5,name:"Resources",link:"/resources",icon:C.a}]),t=Object(m.a)(e,2),a=t[0];t[1];return r.a.createElement("div",{className:x.a.Navbar},r.a.createElement(U,{className:"logo-wrapper"},r.a.createElement(g.b,{to:"/"},r.a.createElement(W,{src:O.a,alt:""}),r.a.createElement(F,null,"Covid"))),r.a.createElement(w,{pages:a}))},Z=a(14),G=function(){return r.a.createElement("div",null,"Not Found")};function J(){var e=Object(o.a)(["\n    background: ",";\n    padding: 20px;\n    border-radius: 10px;\n    color: #fff;\n    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    // border: 3px solid #fff;\n\n    .card-title {\n      margin-bottom: 0;\n      font-size: 15px;\n    }\n    .card-text {\n      // font-size: 24px;\n      font-weight: bold;\n    }\n  "]);return J=function(){return e},e}function L(){var e=Object(o.a)([""]);return L=function(){return e},e}E.a.p(L());var M=function(e){var t=e.data,a=e.title,n=e.colSize,c=e.bgColor,l=E.a.div(J(),c);return r.a.createElement("div",{className:"col-md-".concat(n," ")},r.a.createElement(l,{className:"cus-card"},r.a.createElement("p",{className:"card-title"},a),r.a.createElement("h2",{className:"card-text"},t)))},V=a(86),q=a.n(V);function K(){var e=Object(o.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #fff;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  img {\n    max-width: 150px;\n  }\n"]);return K=function(){return e},e}var Q=E.a.div(K()),X=function(){return r.a.createElement(Q,null,r.a.createElement("img",{src:q.a,alt:""}))};function Y(){var e=Object(o.a)(["\n  thead tr {\n    background: #f4f8fb;\n    color: #9898a1;\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);\n    border-radius: 10px;\n  }\n\n  tbody tr:hover {\n    background: #f4f8fb;\n    color: #9898a1;\n    cursor: pointer;\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);\n    border-radius: 10px;\n  }\n  a {\n    color: #000;\n  }\n"]);return Y=function(){return e},e}var $=E.a.div(Y()),ee=function(e){var t=e.country.map((function(e,t){return r.a.createElement("tr",{key:e.CountryCode,"data-href":e.CountryCode},r.a.createElement("td",{className:"font-weight-bold"},r.a.createElement(g.b,{to:"world/country/".concat(e.Slug,"/").concat(e.Country)},e.Country)),r.a.createElement("td",null,e.TotalConfirmed),r.a.createElement("td",null,e.TotalDeaths),r.a.createElement("td",null,e.TotalRecovered),r.a.createElement("td",null,e.NewConfirmed),r.a.createElement("td",null,e.NewDeaths),r.a.createElement("td",null,e.NewRecovered))}));return r.a.createElement($,{className:"table-responsive"},r.a.createElement("table",{className:"table table-borderless"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Country"),r.a.createElement("th",null,"Total Confirmed"),r.a.createElement("th",null,"Total Death"),r.a.createElement("th",null,"Total Recoverd"),r.a.createElement("th",null,"New Confirmed"),r.a.createElement("th",null,"New Death"),r.a.createElement("th",null,"New Recoverd"))),r.a.createElement("tbody",null,t)))},te=a(35),ae=a.n(te);function ne(){var e=Object(o.a)(["\n  ul {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0;\n  }\n  .page-link {\n    border: none;\n    height: 30px;\n    width: 30px;\n    display: block;\n    padding: 20px;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 10px;\n    border: 2px solid transparent;\n    color: #7d58fe;\n    transition: all 0.5s;\n  }\n  .page-link:hover {\n    border: 2px solid #7d58fe;\n    background: transparent;\n    color: #7d58fe;\n  }\n  li.active .page-link {\n    background: #7d58fe;\n    color: #fff;\n    outline: none;\n    border-color: transparent;\n  }\n"]);return ne=function(){return e},e}var re=E.a.nav(ne()),ce=function(e){var t=e.itemsCount,a=e.pageSize,n=e.currentPage,c=e.onPageChange,l=Math.ceil(t/a),o=ae.a.range(1,l+1);return 0===l?0:r.a.createElement(re,null,r.a.createElement("ul",{className:"pagination"},o.map((function(e){return r.a.createElement("li",{key:e,className:n===e?"page-item active":"page-item"},r.a.createElement("a",{style:{cursor:" pointer"},className:"page-link",onClick:function(){return c(e)}},e))}))))};function le(e,t,a){var n=(t-1)*a;return ae()(e).slice(n).take(a).value()}function oe(){var e=Object(o.a)(["\n  margin-bottom: 20px;\n\n  .cus-white {\n    background: #fff;\n    border-radius: 10px;\n    padding: 20px;\n  }\n  .cus-white h5 {\n    padding: 20px 0;\n    font-weight: 600;\n  }\n"]);return oe=function(){return e},e}var ie=E.a.div(oe()),se=function(){var e=Object(n.useState)(1),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(f),o=l.loading,i=l.worldStatus,s=l.country,d=le(s,a,20);return o?r.a.createElement(X,null):r.a.createElement("div",{className:"Home"},r.a.createElement(ie,{className:"row "},r.a.createElement(M,{data:i.TotalConfirmed,colSize:2,type:"warning",title:"Total Cases",bgColor:"#f36571"}),r.a.createElement(M,{data:i.TotalRecovered,colSize:2,type:"success",title:"Total Recovered",bgColor:"#ffac4e"}),r.a.createElement(M,{data:i.TotalDeaths,colSize:2,type:"danger",title:"Total Deaths",bgColor:"#a7a6b4"}),r.a.createElement(M,{data:i.NewConfirmed,colSize:2,type:"warning",title:"New Confirmed",bgColor:"#7add4f"}),r.a.createElement(M,{data:i.NewDeaths,colSize:2,type:"warning",title:"New Deaths",bgColor:"#bfd4ff"}),r.a.createElement(M,{data:i.NewRecovered,colSize:2,type:"warning",title:"New Recovered",bgColor:"#4caf50"})),r.a.createElement(ie,{className:"row mt-2"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"cus-white"},r.a.createElement("h5",null,"Country Status"),r.a.createElement(ee,{country:d}))),r.a.createElement("div",{className:"col-md-12 mt-3"},r.a.createElement("div",{className:"cus-white"},r.a.createElement(ce,{itemsCount:s.length,pageSize:20,onPageChange:function(e){c(e)},currentPage:a})))))},de=function(){return r.a.createElement("div",null,"India")};function me(){var e=Object(o.a)(["\n  thead tr {\n    background: #f4f8fb;\n    color: #9898a1;\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);\n    border-radius: 10px;\n  }\n\n  tbody tr:hover {\n    background: #f4f8fb;\n    color: #9898a1;\n    cursor: pointer;\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);\n    border-radius: 10px;\n  }\n  a {\n    color: #000;\n  }\n"]);return me=function(){return e},e}var ue=E.a.div(me()),be=function(e){var t=e.state,a=e.heading.map((function(e){return r.a.createElement("th",{key:e.id},e.name)})),n=t.map((function(e){return r.a.createElement("tr",{key:e.loc},r.a.createElement("td",{className:"font-weight-bold"},r.a.createElement(g.b,{to:"world/india/".concat(e.loc)},e.loc)),r.a.createElement("td",null,e.totalConfirmed),r.a.createElement("td",null,e.deaths),r.a.createElement("td",null,e.discharged),r.a.createElement("td",null,e.confirmedCasesForeign))}));return r.a.createElement(ue,{className:"table-responsive text-center"},r.a.createElement("table",{className:"table table-borderless"},r.a.createElement("thead",null,r.a.createElement("tr",null,a)),r.a.createElement("tbody",null,n)))};function fe(){var e=Object(o.a)(["\n  margin-bottom: 20px;\n\n  .cus-white {\n    background: #fff;\n    border-radius: 10px;\n    padding: 20px;\n  }\n  .cus-white h5 {\n    padding: 20px 0;\n    font-weight: 600;\n  }\n"]);return fe=function(){return e},e}var pe=E.a.div(fe()),Ee=function(){var e=Object(n.useContext)(f),t=e.states,a=e.loading,c=Object(n.useState)([{id:"1",name:"State"},{id:"2",name:"Total Confirmed"},{id:"3",name:"Total Death"},{id:"4",name:"Total Recoverd"},{id:"5",name:"New Foreign Cases"}]),l=Object(m.a)(c,2),o=l[0];l[1];return a?r.a.createElement(X,null):r.a.createElement("div",{className:"State"},r.a.createElement(pe,{className:"row mb-4"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"cus-white"},r.a.createElement("h1",{className:"h4 m-0 font-weight-bold"},"Indian States")))),r.a.createElement(pe,{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"cus-white"},r.a.createElement(be,{state:t,heading:o})))))},ge=a(210);function he(){var e=Object(o.a)(["\n  thead tr {\n    background: #f4f8fb;\n    color: #9898a1;\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);\n    border-radius: 10px;\n  }\n\n  tbody tr:hover {\n    background: #f4f8fb;\n    color: #9898a1;\n    cursor: pointer;\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);\n    border-radius: 10px;\n  }\n  a {\n    color: #000;\n  }\n"]);return he=function(){return e},e}var ve=E.a.div(he()),we=function(e){var t=e.data,a=e.heading.map((function(e){return r.a.createElement("td",{key:e.id},e.name)})),n=t.length>0?t.map((function(e){return r.a.createElement("tr",{key:Object(ge.a)()},r.a.createElement("td",{className:"font-weight-bold"},e.state),r.a.createElement("td",{className:"font-weight-bold"},e.city),r.a.createElement("td",{className:"font-weight-bold"},e.category),r.a.createElement("td",{className:"font-weight-bold",style:{width:"150px"}},e.nameoftheorganisation),r.a.createElement("td",{className:"font-weight-bold",style:{width:"200px"}},e.descriptionandorserviceprovided),r.a.createElement("td",{className:"font-weight-bold"},e.phonenumber),r.a.createElement("td",{className:"font-weight-bold"},r.a.createElement("a",{href:e.contact},"Source")))})):r.a.createElement("tr",null,r.a.createElement("td",null,"No Data Fount"));return r.a.createElement(ve,{className:"table-responsive text-center"},r.a.createElement("table",{className:"table table-borderless"},r.a.createElement("thead",null,r.a.createElement("tr",null,a)),r.a.createElement("tbody",null,n)))};function Ne(){var e=Object(o.a)(["\n  margin-bottom: 20px;\n\n  .cus-white {\n    background: #fff;\n    border-radius: 10px;\n    padding: 20px;\n  }\n  .cus-white h5 {\n    padding: 20px 0;\n    font-weight: 600;\n  }\n  .pagination {\n    flex-wrap: wrap;\n  }\n  .pagination li {\n    margin-bottom: 10px;\n  }\n"]);return Ne=function(){return e},e}var xe=E.a.div(Ne()),je=function(){var e=Object(n.useState)(1),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useContext)(f).resource,o=le(l,a,20),i=Object(n.useState)([{id:1,name:"State"},{id:2,name:"Citys"},{id:3,name:"Category"},{id:4,name:"Name of The Organisation"},{id:5,name:"Description Or Serviceprovided"},{id:6,name:"Phonenumber"},{id:7,name:"Website"}]),s=Object(m.a)(i,2),d=s[0];s[1];return r.a.createElement("div",{className:"Rsources"},r.a.createElement(xe,{className:"row mb-4"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"cus-white"},r.a.createElement("h1",{className:"h4 m-0 font-weight-bold"},"Resources")))),r.a.createElement(xe,{className:"row mb-4"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"cus-white"},r.a.createElement(we,{data:o,heading:d})))),r.a.createElement(xe,null,r.a.createElement("div",{className:"col-md-12 mt-3"},r.a.createElement("div",{className:"cus-white"},r.a.createElement(ce,{itemsCount:l.length,pageSize:20,onPageChange:function(e){c(e)},currentPage:a})))))},Oe=Object(n.createContext)(),ye=function(e){var t=Object(n.useState)("light"),a=Object(m.a)(t,2),c=a[0],l=(a[1],Object(n.useState)({color:"#c4c5c7",background:"#fff"})),o=Object(m.a)(l,2),i=o[0],s=(o[1],Object(n.useState)({color:"#fff",background:"#000"})),d=Object(m.a)(s,2),u=d[0];d[1];return r.a.createElement(Oe.Provider,{value:{theme:c,light:i,dark:u}},e.children)},Ce=a(13),ke=a(87),Se={labels:[],datasets:[{label:"",backgroundColor:"",borderWidth:0,data:[]}]},Te=function(e){var t=e.data,a=Object(n.useState)(Se),c=Object(m.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){o(t)})),l.labels.length<0&&setInterval((function(){window.location.reload()}),1e3),r.a.createElement("div",null,r.a.createElement(ke.a,{data:l,width:100,height:50,options:{maintainAspectRatio:!0}}))};function Re(){var e=Object(o.a)(["\n  margin-bottom: 20px;\n  .cus-white {\n    background: #fff;\n    border-radius: 10px;\n    padding: 20px;\n  }\n  .cus-white h5 {\n    padding: 20px 0;\n    font-weight: 600;\n  }\n"]);return Re=function(){return e},e}var ze=E.a.div(Re()),De={labels:[],datasets:[{label:"",backgroundColor:"",borderWidth:0,data:[]}]},Be=function(e){var t=e.match,a=Object(n.useState)([]),c=Object(m.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(!1),u=Object(m.a)(i,2),p=u[0],E=u[1],g=Object(n.useContext)(f).country,h=Object(n.useState)([]),v=Object(m.a)(h,2),w=v[0],N=v[1],x=Object(n.useState)(De),j=Object(m.a)(x,2),O=j[0],y=j[1],C=Object(n.useState)(De),k=Object(m.a)(C,2),S=k[0],T=k[1],R=Object(n.useState)(De),z=Object(m.a)(R,2),D=z[0],B=z[1],H=t.params.id,_=t.params.slug,P=Object(n.useState)(!0),I=Object(m.a)(P,2),U=(I[0],I[1]),W=function(){var e=Object(d.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!1),E(!0),e.next=4,b.a.get("https://api.covid19api.com/country/".concat(_));case 4:t=e.sent,a=t.data,N(a),E(!1),U(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=g.filter((function(e){return e.Country===H}));o(e),W();var t=w.map((function(e){return e.Date.split("T")[0]})),a=w.map((function(e){return e.Confirmed})),n=w.map((function(e){return e.Recovered})),r=w.map((function(e){return e.Deaths})),c={labels:Object(Ce.a)(t),datasets:[{label:"Total Confirmed",backgroundColor:"rgba(243, 101, 113,1)",borderWidth:0,data:Object(Ce.a)(a)}]},l={labels:Object(Ce.a)(t),datasets:[{label:"Total Recovered",backgroundColor:"#7add4e",borderWidth:2,data:Object(Ce.a)(n)}]},i={labels:Object(Ce.a)(t),datasets:[{label:"Total Deaths",backgroundColor:"RGB(167, 166, 180)",borderWidth:0,data:Object(Ce.a)(r)}]};y(c),T(l),B(i),U(!0)}),[g]),p?r.a.createElement(X,null):r.a.createElement("div",{className:"SingleCountry"},r.a.createElement(ze,{className:"row mb-4"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"cus-white"},r.a.createElement("h1",{className:"h4 m-0"},H)))),l.length>0?r.a.createElement("div",{className:"row"},r.a.createElement(M,{data:l[0].TotalConfirmed,colSize:2,type:"warning",title:"Total Cases",bgColor:"#f36571"}),r.a.createElement(M,{data:l[0].TotalRecovered,colSize:2,type:"success",title:"Total Recovered",bgColor:"#ffac4e"}),r.a.createElement(M,{data:l[0].TotalDeaths,colSize:2,type:"danger",title:"Total Deaths",bgColor:"#a7a6b4"}),r.a.createElement(M,{data:l[0].NewConfirmed,colSize:2,type:"warning",title:"New Confirmed",bgColor:"#7add4f"}),r.a.createElement(M,{data:l[0].NewDeaths,colSize:2,type:"warning",title:"New Deaths",bgColor:"#bfd4ff"}),r.a.createElement(M,{data:l[0].NewRecovered,colSize:2,type:"warning",title:"New Recovered",bgColor:"#4caf50"})):null,r.a.createElement(ze,{className:"row mt-4"},r.a.createElement("div",{className:"col-md-6 mb-4"},r.a.createElement("div",{className:"cus-white"},r.a.createElement(Te,{data:O,slug:_}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"cus-white"},r.a.createElement(Te,{data:S,slug:_}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"cus-white"},r.a.createElement(Te,{data:D,slug:_})))))};function He(){var e=Object(o.a)(["\n  margin-bottom: 20px;\n\n  .cus-white {\n    background: #fff;\n    border-radius: 10px;\n    padding: 20px;\n  }\n  .cus-white h5 {\n    padding: 20px 0;\n    font-weight: 600;\n  }\n"]);return He=function(){return e},e}var _e=E.a.div(He()),Pe=function(e){var t=e.match.params.state;return r.a.createElement("div",{className:"single-state"},r.a.createElement(_e,{className:"row mb-4"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"cus-white"},r.a.createElement("h1",{className:"h4 m-0 font-weight-bold"},t)))))};function Ie(){var e=Object(o.a)(["\n  thead tr {\n    background: #f4f8fb;\n    color: #9898a1;\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);\n    border-radius: 10px;\n  }\n\n  tbody tr:hover {\n    background: #f4f8fb;\n    color: #9898a1;\n    cursor: pointer;\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);\n    border-radius: 10px;\n  }\n  a {\n    color: #000;\n  }\n"]);return Ie=function(){return e},e}var Ue=E.a.div(Ie()),We=function(e){var t=e.beds,a=e.heading.map((function(e){return r.a.createElement("th",{key:e.id},e.name)})),c=Object(n.useState)({}),l=Object(m.a)(c,2),o=l[0],i=l[1];return Object(n.useEffect)((function(){t&&i(t)}),[t]),r.a.createElement(Ue,{className:"table-responsive text-center"},r.a.createElement("table",{className:"table table-borderless"},r.a.createElement("thead",null,r.a.createElement("tr",null,a)),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,o.ruralHospitals),r.a.createElement("td",null,o.ruralBeds),r.a.createElement("td",null,o.urbanHospitals),r.a.createElement("td",null,o.urbanBeds),r.a.createElement("td",{className:"font-weight-bold"},o.totalHospitals),r.a.createElement("td",{className:"font-weight-bold"},o.totalBeds)))))};function Fe(){var e=Object(o.a)(["\n  thead tr {\n    background: #f4f8fb;\n    color: #9898a1;\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);\n    border-radius: 10px;\n  }\n\n  tbody tr:hover {\n    background: #f4f8fb;\n    color: #9898a1;\n    cursor: pointer;\n    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.08);\n    border-radius: 10px;\n  }\n  a {\n    color: #000;\n  }\n"]);return Fe=function(){return e},e}var Ae=E.a.div(Fe()),Ze=function(e){var t=e.regionalheading,a=e.regional,c=t.map((function(e){return r.a.createElement("th",{key:e.id},e.name)})),l=Object(n.useState)([]),o=Object(m.a)(l,2),i=o[0],s=o[1];Object(n.useEffect)((function(){a&&s(Object(Ce.a)(a))}),[a]);var d=i.map((function(e){return r.a.createElement("tr",{key:e.state},r.a.createElement("td",{className:"font-weight-bold"},e.state),r.a.createElement("td",null,e.ruralHospitals),r.a.createElement("td",null,e.ruralBeds),r.a.createElement("td",null,e.urbanHospitals),r.a.createElement("td",null,e.urbanBeds),r.a.createElement("td",{className:"font-weight-bold"},e.totalHospitals),r.a.createElement("td",{className:"font-weight-bold"},e.totalBeds))}));return r.a.createElement(Ae,{className:"table-responsive text-center"},r.a.createElement("table",{className:"table table-borderless"},r.a.createElement("thead",null,r.a.createElement("tr",null,c)),r.a.createElement("tbody",null,d)))};function Ge(){var e=Object(o.a)(["\n  margin-bottom: 20px;\n\n  .cus-white {\n    background: #fff;\n    border-radius: 10px;\n    padding: 20px;\n  }\n  .cus-white h5 {\n    padding: 20px 0;\n    font-weight: 600;\n  }\n  .source {\n    text-decoration: none;\n    color: #f00;\n  }\n"]);return Ge=function(){return e},e}var Je=E.a.div(Ge()),Le=function(){var e,t,a=Object(n.useContext)(f),c=a.bed,l=a.loading;c.sources&&(e=c.sources[0].lastUpdated.split("T")[0],t=c.sources[0].url);var o=Object(n.useState)([{id:1,name:"Rural Hospitals"},{id:2,name:"Rural Beds"},{id:3,name:"Urban Hospitals"},{id:4,name:"Urban Beds"},{id:5,name:"Total Hospitals"},{id:6,name:"Total Beds"}]),i=Object(m.a)(o,2),s=i[0],d=(i[1],Object(n.useState)([{id:1,name:"State Name"},{id:2,name:"Rural Hospitals"},{id:3,name:"Rural Beds"},{id:4,name:"Urban Hospitals"},{id:5,name:"Urban Beds"},{id:6,name:"Total Hospitals"},{id:7,name:"Total Beds"}])),u=Object(m.a)(d,2),b=u[0];u[1];return l?r.a.createElement(X,null):r.a.createElement("div",{className:"hospital-beds"},r.a.createElement("div",{className:"single-state"},r.a.createElement(Je,{className:"row mb-4"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"cus-white"},r.a.createElement("h1",{className:"h4 m-0 font-weight-bold"},"Hospital Beds Count")))),r.a.createElement(Je,{className:"row mb-4"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"cus-white"},r.a.createElement(We,{beds:c.summary,heading:s})))),r.a.createElement(Je,{className:"row mb-4"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"cus-white"},r.a.createElement("h1",{className:"h4 m-0 font-weight-bold"},"Each State Hospital Bed Count")))),r.a.createElement(Je,{className:"row mb-4"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"cus-white"},r.a.createElement(Ze,{regional:c.regional,regionalheading:b})))),r.a.createElement(Je,{className:"row mb-4"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"cus-white"},r.a.createElement("div",{className:"d-flex w-100 justify-content-between align-items-center"},r.a.createElement("h1",{className:"h4 m-0 font-weight-bold"},"Last Updated On"),r.a.createElement("p",{className:"m-0"},e),r.a.createElement("a",{href:t,className:"source"},"Source")))))))};function Me(){var e=Object(o.a)(["\n  // background: #f6f6fe;\n  background: #7c59f6;\n  padding: 30px 20px;\n  border-radius: 20px 0 0 20px;\n"]);return Me=function(){return e},e}var Ve=E.a.div(Me());var qe=function(){return r.a.createElement(p,null,r.a.createElement(ye,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"row cus-row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement(A,null)),r.a.createElement(Ve,{className:"col-md-10"},r.a.createElement(Z.d,null,r.a.createElement(Z.b,{path:"/not-found",component:G}),r.a.createElement(Z.b,{path:"/india/hospital-beds",component:Le}),r.a.createElement(Z.b,{path:"/world/country/:slug/:id",component:Be}),r.a.createElement(Z.b,{path:"/world/india/:state",component:Pe}),r.a.createElement(Z.b,{path:"/india",component:de}),r.a.createElement(Z.b,{path:"/india-state",component:Ee}),r.a.createElement(Z.b,{path:"/resources",component:je}),r.a.createElement(Z.b,{path:"/",exact:!0,component:se}),r.a.createElement(Z.a,{to:"not-found"})))))))};a(206),a(207);l.a.render(r.a.createElement(g.a,null,r.a.createElement(qe,null)),document.getElementById("root"))},79:function(e,t,a){e.exports={App:"style_App__2yfvz","cus-row":"style_cus-row__2CMZU",br:"style_br__2ZtZC",row:"style_row__16cFV",Navbar:"style_Navbar__1LbEj"}},80:function(e,t,a){e.exports=a.p+"static/media/logo.dabc6114.svg"},81:function(e,t,a){e.exports=a.p+"static/media/support.91cdacd6.svg"},82:function(e,t,a){e.exports=a.p+"static/media/patient.6cb458f4.svg"},83:function(e,t,a){e.exports=a.p+"static/media/journey.6494b939.svg"},84:function(e,t,a){e.exports=a.p+"static/media/pin.b791b5a5.svg"},85:function(e,t,a){e.exports=a.p+"static/media/world.67a5203a.svg"},86:function(e,t,a){e.exports=a.p+"static/media/loading.b8c03eb9.gif"},89:function(e,t,a){e.exports=a(208)}},[[89,1,2]]]);
//# sourceMappingURL=main.10e48b3a.chunk.js.map