(this["webpackJsonphexagon-quilt"]=this["webpackJsonphexagon-quilt"]||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var c=a(1),n=a(9),o=a.n(n),i=(a(15),a(16),a(2)),r=a(0),l=a(3),s=a(10),b=(a(17),a(4)),d={breakpoints:["94vw"]};var u={name:"gaqdqq",styles:"width:100%;height:100%;display:flex;justify-content:center;align-items:center"},g=function(t){var e=t.image,a=t.idx,c=t.fabric,n=t.quiltSectionWidth,o=t.changeOneFabric,i=t.fabricSelected,l=n%2===0||Math.floor(a/n)%2===0;return Object(r.b)("div",{css:[{overflow:"hidden",position:"relative",clipPath:"polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",width:"calc(125vw / ".concat(n," - 1px)"),height:"calc(8 / 9 * (125vw / ".concat(n,") - 1px)"),backgroundRepeat:"repeat",backgroundImage:"url(./images/".concat(c,"/").concat(c).concat(e,".jpg)"),backgroundPosition:"center",backgroundSize:"cover",marginTop:"calc((-8 / 9 * 125vw / ".concat(n,") / 2)")},l?{"&:nth-of-type(odd)":{marginTop:0}}:{"&:nth-of-type(even)":{marginTop:0}},"",""]},i&&Object(r.b)("div",{css:u},Object(r.b)("button",{onClick:function(){return o(a)}},e)))},p=function(t){var e=t.quiltSectionHeight,a=t.quiltSectionWidth,c=t.imageList,n="8 / 9 * (125vw / ".concat(a,")");return Object(r.b)("div",{className:"Quilt",css:Object(r.a)({overflow:"hidden",width:d.breakpoints[0],display:"grid",gridTemplateColumns:"repeat(".concat(a,", calc(").concat(d.breakpoints[0]," / ").concat(a," ))"),gridTemplateRows:"repeat(".concat(e-2,", calc(").concat(n,"))"),margin:"40px auto -16px auto",paddingRight:"calc(".concat(d.breakpoints[0]," / ").concat(a," / 3)"),maxHeight:"calc(".concat(n," * ").concat(e-2,")"),boxShadow:"0 0 4px rgba(0, 0, 0, 0.3)"},"","")},c.map((function(e,a){return Object(r.b)(g,Object(b.a)({key:"hexi-key-".concat(e,"-").concat(a),idx:a,image:e},t))})))};var f={name:"gaqdqq",styles:"width:100%;height:100%;display:flex;justify-content:center;align-items:center"},h=function(t){var e=t.image,a=t.idx,c=t.fabric,n=t.quiltSectionWidth,o=t.changeOneFabric,i=t.fabricSelected;return Object(r.b)("div",{css:Object(r.a)({clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",width:"calc(".concat(d.breakpoints[0]," / ").concat(n," - 1px)"),height:"calc(".concat(d.breakpoints[0]," / ").concat(n," - 1px)"),backgroundRepeat:"repeat",backgroundPosition:"center",backgroundSize:"cover",backgroundImage:"url(./images/".concat(c,"/").concat(c).concat(e,".jpg)")},"","")},i&&Object(r.b)("div",{css:f},Object(r.b)("button",{onClick:function(){return o(a)}},e)))},m=function(t){var e=t.quiltSectionHeight,a=t.quiltSectionWidth,c=t.imageList;return Object(r.b)("div",{className:"Quilt",css:Object(r.a)({overflow:"hidden",width:d.breakpoints[0],display:"grid",gridTemplateColumns:"repeat(".concat(a,", calc(").concat(d.breakpoints[0]," / ").concat(a,"))"),gridTemplateRows:"repeat(".concat(e-1,", calc(").concat(d.breakpoints[0]," / ").concat(a,"))"),margin:"40px auto -15px auto",maxHeight:"calc(".concat(d.breakpoints[0]," / ").concat(a," * ").concat(e-1,")"),boxShadow:"0 0 4px rgba(0, 0, 0, 0.3)"},"","")},c.map((function(e,a){return Object(r.b)(h,Object(b.a)({key:"square-key-".concat(e,"-").concat(a),idx:a,image:e},t))})))};var v={name:"gaqdqq",styles:"width:100%;height:100%;display:flex;justify-content:center;align-items:center"},j=function(t){var e=t.image,a=t.idx,c=t.fabric,n=t.quiltSectionWidth,o=t.changeOneFabric,i=t.fabricSelected,l=n%2===1||Math.floor(a/n)%2===0;return Object(r.b)("div",{css:[{overflow:"hidden",position:"relative",clipPath:"polygon(0% 0%, 100% 0%, 50% 100% )",width:"calc(".concat(d.breakpoints[0]," * 2 / ").concat(n," - 1px)"),backgroundRepeat:"repeat",backgroundImage:"url(./images/".concat(c,"/").concat(c).concat(e,".jpg)"),backgroundPosition:"center",backgroundSize:"cover",marginLeft:"calc((-".concat(d.breakpoints[0]," * 2 / ").concat(n," - 1px) / 2)"),marginRight:"calc((-".concat(d.breakpoints[0]," * 2 / ").concat(n," - 1px) / 2)"),transform:"rotate(0deg)"},l?{"&:nth-of-type(even)":{transform:"rotate(180deg)"}}:{"&:nth-of-type(odd)":{transform:"rotate(180deg)"}},"",""]},i&&Object(r.b)("div",{css:v},Object(r.b)("button",{onClick:function(){return o(a)}},e)))},O=function(t){var e=t.quiltSectionHeight,a=t.quiltSectionWidth,c=t.imageList,n="".concat(d.breakpoints[0]," * 2 / ").concat(a),o="(188vw / ".concat(a," - 1px) / 2");return Object(r.b)("div",{className:"Quilt",css:Object(r.a)({overflow:"hidden",width:"calc(".concat(d.breakpoints[0]," - ").concat(o,")"),display:"grid",gridTemplateColumns:"repeat(".concat(parseInt(a+1),", calc( ").concat(d.breakpoints[0]," / ").concat(a+1,"))"),gridTemplateRows:"repeat(".concat(e-1,", calc(").concat(n,"))"),margin:"40px auto -16px auto",maxHeight:"calc(".concat(n," - 2})"),boxShadow:"0 0 4px rgba(0, 0, 0, 0.3)"},"","")},c.map((function(e,a){return Object(r.b)(j,Object(b.a)({key:"hexi-key-".concat(e,"-").concat(a),idx:a,image:e},t))})))};var y={name:"gaqdqq",styles:"width:100%;height:100%;display:flex;justify-content:center;align-items:center"},x=function(t){var e=t.image,a=t.idx,c=t.fabric,n=t.quiltSectionWidth,o=t.changeOneFabric,i=t.fabricSelected,l=Math.floor(a/n)%4===0,s=Math.floor(a/n)%4===2,b=Math.floor(a/n)%4===1&&(n-1)%2===1,d=Math.floor(a/n)%4===3&&(n-1)%2===1,u=Math.floor(a/n)%4===1&&(n-1)%2===0,g=Math.floor(a/n)%4===3&&(n-1)%2===0;return Object(r.b)("div",{css:[{overflow:"hidden",clipPath:"polygon(0% 0%, 100% 0%, 0% 100% )",width:"calc(94vw / ".concat(n," - 1px)"),height:"calc((94vw / ".concat(n,"))"),backgroundRepeat:"repeat",backgroundImage:"url(./images/".concat(c,"/").concat(c).concat(e,".jpg)"),backgroundPosition:"center",backgroundSize:"cover"},l&&{"&:nth-of-type(odd)":{transform:"rotate(0deg)"},"&:nth-of-type(even)":{transform:"rotate(90deg)"}},s&&{"&:nth-of-type(even)":{transform:"rotate(180deg)"},"&:nth-of-type(odd)":{transform:"rotate(270deg)"}},b&&{"&:nth-of-type(odd)":{transform:"rotate(180deg)",marginTop:"calc(-94vw / ".concat(n,")")},"&:nth-of-type(even)":{transform:"rotate(270deg)",marginTop:"calc(-94vw / ".concat(n,")")}},d&&{"&:nth-of-type(even)":{transform:"rotate(0deg)",marginTop:"calc(-94vw / ".concat(n,")")},"&:nth-of-type(odd)":{transform:"rotate(90deg)",marginTop:"calc(-94vw / ".concat(n,")")}},u&&{"&:nth-of-type(even)":{transform:"rotate(180deg)",marginTop:"calc(-94vw / ".concat(n,")")},"&:nth-of-type(odd)":{transform:"rotate(270deg)",marginTop:"calc(-94vw / ".concat(n,")")}},g&&{"&:nth-of-type(odd)":{transform:"rotate(0deg)",marginTop:"calc(-94vw / ".concat(n,")")},"&:nth-of-type(even)":{transform:"rotate(90deg)",marginTop:"calc(-94vw / ".concat(n,")")}},"",""]},i&&Object(r.b)("div",{css:y},Object(r.b)("button",{onClick:function(){return o(a)}},e)))},w=function(t){var e=t.quiltSectionHeight,a=t.quiltSectionWidth,c=t.imageList,n="(94vw / ".concat(a,")"),o=2*e;return Object(r.b)("div",{className:"Quilt",css:Object(r.a)({overflow:"hidden",width:d.breakpoints[0],display:"grid",gridTemplateColumns:"repeat(".concat(a,", calc(").concat(d.breakpoints[0]," / ").concat(a,"))"),gridTemplateRows:"repeat(".concat(e+1,", 0fr)"),margin:"40px auto -16px auto",maxHeight:"calc(".concat(o," * ").concat(n," / 2)"),boxShadow:"0 0 4px rgba(0, 0, 0, 0.3)"},"","")},c.map((function(e,a){return Object(r.b)(x,Object(b.a)({key:"hexi-key-".concat(e,"-").concat(a),idx:a,image:e},t))})))},k=function(t){switch(t.shape){case"Square":return Object(r.b)(m,t);case"IsoscelesTriangle":return Object(r.b)(O,t);case"RightTriangle":return Object(r.b)(w,t);default:return Object(r.b)(p,t)}},S={beeCreative:{name:'"Bee Creative" by Deb Strain',notImage:[25,27,28,30,31,32,33],availableCounts:{1:2,2:2,3:7.5,4:3,5:2,6:11.5,7:6.5,8:14.5,9:14.5,10:2.5,11:1.5,12:8.5,13:2.5,14:5,15:10,16:11,17:9,18:6.5,19:14.5,20:10,21:1,22:1,23:8,24:13.5,26:4,29:4,34:5},fabricCount:34,hueWidth:5},returnToWintersLane:{name:'"Return to Winter\'s Lane" by Kate & Birdie',notImage:[19,21],fabricCount:24,hueWidth:5}};var q=function(t){return[Object,Array].includes((t||{}).constructor)&&!Object.entries(t||{}).length},I=function(t){var e,a,c=t.idx,n=t.rowWidth,o=t.fabric,r=t.shape,l=S[o],s=l.hueWidth,b=l.notImage,d=l.fabricCount,u=W(),g=F(u),p=[u[c-1],u[c-2]],f=(p=r&&r.indexOf("Triangle")>-1?[].concat(Object(i.a)(p),[u[c-2*n-1],u[c-2*n],u[c-2*n+1]]):[].concat(Object(i.a)(p),[u[c-n-1],u[c-n],u[c-n+1]])).slice(0,-1).map((function(t){return t%s})),h=1,m=h%s,v=!0,j=!1,O=!1,y=0;do{e=1,a=d+1,e=Math.ceil(e),a=Math.floor(a),m=(h=Math.floor(Math.random()*(a-e))+e)%s;var x=p.indexOf(h)>-1,w=f.indexOf(m)>-1;q(null===g||void 0===g?void 0:g[h])&&(g[h]=100),v=g[h]<=1,(O=((j=b.indexOf(h)>-1)||x||w||v)&&!(y>20&&!v&&!j))?y++:y=0}while(O);return h},C=function(t){var e=t.fabric,a=t.quiltSectionWidth,c=t.quiltSectionHeight,n=t.shape,o=W(),r=[],l="RightTriangle"===n?2*(c-1):c;return Object(i.a)(Array(a*l).keys()).forEach((function(t){var c={idx:t,rowWidth:a,fabric:e},n=o[t]||I(c);r.push(n),T(r),M(F(r))})),r},W=function(){return JSON.parse(window.localStorage.getItem("imageList"))||[]},T=function(t){window.localStorage.setItem("imageList",JSON.stringify(t||[]))},H=function(){window.localStorage.removeItem("imageList")},R=function(){window.localStorage.removeItem("availableFabricCounts")},z=function(t){var e=Object.assign(q(t)?W():t),a={};return e.forEach((function(t){a[t]=q(null===a||void 0===a?void 0:a[t])?1:a[t]+1})),a},F=function(t){var e,a,c=q(t)?W():t,n=null!==(e=null===(a=S[L()])||void 0===a?void 0:a.availableCounts)&&void 0!==e?e:{},o=z(c),i={};return Object.entries(n).forEach((function(t){var e,a=Object(l.a)(t,2),c=a[0],n=a[1];i[c]=n-(null!==(e=null===o||void 0===o?void 0:o[c])&&void 0!==e?e:0)})),i},M=function(t){window.localStorage.setItem("availableFabricCounts",JSON.stringify(t))},L=function(){return window.localStorage.getItem("fabric")};var N={name:"1lp74v6",styles:"margin:0;padding:20px;width:calc(100% - 40px);background-color:#fff"},P={name:"vg7ld1",styles:"margin:0;margin-bottom:20px;padding:0"},E={name:"1p3sauy",styles:"display:flex;justify-content:space-around;font-weight:bold;font-size:24px;margin:0"},A={name:"ar674f",styles:"border-bottom:1px solid grey;margin-bottom:10px;padding-bottom:10px;width:100%"},J={name:"qgg235",styles:"display:flex;justify-content:space-between;flex-wrap:wrap"},Q={name:"pr10xp",styles:"margin-bottom:10px"},B={name:"1g6nqgx",styles:"font-weight:bold;font-size:16px;text-shadow:0px 0px 2px white"},G=function(t){var e=t.fabric,a=t.selectFabric,c=t.fabricSelected,n=S[e],o=n.fabricCount,l=n.notImage,s=n.hueWidth,b="calc(94vw / ".concat(s," - 10px)"),d=F(),u=z();return Object(r.b)("aside",{css:N},Object(r.b)("h2",{css:P},"Color Key"),Object(r.b)("div",{css:E},Object(i.a)(Array(s).keys()).map((function(t){var e=t+1;return Object(r.b)("div",{key:"Hue-Header-".concat(e%s),css:A},"Hue: ".concat(e%s||s))}))),Object(r.b)("div",{css:J},Object(i.a)(Array(Math.ceil(o/s)*s).keys()).map((function(t){var n,i=t+1,s=-1!==l.indexOf(i)||i>o;return Object(r.b)("div",{css:Q,key:"Image-".concat(i)},!s&&Object(r.b)("div",{css:B},Object(r.b)("span",null,"#".concat(i,": ")),Object(r.b)("span",{css:Object(r.a)({color:d[i]<0&&"red"},"","")},"".concat(u[i]||0," uses - ").concat(null!==(n=null===d||void 0===d?void 0:d[i])&&void 0!==n?n:"unlimited"," left"))),Object(r.b)("div",{key:"orig-image-order-".concat(i),id:"orig-image-order-".concat(i),css:Object(r.a)({width:b,height:100,backgroundRepeat:"repeat",backgroundImage:"url(./images/".concat(e,"/").concat(e).concat(i,".jpg)"),backgroundPosition:"center",display:"flex",justifyContent:"center",alignItems:"flex-end",border:!s&&"1px solid grey"},"","")},!s&&Object(r.b)("button",{css:Object(r.a)({width:"calc(100% + 2px)",margin:-1,padding:5,fontSize:"0.9rem"},"",""),onClick:function(){a(c===i?"":i)}},c===i?"No more!":"Choose me!")))}))))};var K={name:"1rw19ui",styles:"display:flex;justify-content:flex-start;align-items:center;margin:18px;font-size:1.2rem"},D={name:"1j9h3z3",styles:"margin:0;padding:0;text-align:right"},$=function(t){var e=t.label,a=t.children;return Object(r.b)("label",{css:K},Object(r.b)("p",{css:D},e),a)};var U={name:"y7tlet",styles:"margin:10px;padding:0;font-size:1.2rem"},V={name:"1efi8gv",styles:"font-weight:bold"},X=function(t){var e=t.title,a=t.description;return Object(r.b)("p",{css:U},Object(r.b)("span",{css:V},e)," ",a)},Y={name:"qr32ag",styles:"margin:0;padding-top:20px"},Z={name:"q4nz0f",styles:"box-shadow:0 0 4px rgba(0, 0, 0, 0.3);border-top:1px solid rgba(0, 0, 0, 0.3);border-bottom:1px solid rgba(0, 0, 0, 0.3);width:100%;margin-top:20px;padding:20px auto 10px auto;display:flex;justify-content:space-around;align-items:flex-end;flex-wrap:wrap;background-color:#fff"},_={name:"ivf7uz",styles:"min-width:360px"},tt={name:"1qemjat",styles:"flex-wrap:wrap"},et={name:"1qemjat",styles:"flex-wrap:wrap"},at={name:"7kaqy8",styles:"display:flex;justify-content:space-around;flex-wrap:wrap"},ct={name:"1qrjsk1",styles:"border-top:1px solid rgba(0, 0, 0, 0.3);box-shadow:0 0 4px rgba(0, 0, 0, 0.3)"};var nt=function(){var t,e,a,n,o=Object(s.a)({},localStorage),b={width:parseInt(null!==(t=null===o||void 0===o?void 0:o.quiltSectionWidth)&&void 0!==t?t:17),height:parseInt(null!==(e=null===o||void 0===o?void 0:o.quiltSectionHeight)&&void 0!==e?e:7),fabric:null!==(a=null===o||void 0===o?void 0:o.fabric)&&void 0!==a?a:"beeCreative",shape:null!==(n=null===o||void 0===o?void 0:o.shape)&&void 0!==n?n:"Hexagon"};Object(c.useEffect)((function(){!function(t){window.localStorage.setItem("fabric",t)}(b.fabric)}),[]);var d=Object(c.useState)(z()),u=Object(l.a)(d,2),g=u[0],p=u[1],f=Object(c.useState)(b.width),h=Object(l.a)(f,2),m=h[0],v=h[1],j=Object(c.useState)(b.height),O=Object(l.a)(j,2),y=O[0],x=O[1],w=Object(c.useState)(b.fabric),q=Object(l.a)(w,2),L=q[0],N=q[1],P=Object(c.useState)(b.shape),E=Object(l.a)(P,2),A=E[0],J=E[1],Q=Object(c.useState)(),B=Object(l.a)(Q,2),K=B[0],D=B[1],U=Object(c.useState)([]),V=Object(l.a)(U,2),nt=V[0],ot=V[1],it=Object(c.useState)([]),rt=Object(l.a)(it,2),lt=rt[0],st=rt[1],bt=function(){var t,e=(t={quiltSectionWidth:m,quiltSectionHeight:y,fabric:L},H(),R(),C(t));ot(e),st([]),p(z())},dt=function(){var t=Object.assign(nt);T(t),p(z());var e=function(t){var e=t.fabric,a=t.quiltSectionWidth,c=t.quiltSectionHeight,n=t.changedFabrics,o=W(),r=[];return Object(i.a)(Array(a*c).keys()).forEach((function(t){var c=I({idx:t,rowWidth:a,fabric:e});r.push(c),T(r),M(F(r))})),n.forEach((function(t){r[t]=o[t]})),r}({quiltSectionWidth:m,quiltSectionHeight:y,fabric:L,changedFabrics:lt});ot(e)};return Object(c.useEffect)((function(){var t=C({quiltSectionWidth:m,quiltSectionHeight:y,fabric:L,shape:A});ot(t),p(z())}),[m,y,L,A]),Object(r.b)("main",{className:"Homepage"},Object(r.b)("header",null,Object(r.b)("h1",{css:Y},"Quilt Fabric Randomizer"),Object(r.b)(X,{description:"by Jen Luker"})),Object(r.b)("div",{css:Z},Object(r.b)("div",{css:_},Object(r.b)("div",{css:Object(r.a)({width:"100%",display:"flex",justifyContent:"space-between",flexWrap:"wrap",margin:"0 auto"},"","")},Object(r.b)(X,{description:Object(r.b)("a",{href:"https://knitcodemonkey.github.io/hexagon-quilt-map/"},"Go to Website")}),Object(r.b)(X,{description:Object(r.b)("a",{href:"https://github.com/knitcodemonkey/hexagon-quilt-map"},"See on Github")})),Object(r.b)("div",{css:Object(r.a)({width:"100%",display:"flex",justifyContent:"space-between",flexWrap:"wrap",margin:"10px auto"},"","")},Object(r.b)("button",{css:tt,type:"button",onClick:bt},"Randomize"),Object(r.b)("button",{css:et,type:"button",onClick:function(){lt.length>0?dt():bt()}},"Randomize Not Changed"))),Object(r.b)("form",{css:at},Object(r.b)("div",null,Object(r.b)($,{label:"Shape:"},Object(r.b)("select",{value:A,onChange:function(t){J(t.target.value),localStorage.setItem("shape",t.target.value),st([])}},Object(r.b)("option",{value:"Hexagon"},"Hexagon"),Object(r.b)("option",{value:"Square"},"Square"),Object(r.b)("option",{value:"IsoscelesTriangle"},"Isosceles Triangle"),Object(r.b)("option",{value:"RightTriangle"},"Right Triangle"))),Object(r.b)($,{label:"Fabric:"},Object(r.b)("select",{value:L,onChange:function(t){N(t.target.value),localStorage.setItem("fabric",t.target.value),st([])}},Object.keys(S).map((function(t){return Object(r.b)("option",{key:t,value:t},S[t].name)}))))),Object(r.b)("div",null,Object(r.b)($,{label:"Generated Width:"},Object(r.b)("select",{value:m,onChange:function(t){v(parseInt(t.target.value)),localStorage.setItem("quiltSectionWidth",parseInt(t.target.value)),st([])}},Object(i.a)(Array(30).keys()).map((function(t){return Object(r.b)("option",{key:"wide-".concat(t),value:t},t)})))),Object(r.b)($,{label:"Generated Height:"},Object(r.b)("select",{value:y,onChange:function(t){x(parseInt(t.target.value)),localStorage.setItem("quiltSectionHeight",parseInt(t.target.value)),st([])}},Object(i.a)(Array(100).keys()).map((function(t){return Object(r.b)("option",{key:"tall-".concat(t),value:t},t)}))))))),Object(r.b)("article",{css:Object(r.a)({paddingTop:1,paddingBottom:56,margin:"0 auto",backgroundImage:"url(./wood.jpg)",backgroundOpacity:.5},"","")},Object(r.b)(k,{key:"QuiltSection-".concat(nt.length,"-").concat(K),quiltSectionWidth:m,quiltSectionHeight:y,fabric:L,shape:A,imageList:nt,changeOneFabric:function(t){var e=Object.assign(nt);e[t]=K,T(e),p(z(e));var a=C({quiltSectionWidth:m,quiltSectionHeight:y,fabric:L,shape:A});ot(a),lt.includes(t,0)||st(lt.concat(t))},fabricSelected:K})),Object(r.b)("footer",{css:ct},Object(r.b)(G,{counts:g,fabric:L,selectFabric:D,fabricSelected:K,key:g})))};var ot=function(){return Object(r.b)(nt,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(r.b)(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.2a0e5d70.chunk.js.map