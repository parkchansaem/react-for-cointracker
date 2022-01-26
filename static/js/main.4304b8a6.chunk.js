(this["webpackJsonpreact-for-cointracker"]=this["webpackJsonpreact-for-cointracker"]||[]).push([[0],{75:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),o=t(23),r=t.n(o),a=t(9),s=t(7),l=t(20),d=t(4),u=t(31),h=t(14),b=t(13),j=t(15),p=t.n(j),x=t(34),O="https://api.coinpaprika.com/v1";function f(){return fetch("".concat(O,"/coins")).then((function(n){return n.json()}))}function v(n){return g.apply(this,arguments)}function g(){return(g=Object(x.a)(p.a.mark((function n(e){return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(O,"/tickers/").concat(e));case 2:return n.next=4,n.sent.json();case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var m,y,k,C,w,q,_,S,D=Object(b.b)({key:"isDark",default:!0}),P=t(1),U=s.c.div(m||(m=Object(a.a)(["\n  padding: 0 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),I=s.c.header(y||(y=Object(a.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n"]))),F=s.c.ul(k||(k=Object(a.a)([""]))),L=s.c.li(C||(C=Object(a.a)(["\n  background-color: ",";\n  color: ",";\n  margin-bottom: 10px;\n  border-radius: 15px;\n  a {\n    transition: color 0.2s ease-in;\n    display: flex;\n    align-items: center;\n    padding: 20px;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.cardbgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),Q=s.c.div(w||(w=Object(a.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),z=s.c.div(q||(q=Object(a.a)(["\n  text-align: center;\n  display: block;\n"]))),M=s.c.img(_||(_=Object(a.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"]))),H=s.c.button(S||(S=Object(a.a)(["\n  position: absolute;\n  left: 0;\n  border-radius: 10px;\n  background-color: ",";\n  color: ",";\n  border: none;\n  width: 45px;\n  height: 30px;\n  transition: color 0.2s ease-in;\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.cardbgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor}));var $=function(){var n=Object(h.useQuery)("allcoins",f),e=n.isLoading,t=n.data,c=Object(b.d)(D);return Object(P.jsxs)(U,{children:[Object(P.jsx)(u.a,{children:Object(P.jsx)("title",{children:"\ucf54\uc778"})}),Object(P.jsxs)(I,{children:[Object(P.jsx)(H,{onClick:function(){return c((function(n){return!n}))},children:"mode"}),Object(P.jsx)(Q,{children:"\ucf54\uc778"})]}),e?Object(P.jsx)(z,{children:"loading..."}):Object(P.jsx)(F,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(P.jsx)(L,{children:Object(P.jsxs)(l.b,{to:"/".concat(n.id),state:{name:n.name},children:[Object(P.jsx)(M,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})},A=t(51),T=t.n(A);var J,R,B,E,Y=function(n){var e=n.coinId,t=Object(h.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(O,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e5}),c=t.isLoading,i=t.data,o=Object(b.c)(D);return Object(P.jsx)("div",{children:c?"loading...":Object(P.jsx)(T.a,{type:"candlestick",series:[{name:"candle",data:null===i||void 0===i?void 0:i.map((function(n){return{x:n.time_close.slice(8,10),y:[n.open.toFixed(2),n.high.toFixed(2),n.low.toFixed(2),n.close.toFixed(2)]}}))}],options:{theme:{mode:o?"dark":"light"},yaxis:{show:!1},xaxis:{type:"category",categories:null===i||void 0===i?void 0:i.map((function(n){return n.time_close}))},chart:{type:"candlestick",height:350,toolbar:{show:!1},background:"transparent"}}})})},G=s.c.div(J||(J=Object(a.a)(["\n  max-width: 480px;\n  margin: 0 auto;\n  div:first-child {\n    animation-delay: 0.2s;\n  }\n  div:nth-child(2) {\n    animation-delay: 0.4s;\n  }\n  div:nth-child(3) {\n    animation-delay: 0.6s;\n  }\n  div:nth-child(4) {\n    animation-delay: 0.8s;\n  }\n  div:nth-child(5) {\n    animation-delay: 1s;\n  }\n  div:nth-child(6) {\n    animation-delay: 1.2s;\n  }\n  div:last-child {\n    animation-delay: 1.4s;\n  }\n"]))),K=Object(s.d)(R||(R=Object(a.a)(["\n  0% {\n    transform: none;\n    opacity: 0;\n  }\n  1% {\n    transform: translateY(-5px);\n    opacity: 0;\n  }\n  100% {\n    transform: none;\n    opacity: 1;\n  }\n"]))),N=s.c.div(B||(B=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  opacity: 0;\n  animation: "," 0.5s linear forwards;\n"])),K),V=s.c.h3(E||(E=Object(a.a)(["\n  font-size: 20px;\n  font-weight: 600;\n  color: ",";\n"])),(function(n){return n.isPositive?"lightgreen":"red"}));function W(n){if(n)return n>0}var X,Z=function(n){var e=n.coinId,t=Object(h.useQuery)(["ohicv",e],(function(){return v(e)})),c=t.isLoading,i=t.data;return console.log(i),Object(P.jsx)("div",{children:c?"loading..":Object(P.jsxs)(G,{children:[Object(P.jsxs)(N,{children:["Current Prices :"," ",Object(P.jsxs)(V,{isPositive:!0===W(null===i||void 0===i?void 0:i.quotes.USD.price),children:["$",null===i||void 0===i?void 0:i.quotes.USD.price.toFixed(2)]})]}),Object(P.jsxs)(N,{children:["Change rate (last:1h):"," ",Object(P.jsxs)(V,{isPositive:!0===W(null===i||void 0===i?void 0:i.quotes.USD.percent_change_1h),children:[null===i||void 0===i?void 0:i.quotes.USD.percent_change_1h,"%"]})]}),Object(P.jsxs)(N,{children:["Change rate (last:24h):"," ",Object(P.jsxs)(V,{isPositive:!0===W(null===i||void 0===i?void 0:i.quotes.USD.percent_change_24h),children:[null===i||void 0===i?void 0:i.quotes.USD.percent_change_24h,"%"]})]}),Object(P.jsxs)(N,{children:["Change rate (last:7d):"," ",Object(P.jsxs)(V,{isPositive:!0===W(null===i||void 0===i?void 0:i.quotes.USD.percent_change_7d),children:[null===i||void 0===i?void 0:i.quotes.USD.percent_change_7d,"%"]})]}),Object(P.jsxs)(N,{children:["Change rate (last:30d):"," ",Object(P.jsxs)(V,{isPositive:!0===W(null===i||void 0===i?void 0:i.quotes.USD.percent_change_30d),children:[null===i||void 0===i?void 0:i.quotes.USD.percent_change_30d,"%"]})]}),Object(P.jsxs)(N,{children:["Highest Price:"," ",Object(P.jsx)(V,{isPositive:!0,children:null===i||void 0===i?void 0:i.quotes.USD.ath_date.slice(0,10)})]}),Object(P.jsxs)(N,{children:["Highest Date:"," ",Object(P.jsxs)(V,{isPositive:!0===W(null===i||void 0===i?void 0:i.quotes.USD.ath_price),children:["$",null===i||void 0===i?void 0:i.quotes.USD.ath_price.toFixed(2)]})]})]})})},nn=s.c.button(X||(X=Object(a.a)(["\n  position: absolute;\n  left: 0;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: ",";\n  border: none;\n  width: 45px;\n  height: 30px;\n\n  transition: color 0.2s ease-in;\n\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor}));var en,tn,cn,on,rn,an,sn,ln,dn,un,hn,bn=function(){var n=Object(d.g)();return Object(P.jsx)(nn,{onClick:function(){return n(-1)},children:"back"})},jn=s.c.div(en||(en=Object(a.a)(["\n  padding: 0 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),pn=s.c.header(tn||(tn=Object(a.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n"]))),xn=s.c.h1(cn||(cn=Object(a.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),On=s.c.div(on||(on=Object(a.a)(["\n  text-align: center;\n  display: block;\n"]))),fn=s.c.div(rn||(rn=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),vn=s.c.div(an||(an=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),gn=s.c.p(sn||(sn=Object(a.a)(["\n  margin: 20px 0px;\n"]))),mn=s.c.div(ln||(ln=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),yn=s.c.span(dn||(dn=Object(a.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 7px 0px;\n  border-radius: 10px;\n  color: ",";\n  a {\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor})),kn=s.c.button(un||(un=Object(a.a)(["\n  position: absolute;\n  left: 50px;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: ",";\n  border: none;\n  width: 45px;\n  height: 30px;\n  transition: color 0.2s ease-in;\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),Cn=s.c.button(hn||(hn=Object(a.a)(["\n  position: absolute;\n  right: 0;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: ",";\n  border: none;\n  width: 45px;\n  height: 30px;\n  transition: color 0.2s ease-in;\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor}));var wn=function(){var n=Object(b.d)(D),e=Object(d.h)().coinId,t=Object(d.e)().state,c=Object(d.f)("/:coinId/price"),i=Object(d.f)("/:coinId/chart"),o=Object(h.useQuery)(["info",e],(function(){return function(n){return fetch("".concat(O,"/coins/").concat(n)).then((function(n){return n.json()}))}(e)})),r=o.isLoading,a=o.data,s=Object(h.useQuery)(["price",e],(function(){return v(e)}),{refetchInterval:5e3}),j=s.isLoading,p=s.data,x=r||j;return Object(P.jsxs)(jn,{children:[Object(P.jsx)(u.b,{children:Object(P.jsx)("title",{children:(null===t||void 0===t?void 0:t.name)?t.name:x?"loading":null===a||void 0===a?void 0:a.name})}),Object(P.jsxs)(pn,{children:[Object(P.jsx)(bn,{}),Object(P.jsx)(kn,{children:Object(P.jsx)(l.b,{to:"/",children:"home"})}),Object(P.jsx)(xn,{children:(null===t||void 0===t?void 0:t.name)?t.name:x?"loading":null===a||void 0===a?void 0:a.name}),Object(P.jsx)(Cn,{onClick:function(){return n((function(n){return!n}))},children:"mode"})]}),x?Object(P.jsx)(On,{children:"Loading..."}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsxs)(fn,{children:[Object(P.jsxs)(vn,{children:[Object(P.jsx)("span",{children:"Rank:"}),Object(P.jsx)("span",{children:null===a||void 0===a?void 0:a.rank})]}),Object(P.jsxs)(vn,{children:[Object(P.jsx)("span",{children:"Symbol:"}),Object(P.jsxs)("span",{children:["$",null===a||void 0===a?void 0:a.symbol]})]}),Object(P.jsxs)(vn,{children:[Object(P.jsx)("span",{children:"Price:"}),Object(P.jsxs)("span",{children:["$",null===p||void 0===p?void 0:p.quotes.USD.price.toFixed(2)]})]})]}),Object(P.jsx)(gn,{children:null===a||void 0===a?void 0:a.description}),Object(P.jsxs)(fn,{children:[Object(P.jsxs)(vn,{children:[Object(P.jsx)("span",{children:"Total Suply:"}),Object(P.jsx)("span",{children:null===p||void 0===p?void 0:p.total_supply})]}),Object(P.jsxs)(vn,{children:[Object(P.jsx)("span",{children:"Max Supply:"}),Object(P.jsx)("span",{children:null===p||void 0===p?void 0:p.max_supply})]})]})]}),Object(P.jsxs)(mn,{children:[Object(P.jsx)(yn,{isActive:null!==i,children:Object(P.jsx)(l.b,{to:"/".concat(e,"/chart"),children:"Chart"})}),Object(P.jsx)(yn,{isActive:null!==c,children:Object(P.jsx)(l.b,{to:"/".concat(e,"/price"),children:"Price"})})]}),Object(P.jsxs)(d.c,{children:[Object(P.jsx)(d.a,{path:"price",element:Object(P.jsx)(Z,{coinId:e})}),Object(P.jsx)(d.a,{path:"chart",element:Object(P.jsx)(Y,{coinId:e})})]})]})};var qn,_n=function(){return Object(P.jsx)(l.a,{basename:"/react-for-cointracker",children:Object(P.jsxs)(d.c,{children:[Object(P.jsx)(d.a,{path:"/:coinId/*",element:Object(P.jsx)(wn,{})}),Object(P.jsx)(d.a,{path:"/",element:Object(P.jsx)($,{})})]})})},Sn=t(52),Dn={bgColor:"#2f3640",textColor:"white",accentColor:"#8c7ae6",cardbgColor:"rgba(0, 0, 0, 0.5)"},Pn={bgColor:"whitesmoke",textColor:"black",accentColor:"#9c88ff",cardbgColor:"white"},Un=Object(s.b)(qn||(qn=Object(a.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');\n html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody{\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: ",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration: none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var In=function(){var n=Object(b.c)(D);return Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(s.a,{theme:n?Dn:Pn,children:[Object(P.jsx)(Un,{}),Object(P.jsx)(_n,{}),Object(P.jsx)(Sn.ReactQueryDevtools,{initialIsOpen:!0})]})})},Fn=new h.QueryClient;r.a.render(Object(P.jsx)(i.a.StrictMode,{children:Object(P.jsx)(b.a,{children:Object(P.jsx)(h.QueryClientProvider,{client:Fn,children:Object(P.jsx)(In,{})})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.4304b8a6.chunk.js.map