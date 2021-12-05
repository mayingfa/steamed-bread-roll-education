package top.qiudb.pojo.log;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.util.Date;

/**
 * @author Qiu
 * @email qiudb.top@aliyun.com
 * @date 2021/6/20 20:15
 * @description 描述
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AccessLog {
    @Id
    private Integer id;
    private String userAccount;
    private String userName;
    private String userType;
    private Date accessTime;
    private String ipAddress;
    private String city;
}
