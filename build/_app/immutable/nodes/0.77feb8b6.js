import{S as N,i as V,s as D,k as p,l as d,m as $,h as _,n as h,b as y,C as v,g,v as O,f as W,d as b,D as F,E as G,y as H,a as S,q as z,z as B,c as E,r as C,F as w,A as M,B as P,G as J,H as L,I as R,J as T}from"../chunks/index.474b34d0.js";import{I as k,a as K}from"../chunks/Icon.89d7540f.js";import{p as Q}from"../chunks/stores.c0892cab.js";import{e as U}from"../chunks/singletons.cda15f71.js";const X=!0,oe=Object.freeze(Object.defineProperty({__proto__:null,prerender:X},Symbol.toStringTag,{value:"Module"}));function A(u,s,r){const i=u.slice();return i[4]=s[r],i}function j(u){let s,r,i,c,e=u[4].title+"",f,a,o;return r=new K({props:{icon:u[4].icon,size:"18px"}}),{c(){s=p("a"),H(r.$$.fragment),i=S(),c=p("span"),f=z(e),a=S(),this.h()},l(t){s=d(t,"A",{href:!0,class:!0});var n=$(s);B(r.$$.fragment,n),i=E(n),c=d(n,"SPAN",{class:!0});var l=$(c);f=C(l,e),l.forEach(_),a=E(n),n.forEach(_),this.h()},h(){h(c,"class","nav-menu-item-label svelte-1yvqyhe"),h(s,"href",`${U}${u[4].to}`),h(s,"class","nav-menu-item svelte-1yvqyhe"),w(s,"nav-menu-item-active",u[0]===u[4].to)},m(t,n){y(t,s,n),M(r,s,null),v(s,i),v(s,c),v(c,f),v(s,a),o=!0},p(t,n){(!o||n&3)&&w(s,"nav-menu-item-active",t[0]===t[4].to)},i(t){o||(g(r.$$.fragment,t),o=!0)},o(t){b(r.$$.fragment,t),o=!1},d(t){t&&_(s),P(r)}}}function Y(u){let s,r,i,c=u[1],e=[];for(let a=0;a<c.length;a+=1)e[a]=j(A(u,c,a));const f=a=>b(e[a],1,1,()=>{e[a]=null});return{c(){s=p("div"),r=p("nav");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){s=d(a,"DIV",{class:!0});var o=$(s);r=d(o,"NAV",{class:!0});var t=$(r);for(let n=0;n<e.length;n+=1)e[n].l(t);t.forEach(_),o.forEach(_),this.h()},h(){h(r,"class","container svelte-1yvqyhe"),h(s,"class","nav-menu svelte-1yvqyhe")},m(a,o){y(a,s,o),v(s,r);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(r,null);i=!0},p(a,[o]){if(o&3){c=a[1];let t;for(t=0;t<c.length;t+=1){const n=A(a,c,t);e[t]?(e[t].p(n,o),g(e[t],1)):(e[t]=j(n),e[t].c(),g(e[t],1),e[t].m(r,null))}for(O(),t=c.length;t<e.length;t+=1)f(t);W()}},i(a){if(!i){for(let o=0;o<c.length;o+=1)g(e[o]);i=!0}},o(a){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)b(e[o]);i=!1},d(a){a&&_(s),F(e,a)}}}function Z(u,s,r){let i;G(u,Q,a=>r(2,i=a));const c={home:"Home",publications:"Publications",awards:"Awards",resume:"CV",skills:"Skills"};let e="/";const f=[{title:c.home,to:"/",icon:k.Home},{title:c.publications,to:"/#publications-anchor",icon:k.Academic},{title:c.awards,to:"/#awards-anchor",icon:k.Skills}];return u.$$.update=()=>{u.$$.dirty&4&&i&&r(0,e=i.url.pathname)},[e,f,i]}class x extends N{constructor(s){super(),V(this,s,Z,Y,D,{})}}function ee(u){let s,r,i,c,e,f,a,o;s=new x({});const t=u[1].default,n=J(t,u,u[0],null);return{c(){H(s.$$.fragment),r=S(),i=p("div"),n&&n.c(),c=S(),e=p("div"),f=p("h3"),a=z("© 2023 Simon Warchol"),this.h()},l(l){B(s.$$.fragment,l),r=E(l),i=d(l,"DIV",{class:!0});var m=$(i);n&&n.l(m),m.forEach(_),c=E(l),e=d(l,"DIV",{class:!0});var I=$(e);f=d(I,"H3",{class:!0});var q=$(f);a=C(q,"© 2023 Simon Warchol"),q.forEach(_),I.forEach(_),this.h()},h(){h(i,"class","content container svelte-d1yjay"),h(f,"class","color-gradient svelte-d1yjay"),h(e,"class","footer svelte-d1yjay")},m(l,m){M(s,l,m),y(l,r,m),y(l,i,m),n&&n.m(i,null),y(l,c,m),y(l,e,m),v(e,f),v(f,a),o=!0},p(l,[m]){n&&n.p&&(!o||m&1)&&L(n,t,l,l[0],o?T(t,l[0],m,null):R(l[0]),null)},i(l){o||(g(s.$$.fragment,l),g(n,l),o=!0)},o(l){b(s.$$.fragment,l),b(n,l),o=!1},d(l){P(s,l),l&&_(r),l&&_(i),n&&n.d(l),l&&_(c),l&&_(e)}}}function te(u,s,r){let{$$slots:i={},$$scope:c}=s;return u.$$set=e=>{"$$scope"in e&&r(0,c=e.$$scope)},[c,i]}class re extends N{constructor(s){super(),V(this,s,te,ee,D,{})}}export{re as component,oe as universal};