(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),l=t.n(u),c=(t(19),t(2)),o=function(e){var n=e.filterValue,t=e.handleFilterChange;return r.a.createElement("div",null,r.a.createElement("div",null,"Filter by name:"," ",r.a.createElement("input",{value:n,onChange:t})))},i=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,u=e.newNumber,l=e.handleNumberChange;return r.a.createElement("div",null,r.a.createElement("h2",null,"Add new"),r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:u,onChange:l})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},m=function(e){var n=e.filterValue,t=e.filteredList,a=e.removePerson,u=e.persons;return r.a.createElement("div",null,r.a.createElement("h2",null,"Numbers"),n.length>0?r.a.createElement("ul",null,t.map((function(e,n){return r.a.createElement("div",{key:n},r.a.createElement("li",{key:n},e.name," ",e.number),r.a.createElement("button",{onClick:function(){return a(e.id)}},"delete"))}))):r.a.createElement("ul",null,u.map((function(e,n){return r.a.createElement("div",{key:n},r.a.createElement("li",{key:n},e.name," ",e.number),r.a.createElement("button",{onClick:function(){return a(e.id)}},"delete"))}))))},f=function(e){var n=e.message,t=e.error;return null===n?null:r.a.createElement("div",null,r.a.createElement("div",{className:t?"error":"success"},n))},d=t(3),s=t.n(d),h="/api/persons",v=function(){return s.a.get(h).then((function(e){return e.data}))},b=function(e){return s.a.post(h,e).then((function(e){return e.data}))},E=function(e,n){return s.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return s.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},g=function(){var e=Object(a.useState)([]),n=Object(c.a)(e,2),t=n[0],u=n[1],l=Object(a.useState)([]),d=Object(c.a)(l,2),s=d[0],h=d[1],g=Object(a.useState)(""),w=Object(c.a)(g,2),j=w[0],O=w[1],y=Object(a.useState)(""),C=Object(c.a)(y,2),k=C[0],N=C[1],S=Object(a.useState)(""),P=Object(c.a)(S,2),L=P[0],V=P[1],F=Object(a.useState)(null),D=Object(c.a)(F,2),J=D[0],T=D[1],x=Object(a.useState)(!1),A=Object(c.a)(x,2),B=A[0],I=A[1];Object(a.useEffect)((function(){v().then((function(e){u(e)}))}),[]);var M=function(e,n,t){E(e,n).then(v().then((function(e){u(e),z(j,e),N(""),V("")}))).catch((function(e){console.log(e),I("true"),G(t,"was already removed from server."),setTimeout((function(){I(!1)}),5e3)}))},q=function(e){if(t.find((function(n){return n.name===e})))return!0},z=function(e,n){var t=e.toLowerCase(),a=n.filter((function(e){return e.name.toLowerCase().includes(t,0)}));h(a)},G=function(e,n){T("".concat(e," ").concat(n)),setTimeout((function(){T(null)}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(f,{message:J,error:B}),r.a.createElement(o,{filterValue:j,handleFilterChange:function(e){O(e.target.value),z(e.target.value,t)}}),r.a.createElement(i,{addPerson:function(e){e.preventDefault();var n={name:k,number:L};if(q(k)&&window.confirm("".concat(k," is already in the phonebook, replace the old number wiht new one?"))){var a=t.find((function(e){return e.name===k})).id;M(a,n,k),G(k,"changed successfully!")}else q(k)?(N(""),V("")):b(n).then((function(e){G(k,"created succesfully!"),u(t.concat(e)),N(""),V("")}))},newName:k,handleNameChange:function(e){N(e.target.value)},newNumber:L,handleNumberChange:function(e){V(e.target.value)}}),r.a.createElement(m,{filterValue:j,filteredList:s,persons:t,removePerson:function(e){var n=t.find((function(n){return n.id===e})).name;if(window.confirm("Do you really want to remove ".concat(n,"?"))){var a=t.filter((function(n){return n.id!==e}));p(e).then(G(n,"deleted!")).then(u(t.filter((function(n){return n.id!==e})))).then(z(j,a))}}}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9c392ff7.chunk.js.map