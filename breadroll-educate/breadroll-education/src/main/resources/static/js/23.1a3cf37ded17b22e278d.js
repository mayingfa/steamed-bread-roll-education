webpackJsonp([23],{"9z9f":function(e,t){},Xkum:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"AccountCenter",data:function(){var e=this;return{userVipInfo:null,dialogPhone:!1,dialogPass:!1,dialogCheck:!1,dialogLogout:!1,userInfo:null,accountData:{state:!0,value:"1325554003@qq.com"},phoneData:{state:!1,value:null},passwordData:{state:!0,value:"********"},logoutData:{state:!0,value:"注销后将无法恢复，请谨慎操作"},notEnable:!0,notMailEnable:!0,phoneForm:{passWord:"",userPhone:"",checkCode:""},phoneRules:{passWord:[{validator:function(t,s,a){""===s?a(new Error("请输入当前账号密码")):e.$loginApi.checkPassword(e.userInfo.userAccount,s).then(function(){a()}).catch(function(){a(new Error("密码错误"))})},trigger:"blur"}],userPhone:[{validator:function(t,s,a){if(""!==s)return e.$tools.checkPhone(s)&&a(),a(new Error("请输入正确的手机号"));a(new Error("请输入手机号"))},trigger:"blur"}],checkCode:[{required:!0,message:"请输入短信验证码",trigger:"blur"}]},passForm:{passWord:"",newPassWord:"",checkPassWord:""},passRules:{passWord:[{required:!0,message:"请输入当前账号密码",trigger:"blur"}],newPassWord:[{validator:function(t,s,a){if(""===s)a(new Error("请输入新密码"));else{if(s!==e.passForm.passWord)return e.$tools.checkPass(s)&&a(),a(new Error("密码必须字母开头，由数字和字母组合成，长度为6-18"));a(new Error("新密码和当前密码不能相同"))}},trigger:"blur"}],checkPassWord:[{validator:function(t,s,a){""===s?a(new Error("请再次输入密码")):s!==e.passForm.newPassWord?a(new Error("两次输入密码不一致!")):a()},trigger:"blur"}]},checkForm:{email:"",checkCode:""},deleteRules:{checkCode:[{required:!0,message:"请输入邮箱验证码",trigger:"blur"}]}}},methods:{onCopy:function(e){this.$message.success("复制成功！")},onError:function(e){this.$message.warning("复制失败！")},updatePhone:function(){this.dialogPhone=!0},sendCode:function(e,t){var s=this;this.codeButtonTemp=t.currentTarget,this.$refs.phoneForm.validateField("passWord",function(t){t||s.$refs.phoneForm.validateField("userPhone",function(t){t||s.$globalApi.getPhoneCode(e).then(function(){s.$message.success("发送成功"),s.$countDown.setItem(s.codeButtonTemp),s.notEnable=!1})})})},submitPhone:function(e){var t=this;this.$refs[e].validate(function(s){if(!s)return!1;t.$userApi.updatePhone(t.phoneForm).then(function(s){t.dialogPhone=!1,t.$message.success(s.message),t.$countDown.removeItem(t.codeButtonTemp),t.phoneData.state=!0,t.phoneData.value=t.phoneForm.userPhone,t.$userApi.getUserInfo().then(function(e){t.$store.commit("saveUserInfo",e.data)}),t.$refs[e].resetFields(),t.notEnable=!0})})},cancelPhone:function(e){this.$refs[e].resetFields(),this.dialogPhone=!1},updatePassWord:function(){this.dialogPass=!0},openVip:function(){this.$router.push("/memberDetails")},submitPass:function(e){var t=this;this.$refs[e].validate(function(s){if(!s)return!1;t.$userApi.updatePassWord(t.passForm).then(function(s){t.dialogPass=!1,t.$refs[e].resetFields(),t.$message.success(s.message),t.$alert("当前身份已过期，请重新登录","提示",{confirmButtonText:"确定",type:"warning",callback:function(){t.$cookie.clearToken(),t.$router.push("/loginForm")}})})})},cancelPass:function(e){this.$refs[e].resetFields(),this.dialogPass=!1},deleteMe:function(){this.checkForm.email=this.userInfo.userAccount,this.dialogCheck=!0},sendMailCode:function(e,t){var s=this;this.codeButtonTemp=t.currentTarget,this.$refs.checkForm.validateField("email",function(t){t||s.$globalApi.getEmailCode(e,s.userInfo.userName).then(function(){s.$message.success("发送成功"),s.$countDown.setItem(s.codeButtonTemp),s.notMailEnable=!1})})},cancelDelete:function(e){this.$refs[e].resetFields(),this.dialogCheck=!1},submitCheck:function(e){var t=this;this.$refs[e].validate(function(s){if(!s)return!1;t.$globalApi.checkEmailCode(t.checkForm).then(function(){t.dialogCheck=!1,t.$refs[e].resetFields(),t.dialogLogout=!0})})},cancelLogout:function(){this.dialogLogout=!1},submitLogout:function(){var e=this;this.$userApi.logoutUser().then(function(){e.dialogLogout=!1,e.$alert("注销成功，感谢您的使用","成功",{confirmButtonText:"确定",type:"success",callback:function(){e.$cookie.clearToken(),e.$router.push("/loginForm")}})})}},created:function(){null!=this.$store.state.userInfo&&(this.userInfo=this.$store.state.userInfo,this.accountData.value=this.userInfo.userAccount,this.userInfo.userPhone&&(this.phoneData.state=!0,this.phoneData.value=this.userInfo.userPhone)),null!=this.$store.state.vipInfo&&(this.userVipInfo=this.$store.state.vipInfo,console.log(this.userVipInfo))}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("ul",{staticClass:"account-center"},[s("li",{staticClass:"account-box"},[s("div",{staticClass:"state"},[e.accountData.state?s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#iconchenggong"}})]):s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#iconshibai"}})])]),e._v(" "),e._m(0),e._v(" "),s("div",{staticClass:"value"},[s("span",[e._v(e._s(e.accountData.value))])]),e._v(" "),s("div",{staticClass:"operate"},[s("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.accountData.value,expression:"accountData.value",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{plain:""}},[e._v("点击复制")])],1)]),e._v(" "),null!=e.userVipInfo&&e.userVipInfo.isVip?s("li",{staticClass:"account-box"},[s("div",{staticClass:"state"},[s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":e.userVipInfo.vipIcon}})])]),e._v(" "),e._m(1),e._v(" "),s("div",{staticClass:"value"},[s("span",[e._v(e._s(e.userVipInfo.vipName))]),e._v(" "),-1===e.userVipInfo.expireDate.indexOf("9999")?s("el-divider",{attrs:{direction:"vertical"}}):e._e(),e._v(" "),s("span",{staticStyle:{"font-size":"16px","font-weight":"300"}},[e._v(e._s(e._f("vipState")(e.userVipInfo.expireDate)))])],1),e._v(" "),s("div",{staticClass:"operate"},[s("el-button",{attrs:{plain:""},on:{click:e.openVip}},[e._v("立即续费")])],1)]):e._e(),e._v(" "),s("li",{staticClass:"account-box"},[s("div",{staticClass:"state"},[e.phoneData.state?s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#iconchenggong"}})]):s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#iconshibai"}})])]),e._v(" "),e._m(2),e._v(" "),s("div",{staticClass:"value"},[s("span",[e._v(e._s(e.phoneData.value))])]),e._v(" "),s("div",{staticClass:"operate"},[s("el-button",{attrs:{plain:""},on:{click:e.updatePhone}},[null==e.phoneData.value?s("span",[e._v("点击绑定")]):s("span",[e._v("更换号码")])])],1)]),e._v(" "),s("li",{staticClass:"account-box"},[s("div",{staticClass:"state"},[e.passwordData.state?s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#iconchenggong"}})]):s("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#iconshibai"}})])]),e._v(" "),e._m(3),e._v(" "),s("div",{staticClass:"value"},[s("span",[e._v(e._s(e.passwordData.value))])]),e._v(" "),s("div",{staticClass:"operate"},[s("el-button",{attrs:{plain:""},on:{click:e.updatePassWord}},[e._v("修改密码")])],1)]),e._v(" "),s("li",{staticClass:"account-box"},[s("div",{staticClass:"state"},[s("svg",{staticClass:"icon",staticStyle:{width:"21px",height:"21px"},attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icontishi"}})])]),e._v(" "),e._m(4),e._v(" "),s("div",{staticClass:"value"},[s("span",[e._v(e._s(e.logoutData.value))])]),e._v(" "),s("div",{staticClass:"operate"},[s("el-button",{attrs:{plain:""},on:{click:e.deleteMe}},[e._v("注销帐号")])],1)])]),e._v(" "),s("el-dialog",{attrs:{title:"绑定手机",visible:e.dialogPhone,"close-on-click-modal":!1,width:"30%",top:"15vh"},on:{"update:visible":function(t){e.dialogPhone=t}}},[s("h4",{staticStyle:{margin:"0 0 10px"}},[e._v("你正在进行敏感操作，继续操作前请验证您的身份")]),e._v(" "),s("el-form",{ref:"phoneForm",attrs:{model:e.phoneForm,rules:e.phoneRules}},[s("el-form-item",{attrs:{label:"密码验证",prop:"passWord",required:""}},[s("el-input",{attrs:{"show-password":"",placeholder:"请输入当前账号密码"},model:{value:e.phoneForm.passWord,callback:function(t){e.$set(e.phoneForm,"passWord",t)},expression:"phoneForm.passWord"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"手机号",prop:"userPhone",required:""}},[s("el-input",{attrs:{placeholder:"请输入要绑定的手机号"},model:{value:e.phoneForm.userPhone,callback:function(t){e.$set(e.phoneForm,"userPhone",t)},expression:"phoneForm.userPhone"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"'短信验证码",prop:"checkCode"}},[s("el-input",{attrs:{disabled:e.notEnable,placeholder:"请输入短信验证码"},model:{value:e.phoneForm.checkCode,callback:function(t){e.$set(e.phoneForm,"checkCode",t)},expression:"phoneForm.checkCode"}}),e._v(" "),s("el-button",{directives:[{name:"prevent-re-click",rawName:"v-prevent-re-click"}],staticStyle:{position:"absolute",right:"0","padding-bottom":"13px",top:"39px"},attrs:{plain:""},on:{click:function(t){return e.sendCode(e.phoneForm.userPhone,t)}}},[e._v("发送验证码")])],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){return e.cancelPhone("phoneForm")}}},[e._v("取 消")]),e._v(" "),s("el-button",{directives:[{name:"preventReClick",rawName:"v-preventReClick"}],attrs:{type:"primary"},on:{click:function(t){return e.submitPhone("phoneForm")}}},[e._v("确 定")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"修改密码",visible:e.dialogPass,"close-on-click-modal":!1,width:"30%",top:"20vh"},on:{"update:visible":function(t){e.dialogPass=t}}},[s("el-form",{ref:"passForm",attrs:{model:e.passForm,rules:e.passRules}},[s("el-form-item",{attrs:{label:"当前密码",prop:"passWord"}},[s("el-input",{attrs:{"show-password":"",placeholder:"请输入当前账号密码"},model:{value:e.passForm.passWord,callback:function(t){e.$set(e.passForm,"passWord",t)},expression:"passForm.passWord"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"新密码",prop:"newPassWord",required:"","inline-message":""}},[s("el-input",{attrs:{"show-password":"",placeholder:"新密码和当前密码不能相同"},model:{value:e.passForm.newPassWord,callback:function(t){e.$set(e.passForm,"newPassWord",t)},expression:"passForm.newPassWord"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"确认密码",prop:"checkPassWord",required:""}},[s("el-input",{attrs:{"show-password":"",placeholder:"确认密码和新密码保持一致"},model:{value:e.passForm.checkPassWord,callback:function(t){e.$set(e.passForm,"checkPassWord",t)},expression:"passForm.checkPassWord"}})],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){return e.cancelPass("passForm")}}},[e._v("取 消")]),e._v(" "),s("el-button",{directives:[{name:"preventReClick",rawName:"v-preventReClick"}],attrs:{type:"primary"},on:{click:function(t){return e.submitPass("passForm")}}},[e._v("确 定")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"帐号安全验证",visible:e.dialogCheck,"close-on-click-modal":!1,width:"30%",top:"25vh"},on:{"update:visible":function(t){e.dialogCheck=t}}},[s("h4",{staticStyle:{margin:"0 0 10px"}},[e._v("你正在进行敏感操作，继续操作前请验证您的身份")]),e._v(" "),s("el-form",{ref:"checkForm",attrs:{model:e.checkForm,rules:e.deleteRules}},[s("el-form-item",{attrs:{label:"验证邮箱",prop:"email",required:""}},[s("el-input",{attrs:{disabled:"",placeholder:"用于验证的邮箱"},model:{value:e.checkForm.email,callback:function(t){e.$set(e.checkForm,"email",t)},expression:"checkForm.email"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"邮箱验证码",prop:"checkCode"}},[s("el-input",{attrs:{"auto-complete":"new-password",autocomplete:"off",disabled:e.notMailEnable,placeholder:"请输入邮箱验证码"},model:{value:e.checkForm.checkCode,callback:function(t){e.$set(e.checkForm,"checkCode",t)},expression:"checkForm.checkCode"}}),e._v(" "),s("el-button",{directives:[{name:"prevent-re-click",rawName:"v-prevent-re-click"}],staticStyle:{position:"absolute",right:"0","padding-bottom":"13px",top:"39px"},attrs:{plain:""},on:{click:function(t){return e.sendMailCode(e.checkForm.email,t)}}},[e._v("发送验证码")])],1)],1),e._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){return e.cancelDelete("checkForm")}}},[e._v("取 消")]),e._v(" "),s("el-button",{directives:[{name:"preventReClick",rawName:"v-preventReClick"}],attrs:{type:"primary"},on:{click:function(t){return e.submitCheck("checkForm")}}},[e._v("确 定")])],1)],1),e._v(" "),s("el-dialog",{attrs:{visible:e.dialogLogout,"close-on-click-modal":!1,width:"40%",top:"25vh"},on:{"update:visible":function(t){e.dialogLogout=t}}},[s("div",{staticClass:"dialog-title",attrs:{slot:"title"},slot:"title"},[s("svg",{staticClass:"icon",staticStyle:{width:"20px",height:"20px"},attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icontishi_"}})]),e._v(" "),s("span",{staticClass:"title-text",staticStyle:{"font-size":"18px"}},[e._v("申请注销")]),e._v(" "),s("div",{staticClass:"button-right"},[s("span",{staticClass:"title-close",on:{click:e.cancelLogout}})])]),e._v(" "),s("div",{staticStyle:{"min-height":"280px"}},[s("h3",{staticStyle:{color:"#333333","margin-top":"5px"}},[e._v(e._s(e.userInfo.userName)+",您好")]),e._v(" "),s("p",[e._v("很遗憾，花卷教育无法继续为您提供服务，感谢您一直以来的陪伴。")]),e._v(" "),s("p",[e._v("注销帐号前，请检查是否满足一下条件，我们将对一下信息进行审核，以保证您的帐号安全；")]),e._v(" "),s("p",{staticClass:"tips"},[e._v("\n        1、当前帐号无违规记录"),s("br"),e._v("\n        2、帐号无任何纠纷"),s("br"),e._v("\n        3、注销后帐号内的所有信息将无法恢复\n      ")]),e._v(" "),s("p",{staticStyle:{"text-align":"center"}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.submitLogout}},[e._v("申请注销")])],1)])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"name"},[t("span",[this._v("我的帐号")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"name"},[t("span",[this._v("我的会员")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"name"},[t("span",[this._v("绑定手机")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"name"},[t("span",[this._v("登录密码")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"name"},[t("span",[this._v("注销账户")])])}]};var i=s("VU/8")(a,o,!1,function(e){s("9z9f")},"data-v-657d870e",null);t.default=i.exports}});
//# sourceMappingURL=23.1a3cf37ded17b22e278d.js.map