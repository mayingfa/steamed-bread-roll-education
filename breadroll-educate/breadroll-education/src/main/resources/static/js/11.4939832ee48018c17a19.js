webpackJsonp([11],{JfOC:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"CourseDetail",data:function(){return{logoImg:s("ZftD"),locked:!0,isVip:!1,currentInfo:{userId:null,courseId:0,listId:0,playTime:0},courseSize:0,recommendCourse:null,active:0,teacher:{},course:{},courseList:[],playRecord:null,recordFlag:!1,playerOptions:{playbackRates:[.5,1,1.5,2],autoplay:!1,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/mp4",src:"http://localhost:9000/upload/course/HTML5+CSS3%E9%9B%B6%E5%9F%BA%E7%A1%80%E7%89%B9%E8%AE%AD%E7%8F%AD/16204635255731.1.mp4"}],poster:"",notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!0,durationDisplay:!0,remainingTimeDisplay:!0,fullscreenToggle:!0}}}},methods:{onPlayerEnded:function(t){if(++this.active>=this.courseList.length)this.$alert("恭喜您，课程观看完成！完结、撒花！","观看完成",{confirmButtonText:"确定",type:"success"});else{var e=this.courseList[this.active];this.currentInfo.listId=e.listId,this.locked=e.lockState&&!this.isVip,this.playerOptions.sources[0].src=e.videoUrl,this.currentInfo.playTime=0,this.playerOptions.autoplay=!0}},onPlayerTimeupdate:function(t){this.currentInfo.playTime=t.cache_.currentTime},playerReadied:function(t){t.currentTime(this.currentInfo.playTime)},watch:function(t){this.reqInfo(t.courseId)},playCourse:function(t,e){this.active=e,this.currentInfo.listId=t.listId,this.locked=t.lockState&&!this.isVip,this.playerOptions.sources[0].src=t.videoUrl,this.currentInfo.playTime=0,this.playerOptions.autoplay=!0},randomCourse:function(t){var e=this;this.$courseApi.queryCourseByRandom(t).then(function(t){e.recommendCourse=t.data})},refresh:function(){this.randomCourse(3)},openVip:function(){this.$router.push("/memberDetails")},reqInfo:function(t){var e=this;this.$courseApi.queryCourseInfoById(t).then(function(t){null!==t.data&&null!==t.data.course||e.$router.push("/notCourse"),e.teacher=t.data.teacher,e.course=t.data.course,e.locked=e.course.lockState,e.courseList=t.data.courseList,e.courseSize=e.courseList.length,e.playerOptions.poster=e.course.coverUrl,e.currentInfo.listId=e.courseList[0].listId,e.playerOptions.sources[0].src=e.courseList[0].videoUrl})},autoPlay:function(){this.playerOptions.sources[0].src=this.playRecord.url,this.currentInfo.playTime=this.playRecord.timeLength,this.playerOptions.autoplay=!0;for(var t=0;t<this.courseList.length;t++)this.playRecord.listName===this.courseList[t].listName&&(this.active=t,this.currentInfo.listId=this.courseList[t].listId);this.playRecord=null},closeJump:function(){this.playRecord=null},getStudyRecord:function(t){var e=this;this.$userApi.getPlayRecord(t).then(function(t){e.playRecord=t.data;var s=e;setTimeout(function(){s.playRecord=null},1e4)})},joinCourse:function(){var t=this,e={userId:this.$store.state.userInfo.userId,courseId:this.currentInfo.courseId,deleteState:!1};this.$userApi.addUserCourse(e).then(function(e){t.$message.success(e.message)})}},mounted:function(){var t=this;window.onbeforeunload=function(){null!=t.$store.state.userInfo&&t.recordFlag&&0!=t.currentInfo.playTime&&(t.currentInfo.userId=t.$store.state.userInfo.userId,t.$userApi.addPlayRecord(t.currentInfo))}},created:function(){if(this.currentInfo.courseId=this.$route.query.id,this.reqInfo(this.currentInfo.courseId),null!=this.$store.state.vipInfo&&null!=this.$store.state.vipInfo.isVip&&(this.isVip=this.$store.state.vipInfo.isVip),this.randomCourse(3),this.$cookie.getToken()){this.getStudyRecord(this.currentInfo.courseId);var t=this;setTimeout(function(){t.recordFlag=!0},5e3)}},beforeDestroy:function(){null!=this.$store.state.userInfo&&this.recordFlag&&0!=this.currentInfo.playTime&&(this.currentInfo.userId=this.$store.state.userInfo.userId,this.$userApi.addPlayRecord(this.currentInfo))}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"course-detail"},[s("div",{staticClass:"course-container"},[s("div",{staticClass:"course-player"},[null!=t.course?s("div",{staticClass:"player-container"},[t.locked?s("div",{staticClass:"locked"},[s("h2",[s("el-image",{staticStyle:{width:"100px",height:"100px",position:"absolute",left:"240px"},attrs:{src:t.logoImg}}),t._v(" "),s("span",{staticStyle:{position:"absolute",top:"50px",left:"350px"}},[t._v("开通VIP，即可解锁全部章节")])],1),t._v(" "),s("el-button",{attrs:{type:"primary",round:""},on:{click:t.openVip}},[t._v("VIP免费看")])],1):s("video-player",{ref:"videoPlayer",staticStyle:{width:"100%",height:"100%"},attrs:{playsinline:!0,options:t.playerOptions},on:{ready:t.playerReadied,ended:function(e){return t.onPlayerEnded(e)},timeupdate:function(e){return t.onPlayerTimeupdate(e)}}},[t._v("\n          您的浏览器不支持视频播放。\n        ")]),t._v(" "),null!=t.playRecord?s("div",{staticClass:"jump-play"},[s("el-button",{staticStyle:{"font-size":"20px",margin:"-2px 0 0 12px","vertical-align":"middle"},attrs:{type:"text",icon:"el-icon-close"},on:{click:t.closeJump}}),t._v(" "),s("span",[t._v("上次看到 "+t._s(t.playRecord.listName))]),t._v(" "),s("el-button",{staticStyle:{margin:"0 14px"},attrs:{type:"text"},on:{click:t.autoPlay}},[t._v("跳转播放")])],1):t._e()],1):t._e(),t._v(" "),s("div",{staticClass:"course-list"},[s("div",{staticClass:"header"},[s("p",{staticClass:"title"},[t._v(t._s(t.course.courseName))]),t._v(" "),s("p",{staticClass:"desc"},[s("span",[t._v("共"+t._s(t.courseList.length)+"节")]),t._v(" "),s("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),s("span",[t._v("时长"+t._s(t._f("changeHourMin")(t.course.courseTime)))]),t._v(" "),s("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),t.course.vipState?s("span",[t._v("VIP课程")]):s("span",[t._v("免费课程")])],1)]),t._v(" "),s("ul",{staticClass:"list-menu"},t._l(t.courseList,function(e,i){return s("li",{key:i,class:[t.active===i?"is-active":""],on:{click:function(s){return t.playCourse(e,i)}}},[s("i",{staticClass:"el-icon-video-play play-icon"}),t._v(" "),s("span",{staticClass:"list-name"},[t._v(t._s(e.listName))]),t._v(" "),s("span",{staticClass:"time"},[t._v("时长 "+t._s(t._f("timeFormate")(e.timeMinute))+":"+t._s(t._f("timeFormate")(e.timeSecond)))]),t._v(" "),e.lockState&&!t.isVip?s("i",{staticClass:"el-icon-lock lock"}):t._e()])}),0),t._v(" "),this.$store.state.userInfo&&this.$store.state.userInfo.userId?s("div",{staticClass:"course-operate"},[s("el-button",{attrs:{type:"primary",round:""},on:{click:t.joinCourse}},[t._v("加入课程")])],1):t._e()])]),t._v(" "),s("div",{staticClass:"course-box"},[s("div",{staticClass:"course-info"},[s("el-tabs",{attrs:{value:"first"}},[s("el-tab-pane",{attrs:{label:"课程简述",name:"first"}},[s("p",{staticClass:"title"},[t._v("课程简介")]),t._v(" "),s("p",{staticClass:"desc"},[t._v(t._s(t.course.description))]),t._v(" "),s("p",{staticClass:"title"},[t._v("讲师介绍")]),t._v(" "),s("div",{staticClass:"teacher-data"},[s("div",{staticClass:"header"},[s("el-avatar",{staticClass:"avatar",attrs:{size:40,src:t.teacher.avatarUrl}}),t._v(" "),s("span",{staticClass:"teacher-name"},[t._v(t._s(t.teacher.teacherName))])],1),t._v(" "),s("div",{staticClass:"content"},[t._v(t._s(t.teacher.description))])])])],1)],1),t._v(" "),s("div",{staticClass:"recommend"},[s("div",{staticClass:"title"},[t._v("为你推荐\n          "),s("el-button",{staticStyle:{float:"right","margin-top":"5px"},attrs:{type:"text",icon:"el-icon-refresh"},on:{click:t.refresh}},[t._v("换一批")])],1),t._v(" "),s("ul",{staticClass:"content"},t._l(t.recommendCourse,function(e,i){return s("li",{key:i,on:{click:function(s){return t.watch(e)}}},[s("el-image",{attrs:{src:e.coverUrl}}),t._v(" "),s("p",{staticClass:"course-name"},[t._v(t._s(e.courseName))]),t._v(" "),s("span",{staticClass:"time"},[t._v(t._s(t._f("changeHourMin")(e.courseTime)))])],1)}),0)])])])])},staticRenderFns:[]};var o=s("VU/8")(i,r,!1,function(t){s("frTs"),s("LZUM")},"data-v-1995df1a",null);e.default=o.exports},LZUM:function(t,e){},ZftD:function(t,e,s){t.exports=s.p+"static/img/nurse.64065ac.png"},frTs:function(t,e){}});
//# sourceMappingURL=11.4939832ee48018c17a19.js.map