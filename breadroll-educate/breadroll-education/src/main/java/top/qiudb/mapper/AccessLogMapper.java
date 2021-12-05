package top.qiudb.mapper;

import org.mapstruct.Mapper;
import org.springframework.stereotype.Repository;
import top.qiudb.pojo.log.AccessLog;

/**
 * @author Qiu
 * @email qiudb.top@aliyun.com
 * @date 2021/6/20 20:18
 * @description 访问日志
 */
@Repository
@Mapper
public interface AccessLogMapper {
    //添加访问日志
    public Boolean insertAccessLog(AccessLog accessLog);
}
