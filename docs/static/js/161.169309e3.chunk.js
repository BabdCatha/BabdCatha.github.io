(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[161],{7161:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(2791);var i=n(3504),r=n(9202),s=n(7892),a=n.n(s),u=n(184),o=function(t){var e=t.data;return(0,u.jsx)("div",{className:"cell-container",children:(0,u.jsxs)("article",{className:"mini-post",children:[(0,u.jsxs)("header",{children:[(0,u.jsx)("h3",{children:(0,u.jsx)("a",{href:e.link,children:e.title})}),(0,u.jsx)("time",{className:"published",children:a()(e.date).format("MMMM, YYYY")})]}),(0,u.jsx)("a",{href:e.link,className:"image",children:(0,u.jsx)("img",{src:"".concat("").concat(e.image),alt:e.title})}),(0,u.jsx)("div",{className:"description",children:(0,u.jsx)("p",{children:e.desc})})]})})},c=[{title:"Hitori - \u4e00\u4eba\u3067",subtitle:"\u4e00\u4eba\u3067",image:"/images/projects/hitori.jpg",date:"2022-01-01",link:"https://youtu.be/9F7YG1VSp4Q?t=1620",desc:"Hands free cooking assistant."},{title:"DIY Kitchen scale",subtitle:"",image:"/images/projects/kitchenScale.jpg",date:"2020-03-01",link:"https://www.instructables.com/3D-Printed-Kitchen-Scale-Using-an-ESP8266/",desc:"A 3D printed DIY kitchen scale"},{title:"Geiger counter",subtitle:"",image:"/images/projects/Geiger.png",date:"2019-10-01",link:"",desc:"A DIY IoT Geiger counter"}],h=function(){return(0,u.jsx)(r.Z,{title:"Projects",description:"Learn about my projects.",children:(0,u.jsxs)("article",{className:"post",id:"projects",children:[(0,u.jsx)("header",{children:(0,u.jsxs)("div",{className:"title",children:[(0,u.jsx)("h2",{"data-testid":"heading",children:(0,u.jsx)(i.rU,{to:"/projects",children:"Projects"})}),(0,u.jsx)("p",{children:"A selection of projects that I'm not too ashamed of"})]})}),(0,u.jsx)("div",{className:"row",children:c.map((function(t){return(0,u.jsx)("div",{className:"col-4 col-6-medium col-12-small",children:(0,u.jsx)(o,{data:t},t.title)})}))})]})})}},7892:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",u="day",o="week",c="month",h="quarter",l="year",d="date",f="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},M={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+g(i,2,"0")+":"+g(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,c),s=n-r<0,a=e.clone().add(i+(s?-1:1),c);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:l,w:o,d:u,D:d,h:a,m:s,s:r,ms:i,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",D={};D[v]=p;var y=function(t){return t instanceof x},S=function t(e,n,i){var r;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(r=s),n&&(D[s]=n,r=s);var a=e.split("-");if(!r&&a.length>1)return t(a[0])}else{var u=e.name;D[u]=e,r=u}return!i&&r&&(v=r),r||!i&&v},j=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new x(n)},w=M;w.l=S,w.i=y,w.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function p(t){this.$L=S(t.locale,null,!0),this.parse(t)}var g=p.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match($);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return w},g.isValid=function(){return!(this.$d.toString()===f)},g.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return j(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<j(t)},g.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,i=!!w.u(e)||e,h=w.p(t),f=function(t,e){var r=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(u)},$=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,p=this.$M,g=this.$D,M="set"+(this.$u?"UTC":"");switch(h){case l:return i?f(1,0):f(31,11);case c:return i?f(1,p):f(0,p+1);case o:var v=this.$locale().weekStart||0,D=(m<v?m+7:m)-v;return f(i?g-D:g+(6-D),p);case u:case d:return $(M+"Hours",0);case a:return $(M+"Minutes",1);case s:return $(M+"Seconds",2);case r:return $(M+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,o=w.p(t),h="set"+(this.$u?"UTC":""),f=(n={},n[u]=h+"Date",n[d]=h+"Date",n[c]=h+"Month",n[l]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[r]=h+"Seconds",n[i]=h+"Milliseconds",n)[o],$=o===u?this.$D+(e-this.$W):e;if(o===c||o===l){var m=this.clone().set(d,1);m.$d[f]($),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f]($);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[w.p(t)]()},g.add=function(i,h){var d,f=this;i=Number(i);var $=w.p(h),m=function(t){var e=j(f);return w.w(e.date(e.date()+Math.round(t*i)),f)};if($===c)return this.set(c,this.$M+i);if($===l)return this.set(l,this.$y+i);if($===u)return m(1);if($===o)return m(7);var p=(d={},d[s]=e,d[a]=n,d[r]=t,d)[$]||1,g=this.$d.getTime()+i*p;return w.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=w.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,h=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].slice(0,s)},l=function(t){return w.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:w.s(u+1,2,"0"),MMM:h(n.monthsShort,u,c,3),MMMM:h(c,u),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:w.s(s,2,"0"),h:l(1),hh:l(2),a:d(s,a,!0),A:d(s,a,!1),m:String(a),mm:w.s(a,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:r};return i.replace(m,(function(t,e){return e||$[t]||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(i,d,f){var $,m=w.p(d),p=j(i),g=(p.utcOffset()-this.utcOffset())*e,M=this-p,v=w.m(this,p);return v=($={},$[l]=v/12,$[c]=v,$[h]=v/3,$[o]=(M-g)/6048e5,$[u]=(M-g)/864e5,$[a]=M/n,$[s]=M/e,$[r]=M/t,$)[m]||M,f?v:w.a(v)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return D[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=S(t,e,!0);return i&&(n.$L=i),n},g.clone=function(){return w.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),O=x.prototype;return j.prototype=O,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",u],["$M",c],["$y",l],["$D",d]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,x,j),t.$i=!0),j},j.locale=S,j.isDayjs=y,j.unix=function(t){return j(1e3*t)},j.en=D[v],j.Ls=D,j.p={},j}()}}]);
//# sourceMappingURL=161.169309e3.chunk.js.map