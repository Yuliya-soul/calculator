!function(e){function t(t){for(var a,o,i=t[0],c=t[1],u=t[2],h=0,d=[];h<i.length;h++)o=i[h],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(s&&s(t);d.length;)d.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={1:0},l=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=c;l.push([126,2]),n()}({126:function(e,t,n){n(127),e.exports=n(325)},313:function(e,t,n){},325:function(e,t,n){"use strict";n.r(t);n(313),n.p;var a=n(0),r=n.n(a),l=n(125),o=(n(318),n(319),n(320),n(124),n(49));function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function h(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?m(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Promise.resolve([{MSRP:35e3,VehicleName:"Toyota",MonthlyPayment:368,taxes:100,DealerPhoneNumber:"617-564-3254",DealerRating:100}]).then((function(e){var t=JSON.stringify(e[0]);localStorage.setItem("myKey",t)})).catch((function(e){return console.log(e)}));var f,C,b,y=JSON.parse(localStorage.getItem("myKey")),v={MSRP:y.MSRP,taxes:220104}.MSRP,E=v/4,S=(b="Credit score value",(C="f")in(f={c:"Down Payment",f:"Monthly payment loan",t:"Trade-In value",z:"Home Zip Code",a:"APR %"})?Object.defineProperty(f,C,{value:b,enumerable:!0,configurable:!0,writable:!0}):f[C]=b,f);function k(e){return e.downPayment<=E&&e.downPayment>=0?r.a.createElement("p",null):r.a.createElement("p",null,"Change the value.It can’t be greater than ",E," $ or less then 0")}function w(e){return e.tradeIn<=E&&e.tradeIn>=0?r.a.createElement("p",null):r.a.createElement("p",null,"Change the value.It can’t be greater than ",E," $ or less then 0")}var N=function(e){function t(e){var n;return c(this,t),(n=h(this,d(t).call(this,e))).handleChange=n.handleChange.bind(m(n)),n}return g(t,e),s(t,[{key:"handleChange",value:function(e){this.props.onTemperatureChange(e.target.value)}},{key:"render",value:function(){var e=this.props.temperature,t=this.props.scale;return r.a.createElement("fieldset",null,r.a.createElement("legend",null," ",S[t],":"),r.a.createElement("input",{value:e,onChange:this.handleChange})," ",r.a.createElement("div",{className:"btn-search1"}," ",r.a.createElement("div",{className:"speech",id:"speech"},"$")))}}]),t}(r.a.Component),P=function(e){function t(e){var n;return c(this,t),(n=h(this,d(t).call(this,e))).handleChange=n.handleChange.bind(m(n)),n}return g(t,e),s(t,[{key:"handleChange",value:function(e){this.props.onTemperatureChange(e.target.value)}},{key:"render",value:function(){var e=this.props.temperature,t=this.props.scale;return r.a.createElement("fieldset",null,r.a.createElement("legend",null," ",S[t],":"),r.a.createElement("input",{value:e,onChange:this.handleChange}))}}]),t}(r.a.Component),L=function(e){function t(e){var n;return c(this,t),(n=h(this,d(t).call(this,e))).handleChange=n.handleChange.bind(m(n)),n}return g(t,e),s(t,[{key:"handleChange",value:function(e){this.props.onTemperatureChange(e.target.value)}},{key:"render",value:function(){var e=this.props.mileages;return r.a.createElement("label",null,r.a.createElement("h3",null,"Mileages:"),r.a.createElement("select",{value:e,onChange:this.handleChange},r.a.createElement("option",{value:"10000"},"10 000"),r.a.createElement("option",{value:"12000"},"12 000"),r.a.createElement("option",{value:"15000"},"15 000")))}}]),t}(r.a.Component),T=function(e){function t(e){var n;return c(this,t),(n=h(this,d(t).call(this,e))).handleChange=n.handleChange.bind(m(n)),n}return g(t,e),s(t,[{key:"handleChange",value:function(e){this.props.onTemperatureChange1(e.target.value)}},{key:"render",value:function(){var e=this.props.termlease;return r.a.createElement("label",null,r.a.createElement("h3",null,"Terms:"),r.a.createElement("select",{value:e,onChange:this.handleChange},r.a.createElement("option",{value:"24"},"24"),r.a.createElement("option",{value:"36"},"36"),r.a.createElement("option",{value:"48"},"48")))}}]),t}(r.a.Component),I=function(e){function t(e){var n;return c(this,t),(n=h(this,d(t).call(this,e))).handleChange=n.handleChange.bind(m(n)),n}return g(t,e),s(t,[{key:"handleChange",value:function(e){this.props.onTemperatureChange1(e.target.value)}},{key:"render",value:function(){var e=this.props.creditScoreLease;return r.a.createElement("label",null,r.a.createElement("h3",null,"Credit Score:"),r.a.createElement("select",{value:e,onChange:this.handleChange},r.a.createElement("option",{value:"600"},"600"),r.a.createElement("option",{value:"650"},"650"),r.a.createElement("option",{value:"700"},"700"),r.a.createElement("option",{value:"750"},"750"),r.a.createElement("option",{value:"800"},"800"),r.a.createElement("option",{value:"850"},"850"),r.a.createElement("option",{value:"900"},"900")))}}]),t}(r.a.Component);function M(e){return r.a.createElement("h3",{className:"results"},"Welcome to leasing calculator")}function O(e){return r.a.createElement("h3",{className:"results"},"Welcome to loan calculator")}function j(e){return e.isLoggedIn?r.a.createElement(M,null):r.a.createElement(O,null)}function R(e){return r.a.createElement("button",{onClick:e.onClick},"Leasing")}function _(e){return r.a.createElement("button",{onClick:e.onClick},"Loan")}function D(e){var t;return e>=750&&(t=.95),e>=700&e<750&&(t=1),e>=640&e<700&&(t=1.05),e<640&&(t=1.2),t}var V=function(e){function t(e){var n;return c(this,t),(n=h(this,d(t).call(this,e))).handleDownPaymentChange=n.handleDownPaymentChange.bind(m(n)),n.handleTradingChange=n.handleTradingChange.bind(m(n)),n.handleZipChange=n.handleZipChange.bind(m(n)),n.handleAprChange=n.handleAprChange.bind(m(n)),n.handleCreditScoreChange=n.handleCreditScoreChange.bind(m(n)),n.handleScoreValueChange=n.handleScoreValueChange.bind(m(n)),n.handleMiliagesChange=n.handleMiliagesChange.bind(m(n)),n.handleTermleaseChange=n.handleTermleaseChange.bind(m(n)),n.handleCreditScoreLeaseChange=n.handleCreditScoreLeaseChange.bind(m(n)),n.handleLeasingResultChange=n.handleLeasingResultChange.bind(m(n)),n.handleLoanResultChange=n.handleLoanResultChange.bind(m(n)),n.handleToggleClick=n.handleToggleClick.bind(m(n)),n.handleHideClick=n.handleHideClick.bind(m(n)),n.handleLoggedInClick=n.handleLoggedInClick.bind(m(n)),n.handleShowClick=n.handleShowClick.bind(m(n)),n.handleLoginClick=n.handleLoginClick.bind(m(n)),n.handleLogoutClick=n.handleLogoutClick.bind(m(n)),n.state={downPayment:"0",scale:"c",tradeIn:"0",zipCode:"220002",apr:"1",term:"24",CreditScoreChange:"750",creditSV:"0.95",loading:!0,infoCardData:"0",mileages:"12000",termlease:"36",creditScoreLease:"750",leasingResult:"0",loanResult:"0",showWarning:!0,hide:"hide",isLoggedIn:!1,show:"show",mochData:[]},n}return g(t,e),s(t,[{key:"handleDownPaymentChange",value:function(e){e>=0&&this.setState({scale:"c",downPayment:e})}},{key:"handleScoreValueChange",value:function(e){this.setState({scale:"f",creditSV:e})}},{key:"handleTradingChange",value:function(e){e>=0&&this.setState({scale:"t",tradeIn:e})}},{key:"handleZipChange",value:function(e){this.setState({scale:"z",zipCode:e})}},{key:"handleZipChange",value:function(e){this.setState({scale:"z",zipCode:e})}},{key:"handleAprChange",value:function(e){this.setState({scale:"a",apr:e})}},{key:"handleAprClick",value:function(e){this.setState({scale:"a",apr:e})}},{key:"handleCreditScoreChange",value:function(e){this.setState({scale:"a",CreditScoreChange:e})}},{key:"handleCreditScoreChangeValue",value:function(e){this.setState({scale:"a",creditSV:e})}},{key:"handleScoreValueChange",value:function(e){this.setState({scale:"f",temperature:e})}},{key:"handleMiliagesChange",value:function(e){this.setState({mileages:e})}},{key:"handleTermleaseChange",value:function(e){this.setState({termlease:e})}},{key:"handleCreditScoreLeaseChange",value:function(e){this.setState({creditScoreLease:e})}},{key:"handleLeasingResultChange",value:function(e){this.setState({leasingResult:e})}},{key:"handleLoanResultChange",value:function(e){this.setState({loanResult:e})}},{key:"handleToggleClick",value:function(){this.setState((function(e){return{showWarning:!e.showWarning}}))}},{key:"handleHideClick",value:function(e){this.setState({hide:e})}},{key:"handleShowClick",value:function(e){this.setState({show:e})}},{key:"handleLoggedInClick",value:function(e){this.setState({isLoggedIn:e})}},{key:"handleLoginClick",value:function(){this.setState({isLoggedIn:!0})}},{key:"handleLogoutClick",value:function(){this.setState({isLoggedIn:!1})}},{key:"componentDidMount",value:function(){var e=this;new Promise((function(e){return setTimeout((function(){return e()}),2500)})).then((function(){return e.setState({loading:!1})}))}},{key:"render",value:function(){var e,t=this,n=this.state.downPayment,a=this.state.tradeIn,l=this.state.zipCode,i=this.state.apr,c=this.state.term,u=this.state.CreditScoreChange,s=this.state.loading,h=this.state.mileages,d=this.state.termlease,m=this.state.creditScoreLease,g=this.state.isLoggedIn;if(s)return null;e=g?r.a.createElement(_,{onClick:this.handleLogoutClick}):r.a.createElement(R,{onClick:this.handleLoginClick});var p=function(e,t){var n=parseFloat(e);if(Number.isNaN(n)||n<0)return"0";var a=t(n);return(Math.round(1e3*a)/1e3).toString()}(u,D),f=function(e,t,n,a,r){var l=D(r),o=Math.round((v-e-t)*n/1e4/a*l);return Number.isNaN(o)||o<0?"check input values 0":o}(a,n,h,d,m),C=function(e,t,n,a,r){var l=Math.round((v-e-t)/n*(a*r)/100);return Number.isNaN(l)||l<0?"check input values 0":l}(a,n,c,p,i),b=function(e){return e?null:"warning"}(g),E=function(e){return e?"warning":null}(g);return r.a.createElement("div",{className:"container "},r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement(j,{isLoggedIn:g}),e,r.a.createElement(N,{scale:"c",downPayment:n,onTemperatureChange:this.handleDownPaymentChange}),r.a.createElement(k,{downPayment:parseFloat(n)}),r.a.createElement(N,{scale:"t",tradeIn:a,onTemperatureChange:this.handleTradingChange}),r.a.createElement(w,{tradeIn:parseFloat(a)}),r.a.createElement(P,{scale:"z",zipCode:l,onTemperatureChange:this.handleZipChange}),r.a.createElement(P,{scale:"a",apr:i,onTemperatureChange:this.handleAprChange})),r.a.createElement("div",{className:"CardInfo results"},r.a.createElement("div",{id:"list"}),r.a.createElement("div",{className:"CardInfo "},r.a.createElement("h2",{className:"results"},"Card Info:")," ",r.a.createElement("br",null),"MRSP: ",y.MSRP,"  ",r.a.createElement("br",null),'vehicle name: "',y.VehicleName,'"',r.a.createElement("br",null),"monthly payment:",y.MonthlyPayment," $",r.a.createElement("br",null),"dealer phone number:",y.DealerPhoneNumber," ",r.a.createElement("br",null),"dealer rating:",y.DealerRating),"taxes: ",l.split("").map((function(e){return 11*e}))," ",r.a.createElement("br",null),r.a.createElement(o.a,{promiseFn:function(){return fetch("https://ipinfo.io/json?token=1db77c7739473f").then((function(e){return e.ok?e:Promise.reject(e)})).then((function(e){return e.json()}))}},r.a.createElement(o.a.Loading,null,"Loading..."),r.a.createElement(o.a.Fulfilled,null,(function(e){return r.a.createElement("h4",null,"Your post code ",e.postal)})),r.a.createElement(o.a.Rejected,null,(function(e){return"Something went wrong: ".concat(e.message)})))),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("div",{className:E},r.a.createElement("h3",null,"Terms"),r.a.createElement("br",null),r.a.createElement("div",{className:"btn-group mr-2",role:"group","aria-label":"First group"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t.setState({term:12})}},"12"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t.setState({term:24})}},"24"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t.setState({term:36})}},"36"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t.setState({term:48})}},"48"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t.setState({term:72})}},"72"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t.setState({term:84})}},"84")),r.a.createElement("br",null),r.a.createElement("h3",null,"Credit Score"),r.a.createElement("br",null),r.a.createElement("div",{className:"btn-group mr-2",role:"group","aria-label":"First group"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t.setState({CreditScoreChange:600})}},"600"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t.setState({CreditScoreChange:650})}},"650"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t.setState({CreditScoreChange:700})}},"700"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t.setState({CreditScoreChange:750})}},"750"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t.setState({CreditScoreChange:800})}},"800"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t.setState({CreditScoreChange:850})}},"850"),r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){return t.setState({CreditScoreChange:900})}},"900")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"results"},"Monthly payment loan:  ",C," $"),r.a.createElement("div",{className:"counters"},"  ((",v,"-",a,"-",n,")/",c,")*",p,"*",i,"/100 ;"))),r.a.createElement("div",{className:b},r.a.createElement(L,{mileages:h,onTemperatureChange:this.handleMiliagesChange}),r.a.createElement("br",null),r.a.createElement(T,{termlease:d,onTemperatureChange1:this.handleTermleaseChange}),r.a.createElement("br",null),r.a.createElement(I,{creditScoreLease:m,onTemperatureChange1:this.handleCreditScoreLeaseChange}),r.a.createElement("br",null),r.a.createElement("div",{className:"results"},"Monthly payment lease: ",f," $"),r.a.createElement("div",{className:"counters"},"(MSRP ",v,"- tradeIn",a," - downPayment",n," ) * mileages",h," / 10000 / termlease",d," * CreditScoreValue)")),r.a.createElement("div",null))}}]),t}(r.a.Component);Object(l.render)(r.a.createElement(V,null),document.getElementById("root"))}});