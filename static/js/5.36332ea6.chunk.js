(this["webpackJsonpreact-pizza"]=this["webpackJsonpreact-pizza"]||[]).push([[5],{69:function(e,t,c){"use strict";c.r(t);var n=c(4),i=c(23),a=c(2),s=c.n(a),r=c(27),l=c(41),o=c.n(l),u=c(43),j=s.a.memo((function(){var e=Object(r.c)((function(e){return e.filters.categories})),t=Object(r.c)((function(e){return e.filters.activeCategory})),c=Object(r.b)();return Object(n.jsx)("div",{className:"categories",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:o()({active:null===t}),onClick:function(){return c(Object(u.b)(null))},children:"\u0412\u0441\u0435"}),e.map((function(e,i){return Object(n.jsx)("li",{className:o()({active:t===i+1}),onClick:function(){return c(Object(u.b)(i+1))},children:e},e)}))]})})})),b=c(32),d=c(40),m=c(68),O=c.p+"static/media/loadingPizzaCart.989b4d97.svg",f=s.a.memo((function(e){var t=e.imageUrl,c=e.name,i=Object(a.useState)(!0),s=Object(b.a)(i,2),r=s[0],l=s[1];return Object(n.jsx)(m.LazyLoadComponent,{children:Object(n.jsx)("img",{className:"pizza-block__image",onLoad:function(){return l(!1)},src:r?O:t,alt:"Pizza",title:c})})})),p=s.a.memo((function(e){var t=e.item,c=e.onClickAddPizza,i=Object(a.useState)(t.types[0]),s=Object(b.a)(i,2),l=s[0],u=s[1],j=Object(a.useState)(t.sizes[0]),m=Object(b.a)(j,2),O=m[0],p=m[1],h=Object(r.c)((function(e){return e.types})),x=Object(r.c)((function(e){return e.cart.items[t.id]})),v=x&&x.flat().reduce((function(e,t){return t.amount+e}),0);return Object(n.jsxs)("div",{className:"pizza-block",children:[Object(n.jsx)(f,{imageUrl:t.imageUrl,name:t.name}),Object(n.jsx)("h4",{className:"pizza-block__title",children:t.name}),Object(n.jsxs)("div",{className:"pizza-block__selector",children:[Object(n.jsx)("ul",{children:h.types.map((function(e,c){return Object(n.jsx)("li",{onClick:function(){return u(c)},className:o()({active:l===c,disabled:!t.types.includes(c)}),children:e},c)}))}),Object(n.jsx)("ul",{children:h.sizes.map((function(e,c){return Object(n.jsxs)("li",{onClick:function(){return p(e)},className:o()({active:O===e,disabled:!t.sizes.includes(e)}),children:[e," \u0441\u043c."]},c)}))})]}),Object(n.jsxs)("div",{className:"pizza-block__bottom",children:[Object(n.jsxs)("div",{className:"pizza-block__price",children:["\u043e\u0442 ",t.price," \u20bd"]}),Object(n.jsxs)(d.a,{className:"button--add",onClickAdd:function(){c({id:t.id,name:t.name,imageUrl:t.imageUrl,price:t.price,size:O,type:h.types[l],amount:1})},outline:!0,children:[Object(n.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(n.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),x&&x.length>0&&Object(n.jsx)("i",{children:v})]})]})]})})),h=c(29),x=s.a.memo((function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),c=t[0],i=t[1],s=Object(a.useRef)(null),l=Object(r.c)((function(e){return e.filters.sort})),u=Object(r.c)((function(e){return e.filters.activeSort})),j=Object(r.b)(),d=function(e){(e.path||e.composedPath&&e.composedPath()).includes(s.current)||i(!1)};Object(a.useEffect)((function(){return document.body.addEventListener("click",d),function(){return document.body.removeEventListener("click",d)}}),[]);return Object(n.jsxs)("div",{className:"sort",ref:s,children:[Object(n.jsxs)("div",{className:"sort__label",children:[Object(n.jsx)("svg",{className:o()({rotated:c}),width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(n.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(n.jsx)("span",{onClick:function(){i((function(e){return!e}))},children:l.find((function(e){return e.type===u&&e.name})).name})]}),c&&Object(n.jsx)("div",{className:"sort__popup",children:Object(n.jsx)("ul",{children:l.map((function(e){return Object(n.jsx)("li",{className:o()({active:e.type===u}),onClick:function(){return j({type:h.b,payload:e.type})},children:e.name},e.name)}))})})]})})),v=c.p+"static/media/sceletonPizzaCart.52180591.svg",z=c(42);t.default=function(){var e=Object(r.c)((function(e){return e.pizzas})),t=Object(r.c)((function(e){return e.filters.activeSort})),c=Object(r.b)();Object(a.useEffect)((function(){0===e.items.length&&c(u.a)}),[]);return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"content__top",children:[Object(n.jsx)(j,{}),Object(n.jsx)(x,{})]}),Object(n.jsx)("h2",{className:"content__title",children:"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"}),Object(n.jsx)("div",{className:"content__items",children:e.isLoaded?function(e){return function(e){switch(t){case"popular":return Object(i.a)(e).sort((function(e,t){return e.rating<t.rating?1:-1}));case"price":return Object(i.a)(e).sort((function(e,t){return e.price>t.price?1:-1}));case"alphabet":return Object(i.a)(e).sort((function(e,t){return e.name>t.name?1:-1}));default:return e}}(e).map((function(e){return Object(n.jsx)(p,{onClickAddPizza:function(e){return function(e){c({type:z.a,payload:e})}(e)},item:e},e.id)}))}(e.items):Array(4).fill(0).map((function(e,t){return Object(n.jsx)("div",{className:"pizza-block",children:Object(n.jsx)("img",{className:"load-img",src:v,alt:"loading"})},"".concat(e,"_").concat(t))}))})]})}}}]);
//# sourceMappingURL=5.36332ea6.chunk.js.map