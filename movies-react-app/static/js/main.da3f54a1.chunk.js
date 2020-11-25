(this["webpackJsonpmovies-react-app"]=this["webpackJsonpmovies-react-app"]||[]).push([[0],{53:function(e,n,t){},72:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t(0),i=t.n(a),o=t(19),c=t.n(o),s=t(6),p=(t(53),t(14)),l=t(3),u=t(4),d=t(5),b=t(17),f=t.n(b),v=t(20),x="SEARCH_MOVIES",g="FETCH_SEARCH_MOVIES",j="FETCH_POPULAR_MOVIES",h="FETCH_MOVIE",m="LOADING",O=t(21),y=t.n(O),_="5b94f6505413a44cf706f0b88c36656a",w="https://api.themoviedb.org/3",k="https://image.tmdb.org/t/p/",M="".concat(w,"/discover/movie"),S="".concat(w,"/search/movie"),E="".concat(w,"/movie");function F(){var e=Object(u.a)(["\n    & > a {\n        position: relative;\n        border-radius: 10px;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background-color: #151F2E;\n        box-shadow: 0 10px 30px rgba(0,0,0,.2);\n        &:before {\n            display: block;\n            content: '';\n            padding-bottom: 150%;\n        }\n        & > img {\n            position: absolute;\n            z-index: 1;\n            width: 100%;\n            height: 100%;\n            transition: all .4s ease-in-out .2s;\n            object-fit: cover;\n        }\n        & > img ~ .movie__content {\n            opacity: 0;\n            transition: all .4s ease-in-out;\n            transform: translateY(10px);\n        }\n        & > .movie__content {\n            position: absolute;\n            z-index: 10;\n            text-align: center;\n            color: #fff;\n            padding: 30px;\n            & > h3 {\n                font-size: 24px;\n                margin: 0 0 10px 0;\n            }\n            & > p {\n                margin: 0;\n                font-weight: 700;\n            }\n        }\n        &:hover {\n            & > img {\n                transform: scale(1.05);\n                filter: grayscale(80%) contrast(120%) blur(1px);\n                opacity: .5;\n                transition: all .4s ease-in-out;\n            }\n            & > .movie__content {\n                opacity: 1;\n                transition: all .4s ease-in-out .2s;\n                transform: translateY(0);\n            }\n        }\n    }\n"]);return F=function(){return e},e}var z=d.a.article(F()),A=function(e){var n=e.title,t=e.poster,a=e.year,i=e.id;return Object(r.jsx)(z,{children:Object(r.jsxs)(p.b,{to:"movies-react-app/movie/".concat(i),children:[t?Object(r.jsx)("img",{src:t,alt:n}):"",Object(r.jsxs)("div",{className:"movie__content",children:[Object(r.jsx)("h3",{children:n}),Object(r.jsx)("p",{children:a})]})]})})};function N(){var e=Object(u.a)(["\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 40px;\n"]);return N=function(){return e},e}var q=d.a.div(N()),C=Object(s.b)((function(e){return{popularMovies:e.movies.popularMovies}}))((function(e){var n=e.popularMovies,t=Object(s.c)();Object(a.useEffect)((function(){t(function(){var e=Object(v.a)(f.a.mark((function e(n){var t,r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(M,{params:{api_key:_,language:"en_US",page:1,include_adult:!1,"vote_average.gte":7}});case 3:t=e.sent,r=t.data,a=r.results.map((function(e){return{id:e.id,backPoster:e.backPoster?k+"w300/"+e.backdrop_path:"",popularity:e.popularity,title:e.title,year:e.release_date.substring(0,e.release_date.indexOf("-")),poster:e.poster_path?k+"w300"+e.poster_path:"",overview:e.overview,rating:e.vote_average}})),n({type:j,payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n({type:j,payload:console.log(e.t0)});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}())}),[t]);var i=n&&n.map((function(e,n){return Object(r.jsx)(A,{id:e.id,title:e.title,poster:e.poster,year:e.year},n)}));return Object(r.jsx)(q,{children:i})}));function P(){var e=Object(u.a)(["\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-gap: 40px;\n"]);return P=function(){return e},e}var B=d.a.div(P()),I=Object(s.b)((function(e){return{searchMovies:e.movies.searchMovies}}))((function(e){var n=e.searchMovies,t=n&&n.map((function(e,n){return Object(r.jsx)(A,{id:e.id,title:e.title,poster:e.poster,year:e.year},n)}));return Object(r.jsx)(B,{children:t})}));function R(){var e=Object(u.a)(["\n    padding: 140px 0 50px 0;\n    & h2 {\n        margin: 0 0 40px 0;\n        font-size: 36px;\n    }\n"]);return R=function(){return e},e}var T=d.a.section(R()),D=Object(s.b)((function(e){return{query:e.movies.query,searchMovies:e.movies.searchMovies}}))((function(e){var n=e.searchMovies,t=e.query;if(t&&n)var a="Search results for: ".concat(t);else a="Most populars movies";return Object(r.jsx)(T,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{children:a}),t&&n?Object(r.jsx)(I,{}):Object(r.jsx)(C,{})]})})}));function H(){var e=Object(u.a)(["\n    list-style: none;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    padding: 0;\n    margin: -7px;\n    & > li {\n        display: inline-flex;\n        align-items: center;\n        padding: 0 25px;\n        font-weight: 700;\n        text-transform: uppercase;\n        font-size: 11px;\n        height: 30px;\n        border-radius: 30px;\n        color: #151F2E;\n        background-color: #fff;\n        margin: 7px;\n    }\n"]);return H=function(){return e},e}function L(){var e=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 5fr 7fr;\n    grid-gap: 50px;\n    max-width: 980px;\n    align-items: center;\n    margin: 0 auto;\n    & > img {\n        max-width: 100%;\n        border-radius: 10px;\n        box-shadow: 0 10px 30px rgba(0,0,0,.2);\n        max-height: 600px;\n    }\n    & h2 {\n        font-size: 40px;\n        margin-top: 0;\n    }\n    & p {\n        font-size: 18px;\n        line-height: 150%;\n        margin-bottom: 40px;\n    }\n"]);return L=function(){return e},e}function U(){var e=Object(u.a)(["\n    padding: 40px 0 90px 0;\n    position: relative;\n    overflow: hidden;\n    margin-top: 90px;\n    min-height: calc(100vh - 180px);\n    display: flex;\n    align-items: center;\n    & .go-back {\n        color: #fff;\n        display: inline-block;\n        padding: 10px 0;\n        text-decoration: none;\n        margin-bottom: 30px;\n        & > i {\n            margin-right: 10px;\n        }\n    }\n    &:before {\n        display: block;\n        content: '';\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: cover;\n        background-image: url(",");\n        position: absolute;\n        left: 0; right: 0; bottom: -10px; top: 0;\n        z-index: -1;\n        opacity: 0.2;\n        filter: blur(10px) grayscale(80%);\n    }\n"]);return U=function(){return e},e}var V=d.a.section(U(),(function(e){return e.image||""})),G=d.a.div(L()),J=d.a.ul(H()),Y=Object(s.b)((function(e){return{movie:e.movies.movie}}))((function(e){var n=e.movie,t=e.match,i=Object(s.c)();Object(a.useEffect)((function(){var e,n=t.params;i((e=n.id,function(){var n=Object(v.a)(f.a.mark((function n(t){var r,a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.a.get("".concat(E,"/").concat(e),{params:{api_key:_,language:"en_US"}});case 3:r=n.sent,a=r.data,t({type:h,payload:a}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),t({type:h,payload:console.log(n.t0)});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()))}),[i]);var o=n.genres&&n.genres.map((function(e,n){return Object(r.jsx)("li",{children:e.name},n)}));return Object(r.jsx)(V,{image:"https://image.tmdb.org/t/p/w300".concat(n.backdrop_path),children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)(p.b,{className:"go-back",to:"/movies-react-app",children:[Object(r.jsx)("i",{className:"fas fa-chevron-left"}),Object(r.jsx)("strong",{children:"Go back"})]}),Object(r.jsxs)(G,{children:[n.poster_path?Object(r.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(n.poster_path),alt:n.title}):"",Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:n.title}),Object(r.jsx)("p",{children:n.overview}),Object(r.jsx)(J,{children:o})]})]})]})})})),W=t.p+"static/media/logo.103b5fa1.svg";function K(){var e=Object(u.a)(["\n    max-width: 400px;\n    width: 100%;\n    position: relative;\n    display: flex;\n    align-items: center;\n    & > i {\n        position: absolute;\n        right: 20px;\n        pointer-events: none;\n    }\n    & > input {\n        color: #fff;\n        padding: 0 60px 0 20px;\n        height: 50px;\n        background-color: #2B3442;\n        border-radius: 50px;\n        border: 1px solid #2B3442;\n        width: 100%;\n\t\toutline: none;\n\t\tfont-family: 'Noto Sans', sans-serif;\n\t\tfont-size: 16px;\n\t\t&:focus {\n\t\t\tborder-color: #61DBFB;\n\t\t}\n    }\n"]);return K=function(){return e},e}var Q=d.a.div(K()),X=Object(s.b)((function(e){return{query:e.movies.query,popularMovies:e.movies.popularMovies}}),(function(e){return{searchMovies:function(n){return e(function(e){return function(n){n({type:x,payload:e})}}(n))},fetchSearchMovies:function(n){return e(function(e){return function(){var n=Object(v.a)(f.a.mark((function n(t){var r,a,i;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=13;break}return n.prev=1,n.next=4,y.a.get(S,{params:{api_key:_,language:"en_US",page:1,include_adult:!1,"vote_average.gte":7,query:e}});case 4:r=n.sent,a=r.data,i=a.results&&a.results.map((function(e){return{id:e.id,backPoster:e.backPoster?k+"original"+e.backdrop_path:"",popularity:e.popularity,title:e.title,year:e.release_date?e.release_date.substring(0,e.release_date.indexOf("-")):"",poster:e.poster_path?k+"w300"+e.poster_path:"",overview:e.overview,rating:e.vote_average}})),t({type:g,payload:i}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),t({type:g,payload:console.log(n.t0)});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()}(n))}}}))((function(e){var n=e.query,t=e.searchMovies,a=e.fetchSearchMovies;return Object(r.jsxs)(Q,{children:[Object(r.jsx)("input",{type:"text",value:n,onChange:function(e){return n=e.target.value,t(n),void(n&&a(n));var n},placeholder:"Search movies..."}),Object(r.jsx)("i",{className:"fas fa-search"})]})}));function Z(){var e=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    color: #fff;\n    text-decoration: none;\n    position: relative;\n    padding-left: 55px;\n    &:hover {\n        & > img {\n            animation: App-logo-spin infinite 5s linear;\n        }\n    }\n    & > img {\n        max-width: 70px;\n        position: absolute;\n        left: -15px;\n    }\n    & > strong {\n        font-size: 22px;\n        text-transform: uppercase;\n    }\n    @keyframes App-logo-spin {\n        from {\n            transform: rotate(0deg);\n        }\n        to {\n            transform: rotate(360deg);\n        }\n    }\n"]);return Z=function(){return e},e}function $(){var e=Object(u.a)(["\n    height: 90px;\n    background-color: #151F2E;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 900;\n    box-shadow: 0 10px 30px rgba(0,0,0,.2);\n    & .container {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        height: 100%;\n    }\n"]);return $=function(){return e},e}var ee=d.a.header($()),ne=Object(d.a)(p.c)(Z()),te=function(){return Object(r.jsx)(ee,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)(ne,{exact:!0,to:"/movies-react-app",children:[Object(r.jsx)("img",{src:W,alt:"Movies React App"}),Object(r.jsx)("strong",{children:"Movies React App"})]}),Object(r.jsx)(X,{})]})})};function re(){var e=Object(u.a)(["\n    background-color: #151F2E;\n    text-align: center;\n    height: 90px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    & > p {\n        font-size: 12px;\n        margin: 0;\n        & > a {\n            color: #61DBFB;\n            text-decoration: none;\n            &:hover {\n                text-decoration: underline;\n            }\n        }\n    }\n"]);return re=function(){return e},e}var ae=d.a.section(re()),ie=function(){return Object(r.jsx)(ae,{children:Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Movies App"})," create with ",Object(r.jsx)("a",{href:"https://reactjs.org",target:"_blank",rel:"nofollow noopener noreferrer",children:"React.js"}),", ",Object(r.jsx)("a",{href:"https://redux.js.org",target:"_blank",rel:"nofollow noopener noreferrer",children:"Redux"})," and ",Object(r.jsx)("a",{href:"https://developers.themoviedb.org/3",target:"_blank",rel:"nofollow noopener noreferrer",children:"The Movie Database API"})," by ",Object(r.jsx)("strong",{children:"Sebastian Ferrari"}),"."]})})};var oe=function(){return Object(r.jsxs)(p.a,{children:[Object(r.jsx)(te,{}),Object(r.jsx)("main",{className:"App",children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/movies-react-app",exact:!0,component:D}),Object(r.jsx)(l.a,{path:"/movies-react-app/movie/:id",component:Y})]})}),Object(r.jsx)(ie,{})]})},ce=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,73)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),r(e),a(e),i(e),o(e)}))},se=t(13),pe=t(42),le=t(43),ue=t(12),de={query:"",searchMovies:[],popularMovies:[],loading:!1,movie:[]},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case x:return Object(ue.a)(Object(ue.a)({},e),{},{query:n.payload,loading:!1});case g:return Object(ue.a)(Object(ue.a)({},e),{},{searchMovies:n.payload,loading:!1});case j:return Object(ue.a)(Object(ue.a)({},e),{},{popularMovies:n.payload,loading:!1});case h:return Object(ue.a)(Object(ue.a)({},e),{},{movie:n.payload,loading:!1});case m:return Object(ue.a)(Object(ue.a)({},e),{},{loading:!0});default:return e}},fe=Object(se.combineReducers)({movies:be}),ve=[pe.a],xe=Object(se.createStore)(fe,{},Object(le.composeWithDevTools)(se.applyMiddleware.apply(void 0,ve)));c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(s.a,{store:xe,children:Object(r.jsx)(oe,{})})}),document.getElementById("root")),ce()}},[[72,1,2]]]);
//# sourceMappingURL=main.da3f54a1.chunk.js.map