(this["webpackJsonphexagon-quilt"]=this["webpackJsonphexagon-quilt"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),o=a(8),c=a.n(o),r=(a(14),a(5)),s=(a(15),a(4)),b=a(2),l={name:"7oo6b6",styles:"position:relative;overflow:hidden;width:100%;height:100%;transform:rotate(-60deg);background-color:transparent;"},d={name:"1elvqth",styles:"display:flex;justify-content:center;align-items:flex-end;z-index:10;color:blue;font-size:24px;font-weight:bold;text-align:center;background-color:rgba(255, 255, 255, 0.7);"},u=function(e){var t=e.image,a=(e.idx,e.fabric),i=e.debug;return Object(n.a)("div",{css:Object(b.a)({overflow:"hidden",visibility:"hidden",transform:"rotate(120deg)",width:225,height:100,margin:"0 0 0 -55px",":nth-child(even)":{marginTop:50}},"")},Object(n.a)("div",{css:l},Object(n.a)("div",{css:Object(b.a)({width:"100%",height:"100%",backgroundRepeat:"repeat",backgroundImage:"url(./images/".concat(a,"/").concat(a).concat(t,".jpg)"),backgroundPosition:"center",visibility:"visible",transform:"rotate(-60deg)",backgroundOrigin:"border-box",backgroundColor:"transparent"},"")},!0===i&&Object(n.a)("div",{css:d},"".concat(t)))))};var p=function(e){var t=e.setCounts,a=e.hueWidth,i=e.quiltSectionWidth,o=e.quiltSectionHeight,c=e.fabric,r=e.debug,l=[],d="",p="",g="",m=[25];return Object(n.a)("div",{className:"Quilt",css:Object(b.a)({width:85*i,display:"grid",gridTemplateColumns:"repeat(".concat(i,", 85px)"),gridTemplateRows:"repeat(".concat(o,", 100px)"),margin:"20px auto",paddingTop:20,paddingBottom:20,paddingRight:30},"")},Object(s.a)(Array(i*o).keys()).map((function(e,o){var s=function(e,n){var i,o,c=[l[n-e-1],l[n-e],l[n-e+1]],r=[c[0]%a,c[1]%a,c[2]%a],s=1,b=s%a,u=!0,h=!0;do{i=1,o=27,i=Math.ceil(i),o=Math.floor(o),b=(s=Math.floor(Math.random()*(o-i))+i)%a,u=c.indexOf(s)>-1,h=r.indexOf(b)>-1}while(m.indexOf(s)>-1||s===d||b===g||s===p||u||h);return p=d,d=s,g=b,l.push(s),t(s),s}(i,o);return Object(n.a)(u,{key:"hexi-key-".concat(e),idx:o,image:s,debug:r,fabric:c})})))},g={name:"6ymaip",styles:"border-bottom:1px solid grey;margin-bottom:10px;padding-bottom:10px;"},m={name:"1l2zrv3",styles:"display:grid;grid-template-columns:repeat(5, 1fr);"},h={name:"jmbq56",styles:"margin-bottom:6px;"},j={name:"ybjnkk",styles:"font-weight:bold;font-size:16px;text-shadow:0px 0px 2px white;"},O=function(e){var t=e.counts,a=e.hueWidth,i=e.fabric,o=120*a;return Object(n.a)("aside",{css:Object(b.a)({margin:"auto",padding:"1px 20px 20px 20px",width:o,backgroundColor:"#fff",borderRadius:"5px",boxShadow:"4px 4px 8px rgba(0, 0, 0, 0.3)"},"")},Object(n.a)("h2",null,"Color Key"),Object(n.a)("div",{css:Object(b.a)({display:"grid",gridTemplateColumns:"repeat(5, 120px)",width:o,fontWeight:"bold",fontSize:24},"")},Object(s.a)(Array(5).keys()).map((function(e,t){return Object(n.a)("div",{key:"Hue-".concat((t+1)%a),css:g},"Hue: ".concat((t+1)%a))}))),Object(n.a)("div",{css:m},Object(s.a)(Array(26).keys()).map((function(e,a){var o=-1!==[25].indexOf(a+1),c=t[a+1]||0;return Object(n.a)("div",{css:h,key:"Image-".concat(a+1)},!o&&Object(n.a)("div",{css:j},Object(n.a)("span",null,"#".concat(a+1,": ")),Object(n.a)("span",{css:Object(b.a)({color:(c<4||c>6)&&"red"},"")},"".concat(t[a+1]||0," Hexis"))),Object(n.a)("div",{key:"orig-image-order-".concat(a+1),css:Object(b.a)({width:120,height:50,backgroundRepeat:"no-repeat",backgroundImage:"url(./images/".concat(i,"/").concat(i).concat(a+1,".jpg)"),backgroundPosition:"center"},"")}))}))))},x={name:"1rvb81",styles:"margin:10px;padding:0;font-size:1.2rem;"},f={name:"in3yi3",styles:"font-weight:bold;"},v=function(e){var t=e.title,a=e.description;return Object(n.a)("p",{css:x},Object(n.a)("span",{css:f},t)," ",a)},y={name:"1tmnpkw",styles:"display:flex;justify-content:flex-start;align-items:center;margin-top:10px;margin-bottom:10px;"},k={name:"y2gfd5",styles:"margin:0;padding:0;width:200px;text-align:right;"},w=function(e){var t=e.label,a=e.children;return Object(n.a)("label",{css:y},Object(n.a)("p",{css:k},t),a)},C={name:"qxz2hf",styles:"margin:20px auto;display:flex;justify-content:space-around;align-items:center;width:calc(100% - 40px);"},S={name:"vrsytd",styles:"border-top:1px solid rgba(0, 0, 0, 0.3);border-bottom:1px solid rgba(0, 0, 0, 0.3);padding-bottom:55px;margin:20px auto;"},q={name:"rm9e7r",styles:"margin-top:40px;margin-bottom:40px;"};var W=function(){var e={},t=Object(i.useState)(18),a=Object(r.a)(t,2),o=a[0],c=a[1],s=Object(i.useState)(7),b=Object(r.a)(s,2),l=b[0],d=b[1],u=Object(i.useState)("beeCreative"),g=Object(r.a)(u,2),m=g[0],h=g[1],j=Object(i.useState)(!1),x=Object(r.a)(j,2),f=x[0],y=x[1];return Object(n.a)("main",{className:"App"},Object(n.a)("header",{css:C},Object(n.a)("div",null,Object(n.a)("h1",null,"Hexagon Quilt Randomizer"),Object(n.a)("div",null,Object(n.a)(v,{title:"Github:",description:Object(n.a)("a",{href:"https://github.com/knitcodemonkey/hexagon-quilt-map"},"https://github.com/knitcodemonkey/hexagon-quilt-map")}),Object(n.a)(v,{title:"Sample Fabric:",description:'"Bee Creative" by Deb Strain'}),Object(n.a)(v,{title:"Hexagons Wide:",description:o}),Object(n.a)(v,{title:"Hexagons Tall:",description:l}))),Object(n.a)("form",null,Object(n.a)(w,{label:"Hexagons Wide:"},Object(n.a)("input",{type:"text",value:o,onChange:function(e){return c(e.target.value)}})),Object(n.a)(w,{label:"Hexagons Tall:"},Object(n.a)("input",{type:"text",value:l,onChange:function(e){return d(e.target.value)}})),Object(n.a)(w,{label:"Fabric:"},Object(n.a)("select",{value:m,onChange:function(e){return h(e.target.value)}},Object(n.a)("option",{value:"beeCreative"},"Bee Creative by Deb Strain"))),Object(n.a)(w,{label:"Show Image Number:"},Object(n.a)("select",{value:f,onChange:function(){return y(!f)}},Object(n.a)("option",{value:!0},"Yes"),Object(n.a)("option",{value:!1},"No"))))),Object(n.a)("article",{css:S},Object(n.a)(p,{setCounts:function(t){e[t]=(e[t]||0)+1},hueWidth:5,quiltSectionWidth:o,quiltSectionHeight:l,debug:f,fabric:m})),Object(n.a)("footer",{css:q},Object(n.a)(O,{counts:e,hueWidth:5,fabric:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(n.a)(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.625d25f0.chunk.js.map