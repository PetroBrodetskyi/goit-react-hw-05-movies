"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[577],{811:function(e,t,n){n.d(t,{O:function(){return h}});var a=n(689),i=n(87),r="MuviesListItem_postertitle__42Jhl",s="MuviesListItem_postercard__zxsc2",c="MuviesListItem_linkwithoutunderline__nIrpC",o=n.p+"static/media/img.745e7aac3671316f965a.png",u=n(184);console.log("img:",o);function l(e){var t=e.data,n=t.id,l=t.poster_path,f=t.title,h=(0,a.TH)();return(0,u.jsx)("div",{className:s,children:(0,u.jsxs)(i.rU,{to:"/movies/".concat(n),state:{from:h},className:c,children:[(0,u.jsx)("img",{src:l?"https://image.tmdb.org/t/p/w300"+l:o,alt:"poster"}),(0,u.jsx)("h2",{className:r,children:f})]})})}var f="MuviesList_listflex__phMZH";function h(e){var t=e.data;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:f,children:t.map((function(e){return(0,u.jsx)(l,{data:e},"".concat(e.id).concat(e.title))}))})})}},936:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(861),i=n(439),r=n(757),s=n.n(r),c=n(443),o=n(811),u=n(791),l="Home_headertitle__B+5dH",f=n(184),h=new c.T;function d(){var e=(0,u.useState)([]),t=(0,i.Z)(e,2),n=t[0],r=t[1],c=(0,u.useState)(null),d=(0,i.Z)(c,2),m=d[0],v=d[1];return(0,u.useEffect)((function(){function e(){return(e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.getTrending();case 3:t=e.sent,r(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,f.jsxs)(f.Fragment,{children:[n.length>0&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{className:l,children:"Trending today"}),(0,f.jsx)(o.O,{data:n})]}),m&&(0,f.jsx)("h1",{children:"Oooops... Please reload page"})]})}},443:function(e,t,n){n.d(t,{T:function(){return c}});var a=n(683),i=n(671),r=n(144),s=n(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjE3ZGMxMzZlZGFlNjkwMTFmNTZiM2E0M2I3YjRjMCIsInN1YiI6IjY1NWUxZmNlMjY2Nzc4MDE0ZTk0OGE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jr2tp7PBlGeGpY0LXLeU6Aq5bMm4NVEy8ImAKNU6t7Q";var c=function(){function e(){(0,i.Z)(this,e),this.config={params:{query:"",page:1}}}return(0,r.Z)(e,[{key:"setSearchQuestion",value:function(e){this.config.params.query=e,this.config.params.page=1}},{key:"getTrending",value:function(){var e=this;return(0,s.Z)("trending/movie/day",this.config).then((function(t){var n=t.data;return e.config.params.page+=1,n}))}},{key:"searchMovies",value:function(){var e=this;return(0,s.Z)("search/movie",this.config).then((function(t){var n=t.data;return e.config.params.page+=1,n}))}},{key:"getMovieDetails",value:function(e){return(0,s.Z)("movie/".concat(e)).then((function(e){return e.data}))}},{key:"getMovieCredits",value:function(e){return(0,s.Z)("movie/".concat(e,"/credits")).then((function(e){return e.data}))}},{key:"getMovieReviews",value:function(e){return(0,s.Z)("movie/".concat(e,"/reviews")).then((function(e){return e.data}))}},{key:"setParams",value:function(e){this.config.params=(0,a.Z)((0,a.Z)({},this.config.params),e)}},{key:"setConfig",value:function(e){for(var t in e)this.config[t]=(0,a.Z)((0,a.Z)({},this.config[t]),e[t])}}]),e}()}}]);
//# sourceMappingURL=577.43e38bb6.chunk.js.map