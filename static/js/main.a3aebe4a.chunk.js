(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),l=a.n(r),c=a(6),i=a(7),s=a(5),u=a(1),m=a(2),f=a(4),d=a(3),p=a(10),h=(a(16),function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.done,a=e.important,n=e.label,r=e.onDeleted,l=e.onToggleDone,c=e.onToggleImportant,i="todo-list-item p-1 pl-3 d-flex align-items-center",s="btn btn-sm btn-outline-success";return t&&(i+=" done"),a&&(i+=" important",s+=" active"),o.a.createElement("div",{className:i},o.a.createElement("span",{onClick:l,className:"todo-list-item-label"},o.a.createElement("span",{className:"todo-list-item-label-icon"},t?o.a.createElement("i",{class:"fa fa-check-square"}):o.a.createElement("i",{class:"fa fa-square"})),n),o.a.createElement("div",{className:"ml-auto todo-list-item-buttons"},o.a.createElement("button",{className:"btn btn-sm btn-outline-danger mr-1",onClick:r},o.a.createElement("i",{className:"fa fa-trash"})),o.a.createElement("button",{className:s,onClick:c},o.a.createElement("i",{className:"fa fa-exclamation"}))))}}]),a}(n.Component)),g=(a(17),function(e){var t=e.onDeleted,a=e.onToggleDone,n=e.onToggleImportant,r=e.todos.map((function(e){var r=e.id,l=Object(p.a)(e,["id"]);return o.a.createElement("li",{key:e.id,className:"list-group-item p-0"},o.a.createElement(h,Object.assign({},l,{onDeleted:function(){return t(r)},onToggleDone:function(){return a(r)},onToggleImportant:function(){return n(r)}})))}));return o.a.createElement("ul",{className:"list-group todo-list mb-2"},r)}),b=(a(18),function(e){var t=e.toDo,a=e.done;return o.a.createElement("div",{className:"app-header d-flex mb-4"},o.a.createElement("h1",{className:"m-0"},"Todo"),o.a.createElement("ul",{className:"app-header-info text-secondary"},o.a.createElement("li",null,t," ",o.a.createElement("i",{class:"fa fa-square"})),o.a.createElement("li",null,a," ",o.a.createElement("i",{class:"fa fa-check-square"}))))}),v=(a(19),function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.filter,a=e.onClickFilter;return o.a.createElement("ul",{className:"btn-group m-0 pl-2"},[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}].map((function(e){var n=e.name===t?"active":"";return o.a.createElement("button",{className:"btn btn-outline-info ".concat(n),key:e.label,onClick:function(){return a(e.name)}},e.label)})))}}]),a}(n.Component)),E=(a(20),function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.onSearchChange=function(t){var a=t.target.value;e.setState({value:a}),e.props.onSearchItem(a)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.value;return o.a.createElement("form",{className:"input-group w-100 search"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("span",{className:"input-group-text cyan lighten-3",id:"basic-text1"},o.a.createElement("i",{className:"fa fa-search text-white"}))),o.a.createElement("input",{className:"form-control my-0 py-1",type:"text",onChange:this.onSearchChange,placeholder:"Type here to search",value:e}))}}]),a}(n.Component)),O=(a(21),function(e){var t=e.onSearchItem,a=e.onClickFilter,n=e.filter;return o.a.createElement("div",{className:"search-panel mb-2 d-flex"},o.a.createElement(E,{onSearchItem:t}),o.a.createElement(v,{onClickFilter:a,filter:n}))}),y=(a(22),function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.onValueChange=function(t){e.setState({value:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.addItem(e.state.value),e.setState({value:""})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.value;return o.a.createElement("form",{className:"add-panel d-flex",onSubmit:this.onSubmit},o.a.createElement("div",{className:"w-100"},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onValueChange,placeholder:"Add Item",value:e})),o.a.createElement("button",{className:"btn btn-outline-success ml-2"},o.a.createElement("i",{className:"fa fa-plus"})))}}]),a}(n.Component)),D=(a(23),function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getTodoData=function(){var e=localStorage.getItem("todoData");return e?JSON.parse(e):[]},e.state={todoData:e.getTodoData(),searchValue:"",filter:"all"},e.onDeleted=function(t){e.setState((function(e){var a=e.todoData,n=a.findIndex((function(e){return e.id===t})),o=[].concat(Object(s.a)(a.slice(0,n)),Object(s.a)(a.slice(n+1)));return window.localStorage.setItem("todoData",JSON.stringify(o)),{todoData:o}}))},e.addItem=function(t){var a=e.createTodoItem(t);e.setState((function(e){var t=e.todoData,n=[].concat(Object(s.a)(t),[a]);return window.localStorage.setItem("todoData",JSON.stringify(n)),{todoData:n}}))},e.onToggleImportant=function(t){e.setState((function(a){var n=a.todoData,o=e.toggleProperty(n,t,"important");return window.localStorage.setItem("todoData",JSON.stringify(o)),{todoData:o}}))},e.onToggleDone=function(t){e.setState((function(a){var n=a.todoData,o=e.toggleProperty(n,t,"done");return window.localStorage.setItem("todoData",JSON.stringify(o)),{todoData:o}}))},e.onSearchItem=function(t){e.setState({searchValue:t})},e.onClickFilter=function(t){e.setState({filter:t})},e}return Object(m.a)(a,[{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:"f".concat((~~(1e8*Math.random())).toString(16))}}},{key:"toggleProperty",value:function(e,t,a){var n=e.findIndex((function(e){return e.id===t})),o=e[n],r=Object(i.a)(Object(i.a)({},o),{},Object(c.a)({},a,!o[a]));return[].concat(Object(s.a)(e.slice(0,n)),[r],Object(s.a)(e.slice(n+1)))}},{key:"search",value:function(e,t){return""===(t=t.toLowerCase()).length?e:e.filter((function(e){return e.label.toLowerCase().indexOf(t)>-1}))}},{key:"filter",value:function(e,t){switch(t){case"active":return e.filter((function(e){return!e.done}));case"done":return e.filter((function(e){return e.done}));default:return e}}},{key:"render",value:function(){var e=this.state,t=e.todoData,a=e.searchValue,n=e.filter,r=t.filter((function(e){return e.done})).length,l=t.length-r,c=this.filter(this.search(t,a),n);return o.a.createElement("div",{className:"app"},o.a.createElement(b,{toDo:l,done:r}),o.a.createElement(O,{onSearchItem:this.onSearchItem,onClickFilter:this.onClickFilter,filter:n}),o.a.createElement(g,{todos:c,onDeleted:this.onDeleted,onToggleDone:this.onToggleDone,onToggleImportant:this.onToggleImportant}),o.a.createElement(y,{addItem:this.addItem}))}}]),a}(n.Component));l.a.render(o.a.createElement(D,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.a3aebe4a.chunk.js.map