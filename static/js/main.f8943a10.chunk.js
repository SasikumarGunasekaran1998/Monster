(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),r=t(4),s=t.n(r),o=(t(13),t(5)),i=t(6),h=t(2),u=t(8),l=t(7),d=(t(14),t(0)),j=function(e){var n=e.placeholder,t=e.handleChange;return Object(d.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})},p=(t(16),function(e){return Object(d.jsx)("div",{className:"card-container",children:Object(d.jsx)("h1",{children:e.monster.name})})}),f=(t(17),function(e){return Object(d.jsx)("div",{className:"card-list",children:e.Monsters.map((function(e){return Object(d.jsx)(p,{monster:e},e.id)}))})}),b=(t.p,t(18),function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){var e;return Object(o.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={Monsters:[],searchField:"",demo:[{d:"1"}],inp:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({Monsters:n})}))}},{key:"render",value:function(){var e=this.state,n=e.Monsters,t=e.searchField,c=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{placeholder:"search Monster",handleChange:this.handleChange}),Object(d.jsx)(f,{Monsters:c}),">"]})}}]),t}(c.Component)),m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),m()}],[[19,1,2]]]);
//# sourceMappingURL=main.f8943a10.chunk.js.map