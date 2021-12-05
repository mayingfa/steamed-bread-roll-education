package top.qiudb.service.log;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import top.qiudb.mapper.AccessLogMapper;
import top.qiudb.pojo.log.AccessLog;

import java.util.Date;

/**
 * @author Qiu
 * @email qiudb.top@aliyun.com
 * @date 2021/6/20 20:25
 * @description 访问日志
 */
@Service
public class AccessLogServiceImpl implements AccessLogService{
    @Autowired
    AccessLogMapper accessLogMapper;

    @Override
    public Boolean addAccessLog(AccessLog accessLog) {
        return accessLogMapper.insertAccessLog(accessLog);
    }
}
