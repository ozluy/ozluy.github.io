(window["webpackJsonprematch-demo"]=window["webpackJsonprematch-demo"]||[]).push([[0],{17:function(e,r,t){e.exports=t(29)},28:function(e,r,t){},29:function(e,r,t){"use strict";t.r(r);var n={};t.r(n),t.d(n,"sayac",function(){return O}),t.d(n,"github",function(){return p});var a=t(0),o=t.n(a),u=t(4),c=t.n(u),i=t(3),l=t(14),s=t(5);function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(t,!0).forEach(function(r){Object(s.a)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var p={state:{repolar:[],yukleniyor:!1,hata:null},reducers:{yukleniyoruAyarla:function(e,r){return f({},e,{},{yukleniyor:r})},repolariAyarla:function(e,r){return f({},e,{},{repolar:r,hata:null})},hataAyarla:function(e,r){return f({},e,{},{hata:r,repolar:[]})}},effects:function(e){return{kullaniciRepolariniGetir:function(r){e.github.yukleniyoruAyarla(!0),fetch("https://api.github.com/users/".concat(r,"/repos")).then(function(e){if(404===e.status)throw new Error("Kullan\u0131c\u0131 bulunamad\u0131!");return e.json()}).then(function(r){e.github.yukleniyoruAyarla(!1),e.github.repolariAyarla(r)}).catch(function(r){e.github.yukleniyoruAyarla(!1),e.github.hataAyarla(r)})}}}},b=t(9),m=t.n(b),h=t(15);function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(t,!0).forEach(function(r){Object(s.a)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(t).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var O={state:{yukleniyor:!1,deger:0},reducers:{birEkle:function(e){return k({},e,{},{deger:e.deger+1})},yukleniyoruAyarla:function(e,r){return k({},e,{},{yukleniyor:r})}},effects:function(e){return{birEkleAsync:function(){var r=Object(h.a)(m.a.mark(function r(){return m.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return e.sayac.yukleniyoruAyarla(!0),r.next=3,new Promise(function(e){return setTimeout(e,1e3)});case 3:e.sayac.yukleniyoruAyarla(!1),e.sayac.birEkle();case 5:case"end":return r.stop()}},r)}));return function(){return r.apply(this,arguments)}}()}}},E=Object(l.init)({models:n});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=Object(i.b)(function(e){var r=e.sayac;return{deger:r.deger,yukleniyor:r.yukleniyor}},function(e){var r=e.sayac;return{birEkle:r.birEkle,birEkleAsync:r.birEkleAsync}})(function(e){var r=e.deger,t=e.birEkle,n=e.birEkleAsync,a=e.yukleniyor;return o.a.createElement("div",null,o.a.createElement("h1",null,"Saya\xe7 de\u011feri = ",r),o.a.createElement("button",{onClick:function(e){e.persist(),t()}},"+1"),o.a.createElement("button",{onClick:function(e){e.persist(),n()}},"+1 async (1 saniye sonra)"),o.a.createElement("p",null,"\xa0",a&&"saya\xe7a 1 ekleniyor..."))}),j=t(16),v=t(10),w=Object(i.b)(function(e){var r=e.github;return{repolar:r.repolar,yukleniyor:r.yukleniyor,hata:r.hata}},function(e){return{kullaniciRepolariniGetir:e.github.kullaniciRepolariniGetir}})(function(e){var r=e.kullaniciRepolariniGetir,t=e.yukleniyor,n=e.repolar,u=e.hata,c=Object(a.useState)("ozluy"),i=Object(v.a)(c,2),l=i[0],s=i[1],y=Object(a.useState)(!1),f=Object(v.a)(y,2),p=f[0],b=f[1],m=Object(a.useRef)(null);return o.a.createElement("form",{className:"github-wrapper",onSubmit:function(e){e.preventDefault(),b(!1),r(l)}},o.a.createElement("h1",null,"Github"),o.a.createElement("input",{type:"text",onChange:function(){return s(m.current.value)},value:l,ref:m,placeholder:"Kullan\u0131c\u0131 adi gir"}),o.a.createElement("button",{type:"submit"},"Repolar\u0131 Getir"),o.a.createElement("p",null,"\xa0",t&&"repolar getiriliyor..."),u&&o.a.createElement("p",{className:"error-message"},u.message),function(e){var r=p?[].concat(Object(j.a)(e),[]).sort(function(e,r){return r.stargazers_count-e.stargazers_count}):e;return o.a.createElement(o.a.Fragment,null,r.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{id:"sirala",onChange:function(){return b(!p)},type:"checkbox",checked:p})," ",o.a.createElement("label",{htmlFor:"sirala"},"Y\u0131ld\u0131za g\xf6re s\u0131rala")),o.a.createElement("ul",null,r.map(function(e){var r=e.name,t=e.html_url,n=e.language,a=e.stargazers_count,u=e.forks_count;return o.a.createElement("li",{key:r},o.a.createElement("a",{target:"_blank",href:t,rel:"noopener noreferrer"},r,"/",n,", ",a,"\u2b50\ufe0f, ",u,"\ud83c\udf74"))})))}(n))});t(28);c.a.render(o.a.createElement(i.a,{store:E},o.a.createElement(d,null),o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.2a71ff5a.chunk.js.map