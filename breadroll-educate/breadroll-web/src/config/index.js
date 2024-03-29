import serverConfig from '../../static/config.json'
//全局配置信息
const config =  {
  //token在Cookie中存储的天数，默认7天
  getCookieExpires(){
    return 5;
  },

  // api请求基础路径
  getBaseUrl(){
    // if(serverConfig.isEnableDeployUrl){
    //   return serverConfig.deployUrl;
    // }
    const developmentUrl = "http://127.0.0.1:8000";
    const deployUrl = "http://edu.qiudb.top";
    return deployUrl;
  },

  //默认头像
  getDefaultAvatar(){
    return require("../assets/global/avatar_default.gif");
  },

  //默认背景图
  getDefaultBackground(){
    return require("../assets/global/background.jpg");
  },

};

export default config;
