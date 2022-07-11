import{Q,R as ee,S as X,i as Y,s as Z,e as _,G as A,k as $,t as G,c as g,a as v,H,d as f,m as D,h as U,b as a,f as W,g as L,K as r,T as z,j as F,E as P,U as te,L as se,w as re,V as oe,x as ae,I as ne,y as le,q as ie,o as ce,B as de}from"../chunks/index-95851273.js";import{w as ue}from"../chunks/index-ab51b9fa.js";function J(e){return Object.prototype.toString.call(e)==="[object Date]"}function V(e,s,t,o){if(typeof t=="number"||J(t)){const n=o-t,l=(t-s)/(e.dt||1/60),c=e.opts.stiffness*n,i=e.opts.damping*l,h=(c-i)*e.inv_mass,u=(l+h)*e.dt;return Math.abs(u)<e.opts.precision&&Math.abs(n)<e.opts.precision?o:(e.settled=!1,J(t)?new Date(t.getTime()+u):t+u)}else{if(Array.isArray(t))return t.map((n,l)=>V(e,s[l],t[l],o[l]));if(typeof t=="object"){const n={};for(const l in t)n[l]=V(e,s[l],t[l],o[l]);return n}else throw new Error(`Cannot spring ${typeof t} values`)}}function fe(e,s={}){const t=ue(e),{stiffness:o=.15,damping:n=.8,precision:l=.01}=s;let c,i,h,u=e,S=e,T=1,M=0,E=!1;function B(m,p={}){S=m;const k=h={};if(e==null||p.hard||y.stiffness>=1&&y.damping>=1)return E=!0,c=Q(),u=m,t.set(e=S),Promise.resolve();if(p.soft){const w=p.soft===!0?.5:+p.soft;M=1/(w*60),T=0}return i||(c=Q(),E=!1,i=ee(w=>{if(E)return E=!1,i=null,!1;T=Math.min(T+M,1);const x={inv_mass:T,opts:y,settled:!0,dt:(w-c)*60/1e3},b=V(x,u,e,S);return c=w,u=e,t.set(e=b),x.settled&&(i=null),!x.settled})),new Promise(w=>{i.promise.then(()=>{k===h&&w()})})}const y={set:B,update:(m,p)=>B(m(S,e),p),subscribe:t.subscribe,stiffness:o,damping:n,precision:l};return y}function pe(e){let s,t,o,n,l,c,i,h,u=Math.floor(e[1]+1)+"",S,T,M,E=Math.floor(e[1])+"",B,y,m,p,k,w,x;return{c(){s=_("div"),t=_("button"),o=A("svg"),n=A("path"),l=$(),c=_("div"),i=_("div"),h=_("strong"),S=G(u),T=$(),M=_("strong"),B=G(E),y=$(),m=_("button"),p=A("svg"),k=A("path"),this.h()},l(b){s=g(b,"DIV",{class:!0});var d=v(s);t=g(d,"BUTTON",{"aria-label":!0,class:!0});var O=v(t);o=H(O,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var I=v(o);n=H(I,"path",{d:!0,class:!0}),v(n).forEach(f),I.forEach(f),O.forEach(f),l=D(d),c=g(d,"DIV",{class:!0});var R=v(c);i=g(R,"DIV",{class:!0,style:!0});var C=v(i);h=g(C,"STRONG",{class:!0,"aria-hidden":!0});var N=v(h);S=U(N,u),N.forEach(f),T=D(C),M=g(C,"STRONG",{class:!0});var j=v(M);B=U(j,E),j.forEach(f),C.forEach(f),R.forEach(f),y=D(d),m=g(d,"BUTTON",{"aria-label":!0,class:!0});var q=v(m);p=H(q,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var K=v(p);k=H(K,"path",{d:!0,class:!0}),v(k).forEach(f),K.forEach(f),q.forEach(f),d.forEach(f),this.h()},h(){a(n,"d","M0,0.5 L1,0.5"),a(n,"class","svelte-sx9eo4"),a(o,"aria-hidden","true"),a(o,"viewBox","0 0 1 1"),a(o,"class","svelte-sx9eo4"),a(t,"aria-label","Decrease the counter by one"),a(t,"class","svelte-sx9eo4"),a(h,"class","hidden svelte-sx9eo4"),a(h,"aria-hidden","true"),a(M,"class","svelte-sx9eo4"),a(i,"class","counter-digits svelte-sx9eo4"),W(i,"transform","translate(0, "+100*e[2]+"%)"),a(c,"class","counter-viewport svelte-sx9eo4"),a(k,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),a(k,"class","svelte-sx9eo4"),a(p,"aria-hidden","true"),a(p,"viewBox","0 0 1 1"),a(p,"class","svelte-sx9eo4"),a(m,"aria-label","Increase the counter by one"),a(m,"class","svelte-sx9eo4"),a(s,"class","counter svelte-sx9eo4")},m(b,d){L(b,s,d),r(s,t),r(t,o),r(o,n),r(s,l),r(s,c),r(c,i),r(i,h),r(h,S),r(i,T),r(i,M),r(M,B),r(s,y),r(s,m),r(m,p),r(p,k),w||(x=[z(t,"click",e[4]),z(m,"click",e[5])],w=!0)},p(b,[d]){d&2&&u!==(u=Math.floor(b[1]+1)+"")&&F(S,u),d&2&&E!==(E=Math.floor(b[1])+"")&&F(B,E),d&4&&W(i,"transform","translate(0, "+100*b[2]+"%)")},i:P,o:P,d(b){b&&f(s),w=!1,te(x)}}}function he(e,s){return(e%s+s)%s}function me(e,s,t){let o,n,l=0;const c=fe();se(e,c,u=>t(1,n=u));const i=()=>t(0,l-=1),h=()=>t(0,l+=1);return e.$$.update=()=>{e.$$.dirty&1&&c.set(l),e.$$.dirty&2&&t(2,o=he(n,1))},[l,n,o,c,i,h]}class ve extends X{constructor(s){super(),Y(this,s,me,pe,Z,{})}}function _e(e){let s,t,o,n,l,c,i,h,u,S,T,M,E,B,y,m,p,k,w,x,b;return x=new ve({}),{c(){s=_("meta"),t=$(),o=_("section"),n=_("h1"),l=_("span"),c=_("picture"),i=_("source"),h=$(),u=_("img"),T=G(`

		to your new`),M=_("br"),E=G("SvelteKit app"),B=$(),y=_("h2"),m=G("try editing "),p=_("strong"),k=G("src/routes/index.svelte"),w=$(),re(x.$$.fragment),this.h()},l(d){const O=oe('[data-svelte="svelte-t32ptj"]',document.head);s=g(O,"META",{name:!0,content:!0}),O.forEach(f),t=D(d),o=g(d,"SECTION",{class:!0});var I=v(o);n=g(I,"H1",{class:!0});var R=v(n);l=g(R,"SPAN",{class:!0});var C=v(l);c=g(C,"PICTURE",{});var N=v(c);i=g(N,"SOURCE",{srcset:!0,type:!0}),h=D(N),u=g(N,"IMG",{src:!0,alt:!0,class:!0}),N.forEach(f),C.forEach(f),T=U(R,`

		to your new`),M=g(R,"BR",{}),E=U(R,"SvelteKit app"),R.forEach(f),B=D(I),y=g(I,"H2",{});var j=v(y);m=U(j,"try editing "),p=g(j,"STRONG",{});var q=v(p);k=U(q,"src/routes/index.svelte"),q.forEach(f),j.forEach(f),w=D(I),ae(x.$$.fragment,I),I.forEach(f),this.h()},h(){document.title="Home",a(s,"name","description"),a(s,"content","Svelte demo app"),a(i,"srcset","svelte-welcome.webp"),a(i,"type","image/webp"),ne(u.src,S="svelte-welcome.png")||a(u,"src",S),a(u,"alt","Welcome"),a(u,"class","svelte-1egtvge"),a(l,"class","welcome svelte-1egtvge"),a(n,"class","svelte-1egtvge"),a(o,"class","svelte-1egtvge")},m(d,O){r(document.head,s),L(d,t,O),L(d,o,O),r(o,n),r(n,l),r(l,c),r(c,i),r(c,h),r(c,u),r(n,T),r(n,M),r(n,E),r(o,B),r(o,y),r(y,m),r(y,p),r(p,k),r(o,w),le(x,o,null),b=!0},p:P,i(d){b||(ie(x.$$.fragment,d),b=!0)},o(d){ce(x.$$.fragment,d),b=!1},d(d){f(s),d&&f(t),d&&f(o),de(x)}}}class ye extends X{constructor(s){super(),Y(this,s,null,_e,Z,{})}}export{ye as default};
