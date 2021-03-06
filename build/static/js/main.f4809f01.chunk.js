(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",nav:"MainNavigation_nav__2KJfX",active:"MainNavigation_active__oN3Ka"}},14:function(e,t,n){"use strict";var r=n(26),c=n.n(r),a=n(0);t.a=function(){return Object(a.jsx)("div",{className:c.a.spinner})}},19:function(e,t,n){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},20:function(e,t,n){"use strict";var r=n(11),c=n(4),a=n.n(c),s=n(9),o=n(22),i=n(1);function u(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(i.useReducer)(u,{status:t?"pending":null,data:null,error:null}),c=Object(o.a)(n,2),d=c[0],l=c[1],j=Object(i.useCallback)(function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,l({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),l({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(r.a)({sendRequest:j},d)}},21:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return f}));var r=n(4),c=n.n(r),a=n(11),s=n(9),o="https://react-http-8d73b-default-rtdb.firebaseio.com";function i(){return u.apply(this,arguments)}function u(){return(u=Object(s.a)(c.a.mark((function e(){var t,n,r,s,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(s in r=[],n)i=Object(a.a)({id:s},n[s]),r.push(i);return e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return l.apply(this,arguments)}function l(){return(l=Object(s.a)(c.a.mark((function e(t){var n,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not fetch quote.");case 8:return s=Object(a.a)({id:t},r),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return p.apply(this,arguments)}function p(){return(p=Object(s.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(c.a.mark((function e(t){var n,r,s,i,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not get comments.");case 8:for(i in s=[],r)u=Object(a.a)({id:i},r[i]),s.push(u);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},24:function(e,t,n){e.exports={main:"Layout_main__auk_r"}},26:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__2Kyqv"}},27:function(e,t,n){e.exports={item:"QuoteItem_item__2dOvb"}},28:function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},33:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(23),c=n.n(r),a=n(8),s=(n(33),n(1)),o=n.n(s),i=n(2),u=n(24),d=n.n(u),l=n(12),j=n.n(l),p=n(0),h=function(){return Object(p.jsxs)("header",{className:j.a.header,children:[Object(p.jsx)("div",{className:j.a.logo,children:"QuoteIt"}),Object(p.jsx)("nav",{className:j.a.nav,children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(a.c,{to:"/quotes",activeClassName:j.a.active,children:"All Quotes"})}),Object(p.jsx)("li",{children:Object(p.jsx)(a.c,{to:"/newQuote",activeClassName:j.a.active,children:"Add Quote"})})]})})]})},b=function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h,{}),Object(p.jsx)("main",{className:d.a.main,children:e.children})]})},f=n(14),x=n(27),O=n.n(x),m=function(e){return Object(p.jsxs)("li",{className:O.a.item,children:[Object(p.jsxs)("figure",{children:[Object(p.jsx)("blockquote",{children:Object(p.jsx)("p",{children:e.text})}),Object(p.jsx)("figcaption",{children:e.author})]}),Object(p.jsx)(a.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},v=n(19),g=n.n(v),w=function(e){var t,n,r=Object(i.h)(),c=Object(i.i)(),a="asc"===new URLSearchParams(c.search).get("sort"),o=(t=e.quotes,n=a,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(p.jsxs)(s.Fragment,{children:[Object(p.jsx)("div",{className:g.a.sorting,children:Object(p.jsxs)("button",{onClick:function(){r.push("".concat(c.pathname,"?sort=").concat(a?"desc":"asc"))},children:["Sort ",a?"Descending":"Ascending"]})}),Object(p.jsx)("ul",{className:g.a.list,children:o.map((function(e){return Object(p.jsx)(m,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},_=n(20),y=n(21),N=n(28),k=n.n(N),q=function(){return Object(p.jsxs)("div",{className:k.a.noquotes,children:[Object(p.jsx)("p",{children:"No quotes found!"}),Object(p.jsx)(a.b,{className:"btn",to:"/newQuote",children:"Add a Quote"})]})},S=function(){var e=Object(_.a)(y.d,!0),t=e.sendRequest,n=e.status,r=e.data,c=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===n?Object(p.jsx)("div",{className:"centered",children:Object(p.jsx)(f.a,{})}):c?Object(p.jsx)("p",{className:"centered focused",children:c}):"completed"!==n||r&&0!==r.length?Object(p.jsx)("div",{children:Object(p.jsx)(w,{quotes:r})}):Object(p.jsx)(q,{})},C=o.a.lazy((function(){return n.e(4).then(n.bind(null,54))})),E=o.a.lazy((function(){return n.e(3).then(n.bind(null,53))})),Q=o.a.lazy((function(){return n.e(5).then(n.bind(null,52))}));var R=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(b,{children:Object(p.jsx)(s.Suspense,{fallback:Object(p.jsx)("div",{className:"centered",children:Object(p.jsx)(f.a,{})}),children:Object(p.jsxs)(i.e,{children:[Object(p.jsx)(i.c,{path:"/",exact:!0,children:Object(p.jsx)(i.b,{to:"/quotes"})}),Object(p.jsx)(i.c,{path:"/quotes",exact:!0,children:Object(p.jsx)(S,{})}),Object(p.jsx)(i.c,{path:"/quotes/:quoteId",children:Object(p.jsx)(E,{})}),Object(p.jsx)(i.c,{path:"/newQuote",children:Object(p.jsx)(C,{})}),Object(p.jsx)(i.c,{path:"*",children:Object(p.jsx)(Q,{})})]})})})})};c.a.render(Object(p.jsx)(a.a,{children:Object(p.jsx)(R,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f4809f01.chunk.js.map