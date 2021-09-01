(this["webpackJsonpath-capital"]=this["webpackJsonpath-capital"]||[]).push([[6],{605:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(205),a=r(0);function c(){return Object(a.useContext)(n.a)}},608:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return a})),r.d(t,"d",(function(){return c})),r.d(t,"a",(function(){return o}));var n="users",a="requests",c="withdrawalRequests",o="commissions"},633:function(e,t,r){"use strict";r(0);var n=r(553),a=r(149),c=r(645),o=r.n(c),l=r(541),i=r(3),s=Object(n.a)((function(){return{text:{textAlign:"center"}}}));var u=function(e){var t=e.text,r=s();return Object(i.jsxs)(a.a,{color:"textSecondary",className:r.text,children:[t,Object(i.jsx)(l.a,{"aria-label":"copy",onClick:function(){return navigator.clipboard.writeText(t)},children:Object(i.jsx)(o.a,{})})]})};t.a=u},715:function(e,t,r){"use strict";r.r(t);var n=r(10),a=r(0),c=r(33),o=r(17),l=r(20),i={path:":projectId",component:Object(l.c)((function(){return r.e(5).then(r.bind(null,723))}))},s=r(16),u=r(76),d=r(553),j=r(149),b=r(27),f=r(605),O=r(110),h=r(608),v=r(319),x=r(541),p=r(696),m=r(643),g=r.n(m),y=r(3),w=Object(d.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"flex-start",height:"200px",width:"100%",margin:e.spacing(.5),padding:e.spacing(1.3)},top:{display:"flex",justifyContent:"space-between",width:"100%"},name:{fontSize:"1.5rem",cursor:"pointer",textDecoration:"none",transition:"all 800ms cubic-bezier(0.25,0.1,0.25,1) 0ms",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap","&:hover":{color:""},"&:visited":{textDecoration:"none"}}}}));function C(e){var t=e.name,r=e.projectId,a=e.showDelete,c=w(),l=Object(o.g)(),i=Object(f.a)(),s=i.showError,u=i.showSuccess,d=Object(b.useFirestore)();return Object(y.jsx)(v.a,{className:c.root,role:"listitem",variant:"outlined",children:Object(y.jsxs)("div",{className:c.top,children:[Object(y.jsx)("span",{className:c.name,onClick:function(){return l.push("".concat(n.c,"/").concat(r))},children:t||"No Name"}),a?Object(y.jsx)(p.a,{title:"Delete",children:Object(y.jsx)(x.a,{onClick:function(){return d.delete("projects/".concat(r)).then((function(){return u("Project deleted successfully")})).catch((function(e){return console.error("Error:",e),s(e.message||"Could not delete project"),Promise.reject(e)}))},children:Object(y.jsx)(g.a,{})})}):null]})})}C.defaultProps={showDelete:!0};r(607),r(730),r(603),r(698),r(699),r(701),r(700),Object(d.a)((function(e){return{root:{padding:e.spacing(2)},inputs:Object(s.a)({},e.flexColumnCenter),buttons:Object(s.a)({},e.flexColumnCenter)}}));var S=r(670),N=r(702),A=r(704),D=r(611),k=r(703),B=Object(d.a)((function(e){return{root:{display:"flex",marginBottom:20,"&:last-child":{marginBottom:0}},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto",padding:10,paddingBottom:"10px !important"},cover:{width:69},playIcon:{height:38,width:38}}}));function E(){var e=B(),t=Object(c.useSelector)((function(e){return e.firebase.profile})),r=Object(a.useState)([]),n=Object(u.a)(r,2),o=n[0],l=n[1];Object(a.useEffect)((function(){i()}),[t]);var i=function(){var e=[];if(t.level1){var r,n=Object(D.a)(t.level1);try{for(n.s();!(r=n.n()).done;){var a=r.value;e.push({email:a.email,level:"1"})}}catch(j){n.e(j)}finally{n.f()}}if(t.level2){var c,o=Object(D.a)(t.level2);try{for(o.s();!(c=o.n()).done;){var i=c.value;e.push({email:i.email,level:"2nd"})}}catch(j){o.e(j)}finally{o.f()}}if(t.level3){var s,u=Object(D.a)(t.level3);try{for(u.s();!(s=u.n()).done;){var d=s.value;e.push({email:d.email,level:"3rd"})}}catch(j){u.e(j)}finally{u.f()}}l(e)};return o&&o.map((function(t){return Object(y.jsxs)(N.a,{className:e.root,variant:"outlined",children:[Object(y.jsx)(k.a,{className:e.cover,image:"http://lexaquiliabd.com/wp-content/uploads/2017/10/ATbrxjpyc.jpg",title:"user avatar"}),Object(y.jsx)("div",{className:e.details,children:Object(y.jsxs)(A.a,{className:e.content,children:[Object(y.jsx)(j.a,{component:"p",variant:"subtitle1",children:t.email}),Object(y.jsxs)(j.a,{variant:"subtitle2",color:"textSecondary",children:[t.level," \u0423\u0440\u043e\u0432\u0435\u043d\u044c"]})]})})]})}))}E.defaultProps={};var F=E,P=r(614),J=r(655),T=function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][new Date(e).getMonth()]},q=function(e){return new Date(e).getDate()},I=function(e,t){var r=0;return e.forEach((function(e){return e===t&&r++})),r},L=Object(d.a)((function(e){return{}})),R={maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}};function W(){L();var e=Object(c.useSelector)((function(e){return e.firebase.profile})),t=Object(a.useState)({labels:[],datasets:[{label:"\u0420\u0435\u0444\u0444\u0435\u0440\u0430\u043b\u044b",data:[],fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)"}]}),r=Object(u.a)(t,2),n=r[0],o=r[1];Object(a.useEffect)((function(){var t,r,n;(null===e||void 0===e||null===(t=e.level1)||void 0===t?void 0:t.length)>=0&&(null===e||void 0===e||null===(r=e.level2)||void 0===r?void 0:r.length)>=0&&(null===e||void 0===e||null===(n=e.level3)||void 0===n?void 0:n.length)>=0&&l()}),[e]);var l=function(){var t,r=[],n=[].concat(Object(P.a)(e.level1),Object(P.a)(e.level2),Object(P.a)(e.level3)).map((function(e){return e.createdAt.seconds})).sort((function(e,t){return e-t})).map((function(e){return"".concat(T(t=1e3*e)," ").concat(q(t));var t})),a=Object(P.a)(new Set(n)),c=Object(D.a)(a);try{for(c.s();!(t=c.n()).done;){var l=t.value;r.push(I(n,l))}}catch(i){c.e(i)}finally{c.f()}o({labels:a,datasets:[{label:"\u0420\u0435\u0444\u0444\u0435\u0440\u0430\u043b\u044b",data:r,fill:!1,backgroundColor:"#02AA44",borderColor:"#02AA4488"}]})};return Object(y.jsx)("div",{style:{height:300},children:Object(y.jsx)(J.a,{data:n,options:R})})}W.defaultProps={};var z=W,M=Object(d.a)((function(e){return{graphContainer:{width:"100%",display:"flex",justifyContent:"center"},graph:{maxWidth:300}}}));function V(){var e=M(),t=Object(c.useSelector)((function(e){return e.firebase.profile})),r=Object(a.useState)({labels:["1","2nd","3rd"],datasets:[{label:"Level of Referals",data:[0,0,0],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)"],borderWidth:1}]}),n=Object(u.a)(r,2),o=n[0],l=n[1];return Object(a.useEffect)((function(){var e,r,n;(null===t||void 0===t||null===(e=t.level1)||void 0===e?void 0:e.length)>=0&&(null===t||void 0===t||null===(r=t.level2)||void 0===r?void 0:r.length)>=0&&(null===t||void 0===t||null===(n=t.level3)||void 0===n?void 0:n.length)>=0&&l({labels:["1","2nd","3rd"],datasets:[{label:"Level of Referals",data:[t.level1.length,t.level2.length,t.level3.length],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)"],borderWidth:1}]})}),[t]),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:e.graphContainer,children:Object(y.jsx)("div",{className:e.graph,children:Object(y.jsx)(J.b,{data:o})})})})}V.defaultProps={};var G=V,Y=r(633),Z=Object(d.a)((function(e){return{root:{flexGrow:"2",boxSizing:"border-box"},tiles:Object(s.a)(Object(s.a)({display:"flex"},e.flexColumnCenter),{},{flexWrap:"wrap","-webkit-flex-flow":"row wrap"}),empty:{padding:e.spacing(4)},copyButton:{marginLeft:e.spacing(4)},button:{display:"flex",justifyContent:"flex-end"},container:{marginTop:20},title:{marginBottom:20},center:{width:"100%",display:"flex",justifyContent:"center"}}}));var H=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),r=t[0],o=t[1],l=(Object(b.useFirestore)(),Object(c.useSelector)((function(e){return e.firebase.auth})));Object(a.useEffect)((function(){o(window.location.origin)}),[]);var i=Z(),d=function(){var e=Object(f.a)(),t=e.showSuccess,r=e.showError,n=Object(b.useFirestore)(),o=Object(c.useSelector)((function(e){return e.firebase.auth}));Object(b.useFirestoreConnect)([{collection:h.b,where:["createdBy","==",o.uid]}]),Object(b.useFirestoreConnect)([{collection:h.a}]);var l=Object(c.useSelector)((function(e){return e.firestore.ordered.requests})),i=Object(a.useState)(!1),d=Object(u.a)(i,2),j=d[0],O=d[1],v=function(){return O(!j)};return{projects:l,addProject:function(e){return o.uid?n.add(h.b,Object(s.a)(Object(s.a)({},e),{},{createdBy:o.uid,createdAt:n.FieldValue.serverTimestamp()})).then((function(){v(),t("Project added successfully")})).catch((function(e){return console.error("Error:",e),r(e.message||"Could not add project"),Promise.reject(e)})):r("You must be logged in to create a project")},newDialogOpen:j,toggleDialog:v}}().projects;return Object(b.isLoaded)(d)?Object(y.jsx)("div",{className:i.root,children:Object(y.jsxs)(S.a,{container:!0,spacing:3,className:i.container,children:[Object(y.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(y.jsx)(N.a,{className:i.card,variant:"outlined",children:Object(y.jsxs)(A.a,{children:[Object(y.jsx)(j.a,{className:i.title,color:"textSecondary",gutterBottom:!0,children:"\u0420\u0435\u0444\u0444\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430"}),Object(y.jsx)(Y.a,{text:"".concat(r).concat(n.h,"?referral=").concat(l.uid)})]})})}),d.length>0?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(S.a,{item:!0,xs:12,children:Object(y.jsx)(N.a,{className:i.card,variant:"outlined",children:Object(y.jsxs)(A.a,{children:[Object(y.jsx)(j.a,{className:i.title,color:"textSecondary",gutterBottom:!0,children:"\u0420\u0435\u0444\u0444\u0435\u0440\u0430\u043b\u043e\u0432 \u0437\u0430 \u0432\u0441\u0451 \u0432\u0440\u0435\u043c\u044f"}),Object(y.jsx)(z,{})]})})}),Object(y.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(y.jsx)(N.a,{className:i.card,variant:"outlined",children:Object(y.jsxs)(A.a,{children:[Object(y.jsx)(j.a,{className:i.title,color:"textSecondary",gutterBottom:!0,children:"\u0412\u0430\u0448\u0438 \u0440\u0435\u0444\u0444\u0435\u0440\u0430\u043b\u044b"}),Object(y.jsx)(F,{})]})})}),Object(y.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(y.jsx)(N.a,{className:i.card,variant:"outlined",children:Object(y.jsxs)(A.a,{children:[Object(y.jsx)(j.a,{className:i.title,color:"textSecondary",gutterBottom:!0,children:"\u041e\u0442\u043a\u0443\u0434\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u044f\u0442 \u0432\u0430\u0448\u0438 \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u044b"}),Object(y.jsx)(G,{})]})})})]}):Object(y.jsx)(S.a,{item:!0,xs:12,style:{marginTop:40},children:Object(y.jsx)(j.a,{variant:"h5",style:{textAlign:"center"},children:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0440\u0435\u0444\u0435\u0440\u0430\u043b\u043e\u0432"})})]})}):Object(y.jsx)(O.a,{})};var K=function(){var e=Object(o.j)(),t=Object(c.useSelector)((function(e){return e.firebase.profile})),r=Object(c.useSelector)((function(e){return e.firebase.auth.emailVerified}));return"admin"===t.role?Object(y.jsx)(o.a,{to:n.i}):r?Object(y.jsxs)(o.d,{children:[Object(l.d)([i]),Object(y.jsx)(o.b,{exact:!0,path:e.path,render:function(){return Object(y.jsx)(H,{})}})]}):Object(y.jsx)(o.a,{to:n.j})},Q=l.a;t.default=Q(K)}}]);
//# sourceMappingURL=Projects.55a6f2eb.chunk.js.map