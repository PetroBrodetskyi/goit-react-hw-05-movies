"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(861),i=n(439),r=n(757),s=n.n(r),c=n(443),o=n(689),u=n(791),f=n(937),h="Cast_imgthumb__dIt4L",l="Cast_castcard__znPnb",d="Cast_castList__ARoWn",m="Cast_castna__-LlMz",p=n(184),v=new c.T;function g(){var e=(0,u.useState)([]),t=(0,i.Z)(e,2),n=t[0],r=t[1],c=(0,u.useState)(null),g=(0,i.Z)(c,2),Z=g[0],j=g[1],k=(0,o.UO)().movieId;return(0,u.useEffect)((function(){function e(){return(e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.getMovieCredits(k);case 3:t=e.sent,r(t.cast),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[k]),(0,p.jsxs)(p.Fragment,{children:[n.length>0?(0,p.jsx)("div",{className:d,children:n.map((function(e){var t=e.id,n=e.character,a=e.original_name,i=e.profile_path;return(0,p.jsxs)("div",{className:l,children:[(0,p.jsx)("div",{children:(0,p.jsx)("img",{className:h,src:i?"https://image.tmdb.org/t/p/w300"+i:f,alt:"Foto"})}),(0,p.jsx)("h4",{children:n}),(0,p.jsx)("p",{children:a})]},t)}))}):(0,p.jsx)("p",{className:m,children:"N/A"}),Z&&(0,p.jsx)("h1",{children:"Oooops... Please reload page"})]})}},443:function(e,t,n){n.d(t,{T:function(){return c}});var a=n(683),i=n(671),r=n(144),s=n(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjE3ZGMxMzZlZGFlNjkwMTFmNTZiM2E0M2I3YjRjMCIsInN1YiI6IjY1NWUxZmNlMjY2Nzc4MDE0ZTk0OGE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jr2tp7PBlGeGpY0LXLeU6Aq5bMm4NVEy8ImAKNU6t7Q";var c=function(){function e(){(0,i.Z)(this,e),this.config={params:{query:"",page:1}}}return(0,r.Z)(e,[{key:"setSearchQuestion",value:function(e){this.config.params.query=e,this.config.params.page=1}},{key:"getTrending",value:function(){var e=this;return(0,s.Z)("trending/movie/day",this.config).then((function(t){var n=t.data;return e.config.params.page+=1,n}))}},{key:"searchMovies",value:function(){var e=this;return(0,s.Z)("search/movie",this.config).then((function(t){var n=t.data;return e.config.params.page+=1,n}))}},{key:"getMovieDetails",value:function(e){return(0,s.Z)("movie/".concat(e)).then((function(e){return e.data}))}},{key:"getMovieCredits",value:function(e){return(0,s.Z)("movie/".concat(e,"/credits")).then((function(e){return e.data}))}},{key:"getMovieReviews",value:function(e){return(0,s.Z)("movie/".concat(e,"/reviews")).then((function(e){return e.data}))}},{key:"setParams",value:function(e){this.config.params=(0,a.Z)((0,a.Z)({},this.config.params),e)}},{key:"setConfig",value:function(e){for(var t in e)this.config[t]=(0,a.Z)((0,a.Z)({},this.config[t]),e[t])}}]),e}()},937:function(e,t,n){e.exports=n.p+"static/media/img.c66ed8a59df59d4a941c.png"}}]);
//# sourceMappingURL=76.44b485f6.chunk.js.map