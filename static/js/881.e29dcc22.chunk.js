"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{351:function(e,t,n){n.d(t,{O:function(){return h}});var a=n(689),i=n(87),r="MuviesListItem_postertitle__42Jhl",s="MuviesListItem_postercard__zxsc2",c="MuviesListItem_linkwithoutunderline__nIrpC",o=n(937),u=n(184);function l(e){var t=e.data,n=t.id,l=t.poster_path,f=t.title,h=(0,a.TH)();return(0,u.jsx)("div",{className:s,children:(0,u.jsxs)(i.rU,{to:"/movies/".concat(n),state:{from:h},className:c,children:[(0,u.jsx)("img",{src:l?"https://image.tmdb.org/t/p/w300"+l:o,alt:"poster"}),(0,u.jsx)("h2",{className:r,children:f})]})})}var f="MuviesList_listflex__phMZH";function h(e){var t=e.data;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:f,children:t.map((function(e){return(0,u.jsx)(l,{data:e},"".concat(e.id).concat(e.title))}))})})}},881:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(861),i=n(439),r=n(757),s=n.n(r),c=n(443),o=n(894),u=n(351),l=n(791),f=n(87),h="Movies_formflex__vzXln",v="Movies_inputstyle__G71gk",m=n(184),p=new c.T;function d(){var e=(0,f.lr)(),t=(0,i.Z)(e,2),n=t[0],r=t[1],c=n.get("search"),d=(0,l.useState)(c||""),g=(0,i.Z)(d,2),Z=g[0],x=g[1],_=(0,l.useState)([]),j=(0,i.Z)(_,2),M=j[0],k=j[1],y=(0,l.useState)(null),N=(0,i.Z)(y,2),I=N[0],w=N[1];return(0,l.useEffect)((function(){function e(){return(e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p.setSearchQuestion(c),e.next=4,p.searchMovies();case 4:t=e.sent,k(t.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}c&&(x(c),function(){e.apply(this,arguments)}())}),[c]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault();var t=e.target.movie.value;t&&r({search:t})},children:[(0,m.jsx)("input",{className:v,type:"text",name:"movie",placeholder:"Name movie",autoFocus:!0,value:Z,onChange:function(e){return x(e.target.value)}}),(0,m.jsx)(o.z,{text:"Search"})]}),M.length>0&&(0,m.jsx)(u.O,{data:M}),I&&(0,m.jsx)("h1",{children:"Oooops... Please reload page"})]})}},443:function(e,t,n){n.d(t,{T:function(){return c}});var a=n(683),i=n(671),r=n(144),s=n(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjE3ZGMxMzZlZGFlNjkwMTFmNTZiM2E0M2I3YjRjMCIsInN1YiI6IjY1NWUxZmNlMjY2Nzc4MDE0ZTk0OGE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jr2tp7PBlGeGpY0LXLeU6Aq5bMm4NVEy8ImAKNU6t7Q";var c=function(){function e(){(0,i.Z)(this,e),this.config={params:{query:"",page:1}}}return(0,r.Z)(e,[{key:"setSearchQuestion",value:function(e){this.config.params.query=e,this.config.params.page=1}},{key:"getTrending",value:function(){var e=this;return(0,s.Z)("trending/movie/day",this.config).then((function(t){var n=t.data;return e.config.params.page+=1,n}))}},{key:"searchMovies",value:function(){var e=this;return(0,s.Z)("search/movie",this.config).then((function(t){var n=t.data;return e.config.params.page+=1,n}))}},{key:"getMovieDetails",value:function(e){return(0,s.Z)("movie/".concat(e)).then((function(e){return e.data}))}},{key:"getMovieCredits",value:function(e){return(0,s.Z)("movie/".concat(e,"/credits")).then((function(e){return e.data}))}},{key:"getMovieReviews",value:function(e){return(0,s.Z)("movie/".concat(e,"/reviews")).then((function(e){return e.data}))}},{key:"setParams",value:function(e){this.config.params=(0,a.Z)((0,a.Z)({},this.config.params),e)}},{key:"setConfig",value:function(e){for(var t in e)this.config[t]=(0,a.Z)((0,a.Z)({},this.config[t]),e[t])}}]),e}()},937:function(e,t,n){e.exports=n.p+"static/media/img.c66ed8a59df59d4a941c.png"}}]);
//# sourceMappingURL=881.e29dcc22.chunk.js.map