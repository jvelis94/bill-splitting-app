(this["webpackJsonpbill-splitter"]=this["webpackJsonpbill-splitter"]||[]).push([[0],{12:function(e,t,n){e.exports={itemFlex:"IndividualItem_itemFlex__3b_V8",centerMoneyQuantity:"IndividualItem_centerMoneyQuantity__ZSFWo",itemsHeaders:"IndividualItem_itemsHeaders__3MIj6",centerActionItems:"IndividualItem_centerActionItems__wkI0m"}},27:function(e,t,n){e.exports={totals:"Totals_totals__TklN0",ultimateTotal:"Totals_ultimateTotal__1VyDh"}},37:function(e,t,n){e.exports={formContainer:"ItemForm_formContainer__m36gj",formInputs:"ItemForm_formInputs__1krVE"}},38:function(e,t,n){e.exports={groupBillContainer:"GroupBill_groupBillContainer__2oXo6",formInputs:"GroupBill_formInputs__2jAJl",centerActionItems:"GroupBill_centerActionItems__YyCOY",newPersonContainer:"GroupBill_newPersonContainer__3_K57"}},58:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(18),i=n.n(r),s=(n(58),n(44)),o=n(16),l=n(12),u=n.n(l),d=n(36),j=n.n(d),m=n(32),b=n.n(m),p=n(2),x=function(e){var t=e.item;return Object(p.jsxs)("div",{className:u.a.itemFlex,children:[Object(p.jsx)("h4",{children:t.name}),Object(p.jsx)("h4",{className:u.a.centerMoneyQuantity,children:Object(p.jsxs)("div",{className:u.a.centerActionItems,children:[Object(p.jsx)(b.a,{onClick:function(){e.decrementItemQuantity(t.name,e.personId)},color:1===t.qty?"disabled":"inherit"}),t.qty,Object(p.jsx)(j.a,{onClick:function(n,a){e.incrementItemQuantity(t.name,e.personId)}})]})}),Object(p.jsx)("h4",{className:u.a.centerMoneyQuantity,children:t.price})]})},f=n(37),O=n.n(f),h=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)();return Object(p.jsxs)("form",{className:O.a.formContainer,onSubmit:function(a){a.preventDefault(),e.addItemToPerson(t.current.value,n.current.value,e.personId),t.current.value="",n.current.value=""},children:[Object(p.jsx)("input",{type:"text",name:"name",placeholder:"burger",className:O.a.formInputs,ref:t}),Object(p.jsx)("input",{type:"text",name:"price",placeholder:"20",className:O.a.formInputs,ref:n}),Object(p.jsx)("input",{type:"submit",style:{display:"none"}})]})},I=n(27),v=n.n(I),y=function(e){var t=e.person;return Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{className:v.a.totals,children:[Object(p.jsx)("span",{children:"Subtotal"}),Object(p.jsx)("span",{children:t.subtotal})]}),Object(p.jsxs)("li",{className:v.a.totals,children:[Object(p.jsx)("span",{children:"Tax (8.875%)"}),Object(p.jsx)("span",{children:t.tax})]}),Object(p.jsxs)("li",{className:v.a.totals,children:[Object(p.jsx)("span",{children:"Tip"}),Object(p.jsx)("span",{children:t.tip})]}),Object(p.jsxs)("li",{className:v.a.ultimateTotal,children:[Object(p.jsx)("span",{children:"Total"}),Object(p.jsx)("span",{children:t.total})]})]})},_=function(e){var t=e.person;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:t.name}),Object(p.jsx)(h,{addItemToPerson:e.addItemToPerson,personId:t.id}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:u.a.itemsHeaders,children:[Object(p.jsx)("h4",{children:"Item"}),Object(p.jsx)("h4",{className:u.a.centerMoneyQuantity,children:"Qty"}),Object(p.jsx)("h4",{className:u.a.centerMoneyQuantity,children:"Price"})]}),t.items.map((function(n){return Object(p.jsx)(x,{item:n,incrementItemQuantity:e.incrementItemQuantity,decrementItemQuantity:e.decrementItemQuantity,personId:t.id},"".concat(t.id).concat(n.name))}))]}),Object(p.jsx)(y,{person:t})]})},g=n(38),C=n.n(g),N=n(39),Q=n(48),T=n(91),F=n(96),M=n(94),k=n(92),P=n(90),S=n(93);function w(e){var t=e.children,n=e.value,a=e.index,c=Object(Q.a)(e,["children","value","index"]);return Object(p.jsx)("div",Object(N.a)(Object(N.a)({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},c),{},{children:n===a&&Object(p.jsx)(S.a,{p:3,children:Object(p.jsx)(P.a,{children:t})})}))}var A=Object(T.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));function B(e){var t=A(),n=Object(a.useState)(0),c=Object(o.a)(n,2),r=c[0],i=c[1];return Object(p.jsxs)("div",{className:t.root,children:[Object(p.jsx)(F.a,{position:"static",children:Object(p.jsx)(M.a,{style:{backgroundColor:"#2999D4"},value:r,onChange:function(e,t){i(t)},"aria-label":"simple tabs example",children:e.people.map((function(e){return Object(p.jsx)(k.a,Object(N.a)({label:e.name},(t=e.id-1,{id:"simple-tab-".concat(t),"aria-controls":"simple-tabpanel-".concat(t)})),e.id-1);var t}))})}),e.people.map((function(t){return Object(p.jsx)(w,{value:r,index:t.id-1,children:Object(p.jsx)(_,{person:t,addItemToPerson:e.addItemToPerson,incrementItemQuantity:e.incrementItemQuantity,decrementItemQuantity:e.decrementItemQuantity},t.id-1)},t.id-1)}))]})}var q=[],D=function(){var e=Object(a.useState)(q),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(.08875),i=Object(o.a)(r,2),l=i[0],u=(i[1],Object(a.useState)(.18)),d=Object(o.a)(u,2),m=d[0],x=d[1],f=Object(a.useState)(1),O=Object(o.a)(f,2),h=O[0],I=O[1],v=Object(a.useRef)();Object(a.useEffect)((function(){var e=n.map((function(e){var t=e.tip,n=Math.round(100*e.subtotal*m)/100;return e.tip=n,e.total=Math.round(100*(e.total-t+n))/100,e}));c(e)}),[m]);var y=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"add";"add"===a?e.subtotal+=parseFloat(parseInt(n)):e.subtotal-=parseFloat(parseInt(n)),e.tax=Math.round(100*e.subtotal*l)/100,e.tip=Math.round(100*e.subtotal*m)/100,e.total=Math.round(100*(e.subtotal+e.tax+e.tip))/100,c((function(n){var a=Object(s.a)(n);return a[t]=e,a}))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{style:{textAlign:"center"},children:Object(p.jsx)("img",{src:"./split_logo.png",alt:"logo",style:{width:"50%"}})}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:h,name:v.current.value,items:[],subtotal:0,tax:0,tip:0,total:0};c((function(e){return[].concat(Object(s.a)(e),[t])})),I((function(e){return e+1})),v.current.value=""},className:C.a.newPersonContainer,children:[Object(p.jsx)("input",{type:"text",name:"name",placeholder:"add new person",className:C.a.formInputs,ref:v}),Object(p.jsx)("input",{type:"submit",style:{display:"none"}})]}),Object(p.jsx)(B,{people:n,addItemToPerson:function(e,t,a){console.log("adding ".concat(e," to person"));var c=n.findIndex((function(e){return e.id===a})),r=n.filter((function(e){return e.id===a}));r[0].items.push({name:e,price:parseFloat(parseInt(t)),qty:1}),y(r[0],c,t)},incrementItemQuantity:function(e,t){var a=n.findIndex((function(e){return e.id===t})),c=n.filter((function(e){return e.id===t})),r=c[0].items.findIndex((function(t){return t.name===e}));c[0].items[r].qty+=1,y(c[0],a,c[0].items[r].price)},decrementItemQuantity:function(e,t){var a=n.findIndex((function(e){return e.id===t})),c=n.filter((function(e){return e.id===t})),r=c[0].items.findIndex((function(t){return t.name===e}));c[0].items[r].qty-=1,y(c[0],a,c[0].items[r].price,"minus")}}),Object(p.jsxs)("div",{className:C.a.centerActionItems,children:[Object(p.jsx)("h4",{children:"Tip:"}),Object(p.jsx)(b.a,{onClick:function(){x((function(e){return e-.01}))}}),Math.round(100*m),"%",Object(p.jsx)(j.a,{onClick:function(){x((function(e){return e+.01}))}})]})]})};n(67);var G=function(){return Object(p.jsx)(D,{})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(G,{})}),document.getElementById("root")),E()}},[[68,1,2]]]);
//# sourceMappingURL=main.2e5c1a60.chunk.js.map