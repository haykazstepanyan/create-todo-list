(this["webpackJsonpcreate-todo-list"]=this["webpackJsonpcreate-todo-list"]||[]).push([[0],{40:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),s=c.n(a),o=c(8),i=c.n(o),r=c(12),l=c(6),d=c(43),j=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};c=Object(l.a)({path:"/"},c);var n=encodeURIComponent(e)+"="+encodeURIComponent(t);for(var a in c){n+="; "+a;var s=c[a];!0!==s&&(n+="="+s)}document.cookie=n},b="Haykaz",u="Stepanyan",O=function(e){return{type:"GET_TODOS_SUCCESS",payload:{tasks:e}}},_=function(){return j("tasks","",{"max-age":-1}),O([])},f=function(e){return function(t){fetch("https://todo.eachbase.com/api/".concat(b).concat(u,"/todos/").concat(e),{method:"DELETE"}).catch((function(){return t(m("error"))}))}},h=function(e){return function(t){var c=e.map((function(e){var t=e._id;return fetch("https://todo.eachbase.com/api/".concat(b).concat(u,"/todos/").concat(t),{method:"DELETE"})}));Promise.all(c).catch((function(){return t(m("error"))}))}},m=function(e,t){return{type:"OPEN_NOTIFICATION_BOX",payload:{type:e,message:t}}},x=c(100),p=c(23),v=c(18),N=c(4),k=c.n(N),C=c(54),g=c.n(C),T=c(51),y=c.n(T),S=c(53),E=c.n(S),R=c(52),I=c.n(R),A=c(101),w=c(103),H=c(98),D=c(99),B=c(102),F=c(24),J=c.n(F);c(40);var L=function(e){var t=e.isOpen,c=e.closeHandler,a=e.deleteHandler;return Object(n.jsxs)(A.a,{open:t,onClose:c,"aria-labelledby":"form-dialog-title",className:"modals delete-modal",children:[Object(n.jsx)(w.a,{id:"form-dialog-title",className:"modals__title",children:Object(n.jsx)(B.a,{"aria-label":"Close",className:"close-button",onClick:c,children:Object(n.jsx)(J.a,{})})}),Object(n.jsx)(H.a,{children:Object(n.jsx)("h3",{children:"Are you sure you want to delete?"})}),Object(n.jsxs)(D.a,{children:[Object(n.jsx)("button",{className:"modals__buttons modals__buttons_cancel",onClick:c,children:"Cancel"}),Object(n.jsx)("button",{className:"modals__buttons modals__buttons_submit",onClick:a,children:"Delete"})]})]})};var U=function(e){var t=e.isOpen,c=e.closeHandler,s=e.editHandler,o=e.data,i=Object(a.useState)({title:o.title,description:o.description,color:o.color}),r=Object(v.a)(i,2),d=r[0],j=r[1];function b(e){var t=e.target,c=t.name,n=t.value;j((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(p.a)({},c,n))}))}var u=""===d.title||""===d.description;return Object(n.jsxs)(A.a,{open:t,onClose:c,"aria-labelledby":"form-dialog-title",className:"modals edit-modal",children:[Object(n.jsxs)(w.a,{id:"form-dialog-title",className:"modals__title",children:["Edit Task",Object(n.jsx)(B.a,{"aria-label":"Close",className:"close-button",onClick:c,children:Object(n.jsx)(J.a,{})})]}),Object(n.jsxs)(H.a,{children:[Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("input",{type:"text",name:"title",value:d.title,onChange:b})}),Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("input",{type:"text",name:"description",value:d.description,onChange:b})}),Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("input",{type:"color",name:"color",value:d.color,onChange:b})})]}),Object(n.jsxs)(D.a,{children:[Object(n.jsx)("button",{className:"modals__buttons modals__buttons_cancel",onClick:c,children:"Cancel"}),Object(n.jsx)("button",{className:"modals__buttons modals__buttons_submit",disabled:u,onClick:function(){return s(o._id,d)},children:"Edit"})]})]})};var G=function(e){var t=e.task,c=Object(a.useState)(!1),s=Object(v.a)(c,2),o=s[0],i=s[1],b=Object(a.useState)(!1),u=Object(v.a)(b,2),_=u[0],f=u[1],h=Object(r.b)(),x=t.title,p=t.description,N=t.color,k=t._id,C=y()(N),g=C.isLight(),T=C.isDark(),S=g?"task-box__item_dark":T?"task-box__item_light":"",R=Object(a.useCallback)((function(){return i(!1)}),[]),A=Object(a.useCallback)((function(){return f(!1)}),[]),w=Object(a.useCallback)((function(e){h(function(e){return function(t,c){t({type:"START_ACTION"});var n=c().todos.filter((function(t){return t._id!==e}));j("tasks",JSON.stringify(n)),t(O(n)),t(m("success","The task is already deleted"))}}(e)),R()}),[R]),H=Object(a.useCallback)((function(e,t){h(function(e,t){return function(c,n){c({type:"START_ACTION"});var a=n().todos,s=a.findIndex((function(t){return t._id===e}));a[s]=Object(l.a)(Object(l.a)({},a[s]),{},{title:t.title,description:t.description,color:t.color});var o=Object(d.a)(a);j("tasks",JSON.stringify(o)),c(O(o)),c(m("success","Task is successfully updated"))}}(e,t)),A()}),[A]);return Object(n.jsxs)("li",{className:"task-box__item ".concat(S),style:{background:N},children:[Object(n.jsxs)("div",{className:"task-box__content",children:[Object(n.jsx)("h3",{children:x}),Object(n.jsx)("p",{children:p}),Object(n.jsxs)("div",{className:"task-box__buttons",children:[Object(n.jsx)(I.a,{className:"task-box__icon",onClick:function(){f(!0)}}),Object(n.jsx)(E.a,{className:"task-box__icon",onClick:function(){i(!0)}})]})]}),o&&Object(n.jsx)(L,{isOpen:o,closeHandler:R,deleteHandler:function(){return w(k)}}),_&&Object(n.jsx)(U,{isOpen:_,closeHandler:A,data:t,editHandler:H})]})},P=c.p+"static/media/nothing-to-show.5a7e680c.jpg";var M=function(){return Object(n.jsxs)("div",{className:"task-box__no-tasks",children:[Object(n.jsx)("h2",{children:"There is nothing to show"}),Object(n.jsx)("img",{src:P,alt:"nothing-to-show"})]})};var X=function(e){var t=e.closeHandler,c=e.dataHandler,a=e.createHandler,s=e.isOpen,o=e.data,i=o.title,r=o.description,l=o.color,d=""===i||""===r;return Object(n.jsxs)(A.a,{open:s,onClose:t,"aria-labelledby":"form-dialog-title",className:"new-todo modals",children:[Object(n.jsxs)(w.a,{id:"form-dialog-title",className:"modals__title new-todo__title",children:["Create new Task",Object(n.jsx)(B.a,{"aria-label":"Close",className:"close-button",onClick:t,children:Object(n.jsx)(J.a,{})})]}),Object(n.jsxs)(H.a,{children:[Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("input",{type:"text",placeholder:"Title",name:"title",value:i,onChange:c})}),Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("input",{type:"text",placeholder:"Description",name:"description",value:r,onChange:c})}),Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("input",{type:"color",name:"color",value:l,onChange:c})})]}),Object(n.jsxs)(D.a,{children:[Object(n.jsx)("button",{className:"modals__buttons modals__buttons_cancel",onClick:t,children:"Cancel"}),Object(n.jsx)("button",{className:"modals__buttons modals__buttons_submit",onClick:a,disabled:d,children:"Save"})]})]})};c(73);G.propTypes={todoItems:k.a.arrayOf(k.a.objectOf({title:k.a.string.isRequired,description:k.a.string.isRequired,color:k.a.string.isRequired}))};var q=function(e){var t=e.todoItems,c={title:"",description:"",color:"#000"},s=Object(a.useState)(!1),o=Object(v.a)(s,2),i=o[0],h=o[1],x=Object(a.useState)(c),N=Object(v.a)(x,2),k=N[0],C=N[1],T=Object(r.b)(),y=Object(a.useCallback)((function(){h(!1),C(c)}),[]),S=Object(a.useCallback)((function(){var e;T((e=k,function(t,c){t({type:"START_ACTION"}),fetch("https://todo.eachbase.com/api/".concat(b).concat(u,"/todos"),{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){var n=[e].concat(Object(d.a)(c().todos));j("tasks",JSON.stringify(n)),t(f(e._id)),t(O(n)),t(m("success","The task is successfully created"))})).catch((function(){t(m("error")),t({type:"CREATE_TODO_ERROR"})}))}))}),[k]),E=Object(a.useCallback)((function(e){var t=e.target,c=t.name,n=t.value;C((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(p.a)({},c,n))}))}),[C]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"task-box__heading",children:[Object(n.jsx)("h1",{children:"My Tasks"}),Object(n.jsx)("div",{className:"task-box__new-todo",children:Object(n.jsx)(g.a,{onClick:function(){h(!0)}})})]}),Object(n.jsx)("ul",{className:"task-box__list",children:t.length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"task-box__clear-all",onClick:function(){T(_())},children:Object(n.jsx)("span",{children:"Clear All Tasks"})}),null===t||void 0===t?void 0:t.map((function(e){return Object(n.jsx)(G,{task:e},e._id)}))]}):Object(n.jsx)(M,{})}),i&&Object(n.jsx)(X,{closeHandler:y,isOpen:i,data:k,dataHandler:E,createHandler:S})]})},z=c(55),$=c.n(z),K=c(56),Q=c.n(K);c(74);var V=function(){var e=Object(r.c)((function(e){return e.isOpenNotifBox})),t=Object(r.c)((function(e){return e.notifType})),c=Object(r.c)((function(e){return e.notifMessage})),s=Object(r.b)();return Object(a.useEffect)((function(){e&&setTimeout((function(){return s({type:"CLOSE_NOTIFICATION_BOX"})}),3e3)}),[e]),e?Object(n.jsx)("div",{className:"notification",children:Object(n.jsx)("div",{className:"notification__content",children:"success"===t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)($.a,{className:"notification__icon notification__icon_success"}),c]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Q.a,{className:"notification__icon notification__icon_error"}),Object(n.jsx)("p",{children:"Something went wrong. Please try again later"})]})})}):null};var W=function(){var e=Object(r.c)((function(e){return e.todos})),t=Object(r.c)((function(e){return e.loading})),c=Object(r.b)();return Object(a.useEffect)((function(){var e=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([.$?*|{}()[]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return console.log(t),t?decodeURIComponent(t[1]):void 0}("tasks");c(e?O(JSON.parse(e)):function(e){e({type:"START_ACTION"}),fetch("https://todo.eachbase.com/api/".concat(b).concat(u,"/todos")).then((function(e){return e.json()})).then((function(t){var c=t.reverse();j("tasks",JSON.stringify(c)),e(h(c)),e(O(c))})).catch((function(){e({type:"GET_TODOS_ERROR"})}))})}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{className:"task-box",children:t?Object(n.jsx)("div",{className:"task-box__loader",children:Object(n.jsx)(x.a,{size:100})}):Object(n.jsx)(q,{todoItems:e})}),Object(n.jsx)(V,{})]})},Y=c(30),Z=c(57),ee={loading:!0,error:!1,todos:[],newTodo:null,isOpenNotifBox:!1},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case"START_ACTION":return Object(l.a)(Object(l.a)({},e),{},{loading:!0,error:!1});case"GET_TODOS_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{todos:n.tasks,loading:!1});case"GET_TODOS_ERROR":return Object(l.a)(Object(l.a)({},e),{},{error:!0,loading:!1});case"CREATE_TODO_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{newTodo:n.task,loading:!1});case"CREATE_TODO_ERROR":return Object(l.a)(Object(l.a)({},e),{},{error:!0,loading:!1});case"OPEN_NOTIFICATION_BOX":return Object(l.a)(Object(l.a)({},e),{},{isOpenNotifBox:!0,notifType:n.type,notifMessage:n.message});case"CLOSE_NOTIFICATION_BOX":return Object(l.a)(Object(l.a)({},e),{},{isOpenNotifBox:!1});case"CHANGE_TASKS_LIST":return Object(l.a)(Object(l.a)({},e),{},{todos:n.tasks});default:return e}},ce=Object(Y.c)(te,Object(Y.a)(Z.a));c(75);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(r.a,{store:ce,children:Object(n.jsx)(W,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.36ba7e77.chunk.js.map