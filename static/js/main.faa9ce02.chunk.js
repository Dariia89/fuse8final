(this.webpackJsonpfinal=this.webpackJsonpfinal||[]).push([[0],{14:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s(7),a=s.n(c),r=(s(14),s(6)),i=s.n(r),o=s(9),l=s(8),u=s(2),h=s(0);var j=function(e){var t=Object(n.useState)(""),s=Object(u.a)(t,2),c=s[0],a=s[1],r=[],i=function(){if(0===c.length)e.updateFiltered(e.houses);else if(c.length>2){var t=new RegExp(c,"iy");t.lastIndex=0,r=e.houses.filter((function(e){return t.exec("".concat(e.title))})),e.updateFiltered(r)}};return Object(h.jsx)("div",{className:"houses__filter filter",children:Object(h.jsxs)("form",{className:"filter__form",onSubmit:function(e){e.preventDefault(),i()},children:[Object(h.jsx)("label",{htmlFor:"input",className:"filter__form_label",children:"Filter"}),Object(h.jsx)("input",{id:"input",className:"filter__form_input",type:"text",value:c,onChange:function(e){e.preventDefault(),a(e.target.value),i()}})]})})};var d=function(e){var t,s,n=e.house;return Object(h.jsx)("div",{className:"houses__house house",children:Object(h.jsxs)("a",{href:"/details/".concat(n.id),className:"house__link",children:[Object(h.jsxs)("div",{className:"house__img-container",children:["IndependentLiving"===n.type?Object(h.jsx)("div",{className:"house__img-container_house-type",style:{backgroundColor:"#006F79",width:134},children:"Independent living"}):Object(h.jsx)("div",{className:"house__img-container_house-type",style:{backgroundColor:"#EC6608",width:204},children:"Restaurant & Support available"}),Object(h.jsx)("img",{alt:"house",src:"https://via.placeholder.com/376x228/DCDCDC/000000?text=house",className:"house__img-container_img"})]}),Object(h.jsxs)("div",{className:"house__info",children:[Object(h.jsx)("h2",{className:"house__info_title",children:(s=n.title,(s=s.split(" ")).map((function(e){return(e=e.split(""))[0]=e[0].toUpperCase(),e.join("")})).join(" "))}),Object(h.jsx)("p",{className:"house__info_address",children:n.address}),Object(h.jsxs)("p",{className:"house__info_price",children:["New Properties for Sale from ",Object(h.jsxs)("span",{className:"house__info_price_bold",children:["\xa3",(t=n.price,t.toLocaleString("en-EN",{currency:"GBP"}))]})]}),Object(h.jsx)("p",{className:"housee__info_text",children:"Shared Ownership Available"})]})]})})};var b=function(e){var t=Object(n.useState)([]),s=Object(u.a)(t,2),c=s[0],a=s[1],r=Object(n.useState)(!1),i=Object(u.a)(r,2),o=i[0],l=i[1],b=e.houses;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(j,{houses:b,updateFiltered:function(e){a(e),-1===c.length?l(!1):l(!0)}}),Object(h.jsx)("section",{className:"main__houses houses",children:!1===o?b.map((function(e){return Object(h.jsx)(d,{house:e},"key".concat(e.id))})):c.map((function(e){return Object(h.jsx)(d,{house:e},"key".concat(e.id))}))})]})};var _=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),s=t[0],c=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t,s,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://603e38c548171b0017b2ecf7.mockapi.io/homes");case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:s=e.sent,n=Object(o.a)(s),c(n.splice(0,6));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("header",{className:"header",children:Object(h.jsx)("div",{className:"header__container container",children:Object(h.jsx)("a",{className:"header__heading_link",href:"/",children:Object(h.jsx)("h1",{className:"header__heading",children:"Our Latest Developments"})})})}),Object(h.jsx)("main",{className:"main",children:Object(h.jsxs)("div",{className:"main__container container",children:[Object(h.jsx)(b,{houses:s}),Object(h.jsxs)("button",{className:"main__button btn",children:[Object(h.jsx)("span",{className:"btn_text",children:"See more "}),Object(h.jsx)("i",{className:"btn__arrow fas fa-chevron-right"})]})]})}),Object(h.jsx)("footer",{className:"footer"})]})};a.a.render(Object(h.jsx)(_,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.faa9ce02.chunk.js.map