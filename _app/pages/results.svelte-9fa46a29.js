import{T as gt,S as pt,i as dt,s as ht,e as C,t as A,k as x,c as I,a as V,g as M,d as c,n as q,F as L,b as D,M as $,f as y,G as h,h as et,U as vt,N as yt,O as _t,V as bt,H as K,P as kt,W as ot,A as wt,X as St}from"../chunks/vendor-0958d667.js";import{I as Ct}from"../chunks/info-a88dd206.js";import{V as It}from"../chunks/values-28dbfe4e.js";import{r as Et}from"../chunks/resultsStore-d0702e87.js";import{g as Tt}from"../chunks/navigation-51f4a605.js";import"../chunks/singletons-12a22614.js";const At=[{name:"Anarcho-Communism",stats:{econ:100,dipl:50,govt:100,scty:90}},{name:"Libertarian Communism",stats:{econ:100,dipl:70,govt:80,scty:80}},{name:"Trotskyism",stats:{econ:100,dipl:100,govt:60,scty:80}},{name:"Marxism",stats:{econ:100,dipl:70,govt:40,scty:80}},{name:"De Leonism",stats:{econ:100,dipl:30,govt:30,scty:80}},{name:"Leninism",stats:{econ:100,dipl:40,govt:20,scty:70}},{name:"Stalinism/Maoism",stats:{econ:100,dipl:20,govt:0,scty:60}},{name:"Religious Communism",stats:{econ:100,dipl:50,govt:30,scty:30}},{name:"State Socialism",stats:{econ:80,dipl:30,govt:30,scty:70}},{name:"Theocratic Socialism",stats:{econ:80,dipl:50,govt:30,scty:20}},{name:"Religious Socialism",stats:{econ:80,dipl:50,govt:70,scty:20}},{name:"Democratic Socialism",stats:{econ:80,dipl:50,govt:50,scty:80}},{name:"Revolutionary Socialism",stats:{econ:80,dipl:20,govt:50,scty:70}},{name:"Libertarian Socialism",stats:{econ:80,dipl:80,govt:80,scty:80}},{name:"Anarcho-Syndicalism",stats:{econ:80,dipl:50,govt:100,scty:80}},{name:"Left-Wing Populism",stats:{econ:60,dipl:40,govt:30,scty:70}},{name:"Theocratic Distributism",stats:{econ:60,dipl:40,govt:30,scty:20}},{name:"Distributism",stats:{econ:60,dipl:50,govt:50,scty:20}},{name:"Social Liberalism",stats:{econ:60,dipl:60,govt:60,scty:80}},{name:"Christian Democracy",stats:{econ:60,dipl:60,govt:50,scty:30}},{name:"Social Democracy",stats:{econ:60,dipl:70,govt:60,scty:80}},{name:"Progressivism",stats:{econ:60,dipl:80,govt:60,scty:100}},{name:"Anarcho-Mutualism",stats:{econ:60,dipl:50,govt:100,scty:70}},{name:"National Totalitarianism",stats:{econ:50,dipl:20,govt:0,scty:50}},{name:"Global Totalitarianism",stats:{econ:50,dipl:80,govt:0,scty:50}},{name:"Technocracy",stats:{econ:60,dipl:60,govt:20,scty:70}},{name:"Centrist",stats:{econ:50,dipl:50,govt:50,scty:50}},{name:"Liberalism",stats:{econ:50,dipl:60,govt:60,scty:60}},{name:"Religious Anarchism",stats:{econ:50,dipl:50,govt:100,scty:20}},{name:"Right-Wing Populism",stats:{econ:40,dipl:30,govt:30,scty:30}},{name:"Moderate Conservatism",stats:{econ:40,dipl:40,govt:50,scty:30}},{name:"Reactionary",stats:{econ:40,dipl:40,govt:40,scty:10}},{name:"Social Libertarianism",stats:{econ:60,dipl:70,govt:80,scty:70}},{name:"Libertarianism",stats:{econ:40,dipl:60,govt:80,scty:60}},{name:"Anarcho-Egoism",stats:{econ:40,dipl:50,govt:100,scty:50}},{name:"Nazism",stats:{econ:40,dipl:0,govt:0,scty:5}},{name:"Autocracy",stats:{econ:50,dipl:20,govt:20,scty:50}},{name:"Fascism",stats:{econ:40,dipl:20,govt:20,scty:20}},{name:"Capitalist Fascism",stats:{econ:20,dipl:20,govt:20,scty:20}},{name:"Conservatism",stats:{econ:30,dipl:40,govt:40,scty:20}},{name:"Neo-Liberalism",stats:{econ:30,dipl:30,govt:50,scty:60}},{name:"Classical Liberalism",stats:{econ:30,dipl:60,govt:60,scty:80}},{name:"Authoritarian Capitalism",stats:{econ:20,dipl:30,govt:20,scty:40}},{name:"State Capitalism",stats:{econ:20,dipl:50,govt:30,scty:50}},{name:"Neo-Conservatism",stats:{econ:20,dipl:20,govt:40,scty:20}},{name:"Fundamentalism",stats:{econ:20,dipl:30,govt:30,scty:5}},{name:"Libertarian Capitalism",stats:{econ:20,dipl:50,govt:80,scty:60}},{name:"Market Anarchism",stats:{econ:20,dipl:50,govt:100,scty:50}},{name:"Objectivism",stats:{econ:10,dipl:50,govt:90,scty:40}},{name:"Totalitarian Capitalism",stats:{econ:0,dipl:30,govt:0,scty:50}},{name:"Ultra-Capitalism",stats:{econ:0,dipl:40,govt:50,scty:50}},{name:"Anarcho-Capitalism",stats:{econ:0,dipl:50,govt:100,scty:50}}];var Mt={ideologies:At};const Rt=()=>{const t=gt("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session}},Lt={subscribe(t){return Rt().page.subscribe(t)}};const{document:st}=St;function ct(t,s,a){const i=t.slice();return i[17]=s[a].slug,i[7]=s[a].name,i[18]=s[a].labels,i[19]=s[a].leftValue,i[20]=s[a].rightValue,i}function rt(t){let s,a=t[0][t[17]]+"",i,b;return{c(){s=C("div"),i=A(a),b=A("%"),this.h()},l(r){s=I(r,"DIV",{class:!0});var o=V(s);i=M(o,a),b=M(o,"%"),o.forEach(c),this.h()},h(){D(s,"class","text_wrapper svelte-18xnn2m")},m(r,o){y(r,s,o),h(s,i),h(s,b)},p(r,o){o&1&&a!==(a=r[0][r[17]]+"")&&et(i,a)},d(r){r&&c(s)}}}function mt(t){let s,a=t[1][t[17]]+"",i,b;return{c(){s=C("div"),i=A(a),b=A("%"),this.h()},l(r){s=I(r,"DIV",{class:!0});var o=V(s);i=M(o,a),b=M(o,"%"),o.forEach(c),this.h()},h(){D(s,"class","text_wrapper svelte-18xnn2m")},m(r,o){y(r,s,o),h(s,i),h(s,b)},p(r,o){o&2&&a!==(a=r[1][r[17]]+"")&&et(i,a)},d(r){r&&c(s)}}}function ut(t){let s,a=t[7][0].toUpperCase()+t[7].slice(1)+"",i,b,r,o=lt(t[18],parseFloat(t[0][t[17]]))+"",S,U,v,F,N,X,H,d,O=parseFloat(t[0][t[17]])>=6,Y,E,p=parseFloat(t[1][t[17]])>=6,l,T,z,R,m=O&&rt(t),u=p&&mt(t);return{c(){s=C("h2"),i=A(a),b=A(" Axis: "),r=C("span"),S=A(o),U=x(),v=C("div"),F=C("img"),H=x(),d=C("div"),m&&m.c(),Y=x(),E=C("div"),u&&u.c(),l=x(),T=C("img"),this.h()},l(n){s=I(n,"H2",{});var f=V(s);i=M(f,a),b=M(f," Axis: "),r=I(f,"SPAN",{style:!0});var W=V(r);S=M(W,o),W.forEach(c),f.forEach(c),U=q(n),v=I(n,"DIV",{class:!0});var k=V(v);F=I(k,"IMG",{class:!0,src:!0,alt:!0}),H=q(k),d=I(k,"DIV",{class:!0,style:!0});var J=V(d);m&&m.l(J),J.forEach(c),Y=q(k),E=I(k,"DIV",{class:!0,style:!0});var P=V(E);u&&u.l(P),P.forEach(c),l=q(k),T=I(k,"IMG",{class:!0,src:!0,alt:!0}),k.forEach(c),this.h()},h(){L(r,"font-weight","300"),D(F,"class","icon svelte-18xnn2m"),$(F.src,N="icons/"+t[19].name+".svg")||D(F,"src",N),D(F,"alt",X=t[19].name),D(d,"class","bar svelte-18xnn2m"),L(d,"border-right-style","solid"),L(d,"background-color",t[19].color),L(d,"width",t[0][t[17]]+"%"),D(E,"class","bar svelte-18xnn2m"),L(E,"border-left-style","solid"),L(E,"text-align","right"),L(E,"background-color",t[20].color),L(E,"width",t[1][t[17]]+"%"),D(T,"class","icon svelte-18xnn2m"),$(T.src,z="icons/"+t[20].name+".svg")||D(T,"src",z),D(T,"alt",R=t[20].name),D(v,"class","axis svelte-18xnn2m")},m(n,f){y(n,s,f),h(s,i),h(s,b),h(s,r),h(r,S),y(n,U,f),y(n,v,f),h(v,F),h(v,H),h(v,d),m&&m.m(d,null),h(v,Y),h(v,E),u&&u.m(E,null),h(v,l),h(v,T)},p(n,f){f&1&&o!==(o=lt(n[18],parseFloat(n[0][n[17]]))+"")&&et(S,o),f&1&&(O=parseFloat(n[0][n[17]])>=6),O?m?m.p(n,f):(m=rt(n),m.c(),m.m(d,null)):m&&(m.d(1),m=null),f&1&&L(d,"width",n[0][n[17]]+"%"),f&2&&(p=parseFloat(n[1][n[17]])>=6),p?u?u.p(n,f):(u=mt(n),u.c(),u.m(E,null)):u&&(u.d(1),u=null),f&2&&L(E,"width",n[1][n[17]]+"%")},d(n){n&&c(s),n&&c(U),n&&c(v),m&&m.d(),u&&u.d()}}}function Dt(t){let s;return{c(){s=A("Unknown")},l(a){s=M(a,"Unknown")},m(a,i){y(a,s,i)},p:K,d(a){a&&c(s)}}}function Ft(t){let s=t[15]+"",a;return{c(){a=A(s)},l(i){a=M(i,s)},m(i,b){y(i,a,b)},p:K,d(i){i&&c(a)}}}function Vt(t){let s;return{c(){s=A("Calculating...")},l(a){s=M(a,"Calculating...")},m(a,i){y(a,s,i)},p:K,d(a){a&&c(s)}}}function Ut(t){let s,a,i,b,r,o,S,U,v,F,N,X,H,d,O,Y=t[4].email+"",E,p,l,T,z,R,m,u,n,f,W,k,J;st.title=s=""+(t[7]+" Results");let P=t[3],w=[];for(let e=0;e<P.length;e+=1)w[e]=ut(ct(t,P,e));let j={ctx:t,current:null,token:null,hasCatch:!0,pending:Vt,then:Ft,catch:Dt,value:15,error:16};return vt(t[5](),j),{c(){a=x(),i=C("h1"),b=A("Results"),r=x();for(let e=0;e<w.length;e+=1)w[e].c();o=x(),S=C("h2"),U=A(`Closest Match:
  `),v=C("span"),j.block.c(),F=x(),N=C("p"),X=A("Ideological matching is a work in progress, and is much less accurate than the values and axes."),H=x(),d=C("p"),O=A(`You can send these results by copying and pasting the URL at the top of the page or using the
  image below. Think your matched ideology was wrong? Want to help us calibrate the test? Send the
  results along with your political ideology to us at `),E=A(Y),p=A(`, or send us any comments,
  questions, or criticism.`),l=x(),T=C("hr"),z=x(),R=C("div"),m=C("img"),n=x(),f=C("button"),W=A("Back"),this.h()},l(e){yt('[data-svelte="svelte-6qegnk"]',st.head).forEach(c),a=q(e),i=I(e,"H1",{});var _=V(i);b=M(_,"Results"),_.forEach(c),r=q(e);for(let tt=0;tt<w.length;tt+=1)w[tt].l(e);o=q(e),S=I(e,"H2",{});var B=V(S);U=M(B,`Closest Match:
  `),v=I(B,"SPAN",{style:!0});var Q=V(v);j.block.l(Q),Q.forEach(c),B.forEach(c),F=q(e),N=I(e,"P",{});var at=V(N);X=M(at,"Ideological matching is a work in progress, and is much less accurate than the values and axes."),at.forEach(c),H=q(e),d=I(e,"P",{});var Z=V(d);O=M(Z,`You can send these results by copying and pasting the URL at the top of the page or using the
  image below. Think your matched ideology was wrong? Want to help us calibrate the test? Send the
  results along with your political ideology to us at `),E=M(Z,Y),p=M(Z,`, or send us any comments,
  questions, or criticism.`),Z.forEach(c),l=q(e),T=I(e,"HR",{}),z=q(e),R=I(e,"DIV",{class:!0,style:!0});var it=V(R);m=I(it,"IMG",{src:!0,style:!0,class:!0}),it.forEach(c),n=q(e),f=I(e,"BUTTON",{});var nt=V(f);W=M(nt,"Back"),nt.forEach(c),this.h()},h(){L(v,"font-weight","300"),$(m.src,u=t[2])||D(m,"src",u),L(m,"width","100%"),L(m,"height","100%"),D(m,"class","svelte-18xnn2m"),D(R,"class","image_out svelte-18xnn2m"),L(R,"width",ft()+"px"),L(R,"height",t[6]()+"px")},m(e,g){y(e,a,g),y(e,i,g),h(i,b),y(e,r,g);for(let _=0;_<w.length;_+=1)w[_].m(e,g);y(e,o,g),y(e,S,g),h(S,U),h(S,v),j.block.m(v,j.anchor=null),j.mount=()=>v,j.anchor=null,y(e,F,g),y(e,N,g),h(N,X),y(e,H,g),y(e,d,g),h(d,O),h(d,E),h(d,p),y(e,l,g),y(e,T,g),y(e,z,g),y(e,R,g),h(R,m),y(e,n,g),y(e,f,g),h(f,W),k||(J=_t(f,"click",t[8]),k=!0)},p(e,[g]){if(t=e,g&128&&s!==(s=""+(t[7]+" Results"))&&(st.title=s),g&11){P=t[3];let _;for(_=0;_<P.length;_+=1){const B=ct(t,P,_);w[_]?w[_].p(B,g):(w[_]=ut(B),w[_].c(),w[_].m(o.parentNode,o))}for(;_<w.length;_+=1)w[_].d(1);w.length=P.length}bt(j,t,g),g&4&&!$(m.src,u=t[2])&&D(m,"src",u)},i:K,o:K,d(e){e&&c(a),e&&c(i),e&&c(r),kt(w,e),e&&c(o),e&&c(S),j.block.d(),j.token=null,j=null,e&&c(F),e&&c(N),e&&c(H),e&&c(d),e&&c(l),e&&c(T),e&&c(z),e&&c(R),e&&c(n),e&&c(f),k=!1,J()}}}const G=130;function lt(t,s){return s>100?"":s>90?t[0]:s>75?t[1]:s>60?t[2]:s>=40?t[3]:s>=25?t[4]:s>=10?t[5]:s>=0?t[6]:""}function ft(){return 800}function jt(t,s,a){let i,b;ot(t,Et,p=>a(9,i=p)),ot(t,Lt,p=>a(10,b=p));const{values:r}=It;let o={};for(const p of r)o[p.slug]="50.0";for(const[p,l]of b.query)o[p]=l;Object.keys(i).length!==0&&(o=i);let S={};for(const[p,l]of Object.entries(o))S[p]=(100-parseFloat(l)).toFixed(1);const{name:U,version:v,contact:F,url:N}=Ct,{ideologies:X}=Mt;async function H(){let p="Unknown",l=1/0;for(const{name:T,stats:z}of X){let R=0;for(const{slug:m,weight:u}of r)R+=Math.pow(Math.abs(z[m]-o[m]),u);R<l&&(p=T,l=R)}return p}function d(){return 160+G*r.length}let O="";async function Y(){const p=document.createElement("canvas");p.width=ft(),p.height=d();const l=p.getContext("2d");l.fillStyle="#EEEEEE",l.fillRect(0,0,800,d()),l.fillStyle="#222222";let T=81;do T-=1,l.font="700 "+T+"px Montserrat";while(l.measureText(U).width>460);const z=l.measureText(U).actualBoundingBoxAscent,m=59-z;l.textAlign="left",l.fillText(U,20,90-m),l.font="50px Montserrat",l.fillText(await H(),20,140-m),l.textAlign="right";let u=31;do u-=1,l.font="700 "+u+"px Montserrat";while(l.measureText(N).width>280);l.fillText(N,780,60),l.font="30px Montserrat",l.fillText(v,780,90);for(const[n,f]of Object.entries(r)){const{name:W,slug:k,labels:J,leftValue:P,rightValue:w}=f,j=W[0].toUpperCase()+W.slice(1);l.font="300 30px Montserrat",l.textAlign="center",l.fillText(j+" Axis: "+lt(J,parseFloat(o[k])),400,172+n*G);let e=new Image;e.src="icons/"+P.name+".svg",l.drawImage(e,20,170+n*G,100,100);let g=new Image;g.src="icons/"+w.name+".svg",l.drawImage(g,680,170+n*G,100,100),l.fillStyle="#222222",l.fillRect(120,180+n*G,560,80),l.fillStyle=P.color;const _=5.6*o[k]-2;l.fillRect(120,184+n*G,_,72),l.fillStyle=w.color;const B=5.6*S[k]-2,Q=680-B;l.fillRect(Q,184+n*G,B,72),o[k]>30&&(l.fillStyle="#222222",l.textAlign="left",l.font="50px Montserrat",l.fillText(o[k]+"%",130,237.5+n*G)),S[k]>30&&(l.fillStyle="#222222",l.textAlign="right",l.font="50px Montserrat",l.fillText(S[k]+"%",670,237.5+n*G))}return p.toDataURL()}return wt(async()=>{a(2,O=await Y())}),[o,S,O,r,F,H,d,U,()=>Tt("/")]}class Ot extends pt{constructor(s){super();dt(this,s,jt,Ut,ht,{})}}export{Ot as default};