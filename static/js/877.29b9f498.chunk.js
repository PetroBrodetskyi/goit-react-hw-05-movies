"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[877],{877:function(e,i,n){n.r(i),n.d(i,{default:function(){return m}});var t=n(861),a=n(439),r=n(757),s=n.n(r),c=n(443),o=n(894),l=n(791),u=n(689),f=n(87),h={muviecontainer:"MuvieDetails_muviecontainer__p-71P",imgcontainer:"MuvieDetails_imgcontainer__M5CSP",infoflex:"MuvieDetails_infoflex__NMdnl",infotitle:"MuvieDetails_infotitle__e6Zww",addititle:"MuvieDetails_addititle__LO7X+",infolink:"MuvieDetails_infolink__KU2Wv"},v=n(184),d=new c.T;function m(){var e,i,n=(0,l.useState)(null),r=(0,a.Z)(n,2),c=r[0],m=r[1],p=(0,l.useState)(null),g=(0,a.Z)(p,2),x=g[0],j=g[1],Z=(0,u.UO)().movieId,k=null!==(e=null===(i=(0,l.useRef)((0,u.TH)()).current.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/",_=(0,u.s0)();(0,l.useEffect)((function(){function e(){return(e=(0,t.Z)(s().mark((function e(){var i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.getMovieDetails(Z);case 3:i=e.sent,m(i),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[Z]);var M=c||{},N=M.title,y=M.poster_path,w=M.overview,I=M.vote_average,b=M.genres;return(0,v.jsxs)("div",{className:h.muviecontainer,children:[(0,v.jsx)(o.z,{text:"Go back",handleClick:function(){return _(k)}}),c&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:h.imgcontainer,children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w400"+y,alt:"poster"}),(0,v.jsxs)("div",{className:h.overcard,children:[(0,v.jsx)("h1",{children:N}),(0,v.jsxs)("p",{children:["User score: ",(10*I).toFixed(),"%"]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:w||"N/A"}),(0,v.jsx)("h2",{children:"Genres"}),(0,v.jsx)("p",{children:b.length>0?b.map((function(e){return e.name})):"N/A"})]})]}),(0,v.jsxs)("div",{className:h.infotitle,children:[(0,v.jsx)("h3",{className:h.addititle,children:"More information..."}),(0,v.jsxs)("ul",{className:h.infoflex,children:[(0,v.jsx)("li",{children:(0,v.jsx)(f.rU,{className:h.infolink,to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(f.rU,{className:h.infolink,to:"reviews",children:"Reviews"})})]}),(0,v.jsx)(l.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:(0,v.jsx)(u.j3,{})})]})]}),x&&(0,v.jsx)("h1",{children:"Oooops... Please reload page"})]})}},443:function(e,i,n){n.d(i,{T:function(){return c}});var t=n(683),a=n(671),r=n(144),s=n(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjE3ZGMxMzZlZGFlNjkwMTFmNTZiM2E0M2I3YjRjMCIsInN1YiI6IjY1NWUxZmNlMjY2Nzc4MDE0ZTk0OGE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jr2tp7PBlGeGpY0LXLeU6Aq5bMm4NVEy8ImAKNU6t7Q";var c=function(){function e(){(0,a.Z)(this,e),this.config={params:{query:"",page:1}}}return(0,r.Z)(e,[{key:"setSearchQuestion",value:function(e){this.config.params.query=e,this.config.params.page=1}},{key:"getTrending",value:function(){var e=this;return(0,s.Z)("trending/movie/day",this.config).then((function(i){var n=i.data;return e.config.params.page+=1,n}))}},{key:"searchMovies",value:function(){var e=this;return(0,s.Z)("search/movie",this.config).then((function(i){var n=i.data;return e.config.params.page+=1,n}))}},{key:"getMovieDetails",value:function(e){return(0,s.Z)("movie/".concat(e)).then((function(e){return e.data}))}},{key:"getMovieCredits",value:function(e){return(0,s.Z)("movie/".concat(e,"/credits")).then((function(e){return e.data}))}},{key:"getMovieReviews",value:function(e){return(0,s.Z)("movie/".concat(e,"/reviews")).then((function(e){return e.data}))}},{key:"setParams",value:function(e){this.config.params=(0,t.Z)((0,t.Z)({},this.config.params),e)}},{key:"setConfig",value:function(e){for(var i in e)this.config[i]=(0,t.Z)((0,t.Z)({},this.config[i]),e[i])}}]),e}()}}]);
//# sourceMappingURL=877.29b9f498.chunk.js.map