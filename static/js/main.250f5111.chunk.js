(this["webpackJsonpreact-app-basics-exercise"]=this["webpackJsonpreact-app-basics-exercise"]||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(17)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(3),s=t.n(o),c=(t(14),t(1)),i=t(7),l=t(4),u=t(5),d=t(8),p=t(6),m=(t(15),t(16),function(e){return r.a.createElement("div",{className:"Person"},r.a.createElement("p",{onClick:e.click},"I'm ",e.name," & I am ",e.age," years old!"),r.a.createElement("p",null,e.children),r.a.createElement("input",{type:"text",onChange:e.changed,value:e.name}))}),h=function(e){Object(d.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={persons:[{id:"a1",name:"Max",age:32},{id:"b2",name:"Manu",age:12},{id:"c3",name:"Steph",age:26}],other:"some value",showPersons:!1},e.nameChangedHandler=function(n,t){var a=e.state.persons.findIndex((function(e){return e.id===t})),r=Object(i.a)({},e.state.persons[a]);r.name=n.target.value;var o=Object(c.a)(e.state.persons);o[a]=r,e.setState({persons:o})},e.deletePersonHandler=function(n){var t=Object(c.a)(e.state.persons);t.splice(n,1),e.setState({persons:t})},e.togglePersonsHandler=function(){var n=e.state.showPersons;e.setState({showPersons:!n})},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this,n=null;return this.state.showPersons&&(n=r.a.createElement("div",null,this.state.persons.map((function(n,t){return r.a.createElement(m,{click:function(){return e.deletePersonHandler(t)},name:n.name,age:n.age,key:n.id,changed:function(t){return e.nameChangedHandler(t,n.id)}})})))),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Hi, I am a React App"),r.a.createElement("p",null,"This is really working!"),r.a.createElement("button",{style:{backgroundColor:"lightgreen",border:"1px solid blue",padding:"8px",cursor:"pointer"},onClick:this.togglePersonsHandler},"Toggle persons"),n)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.250f5111.chunk.js.map