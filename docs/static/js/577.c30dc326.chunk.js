"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[577],{3577:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var i=n(2791),r=n(3504),s=n(9202),a=n(184),o=function(e){var t=e.data;return(0,a.jsx)("article",{className:"degree-container",children:(0,a.jsxs)("header",{children:[(0,a.jsx)("h4",{className:"degree",children:window.i18n(t.degree)}),(0,a.jsxs)("p",{className:"school",children:[(0,a.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"education",children:[(0,a.jsx)("div",{className:"link-to",id:"education"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:window.i18n("education")})}),t.map((function(e){return(0,a.jsx)(o,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,u=function(e){var t=e.data;return(0,a.jsxs)("article",{className:"jobs-container",children:[(0,a.jsxs)("header",{children:[(0,a.jsxs)("h4",{children:[(0,a.jsx)("a",{href:t.link,children:window.i18n(t.company)})," - ",window.i18n(t.position)]}),(0,a.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,a.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,a.jsx)("li",{children:window.i18n(e)},e)}))})]})},d=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"experience",children:[(0,a.jsx)("div",{className:"link-to",id:"experience"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:window.i18n("experience")})}),t.map((function(e){return(0,a.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var m=d,h=function(e){var t=e.data;return(0,a.jsxs)("li",{children:[t.desc," ",(0,a.jsx)("a",{href:t.linkAddress,children:t.linkText})]},t.desc)},p=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"achievement",children:[(0,a.jsx)("div",{className:"link-to",id:"achievements"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:window.i18n("achievements")})}),(0,a.jsx)("article",{className:"jobs-container",children:(0,a.jsx)("ul",{className:"points",children:t.map((function(e){return(0,a.jsx)(h,{data:e},e.desc)}))})})]})};p.defaultProps={data:[]};var f=p,g=n(5671),y=n(3144),w=n(136),v=n(7277),b=n(4942),j=n(1413),k=function(e){var t=e.handleClick,n=e.active,i=e.label;return(0,a.jsx)("button",{className:"skillbutton ".concat(n[i]?"skillbutton-active":""),type:"button",onClick:function(){return t(i)},children:i})},x=function(e){var t=e.data,n=e.categories,i=t.category,r=t.competency,s=t.title,o=t.fillRatio,c={background:n.filter((function(e){return i.includes(e.name)})).map((function(e){return e.color}))[0]},l=(0,j.Z)((0,j.Z)({},c),{},{width:"".concat(String(Math.min(100,Math.max(o/5*100,0))),"%")});return(0,a.jsxs)("div",{className:"skillbar clearfix",children:[(0,a.jsx)("div",{className:"skillbar-title",style:c,children:(0,a.jsx)("span",{children:s})}),(0,a.jsx)("div",{className:"skillbar-bar",style:l}),(0,a.jsx)("div",{className:"skill-bar-percent",children:r})]})};x.defaultProps={categories:[]};var N=x,R=function(e){(0,w.Z)(n,e);var t=(0,v.Z)(n);function n(e){var i;return(0,g.Z)(this,n),(i=t.call(this,e)).handleChildClick=function(e){i.setState((function(t){return{buttons:Object.keys(t.buttons).reduce((function(t,n){return(0,j.Z)((0,j.Z)({},t),{},(0,b.Z)({},n,e===n))}),{})}}))},i.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,j.Z)((0,j.Z)({},e),{},(0,b.Z)({},t,!1))}),{Linguistics:!0}),skills:n}}({categories:e.categories,skills:e.skills}),i.state.buttons.Linguistics=!0,i}return(0,y.Z)(n,[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"Linguistics");return this.state.skills.sort((function(e,t){var n=0;return e.fillRatio>t.fillRatio?n=-1:e.fillRatio<t.fillRatio?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return e.category.includes(t)})).map((function(t){return(0,a.jsx)(N,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,a.jsx)(k,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,a.jsxs)("div",{className:"skills",children:[(0,a.jsx)("div",{className:"link-to",id:"skills"}),(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h3",{children:window.i18n("skills")}),(0,a.jsx)("p",{children:"Note: I think these gauges are silly, but everyone seems to have these. Here is a *probably* honest overview of my skills."})]}),(0,a.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,a.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}]),n}(i.Component);R.defaultProps={skills:[],categories:[]};var C=R,Z=function(e){var t=e.data,n=e.last;return(0,a.jsxs)("li",{className:"tool-container",children:[(0,a.jsx)("a",{href:t.link,children:(0,a.jsx)("p",{className:"tool-name",children:t.title})}),!n&&(0,a.jsx)("div",{className:"tool-dot",children:(0,a.jsx)("p",{className:"tool-name",children:" \u2022"})})]})};Z.defaultProps={last:!1};var P=Z,S=function(e){(0,w.Z)(n,e);var t=(0,v.Z)(n);function n(e){var i;return(0,g.Z)(this,n),(i=t.call(this,e)).handleChildClick=function(e){i.setState((function(t){return{buttons:Object.keys(t.buttons).reduce((function(t,n){return(0,j.Z)((0,j.Z)({},t),{},(0,b.Z)({},n,e===n))}),{})}}))},i.state=function(e){var t=e.categories,n=e.tools;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,j.Z)((0,j.Z)({},e),{},(0,b.Z)({},t,!1))}),{Bureautics:!0}),tools:n}}({categories:e.categories,tools:e.tools}),i.state.buttons.Bureautics=!0,i}return(0,y.Z)(n,[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"Bureautics");return this.state.tools.sort((function(e,t){return e.title.localeCompare(t.title)})).filter((function(e){return e.category.includes(t)})).map((function(n,i){return(0,a.jsx)(P,{data:n,last:i===e.state.tools.filter((function(e){return e.category.includes(t)})).length-1},n.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,a.jsx)(k,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,a.jsxs)("div",{className:"tools",children:[(0,a.jsx)("div",{className:"link-to",id:"tools"}),(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h3",{children:window.i18n("tools")}),(0,a.jsx)("p",{children:"Here is a list of some of the tools I already have experience with."})]}),(0,a.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,a.jsxs)("div",{className:"tools",children:[(0,a.jsx)("div",{className:"link-to",id:"tools"}),(0,a.jsx)("ul",{className:"tool-list",children:this.getRows()})]})]})}}]),n}(i.Component);S.defaultProps={tools:[],categories:[]};var M=S,O=function(){return(0,a.jsxs)("div",{className:"references",children:[(0,a.jsx)("div",{className:"link-to",id:"references"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)(r.rU,{to:"/contact",children:(0,a.jsx)("h3",{children:"References are available upon request"})})})]})},A=n(3433),_=[{title:"Logisim",link:"http://www.cburch.com/logisim/",category:["Hardware design"]},{title:"ModelSim",link:"https://eda.sw.siemens.com/en-US/ic/modelsim/",category:["Hardware design"]},{title:"Cadence Virtuoso",link:"https://www.cadence.com/en_US/home/tools/custom-ic-analog-rf-design/circuit-design/virtuoso-analog-design-environment.html",category:["Hardware design"]},{title:"Xilinx Vivado",link:"https://www.xilinx.com/products/design-tools/vivado.html",category:["Hardware design"]},{title:"Synopsys Design Vision",link:"https://www.synopsys.com/implementation-and-signoff/rtl-synthesis-test/dc-ultra.html",category:["Hardware design"]},{title:"EasyEDA",link:"https://easyeda.com/",category:["Hardware design"]},{title:"KiCAD",link:"https://www.kicad.org/",category:["Hardware design"]},{title:"LTSpice XVII",link:"https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html",category:["Hardware design"]},{title:"SimSmith",link:"http://www.ae6ty.com/smith_charts.html",category:["RF design"]},{title:"MiniVNA Tiny",link:"https://www.wimo.com/en/minivna-tiny",category:["RF design"]},{title:"MMANA-GAL",link:"http://gal-ana.de/basicmm/en/",category:["RF design"]},{title:"Fusion 360",link:"https://www.autodesk.com/products/fusion-360/personal",category:["3D Design"]},{title:"MeshMixer",link:"https://www.meshmixer.com/",category:["3D Design"]},{title:"Cura",link:"https://ultimaker.com/fr/software/ultimaker-cura",category:["3D Design"]},{title:"STM32CubeIDE",link:"https://www.st.com/en/development-tools/stm32cubeide.html",category:["Embedded"]},{title:"ARM Keil",link:"https://www.keil.com/",category:["Embedded"]},{title:"MPLabX IDE",link:"https://www.microchip.com/en-us/tools-resources/develop/mplab-x-ide",category:["Embedded"]},{title:"Git",link:"https://git-scm.com/",category:["Teamwork"]},{title:"Excel",link:"https://www.microsoft.com/fr-fr/microsoft-365/excel",category:["Bureautics"]},{title:"Word",link:"https://www.microsoft.com/fr-fr/microsoft-365/word",category:["Bureautics"]},{title:"PowerPoint",link:"https://www.microsoft.com/fr-fr/microsoft-365/powerpoint",category:["Bureautics"]},{title:"OverLeaf",link:"https://fr.overleaf.com/",category:["Bureautics"]}],B=(0,A.Z)(new Set(_.reduce((function(e,t){var n=t.category;return e.concat(n)}),[]))).sort().map((function(e){return{name:e}})),I=[{school:"Lyc\xe9e Fran\xe7ois Couperin, Fontainebleau",degree:"Couperin_degree",link:"https://www.francoiscouperin.fr/",year:"2015 - 2018"},{school:"Lyc\xe9e F\xe9nelon, Paris VI",degree:"Fenelon_degree",link:"https://pia.ac-paris.fr/serail/jcms/s2_1470075/fr/accueil",year:"2018-2020"},{school:"\xc9cole Nationale Sup\xe9rieure des Mines de Saint-\xc9tienne, ISMIN",degree:"EMSE_degree",link:"https://www.mines-stetienne.fr/",year:"2020-2023"}],D=[{company:"unbabel_company",position:"unbabel_position",link:"https://unbabel.com/",daterange:"2017 - Present",points:["unbabel_point0","unbabel_point1"]},{company:"ISM_company",position:"ISM_position",link:"https://ism.univ-amu.fr/en",daterange:"January 2021",points:["ISM_point0","ISM_point1","ISM_point2"]},{company:"PI_company",position:"PI_position",link:"https://www.mines-stetienne.fr/en/research/centres-and-departments/flexible-electronics-department-fel/",daterange:"March 2022 - June 2022",points:["PI_point0","PI_point1","PI_point2"]},{company:"Apple_company",position:"Apple_position",link:"https://www.apple.com/",daterange:"April 2023 - October 2023",points:["Apple_point0","Apple_point1"]}],H=[{desc:"Reached the top 1% of users on ",linkText:"TryHackMe",linkAddress:"https://tryhackme.com/p/BabdCatha"},{desc:"Finished 1st at an ",linkText:"electronics school contest",linkAddress:"https://youtu.be/9F7YG1VSp4Q?t=1620"}],L=[{title:"Javascript",competency:"Beginner",fillRatio:2,category:["Programming languages"]},{title:"C/C++",competency:"Advanced",fillRatio:5,category:["Programming languages"]},{title:"Python",competency:"Advanced",fillRatio:5,category:["Programming languages"]},{title:"CUDA",competency:"Beginner",fillRatio:3,category:["Programming languages"]},{title:"Java for Android",competency:"Capable",fillRatio:4,category:["Programming languages"]},{title:"French",competency:"Mother tongue",fillRatio:5,category:["Linguistics"]},{title:"English",competency:"C1, 990 on the TOEIC",fillRatio:5,category:["Linguistics"]},{title:"German",competency:"B1, but not spoken in a long time",fillRatio:3,category:["Linguistics"]},{title:"Russian",competency:"Between A2 and B1",fillRatio:3,category:["Linguistics"]},{title:"Mandarin chinese",competency:"Beginner",fillRatio:1,category:["Linguistics"]},{title:"STM32 development",competency:"Capable",fillRatio:4,category:["Microcontrollers"]},{title:"Arduino and ESP32",competency:"Capable",fillRatio:4,category:["Microcontrollers"]},{title:"8051 assembly",competency:"Beginner",fillRatio:3,category:["Programming languages","Microcontrollers"]},{title:"VHDL",competency:"Beginner",fillRatio:3,category:["Hardware"]},{title:"Analog electronics",competency:"Capable",fillRatio:3,category:["Hardware"]},{title:"Radiofrequency communication",competency:"Beginner",fillRatio:2,category:["Hardware"]},{title:"Verification using SystemVerilog",competency:"Beginner",fillRatio:2,category:["Hardware"]},{title:"RISC-V Architecture",competency:"Beginner",fillRatio:3,category:["Hardware"]}].map((function(e){return(0,j.Z)((0,j.Z)({},e),{},{category:e.category.sort()})})),E=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],T=(0,A.Z)(new Set(L.reduce((function(e,t){var n=t.category;return e.concat(n)}),[]))).sort().map((function(e,t){return{name:e,color:E[t]}})),F=["education","experience","achievements","skills","tools","references"],V=function(){return(0,a.jsx)(s.Z,{title:"Resume",description:"Cyril Thomas's Resume.",children:(0,a.jsxs)("article",{className:"post",id:"resume",children:[(0,a.jsx)("header",{children:(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h2",{"data-testid":"heading",children:(0,a.jsx)(r.rU,{to:".",children:window.i18n("resume")})}),(0,a.jsx)("div",{className:"link-container",children:F.map((function(e){return(0,a.jsx)("h4",{children:(0,a.jsx)("a",{href:"#".concat(e.toLowerCase()),children:window.i18n(e)})},e)}))})]})}),(0,a.jsx)(l,{data:I}),(0,a.jsx)(m,{data:D}),(0,a.jsx)(f,{data:H}),(0,a.jsx)(C,{skills:L,categories:T}),(0,a.jsx)(M,{tools:_,categories:B}),(0,a.jsx)(O,{})]})})}},4942:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(9142);function r(e,t,n){return(t=(0,i.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},9199:function(e,t,n){function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return i}})},1413:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(4942);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},3433:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(907);var r=n(9199),s=n(181);function a(e){return function(e){if(Array.isArray(e))return(0,i.Z)(e)}(e)||(0,r.Z)(e)||(0,s.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=577.c30dc326.chunk.js.map