(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{20:function(e,t,n){"use strict";var c=n(1),l=n(16),i=n(3),a=n(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),r=s.NODE_ENV,j=s.REACT_APP_GA_TRACKING_ID;"production"===r&&a.a.initialize(j);var o=function(){var e=Object(i.f)().pathname;return Object(c.useEffect)((function(){"production"===r&&(a.a.set({page:e}),a.a.pageview(e))}),[e]),null},b=n(5),u=n(21),h=[{index:!0,label:"Michael D'Angelo",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],d=n(0),O=Object(c.lazy)((function(){return n.e(4).then(n.t.bind(null,174,7))})),m=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],l=t[1];return Object(d.jsxs)("div",{className:"hamburger-container",children:[Object(d.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(d.jsx)("ul",{children:n?Object(d.jsx)("li",{className:"menu close-menu",children:Object(d.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(d.jsx)("li",{className:"menu open-menu",children:Object(d.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(d.Fragment,{}),children:Object(d.jsx)(O,{right:!0,isOpen:n,children:Object(d.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:e.path,onClick:function(){return l(!n)},children:Object(d.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(d.jsxs)("header",{id:"header",children:[Object(d.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(d.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(d.jsx)("nav",{className:"links",children:Object(d.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:e.path,children:e.label})},e.label)}))})}),Object(d.jsx)(m,{})]})},p=n(24),f=function(){return Object(d.jsxs)("section",{id:"sidebar",children:[Object(d.jsxs)("section",{id:"intro",children:[Object(d.jsx)(b.b,{to:"/",className:"logo",children:Object(d.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(d.jsxs)("header",{children:[Object(d.jsx)("h2",{children:"Cyril THOMAS"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"mailto:cyril.thomas@etu.emse.fr",children:"cyril.thomas@etu.emse.fr"})})]})]}),Object(d.jsxs)("section",{className:"blurb",children:[Object(d.jsx)("h2",{children:"About"}),Object(d.jsx)("p",{children:"Hi, I'm Cyril. I like to build things. I am a student at the Saint-\xc9tienne School of Mines."}),Object(d.jsx)("ul",{className:"actions",children:Object(d.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(d.jsx)(b.b,{to:"/about",className:"button",children:"About Me"}):Object(d.jsx)(b.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(d.jsxs)("section",{id:"footer",children:[Object(d.jsx)(p.a,{}),Object(d.jsxs)("p",{className:"copyright",children:["\xa9 Cyril THOMAS ",Object(d.jsx)(b.b,{to:"/",children:"tartempion.engineer"}),"."]})]})]})},g=function(){var e=Object(i.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},k=function(e){return Object(d.jsxs)(l.b,{children:[Object(d.jsx)(o,{}),Object(d.jsx)(g,{}),Object(d.jsxs)(l.a,{titleTemplate:"%s | Cyril THOMAS",defaultTitle:"cyril THOMAS",defer:!1,children:[e.title&&Object(d.jsx)("title",{children:e.title}),Object(d.jsx)("meta",{name:"description",content:e.description})]}),Object(d.jsxs)("div",{id:"wrapper",children:[Object(d.jsx)(x,{}),Object(d.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(d.jsx)(f,{})]})]})};k.defaultProps={children:null,fullPage:!1,title:null,description:"Cyril THOMAS's personal website."};t.a=k},24:function(e,t,n){"use strict";n(1);var c=n(29),l=n(30),i=n(31),a=n(32),s=n(33),r=n(34),j=n(35),o=n(36),b=[{link:"https://github.com/mldangelo",label:"Github",icon:l.faGithub},{link:"https://facebook.com/md",label:"Facebook",icon:i.faFacebookF},{link:"https://www.instagram.com/dangelosaurus/",label:"Instagram",icon:a.faInstagram},{link:"https://www.linkedin.com/in/michaelldangelo",label:"LinkedIn",icon:s.faLinkedinIn},{link:"https://angel.co/michael-d-angelo",label:"Angel List",icon:r.faAngellist},{link:"https://twitter.com/dangelosaurus",label:"Twitter",icon:j.faTwitter},{link:"mailto:michael.l.dangelo@gmail.com",label:"Email",icon:o.faEnvelope}],u=n(0);t.a=function(){return Object(u.jsx)("ul",{className:"icons",children:b.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.link,children:Object(u.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(1),l=n.n(c),i=n(15),a=n(5),s=n(3),r=n(20),j=(n(52),n(0)),o=Object(c.lazy)((function(){return Promise.all([n.e(2),n.e(8)]).then(n.bind(null,171))})),b=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,178))})),u=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,172))})),h=Object(c.lazy)((function(){return n.e(11).then(n.bind(null,173))})),d=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,177))})),O=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,175))})),m=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,176))})),x=function(){return Object(j.jsx)(a.a,{basename:"",children:Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)(r.a,{}),children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",component:u}),Object(j.jsx)(s.a,{path:"/about",component:o}),Object(j.jsx)(s.a,{path:"/projects",component:d}),Object(j.jsx)(s.a,{path:"/stats",component:m}),Object(j.jsx)(s.a,{path:"/contact",component:b}),Object(j.jsx)(s.a,{path:"/resume",component:O}),Object(j.jsx)(s.a,{component:h,status:404})]})})})},p=function(){return Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(i.hydrate)(Object(j.jsx)(p,{}),f):Object(i.render)(Object(j.jsx)(p,{}),f)}},[[53,1,3]]]);
//# sourceMappingURL=main.51b4cb69.chunk.js.map