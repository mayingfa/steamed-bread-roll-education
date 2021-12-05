webpackJsonp([6],{"2FTK":function(t,e,s){t.exports=s.p+"static/img/logo.da699bc.png"},"7tAG":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"HomePage",data:function(){return{defaultAvatar:this.$config.getDefaultAvatar(),logoImg:s("2FTK"),logoWriteImg:s("PFZD"),token:this.$cookie.getToken(),user:this.$store.state.userInfo,queryKey:"",isSign:!1,courseType:[]}},methods:{queryCourse:function(t){null!==t&&this.$router.push({path:"/coursePage",query:{title:t.typeName,way:"type",id:t.typeId}})},searchCourse:function(t){null!==t&&0!==t.length&&(this.$router.push({path:"/coursePage",query:{way:"name",name:t}}),this.queryKey="")},toRegister:function(){this.$router.push("/registerForm")},toLogin:function(){this.$router.push("/loginForm")},toUser:function(){this.$router.push("/accountCenter")},toLearn:function(){this.$router.push("/courseCenter")},toOrder:function(){this.$router.push("/orderCenter")},toGold:function(){this.$router.push("/breadRollGold")},logout:function(){var t=this;this.$confirm("您确定要退出吗?","温馨提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$loginApi.logout().then(function(e){t.$notify({title:"成功",message:e.message,type:"success"}),t.$router.push("/loginForm"),t.$cookie.clearToken(),t.$store.commit("saveUserInfo","")})}).catch(function(){})},userSign:function(){var t=this;this.$userApi.userSign().then(function(e){t.isSign=!0,t.$message.success(e.message),t.$userApi.queryCoin().then(function(e){var s=e.data;t.$store.commit("saveUserCoin",s)})})},openMember:function(){this.$router.push("/memberDetails")}},computed:{newState:function(){return this.$store.state.messageState},userCoin:function(){return this.$store.state.userCoin},userName:function(){return this.$store.state.userInfo.userName},userAccount:function(){return this.$store.state.userInfo.userAccount},userAvatar:function(){if(null!=this.$store.state.userInfo&&null!=this.$store.state.userInfo.avatarUrl)return this.$config.getBaseUrl()+this.$store.state.userInfo.avatarUrl},isVip:function(){return null!=this.$store.state.vipInfo&&null!=this.$store.state.vipInfo.isVip&&this.$store.state.vipInfo.isVip},vipIcon:function(){if(null!=this.$store.state.vipInfo&&null!=this.$store.state.vipInfo.vipIcon)return this.$store.state.vipInfo.vipIcon}},mounted:function(){var t=this;this.$cookie.getToken()&&(this.$userApi.checkSign().then(function(e){t.isSign=e.data.isSign,t.$store.commit("saveMessageState",e.data.newMessage)}),this.$userApi.queryCoin().then(function(e){var s=e.data;t.$store.commit("saveUserCoin",s)})),this.$courseApi.queryCourseType().then(function(e){t.courseType=e.data})}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",{staticClass:"page"},[s("el-header",{staticClass:"el-header"},[s("el-menu",{staticClass:"navigation",attrs:{router:"","default-active":t.$route.path,mode:"horizontal","text-color":"#000","active-text-color":"#409EFF"}},[s("el-menu-item",{staticStyle:{padding:"0 25px","border-bottom":"none!important"},attrs:{index:"/homePage"}},[s("el-image",{staticStyle:{width:"200px",height:"60px"},attrs:{src:t.logoImg,fit:"fill"}})],1),t._v(" "),s("el-menu-item",{attrs:{index:"/homePage"}},[t._v("首页")]),t._v(" "),s("el-menu-item",{attrs:{index:"/coursePage"}},[t._v("课程")]),t._v(" "),s("el-menu-item",{attrs:{index:"/special-training"}},[t._v("特训班")]),t._v(" "),s("el-menu-item",{staticStyle:{"border-bottom":"1px solid transparent!important"}},[s("el-input",{staticStyle:{width:"450px"},attrs:{placeholder:"请输入内容"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchCourse(t.queryKey)}},model:{value:t.queryKey,callback:function(e){t.queryKey=e},expression:"queryKey"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.searchCourse(t.queryKey)}},slot:"append"})],1)],1),t._v(" "),s("el-submenu",{staticStyle:{"border-bottom":"none!important"},attrs:{index:""}},[s("template",{slot:"title"},[t._v("课程类别")]),t._v(" "),t._l(t.courseType,function(e,i){return s("el-menu-item",{key:i,staticClass:"course-style",on:{click:function(s){return t.queryCourse(e)}}},[t._v(t._s(e.typeName))])})],2),t._v(" "),s("el-menu-item",{staticStyle:{position:"absolute",right:"20px","border-bottom":"none!important"}},[t.token?s("div",[s("el-badge",{staticClass:"el-badge",attrs:{"is-dot":t.newState}},[s("router-link",{attrs:{to:"/personalMessage"}},[s("i",{staticClass:"iconfont iconxiaoxi11 animated rubberBand",staticStyle:{color:"#909399"},attrs:{title:"消息中心"}})])],1),t._v(" "),s("el-popover",{attrs:{placement:"bottom",width:"290",trigger:"hover"}},[s("div",{staticClass:"title"},[s("el-avatar",{staticClass:"avatar",attrs:{slot:"reference",size:70,src:t.userAvatar},slot:"reference"},[s("img",{attrs:{src:t.defaultAvatar,alt:"默认头像"}})]),t._v(" "),s("h2",[s("span",{staticClass:"name"},[t._v(t._s(t.userName))]),t._v(" "),t.isVip?s("svg",{staticClass:"icon vip animated rubberBand",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":t.vipIcon}})]):t._e()]),t._v(" "),s("span",{staticClass:"gold",attrs:{title:"花卷币"},on:{click:t.toGold}},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#iconmantou"}})]),t._v(" "),s("span",[t._v(t._s(t.userCoin))])]),t._v(" "),t.user.userAccount?s("p",[t._v("帐号:"+t._s(t.userAccount))]):t._e()],1),t._v(" "),s("div",{staticClass:"operate"},[s("el-button",{attrs:{type:"primary",disabled:t.isSign,size:"mini",round:"",icon:"el-icon-position"},on:{click:t.userSign}},[t.isSign?s("span",[t._v("今日已签到")]):s("span",[t._v("今日签到")])]),t._v(" "),s("el-button",{attrs:{type:"warning",size:"mini",round:"",icon:"el-icon-thumb"},on:{click:t.openMember}},[t._v("开通VIP")])],1),t._v(" "),s("div",{staticClass:"menu"},[s("el-button",{staticStyle:{display:"none"}},[t._v("我是无用的按钮")]),t._v(" "),s("el-button",{attrs:{plain:""},on:{click:t.toUser}},[s("i",{staticClass:"iconfont iconzhanghu"}),t._v("账户中心")]),t._v(" "),s("el-button",{attrs:{plain:""},on:{click:t.toLearn}},[s("i",{staticClass:"iconfont iconxinbaniconshangchuan-"}),t._v("学习中心")]),t._v(" "),s("el-button",{attrs:{plain:""},on:{click:t.toOrder}},[s("i",{staticClass:"iconfont icondingdan1"}),t._v("我的订单")]),t._v(" "),s("el-button",{attrs:{plain:""},on:{click:t.logout}},[s("i",{staticClass:"iconfont iconexit"}),t._v("安全退出")])],1),t._v(" "),s("el-avatar",{attrs:{slot:"reference",size:40,src:t.userAvatar},slot:"reference"},[s("img",{attrs:{src:t.defaultAvatar,alt:"默认头像"}})])],1)],1):s("div",[s("el-button",{on:{click:t.toLogin}},[t._v("登录")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.toRegister}},[t._v("注册")])],1)])],1)],1),t._v(" "),s("el-main",{staticClass:"el-main"},[s("router-view")],1),t._v(" "),s("el-footer",{staticClass:"el-footer"},[s("div",{staticClass:"friend-chain"},[s("ul",[s("li",[t._v("友情链接 :")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.qiudb.top/",target:"_blank",title:"个人博客"}},[t._v("个人博客")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://mall.qiudb.top/",target:"_blank",title:"花卷商城"}},[t._v("花卷商城")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://api.vvhan.com/",target:"_blank",title:"韩小韩API接口站"}},[t._v("韩小韩API接口站")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.uugai.com/",target:"_blank",title:"LOGO在线设计"}},[t._v("LOGO在线设计")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://translate.google.cn/",target:"_blank",title:"谷歌翻译"}},[t._v("谷歌翻译")])])])]),t._v(" "),s("div",{staticClass:"description"},[s("div",{staticClass:"contact-us"},[s("el-image",{staticClass:"qr-code",attrs:{src:t.logoWriteImg}})],1),t._v(" "),s("div",{staticClass:"nav"},[s("ul",{staticClass:"services"},[s("li",[s("span",{staticClass:"title"},[t._v("支持与服务")])]),t._v(" "),s("li",[s("a",[t._v("花卷会员")])]),t._v(" "),s("li",[s("a",[t._v("使用手册")])]),t._v(" "),s("li",[s("a",[t._v("课程动态")])])]),t._v(" "),s("ul",{staticClass:"services"},[s("li",[s("span",{staticClass:"title"},[t._v("快速入口")])]),t._v(" "),s("li",[s("a",[t._v("课程学习")])]),t._v(" "),s("li",[s("a",[t._v("个人中心")])]),t._v(" "),s("li",[s("a",[t._v("学习锦囊")])])]),t._v(" "),s("ul",{staticClass:"services"},[s("li",[s("span",{staticClass:"title"},[t._v("资源和社区")])]),t._v(" "),s("li",[s("a",[t._v("常见问题")])]),t._v(" "),s("li",[s("a",[t._v("支持计划")])]),t._v(" "),s("li",[s("a",[t._v("帮助中心")])])]),t._v(" "),s("ul",{staticClass:"services"},[s("li",[s("span",{staticClass:"title"},[t._v("关于")])]),t._v(" "),s("li",[s("a",[t._v("服务协议")])]),t._v(" "),s("li",[s("a",[t._v("意见反馈")])]),t._v(" "),s("li",[s("a",[t._v("隐私和法律声明")])])])]),t._v(" "),s("div",{staticClass:"about"},[s("h2",[t._v("联系我们")]),t._v(" "),s("div",[s("h3",[t._v("0765-000-0000")]),t._v(" "),s("p",[t._v("周一至周五 9:00 - 18:00")]),t._v(" "),s("p",[t._v("邮箱：email@email.mt")]),t._v(" "),s("p",[t._v("地址：河北省石家庄市裕华区")])])])]),t._v(" "),s("div",{staticClass:"copyright"},[t._v("© 2020 - "+t._s((new Date).getFullYear())+" 花卷集团版权所有  冀ICP备2021000352号  ")])])],1)},staticRenderFns:[]};var n=s("VU/8")(i,a,!1,function(t){s("ahHL"),s("zBiY")},"data-v-5e3521fc",null);e.default=n.exports},PFZD:function(t,e,s){t.exports=s.p+"static/img/logo-write.effa189.png"},ahHL:function(t,e){},zBiY:function(t,e){}});
//# sourceMappingURL=6.a624ed6ee9252a867129.js.map