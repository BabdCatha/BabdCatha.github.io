"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[577],{3577:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var r=n(2791),i=n(3504),o=n(9202),a=n(184),c=function(e){var t=e.data;return(0,a.jsx)("article",{className:"degree-container",children:(0,a.jsxs)("header",{children:[(0,a.jsx)("h4",{className:"degree",children:t.degree}),(0,a.jsxs)("p",{className:"school",children:[(0,a.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"education",children:[(0,a.jsx)("div",{className:"link-to",id:"education"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,a.jsx)(c,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return(0,a.jsxs)("article",{className:"jobs-container",children:[(0,a.jsxs)("header",{children:[(0,a.jsxs)("h4",{children:[(0,a.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,a.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,a.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,a.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"experience",children:[(0,a.jsx)("div",{className:"link-to",id:"experience"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,a.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var f=d,h=function(e){var t=e.data;return(0,a.jsxs)("li",{children:[t.desc," ",(0,a.jsx)("a",{href:t.linkAddress,children:t.linkText})]},t)},p=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"achievement",children:[(0,a.jsx)("div",{className:"link-to",id:"achievements"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Achievements"})}),(0,a.jsx)("article",{className:"jobs-container",children:(0,a.jsx)("ul",{className:"points",children:t.map((function(e){return(0,a.jsx)(h,{data:e})}))})})]})};p.defaultProps={data:[]};var m=p,y=n(5671),g=n(3144),b=n(136),j=n(7277),v=n(4942),x=n(1413),k=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,a.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},w=function(e){var t=e.data,n=e.categories,r=t.category,i=t.competency,o=t.title,c=t.fillRatio,s={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},l=(0,x.Z)((0,x.Z)({},s),{},{width:"".concat(String(Math.min(100,Math.max(c/5*100,0))),"%")});return(0,a.jsxs)("div",{className:"skillbar clearfix",children:[(0,a.jsx)("div",{className:"skillbar-title",style:s,children:(0,a.jsx)("span",{children:o})}),(0,a.jsx)("div",{className:"skillbar-bar",style:l}),(0,a.jsx)("div",{className:"skill-bar-percent",children:i})]})};w.defaultProps={categories:[]};var Z=w,N=function(e){(0,b.Z)(n,e);var t=(0,j.Z)(n);function n(e){var r;return(0,y.Z)(this,n),(r=t.call(this,e)).handleChildClick=function(e){r.setState((function(t){return{buttons:Object.keys(t.buttons).reduce((function(t,n){return(0,x.Z)((0,x.Z)({},t),{},(0,v.Z)({},n,e===n))}),{})}}))},r.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,x.Z)((0,x.Z)({},e),{},(0,v.Z)({},t,!1))}),{Linguistics:!0}),skills:n}}({categories:e.categories,skills:e.skills}),r}return(0,g.Z)(n,[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"Linguistics");return this.state.skills.sort((function(e,t){var n=0;return e.fillRatio>t.fillRatio?n=-1:e.fillRatio<t.fillRatio?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return e.category.includes(t)})).map((function(t){return(0,a.jsx)(Z,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,a.jsx)(k,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,a.jsxs)("div",{className:"skills",children:[(0,a.jsx)("div",{className:"link-to",id:"skills"}),(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h3",{children:"Skills"}),(0,a.jsx)("p",{children:"Note: I think these gauges are silly, but everyone seems to have these. Here is a *probably* honest overview of my skills."})]}),(0,a.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,a.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}]),n}(r.Component);N.defaultProps={skills:[],categories:[]};var R=N,O=function(e){var t=e.data,n=e.last;return(0,a.jsxs)("li",{className:"tool-container",children:[(0,a.jsx)("a",{href:t.link,children:(0,a.jsx)("p",{className:"tool-name",children:t.title})}),!n&&(0,a.jsx)("div",{className:"tool-dot",children:(0,a.jsx)("p",{className:"tool-name",children:" \u2022"})})]})};O.defaultProps={last:!1};var P=O,C=function(e){(0,b.Z)(n,e);var t=(0,j.Z)(n);function n(e){var r;return(0,y.Z)(this,n),(r=t.call(this,e)).handleChildClick=function(e){r.setState((function(t){return{buttons:Object.keys(t.buttons).reduce((function(t,n){return(0,x.Z)((0,x.Z)({},t),{},(0,v.Z)({},n,e===n))}),{})}}))},r.state=function(e){var t=e.categories,n=e.tools;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,x.Z)((0,x.Z)({},e),{},(0,v.Z)({},t,!1))}),{Bureautics:!0}),tools:n}}({categories:e.categories,tools:e.tools}),r}return(0,g.Z)(n,[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"Bureautics");return this.state.tools.sort((function(e,t){return e.title.localeCompare(t.title)})).filter((function(e){return e.category.includes(t)})).map((function(n,r){return(0,a.jsx)(P,{data:n,last:r===e.state.tools.filter((function(e){return e.category.includes(t)})).length-1},n.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,a.jsx)(k,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,a.jsxs)("div",{className:"tools",children:[(0,a.jsx)("div",{className:"link-to",id:"tools"}),(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h3",{children:"Tools known"}),(0,a.jsx)("p",{children:"Here is a list of some of the tools I already have experience with."})]}),(0,a.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,a.jsxs)("div",{className:"tools",children:[(0,a.jsx)("div",{className:"link-to",id:"tools"}),(0,a.jsx)("ul",{className:"tool-list",children:this.getRows()})]})]})}}]),n}(r.Component);C.defaultProps={tools:[],categories:[]};var S=C,B=function(){return(0,a.jsxs)("div",{className:"references",children:[(0,a.jsx)("div",{className:"link-to",id:"references"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)(i.rU,{to:"/contact",children:(0,a.jsx)("h3",{children:"References are available upon request"})})})]})},E=n(3433),M=[{title:"Logisim",link:"http://www.cburch.com/logisim/",category:["Hardware design"]},{title:"ModelSim",link:"https://eda.sw.siemens.com/en-US/ic/modelsim/",category:["Hardware design"]},{title:"Excel",link:"https://www.microsoft.com/fr-fr/microsoft-365/excel",category:["Bureautics"]}],A=(0,E.Z)(new Set(M.reduce((function(e,t){var n=t.category;return e.concat(n)}),[]))).sort().map((function(e){return{name:e}})),I=[{school:"Lyc\xe9e Fran\xe7ois Couperin, Fontainebleau",degree:"Baccalaur\xe9at Scientifique, specialty in Computer sciences",link:"https://www.francoiscouperin.fr/",year:"2015 - 2018"},{school:"Lyc\xe9e F\xe9nelon, Paris VI",degree:"Preparatory class for the Grandes \xc9coles, MPSI then MP*",link:"https://pia.ac-paris.fr/serail/jcms/s2_1470075/fr/accueil",year:"2018-2020"},{school:"\xc9cole Nationale Sup\xe9rieure des Mines de Saint-\xc9tienne, ISMIN",degree:"Engineering degree specialized in Microelectronics and Computer Sciences",link:"https://www.mines-stetienne.fr/",year:"2020-2023"}],T=[{company:"Unbabel",position:"Freelance English to French translator",link:"https://unbabel.com/",daterange:"2017 - Present",points:["Translated various types of documents and texts, coming from a large variety of companies and sectors","Started as a simple translator, and the moved to a Senior Editor, in charge of checking translations before they are sent to the client"]},{company:"Institute of movement sciences",position:"Internship",link:"https://ism.univ-amu.fr/en",daterange:"January 2021",points:["Worked on designing and builing a remote-controlled helium-powered low-noise drone, designed to be used in a theater play","In charge of designing a 3D model of the drone, and then creating a low-weight PCB capable of controlling the required motors and sensors","Used a Raspberry Pi Zero and an Xbox controller to create an easy way to control the drone"]},{company:"Saint-\xc9tienne School of Mines - Flexible electronics laboratory",position:"Industrial project",link:"https://www.mines-stetienne.fr/en/research/centres-and-departments/flexible-electronics-department-fel/",daterange:"March 2022 - June 2022",points:["Worked on creating a prototype for a connected weareable ECG monitor","As a team of two students, we created a rigid proof of concept for this device using an STM32WB55 microcontroller","I mainly worked on the code and the component's selection, and managed to get the average power consumption of the whole device from 10 mW down to 140 \xb5W"]}],L=[{desc:"Reached the top 1% of users on ",linkText:"TryHackMe",linkAddress:"https://tryhackme.com/p/BabdCatha"},{desc:"Finished 1st at an ",linkText:"electronics school contest",linkAddress:"https://youtu.be/9F7YG1VSp4Q?t=1620"}],_=[{title:"Javascript",competency:"Beginner",fillRatio:2,category:["Programming languages"]},{title:"C/C++",competency:"Advanced",fillRatio:5,category:["Programming languages"]},{title:"Python",competency:"Advanced",fillRatio:5,category:["Programming languages"]},{title:"CUDA",competency:"Beginner",fillRatio:3,category:["Programming languages"]},{title:"Java for Android",competency:"Capable",fillRatio:4,category:["Programming languages"]},{title:"French",competency:"Mother tongue",fillRatio:5,category:["Linguistics"]},{title:"English",competency:"C1, 990 on the TOEIC",fillRatio:5,category:["Linguistics"]},{title:"German",competency:"B1, but not spoken in a long time",fillRatio:3,category:["Linguistics"]},{title:"Russian",competency:"Between A2 and B1",fillRatio:3,category:["Linguistics"]},{title:"Mandarin chinese",competency:"Beginner",fillRatio:1,category:["Linguistics"]},{title:"STM32 development",competency:"Capable",fillRatio:4,category:["Microcontrollers"]},{title:"Arduino and ESP32",competency:"Capable",fillRatio:4,category:["Microcontrollers"]},{title:"8051 assembly",competency:"Beginner",fillRatio:3,category:["Programming languages","Microcontrollers"]},{title:"VHDL",competency:"Beginner",fillRatio:3,category:["Hardware"]},{title:"Analog electronics",competency:"Capable",fillRatio:3,category:["Hardware"]},{title:"Radiofrequency communication",competency:"Beginner",fillRatio:2,category:["Hardware"]},{title:"RISC-V Architecture",competency:"Beginner",fillRatio:3,category:["Hardware"]}].map((function(e){return(0,x.Z)((0,x.Z)({},e),{},{category:e.category.sort()})})),H=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],F=(0,E.Z)(new Set(_.reduce((function(e,t){var n=t.category;return e.concat(n)}),[]))).sort().map((function(e,t){return{name:e,color:H[t]}})),D=["Education","Experience","Achievements","Skills","Tools","References"],U=function(){return(0,a.jsx)(o.Z,{title:"Resume",description:"Cyril Thomas's Resume.",children:(0,a.jsxs)("article",{className:"post",id:"resume",children:[(0,a.jsx)("header",{children:(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h2",{"data-testid":"heading",children:(0,a.jsx)(i.rU,{to:"resume",children:"Resume"})}),(0,a.jsx)("div",{className:"link-container",children:D.map((function(e){return(0,a.jsx)("h4",{children:(0,a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,a.jsx)(l,{data:I}),(0,a.jsx)(f,{data:T}),(0,a.jsx)(m,{data:L}),(0,a.jsx)(R,{skills:_,categories:F}),(0,a.jsx)(S,{tools:M,categories:A}),(0,a.jsx)(B,{})]})})}},7326:function(e,t,n){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},5671:function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},3144:function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,{Z:function(){return i}})},7277:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(1120),i=n(8814),o=n(1002),a=n(7326);function c(e,t){if(t&&("object"===(0,o.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,a.Z)(e)}function s(e){var t=(0,i.Z)();return function(){var n,i=(0,r.Z)(e);if(t){var o=(0,r.Z)(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return c(this,n)}}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1120:function(e,t,n){function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,{Z:function(){return r}})},136:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(9611);function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,r.Z)(e,t)}},8814:function(e,t,n){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}n.d(t,{Z:function(){return r}})},9199:function(e,t,n){function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},9611:function(e,t,n){function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}n.d(t,{Z:function(){return r}})},3433:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(907);var i=n(9199),o=n(181);function a(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||(0,i.Z)(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1002:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=577.5fcae4d4.chunk.js.map