(this["webpackJsonpmy-blog"]=this["webpackJsonpmy-blog"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);n(24);var i=n(1),s=n.n(i),a=n(18),u=n.n(a),c=(n(29),n(19)),r=n(20),l=n(23),o=n(22),m=n(7),d=n(2),b=(n(30),n(0)),p=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"About Me!"}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet\xdfctetur adipiscing elit. Curabitur sit amet mi non elit dictum pretium in accumsan ligula. Praesent mi ex, consequat sit amet rutrum eget, lobortis in nunc. Integer congue fringilla nisi. Etiam non nulla fermentum felis rutrum rutrum. Vivamus aliquam massa lorem, sed fermentum enim sagittis vitae. Sed cursus faucibus ornare. Proin suscipit odio nec tortor viverra egestas. Curabitur a congue lacus. Sed varius lacus ipsum, id dictum sapien imperdiet ut. Cras at cursus sapien, id iaculis purus. Morbi quis tellus sed erat ornare maximus vel at tortor. Proin congue justo id mi interdum, varius suscipit tortor commodo."}),Object(b.jsx)("p",{children:"Donec ornare molestie odio ut blandit. Nullam quam ligula, tincidunt non venenatis quis, convallis eget arcu. Proin nec arcu eget neque imperdiet rutrum vitae eget ligula. Aliquam arcu orci, iaculis at purus et, dignissim iaculis diam. Nulla quis nunc id arcu dapibus malesuada eget quis ex. Sed sem odio, lobortis in orci in, hendrerit dictum libero. Suspendisse hendrerit faucibus blandit. Aenean interdum eget ipsum a tincidunt. Nullam vitae neque commodo, euismod leo non, porta enim. Sed urna velit, auctor nec nulla quis, feugiat faucibus lacus. Donec mauris dolor, vulputate eget dapibus a, scelerisque non lectus."})]})},j=n(8),h=n.n(j),g=n(10),v=n(12),f=function(e){var t=e.articleName,n=e.setArticleInfo,s=Object(i.useState)(""),a=Object(v.a)(s,2),u=a[0],c=a[1],r=Object(i.useState)(""),l=Object(v.a)(r,2),o=l[0],m=l[1],d=function(){var e=Object(g.a)(h.a.mark((function e(){var i,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:u,text:o}),headers:{"Content-Type":"application/json"}});case 2:return i=e.sent,e.next=5,i.json();case 5:s=e.sent,n(s),console.log(s),console.log("".concat(u," ").concat(o)),c(""),m("");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{children:"Add a comment"}),Object(b.jsxs)("label",{children:["Username:",Object(b.jsx)("br",{}),Object(b.jsx)("input",{value:u,onChange:function(e){c(e.target.value)}})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["Comment:",Object(b.jsx)("textarea",{rows:"4",cols:"50",value:o,onChange:function(e){m(e.target.value)}})]}),Object(b.jsx)("button",{onClick:function(){return d()},children:"Add comment"})]})},x=function(e){var t=e.articles;return Object(b.jsx)(b.Fragment,{children:t.map((function(e,t){return Object(b.jsxs)(m.b,{to:"/article/"+e.name,children:[Object(b.jsx)("h3",{children:e.title}),Object(b.jsxs)("p",{children:[e.content[0].substring(0,150),"..."]})]},t)}))})},O=function(e){var t=e.comments;return t?t.length>0?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{children:"Comments:"}),t.map((function(e,t){return Object(b.jsxs)("div",{className:"comment",children:[Object(b.jsx)("h4",{children:e.username}),Object(b.jsx)("p",{children:e.text})]},t)}))]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{children:"Comments:"}),Object(b.jsx)("p",{children:"No comments for this article."})]}):Object(b.jsx)(b.Fragment,{})},q=function(e){var t=e.articleName,n=e.upvotes,i=e.setArticleInfo,s=function(){var e=Object(g.a)(h.a.mark((function e(){var n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,i(s);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return s()},children:"Upvote this article"}),Object(b.jsxs)("p",{children:["This article has ",n," upvotes."]})]})},N=[{name:"learn-react",title:"The Fastest Way to Learn React",content:["Welcome! Today we're going to be talking about the fastest way to\n            learn React. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"learn-node",title:"How to Build a Node Server in 10 Minutes",content:["In this article, we're going to be talking looking at a very quick way\n            to set up a Node.js server. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"my-thoughts-on-resumes",title:"My Thoughts on Resumes",content:["Today is the day I talk about something which scares most people: resumes.\n            In reality, I'm not sure why people have such a hard time with proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]}],S=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("h1",{children:"404: Page not found!"})})},y=function(e){var t=e.match.params.name,n=N.find((function(e){return e.name===t})),s=Object(i.useState)({upvotes:0,comment:[]}),a=Object(v.a)(s,2),u=a[0],c=a[1];Object(i.useEffect)((function(){(function(){var e=Object(g.a)(h.a.mark((function e(){var n,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:i=e.sent,c(i),console.log(i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var r=N.filter((function(e){return e.name!=t}));return n?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:n.title}),Object(b.jsx)(q,{articleName:t,upvotes:u.upvotes,setArticleInfo:c}),n.content.map((function(e,t){return Object(b.jsx)("p",{children:e},t)})),Object(b.jsx)(O,{comments:u.comment}),Object(b.jsx)(f,{articleName:t,setArticleInfo:c}),Object(b.jsx)("h3",{children:"Other articles"}),Object(b.jsx)(x,{articles:r})]}):Object(b.jsx)(S,{})},A=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Articles!"}),Object(b.jsx)(x,{articles:N})]})},C=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Welcome to my blog!"}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet mi non elit dictum pretium in accumsan ligula. Praesent mi ex, consequat sit amet rutrum eget, lobortis in nunc. Integer congue fringilla nisi. Etiam non nulla fermentum felis rutrum rutrum. Vivamus aliquam massa lorem, sed fermentum enim sagittis vitae. Sed cursus faucibus ornare. Proin suscipit odio nec tortor viverra egestas. Curabitur a congue lacus. Sed varius lacus ipsum, id dictum sapien imperdiet ut. Cras at cursus sapien, id iaculis purus. Morbi quis tellus sed erat ornare maximus vel at tortor. Proin congue justo id mi interdum, varius suscipit tortor commodo."}),Object(b.jsx)("p",{children:"Donec ornare molestie odio ut blandit. Nullam quam ligula, tincidunt non venenatis quis, convallis eget arcu. Proin nec arcu eget neque imperdiet rutrum vitae eget ligula. Aliquam arcu orci, iaculis at purus et, dignissim iaculis diam. Nulla quis nunc id arcu dapibus malesuada eget quis ex. Sed sem odio, lobortis in orci in, hendrerit dictum libero. Suspendisse hendrerit faucibus blandit. Aenean interdum eget ipsum a tincidunt. Nullam vitae neque commodo, euismod leo non, porta enim. Sed urna velit, auctor nec nulla quis, feugiat faucibus lacus. Donec mauris dolor, vulputate eget dapibus a, scelerisque non lectus."})]})},M=function(){return Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{to:"/about",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{to:"/articles-list",children:"Articles"})})]})})},w=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)(m.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(M,{}),Object(b.jsx)("div",{id:"page-body",children:Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/",component:C,exact:!0}),Object(b.jsx)(d.a,{path:"/about",component:p}),Object(b.jsx)(d.a,{path:"/articles-list",component:A}),Object(b.jsx)(d.a,{path:"/article/:name",component:y}),Object(b.jsx)(d.a,{component:S})]})})]})})}}]),n}(s.a.Component),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),i(e),s(e),a(e),u(e)}))};u.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),F()}},[[38,1,2]]]);
//# sourceMappingURL=main.b7f983a6.chunk.js.map