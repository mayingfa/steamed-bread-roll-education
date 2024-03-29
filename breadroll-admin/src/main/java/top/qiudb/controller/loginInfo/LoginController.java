package top.qiudb.controller.loginInfo;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import top.qiudb.pojo.*;
import top.qiudb.service.course.ArticleService;
import top.qiudb.service.course.CoachApplyService;
import top.qiudb.service.course.CourseService;
import top.qiudb.service.log.AccessLogService;
import top.qiudb.service.marketing.OrderService;
import top.qiudb.service.marketing.SystemMessageService;
import top.qiudb.service.user.ManagerService;
import top.qiudb.service.user.UserService;
import top.qiudb.util.tools.IpToAddressUtil;
import top.qiudb.util.tools.IpUtil;
import top.qiudb.util.tools.ResultVO;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@Api(tags="存放登录信息操作接口")
public class LoginController {
    private static final String DEFAULT_AVATAR ="/static/images/avat.gif";

    @Autowired
    private ManagerService managerService;
    @Autowired
    private SystemMessageService systemMessageService;
    @Autowired
    private CourseService courseService;
    @Autowired
    private UserService userService;
    @Autowired
    private ArticleService articleService;
    @Autowired
    private OrderService orderService;
    @Autowired
    private CoachApplyService coachApplyService;
    @Autowired
    private AccessLogService accessLogService;


    @GetMapping("/page/to")
    @ApiOperation("离开登录页面")
    public String leaveLogin(String userName,HttpServletRequest request){
        HttpSession session = request.getSession();
        session.setAttribute("userName",userName);
        return "redirect:/page";
    }

    @GetMapping("/page")
    @ApiOperation("跳到主页面")
    public String goToPage(HttpServletRequest request){
        HttpSession session = request.getSession(true);
        String userName=session.getAttribute("userName").toString();
        Manager manager;
        if(userName.contains("@")){
            manager = managerService.queryManagerByAccount(userName);
        }else{
            manager = managerService.queryManagerByName(userName);
        }
        if(StringUtils.isBlank(manager.getAvatarUrl())){
            manager.setAvatarUrl(DEFAULT_AVATAR);
        }
        AccessLog accessLog = new AccessLog();
        accessLog.setUserAccount(manager.getManagerAccount());
        accessLog.setUserName(manager.getManagerName());
        String ip = IpUtil.getIpAddress(request);
        accessLog.setAccessTime(new Date());
        accessLog.setIpAddress(ip);
        String ipCity = IpToAddressUtil.getCityInfo(ip);
        accessLog.setCity(ipCity);
        accessLog.setUserType(manager.getDepartmentName()+"管理员");
        if(session.getAttribute("log")==null){
            Boolean success = accessLogService.addAccessLog(accessLog);
            if(success){
                session.setAttribute("log",accessLog);
            }
        }
        session.setAttribute("manager",manager);
        return "index";
    }

    @GetMapping("/goToForgetPassWord")
    @ApiOperation("跳到忘记密码界面")
    public String goToForgetPassWord(){
        return "global/forget-password";
    }


    @GetMapping("/page/home/data")
    @ResponseBody
    @ApiOperation("查询home界面数据")
    public ResultVO goToHome(){
        List<SystemMessage> systemMessages= systemMessageService.queryTotalMessage();
        List<Course> courses=courseService.queryAllOnlineCourse();
        List<CoachApply> coachApplies = coachApplyService.queryRetreat();
        List<User> users=userService.queryAllUser();
        List<Article> articles= articleService.queryAllArticle();
        List<Order> orders= orderService.queryAllOrder();
        Map<String,Object> data=new HashMap<>();
        data.put("messageList",systemMessages);
        data.put("coachApplies",coachApplies);
        data.put("coursesNum",courses.size());
        data.put("usersNum",users.size());
        data.put("articlesNum",articles.size());
        data.put("orderNum",orders.size());
        data.put("total",systemMessages.size());
        return ResultVO.success("成功",data);
    }

    @GetMapping("/page/home/table")
    @ResponseBody
    @ApiOperation("查询不同专业的课程数量")
    public ResultVO queryTypeCount(){
        List<CountTypeCourse> courseTypes=courseService.queryTypeCourse();
        Map<String,Object> data=new HashMap<>();
        data.put("list",courseTypes);
        return ResultVO.success("查询成功",data);
    }
}
