(window["webpackJsonpreact-puzzle-confirm"]=window["webpackJsonpreact-puzzle-confirm"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(3),r=a.n(l),o=(a(9),a(1));a(10),a(11);var i=function(e){var t=e.onSuccess,a=void 0===t?function(){return console.log("success")}:t,l=e.onFail,r=void 0===l?function(){return console.log("fail")}:l,i=e.onClose,s=void 0===i?function(){return console.log("close clicked")}:i,u=e.title,m=void 0===u?"Please fit the puzzle piece carefully":u,z=e.sliderTitle,p=void 0===z?"Slide to complete the puzzle":z,d=e.failMessage,f=void 0===d?"Error":d,v=e.successMessage,E=void 0===v?"Success":v,b=e.closeButtonLabel,h=void 0===b?"Close":b,N=e.refrefButtonLabel,g=void 0===N?"Refresh":N,w=e.disableRefreshIdleState,S=void 0===w||w,k=function(){var e=Math.ceil(6),t=Math.floor(36);return Math.floor(Math.random()*(t-e+1))+e},y=Object(c.useState)(0),j=Object(o.a)(y,2),O=j[0],C=j[1],M=Object(c.useState)("Idle"),I=Object(o.a)(M,2),x=I[0],B=I[1],F=Object(c.useState)(k()),T=Object(o.a)(F,2),A=T[0],J=T[1],L=function(){O===A?(B("Success"),setTimeout((function(){return a()}),1e3)):(B("Failed"),r())},P="Failed"===x,R=P?f:E;return n.a.createElement("div",{className:"react-puzzle-confirm-modal"},n.a.createElement("div",{className:"react-puzzle-confirm"},n.a.createElement("h1",{className:"react-puzzle-confirm-title"},m),n.a.createElement("div",{className:"react-puzzle-confirm-body"},n.a.createElement("div",{className:"react-puzzle-confirm-puzzle-wrapper"},n.a.createElement("div",{className:"react-puzzle-confirm-puzzle"},n.a.createElement("div",{className:"react-puzzle-confirm-flash ".concat("Success"===x?"flash--me":"")}),n.a.createElement("div",{className:"react-puzzle-confirm-puzzle-missing-piece",style:{left:"".concat(5*O,"px")}},n.a.createElement("div",{className:"react-puzzle-confirm-puzzle-missing-piece-main",style:{backgroundPositionX:5*-A-.5}}),n.a.createElement("div",{className:"react-puzzle-confirm-puzzle-missing-piece-left"}),n.a.createElement("div",{className:"react-puzzle-confirm-puzzle-missing-piece-right"}),n.a.createElement("div",{className:"react-puzzle-confirm-puzzle-missing-piece-circle"})),n.a.createElement("div",{className:"react-puzzle-confirm-puzzle-missing-piece missing-piece-placeholder",style:{left:"".concat(5*A,"px")}}))),n.a.createElement("input",{disabled:P,type:"range",className:P?"react-puzzle-confirm-slider-disabled":"",onMouseUp:L,onTouchEnd:L,name:"points",value:O,onChange:function(e){e.persist();var t=e.target.value;!isNaN(t)&&C(parseInt(t))},min:"0",max:36}),n.a.createElement("div",{className:"react-puzzle-confirm-slider-note"},p)),n.a.createElement("div",{className:"react-puzzle-confirm-state ".concat(P?"react-puzzle-confirm-state--fail":"")},"\xa0 ","Idle"!==x&&R),n.a.createElement("div",{className:"react-puzzle-confirm-button-group"},n.a.createElement("button",{className:"react-puzzle-confirm-button react-puzzle-confirm-button--secondary",onClick:s},h),n.a.createElement("button",{className:"react-puzzle-confirm-button",disabled:!P&&S,onClick:function(){J(k()),C(0),B("Idle")}},g))))},s=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],l=t[1];return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},a&&n.a.createElement(i,{onSuccess:function(){return l(!1)},onClose:function(){return l(!1)}}),n.a.createElement("button",{onClick:function(){return l(!0)}},"open puzzle confirm")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.be9e42fe.chunk.js.map