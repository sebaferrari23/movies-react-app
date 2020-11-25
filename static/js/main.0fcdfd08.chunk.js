(this["webpackJsonpmovies-react-app"]=this["webpackJsonpmovies-react-app"]||[]).push([[0],{53:function(n,e,t){},72:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(0),i=t.n(a),o=t(19),c=t.n(o),s=t(6),p=(t(53),t(14)),l=t(3),u=t(4),d=t(5),b=t(17),f=t.n(b),x=t(20),g="SEARCH_MOVIES",j="FETCH_SEARCH_MOVIES",v="FETCH_POPULAR_MOVIES",h="FETCH_MOVIE",m="LOADING",O=t(21),y=t.n(O),_="5b94f6505413a44cf706f0b88c36656a",w="https://api.themoviedb.org/3",k="https://image.tmdb.org/t/p/",M="".concat(w,"/discover/movie"),S="".concat(w,"/search/movie"),E="".concat(w,"/movie");function F(){var n=Object(u.a)(["\n    & > a {\n        position: relative;\n        border-radius: 10px;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background-color: #151F2E;\n        box-shadow: 0 10px 30px rgba(0,0,0,.2);\n        &:before {\n            display: block;\n            content: '';\n            padding-bottom: 150%;\n        }\n        & > img {\n            position: absolute;\n            z-index: 1;\n            width: 100%;\n            height: 100%;\n            transition: all .4s ease-in-out .2s;\n            object-fit: cover;\n        }\n        & > img ~ .movie__content {\n            opacity: 0;\n            transition: all .4s ease-in-out;\n            transform: translateY(10px);\n        }\n        & > .movie__content {\n            position: absolute;\n            z-index: 10;\n            text-align: center;\n            color: #fff;\n            padding: 30px;\n            & > h3 {\n                font-size: 24px;\n                margin: 0 0 10px 0;\n            }\n            & > p {\n                margin: 0;\n                font-weight: 700;\n            }\n        }\n        &:hover {\n            & > img {\n                transform: scale(1.05);\n                filter: grayscale(80%) contrast(120%) blur(1px);\n                opacity: .5;\n                transition: all .4s ease-in-out;\n            }\n            & > .movie__content {\n                opacity: 1;\n                transition: all .4s ease-in-out .2s;\n                transform: translateY(0);\n            }\n        }\n    }\n"]);return F=function(){return n},n}var z=d.a.article(F()),A=function(n){var e=n.title,t=n.poster,a=n.year,i=n.id;return Object(r.jsx)(z,{children:Object(r.jsxs)(p.b,{to:"/movie/".concat(i),children:[t?Object(r.jsx)("img",{src:t,alt:e}):"",Object(r.jsxs)("div",{className:"movie__content",children:[Object(r.jsx)("h3",{children:e}),Object(r.jsx)("p",{children:a})]})]})})};function N(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 40px;\n"]);return N=function(){return n},n}var q=d.a.div(N()),C=Object(s.b)((function(n){return{popularMovies:n.movies.popularMovies}}))((function(n){var e=n.popularMovies,t=Object(s.c)();Object(a.useEffect)((function(){t(function(){var n=Object(x.a)(f.a.mark((function n(e){var t,r,a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.a.get(M,{params:{api_key:_,language:"en_US",page:1,include_adult:!1,"vote_average.gte":7}});case 3:t=n.sent,r=t.data,a=r.results.map((function(n){return{id:n.id,backPoster:n.backPoster?k+"w300/"+n.backdrop_path:"",popularity:n.popularity,title:n.title,year:n.release_date.substring(0,n.release_date.indexOf("-")),poster:n.poster_path?k+"w300"+n.poster_path:"",overview:n.overview,rating:n.vote_average}})),e({type:v,payload:a}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),e({type:v,payload:console.log(n.t0)});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}())}),[t]);var i=e&&e.map((function(n,e){return Object(r.jsx)(A,{id:n.id,title:n.title,poster:n.poster,year:n.year},e)}));return Object(r.jsx)(q,{children:i})}));function P(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 40px;\n"]);return P=function(){return n},n}var B=d.a.div(P()),I=Object(s.b)((function(n){return{searchMovies:n.movies.searchMovies}}))((function(n){var e=n.searchMovies,t=e&&e.map((function(n,e){return Object(r.jsx)(A,{id:n.id,title:n.title,poster:n.poster,year:n.year},e)}));return Object(r.jsx)(B,{children:t})}));function R(){var n=Object(u.a)(["\n    padding: 140px 0 50px 0;\n    & h2 {\n        margin: 0 0 40px 0;\n        font-size: 36px;\n    }\n"]);return R=function(){return n},n}var T=d.a.section(R()),D=Object(s.b)((function(n){return{query:n.movies.query,searchMovies:n.movies.searchMovies}}))((function(n){var e=n.searchMovies,t=n.query,a="";return a=t&&e?"Search results for: ".concat(t):"Most populars movies",Object(r.jsx)(T,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{children:a}),t&&e?Object(r.jsx)(I,{}):Object(r.jsx)(C,{})]})})}));function H(){var n=Object(u.a)(["\n    list-style: none;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 0;\n    margin: -7px;\n    & > li {\n        display: inline-flex;\n        align-items: center;\n        padding: 0 25px;\n        font-weight: 700;\n        text-transform: uppercase;\n        font-size: 11px;\n        height: 30px;\n        border-radius: 30px;\n        color: #151F2E;\n        background-color: #fff;\n        margin: 7px;\n    }\n"]);return H=function(){return n},n}function L(){var n=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 5fr 7fr;\n    grid-gap: 50px;\n    max-width: 980px;\n    align-items: center;\n    margin: 0 auto;\n    & > img {\n        max-width: 100%;\n        border-radius: 10px;\n        box-shadow: 0 10px 30px rgba(0,0,0,.2);\n        max-height: 600px;\n    }\n    & h2 {\n        font-size: 40px;\n        margin-top: 0;\n    }\n    & p {\n        font-size: 18px;\n        line-height: 150%;\n        margin-bottom: 40px;\n    }\n"]);return L=function(){return n},n}function U(){var n=Object(u.a)(["\n    padding: 40px 0 90px 0;\n    position: relative;\n    overflow: hidden;\n    margin-top: 90px;\n    min-height: calc(100vh - 180px);\n    display: flex;\n    align-items: center;\n    & .go-back {\n        color: #fff;\n        display: inline-block;\n        padding: 10px 0;\n        text-decoration: none;\n        margin-bottom: 30px;\n        & > i {\n            margin-right: 10px;\n        }\n    }\n    &:before {\n        display: block;\n        content: '';\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n        background-image: url(",");\n        position: absolute;\n        left: 0; right: 0; bottom: -10px; top: 0;\n        z-index: -1;\n        opacity: 0.2;\n        filter: blur(10px) grayscale(80%);\n    }\n"]);return U=function(){return n},n}var V=d.a.section(U(),(function(n){return n.image||""})),G=d.a.div(L()),J=d.a.ul(H()),Y=Object(s.b)((function(n){return{movie:n.movies.movie}}))((function(n){var e=n.movie,t=n.match,i=Object(s.c)();Object(a.useEffect)((function(){var n,e=t.params;i((n=e.id,function(){var e=Object(x.a)(f.a.mark((function e(t){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("".concat(E,"/").concat(n),{params:{api_key:_,language:"en_US"}});case 3:r=e.sent,a=r.data,t({type:h,payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:h,payload:console.log(e.t0)});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}()))}),[i]);var o=e.genres&&e.genres.map((function(n,e){return Object(r.jsx)("li",{children:n.name},e)}));return Object(r.jsx)(V,{image:"https://image.tmdb.org/t/p/w300".concat(e.backdrop_path),children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)(p.b,{className:"go-back",to:"/",children:[Object(r.jsx)("i",{className:"fas fa-chevron-left"}),Object(r.jsx)("strong",{children:"Go back"})]}),Object(r.jsxs)(G,{children:[e.poster_path?Object(r.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(e.poster_path),alt:e.title}):"",Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsx)("p",{children:e.overview}),Object(r.jsx)(J,{children:o})]})]})]})})})),W=t.p+"static/media/logo.103b5fa1.svg";function K(){var n=Object(u.a)(["\n    max-width: 400px;\n    width: 100%;\n    position: relative;\n    display: flex;\n    align-items: center;\n    & > i {\n        position: absolute;\n        right: 20px;\n        pointer-events: none;\n    }\n    & > input {\n        color: #fff;\n        padding: 0 60px 0 20px;\n        height: 50px;\n        background-color: #2B3442;\n        border-radius: 50px;\n        border: 1px solid #2B3442;\n        width: 100%;\n\t\toutline: none;\n\t\tfont-family: 'Noto Sans', sans-serif;\n\t\tfont-size: 16px;\n\t\t&:focus {\n\t\t\tborder-color: #61DBFB;\n\t\t}\n    }\n"]);return K=function(){return n},n}var Q=d.a.div(K()),X=Object(s.b)((function(n){return{query:n.movies.query,popularMovies:n.movies.popularMovies}}),(function(n){return{searchMovies:function(e){return n(function(n){return function(e){e({type:g,payload:n})}}(e))},fetchSearchMovies:function(e){return n(function(n){return function(){var e=Object(x.a)(f.a.mark((function e(t){var r,a,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=13;break}return e.prev=1,e.next=4,y.a.get(S,{params:{api_key:_,language:"en_US",page:1,include_adult:!1,"vote_average.gte":7,query:n}});case 4:r=e.sent,a=r.data,i=a.results&&a.results.map((function(n){return{id:n.id,backPoster:n.backPoster?k+"original"+n.backdrop_path:"",popularity:n.popularity,title:n.title,year:n.release_date?n.release_date.substring(0,n.release_date.indexOf("-")):"",poster:n.poster_path?k+"w300"+n.poster_path:"",overview:n.overview,rating:n.vote_average}})),t({type:j,payload:i}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t({type:j,payload:console.log(e.t0)});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}()}(e))}}}))((function(n){var e=n.query,t=n.searchMovies,a=n.fetchSearchMovies;return Object(r.jsxs)(Q,{children:[Object(r.jsx)("input",{type:"text",value:e,onChange:function(n){return e=n.target.value,t(e),void(e&&a(e));var e},placeholder:"Search movies..."}),Object(r.jsx)("i",{className:"fas fa-search"})]})}));function Z(){var n=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    color: #fff;\n    text-decoration: none;\n    position: relative;\n    padding-left: 55px;\n    &:hover {\n        & > img {\n            animation: App-logo-spin infinite 5s linear;\n        }\n    }\n    & > img {\n        max-width: 70px;\n        position: absolute;\n        left: -15px;\n    }\n    & > strong {\n        font-size: 22px;\n        text-transform: uppercase;\n    }\n    @keyframes App-logo-spin {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }\n"]);return Z=function(){return n},n}function $(){var n=Object(u.a)(["\n    height: 90px;\n    background-color: #151F2E;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 900;\n    box-shadow: 0 10px 30px rgba(0,0,0,.2);\n    & .container {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        height: 100%;\n    }\n"]);return $=function(){return n},n}var nn=d.a.header($()),en=Object(d.a)(p.c)(Z()),tn=function(){return Object(r.jsx)(nn,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)(en,{exact:!0,to:"/",children:[Object(r.jsx)("img",{src:W,alt:"Movies React App"}),Object(r.jsx)("strong",{children:"Movies React App"})]}),Object(r.jsx)(X,{})]})})};function rn(){var n=Object(u.a)(["\n    background-color: #151F2E;\n    text-align: center;\n    height: 90px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    & > p {\n        font-size: 12px;\n        margin: 0;\n        & > a {\n            color: #61DBFB;\n            text-decoration: none;\n            &:hover {\n                text-decoration: underline;\n            }\n        }\n    }\n"]);return rn=function(){return n},n}var an=d.a.section(rn()),on=function(){return Object(r.jsx)(an,{children:Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Movies App"})," create with ",Object(r.jsx)("a",{href:"https://reactjs.org",target:"_blank",rel:"nofollow noopener noreferrer",children:"React.js"}),", ",Object(r.jsx)("a",{href:"https://redux.js.org",target:"_blank",rel:"nofollow noopener noreferrer",children:"Redux"})," and ",Object(r.jsx)("a",{href:"https://developers.themoviedb.org/3",target:"_blank",rel:"nofollow noopener noreferrer",children:"The Movie Database API"})," by ",Object(r.jsx)("strong",{children:"Sebastian Ferrari"}),"."]})})};var cn=function(){return Object(r.jsxs)(p.a,{children:[Object(r.jsx)(tn,{}),Object(r.jsx)("main",{className:"App",children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/",exact:!0,component:D}),Object(r.jsx)(l.a,{path:"/movie/:id",component:Y})]})}),Object(r.jsx)(on,{})]})},sn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,73)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),a(n),i(n),o(n)}))},pn=t(13),ln=t(42),un=t(43),dn=t(12),bn={query:"",searchMovies:[],popularMovies:[],loading:!1,movie:[]},fn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return Object(dn.a)(Object(dn.a)({},n),{},{query:e.payload,loading:!1});case j:return Object(dn.a)(Object(dn.a)({},n),{},{searchMovies:e.payload,loading:!1});case v:return Object(dn.a)(Object(dn.a)({},n),{},{popularMovies:e.payload,loading:!1});case h:return Object(dn.a)(Object(dn.a)({},n),{},{movie:e.payload,loading:!1});case m:return Object(dn.a)(Object(dn.a)({},n),{},{loading:!0});default:return n}},xn=Object(pn.combineReducers)({movies:fn}),gn=[ln.a],jn=Object(pn.createStore)(xn,{},Object(un.composeWithDevTools)(pn.applyMiddleware.apply(void 0,gn)));c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(s.a,{store:jn,children:Object(r.jsx)(cn,{})})}),document.getElementById("root")),sn()}},[[72,1,2]]]);
//# sourceMappingURL=main.0fcdfd08.chunk.js.map