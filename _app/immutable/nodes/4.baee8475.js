import{s as Q,d as ae,n as le,e as D}from"../chunks/scheduler.9575b331.js";import{S as Y,i as X,g as y,s as w,h as $,j as N,A as ie,c as I,f as b,k as v,a as E,x as _,d as k,p as Z,b as ee,t as j,z as te,m as J,n as x,r as F,u as H,v as L,w as B,B as se}from"../chunks/index.c454906f.js";import{e as M,a as ne}from"../chunks/index.e76dcf95.js";import{F as z,h as re,i as ce}from"../chunks/index.2dcbf97a.js";const fe=!0,Ae=Object.freeze(Object.defineProperty({__proto__:null,prerender:fe},Symbol.toStringTag,{value:"Module"})),ue="/_app/immutable/assets/todolist.16606391.jpg",he="/_app/immutable/assets/project5.8c20d7f6.jpg",pe="/_app/immutable/assets/scivenia.e573a11c.jpg",me="/_app/immutable/assets/school.2c1c7c83.jpg",de="/_app/immutable/assets/apple.ac450582.jpg",ge="/_app/immutable/assets/frontendmentor.4f28f562.jpg";function O(f,e,o){const s=f.slice();return s[1]=e[o],s}function R(f,e,o){const s=f.slice();return s[4]=e[o],s}function _e(f){let e,o,s;return o=new z({props:{icon:ne}}),{c(){e=J("GitHub "),F(o.$$.fragment)},l(t){e=x(t,"GitHub "),H(o.$$.fragment,t)},m(t,a){E(t,e,a),L(o,t,a),s=!0},p:D,i(t){s||(k(o.$$.fragment,t),s=!0)},o(t){j(o.$$.fragment,t),s=!1},d(t){t&&b(e),B(o,t)}}}function be(f){let e,o,s;return o=new z({props:{icon:re}}),{c(){e=J("Demo "),F(o.$$.fragment)},l(t){e=x(t,"Demo "),H(o.$$.fragment,t)},m(t,a){E(t,e,a),L(o,t,a),s=!0},p:D,i(t){s||(k(o.$$.fragment,t),s=!0)},o(t){j(o.$$.fragment,t),s=!1},d(t){t&&b(e),B(o,t)}}}function ve(f){let e,o,s;return o=new z({props:{icon:ce}}),{c(){e=J("Play "),F(o.$$.fragment)},l(t){e=x(t,"Play "),H(o.$$.fragment,t)},m(t,a){E(t,e,a),L(o,t,a),s=!0},p:D,i(t){s||(k(o.$$.fragment,t),s=!0)},o(t){j(o.$$.fragment,t),s=!1},d(t){t&&b(e),B(o,t)}}}function W(f){let e,o,s,t,a,n=f[4].className==="github-link"&&_e(),p=f[4].className==="demo-link"&&be(),i=f[4].className==="youtube-link"&&ve();return{c(){e=y("a"),n&&n.c(),o=w(),p&&p.c(),s=w(),i&&i.c(),t=w(),this.h()},l(m){e=$(m,"A",{href:!0,class:!0});var l=N(e);n&&n.l(l),o=I(l),p&&p.l(l),s=I(l),i&&i.l(l),t=I(l),l.forEach(b),this.h()},h(){v(e,"href",f[4].href),v(e,"class",le(`${f[4].className} portfolio__link`)+" svelte-1juomgr")},m(m,l){E(m,e,l),n&&n.m(e,null),_(e,o),p&&p.m(e,null),_(e,s),i&&i.m(e,null),_(e,t),a=!0},p(m,l){m[4].className==="github-link"&&n.p(m,l),m[4].className==="demo-link"&&p.p(m,l),m[4].className==="youtube-link"&&i.p(m,l)},i(m){a||(k(n),k(p),k(i),a=!0)},o(m){j(n),j(p),j(i),a=!1},d(m){m&&b(e),n&&n.d(),p&&p.d(),i&&i.d()}}}function K(f){let e,o,s,t,a,n,p=f[1].title+"",i,m,l,d=f[1].description+"",r,S,A,U,C,P=M(f[1].buttons),u=[];for(let h=0;h<P.length;h+=1)u[h]=W(R(f,P,h));const oe=h=>j(u[h],1,1,()=>{u[h]=null});return{c(){e=y("div"),o=y("img"),t=w(),a=y("div"),n=y("h2"),i=J(p),m=w(),l=y("p"),r=J(d),S=w(),A=y("div");for(let h=0;h<u.length;h+=1)u[h].c();U=w(),this.h()},l(h){e=$(h,"DIV",{class:!0});var g=N(e);o=$(g,"IMG",{class:!0,src:!0,alt:!0}),t=I(g),a=$(g,"DIV",{class:!0});var c=N(a);n=$(c,"H2",{class:!0});var T=N(n);i=x(T,p),T.forEach(b),m=I(c),l=$(c,"P",{class:!0});var G=N(l);r=x(G,d),G.forEach(b),S=I(c),A=$(c,"DIV",{class:!0});var q=N(A);for(let V=0;V<u.length;V+=1)u[V].l(q);q.forEach(b),c.forEach(b),U=I(g),g.forEach(b),this.h()},h(){v(o,"class","portfolio__img svelte-1juomgr"),ae(o.src,s=f[1].image)||v(o,"src",s),v(o,"alt",f[1].title),v(n,"class","portfolio__title svelte-1juomgr"),v(l,"class","portfolio__info svelte-1juomgr"),v(A,"class","portfolio__links svelte-1juomgr"),v(a,"class","portfolio__description svelte-1juomgr"),v(e,"class","portfolio__project svelte-1juomgr")},m(h,g){E(h,e,g),_(e,o),_(e,t),_(e,a),_(a,n),_(n,i),_(a,m),_(a,l),_(l,r),_(a,S),_(a,A);for(let c=0;c<u.length;c+=1)u[c]&&u[c].m(A,null);_(e,U),C=!0},p(h,g){if(g&1){P=M(h[1].buttons);let c;for(c=0;c<P.length;c+=1){const T=R(h,P,c);u[c]?(u[c].p(T,g),k(u[c],1)):(u[c]=W(T),u[c].c(),k(u[c],1),u[c].m(A,null))}for(Z(),c=P.length;c<u.length;c+=1)oe(c);ee()}},i(h){if(!C){for(let g=0;g<P.length;g+=1)k(u[g]);C=!0}},o(h){u=u.filter(Boolean);for(let g=0;g<u.length;g+=1)j(u[g]);C=!1},d(h){h&&b(e),te(u,h)}}}function ke(f){let e,o,s="Portfolio",t,a,n,p=M(f[0]),i=[];for(let l=0;l<p.length;l+=1)i[l]=K(O(f,p,l));const m=l=>j(i[l],1,1,()=>{i[l]=null});return{c(){e=y("section"),o=y("h2"),o.textContent=s,t=w(),a=y("div");for(let l=0;l<i.length;l+=1)i[l].c();this.h()},l(l){e=$(l,"SECTION",{id:!0,class:!0});var d=N(e);o=$(d,"H2",{class:!0,"data-svelte-h":!0}),ie(o)!=="svelte-1dado0p"&&(o.textContent=s),t=I(d),a=$(d,"DIV",{class:!0});var r=N(a);for(let S=0;S<i.length;S+=1)i[S].l(r);r.forEach(b),d.forEach(b),this.h()},h(){v(o,"class","portfolio__heading svelte-1juomgr"),v(a,"class","project-container portfolio__projects svelte-1juomgr"),v(e,"id","portfolio"),v(e,"class","svelte-1juomgr")},m(l,d){E(l,e,d),_(e,o),_(e,t),_(e,a);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(a,null);n=!0},p(l,[d]){if(d&1){p=M(l[0]);let r;for(r=0;r<p.length;r+=1){const S=O(l,p,r);i[r]?(i[r].p(S,d),k(i[r],1)):(i[r]=K(S),i[r].c(),k(i[r],1),i[r].m(a,null))}for(Z(),r=p.length;r<i.length;r+=1)m(r);ee()}},i(l){if(!n){for(let d=0;d<p.length;d+=1)k(i[d]);n=!0}},o(l){i=i.filter(Boolean);for(let d=0;d<i.length;d+=1)j(i[d]);n=!1},d(l){l&&b(e),te(i,l)}}}function ye(f){return[[{image:ue,title:"Todo List App",description:`I used Binary Search Algorithm to make Reactive state manually in JavaScript by efficiently finding the index of the clicked element from
        the list of Todos, this enhanced the process of editing and deleting a list. Before
        deleting, it will show you a modal. I added "Clear All" button to clear everything and a
        new "read the whole text" function since the text content for list is limited`,buttons:[{className:"github-link",href:"https://github.com/Jahongirhacking/FE-Projects/tree/main/CRUD%20App"},{className:"demo-link",href:"https://bulalar-todo.netlify.app/"}]},{image:pe,title:"Scivenia Beta Project",description:"As part of this university software project, we created a specific functionality of a bigger web app. The aim of this functionality is to visualize and demonstrate the scientific collaboration between researchers and scientists. I used Breadth First Search algorithm in the client side to find all collaborators of the researcher. Used technologies: React JS and Sigma JS",buttons:[{className:"github-link",href:"https://github.com/Jahongirhacking/SciVenia-beta"}]},{image:he,title:"Travel Planner App",description:`Travel Planner App - This project requires me to build out a travel app that, at a
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
					have achieved a lot of progress on this platform.`,buttons:[{className:"demo-link",href:"https://www.frontendmentor.io/profile/Jahongirhacking"}]}]]}class $e extends Y{constructor(e){super(),X(this,e,ye,ke,Q,{})}}function je(f){let e,o,s,t;return s=new $e({}),{c(){e=y("meta"),o=w(),F(s.$$.fragment),this.h()},l(a){const n=se("svelte-1ng0ayt",document.head);e=$(n,"META",{name:!0,content:!0}),n.forEach(b),o=I(a),H(s.$$.fragment,a),this.h()},h(){document.title="Portfolio",v(e,"name","description"),v(e,"content","My projects and used technologies")},m(a,n){_(document.head,e),E(a,o,n),L(s,a,n),t=!0},p:D,i(a){t||(k(s.$$.fragment,a),t=!0)},o(a){j(s.$$.fragment,a),t=!1},d(a){a&&b(o),b(e),B(s,a)}}}class Pe extends Y{constructor(e){super(),X(this,e,null,je,Q,{})}}export{Pe as component,Ae as universal};