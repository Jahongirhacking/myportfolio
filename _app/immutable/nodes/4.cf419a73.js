import{s as Q,d as ie,n as ae,e as D}from"../chunks/scheduler.9575b331.js";import{S as Y,i as X,g as y,s as j,h as $,j as N,A as le,c as I,f as b,k as v,a as E,x as _,d as k,p as Z,b as ee,t as S,z as te,m as J,n as x,r as F,u as H,v as L,w as B,B as se}from"../chunks/index.c454906f.js";import{e as M,a as ne}from"../chunks/index.e76dcf95.js";import{F as z,h as re,i as ce}from"../chunks/index.2dcbf97a.js";const fe=!0,Ae=Object.freeze(Object.defineProperty({__proto__:null,prerender:fe},Symbol.toStringTag,{value:"Module"})),he="/myportfolio/_app/immutable/assets/todolist.16606391.jpg",pe="/myportfolio/_app/immutable/assets/project5.8c20d7f6.jpg",ue="/myportfolio/_app/immutable/assets/scivenia.e573a11c.jpg",me="/myportfolio/_app/immutable/assets/school.2c1c7c83.jpg",de="/myportfolio/_app/immutable/assets/apple.ac450582.jpg",ge="/myportfolio/_app/immutable/assets/frontendmentor.4f28f562.jpg";function O(f,e,o){const s=f.slice();return s[1]=e[o],s}function R(f,e,o){const s=f.slice();return s[4]=e[o],s}function _e(f){let e,o,s;return o=new z({props:{icon:ne}}),{c(){e=J("GitHub "),F(o.$$.fragment)},l(t){e=x(t,"GitHub "),H(o.$$.fragment,t)},m(t,i){E(t,e,i),L(o,t,i),s=!0},p:D,i(t){s||(k(o.$$.fragment,t),s=!0)},o(t){S(o.$$.fragment,t),s=!1},d(t){t&&b(e),B(o,t)}}}function be(f){let e,o,s;return o=new z({props:{icon:re}}),{c(){e=J("Demo "),F(o.$$.fragment)},l(t){e=x(t,"Demo "),H(o.$$.fragment,t)},m(t,i){E(t,e,i),L(o,t,i),s=!0},p:D,i(t){s||(k(o.$$.fragment,t),s=!0)},o(t){S(o.$$.fragment,t),s=!1},d(t){t&&b(e),B(o,t)}}}function ve(f){let e,o,s;return o=new z({props:{icon:ce}}),{c(){e=J("Play "),F(o.$$.fragment)},l(t){e=x(t,"Play "),H(o.$$.fragment,t)},m(t,i){E(t,e,i),L(o,t,i),s=!0},p:D,i(t){s||(k(o.$$.fragment,t),s=!0)},o(t){S(o.$$.fragment,t),s=!1},d(t){t&&b(e),B(o,t)}}}function W(f){let e,o,s,t,i,n=f[4].className==="github-link"&&_e(),u=f[4].className==="demo-link"&&be(),l=f[4].className==="youtube-link"&&ve();return{c(){e=y("a"),n&&n.c(),o=j(),u&&u.c(),s=j(),l&&l.c(),t=j(),this.h()},l(m){e=$(m,"A",{href:!0,class:!0});var a=N(e);n&&n.l(a),o=I(a),u&&u.l(a),s=I(a),l&&l.l(a),t=I(a),a.forEach(b),this.h()},h(){v(e,"href",f[4].href),v(e,"class",ae(`${f[4].className} portfolio__link`)+" svelte-tio588")},m(m,a){E(m,e,a),n&&n.m(e,null),_(e,o),u&&u.m(e,null),_(e,s),l&&l.m(e,null),_(e,t),i=!0},p(m,a){m[4].className==="github-link"&&n.p(m,a),m[4].className==="demo-link"&&u.p(m,a),m[4].className==="youtube-link"&&l.p(m,a)},i(m){i||(k(n),k(u),k(l),i=!0)},o(m){S(n),S(u),S(l),i=!1},d(m){m&&b(e),n&&n.d(),u&&u.d(),l&&l.d()}}}function K(f){let e,o,s,t,i,n,u=f[1].title+"",l,m,a,d=f[1].description+"",r,w,A,U,C,P=M(f[1].buttons),h=[];for(let p=0;p<P.length;p+=1)h[p]=W(R(f,P,p));const oe=p=>S(h[p],1,1,()=>{h[p]=null});return{c(){e=y("div"),o=y("img"),t=j(),i=y("div"),n=y("h2"),l=J(u),m=j(),a=y("p"),r=J(d),w=j(),A=y("div");for(let p=0;p<h.length;p+=1)h[p].c();U=j(),this.h()},l(p){e=$(p,"DIV",{class:!0});var g=N(e);o=$(g,"IMG",{class:!0,src:!0,alt:!0}),t=I(g),i=$(g,"DIV",{class:!0});var c=N(i);n=$(c,"H2",{class:!0});var T=N(n);l=x(T,u),T.forEach(b),m=I(c),a=$(c,"P",{class:!0});var G=N(a);r=x(G,d),G.forEach(b),w=I(c),A=$(c,"DIV",{class:!0});var q=N(A);for(let V=0;V<h.length;V+=1)h[V].l(q);q.forEach(b),c.forEach(b),U=I(g),g.forEach(b),this.h()},h(){v(o,"class","portfolio__img svelte-tio588"),ie(o.src,s=f[1].image)||v(o,"src",s),v(o,"alt",f[1].title),v(n,"class","portfolio__title svelte-tio588"),v(a,"class","portfolio__info svelte-tio588"),v(A,"class","portfolio__links svelte-tio588"),v(i,"class","portfolio__description svelte-tio588"),v(e,"class","portfolio__project svelte-tio588")},m(p,g){E(p,e,g),_(e,o),_(e,t),_(e,i),_(i,n),_(n,l),_(i,m),_(i,a),_(a,r),_(i,w),_(i,A);for(let c=0;c<h.length;c+=1)h[c]&&h[c].m(A,null);_(e,U),C=!0},p(p,g){if(g&1){P=M(p[1].buttons);let c;for(c=0;c<P.length;c+=1){const T=R(p,P,c);h[c]?(h[c].p(T,g),k(h[c],1)):(h[c]=W(T),h[c].c(),k(h[c],1),h[c].m(A,null))}for(Z(),c=P.length;c<h.length;c+=1)oe(c);ee()}},i(p){if(!C){for(let g=0;g<P.length;g+=1)k(h[g]);C=!0}},o(p){h=h.filter(Boolean);for(let g=0;g<h.length;g+=1)S(h[g]);C=!1},d(p){p&&b(e),te(h,p)}}}function ke(f){let e,o,s="Portfolio",t,i,n,u=M(f[0]),l=[];for(let a=0;a<u.length;a+=1)l[a]=K(O(f,u,a));const m=a=>S(l[a],1,1,()=>{l[a]=null});return{c(){e=y("section"),o=y("h2"),o.textContent=s,t=j(),i=y("div");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=$(a,"SECTION",{id:!0,class:!0});var d=N(e);o=$(d,"H2",{class:!0,"data-svelte-h":!0}),le(o)!=="svelte-1dado0p"&&(o.textContent=s),t=I(d),i=$(d,"DIV",{class:!0});var r=N(i);for(let w=0;w<l.length;w+=1)l[w].l(r);r.forEach(b),d.forEach(b),this.h()},h(){v(o,"class","portfolio__heading svelte-tio588"),v(i,"class","project-container portfolio__projects svelte-tio588"),v(e,"id","portfolio"),v(e,"class","svelte-tio588")},m(a,d){E(a,e,d),_(e,o),_(e,t),_(e,i);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(i,null);n=!0},p(a,[d]){if(d&1){u=M(a[0]);let r;for(r=0;r<u.length;r+=1){const w=O(a,u,r);l[r]?(l[r].p(w,d),k(l[r],1)):(l[r]=K(w),l[r].c(),k(l[r],1),l[r].m(i,null))}for(Z(),r=u.length;r<l.length;r+=1)m(r);ee()}},i(a){if(!n){for(let d=0;d<u.length;d+=1)k(l[d]);n=!0}},o(a){l=l.filter(Boolean);for(let d=0;d<l.length;d+=1)S(l[d]);n=!1},d(a){a&&b(e),te(l,a)}}}function ye(f){return[[{image:he,title:"Todo List App",description:`I used Binary Search Algorithm to make Reactive state manually in JavaScript by efficiently finding the index of the clicked element from
        the list of Todos, this enhanced the process of editing and deleting a list. Before
        deleting, it will show you a modal. I added "Clear All" button to clear everything and a
        new "read the whole text" function since the text content for list is limited`,buttons:[{className:"github-link",href:"https://github.com/Jahongirhacking/FE-Projects/tree/main/CRUD%20App"},{className:"demo-link",href:"https://bulalar-todo.netlify.app/"}]},{image:ue,title:"Scivenia Beta Project",description:"As part of this university software project, we created a specific functionality of a bigger web app. The aim of this functionality is to visualize and demonstrate the scientific collaboration between researchers and scientists. I used Breadth First Search algorithm in the client side to find all collaborators of the researcher. Used technologies: React JS and Sigma JS",buttons:[{className:"github-link",href:"https://github.com/Jahongirhacking/SciVenia-beta"}]},{image:pe,title:"Travel Planner App",description:`Travel Planner App - This project requires me to build out a travel app that, at a
					minimum, obtains a desired trip location & date from the user, and displays weather and an
					image of the location using information obtained from external APIs. I also added
					additional functionalities. Used technologies: HTML, SASS, JavaScript, Express JS and
					Webpack`,buttons:[{className:"github-link",href:"https://github.com/Jahongirhacking/Udacity-FE-Projects/tree/main/udacity-5"},{className:"demo-link",href:"https://bulalar-travel.netlify.app/"}]},{image:me,title:"68th School App",description:`68-DIMI WebApp - This application was created for students of our school in Uzbekistan. In
					this project, the students can play games, solve problems, take tests and compete to win.
					It has a leaderboard to show top students who collect points by taking tests and exams
					which being organized by the App. Used technologies: HTML, CSS, JavaScript and PHP`,buttons:[{className:"github-link",href:"https://github.com/Jahongirhacking/68dimi"},{className:"demo-link",href:"https://68dimi.netlify.app/"},{className:"youtube-link",href:"https://youtu.be/f1KV9d9tQu4"}]},{image:de,title:"Apple Clone Layout",description:`I was going to sharpen my CSS skills to work with Flexbox ang Grid Layouts. I choose
					Apple's website and tried to build its clone. I hope this layout looks like the real Apple
					Website. Used technologies: HTML and CSS`,buttons:[{className:"github-link",href:"https://github.com/Jahongirhacking/apple"},{className:"demo-link",href:"https://apple-bulalar.netlify.app/"}]},{image:ge,title:"Frontend Mentor",description:`You can see my other works related to Front-End stuff. I think this platform is the best for
					learning and gaining some experience, by doing some practice, I
					have achieved a lot of progress on this platform.`,buttons:[{className:"demo-link",href:"https://www.frontendmentor.io/profile/Jahongirhacking"}]}]]}class $e extends Y{constructor(e){super(),X(this,e,ye,ke,Q,{})}}function Se(f){let e,o,s,t;return s=new $e({}),{c(){e=y("meta"),o=j(),F(s.$$.fragment),this.h()},l(i){const n=se("svelte-1ng0ayt",document.head);e=$(n,"META",{name:!0,content:!0}),n.forEach(b),o=I(i),H(s.$$.fragment,i),this.h()},h(){document.title="Portfolio",v(e,"name","description"),v(e,"content","My projects and used technologies")},m(i,n){_(document.head,e),E(i,o,n),L(s,i,n),t=!0},p:D,i(i){t||(k(s.$$.fragment,i),t=!0)},o(i){S(s.$$.fragment,i),t=!1},d(i){i&&b(o),b(e),B(s,i)}}}class Pe extends Y{constructor(e){super(),X(this,e,null,Se,Q,{})}}export{Pe as component,Ae as universal};
