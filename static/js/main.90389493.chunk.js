(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{30:function(e,t,c){},37:function(e,t,c){},56:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(32),r=c.n(s),a=(c(37),c(11)),l=c.n(a),j=c(15),o=c(5),u=c(10),b=c.n(u),d=(c(56),c(8)),h=c(9),O=c(2),x=c(0);var m=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(O.e)(),r=new URLSearchParams(s.search).get("id");function a(){return(a=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://backendmovies.herokuapp.com/api/movies/info/".concat(r));case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){a.apply(this,arguments)}()}),[]),null===c?Object(x.jsxs)("div",{className:"loading-spinner-block",children:[Object(x.jsx)(d.a,{icon:h.d,size:"5x",spin:!0}),Object(x.jsx)("h2",{children:"Chargement du film"})]}):Object(x.jsx)("section",{children:Object(x.jsxs)("article",{className:"movie-block",children:[Object(x.jsx)("div",{className:"block-img",children:Object(x.jsx)("img",{src:c._img,alt:c.title+"picture",className:"movie-img"})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:c.title}),Object(x.jsx)("p",{children:c.synopsis})]}),Object(x.jsx)("div",{children:Object(x.jsx)("iframe",{src:"https://www.youtube-nocookie.com/embed/"+c.trailer,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]},c._id)})};var p=function(){return Object(x.jsx)(m,{})},f=c(4);c(62);var v=function(){return Object(x.jsxs)("header",{className:"header",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("em",{children:"Movies App"})}),Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(f.b,{to:"/",className:"link",onClick:function(e){},children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)(f.b,{to:"/search",className:"link",children:"Search"})})]})})]})};c(63);var g=function(){var e=["January","February","March","April","May","June","July","August","September","October","November","December"][(new Date).getMonth()],t=(new Date).getFullYear();return Object(x.jsx)("footer",{className:"footer",children:Object(x.jsxs)("p",{children:["Created by Ilyas Boukhechem | ",e+" "+t," "]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))},y=(c(30),c(16)),w=c.n(y),N=(c(31),c(64),c(18));var S=function(e){for(var t=e.moviesPerPage,c=e.totalMovies,n=e.paginate,i=[],s=0;s<=Math.ceil(c/t);s++)i.push(s);return i.shift(),Object(x.jsx)("article",{className:"block-pagination",children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(N.a,{to:"/#",children:Object(x.jsx)("button",{onClick:function(){return n(1)},children:Object(x.jsx)(d.a,{icon:h.a})})})}),i.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)(N.a,{to:"/#",children:Object(x.jsx)("button",{onClick:function(){return n(e)},children:e})})},e)})),Object(x.jsx)("li",{children:Object(x.jsx)(N.a,{to:"/#",children:Object(x.jsx)("button",{onClick:function(){return n(i[i.length-1])},children:Object(x.jsx)(d.a,{icon:h.b})})})})]})})};var C=function(){w.a.init({duration:1e3});var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(1),r=Object(o.a)(s,2),a=r[0],u=r[1],O=Object(n.useState)(4),m=Object(o.a)(O,2),p=m[0],v=m[1],g=a*p,k=g-p,y=c.slice(k,g);return console.log(c),Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://backendmovies.herokuapp.com/api/movies/");case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),0===c.length?Object(x.jsxs)("div",{className:"loading-spinner-block",children:[Object(x.jsx)(d.a,{icon:h.d,size:"5x",spin:!0}),Object(x.jsx)("h2",{children:"Chargements des films"})]}):Object(x.jsxs)("section",{id:"Home",children:[Object(x.jsx)("ul",{className:"block-movies",children:y.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)("div",{id:"movie","data-aos":"zoom-in",children:Object(x.jsxs)("div",{className:"picture",children:[Object(x.jsx)("div",{className:"movie-title-block",children:Object(x.jsx)("h2",{children:Object(x.jsxs)(f.b,{to:"../resume/?id="+e._id,children:["R\xe9sum\xe9 du film: ",e.title]})})}),Object(x.jsx)("img",{src:e._img,alt:e.title+"picture"})]})})},e._id)}))}),Object(x.jsx)(S,{moviesPerPage:p,totalMovies:c.length,paginate:function(e){return u(e)},setMoviesPerPage:v})]})};var P=function(){return Object(x.jsx)(C,{})};c(65);var M=function(){w.a.init({duration:1e3});var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],i=t[1],s=Object(O.e)(),r=new URLSearchParams(s.search).get("result")||void 0;return console.log(r),Object(n.useEffect)((function(){b.a.get("https://backendmovies.herokuapp.com/api/movies/result/?search=".concat(r,"\n          ")).then((function(e){i(e.data)}))}),[],function(){var e=document.getElementById("question");if(0!==c.length)return e.style.display="none"}(),function(){var e=document.getElementById("result-search");if(0!==c.length)return e.style.display="block"}()),Object(x.jsxs)("section",{id:"block-search",children:[Object(x.jsx)("h2",{id:"question",className:"question",children:"Quels films voulez vous consulter ?"}),Object(x.jsxs)("h2",{id:"result-search",className:"result-search",children:['Vous-avez recherchez : "',Object(x.jsx)("em",{children:r}),'"']}),Object(x.jsxs)("form",{role:"search",onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.searchInput.value;window.history.pushState({},"","#/search?result="+t),window.location.reload()},children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{}),Object(x.jsx)("input",{id:"searchInput",type:"text",name:"search",minLength:"2",required:!0})]}),Object(x.jsx)("button",{type:"submit",children:Object(x.jsx)(d.a,{icon:h.c})})]}),Object(x.jsx)("ul",{children:c.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsxs)("div",{id:"movie","data-aos":"fade-down",children:[Object(x.jsxs)("div",{className:"picture",children:[Object(x.jsx)("img",{src:e._img,alt:e.title+"picture"}),Object(x.jsx)("div",{className:"movie-title-block",children:Object(x.jsx)("h2",{children:Object(x.jsxs)(f.b,{to:"../resume/?id="+e._id,children:["R\xe9sum\xe9 du film: ",e.title]})})})]}),Object(x.jsx)("div",{children:Object(x.jsx)("h3",{children:e.title})})]})},e._id)}))})]})};var _=function(){return Object(x.jsx)(M,{})};r.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsxs)(f.a,{children:[Object(x.jsx)(v,{}),Object(x.jsxs)(O.c,{children:[Object(x.jsx)(O.a,{exact:!0,path:"/",element:Object(x.jsx)(P,{})}),Object(x.jsx)(O.a,{exact:!0,path:"/resume",element:Object(x.jsx)(p,{})}),Object(x.jsx)(O.a,{exact:!0,path:"/search",element:Object(x.jsx)(_,{})})]}),Object(x.jsx)(g,{})]})}),document.getElementById("root")),k()}},[[66,1,2]]]);
//# sourceMappingURL=main.90389493.chunk.js.map