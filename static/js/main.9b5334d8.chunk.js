(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(11),s=a.n(c),i=a(2),o=a(3),l=a(5),d=a(4),j=(a(15),a(0)),u=function(){return Object(j.jsxs)("header",{className:"app__header",children:[Object(j.jsx)("h1",{className:"app__title",children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(j.jsx)("nav",{className:"app__menu",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"#",children:"Comics"})})]})})]})},h=a(9),m=a(6),b=a.n(m),f=a(7),O=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=8bd01d288829c5783e8880267f0f7d64",this._baseOffet=789,this.getResource=function(){var e=Object(f.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(f.a)(b.a.mark((function e(){var a,r,n=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>0&&void 0!==n[0]?n[0]:t._baseOffet,e.next=3,t.getResource("".concat(t._apiBase,"characters?limit=9&offset=").concat(a,"&").concat(t._apiKey));case 3:return r=e.sent,e.abrupt("return",r.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(f.a)(b.a.mark((function e(a){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters/").concat(a,"?").concat(t._apiKey));case 2:return r=e.sent,e.abrupt("return",t._transformCharacter(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,200),"..."):"There is no description yet",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}}},p=a.p+"static/media/error.42292aa1.gif",x=function(){return Object(j.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:p,alt:"error_picture"})},v=(a(18),a.p+"static/media/mjolnir.61f31e18.png"),g=function(){return Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(j.jsx)("g",{transform:"translate(80,50)",children:Object(j.jsx)("g",{transform:"rotate(0)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"1",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(j.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(j.jsx)("g",{transform:"rotate(45)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.875",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(j.jsx)("g",{transform:"translate(50,80)",children:Object(j.jsx)("g",{transform:"rotate(90)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.75",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(j.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(j.jsx)("g",{transform:"rotate(135)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.625",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(j.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(j.jsx)("g",{transform:"rotate(180)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.5",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(j.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(j.jsx)("g",{transform:"rotate(225)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.375",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(j.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(j.jsx)("g",{transform:"rotate(270)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.25",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(j.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(j.jsx)("g",{transform:"rotate(315)",children:Object(j.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#1c4595",fillOpacity:"0.125",children:[Object(j.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(j.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},_=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={char:{},loading:!0,error:!1},e.marvelService=new O,e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0,error:!1})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=Math.floor(400*Math.random()+1011e3);e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError)},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,r=e.error,n=r?Object(j.jsx)(x,{}):null,c=a?Object(j.jsx)(g,{}):null,s=a||r?null:Object(j.jsx)(y,{char:t});return Object(j.jsxs)("div",{className:"randomchar",children:[n,c,s,Object(j.jsxs)("div",{className:"randomchar__static",children:[Object(j.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(j.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(j.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(j.jsx)("button",{className:"button button__main",onClick:this.updateChar,children:Object(j.jsx)("div",{className:"inner",children:"try it"})}),Object(j.jsx)("img",{src:v,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),a}(h.Component),y=function(e){var t=e.char,a=t.name,r=t.description,n=t.thumbnail,c=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(i={objectFit:"contain"}),Object(j.jsxs)("div",{className:"randomchar__block",children:[Object(j.jsx)("img",{src:n,alt:"Random character",className:"randomchar__img",style:i}),Object(j.jsxs)("div",{className:"randomchar__info",children:[Object(j.jsx)("p",{className:"randomchar__name",children:a}),Object(j.jsx)("p",{className:"randomchar__descr",children:r}),Object(j.jsxs)("div",{className:"randomchar__btns",children:[Object(j.jsx)("a",{href:c,className:"button button__main",children:Object(j.jsx)("div",{className:"inner",children:"homepage"})}),Object(j.jsx)("a",{href:s,className:"button button__secondary",children:Object(j.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},N=_,C=a(10),k=(a(19),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={charList:[],loading:!0,error:!1,newItemLoading:!1,offset:789,charEnded:!1},e.marvelService=new O,e.componentDidMount=function(){e.onRequest()},e.onRequest=function(t){e.onCharListLoading(),e.marvelService.getAllCharacters(t).then(e.onCharListLoaded).catch(e.onError)},e.onCharListLoaded=function(t){var a=!1;t.length<9&&(a=!0),e.setState((function(e){var r=e.offset,n=e.charList;return{charList:[].concat(Object(C.a)(n),Object(C.a)(t)),loading:!1,newItemLoading:!1,offset:r+9,charEnded:a}}))},e.onCharListLoading=function(){e.setState({newItemLoading:!0,error:!1})},e.onError=function(){e.setState({loading:!1,error:!0})},e.itemRefs=[],e.setRef=function(t){e.itemRefs.push(t)},e.focusOnItem=function(t){e.itemRefs.forEach((function(e){return e.classList.remove("char__item_selected")})),e.itemRefs[t].classList.add("char__item_selected"),e.itemRefs[t].focus()},e.renderItems=function(t){var a=t.map((function(t,a){var r={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(r={objectFit:"contain"}),Object(j.jsxs)("li",{className:"char__item",ref:e.setRef,onClick:function(){e.props.onCharSelected(t.id),e.focusOnItem(a)},onKeyPress:function(r){""!==r.key&&"Enter"!==r.key||(e.props.onCharSelected(t.id),e.focusOnItem(a))},children:[Object(j.jsx)("img",{src:t.thumbnail,alt:t.name,style:r}),Object(j.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(j.jsx)("ul",{className:"char__grid",children:a})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.charList,r=t.error,n=t.loading,c=t.offset,s=t.newItemLoading,i=t.charEnded,o=this.renderItems(a),l=r?Object(j.jsx)(x,{}):null,d=n?Object(j.jsx)(g,{}):null,u=n&&r?null:o;return Object(j.jsxs)("div",{className:"char__list",children:[l,d,u,Object(j.jsx)("button",{className:"button button__main button__long",disabled:s,style:{display:i?"none":"block"},onClick:function(){e.onRequest(c)},children:Object(j.jsx)("div",{className:"inner",children:"load more"})})]})}}]),a}(r.Component)),w=(a(20),function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(j.jsxs)("div",{className:"skeleton",children:[Object(j.jsxs)("div",{className:"pulse skeleton__header",children:[Object(j.jsx)("div",{className:"pulse skeleton__circle"}),Object(j.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(j.jsx)("div",{className:"pulse skeleton__block"}),Object(j.jsx)("div",{className:"pulse skeleton__block"}),Object(j.jsx)("div",{className:"pulse skeleton__block"})]})]})}),L=(a(21),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={char:null,loading:!1,error:!1},e.marvelService=new O,e.updateChar=function(){var t=e.props.charId;t&&(e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError))},e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0,error:!1})},e.onError=function(){e.setState({loading:!1,error:!0})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e){this.props.charId!==e.charId&&this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,a=e.loading,r=e.error,n=t||a||r?null:Object(j.jsx)(w,{}),c=r?Object(j.jsx)(x,{}):null,s=a?Object(j.jsx)(g,{}):null,i=a||r||!t?null:Object(j.jsx)(T,{char:t});return Object(j.jsxs)("div",{className:"char__info",children:[n,c,s,i]})}}]),a}(r.Component)),T=function(e){var t=e.char,a=t.name,r=t.description,n=t.thumbnail,c=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n&&(o={objectFit:"contain"}),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"char__basics",children:[Object(j.jsx)("img",{src:n,alt:a,style:o}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"char__info-name",children:a}),Object(j.jsxs)("div",{className:"char__btns",children:[Object(j.jsx)("a",{href:c,className:"button button__main",children:Object(j.jsx)("div",{className:"inner",children:"homepage"})}),Object(j.jsx)("a",{href:s,className:"button button__secondary",children:Object(j.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(j.jsx)("div",{className:"char__descr",children:r}),Object(j.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(j.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There no comics",i.map((function(e,t){for(;t<10;)return Object(j.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})},S=L,I=a.p+"static/media/vision.067d4ae1.png",R=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={error:!1},e}return Object(o.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(j.jsx)(x,{}):this.props.children}}]),a}(r.Component),E=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={selectedChar:null},e.onCharSelected=function(t){e.setState({selectedChar:t})},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(u,{}),Object(j.jsxs)("main",{children:[Object(j.jsx)(R,{children:Object(j.jsx)(N,{})}),Object(j.jsxs)("div",{className:"char__content",children:[Object(j.jsx)(R,{children:Object(j.jsx)(k,{onCharSelected:this.onCharSelected})}),Object(j.jsx)(R,{children:Object(j.jsx)(S,{charId:this.state.selectedChar})})]}),Object(j.jsx)("img",{className:"bg-decoration",src:I,alt:"vision"})]})]})}}]),a}(r.Component);a(22);s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.9b5334d8.chunk.js.map