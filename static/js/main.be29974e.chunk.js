(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),r=n(3),c=n.n(r),o=(n(12),n(4)),a=n(5),i=n(7),h=n(6),l=(n(13),n(0)),u=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(l.jsxs)("h2",{children:[" ",e.monster.name," "]}),Object(l.jsx)("p",{children:e.monster.email})]})},d=(n(15),function(e){return Object(l.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(l.jsx)(u,{monster:e},e.id)}))})}),j=(n(16),function(e){var t=e.placeholder,n=e.handleChange;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),m=(n(17),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,s=t.filter((function(e){return e.name.toLowerCase().includes(n.toLocaleLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monsters Rolodex"}),Object(l.jsx)(j,{placeholder:"search monsters",handleChange:this.handleChange}),Object(l.jsx)(d,{monsters:s})]})}}]),n}(s.Component)),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),s(e),r(e),c(e),o(e)}))};c.a.render(Object(l.jsx)(m,{}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.be29974e.chunk.js.map