package top.qiudb.controller.loginInfo;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import top.qiudb.pojo.AccessLog;
import top.qiudb.pojo.Order;
import top.qiudb.service.log.AccessLogService;
import top.qiudb.util.tools.ResultVO;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/log")
@Api(tags = "日志相关接口")
public class AccessLogController {
    @Autowired
    private AccessLogService accessLogService;

    @GetMapping("/all")
    @ResponseBody
    @ApiOperation("分页查询所有日志")
    public ResultVO queryAllLog(@RequestParam int pageNum, @RequestParam int pageSize){
        List<AccessLog> accessLogs = accessLogService.queryAllLog(pageNum, pageSize);
        Integer total = accessLogService.queryAllCount();
        if(accessLogs!=null && total!=null){
            Map<String,Object> data=new HashMap<>();
            data.put("list",accessLogs);
            data.put("total",total);
            return ResultVO.success("查询成功",data);
        }
        return ResultVO.error("查询失败");
    }

    @PostMapping("/searchLog")
    @ResponseBody
    @ApiOperation("搜索日志信息")
    public ResultVO searchOrder(@ApiParam("访问时间") String accessTime, @RequestParam int pageNum, @RequestParam int pageSize) throws ParseException {
        AccessLog accessLog = new AccessLog();
        if(accessTime!=null && accessTime.trim().length()!=0){
            SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd");
            Date date=simpleDateFormat.parse(accessTime);
            accessLog.setAccessTime(date);
        }
        List<AccessLog> accessLogs = accessLogService.queryLog(accessLog,pageNum,pageSize);
        Integer total = accessLogService.queryCount(accessLog);
        if(accessLogs!=null && total!=null){
            Map<String,Object> data=new HashMap<>();
            data.put("total",total);
            data.put("list",accessLogs);
            return ResultVO.success("查询成功",data);
        }
        return ResultVO.error("无查询结果");
    }

}