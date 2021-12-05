package top.qiudb.service.log;
import top.qiudb.pojo.AccessLog;

import java.util.List;

/**
 * @author Qiu
 * @email qiudb.top@aliyun.com
 * @date 2021/6/20 20:24
 * @description 访问日志
 */
public interface AccessLogService {
    //添加访问日志
    public Boolean addAccessLog(AccessLog accessLog);

    //分页所有日志
    List<AccessLog> queryAllLog(int pageNum, int pageSize);

    //查询日志数量
    Integer queryAllCount();

    //搜索日志信息
    List<AccessLog> queryLog(AccessLog accessLog,int pageNum, int pageSize);

    //搜索日志数量
    Integer queryCount(AccessLog accessLog);
}
