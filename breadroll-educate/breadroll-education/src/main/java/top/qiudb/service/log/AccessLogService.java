package top.qiudb.service.log;

import top.qiudb.pojo.log.AccessLog;

/**
 * @author Qiu
 * @email qiudb.top@aliyun.com
 * @date 2021/6/20 20:24
 * @description 访问日志
 */
public interface AccessLogService {
    //添加访问日志
    public Boolean addAccessLog(AccessLog accessLog);
}
