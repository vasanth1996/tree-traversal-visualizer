(this["webpackJsonptree-traversal-visualizer"]=this["webpackJsonptree-traversal-visualizer"]||[]).push([[0],{65:function(e,t,n){e.exports=n(90)},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},86:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),c=n.n(i),s=(n(70),n(71),n(57)),o=n(7),l=n(31),u=n(32),d=n(37),v=n(36),h=n(25),m=(n(72),n(52)),p=n.n(m),f=(n(73),n(51)),E=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).updateToParent=function(){var e=a.props.node;a.props.onChildRenderFinish(e)},a.renderChildren=function(){var e=a.state,t=e.children,i=e.active;return t.map((function(e){return r.a.createElement(n,{active:i,key:e.id,node:e,onChildRenderFinish:a.onChildRenderFinish})}))},a.onChildRenderFinish=function(e){if(!e||!e.id)return null;var t=a.state,n=t.id,r=t.connectingLines,i=document.getElementById(n).getBoundingClientRect().toJSON(),c=document.getElementById(e.id).getBoundingClientRect().toJSON(),s=i.width/2,o={x:i.x+s,y:i.y+s+26,x1:c.x+s,y1:c.y+s-26};r.push(o),a.setState({connectingLines:r})},a.renderConnectingLines=function(){return a.state.connectingLines.map((function(e){return r.a.createElement(f.Line,{key:"line_".concat(e.x1,"_").concat(e.y1),x0:e.x,y0:e.y,x1:e.x1,y1:e.y1,borderColor:"#2196F3"})}))},a.renderActiveArrow=function(){var e=a.props,t=e.active,n=e.node;return e.showActiveArrow&&t&&n&&t.id===n.id?r.a.createElement("div",{className:"tree-node-arrow"},r.a.createElement(p.a,{htmlColor:"#FE6B8B"})):null},a.getStatusClass=function(){var e=a.props,t=e.active,n=e.node;return t&&n&&t.id===n.id?"tree-node-active":"tree-node-inactive"},a.state={id:null,name:"",children:[],connectingLines:[],active:null},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.updateToParent()}},{key:"render",value:function(){var e=this.props.node;return e?r.a.createElement("div",{className:"tree-node-root"},r.a.createElement("div",{id:e.id,className:"tree-node-container ".concat(this.getStatusClass())},e.name),r.a.createElement("div",{className:"tree-node-children"},this.renderChildren()),this.renderConnectingLines(),this.renderActiveArrow()):null}}]),n}(a.Component);function g(e,t){this.id=e,this.name=void 0===t?0:t,this.children=[]}E.getDerivedStateFromProps=function(e){var t=e.node,n=e.active;return t?{id:t.id,name:t.name,children:t.children,active:n}:null},E.defaultProps={active:!1,node:null,onChildRenderFinish:function(){},showActiveArrow:!0};var b={name:"A",children:[{name:"B",children:[{name:"C",children:[]},{name:"D",children:[]}]},{name:"E",children:[{name:"F",children:[]},{name:"G",children:[]}]}]},O=b?function e(t,n,a,r){for(var i=new g("node_".concat(n,"_").concat(a,"_").concat(r),t.name),c=t.children,s=0;s<c.length;s++){var o=e(c[s],n+1,s,t.name);i.children.push(o)}return i}(b,0,0,""):null,y=n(58);n(86);function T(e){var t=Object(a.useState)(""),n=Object(y.a)(t,2),i=n[0],c=n[1];return r.a.createElement("div",{className:"select-box-container"},r.a.createElement("label",null,e.placeholder),r.a.createElement("select",Object.assign({},e,{onChange:function(t){return function(t){var n=t.target.value;c(n),e.handleChange(n)}(t)},value:i,className:"select-box"}),r.a.createElement("option",{value:""},"None"),e.children))}T.defaultProps={placeholder:"Name",handleChange:function(e){}};var w,x=n(17),R=n.n(x),k=n(56),C=n(22),S=function(e,t){return new Promise((function(n){setTimeout((function(){t(e),n()}),1500)}))},F=function(){var e=Object(C.a)(R.a.mark((function e(t,n,a){var r,i,c,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,i=Object(k.a)(t),e.prev=2,i.s();case 4:if((c=i.n()).done){e.next=14;break}if(s=c.value,!r){e.next=10;break}return n(s),r=!1,e.abrupt("continue",12);case 10:return e.next=12,S(s,n);case 12:e.next=4;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),i.e(e.t0);case 19:return e.prev=19,i.f(),e.finish(19);case 22:a();case 23:case"end":return e.stop()}}),e,null,[[2,16,19,22]])})));return function(t,n,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(C.a)(R.a.mark((function e(t,n,a){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(t,r=[]),F(r,n,a);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),N=function e(t,n){if(t){var a=t.children;e(a[0],n),n.push(t),e(a[1],n)}},L=function(){var e=Object(C.a)(R.a.mark((function e(t,n,a){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B(t,r=[]),F(r,n,a);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),B=function e(t,n){if(t){var a=t.children;n.push(t),e(a[0],n),e(a[1],n)}},D=function(){var e=Object(C.a)(R.a.mark((function e(t,n,a){var r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(t,r=[]),F(r,n,a);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),P=function e(t,n){if(t){var a=t.children;e(a[0],n),e(a[1],n),n.push(t)}},A=function(){var e=Object(C.a)(R.a.mark((function e(t,n,a){var r,i,c,s;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=[],i=[],t&&i.push(t);i.length>0;)c=i.shift(),r.push(c),(s=c.children)[0]&&i.push(s[0]),s[1]&&i.push(s[1]);F(r,n,a);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),I=n(115),_=n(116),z=n(126),J=n(123),V=n(122),W={DFS:"DFS",BFS:"BFS",INORDER:"In Order",PREORDER:"Pre Order",POSTORDER:"Post Order",LEVELORDER:"Level Order"},G=(w={},Object(h.a)(w,W.DFS,[W.INORDER,W.POSTORDER,W.PREORDER]),Object(h.a)(w,W.BFS,[W.LEVELORDER]),w),H=function(e){Object(d.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleTypeChange=function(e){a.setState({type:e,traversal:null,active:null,activeList:[]})},a.handleTraversalChange=function(e){a.setState({traversal:e,active:null,activeList:[]})},a.startTraversal=function(){a.setState({isTraverseInProgress:!0,active:null,activeList:[]},(function(){a._startTraversal()}))},a._startTraversal=function(){var e=a.state,t=e.tree;switch(e.traversal){case W.INORDER:j(t,a.setActive,a.onTraversalFinish);break;case W.PREORDER:L(t,a.setActive,a.onTraversalFinish);break;case W.POSTORDER:D(t,a.setActive,a.onTraversalFinish);break;case W.LEVELORDER:A(t,a.setActive,a.onTraversalFinish)}},a.setActive=function(e){var t=a.state.activeList;t.push(e),a.setState({active:e,activeList:t},(function(){a.scrollToBottom()}))},a.onTraversalFinish=function(){a.setState({isTraverseInProgress:!1,isTraverseFinish:!0})},a.scrollToBottom=function(){window.scrollTo(0,document.body.scrollHeight)},a.handleSnackBarClose=function(){a.setState({isTraverseFinish:!1})},a.state={tree:O,type:null,traversal:null,active:null,activeList:[],isTraverseInProgress:!1,isTraverseFinish:!1},a}return Object(u.a)(n,[{key:"renderType",value:function(){var e=this.state.isTraverseInProgress;return r.a.createElement("div",{className:"tree-select-box"},r.a.createElement(T,{disabled:e,handleChange:this.handleTypeChange,placeholder:"Type"},r.a.createElement("option",{value:W.DFS},"DFS-Traversal"),r.a.createElement("option",{value:W.BFS},"BFS-Traversal")))}},{key:"renderTraversal",value:function(){var e=this.state,t=e.type,n=e.isTraverseInProgress,a=G[t],i=null;return a&&(i=a.map((function(e){return r.a.createElement("option",{value:e},e)}))),r.a.createElement("div",{className:"tree-select-box"},r.a.createElement(T,{disabled:n,handleChange:this.handleTraversalChange,placeholder:"Traversal"},i))}},{key:"renderOptions",value:function(){return r.a.createElement(I.a,{container:!0},r.a.createElement(I.a,{item:!0,xs:0,md:2}),r.a.createElement(I.a,{item:!0,xs:12,md:3},this.renderType()),r.a.createElement(I.a,{item:!0,xs:12,md:3},this.renderTraversal()),r.a.createElement(I.a,{className:"button",item:!0,xs:12,md:1},r.a.createElement("div",null,this.renderButtons())),r.a.createElement(I.a,{item:!0,xs:0,md:2}))}},{key:"renderButtons",value:function(){var e=this.state,t=e.type,n=e.traversal,a=e.isTraverseInProgress,i=!0;return t&&n&&!a&&(i=!1),r.a.createElement(_.a,{onClick:this.startTraversal,disabled:i,variant:"contained",color:"primary"},"Start")}},{key:"renderActiveList",value:function(){var e=this.state,t=e.activeList,n=e.traversal,a=t.map((function(e){var t=new g("_".concat(e.id),e.name);return r.a.createElement(E,{node:t,active:t,showActiveArrow:!1})}));return 0==a.length?null:r.a.createElement("div",{className:"tree-active-list"},r.a.createElement("p",null,n," Traversal"),r.a.createElement(I.a,{container:!0,xs:12,direction:"row",justify:"center",wrap:!0},a))}},{key:"TransitionRight",value:function(e){return r.a.createElement(z.a,Object.assign({},e,{direction:"left"}))}},{key:"render",value:function(){var e=this.state,t=e.tree,n=e.active,a=e.traversal,i=e.isTraverseFinish;return r.a.createElement("div",{className:"tree-container"},r.a.createElement(I.a,{container:!0},this.renderOptions(),r.a.createElement(I.a,{item:!0,xs:12,md:12},r.a.createElement(E,{node:t,active:n})),this.renderActiveList()),r.a.createElement(J.a,{open:i,autoHideDuration:6e3,TransitionComponent:this.TransitionRight,anchorOrigin:{vertical:"top",horizontal:"right"},onClose:this.handleSnackBarClose},r.a.createElement(V.a,{elevation:6,variant:"filled",severity:"success"},a," Finished!")))}}]),n}(a.Component),M=n(118),$=n(119),q=n(120),K=n(117),Q=n(121),U=n(125),X=Object(M.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(h.a)({display:"none"},e.breakpoints.up("xs"),{display:"block"}),sectionDesktop:Object(h.a)({display:"none"},e.breakpoints.up("xs"),{display:"flex"}),padding:{width:1,height:64}}}));var Y=function(){var e=X();return r.a.createElement("div",{className:e.grow},r.a.createElement($.a,{position:"fixed"},r.a.createElement(q.a,null,r.a.createElement(K.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(U.a,null)),r.a.createElement(Q.a,{className:e.title,variant:"h6",noWrap:!0},"Tree Traversal Visualizer"),r.a.createElement("div",{className:e.grow}))),r.a.createElement("div",{className:e.padding}))};function Z(){return r.a.createElement(s.a,null,r.a.createElement(Y,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:H}),r.a.createElement(o.a,{path:"/tree",component:H})))}var ee=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.85028254.chunk.js.map